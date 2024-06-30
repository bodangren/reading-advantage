export default {
  pages: {
    indexPage: {
      description:
        "แอพพลิเคชั่นสำหรับการอ่านที่ควบคุมและเพิ่มความสามารถในการอ่านด้วย AI ขณะนี้อยู่ระหว่างทดสอบระบบ",
      getStartedButton: "มาเริ่มต้นกันเลย",
    },
    loginPage: {
      loginDescription: "เข้าสู่ระบบด้วยบัญชีของคุณ",
      backButton: "กลับ",
    },
    student: {
      readPage: {
        //Headings
        articleSelection: "การเลือกบทความ",
        // nextquiz/[articleId] page
        article: {
          articleNotFound: "ไม่พบบทความ",
          articleInsufficientLevel:
            "คุณไม่สามารถอ่านบทความนี้ได้เนื่องจากระดับการอ่านของคุณไม่เพียงพอ",
          //headings
          readBefore: "คุณเคยอ่านบนทความนี้แล้ว",
          readBeforeDescription:
            "คุณอาจลองอ่านและฝึกฝนอีกครั้งเพื่อปรับปรุงทักษะการอ่านของคุณ และนี่คือผลลัพธ์จากการอ่านครั้งก่อนหน้า",
          // stats
          status: "สถานะ",
          statusText: {
            completed: "เสร็จสิ้น",
            uncompleted: "ยังไม่เสร็จสิ้น",
          },
          statusDescription: "อัพเดทล่าสุดเมื่อ {date}",
          score: "คะแนนการทำแบบทดสอบ",
          scoreText: "{score}",
          scoreDescription: "จาก {total} คำถาม",
          rated: "คะแนน",
          ratedText: "{rated} คะแนน",
          ratedDescription: "คุณให้คะแนนบทความนี้",
          timeSpend: "เวลาที่ใช้ไป",
          timeSpendText: "{time}",
          timeSpendDescription: "ในการทำแบบทดสอบ {total} คำถาม",
          scoreSuffix: {
            point: "คะแนน",
            points: "คะแนน",
          },
          secondSuffix: {
            second: "วินาที",
            seconds: "วินาที",
          },
        },
      },
      historyPage: {
        title: "ประวัติสำหรับ {userName}",
        //Headings
        reminderToReread: "เตือนในการอ่านซ้ำ",
        articleRecords: "บทความที่อ่านแล้ว",
        //descriptions
        reminderToRereadDescription:
          "คุณอาจต้องการลองอ่านบทความหนึ่งในบทความเหล่านี้อีกครั้งเพื่อดูว่าคุณได้ปรับปรุงการอ่านของคุณได้หรือไม่",
        articleRecordsDescription: "บันทึกการอ่านของคุณจะปรากฏที่นี่",
      },
      practicePage: {
        //Headings
        flashcard: "การ์ดประโยค",
        manage: "จัดการ",
        orderSentences: "เรียงประโยค",
        clozeTest: "ทดสอบเติมคำในช่องว่าง",
        orderWords: "เรียงคำ",
        matching: "การจับคู่",
        //descriptions
        flashcardDescription:
          "คุณสามารถฝึกทักษะการอ่านของคุณด้วยการ์ดประโยคที่คุณบันทึกไว้จะปรากฏที่นี่",
        savedSentences: "ประโยคที่บันทึกไว้",
        noSavedSentences: "คุณยังไม่มีประโยคที่บันทึกไว้",
        savedSentencesDescription: "คุณมีประโยคที่บันทึกไว้ {total} ประโยค",
        added: "เพิ่มเมื่อ {date}",
        deleteButton: "ลบ",
        neverPracticeButton: "ไม่ต้องฝึกประโยคนี้อีก",
        toast: {
          success: "สำเร็จ",
          successDescription: "ลบประโยคที่บันทึกไว้สำเร็จ",
          error: "เกิดข้อผิดพลาด",
          errorDescription: "เกิดข้อผิดพลาดขณะลบประโยคที่บันทึกไว้",
        },
        flashcardPractice: {
          buttonAgain: "อีกครั้ง",
          buttonHard: "ยาก",
          buttonGood: "ดี",
          buttonEasy: "ง่าย",
          flipCard: "พลิกการ์ด",
          nextButton: "ถัดไป",
          yourXp: "คุณได้รับ {xp} XP สำหรับกิจกรรมนี้",
        },
        orderSentencesPractice: {
          orderSentences: "เรียงประโยค",
          orderSentencesDescription:
            "นี่คือบางประโยคจากหนึ่งในบทความที่คุณได้อ่าน จัดเรียงประโยคให้มีลำดับที่ดูมีเหตุผลสำหรับคุณ หากลำดับเดียวกันกับในบทความ คุณจะได้รับ 5 XP.",
          saveOrder: "บันทึก & ดำเนินการต่อในภายหลัง",
          errorOrder: "กรุณาเรียงลำดับให้ถูกต้อง",
        },
        clozeTestPractice: {
          clozeTest: "ทดสอบเติมคำในช่องว่าง",
          clozeTestDescription:
            "นี่คือบางประโยคจากหนึ่งในบทความที่คุณได้อ่าน ใส่คำที่ขาดหายไปให้ถูกต้อง หากคุณตอบถูก คุณจะได้รับ 2 XP.",
          saveOrder: "บันทึก & ดำเนินการต่อในภายหลัง",
          errorOrder: "กรุณาเรียงลำดับให้ถูกต้อง",
          submitArticle: "ตรวจสอบคำตอบของคุณ",
          nextPassage: "ตอนต่อไป",
        },
        orderWordsPractice: {
          orderWords: "เรียงคำ",
          orderWordsDescription:
            "นี่คือประโยคหนึ่งจากข้อความที่คุณได้อ่านไปแล้ว จัดเรียงคำให้เป็นประโยคที่มีความหมายสำหรับคุณ หากลำดับคำเหมือนกับในข้อความที่อ่าน คุณจะได้รับ 5 XP.",
          saveOrder: "บันทึก & ดำเนินการต่อในภายหลัง",
          errorOrder: "กรุณาเรียงลำดับให้ถูกต้อง",
          submitArticle: "ตรวจสอบคำตอบของคุณ",
          nextPassage: "ตอนต่อไป",
          tryToSortThisSentence: "ลองเรียงประโยคนี้",
        },
        matchingPractice: {
          matching: "การจับคู่",
          matchingDescription:
            "จับคู่ประโยคกับการแปลของมัน ถ้าคุณจับคู่ทุกประโยคถูกต้อง คุณจะได้รับ 5 XP.",
          saveOrder: "บันทึก & ดำเนินการต่อในภายหลัง",
          errorOrder: "กรุณาเรียงลำดับให้ถูกต้อง",
          submitArticle: "ตรวจสอบคำตอบของคุณ",
          nextPassage: "ตอนต่อไป",
          minSentencesAlert:
            "คุณต้องมีประโยคที่บันทึกไว้อย่างน้อยห้าประโยคเพื่อเล่นกิจกรรมนี้",
        },
      },
    },
    teacher: {
      studentProgressPage: {
        activity: "กิจกรรม",
        level: "ระดับ",
        levelDescription: "ระดับปัจจุบันของคุณคือ {level}",
        progressOf: "ความคืบหน้าของ {nameOfStudent}",
        noUserProgress:
          "ไม่มีความคืบหน้าของผู้ใช้เนื่องจากนักเรียนไม่เคยอ่านบทความหรือกิจกรรมอื่น ๆ",
      },
    },
  },
  components: {
    mainNav: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      contact: "ติดต่อ",
      authors: "ผู้เขียน",
    },
    userAccountNav: {
      level: "ระดับ {level}",
      settings: "การตั้งค่า",
      signOut: "ออกจากระบบ",
    },
    themeSwitcher: {
      dark: "โหมดมืด",
      light: "โหมดสว่าง",
      system: "ตามระบบ",
    },
    localeSwitcher: {
      en: "English",
      th: "ไทย",
      cn: "简体字",
      tw: "繁體字",
      vi: "Tiếng Việt",
    },
    sidebarNav: {
      read: "อ่าน",
      history: "ประวัติ",
      sentences: "ประโยค",
      reports: "รายงาน",
      vocabulary: "คำศัพท์",
    },
    sidebarTeacherNav: {
      myClasses: "ชั้นเรียนของฉัน",
      myStudents: "นักเรียนของฉัน",
      classRoster: "บัญชีรายชื่อนักเรียน",
      reports: "รายงาน",
      passages: "บทความ",
      assignments: "การบ้าน",
    },
    articleRecordsTable: {
      title: "ชื่อบทความ",
      date: "วันที่",
      rated: "คะแนน",
      search: "ค้นหาชื่อบทความ...",
      previous: "ก่อนหน้า",
      next: "ถัดไป",
      select: "{selected} จาก {total} ที่เลือก",
    },
    firstRunLevelTest: {
      heading: "เริ่มต้นด้วยการทดสอบทักษะของคุณ",
      description: "เลือกคำตอบที่ถูกต้องเพื่อประเมินระดับการอ่านของคุณ",
      nextButton: "ถัดไป",
      section: "ส่วนที่ {currentSectionIndex}",
      toast: {
        successUpdate: "สำเร็จ",
        successUpdateDescription:
          "คะแนนประสบการณ์และระดับของคุณได้รับการอัปเดตแล้ว",
        attention: "คำเตือน",
        attentionDescription: "กรุณาตอบทุกคำถาม!",
        errorTitle: "มีบางอย่างผิดพลาด",
        errorDescription:
          "คะแนนประสบการณ์และระดับของคุณไม่ได้รับการอัปเดต กรุณาลองอีกครั้ง",
      },
      congratulations: "ยินดีด้วย!",
      congratulationsDescription: "การทดสอบเสร็จสิ้นแล้ว",
      yourScore: "คะแนนของคุณคือ {xp}",
      yourCefrLevel: "ระดับภาษาของคุณคือ {cefrLevel}",
      yourRaLevel: "ระดับการอ่านของคุณคือ {raLevel}",
      getStartedButton: "เริ่มกันเลย",
    },
    progressBarXp: {
      xp: "คะแนนประสบการณ์: ",
      level: "ระดับ {level}",
      congratulations: "ยินดีด้วย!",
      upLevel: "คุณได้รับระดับใหม่แล้ว!",
      close: "ปิด",
    },

    firstRoleSelection: {
      heading: "คุณต้องการทำอะไร?",
      description: "โปรดเลือกบทบาทของคุณ",
      studentButton: "ฉันต้องการเรียนรู้",
      teacherButton: "ฉันต้องการสอน",
      save: "บันทึก",
      toast: {
        title: "บทบาทได้รับการอัปเดต",
        studentDescription: "ตอนนี้คุณเป็นนักเรียนแล้ว",
        teacherDescription: "ตอนนี้คุณเป็นครูแล้ว",
        adminDescription: "ตอนนี้คุณเป็นผู้ดูแลระบบแล้ว",
        systemDescription: "ตอนนี้คุณเป็นผู้ใช้ระบบแล้ว",
      },
    },
    // use this for article selection page
    // this is the select component
    select: {
      articleChoose: "กรุณาเลือก {article} ที่คุณต้องการอ่าน",
      articleChooseDescription:
        "ระดับของคุณคือ {level} และนี่คือ {article} ที่คุณสามารถเลือกได้",
    },
    // use this for article selection page
    article: {
      type: "ประเภทบทความ",
      genre: "ชนิดของบทความ",
      subGenre: "ชนิดย่อยของบทความ",
      article: "บทความ",
    },
    articleCard: {
      raLevel: "ระดับการอ่านของบทความคือ {raLevel}",
      cefrLevel: "ระดับภาษาของบทความคือ {cefrLevel}",
      // The article pertains to the topic of A clever girl outsmarts an evil sorceress and saves her village from a curse., which falls within the tales and myths genre.
      articleCardDescription:
        "บทความนี้หัวข้อเกี่ยวกับ {topic} ซึ่งอยู่ในประเภท {genre}",
    },
    articleContent: {
      voiceAssistant: "ผู้ช่วยเสียง",
      soundButton: {
        play: "เล่นเสียง",
        pause: "หยุดเสียง",
      },
      // button translate
      translateฺButton: {
        open: "แปล",
        close: "ปิดหน้าต่างการแปล",
      },
    },
    mcq: {
      //headings
      quiz: "แบบทดสอบ",
      reQuiz: "ลองทำแบบทดสอบอีกครั้ง",
      //descriptions
      quizDescription:
        "เริ่มทำแบบทดสอบเพื่อทดสอบความรู้ของคุณ และดูว่าบทความนี้ง่ายหรือยากกับคุณ",
      reQuizDescription:
        "คุณได้ทำแบบทดสอบนี้ไปแล้ว คุณสามารถทำแบบทดสอบอีกครั้งเพื่อปรับปรุงคะแนนของคุณ",
      startButton: "เริ่มทำแบบทดสอบ",
      retakeButton: "ทำแบบทดสอบอีกครั้ง",
      // mcq card
      elapsedTime: "ใช้เวลาไป {time} วินาที",
      questionHeading: "คำถามที่ {number} จาก {total}",
      nextQuestionButton: "คำถามต่อไป",
      toast: {
        correct: "ถูกต้อง",
        correctDescription: "คุณตอบถูกต้อง!",
        incorrect: "ผิด",
        incorrectDescription: "คุณตอบผิด!",
        quizCompleted: "ทำแบบทดสอบเสร็จสิ้น",
        quizCompletedDescription: "คุณได้ทำแบบทดสอบเสร็จสิ้นแล้ว",
        error: "เกิดข้อผิดพลาด",
        errorDescription: "เกิดข้อผิดพลาดขณะทำแบบทดสอบ",
      },
    },
    rate: {
      title: "ให้คะแนนบทความ",
      content: "คุณวิจารณ์คุณภาพของบทความนี้อย่างไร?",
      description:
        "การให้คะแนนนี้จะถูกนำไปใช้ในการคำนวณระดับของคุณในครั้งต่อไป",
      newLevel: "ระดับใหม่ของคุณคือ {level}",
      submitButton: "ส่งคะแนน",
      backToHomeButton: "กลับไปหน้าหลัก",
      nextQuizButton: "ไปทำแบบทดสอบต่อไป",
      toast: {
        success: "สำเร็จ",
        successDescription: "ระดับใหม่ของคุณคือ {level}",
      },
    },
    audioButton: {
      play: "เล่นเสียง",
      pause: "หยุดเสียง",
    },
    menu: "เมนู",
    loginButton: "เข้าสู่ระบบ",

    passages: {
      heading: "บทความ",
      type: "ประเภท",
      fiction: "นิยาย",
      nonFiction: "สารคดี",
      topic: "หัวข้อ",
      selectGenre: "เลือกประเภท",
      selectSubGenre: "เลือกประเภทย่อย",
      level: "ระดับ",
      sortBy: "เรียงลำดับโดย",
      rating: "คะแนน",
      date: "วันที่",
      resetGenre: "รีเซ็ตประเภท",
      resetSubGenre: "รีเซ็ตประเภทย่อย",
    },

    myClasses: {
      title: "ชั้นเรียนของฉัน",
      search: "ค้นหาชื่อชั้นเรียน...",
      className: "ชื่อชั้นเรียน",
      classCode: "รหัสชั้นเรียน",
      studentCount: "จำนวนนักเรียน",
      actions: "การดำเนินการ",
      detail: "รายละเอียด",
      roster: "รายชื่อ",
      reports: "รายงาน",

      createNewClass: {
        button: "สร้างชั้นเรียนใหม่",
        title: "สร้างชั้นเรียนใหม่",
        description: "กรอกข้อมูลเพื่อสร้างชั้นเรียนใหม่",
        className: "ชื่อชั้นเรียน",
        selectGrade: "เลือกเกรด",
        grade: "เกรด",
        create: "สร้างชั้นเรียน",
        cancel: "ยกเลิก",
        toast: {
          attention: "ความสนใจ",
          attentionDescription: "ต้องกรอกข้อมูลทุกช่อง!",
          successCreate: "สำเร็จ",
          successDescription: "สร้างชั้นเรียนเรียบร้อยแล้ว",
        },
      },

      edit: {
        title: "แก้ไขรายละเอียดชั้นเรียน",
        description: "อัปเดตรายละเอียดชั้นเรียนด้านล่าง",
        className: "ชื่อชั้นเรียน",
        selectGrade: "เลือกเกรด",
        grade: "เกรด",
        toast: {
          attention: "ความสนใจ",
          attentionDescription: "ต้องกรอกข้อมูลทุกช่อง!",
          successUpdate: "อัปเดตสำเร็จ",
          successUpdateDescription: "อัปเดตรายละเอียดชั้นเรียนเรียบร้อยแล้ว",
        },
        update: "อัปเดตชั้นเรียน",
        cancel: "ยกเลิก",
      },

      archieve: {
        title: "จัดเก็บชั้นเรียนอย่างถาวร",
        descriptionBefore: "คุณต้องการเก็บชั้นเรียน ",
        descriptionAfter: " อย่างถาวรหรือไม่?",
        archive: "เก็บถาวร",
        cancel: "ยกเลิก",
        toast: {
          successArchive: "ชั้นเรียนถูกเก็บอย่างถาวร",
          successArchiveDescription: "เก็บชั้นเรียนอย่างถาวรเรียบร้อยแล้ว!",
          errorArchive: "เกิดข้อผิดพลาด",
          errorArchiveDescription: "เกิดข้อผิดพลาดขณะเก็บชั้นเรียนอย่างถาวร",
        },
      },

      delete: {
        title: "ลบชั้นเรียน",
        descriptionBefore: "คุณต้องการลบ ",
        descriptionAfter: " ชั้นเรียนหรือไม่?",
        delete: "ลบ",
        cancel: "ยกเลิก",
        toast: {
          successDelete: "ลบชั้นเรียนเรียบร้อยแล้ว",
          successDeleteDescription: "ลบชั้นเรียนเรียบร้อยแล้ว",
          errorDelete: "เกิดข้อผิดพลาด",
          errorDeleteDescription: "เกิดข้อผิดพลาดขณะลบชั้นเรียน",
        },
      },
    },

    myStudent: {
      title: "นักเรียนของฉัน",
      name: "ชื่อ",
      email: "อีเมล",
      searchName: "ค้นหาชื่อ...",
      actions: "การดำเนินการ",
      progress: "ความคืบหน้า",
      enroll: "ลงทะเบียน",
      unEnroll: "ยกเลิกการลงทะเบียน",
      resetProgress: "รีเซ็ตความคืบหน้า",
      resetTitle: "รีเซ็ตความคืบหน้า XP ทั้งหมด",
      resetDescription: "คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตความคืบหน้าทั้งหมด?",
      reset: "รีเซ็ต",
      cancelReset: "ยกเลิก",

      enrollPage: {
        title: "ชั้นเรียนที่ลงทะเบียนได้สำหรับ {studentName}",
        add: "เพิ่ม",
        search: "ค้นหา...",
        className: "ชื่อชั้นเรียน",
        enroll: "ลงทะเบียน",
        toast: {
          successEnrollment: "ลงทะเบียนสำเร็จ",
          successEnrollDescription: "นักเรียนได้ลงทะเบียนในชั้นเรียน",
          errorEnrollment: "การลงทะเบียนล้มเหลว",
          errorEnrollDescription: "นักเรียนไม่ได้ลงทะเบียนในชั้นเรียน",
        },
      },
      unEnrollPage: {
        title: "ยกเลิกการลงทะเบียนชั้นเรียนสำหรับ {studentName}",
        remove: "ลบ",
        search: "ค้นหา...",
        className: "ชื่อชั้นเรียน",
        unEnroll: "ยกเลิกการลงทะเบียน",
        toast: {
          successUnenrollment: "ลบสำเร็จ",
          successUnenrollDescription: "นักเรียนได้ถูกลบออกจากชั้นเรียน",
          errorUnenrollment: "การยกเลิกการลงทะเบียนล้มเหลว",
          errorUnenrollDescription: "นักเรียนไม่ได้ถูกลบออกจากชั้นเรียน",
        },
      },
    },

    classRoster: {
      title: "รายชื่อนักเรียนสำหรับห้องเรียน: {className}",
      name: "ชื่อ",
      lastActivity: "กิจกรรมล่าสุด",
      actions: "การดำเนินการ",
      history: "ประวัติ",
      search: "ค้นหาชื่อ...",
      noStudent: "ไม่มีนักเรียนในชั้นนี้",
      noClassroom: "ไม่มีชั้นเรียนที่เลือก",
      noClassroomDescription: "กรุณาเลือกชั้นเรียนจากชั้นเรียนของฉัน",
      addStudentButton: "เพิ่มนักเรียนใหม่",
      toast: {
        successResetProgress: "รีเซ็ตความคืบหน้าสำเร็จ",
        successResetProgressDescription: "ความคืบหน้าทั้งหมดถูกรีเซ็ตแล้ว",
      },

      addNewStudent: {
        title: "เพิ่มนักเรียนใหม่ไปยัง {className}",
        description: "เพิ่มนักเรียนใหม่ในห้องเรียนโดยป้อนที่อยู่อีเมลของพวกเขา",
        email: "อีเมล: ",
        placeholder: "ป้อนที่อยู่อีเมล",
        addStudent: "เพิ่มนักเรียนใหม่",
        warning: "ในการเพิ่มนักเรียน กรุณากรอกข้อมูลที่จำเป็นข้างต้น",
        saveButton: "บันทึกและดำเนินการต่อ",
        toast: {
          successAddStudent: "เพิ่มนักเรียนแล้ว",
          successAddStudentDescription:
            "นักเรียนถูกเพิ่มในชั้นเรียนนี้เรียบร้อยแล้ว",
          errorAddStudent: "เพิ่มนักเรียนล้มเหลว",
          errorAddStudentDescription: "ไม่สามารถเพิ่มนักเรียนในชั้นเรียนนี้",
          emailNotFound: "ไม่พบอีเมล",
          emailNotFoundDescription:
            "ที่อยู่อีเมลนี้ไม่มีบัญชีที่เกี่ยวข้อง กรุณาตรวจสอบการสะกดหรือทดลองใช้อีเมลอื่น",
        },
      },
    },

    reports: {
      title: "รายงานชั้นเรียน: {className}",
      averageLevel: "ระดับเฉลี่ย:",
      name: "ชื่อ",
      xp: "XP",
      level: "ระดับ",
      search: "ค้นหาชื่อ...",
      lastActivity: "กิจกรรมล่าสุด",
      actions: "การดำเนินการ",
      detail: "รายละเอียด",
      viewDetails: "ดูรายละเอียด",
      noStudent: "ไม่มีนักเรียนในชั้นนี้",
      noStudentDescription: "กรุณาเลือกชั้นเรียนจากชั้นเรียนของฉัน",

      editStudent: {
        title: "แก้ไขรายละเอียดนักเรียน",
        description: "อัปเดตรายละเอียดนักเรียนด้านล่าง",
        placeholder: "ชื่อนักเรียน",
        update: "อัปเดตนักเรียน",
        cancel: "ยกเลิก",
        toast: {
          successUpdate: "อัปเดตสำเร็จ",
          successUpdateDescription: "อัปเดตข้อมูลนักเรียนสำเร็จ",
          attentionUpdate: "ความสนใจ",
          attentionUpdateDescription: "กรุณากรอกข้อมูล",
          errorUpdate: "อัปเดตล้มเหลว",
          errorUpdateDescription: "ไม่สามารถอัปเดตข้อมูลนักเรียน",
        },
      },
      removeStudent: {
        title: "ลบนักเรียน",
        descriptionBefore: "คุณต้องการลบ",
        descriptionAfter: "ออกจากชั้นเรียนนี้หรือไม่?",
        remove: "ลบ",
        cancel: "ยกเลิก",
        toast: {
          successRemove: "ลบนักเรียนสำเร็จ",
          successRemoveDescription: "ลบนักเรียนสำเร็จ",
          errorRemove: "ข้อผิดพลาด",
          errorRemoveDescription: "เกิดข้อผิดพลาดในการลบนักเรียนในชั้นเรียนนี้",
        },
      },
    },

    search: "ค้นหา...",

    chatBot: {
      textSuggestion: "ถามคำถาม",
    },
    wordList: {
      title: "รายการคำศัพท์",
      closeButton: "ปิด",
      saveButton: "บันทึก",
      detail: "เลือกคำศัพท์และบันทึกเพื่อฝึกฝนในภายหลัง",
      tab: {
        flashcard: "การ์ดคำศัพท์",
        matching: "การจับคู่",
      },
      flashcard: {
        neverPracticeButton: "ไม่ต้องฝึกคำศัพท์นี้อีก",
        description:
          "คุณสามารถฝึกทักษะการอ่านของคุณด้วยการ์ดคำศัพท์ ที่คุณบันทึกไว้จะปรากฏที่นี่",
      },
    },
  },

  selectType: {
    types: {
      nonfiction: "สารคดี",
      "Biography and Memoir": "วรรณกรรมเชิงบรรยาย",
      "historical biography": "วรรณกรรมชีวประวัติ",
      "History and Mythology": "ประวัติศาสตร์และตำนาน",
      "Genocide and Religious Studies": "การสังหารและการศึกษาศาสนา",
      fiction: "นิยาย",
      "coming-of-age": "วรรณกรรมเด็ก",
      "Friendship and Kindness": "มิตรภาพและความเมตตา",
      "Ancient Civilizations": "สมัยโบราณ",
      "Fantasy and Science Fiction": "นวนิยายและวิทยาศาสตร์",
      Quest: "การผจญภัย",
      "Philosophy and Religion": "ปรัชญาและศาสนา",
      "Religious Studies": "การศึกษาศาสนา",
      "Science and Nature": "วิทยาศาสตร์และธรรมชาติ",
      "Biology and Zoology": "ชีววิทยาและสัตววิทยา",
      "Technology and Science": "เทคโนโลยีและวิทยาศาสตร์",
      "Art and Culture": "ศิลปะและวัฒนธรรม",
      Calligraphy: "ปาฐกถา",
      "Survival Stories": "เรื่องราวการรอดชีวิต",
      "Space Colonization": "การเรียนรู้ด้านพื้นที่",
      "Marine and Animal Studies": "การศึกษาทางทะเลและสัตว์",
      "Artificial Intelligence and Space": "ปัญญาประดิษฐ์และอวกาศ",
      Fantasy: "เรื่องแฟนตาซี",
      "Magical Realism": "สารบาญที่มีสมมติ",
      "Folklore and Mythology": "ประเพณีและตำนาน",
      "African Mythology": "ตำนานแอฟริกา",
      "epic fantasy": "นวนิยายแฟนตาซีเอพิค",
      "Young Adult Fantasy": "นวนิยายแฟนตาซีสำหรับวัยรุ่น",
      "Humorous Fiction": "นวนิยายสนุกสนาน",
      "Classic and Literary Fiction": "นวนิยายคลาสสิคและวรรณกรรม",
      "Classic and Historical Fiction":
        "นวนิยายคลาสสิคและวรรณกรรมประวัติศาสตร์",
      "Slice of Life": "ชีวิตประจำวัน",
      Media: "สื่อ",
      "World Literature": "วรรณกรรมโลก",
      "Romance and Contemporary": "โรแมนติกและความเป็นร่วมสมัย",
      "Young Adult": "วัยรุ่น",
      "Animal fantasy": "นวนิยายแฟนตาซีเป็นสัตว์",
      "Musical and Science Fiction": "เพลงและนวนิยายวิทยาศาสตร์",
      "Drama and Family": "ละครและครอบครัว",
      "Personal Growth": "การเติบโตทางบุคลิกภาพ",
      "magical realism": "การจินตนาการที่เป็นเหตุการณ์จริง",
      Music: "ดนตรี",
      "Thriller and Mystery": "สุดยอดและลึกลับ",
      "Treasure Hunt": "ล่าสมบัติ",
      Dystopian: "จอมวิกาล",
      Adventure: "ผจญภัย",
      Historical: "ประวัติศาสตร์",
      "Harlem Renaissance": "ฮาร์เลมเรเนซองร์แรนซ์",
      "Fairy Tale": "นิทาน",
      "portal fantasy": "แฟนตาซีโดยการใช้ประตู",
      "Social Commentary": "การสังคมความคิด",
      "Greek Mythology": "ตำนานกรีก",
      "Action and Adventure": "การกระทำและผจญภัย",
      "Treasure Hunting": "การล่าสมบัติ",
      "Ancient Mythology": "ตำนานโบราณ",
      "Social and Emotional Learning": "การเรียนรู้ทางสังคมและอารมณ์",
      "Coming-of-Age and Gothic Fiction": "การเจริญเติบโตและนวนิยายโกทิก",
      War: "สงคราม",
      "Engineering and Robotics": "วิศวกรรมและโรบอติกส์",
      "Musical Friendship Adventure": "การผจญภัยของมิวสิคและมิตรภาพ",
      "Slice of life": "ชีวิตประจำวัน",
      "Earth and Environmental Sciences": "วิทยาศาสตร์ด้านโลกและสิ่งแวดล้อม",
      Superhero: "ซุปเปอร์ฮีโร่",
      "Space and Time Adventures": "การผจญภัยในอวกาศและเวลา",
      "Social Sciences and Issues": "วิทยาศาสตร์สังคมและปัญหา",
      "Diversity and Human Rights": "ความหลากหลายและสิทธิมนุษยชน",
      "Digital and Consumer Electronics":
        "อิเล็กทรอนิกส์และอิเล็กทรอนิกส์ผู้บริโภค",
      "Biographical Fiction": "นวนิยายชีวประวัติ",
      "Political and Military History": "ประวัติศาสตร์ทางการเมืองและทหาร",
      "Japanese Folklore": "ตำนานญี่ปุ่น",
      "Fantasy and Folklore": "แฟนตาซีและตำนาน",
      "Wild West": "เวสเทิร์นไวลด์",
      "Adventure and Travel": "การผจญภัยและการเดินทาง",
      "Travel Guides": "คู่มือการเดินทาง",
      "Supernatural Mystery": "ปริศนาล้างตัว",
      Folklore: "ตำนาน",
      "Friendship and Inspiring Stories":
        "เรื่องเพื่อนซี้และเรื่องที่หล่อเลือน",
      "Tall Tale": "เรื่องเสน่ห์ใหญ่",
      "Legends and Fairy Tales": "ตำนานและนิทาน",
      "Space Adventure": "การผจญภัยในอวกาศ",
      "Health and Wellness": "สุขภาพและความพร้อม",
      "Nutrition and Healthy Living": "โภชนาการและการดำรงชีวิตอย่างสุข",
      "School and Slice of Life": "โรงเรียนและชีวิตประจำวัน",
      "Fitness and Exercise": "สุขภาพและการออกกำลังกาย",
      "Historical Biographical Fiction": "นวนิยายชีวประวัติทางประวัติศาสตร์",
      "Western and Pirate Adventures": "การผจญภัยในภาคตะวันตกและโจรสลัด",
      fantasy: "แฟนตาซี",
      "Animal Fantasy": "นวนิยายแฟนตาซีเป็นสัตว์",
      "Aztec Mythology": "ตำนานแอซเทค",
      Supernatural: "เหนือธรรมชาติ",
      "Environmental awareness": "การตระหนักถึงสิ่งแวดล้อม",
      "Health and Wellness Technology": "เทคโนโลยีสุขภาพและความพร้อม",
      "Historical and Humorous Stories": "เรื่องราวทางประวัติศาสตร์และตลก",
      "Animal Adventures and Superheroes": "การผจญภัยของสัตว์และซุปเปอร์ฮีโร่",
      "Self-help": "การช่วยเหลือตนเอง",
      Wellness: "สุขภาพและความพร้อม",
      "Children's Mystery": "ปริศนาเด็ก",
      "Indian Mythology": "ตำนานอินเดีย",
      "Community Celebration": "การเฉลิมฉลองชุมชน",
      "Gothic and Horror": "กอทิคและสยองขวัญ",
      Horror: "สยองขวัญ",
      "Urban Exploration": "การสำรวจในเมือง",
      "Quests and Treasures": "การผจญภัยและการค้นหาสมบัติ",
      "Comedy and Humor": "คอมเมดี้และอารมณ์ขบขัน",
      "Environmental conservation": "การอนุรักษ์สิ่งแวดล้อม",
      "Professional and Personal Development": "การพัฒนาอาชีพและบุคคล",
      "Mindfulness and Personal Development": "การมีสติและพัฒนาตนเอง",
      "Virtual Reality and Exploration": "เสมือนจริงและการสำรวจ",
      "Crime Thriller": "อาชญากรรมสุดสนุก",
      Sociology: "สังคมวิทยา",
      "Historical Adventure": "การผจญภัยในอดีต",
      "Heroic Fantasy": "แฟนตาซีฮีโร่",
      Detective: "นักสืบ",
      "Social-emotional Learning": "การเรียนรู้ทางสังคมและอารมณ์",
      Sports: "กีฬา",
      "Sports Biographies": "ชีวประวัติกีฬา",
      Festivals: "เทศกาล",
      "Detective Fiction": "นวนิยายสืบสวน",
      Business: "ธุรกิจ",
      Entrepreneurship: "การประกอบธุรกิจ",
      "Children's literature": "การเจริญเติบโต",
      "True Crime and Paranormal": "อาชญากรรมจริงและเหนือธรรมชาติ",
      "Horror Stories": "เรื่องสยองขวัญ",
      "Fictional Characters": "ตัวละครนวม",
      "Portal Fantasy": "แฟนตาซีตามโปรตัวเสริม",
      "Historical Exploration": "การสำรวจทางประวัติศาสตร์",
      "Mythology and Folklore": "องค์ความรู้และตำนาน",
      "Cultural Diversity": "ความหลากหลายทางวัฒนธรรม",
      Drama: "ปริศนาสำหรับผู้ใหญ่",
      "Norse Mythology": "เทพเจ้านอร์ส",
      "Inspirational and Media Coverage": "แรงบันดาลใจและการรายงานสื่อ",
      "Medical and Alternative Medicine": "การแพทย์และการแพทย์ทางเลือก",
      "Family and Parenting": "ครอบครัวและการบำเพ็ญ",
      Parenting: "การบำเพ็ญ",
      "historical fiction": "นวนิยายประวัติศาสตร์",
      "Space Exploration": "การสำรวจอวกาศ",
      "WWII Resistance": "การต่อสู้ในช่วงสงครามโลกครั้งที่สอง",
      "Native American Mythology": "นิทานชาวอเมริกันพื้นเมือง",
      "Environmental Sustainability": "ความยั่งยืนของสิ่งแวดล้อม",
      Friendship: "ความเป็นเพื่อน",
      "Virtual Reality": "เสมือนจริง",
      "Teen Detective": "นักสืบวัยรุ่น",
      Fairytale: "นิทานแฟนตาซี",
      "Social Justice": "ความยุติธรรมทางสังคม",
      "Types of Sports": "ประเภทของกีฬา",
      Education: "การศึกษา",
      "Media and STEAM Education":
        "สื่อและการศึกษาทางวิทยาศาสตร์  เทคโนโลยี วิศวกรรม ศิลปะ และคณิตศาสตร์",
      "Adventure and Mountaineering": "การผจญภัยและปีนเขา",
      "Alien and Dystopian Encounters":
        "การเผชิญหน้ากับมนุษย์ต่างดาวและเรื่องล่าสุดเทียบกับโลกแห่งการเปลี่ยนแปลง",
      "Urban and High Fantasy": "ธรรมเนียมในเมืองและฟันทางสู่ความฝัน",
      Classic: "คลาสสิก",
      "Historical and Contemporary Romance":
        "โรแมนฮิสโตรีและความโรแมนที่เป็นปัจจุบัน",
      "Military and Heroic Thrillers": "สงครามและการเรียบง่ายของฮีโร่",
      "Modernist Literature": "วรรณกรรมโมเดิร์น",
      "Serial Killers": "ฆาตกรล้างเลือด",
      "Art Techniques": "เทคนิคศิลปะ",
      "Art Theft": "การปล้นศิลปะ",
      Mythology: "ตำนาน",
      "Hindu Mythology": "นรีเมธวีศาสนาฮินดู",
      "Children's Fantasy": "แฟนตาซีสำหรับเด็ก",
      "Film and Media": "ภาพยนตร์และสื่อ",
      Western: "ครึ่งภาคตะวันตก",
      Surrealism: "สุริยวิทยา",
      "Cultural and Culinary Travel": "การเดินทางทางวัฒนธรรมและอาหาร",
      "Animal and Sea Adventures": "การผจญภัยทางสัตว์และทะเล",
      "Fairy Tales": "นิทานเทพนิยาย",
      "Detective Club": "ชมรมนักสืบ",
      "Arthurian Legend": "ตำนานอาร์เธอร์",
      Hauntings: "ปลุกตำนาน",
      Memoirs: "บันทึกชีวิต",
      "Environmental and Cultural Education":
        "การศึกษาเกี่ยวกับสิ่งแวดล้อมและวัฒนธรรม",
      Philosophy: "ปรัชญา",
      "Tall Tales": "นิทานยักษ์ใหญ่",
      "Community Conflict": "ความขัดแย้งในชุมชน",
      "Forbidden Love": "ความรักที่ห้าม",
      "Creation Myth": "ตำนานการสร้าง",
      Legend: "ตำนาน",
      Fable: "นิทาน",
      "Historical Fiction": "นวนิยายประวัติศาสตร์",
      "Historical Biography": "ชีวประวัติทางประวัติศาสตร์",
      "Cultural and Celebrity Memoirs": "บันทึกชีวิตทางวัฒนธรรมและชื่อเสียง",
      "Political and Medical Memoirs": "บันทึกชีวิตทางการเมืองและการแพทย์",
      "Textile Art": "ศิลปะเสื้อผ้า",
      Prankster: "คนขี้แกล้ง",
      "Medieval Adventure": "การผจญภัยยุคกลาง",
      "Civic and Civil Rights": "เครือข่ายและสิทธิพลเมือง",
      "Mystery and Sports": "ลึกลับและกีฬา",
      "Psychological Horror": "สยองขวัญทางจิต",
      "Library and Global Issues": "ห้องสมุดและประเด็นโลก",
      "young adult mystery": "สยองขวัญแบบโกธิค",
      "Diversity and Relationships": "ความหลากหลายและความสัมพันธ์",
      "Supernatural Creatures": "สัตว์เหนือธรรมชาติ",
      "Epic and Heroic": "นวนิยายสุดยิ่งใหญ่และยิ่งใหญ่",
      tragedy: "โศกนาฏกรรม",
      "Animal adventure": "การผจญภัยของสัตว์",
      "Environmental Conservation": "การอนุรักษ์สิ่งแวดล้อม",
      "Western Adventure": "การผจญภัยแบบตะวันตก",
      "Supernatural Phenomena": "เหตุการณ์เหนือธรรมชาติ",
      "Military Fiction": "นวนิยายทหาร",
      "Food and Culinary Arts": "อาหารและศิลปะการปรุงอาหาร",
      "Culinary Arts": "ศิลปะการปรุงอาหาร",
      "Family Drama": "ละครครอบครัว",
      "Career and Communication": "อาชีพและการสื่อสาร",
      "Mental Health and Problem-solving": "สุขภาพจิตและการแก้ปัญหา",
      "heroic fantasy": "ฮีโร่แฟนตาซี",
      "Women's Suffrage Movement": "การสตรีไร้สิทธิ",
      "Slavic Mythology": "นิทานสแลวิค",
      "Friendship and Adventure": "Friendship and Adventure",
      "Eastern European Mythology": "นิทานของประชาชนตะวันออกยุโรป",
      "Historical Mystery": "ความลึกลับในประวัติศาสตร์",
      "Inuit Mythology": "นิทานของอินุยิต",
      Comedy: "คอมเมดี้",
      Psychology: "จิตวิทยา",
      "Music and Memory": "ดนตรีและหน่วยความจำ",
      "Mythical Creatures": "สิ่งประหลาด",
      "Environmental Awareness": "การเข้าใจสิ่งแวดล้อม",
      "Career and Digital Learning": "อาชีพและการเรียนรู้ดิจิทัล",
      Podcasts: "รายการพอดคาสต์",
      "Virtual Reality Adventure": "การผจญภัยในโลกเสมือนจริง",
      "War Fiction": "นวนิยายทหาร",
      "Child and Educational Psychology": "จิตวิทยาเด็กและการศึกษา",
      "Andean Mythology": "นิทานเทือกเขาแอนดี้",
      Military: "ทหาร",
      "Sports Inspirational Fiction": "นวนิยายกีฬาแรงบันดาลใจ",
      "Charity and Community Service": "กุศลและการบริการชุมชน",
      "Friendship and Growth": "Friendship and Growth",
      "Coming-of-age": "การเป็นผู้ใหญ่มาใหม่",
      "Inspiring story": "ลึกลับ",
      "Natural Disasters": "ภัยพิบัติธรรมชาติ",
      "Quest Fantasy": "เทพธิดาค้นหา",
      "Epic Fantasy": "นิยายแฟนตาซีมหากาพย์",
      "Sports Fiction": "นวนิยายกีฬา",
      "Language and Literature": "ภาษาและวรรณคดี",
      "Writing and Translation": "การเขียนและการแปล",
      mystery: "เรื่องราวที่แรงบันดาลใจ",
      "Existential and Absurdist Fiction":
        "นวนิยายเกี่ยวกับการอนุรักษ์อยู่ในโลกและการประณาม",
      "Children's Historical Fiction": "นวนิยายประวัติศาสตร์สำหรับเด็ก",
      Wizardry: "การใช้เวทมนตร์",
      "West African Mythology": "นิทานของประชาชนตะวันตกแอฟริกา",
      "Post-Apocalyptic": "โลกหลังมหาวิบัติ",
      "Animal Fiction": "นวนิยายเกี่ยวกับสัตว์",
      "Language Mastery": "ความเชี่ยวชาญในภาษา",
      "Military ethics": "จรรยาบรรณทหาร",
      "Sports Drama": "ดราม่ากีฬา",
      "Renaissance Art": "ศิลปะยุคเรนนาซอง",
      Pirate: "โจรสลัด",
      "Folk Tale": "นิทานพื้นบ้าน",
      "Communication and Conflict Resolution": "การประสานงานกับปัญหา",
      "Psychological Thriller": "ลัทธิสมองซึ่งเกี่ยวกับจิตวิทยา",
      Medical: "การแพทย์",
      "Medical Fields": "สาขาทางการแพทย์",
      "Budget and City Travel": "งบประมาณและการเดินทางในเมือง",
      "Cultural Heritage": "มรดกทางวัฒนธรรม",
      "Greek Myth": "นิทานกรีก",
      "Chinese Mythology": "นิทานจีน",
      Legends: "ตำนาน",
      "Classic Western and Frontier Adventure":
        "การผจญภัยในซากและสันโดษตะวันตก",
      Relationships: "ความสัมพันธ์",
      "Eastern European Folklore": "นิทานพื้นเมืองยุโรปตะวันออก",
      "Epic Myth": "ตำนานอลังการ",
      "The Haunting Shadows: An Exploration of Psychological Horror":
        "เงาที่น่ากลัว: การสำรวจของความเลือนลับทางจิตวิทยา",
      "Western Mystery": "ลึกลับซึ่งเกี่ยวข้องกับตะวันตก",
      "Regency Romance": "โรแจนซีโซนสุดหวัง",
      School: "โรงเรียน",
      "Religious Fiction": "นิยายศาสนา",
      "Christian Fiction": "นิยายคริสเตียน",
      "Romantic Tragedy": "โรแจนติดโชคร้าย",
      "Domestic Life": "ชีวิตในบ้าน",
      "Medieval Fantasy": "แฟนตาซียุคกลาง",
      "Classic Fairy Tales": "นิทานกลางและคลาสสิก",
      Cyberpunk: "ไซเบอร์ปังค์",
      Spy: "สายลับ",
      Epic: "มหัศจรรย์",
      Humorous: "ตลก",
      Contemporary: "ร่วมสมัย",
      Realism: "เชิงจริยธรรม",
      Community: "ชุมชน",
      "Cowgirl Adventure": "ผจญภัยเหมือง",
      "Heroic Myth": "ตำนานวีรบุรุษ",
      "Urban Fiction": "นิยายในเมือง",
      Travel: "การเดินทาง",
      "Friendship and Music": "มิตรภาพและดนตรี",
      "Supernatural Horror": "สยองขวัญเหนือธรรมชาติ",
      "Political Thriller": "นิยายระทึกขวัญทางการเมือง",
      "Southern Gothic": "กอทิคใต้",
      Geography: "ภูมิศาสตร์",
      "Desert Exploration": "การสำรวจทะเลทราย",
      "Ecotourism and Historical Travel":
        "การท่องเที่ยวเชิงนิเวศและประวัติศาสตร์",
      Comics: "การ์ตูน",
      "Community Service": "การบริการชุมชน",
      "Social issues": "ปัญหาทางสังคม",
      "Child Development": "พัฒนาเด็ก",
      "Parallel Universe": "จักรวาลขนาน",
      "Revolutionary War Fiction": "นิยายสงครามรุนแรง",
      "School life": "ชีวิตในโรงเรียน",
      "Coming-of-Age": "การเป็นผู้ใหญ่ขึ้น",
      "Friendship and teamwork": "มิตรภาพและการทำงานร่วมกัน",
      Inspiration: "แรงบันดาลใจ",
      "Ancient Rome": "โรมแบบโบราณ",
      "Time Travel": "การเดินทางในเวลา",
      "Time Travel Comedy": "การเดินทางในเวลาที่ตลก",
      "Musical adventure": "การผจญภัยทางดนตรี",
      "Classic Fairy Tale": "นิทานกลางและคลาสสิก",
      "Music Therapy": "การรักษาด้วยดนตรี",
      Existentialism: "สุตินิยม",
      "Superhero Comedy": "ซุปเปอร์ฮีโร่ตลก",
      "Animal welfare": "สวัสดิการสัตว์",
      "Ancient Civilization": "รัฐวิสาหกิจโบราณ",
      "Inspiring Story": "เรื่องราวที่ให้แรงบันดาลใจ",
      "Contemporary Fiction": "นิยายร่วมสมัย",
      "Classic Literature": "วรรณกรรมคลาสสิก",
      novel: "นวนิยาย",
      "Community activism": "ละคร",
      "Relationship Drama and Romantic Suspense":
        "ละครความสัมพันธ์และสปอยล์โรแมนติก",
      Mystery: "ลึกลับ",
      "Young Adult Mystery": "ลึกลับสำหรับวัยรุ่น",
      "Gothic Horror": "การกระทำเพื่อชุมชน",
      "Psychological Fiction": "นวนิยายจิตวิทยา",
      Resistance: "การต่อต้าน",
      "historical activism": "การกระทำเพื่อประวัติศาสตร์",
      "Magical School": "โรงเรียนวิเศษ",
      "Gothic horror": "สยองขวัญกอทิค",
      Renaissance: "ยุคประวัติศาสตร์",
      "Friendship and Values": "มิตรภาพและค่านิยม",
      "Comics and Graphic Novels": "การ์ตูนและนวนิยายแกรฟิก",
      "Second Chance Romance": "โอกาสที่สองของความรัก",
      "Global Governance": "การปกครองโลก",
      "American and Contemporary Fiction": "นิยายอเมริกันและความเป็นปัจจุบัน",
      "Children's": "สำหรับเด็ก",
      Legendary: "ตำนาน",
      "Slice of Life in a Small Village": "ชีวิตประจำวันในหมู่บ้านเล็ก",
      Espionage: "การลับนรก",
      "School Stories": "เรื่องราวในโรงเรียน",
      "Romantic Fiction": "นิยายโรแมนติก",
      "Children's Literature": "วรรณกรรมสำหรับเด็ก",
      "Animal Fable": "นิทานสัตว์",
      "Western Legends": "ตำนานในแบบอเมริกาตะวันตก",
      "Religious Fantasy": "นิยายแฟนตาซีทางศาสนา",
      "Bounty Hunters and Gold Rush": "นักล่ารางวัลและความแซ่บของทองคำ",
      Thriller: "สุดยอดอาชญากรรม",
      "Korean Mythology": "ประชากรเกาหลี",
      Metafiction: "เมตาฟิคชั่น",
      "community activism": "การกระทำเพื่อชุมชน",
      "Military espionage": "การลับนรกทางทหาร",
      "Book Club": "ชมรมหนังสือ",
      drama: "ละคร",
      "Alien Encounter": "การพบปะกับมนุษย์ต่างดาว",
      "World War II Resistance": "การต่อต้านในสงครามโลกครั้งที่สอง",
      "Renaissance Adventure": "การผจญภัยในยุคฟื้นฟูศิลปวิทยา",
    },
  },
} as const;
