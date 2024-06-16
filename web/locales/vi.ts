export default {
  pages: {
    indexPage: {
      description:
        "Ứng dụng đọc sách đa dạng tích hợp trí tuệ nhân tạo. Phiên bản beta và đang trong quá trình thử nghiệm.",
      getStartedButton: "Bắt đầu",
    },
    loginPage: {
      loginDescription: "Đăng nhập vào tài khoản của bạn",
      backButton: "Quay lại",
    },
    student: {
      readPage: {
        // Headings
        articleSelection: "Chọn bài viết",
        // Trang nextquiz/[articleId]
        article: {
          articleNotFound: "Không tìm thấy bài viết",
          articleInsufficientLevel:
            "Bạn không thể đọc bài viết này vì trình độ đọc của bạn chưa đủ.",
          // Headings
          readBefore: "Bạn đã đọc bài viết này trước đây",
          readBeforeDescription:
            "Bạn có thể thử đọc và luyện tập lại để cải thiện kỹ năng đọc của mình. Đây là kết quả đọc trước đó của bạn.",
          // Thống kê
          status: "Trạng thái",
          statusText: {
            completed: "Hoàn thành",
            uncompleted: "Chưa hoàn thành",
          },
          statusDescription: "Cập nhật lần cuối vào {date}",
          score: "Điểm bài kiểm tra",
          scoreText: "{score}",
          scoreDescription: "từ {total} câu hỏi",
          rated: "Được đánh giá",
          ratedText: "{rated} đánh giá",
          ratedDescription: "Bạn đã đánh giá bài viết này",
          timeSpend: "Thời gian đã dùng",
          timeSpendText: "{time}",
          timeSpendDescription: "trong {total} câu hỏi",
          scoreSuffix: {
            point: "điểm",
            points: "điểm",
          },
          secondSuffix: {
            second: "giây",
            seconds: "giây",
          },
        },
      },
      historyPage: {
        title: "Lịch sử cho {userName}",
        // Headings
        reminderToReread: "Lời nhắc đọc lại",
        articleRecords: "Hồ sơ bài viết",
        // Descriptions
        reminderToRereadDescription:
          "Bạn có thể muốn đọc lại một trong những bài viết này để xem liệu bạn đã cải thiện chưa.",
        articleRecordsDescription: "Hồ sơ đọc của bạn sẽ được hiển thị ở đây.",
      },
      practicePage: {
        // Headings
        flashcard: "Thẻ học",
        manage: "quản lý",
        orderSentences: "Sắp xếp câu",
        clozeTest: "Bài kiểm tra lỗ hổng",
        orderWords: "Sắp xếp từ",
        matching: "Kết hợp",
        // Descriptions
        flashcardDescription:
          "Bạn có thể luyện tập kỹ năng đọc của mình với thẻ học. Và các câu đoạn đã lưu của bạn sẽ được hiển thị ở đây.",
        savedSentences: "Câu đoạn đã lưu",
        noSavedSentences: "Bạn chưa lưu câu đoạn nào.",
        savedSentencesDescription: "Bạn đã lưu {total} câu đoạn.",
        added: "Thêm vào {date}",
        deleteButton: "Xóa",
        neverPracticeButton: "Không cần luyện tập câu này nữa.",
        toast: {
          success: "Thành công",
          successDescription: "Xóa câu đoạn đã lưu thành công",
          error: "Lỗi",
          errorDescription:
            "Có lỗi xảy ra khi xóa câu đoạn đã lưu. Vui lòng thử lại sau.",
        },
        flashcardPractice: {
          buttonVeryHard: "lại",
          buttonHard: "Khó",
          buttonGood: "Tốt",
          buttonEasy: "Dễ",
          flipCard: "Lật thẻ",
          nextButton: "Tiếp theo",
          yourXp: "Bạn đã nhận được {xp} XP cho hoạt động này",
        },
        orderSentencesPractice: {
          orderSentences: "Sắp xếp câu",
          orderSentencesDescription:
            "Đây là một số câu từ một đoạn văn bạn đã đọc. Hãy xếp các câu theo trật tự có ý nghĩa với bạn. Nếu trật tự giống như trong đoạn văn, bạn sẽ nhận được 5 XP.",
          saveOrder: "Lưu & Tiếp tục sau",
          errorOrder: "Vui lòng sắp xếp theo thứ tự chính xác",
        },
        clozeTestPractice: {
          clozeTest: "Bài kiểm tra lỗ hổng",
          clozeTestDescription:
            "Đây là một số câu từ một đoạn văn bạn đã đọc. Hãy điền từ còn thiếu vào để hoàn thành chúng. Nếu bạn trả lời đúng, bạn sẽ nhận được 2 XP.",
          saveOrder: "Lưu & Tiếp tục sau",
          errorOrder: "Vui lòng sắp xếp theo thứ tự chính xác",
        },
        orderWordsPractice: {
          orderWords: "Sắp xếp từ",
          orderWordsDescription:
            "Đây là một câu từ một đoạn văn bạn đã đọc. Hãy sắp xếp các từ theo trật tự có ý nghĩa đối với bạn. Nếu trật tự giống như trong đoạn văn, bạn sẽ nhận được 5 điểm kinh nghiệm.",
          saveOrder: "Tiếp tục",
          errorOrder: "Vui lòng sắp xếp đúng",
          submitArticle: "Kiểm tra câu trả lời của bạn",
          nextPassage: "Đoạn tiếp theo",
          tryToSortThisSentence: "Hãy sắp xếp câu này.",
        },
        matchingPractice: {
          matching: "Ghép cặp",
          matchingDescription:
            "Hãy ghép câu với bản dịch của nó. Nếu bạn ghép đúng tất cả các câu, bạn sẽ nhận được 5 XP.",
          saveOrder: "Lưu & Tiếp tục sau",
          errorOrder: "Vui lòng sắp xếp đúng",
          submitArticle: "Kiểm tra câu trả lời của bạn",
          nextPassage: "Đoạn tiếp theo",
          minSentencesAlert:
            "Bạn cần ít nhất năm câu đã lưu để tham gia hoạt động này.",
        },
      },
    },
    teacher: {
      studentProgressPage: {
        activity: "Hoạt Động",
        level: "Cấp Độ",
        levelDescription: "Cấp độ hiện tại của bạn là {level}",
        progressOf: "Tiến Độ Của {nameOfStudent}",
        noUserProgress:
          "Không có tiến độ người dùng do học sinh chưa từng đọc bài viết hoặc hoạt động khác.",
      },
    },
  },
  components: {
    mainNav: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      contact: "Liên hệ",
      authors: "tác giả",
    },
    userAccountNav: {
      level: "Trình độ {level}",
      settings: "Cài đặt",
      signOut: "Đăng xuất",
    },
    themeSwitcher: {
      dark: "Tối",
      light: "Sáng",
      system: "Hệ thống",
    },
    localeSwitcher: {
      en: "English",
      th: "ไทย",
      cn: "简体中文",
      tw: "繁體字",
      vi: "Tiếng Việt",
    },
    sidebarNav: {
      read: "Đọc",
      history: "Lịch sử",
      sentences: "Câu",
      reports: "Báo cáo",
    },
    sidebarTeacherNav: {
      myClasses: "Lớp học của tôi",
      myStudents: "học sinh của tôi",
      classRoster: "Danh sách lớp",
      reports: "báo cáo",
      passages: "Những đoạn văn",
      assignments: "Bài tập",
    },
    articleRecordsTable: {
      title: "Tiêu đề",
      date: "Ngày",
      rated: "Đánh giá",
      search: "Tìm kiếm tiêu đề...",
      previous: "trước",
      next: "sau",
      select: "{selected} trong {total} đã chọn",
    },
    firstRunLevelTest: {
      heading: "Hãy bắt đầu bằng cách kiểm tra kỹ năng của bạn!",
      description: "Chọn câu trả lời đúng để đánh giá trình độ đọc của bạn.",
      nextButton: "Tiếp theo",
      section: "Phần {currentSectionIndex}",
      toast: {
        successUpdate: "Thành công!",
        successUpdateDescription:
          "Kinh nghiệm và cấp độ của bạn đã được cập nhật.",
        attention: "chú ý",
        attentionDescription: "Xin vui lòng trả lời tất cả các câu hỏi!",
        errorTitle: "Đã xảy ra lỗi.",
        errorDescription:
          "Kinh nghiệm và cấp độ của bạn chưa được cập nhật. Vui lòng thử lại.",
      },
      congratulations: "Xin chúc mừng!",
      congratulationsDescription: "Việc đánh giá đã hoàn tất.",
      yourScore: "Điểm của bạn: {xp}",
      yourCefrLevel: "Cấp độ CEFR của bạn: {cefrLevel}",
      yourRaLevel: "Cấp RA của bạn: {raLevel}",
      getStartedButton: "Bắt đầu",
    },
    progressBarXp: {
      xp: "kinh nghiệm: ",
      level: "mức độ {level}",
      congratulations: "Xin chúc mừng!",
      upLevel: "Bạn đã nhận được một cấp độ mới!",
      close: "đóng",
    },

    firstRoleSelection: {
      heading: "Bạn muốn làm gì?",
      description: "Vui lòng chọn vai trò của bạn",
      studentButton: "Tôi muốn học",
      teacherButton: "Tôi muốn dạy",
      save: "Lưu",
      toast: {
        title: "Vai trò đã được cập nhật",
        studentDescription: "Bạn hiện là sinh viên",
        teacherDescription: "Bạn hiện là giáo viên",
        adminDescription: "Bạn hiện là quản trị viên",
        systemDescription: "Bạn hiện là người dùng hệ thống",
     }
   },
   
    // Sử dụng cho trang chọn bài viết
    // Đây là thành phần chọn
    select: {
      articleChoose: "Hãy chọn bài viết {article} bạn muốn đọc",
      articleChooseDescription:
        "Trình độ của bạn là {level} và đây là các bài viết {article} bạn có thể chọn.",
    },
    // Sử dụng cho trang chọn bài viết
    article: {
      type: "Thể loại bài viết",
      genre: "Thể loại bài viết",
      subGenre: "Thể loại phụ bài viết",
      article: "Bài viết",
    },
    articleCard: {
      raLevel: "Trình độ đọc là {raLevel}",
      cefrLevel: "Trình độ CEFR là {cefrLevel}",
      articleCardDescription:
        "Bài viết liên quan đến chủ đề {topic}, thuộc thể loại {genre}.",
    },
    articleContent: {
      voiceAssistant: "Trợ lý giọng nói",
      soundButton: {
        play: "Phát âm thanh",
        pause: "Tạm dừng âm thanh",
      },
      // button translate
      translateฺButton: {
        open: "Dịch",
        close: "Đóng cửa sổ dịch",
      },
    },
    mcq: {
      // Headings
      quiz: "Bài kiểm tra",
      reQuiz: "Làm lại bài kiểm tra",
      // Descriptions
      quizDescription:
        "Bắt đầu bài kiểm tra để kiểm tra kiến thức của bạn. Và xem bài viết này có dễ không.",
      reQuizDescription:
        "Bạn đã hoàn thành bài kiểm tra này trước đây. Bạn có thể làm lại để cải thiện điểm số của mình.",
      startButton: "Bắt đầu bài kiểm tra",
      retakeButton: "Làm lại bài kiểm tra",
      // Thẻ kiểm tra trắc nghiệm
      elapsedTime: "{time} giây đã trôi qua",
      questionHeading: "Câu hỏi {number} trong tổng số {total}",
      nextQuestionButton: "Câu hỏi tiếp theo",
      toast: {
        correct: "Đúng",
        correctDescription: "Bạn đã trả lời đúng!",
        incorrect: "Sai",
        incorrectDescription: "Bạn đã trả lời sai!",
        quizCompleted: "Hoàn thành bài kiểm tra",
        quizCompletedDescription: "Bạn đã hoàn thành bài kiểm tra",
        error: "Lỗi",
        errorDescription:
          "Có lỗi xảy ra khi gửi câu trả lời của bạn. Vui lòng thử lại sau.",
      },
    },
    rate: {
      title: "Đánh giá bài viết này",
      content: "Bạn đánh giá chất lượng của bài viết này như thế nào?",
      description:
        "Điểm đánh giá này được sử dụng để tính trình độ mới của bạn.",
      newLevel: "Trình độ mới của bạn là {level}",
      submitButton: "Gửi",
      backToHomeButton: "Trở về Trang chủ",
      nextQuizButton: "Bài kiểm tra tiếp theo",
      toast: {
        success: "Thành công",
        successDescription: "Trình độ mới của bạn là {level}.",
      },
    },
    audioButton: {
      play: "Phát âm thanh",
      pause: "Tạm dừng âm thanh",
    },
    menu: "Menu",
    loginButton: "Đăng nhập",

    passages: {
      heading: "Đoạn văn",
      type: "Loại",
      fiction: "Tiểu thuyết",
      nonFiction: "Phi hư cấu",
      topic: "Chủ đề",
      selectGenre: "Chọn thể loại",
      selectSubGenre: "Chọn thể loại con",
      level: "Cấp độ",
      sortBy: "Sắp xếp theo",
      rating: "Xếp hạng",
      date: "Ngày",
      resetGenre: "Đặt lại thể loại",
      resetSubGenre: "Đặt lại thể loại phụ",
    },

    myClasses: {
      title: "Lớp Học Của Tôi",
      search: "Tìm kiếm tên lớp...",
      className: "Tên Lớp",
      classCode: "Mã Lớp",
      studentCount: "Số Lượng Học Sinh",
      actions: "Hành Động",
      detail: "Chi Tiết",
      roster: "Danh Sách",
      reports: "Báo Cáo",

      createNewClass: {
        button: "Tạo Lớp Học Mới",
        title: "Tạo lớp học mới",
        description: "Điền thông tin để tạo lớp học mới",
        className: "Tên Lớp",
        selectGrade: "Chọn Khối",
        grade: "Khối",
        create: "Tạo Lớp",
        cancel: "Hủy",
        toast: {
          attention: "Chú Ý",
          attentionDescription: "Tất cả các trường phải được điền!",
          successCreate: "Thành Công",
          successDescription: "Tạo lớp học thành công",
        },
      },

      edit: {
        title: "Chỉnh Sửa Chi Tiết Lớp",
        description: "Cập nhật chi tiết lớp học dưới đây",
        className: "Tên Lớp",
        selectGrade: "Chọn Khối",
        grade: "Khối",
        toast: {
          attention: "Chú Ý",
          attentionDescription: "Tất cả các trường phải được điền!",
          successUpdate: "Cập Nhật Thành Công",
          successUpdateDescription: "Cập nhật lớp học thành công",
        },
        update: "Cập Nhật Lớp",
        cancel: "Hủy",
      },

      archieve: {
        title: "Lưu Trữ Lớp Học",
        descriptionBefore: "Bạn có muốn lưu trữ lớp ",
        descriptionAfter: " không?",
        archive: "Lưu Trữ",
        cancel: "Hủy",
        toast: {
          successArchive: "Lớp học đã được lưu trữ",
          successArchiveDescription: "Lớp học đã được lưu trữ thành công!",
          errorArchive: "Lỗi",
          errorArchiveDescription: "Đã xảy ra lỗi khi lưu trữ lớp học",
        },
      },

      delete: {
        title: "Xóa Lớp Học",
        descriptionBefore: "Bạn có muốn xóa lớp ",
        descriptionAfter: " không?",
        delete: "Xóa",
        cancel: "Hủy",
        toast: {
          successDelete: "Lớp học đã được xóa",
          successDeleteDescription: "Lớp học đã được xóa thành công",
          errorDelete: "Lỗi",
          errorDeleteDescription: "Đã xảy ra lỗi khi xóa lớp học",
        },
      },
    },

    myStudent: {
      title: "Học Sinh Của Tôi",
      name: "Tên",
      email: "Email",
      searchName: "Tìm kiếm tên...",
      actions: "Hành Động",
      progress: "Tiến Trình",
      enroll: "Ghi Danh",
      unEnroll: "Hủy Ghi Danh",
      resetProgress: "Đặt Lại Tiến Trình",
      resetTitle: "Đặt lại tất cả tiến trình XP",
      resetDescription:
        "Bạn có chắc chắn muốn đặt lại tất cả tiến trình không?",
      reset: "Đặt Lại",
      cancelReset: "Hủy",

      enrollPage: {
        title: "Lớp học có sẵn cho {studentName} ghi danh",
        add: "Thêm",
        search: "Tìm kiếm...",
        className: "Tên Lớp",
        enroll: "Ghi Danh",
        toast: {
          successEnrollment: "Ghi danh thành công",
          successEnrollDescription: "Học sinh đã được ghi danh vào lớp",
          errorEnrollment: "Ghi danh thất bại",
          errorEnrollDescription: "Học sinh chưa được ghi danh vào lớp",
        },
      },
      unEnrollPage: {
        title: "Hủy ghi danh lớp học cho {studentName}",
        remove: "Xóa",
        search: "Tìm kiếm...",
        className: "Tên Lớp",
        unEnroll: "Hủy Ghi Danh",
        toast: {
          successUnenrollment: "Hủy ghi danh thành công",
          successUnenrollDescription: "Học sinh đã được hủy ghi danh khỏi lớp",
          errorUnenrollment: "Hủy ghi danh thất bại",
          errorUnenrollDescription: "Học sinh chưa được hủy ghi danh khỏi lớp",
        },
      },
    },

    classRoster: {
      title: "Danh Sách Học Sinh Của Lớp: {className}",
      name: "Tên",
      lastActivity: "Hoạt Động Gần Đây",
      actions: "Hành Động",
      history: "Lịch Sử",
      search: "Tìm kiếm tên...",
      noStudent: "Không có học sinh trong lớp này",
      noClassroom: "Không có lớp học",
      noClassroomDescription: "Vui lòng chọn lớp từ Lớp Học Của Tôi",
      addStudentButton: "Thêm học sinh mới",
      toast: {
        successResetProgress: "Đặt lại tiến trình thành công",
        successResetProgressDescription: "Tất cả tiến trình đã được đặt lại",
      },

      addNewStudent: {
        title: "Thêm học sinh mới vào {className}",
        description:
          "Thêm học sinh mới vào lớp bằng cách nhập địa chỉ email của họ.",
        email: "Email: ",
        placeholder: "Nhập địa chỉ email",
        addStudent: "Thêm học sinh mới",
        warning:
          "Để thêm học sinh, vui lòng điền vào các trường bắt buộc ở trên.",
        saveButton: "LƯU VÀ TIẾP TỤC",
        toast: {
          successAddStudent: "Đã thêm học sinh",
          successAddStudentDescription:
            "Học sinh đã được thêm thành công vào lớp này.",
          errorAddStudent: "Thêm học sinh thất bại",
          errorAddStudentDescription: "Không thể thêm học sinh vào lớp này.",
          emailNotFound: "Không tìm thấy email",
          emailNotFoundDescription:
            "Địa chỉ email này không được liên kết với bất kỳ tài khoản nào. Vui lòng kiểm tra chính tả hoặc thử một địa chỉ email khác.",
        },
      },
    },

    reports: {
      title: "Báo Cáo Lớp Học: {className}",
      averageLevel: "Mức Trung Bình:",
      name: "Tên",
      xp: "XP",
      level: "Cấp Độ",
      search: "Tìm kiếm tên...",
      lastActivity: "Hoạt Động Gần Đây",
      actions: "Hành Động",
      detail: "Chi Tiết",
      viewDetails: "Xem Chi Tiết",
      noStudent: "Không có học sinh trong lớp này",
      noStudentDescription: "Vui lòng chọn lớp từ Lớp Học Của Tôi",

      editStudent: {
        title: "Chỉnh Sửa Chi Tiết Học Sinh",
        description: "Cập nhật chi tiết học sinh dưới đây",
        placeholder: "Tên học sinh",
        update: "Cập Nhật Học Sinh",
        cancel: "Hủy",
        toast: {
          successUpdate: "Cập Nhật Thành Công",
          successUpdateDescription:
            "Thông tin học sinh được cập nhật thành công",
          attentionUpdate: "Chú Ý",
          attentionUpdateDescription: "Vui lòng điền thông tin",
          errorUpdate: "Cập Nhật Thất Bại",
          errorUpdateDescription: "Không thể cập nhật thông tin học sinh",
        },
      },
      removeStudent: {
        title: "Xóa Học Sinh",
        descriptionBefore: "Bạn có muốn xóa",
        descriptionAfter: "khỏi lớp học này không?",
        remove: "Xóa",
        cancel: "Hủy",
        toast: {
          successRemove: "Xóa học sinh thành công",
          successRemoveDescription: "Học sinh đã được xóa thành công",
          errorRemove: "Lỗi",
          errorRemoveDescription: "Lỗi khi xóa học sinh khỏi lớp này",
        },
      },
    },

    search: "kiếm...",

    chatBot: {
      textSuggestion: "Hỏi một câu hỏi",
    },
    wordList: {
      title: "danh sách từ vựng",
    },
  },

  selectType: {
    types: {
      nonfiction: "Nội dung không phải tiểu thuyết",
      "Biography and Memoir": "Tiểu sử và Hồi ký",
      "historical biography": "Tiểu sử Lịch sử",
      "History and Mythology": "Lịch sử và Thần thoại",
      "Genocide and Religious Studies": "Tàn sát và Nghiên cứu Tôn giáo",
      fiction: "Tiểu thuyết",
      "coming-of-age": "Văn học Thiếu nhi",
      "Friendship and Kindness": "Tình bạn và Nhân ái",
      "Ancient Civilizations": "Nền văn minh cổ đại",
      "Fantasy and Science Fiction": "Fantasy và Khoa học viễn tưởng",
      Quest: "Phiêu lưu",
      "Philosophy and Religion": "Triết học và Tôn giáo",
      "Religious Studies": "Nghiên cứu Tôn giáo",
      "Science and Nature": "Khoa học và Tự nhiên",
      "Biology and Zoology": "Sinh học và Động vật học",
      "Technology and Science": "Công nghệ và Khoa học",
      "Art and Culture": "Nghệ thuật và Văn hóa",
      Calligraphy: "Thư pháp",
      "Survival Stories": "Câu chuyện Sống còn",
      "Space Colonization": "Khảo sát về Vũ trụ",
      "Marine and Animal Studies": "Nghiên cứu Đại dương và Động vật",
      "Artificial Intelligence and Space": "Trí tuệ nhân tạo và Không gian",
      Fantasy: "Fantasy",
      "Magical Realism": "Hiện thực Phép thuật",
      "Folklore and Mythology": "Dân gian và Thần thoại",
      "African Mythology": "Thần thoại Châu Phi",
      "epic fantasy": "Tiểu thuyết Giả tưởng Hùng vĩ",
      "Young Adult Fantasy": "Tiểu thuyết Giả tưởng Dành cho Thanh thiếu niên",
      "Humorous Fiction": "Tiểu thuyết Hài hước",
      "Classic and Literary Fiction": "Tiểu thuyết Cổ điển và Văn học",
      "Classic and Historical Fiction": "Tiểu thuyết Cổ điển và Lịch sử",
      "Slice of Life": "Đời thường",
      Media: "Phương tiện truyền thông",
      "World Literature": "Văn học Thế giới",
      "Romance and Contemporary": "Lãng mạn và Đương đại",
      "Young Adult": "Thanh thiếu niên",
      "Animal fantasy": "Tiểu thuyết Giả tưởng về Động vật",
      "Musical and Science Fiction":
        "Âm nhạc và Tiểu thuyết Khoa học viễn tưởng",
      "Drama and Family": "Tuồng và Gia đình",
      "Personal Growth": "Sự Phát triển Cá nhân",
      "magical realism": "Hiện thực Phép thuật",
      Music: "Âm nhạc",
      "Thriller and Mystery": "Gay cấn và Bí ẩn",
      "Treasure Hunt": "Săn Báu vật",
      Dystopian: "Tương lai u tối",
      Adventure: "Phiêu lưu",
      Historical: "Lịch sử",
      "Harlem Renaissance": "Phục hưng Harlem",
      "Fairy Tale": "Truyện cổ tích",
      "portal fantasy": "Giả tưởng qua Cổng",
      "Social Commentary": "Bình luận Xã hội",
      "Greek Mythology": "Thần thoại Hy Lạp",
      "Action and Adventure": "Hành động và Phiêu lưu",
      "Treasure Hunting": "Săn Báu vật",
      "Ancient Mythology": "Thần thoại cổ đại",
      "Social and Emotional Learning": "Học tập Xã hội và Tình cảm",
      "Coming-of-Age and Gothic Fiction":
        "Trưởng thành và Tiểu thuyết Gô-thích",
      War: "Chiến tranh",
      "Engineering and Robotics": "Kỹ thuật và Robot học",
      "Musical Friendship Adventure": "Phiêu lưu Âm nhạc và Tình bạn",
      "Slice of life": "Đời thường",
      "Earth and Environmental Sciences": "Khoa học Trái đất và Môi trường",
      Superhero: "Siêu anh hùng",
      "Space and Time Adventures": "Phiêu lưu trong Không gian và Thời gian",
      "Social Sciences and Issues": "Khoa học Xã hội và Vấn đề",
      "Diversity and Human Rights": "Đa dạng và Nhân quyền",
      "Digital and Consumer Electronics": "Điện tử và Điện tử Tiêu dùng",
      "Biographical Fiction": "Tiểu thuyết Hồi ký",
      "Political and Military History": "Lịch sử Chính trị và Quân sự",
      "Japanese Folklore": "Thần thoại Nhật Bản",
      "Fantasy and Folklore": "Fantasy và Thần thoại",
      "Wild West": "Miền Tây Hoang Dã",
      "Adventure and Travel": "Phiêu lưu và Du lịch",
      "Travel Guides": "Hướng dẫn Du lịch",
      "Supernatural Mystery": "Bí ẩn Siêu nhiên",
      Folklore: "Truyền thuyết",
      "Friendship and Inspiring Stories":
        "Bạn bè và Câu chuyện Truyền cảm hứng",
      "Tall Tale": "Câu chuyện Khổng lồ",
      "Legends and Fairy Tales": "Truyền thuyết và Truyện cổ tích",
      "Space Adventure": "Phiêu lưu không gian",
      "Health and Wellness": "Sức khỏe và Sức khỏe",
      "Nutrition and Healthy Living": "Dinh dưỡng và Cuộc sống lành mạnh",
      "School and Slice of Life": "Trường học và Cuộc sống hàng ngày",
      "Fitness and Exercise": "Sức khỏe và Tập thể dục",
      "Historical Biographical Fiction": "Tiểu thuyết Hồi ký Lịch sử",
      "Western and Pirate Adventures": "Phiêu lưu Miền Tây và Hải tặc",
      fantasy: "Fantasy",
      "Animal Fantasy": "Tiểu thuyết Giả tưởng về Động vật",
      "Aztec Mythology": "Thần thoại Aztec",
      Supernatural: "Siêu nhiên",
      "Environmental awareness": "Nhận thức về Môi trường",
      "Health and Wellness Technology": "Công nghệ Sức khỏe và Lành mạnh",
      "Historical and Humorous Stories": "Câu chuyện Lịch sử và Hài hước",
      "Animal Adventures and Superheroes":
        "Phiêu lưu của Động vật và Siêu anh hùng",
      "Self-help": "Tự giúp",
      Wellness: "Lành mạnh",
      "Children's Mystery": "Bí ẩn của trẻ em",
      "Indian Mythology": "Thần thoại Ấn Độ",
      "Community Celebration": "Lễ kỷ niệm Cộng đồng",
      "Gothic and Horror": "Gothic và Kinh dị",
      Horror: "Kinh dị",
      "Urban Exploration": "Khám phá Đô thị",
      "Quests and Treasures": "Nhiệm vụ và Kho báu",
      "Comedy and Humor": "Hài hước và Hài hước",
      "Environmental conservation": "Bảo tồn Môi trường",
      "Professional and Personal Development":
        "Phát triển Nghề nghiệp và Cá nhân",
      "Mindfulness and Personal Development": "Tâm thức và Phát triển Cá nhân",
      "Virtual Reality and Exploration": "Thực tế ảo và Khám phá",
      "Crime Thriller": "Trinh thám Tội ác",
      Sociology: "Xã hội học",
      "Historical Adventure": "Phiêu lưu Lịch sử",
      "Heroic Fantasy": "Anh hùng kiếm hiệp",
      Detective: "Thám tử",
      "Social-emotional Learning": "Học tập Xã hội và Tình cảm",
      Sports: "Thể thao",
      "Sports Biographies": "Tiểu sử Thể thao",
      Festivals: "Lễ hội",
      "Detective Fiction": "Tiểu thuyết Trinh thám",
      Business: "Kinh doanh",
      Entrepreneurship: "Doanh nhân",
      "Children's literature": "Trưởng thành",
      "True Crime and Paranormal": "Tội ác Thực sự và Siêu nhiên",
      "Horror Stories": "Câu chuyện Kinh dị",
      "Fictional Characters": "Nhân vật Hư cấu",
      "Portal Fantasy": "Thần thoại qua Cổng",
      "Historical Exploration": "Khám phá Lịch sử",
      "Mythology and Folklore": "Thần thoại và Truyền thuyết",
      "Cultural Diversity": "Đa dạng Văn hóa",
      Drama: "Bí ẩn Dành cho Thanh thiếu niên",
      "Norse Mythology": "Thần thoại Bắc Âu",
      "Inspirational and Media Coverage":
        "Inspirational và Phương tiện truyền thông",
      "Medical and Alternative Medicine": "Y học và Y học Thay thế",
      "Family and Parenting": "Gia đình và Nuôi dưỡng",
      Parenting: "Nuôi dưỡng",
      "historical fiction": "Tiểu thuyết Lịch sử",
      "Space Exploration": "Khám phá không gian",
      "WWII Resistance": "Kháng chiến Thế chiến thứ hai",
      "Native American Mythology": "Thần thoại Người bản địa Châu Mỹ",
      "Environmental Sustainability": "Bền vững Môi trường",
      Friendship: "Tình bạn",
      "Virtual Reality": "Thực tế ảo",
      "Teen Detective": "Thám tử Thiếu niên",
      Fairytale: "Cổ tích",
      "Social Justice": "Công bằng Xã hội",
      "Types of Sports": "Loại Thể thao",
      Education: "Giáo dục",
      "Media and STEAM Education": "Phương tiện và Giáo dục STEAM",
      "Adventure and Mountaineering": "Phiêu lưu và Leo núi",
      "Alien and Dystopian Encounters":
        "Gặp gỡ Người ngoài hành tinh và Tương lai kiểu Khủng hoảng",
      "Urban and High Fantasy": "Thành phố và Giấc mơ cao cấp",
      Classic: "Cổ điển",
      "Historical and Contemporary Romance": "Lãng mạn Lịch sử và Hiện đại",
      "Military and Heroic Thrillers": "Chiến tranh và Kinh dị Anh hùng",
      "Modernist Literature": "Văn học Hiện đại",
      "Serial Killers": "Kẻ giết người hàng loạt",
      "Art Techniques": "Kỹ thuật Nghệ thuật",
      "Art Theft": "Trộm Nghệ thuật",
      Mythology: "Thần thoại",
      "Hindu Mythology": "Thần thoại Hindu",
      "Children's Fantasy": "Truyện kỳ ảo dành cho trẻ em",
      "Film and Media": "Phim và Truyền thông",
      Western: "Phim Vùng miền Tây",
      Surrealism: "Siêu thực",
      "Cultural and Culinary Travel": "Du lịch Văn hóa và Ẩm thực",
      "Animal and Sea Adventures": "Phiêu lưu Động vật và Biển",
      "Fairy Tales": "Câu chuyện Cổ tích",
      "Detective Club": "Câu lạc bộ Thám tử",
      "Arthurian Legend": "Huyền thoại Arthur",
      Hauntings: "Câu chuyện Ma",
      Memoirs: "Hồi ký",
      "Environmental and Cultural Education": "Giáo dục Môi trường và Văn hóa",
      Philosophy: "Triết học",
      "Tall Tales": "Câu chuyện Khổng lồ",
      "Community Conflict": "Xung đột trong Cộng đồng",
      "Forbidden Love": "Tình yêu Cấm kỵ",
      "Creation Myth": "Thần thoại Sáng tạo",
      Legend: "Truyền thuyết",
      Fable: "Truyện ngụ ngôn",
      "Historical Fiction": "Tiểu thuyết Lịch sử",
      "Historical Biography": "Tiểu sử Lịch sử",
      "Cultural and Celebrity Memoirs": "Hồi ký Văn hóa và Danh tiếng",
      "Political and Medical Memoirs": "Hồi ký Chính trị và Y học",
      "Textile Art": "Nghệ thuật Dệt",
      Prankster: "Người Chọc phá",
      "Medieval Adventure": "Phiêu lưu Trung Cổ",
      "Civic and Civil Rights": "Công dân và Quyền dân sự",
      "Mystery and Sports": "Bí ẩn và Thể thao",
      "Psychological Horror": "Kinh dị Tâm lý học",
      "Library and Global Issues": "Thư viện và Vấn đề Toàn cầu",
      "young adult mystery": "Kinh dị Gothic",
      "Diversity and Relationships": "Đa dạng và Mối quan hệ",
      "Supernatural Creatures": "Sinh vật Siêu nhiên",
      "Epic and Heroic": "Truyện sử và Anh hùng",
      tragedy: "Bi kịch",
      "Animal adventure": "Phiêu lưu của Động vật",
      "Environmental Conservation": "Bảo tồn Môi trường",
      "Western Adventure": "Phiêu lưu Miền Tây",
      "Supernatural Phenomena": "Hiện tượng Siêu nhiên",
      "Military Fiction": "Tiểu thuyết Quân sự",
      "Food and Culinary Arts": "Thực phẩm và Nghệ thuật Nấu ăn",
      "Culinary Arts": "Nghệ thuật Nấu ăn",
      "Family Drama": "Kịch Gia đình",
      "Career and Communication": "Nghề nghiệp và Giao tiếp",
      "Mental Health and Problem-solving":
        "Sức khỏe tâm thần và Giải quyết vấn đề",
      "heroic fantasy": "Kỳ ảo Anh hùng",
      "Women's Suffrage Movement": "Phong trào Tự do Phụ nữ",
      "Slavic Mythology": "Thần thoại Slavic",
      "Friendship and Adventure": "Tình bạn và Phiêu lưu",
      "Eastern European Mythology": "Thần thoại Đông Âu",
      "Historical Mystery": "Bí ẩn Lịch sử",
      "Inuit Mythology": "Thần thoại Inuit",
      Comedy: "Hài",
      Psychology: "Tâm lý học",
      "Music and Memory": "Âm nhạc và Ký ức",
      "Mythical Creatures": "Sinh vật Thần thoại",
      "Environmental Awareness": "Nhận thức Môi trường",
      "Career and Digital Learning": "Nghề nghiệp và Học số",
      Podcasts: "Podcast",
      "Virtual Reality Adventure": "Phiêu lưu Thực tế ảo",
      "War Fiction": "Tiểu thuyết Chiến tranh",
      "Child and Educational Psychology": "Tâm lý học Trẻ em và Giáo dục",
      "Andean Mythology": "Thần thoại Andean",
      Military: "Quân sự",
      "Sports Inspirational Fiction": "Tiểu thuyết Thể thao Truyền cảm hứng",
      "Charity and Community Service": "Từ thiện và Dịch vụ Cộng đồng",
      "Friendship and Growth": "Tình bạn và Sự phát triển",
      "Coming-of-age": "Trưởng thành",
      "Inspiring story": "Bí ẩn",
      "Natural Disasters": "Thảm họa Tự nhiên",
      "Quest Fantasy": "Thần thoại Tìm kiếm",
      "Epic Fantasy": "Tiểu thuyết Kỳ ảo hào hoa",
      "Sports Fiction": "Tiểu thuyết Thể thao",
      "Language and Literature": "Ngôn ngữ và Văn học",
      "Writing and Translation": "Viết và Dịch",
      mystery: "Câu chuyện Truyền cảm hứng",
      "Existential and Absurdist Fiction": "Tiểu thuyết Tồn tại và Vô lý",
      "Children's Historical Fiction": "Tiểu thuyết Lịch sử Cho trẻ em",
      Wizardry: "Ma thuật",
      "West African Mythology": "Thần thoại Tây Phi",
      "Post-Apocalyptic": "Thế giới sau Thảm họa",
      "Animal Fiction": "Tiểu thuyết Về Động vật",
      "Language Mastery": "Thạo ngôn ngữ",
      "Military ethics": "Đạo đức Quân sự",
      "Sports Drama": "Kịch Thể thao",
      "Renaissance Art": "Nghệ thuật Phục hưng",
      Pirate: "Hải tặc",
      "Folk Tale": "Truyện dân gian",
      "Communication and Conflict Resolution":
        "Giao tiếp và Giải quyết xung đột",
      "Psychological Thriller": "Kinh dị Tâm lý học",
      Medical: "Y học",
      "Medical Fields": "Lĩnh vực Y học",
      "Budget and City Travel": "Ngân sách và Du lịch Đô thị",
      "Cultural Heritage": "Di sản Văn hóa",
      "Greek Myth": "Thần thoại Hy Lạp",
      "Chinese Mythology": "Thần thoại Trung Quốc",
      Legends: "Huyền thoại",
      "Classic Western and Frontier Adventure":
        "Phiêu lưu miền Tây và Biên giới cổ điển",
      Relationships: "Mối quan hệ",
      "Eastern European Folklore": "Thần thoại Đông Âu",
      "Epic Myth": "Thần thoại Hùng vĩ",
      "The Haunting Shadows: An Exploration of Psychological Horror":
        "Bóng đêm Đáng sợ: Sự khám phá về Kinh dị Tâm lý học",
      "Western Mystery": "Bí ẩn Miền Tây",
      "Regency Romance": "Lãng mạn thời kỳ Regency",
      School: "Trường học",
      "Religious Fiction": "Tiểu thuyết Tôn giáo",
      "Christian Fiction": "Tiểu thuyết Kitô giáo",
      "Romantic Tragedy": "Bi kịch Lãng mạn",
      "Domestic Life": "Cuộc sống Gia đình",
      "Medieval Fantasy": "Fantasy Trung cổ",
      "Classic Fairy Tales": "Truyện cổ tích Cổ điển",
      Cyberpunk: "Cyberpunk",
      Spy: "Mật điệp",
      Epic: "Kỳ tích",
      Humorous: "Hài hước",
      Contemporary: "Đương đại",
      Realism: "Hiện thực",
      Community: "Cộng đồng",
      "Cowgirl Adventure": "Phiêu lưu Cowgirl",
      "Heroic Myth": "Thần thoại Anh hùng",
      "Urban Fiction": "Tiểu thuyết Đô thị",
      Travel: "Du lịch",
      "Friendship and Music": "Tình bạn và Âm nhạc",
      "Supernatural Horror": "Kinh dị Siêu nhiên",
      "Political Thriller": "Kinh dị Chính trị",
      "Southern Gothic": "Gothic Miền Nam",
      Geography: "Địa lý",
      "Desert Exploration": "Khám phá Sa mạc",
      "Ecotourism and Historical Travel":
        "Du lịch Sinh thái và Du lịch Lịch sử",
      Comics: "Truyện tranh",
      "Community Service": "Dịch vụ Cộng đồng",
      "Social issues": "Vấn đề Xã hội",
      "Child Development": "Phát triển Trẻ em",
      "Parallel Universe": "Vũ trụ Song song",
      "Revolutionary War Fiction": "Tiểu thuyết Chiến tranh Cách mạng",
      "School life": "Cuộc sống Trường học",
      "Coming-of-Age": "Trưởng thành",
      "Friendship and teamwork": "Tình bạn và Làm việc nhóm",
      Inspiration: "Nguồn cảm hứng",
      "Ancient Rome": "La Mã cổ đại",
      "Time Travel": "Du hành thời gian",
      "Time Travel Comedy": "Du hành thời gian Hài hước",
      "Musical adventure": "Phiêu lưu Âm nhạc",
      "Classic Fairy Tale": "Truyện cổ tích Cổ điển",
      "Music Therapy": "Âm nhạc trị liệu",
      Existentialism: "Tồn tại chủ nghĩa",
      "Superhero Comedy": "Siêu anh hùng Hài hước",
      "Animal welfare": "Phúc lợi Động vật",
      "Ancient Civilization": "Nền văn minh cổ đại",
      "Inspiring Story": "Câu chuyện Truyền cảm hứng",
      "Contemporary Fiction": "Tiểu thuyết Đương đại",
      "Classic Literature": "Văn học Cổ điển",
      novel: "Tiểu thuyết",
      "Community activism": "Kịch",
      "Relationship Drama and Romantic Suspense":
        "Drama Mối quan hệ và Hồi hộp Lãng mạn",
      Mystery: "Bí ẩn",
      "Young Adult Mystery": "Mystery dành cho Thanh thiếu niên",
      "Gothic Horror": "Hoạt động Cộng đồng",
      "Psychological Fiction": "Tiểu thuyết Tâm lý học",
      Resistance: "Kháng cự",
      "historical activism": "Hoạt động Lịch sử",
      "Magical School": "Trường Phép thuật",
      "Gothic horror": "Kinh dị Gothic",
      Renaissance: "Thời kỳ Phục hưng",
      "Friendship and Values": "Tình bạn và Giá trị",
      "Comics and Graphic Novels": "Truyện tranh và Tiểu thuyết Đồ họa",
      "Second Chance Romance": "Cơ hội thứ hai của Tình yêu lãng mạn",
      "Global Governance": "Quản trị Toàn cầu",
      "American and Contemporary Fiction": "Tiểu thuyết Mỹ và Đương đại",
      "Children's": "Dành cho Trẻ em",
      Legendary: "Huyền thoại",
      "Slice of Life in a Small Village": "Đời sống ở Làng nhỏ",
      Espionage: "Gián điệp",
      "School Stories": "Câu chuyện Trường học",
      "Romantic Fiction": "Tiểu thuyết Lãng mạn",
      "Children's Literature": "Văn học Dành cho Trẻ em",
      "Animal Fable": "Truyện ngụ ngôn Động vật",
      "Western Legends": "Huyền thoại miền Tây",
      "Religious Fantasy": "Tiểu thuyết Phật giáo",
      "Bounty Hunters and Gold Rush":
        "Thợ săn tiền thưởng và Sự hấp dẫn của Cơn sốt vàng",
      Thriller: "Rùng rợn",
      "Korean Mythology": "Thần thoại Hàn Quốc",
      Metafiction: "Văn học Siêu hậu trường",
      "community activism": "Hoạt động Cộng đồng",
      "Military espionage": "Gián điệp Quân sự",
      "Book Club": "Câu lạc bộ Sách",
      drama: "Kịch",
      "Alien Encounter": "Gặp gỡ người ngoài hành tinh",
      "World War II Resistance": "Kháng chiến Thế chiến II",
      "Renaissance Adventure": "Cuộc phiêu lưu thời Phục hưng",
    },
  },
} as const;
