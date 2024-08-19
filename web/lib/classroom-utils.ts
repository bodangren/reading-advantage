import { headers } from "next/headers";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { Role } from "@/server/models/enum";

async function fetchData(endpoint: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/${endpoint}`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    return res.json();
  } catch (error) {
    console.error("Failed to parse JSON", error);
  }
}

export default async function ClassroomData(params: {
  params: { classroomId: string };
}) {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/auth/signin");
  }
  if (user.role === Role.TEACHER) {
    return redirect("/teacher/my-classes");
  }

  const [allClassroom, allStudent, allTeachers] = await Promise.all([
    fetchData(""),
    fetchData("students"),
    fetchData("teachers"),
  ]);

  const teacherId = allTeachers.teachers
    .filter((teacher: { id: string; role: any }) =>
      teacher.role.includes("teacher") && teacher.id === user.id
    )
    .map((teacher: { id: string }) => teacher.id);

  const studentInEachClass = allClassroom.data
    .filter(
      (classroom: {
        student: any;
        archived: boolean;
        teacherId: string;
        id: string;
      }) =>
        !classroom.archived &&
        classroom.teacherId === teacherId[0] &&
        classroom.id === params.params.classroomId
    )
    .flatMap((classroom: { student: any }) =>
      classroom.student
        ? classroom.student.map((students: { studentId: string }) =>
          students.studentId
        )
        : ["No student in this class"]
    );

  const matchedStudents = allStudent.students.filter((student: { id: string }) =>
    studentInEachClass.includes(student.id)
  );

  const classrooms = allClassroom.data.filter(
    (classroom: { id: string }) => classroom.id === params.params.classroomId
  );

  const studentsMapped = classrooms.flatMap((classStudent: { student: { studentId: string; lastActivity: any; }[]; classroomName: any; id: any; }) =>
    classStudent.student
      ? classStudent.student.map(
        (studentData: { studentId: string; lastActivity: any }) => {
          const matchedStudent = matchedStudents.find(
            (s: { id: string; }) => s.id === studentData.studentId
          );
          return {
            studentId: studentData.studentId,
            lastActivity: studentData.lastActivity,
            studentName: matchedStudent ? matchedStudent.name : "Unknown",
            classroomName: classStudent.classroomName,
            classroomId: classStudent.id,
            email: matchedStudent ? matchedStudent.email : "Unknown",
            xp: matchedStudent ? matchedStudent.xp : 0,
            level: matchedStudent ? matchedStudent.level : 0,
          };
        }
      )
      : []
  );

  const studentEmail = allStudent.students.map(
    (student: { id: string; email: string }) => {
      return {
        email: student.email,
        studentId: student.id,
      };
    }
  );

  return {
    studentsMapped,
    allClassroom,
    allStudent,
    allTeachers,
    teacherId,
    studentInEachClass,
    matchedStudents,
    classrooms,
    studentEmail,
  };
}


export async function StudentsData({
  params,
}: {
  params: { studentId: string };
}) {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/auth/signin");
  }
  if (user.role === Role.TEACHER) {
    return redirect("/teacher/my-classes");
  }

  // get student role data from database
  async function getAllStudentData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/students`,
        {
          method: "GET",
          headers: headers(),
        }
      );

      return res.json();
    } catch (error) {
      console.error("Failed to parse JSON", error);
    }
  }
  const allStudent = await getAllStudentData();

  // get classroom data from database
  async function getAllClassroom() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/`,
        {
          method: "GET",
          headers: headers(),
        }
      );

      return res.json();
    } catch (error) {
      console.error("Failed to parse JSON", error);
    }
  }
  const allClassroom = await getAllClassroom();

  // get matched classroom
  function getMatchedClassrooms(studentId: string) {
    let matchedClassrooms: any[] = [];
    const teacherId = (user as { id: string }).id;

    allStudent.students.forEach((student: { id: string }) => {
      allClassroom.data.forEach(
        (classroom: { student: any; archived: boolean; teacherId: string }) => {
          if (!classroom.archived && classroom.teacherId === teacherId) {
            if (classroom.student) {
              classroom.student.forEach((students: { studentId: string }) => {
                if (students.studentId === studentId) {
                  if (!matchedClassrooms.includes(classroom)) {
                    matchedClassrooms.push(classroom);
                  }
                }
              });
            } else {
              // matchedClassrooms.push("No student found in this class");
            }
          }
        }
      );
    });
    return matchedClassrooms;
  }
  const matchedClassrooms = getMatchedClassrooms(params.studentId);

  // get teacher classroom
  function getTeacherClassroom() {
    let teacherClassrooms: any[] = [];
    const teacherId = (user as { id: string }).id;
    allClassroom.data.forEach(
      (classroom: { teacherId: string; archived: boolean }) => {
        if (!classroom.archived && classroom.teacherId === teacherId) {
          teacherClassrooms.push(classroom);
        }
      }
    );
    return teacherClassrooms;
  }
  const teacherClassrooms = getTeacherClassroom();

  // student not enroll class
  function getDifferentItems(arrayA: any[], arrayB: any[]) {
    return arrayA
      .filter((item) => !arrayB.includes(item))
      .concat(arrayB.filter((item) => !arrayA.includes(item)));
  }
  const differentClasses = getDifferentItems(
    teacherClassrooms,
    matchedClassrooms
  );

  // get matched students
  function getMatchedStudents() {
    let matchedStudents: any[] = [];
    const teacherId = (user as { id: string }).id;

    allStudent.students.forEach((student: { id: string }) => {
      allClassroom.data.forEach(
        (classroom: { student: any; archived: boolean; teacherId: string }) => {
          if (!classroom.archived && classroom.teacherId === teacherId) {
            if (classroom.student) {
              classroom.student.forEach((students: { studentId: string }) => {
                if (students.studentId === student.id) {
                  matchedStudents.push(student);
                }
              });
            } else {
              // matchedStudents.push("No student found in this class")
            }
          }
        }
      );
    });

    return matchedStudents;
  }
  const matchedStudents = getMatchedStudents();

  //get student in different classes
  const studentInDifferentClasses = () => {
    let studentsInChecked: any[] = [];
    differentClasses.forEach(
      (classroom: {
        student: any;
        isChecked: boolean;
        classroomId: string;
      }) => {
        if (classroom.student) {
          classroom.student.forEach((students: { studentId: string }) => {
            studentsInChecked.push(students.studentId);
          });
        } else {
          // studentsInChecked.push("No student in this class");
        }
      }
    );
    return studentsInChecked;
  };
  const studentInDifferent = studentInDifferentClasses();

  // get matched name of students to display on web
  function getMatchedNameOfStudents(studentId: string) {
    let matchedStudents: any[] = [];

    allStudent.students.forEach((student: { id: string }) => {
      if (student.id === studentId) {
        matchedStudents.push(student);
      }
    });

    return matchedStudents;
  }
  const matchedNameOfStudents = getMatchedNameOfStudents(params.studentId);

  // get student in different classes
  const studentIdInMatchedClassrooms = matchedClassrooms.flatMap(
    (classroom) => {
      if (classroom && classroom.student && classroom.student.length === 0) {
        return "This classroom has no student";
      } else {
        return classroom && classroom.student
          ? classroom.student.map(
            (student: { studentId: string }) => student.studentId
          )
          : [];
      }
    }
  );

  // get id of student in matched classrooms
  function getIdOfStudentInMatchedClassrooms(studentId: string) {
    let updateStudentIdInMatchedClassrooms: any[] = [];
    studentIdInMatchedClassrooms.forEach((id) => {
      if (id !== studentId) {
        updateStudentIdInMatchedClassrooms.push(id);
      }
    });
    return updateStudentIdInMatchedClassrooms;
  }
  const updateStudentIdInMatchedClassrooms = getIdOfStudentInMatchedClassrooms(
    params.studentId
  );

  const updateStudentListBuilder = updateStudentIdInMatchedClassrooms.map(
    (studentId) => ({ studentId, lastActivity: new Date() })
  );

  return {
    matchedClassrooms,
    teacherClassrooms,
    differentClasses,
    matchedStudents,
    studentInDifferent,
    matchedNameOfStudents,
    updateStudentListBuilder,
  };
}

export async function ClassesData() {
  const user = await getCurrentUser();
  // console.log('user', user);
  
  if (!user) {
    return redirect("/auth/signin");
  }
  // if (user.role === Role.TEACHER) {
  //   return redirect("/teacher/my-classes");
  // }

  // get data from database
  async function getAllClassroom() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom`,
        {
          method: "GET",
          headers: headers(),
        }
      );
      return res.json();
    } catch (error) {
      console.error("Failed to parse JSON", error);
    }
  }
  const allClassroom = await getAllClassroom();
  

  // get student role data from database
  async function getAllStudentData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/students`,
        {
          method: "GET",
          headers: headers(),
        }
      );

      return res.json();
    } catch (error) {
      console.error("Failed to parse JSON", error);
    }
  }
  const allStudent = await getAllStudentData();

  // get teacher data from database
  async function getAllTeachersData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/teachers`,
        {
          method: "GET",
          headers: headers(),
        }
      );

      return res.json();
    } catch (error) {
      console.error("Failed to parse JSON", error);
    }
  }
  const allTeachers = await getAllTeachersData();

  // filter only teacher login
  const teacherId = () => {
    let teacherId: String[] = [];
    allTeachers.teachers.forEach((teacher: { id: string; role: any }) => {
      if (
        teacher.role &&
        teacher.role.includes("teacher") &&
        teacher.id === user.id
      ) {
        teacherId.push(teacher.id);
      }
    });
    return teacherId;
  };
  const teacher = teacherId();

  const getClassroomOfThatTeacher = () => {
    let classrooms: any[] = [];
    allClassroom.data.forEach(
      (classroom: { student: any; archived: boolean; teacherId: string }) => {
        if (!classroom.archived && classroom.teacherId === teacher[0]) {
          classrooms.push(classroom);
        }
      }
    );
    return classrooms;
  };
  const classes = getClassroomOfThatTeacher();

  // get matched students
  function getMatchedStudents() {
    let matchedStudents: any[] = [];
    const teacherId = (user as { id: string }).id;

    allStudent.students.forEach((student: { id: string }) => {
      allClassroom.data.forEach(
        (classroom: { student: any; archived: boolean; teacherId: string }) => {
          if (!classroom.archived && classroom.teacherId === teacherId) {
            if (classroom.student) {
              classroom.student.forEach((students: { studentId: string }) => {
                if (
                  students.studentId === student.id &&
                  !matchedStudents.includes(student)
                ) {
                  matchedStudents.push(student);
                }
              });
            }
          }
        }
      );
    });

    return matchedStudents;
  }
  const matchedStudents = getMatchedStudents();

  return {
    allClassroom,
    allTeachers,
    teacherId,
    teacher,
    classes,
    matchedStudents,
  };
}
