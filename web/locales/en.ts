export default {
  pages: {
    indexPage: {
      description:
        "Extensive reading app incorporating AI. Alpha version and testing in progress.",
      getStartedButton: "Get Started",
    },
    loginPage: {
      loginDescription: "Log in to your account.",
      backButton: "Back",
    },
    testPage: {
      xxx: "Let's get started by testing your skill!",
    },
    student: {
      readPage: {
        //Headings
        articleSelection: "Article Selection",
        // nextquiz/[articleId] page
        article: {
          articleNotFound: "Article not found",
          articleInsufficientLevel:
            "You cannot read this article because your reading level is not high enough.",
          //headings
          readBefore: "Welcome back. You have read this article before",
          readBeforeDescription:
            "You might try reading and practicing again to improve your reading skills. Here is the result of your previous reading.",
          // stats
          status: "Status",
          statusText: {
            completed: "Completed",
            uncompleted: "Uncompleted",
          },
          statusDescription: "Last updated on {date}",
          score: "Quiz Score",
          scoreText: "{score}",
          scoreDescription: "from {total} questions",
          rated: "Rated",
          ratedText: "{rated} rating",
          ratedDescription: "You rated this article",
          timeSpend: "Time spent",
          timeSpendText: "{time}",
          timeSpendDescription: "in {total} questions",
          scoreSuffix: {
            point: "point",
            points: "points",
          },
          secondSuffix: {
            second: "second",
            seconds: "seconds",
          },
        },
      },
      historyPage: {
        title: "History for {userName}",
        //Headings
        reminderToReread: "Reminder to read",
        articleRecords: "Article Records",
        //descriptions
        reminderToRereadDescription:
          "You might want to try reading one of these articles again to see if you've improved.",
        articleRecordsDescription:
          "Your reading records will be displayed here.",
      },
      practicePage: {
        //Headings
        flashcard: "Sentence card",
        manage: "Manage",
        orderSentences: "Order Sentences",
        clozeTest: "Cloze Test",
        orderWords: "Order Words",
        matching: "Matching",
        //descriptions
        flashcardDescription:
          "You can practice your reading skills with sentence cards. The ones you have saved will appear here.",
        savedSentences: "Saved Sentences",
        noSavedSentences: "You have no saved sentences.",
        savedSentencesDescription: "Your have {total} saved sentences.",
        added: "Added {date}",
        deleteButton: "Delete",
        neverPracticeButton: "Never practice this sentence again",
        toast: {
          success: "Success",
          successDescription: "Delete saved sentence successfully",
          error: "Error",
          errorDescription:
            "Something went wrong while deleting saved sentence",
        },
        flashcardPractice: {
          buttonAgain: "Again",
          buttonHard: "Hard",
          buttonGood: "Good",
          buttonEasy: "Easy",
          flipCard: "Flip",
          nextButton: "Next",
          yourXp:
            "Congratulations!, You received {xp} XP for completing this activity.",
        },
        orderSentencesPractice: {
          //Order Sentences
          orderSentences: "Order Sentences",
          orderSentencesDescription:
            "These are some sentences from one of the passages you've read. Put the sentences in an order that makes sense to you. If the order is the same as the passage, you'll receive 5 XP.",
          saveOrder: "Continue",
          errorOrder: "Please order correctly",
        },
        clozeTestPractice: {
          clozeTest: "Cloze Test",
          clozeTestDescription:
            "Fill in the blanks with the correct word to complete the passage. For each correct answer, you'll receive 2 XP.",
          saveAnswer: "Continue",
          errorAnswer: "Please answer correctly",
          submitArticle: "Check your answers",
          nextPassage: "Next Passage",
        },
        orderWordsPractice: {
          orderWords: "Order Words",
          orderWordsDescription:
            "This is a sentence from one of the passages you've read. Put the words in an order that makes sense to you. If the order is the same as the passage, you'll receive 5 XP.",
          saveOrder: "Continue",
          errorOrder: "Please order correctly",
          submitArticle: "Check your answers",
          nextPassage: "Next Passage",
          tryToSortThisSentence: "Try to sort this sentence",
        },
        matchingPractice: {
          matching: "Matching",
          matchingDescription:
            "Match the sentence with its translation. If you match all the sentences correctly, you'll receive 5 XP.",
          saveOrder: "Save & Continue Later",
          errorOrder: "Please order correctly",
          submitArticle: "Check your answers",
          nextPassage: "Next Passage",
          minSentencesAlert:
            "You need at least five saved sentences to play this activity.",
        },
      },
    },
    teacher: {
      studentProgressPage: {
        activity: "Activity",
        level: "Level",
        levelDescription: "Your current level is {level}",
        progressOf: "Progress for {nameOfStudent}",
        noUserProgress:
          "No user progress available because the student has never read an article or completed any other activity.",
      },
    },
  },

  components: {
    mainNav: {
      home: "Home",
      about: "About",
      contact: "Contact",
      authors: "Authors",
    },
    userAccountNav: {
      level: "Level {level}",
      settings: "Settings",
      signOut: "Sign Out",
    },
    themeSwitcher: {
      dark: "Dark",
      light: "Light",
      system: "System",
    },
    localeSwitcher: {
      en: "English",
      th: "ไทย",
      cn: "简体字",
      tw: "繁體字",
      vi: "Tiếng Việt",
    },
    sidebarNav: {
      read: "Read",
      sentences: "Sentences",
      reports: "Reports",
      history: "History",
      vocabulary: "Vocabulary",
    },
    sidebarTeacherNav: {
      myClasses: "My Classes",
      myStudents: "My Students",
      classRoster: "Class Roster",
      reports: "Reports",
      passages: "Passages",
      assignments: "Assignments",
    },
    articleRecordsTable: {
      title: "Title",
      date: "Date",
      rated: "Rated",
      search: "Search title...",
      previous: "previous",
      next: "next",
      select: "{selected} of {total} selected",
    },
    firstRunLevelTest: {
      heading: "Let's get started by testing your skill!",
      description: "Choose the correct answer to assess your reading level.",
      nextButton: "Next",
      section: "Section {currentSectionIndex}",
      toast: {
        successUpdate: "Success!",
        successUpdateDescription: "Your XP and level have been updated.",
        attention: "Attention",
        attentionDescription: "Please answer all questions!",
        errorTitle: "Something went wrong.",
        errorDescription:
          "Your XP and level were not updated. Please try again.",
      },
      congratulations: "Congratulation!",
      congratulationsDescription: "The assessment is done.",
      yourScore: "Your Score : {xp}",
      yourCefrLevel: "Your CEFR Level : {cefrLevel}",
      yourRaLevel: "Your RA Level : {raLevel}",
      getStartedButton: "Get Started.",
    },
    progressBarXp: {
      xp: "XP:",
      level: "Level {level}",
      congratulations: "Congratulations! ",
      upLevel: "You've achieved a new level.",
      close: "Close",
    },
    firstRoleSelection: {
      heading: "What do you want to do?",
      description: "Please select your role.",
      studentButton: "I want to learn.",
      teacherButton: "I want to teach.",
      save: "Save",
      toast: {
        title: "Role updated",
        studentDescription: "You are now a student.",
        teacherDescription: "You are now a teacher.",
        adminDescription: "You are now an admin.",
        systemDescription: "You are now a system user.",
      },
    },
    // use this for article selection page
    // this is the select component
    select: {
      articleChoose: "Please choose the {article} you want to read",
      articleChooseDescription:
        "Your level is {level} and here are the {article}s that you can choose.",
    },
    // use this for article selection page
    article: {
      type: "type",
      genre: "genre",
      subGenre: "sub-genre",
      article: "article",
    },
    articleCard: {
      raLevel: "Reading Advantage level is {raLevel}",
      cefrLevel: "CEFR level is {cefrLevel}",
      // The article pertains to the topic of A clever girl outsmarts an evil sorceress and saves her village from a curse., which falls within the tales and myths genre.
      articleCardDescription:
        "The article pertains to the topic of {topic}, which falls within the {genre} genre.",
    },
    articleContent: {
      voiceAssistant: "Voice Assistant",
      soundButton: {
        play: "Play sound",
        pause: "Pause sound",
      },
      // button translate
      translateButton: {
        open: "Translate",
        close: "Close translate panel",
      },
    },
    mcq: {
      //headings
      quiz: "Quiz",
      reQuiz: "Re-Quiz",
      //descriptions
      quizDescription:
        "Start the quiz to test your knowledge in order to see how easy this article is for you.",
      reQuizDescription:
        "You have completed this quiz before. You can retake the quiz to improve your score.",
      startButton: "Start Quiz",
      retakeButton: "Retake Quiz",
      // mcq card
      elapsedTime: "{time} seconds elapsed",
      questionHeading: "Question {number} of {total}",
      nextQuestionButton: "Next Question",
      toast: {
        correct: "Correct",
        correctDescription: "You got it right!",
        incorrect: "Incorrect",
        incorrectDescription: "You got it wrong!",
        quizCompleted: "Quiz Completed",
        quizCompletedDescription: "You have completed the quiz",
        error: "Error",
        errorDescription:
          "Something went wrong while submitting your answer. Please try again later.",
      },
    },
    rate: {
      title: "Rate this article",
      content: "How do you rate the quality of this article?",
      description: "This rating is used for calculating your next level.",
      newLevel: "Your new level is {level}",
      submitButton: "Submit",
      backToHomeButton: "Back to Home",
      nextQuizButton: "Next Quiz",
      toast: {
        success: "Success",
        successDescription: "Your new level is {level}.",
      },
    },
    audioButton: {
      play: "Play sound",
      pause: "Pause sound",
    },
    menu: "Menu",
    loginButton: "Login",

    passages: {
      heading: "Passages",
      type: "Type",
      fiction: "Fiction",
      Fiction: "Fiction",
      nonFiction: "NonFiction",
      nonfiction: "Nonfiction",
      topic: "Topic",
      selectGenre: "Select Genre",
      selectSubGenre: "Select Subgenre",
      level: "Level",
      sortBy: "Sort By",
      rating: "Rating",
      date: "Date",
      resetGenre: "Reset Genre",
      resetSubGenre: "Reset Subgenre",
    },
    myClasses: {
      title: "My Classes",
      search: "Search class name...",
      className: "Class Name",
      classCode: "Class Code",
      studentCount: "No. of Students",
      actions: "Actions",
      detail: "Detail",
      roster: "Roster",
      reports: "Reports",

      createNewClass: {
        button: "Create New Class",
        title: "Create a new class",
        description: "Fill in the details to create a new class",
        className: "Class Name",
        selectGrade: "Select Grade",
        grade: "Grade",
        create: "Create Class",
        cancel: "Cancel",
        toast: {
          attention: "Attention",
          attentionDescription: "All fields must be filled out!",
          successCreate: "Success",
          successDescription: "Class created successfully",
        },
      },

      edit: {
        title: "Edit Class Details",
        description: "Update the class details below",
        className: "Class Name",
        selectGrade: "Select Grade",
        grade: "Grade",
        toast: {
          attention: "Attention",
          attentionDescription: "All fields must be filled out!",
          successUpdate: "Update Successfully",
          successUpdateDescription: "Class updated successfully",
        },
        update: "Update Class",
        cancel: "Cancel",
      },

      archieve: {
        title: "Archive Class",
        descriptionBefore: "Do you want to archive ",
        descriptionAfter: " class?",
        archive: "Archive",
        cancel: "Cancel",
        toast: {
          successArchive: "Class archived",
          successArchiveDescription: "Class has been archived successfully!",
          errorArchive: "Error",
          errorArchiveDescription:
            "An error occurred while archiving the class",
        },
      },

      delete: {
        title: "Delete Classroom",
        descriptionBefore: "Do you want to delete ",
        descriptionAfter: " classroom?",
        delete: "Delete",
        cancel: "Cancel",
        toast: {
          successDelete: "Class deleted",
          successDeleteDescription: "Class has been deleted successfully",
          errorDelete: "Error",
          errorDeleteDescription: "An error occurred while deleting the class",
        },
      },
    },

    myStudent: {
      title: "My Students",
      name: "Name",
      email: "Email",
      searchName: "Search name...",
      actions: "Actions",
      progress: "Progress",
      enroll: "Enroll",
      unEnroll: "Unenroll",
      resetProgress: "Reset Progress",
      resetTitle: "Reset all XP progress",
      resetDescription: "Are you sure you want to reset all progress?",
      reset: "Reset",
      cancelReset: "Cancel",

      enrollPage: {
        title: "Available enrolled class for {studentName}",
        add: "Add",
        search: "Search...",
        className: "Class Name",
        enroll: "Enroll",
        toast: {
          successEnrollment: "Successfully enrolled",
          successEnrollDescription: "Student has been enrolled in the class",
          errorEnrollment: "Enrollment Failed",
          errorEnrollDescription: "Student has not been enrolled in the class",
        },
      },
      unEnrollPage: {
        title: "Unenroll classes for {studentName}",
        remove: "Remove",
        search: "Search...",
        className: "Class Name",
        unEnroll: "Unenroll",
        toast: {
          successUnenrollment: "Successfully removed",
          successUnenrollDescription: "Student has been removed from class",
          errorUnenrollment: "Unenrollment Failed",
          errorUnenrollDescription:
            "Student has not been removed from the class",
        },
      },
    },

    classRoster: {
      title: "Roster for classroom: {className}",
      name: "Name",
      lastActivity: "Last Activity",
      actions: "Actions",
      history: "History",
      search: "Search name...",
      noStudent: "No student in this class",
      noClassroom: "No classroom selected",
      noClassroomDescription:
        "No classroom selected. Please select a classroom first.",
      addStudentButton: "Add new students",
      toast: {
        successResetProgress: "Successfully reset progress",
        successResetProgressDescription: "All progress has been reset",
      },

      addNewStudent: {
        title: "Add new Students to {className}",
        description:
          "Add new students to the classroom by entering their email addresses.",
        email: "Email: ",
        placeholder: "Enter email address",
        addStudent: "Add new student",
        warning: "To add a student, please fill in the required fields above.",
        saveButton: "SAVE AND CONTINUE",
        toast: {
          successAddStudent: "Student added",
          successAddStudentDescription:
            "Student successfully added to this class.",
          errorAddStudent: "Failed to add student",
          errorAddStudentDescription: "Failed to add student to this class.",
          emailNotFound: "Email not found",
          emailNotFoundDescription:
            "This email address isn't associated with any account. Please check the spelling or try a different email address.",
        },
      },
    },

    reports: {
      title: "Class Reports: {className}",
      averageLevel: "Average Level:",
      name: "Name",
      xp: "XP",
      level: "Level",
      search: "Search name...",
      lastActivity: "Last Activity",
      actions: "Actions",
      detail: "Detail",
      viewDetails: "View Details",
      noStudent: "No student in this class",
      noStudentDescription: "Please select class from My Classes",

      editStudent: {
        title: "Edit Student Details",
        description: "Update the student detail below",
        placeholder: "Student name",
        update: "Update Student",
        cancel: "Cancel",
        toast: {
          successUpdate: "Update Successful",
          successUpdateDescription: "Student information updated successfully",
          attentionUpdate: "Attention",
          attentionUpdateDescription: "Please fill in information",
          errorUpdate: "Update Failed",
          errorUpdateDescription: "Failed to update student information",
        },
      },
      removeStudent: {
        title: "Remove Student",
        descriptionBefore: "Do you want to remove ",
        descriptionAfter: " from this classroom?",
        remove: "Remove",
        cancel: "Cancel",
        toast: {
          successRemove: "Student successfully removed",
          successRemoveDescription: "Student has been removed successfully",
          errorRemove: "Error",
          errorRemoveDescription: "Error removing student in this class",
        },
      },
    },
    search: "Search...",

    chatBot: {
      textSuggestion: "Ask a question",
    },
    wordList: {
      title: "Word List",
      closeButton: "Close",
      saveButton: "Save",
      detail: "Select vocabulary and save for later practice.",
      tab: {
        flashcard: "Flashcard",
        matching: "Matching",
      },
      flashcard: {
        neverPracticeButton: "Do not practice this word anymore",
        description:
          "You can practice your reading skills with vocabulary cards. The ones you have saved will appear here.",
      },
      matching: {
        description:
          "Match the vocabulary with its translation. If you match all the words correctly, you will receive 5 XP.",
      },
    },
    laq: {
      practiceButton: "Practice Writing",
      successButton: "Practice Completed",
      cancelButton: "Cancel",
      feedbackButton: "Get Feedback",
      submitButton: "Submit",
      elapsedTime: "{time} seconds elapsed",
    },
  },

  selectType: {
    types: {
      nonfiction: "Nonfiction",
      "Biography and Memoir": "Biography and Memoir",
      "historical biography": "Historical Biography",
      "History and Mythology": "History and Mythology",
      "Genocide and Religious Studies": "Genocide and Religious Studies",
      fiction: "Fiction",
      "coming-of-age": "Children's Literature",
      "Friendship and Kindness": "Friendship and Kindness",
      "Ancient Civilizations": "Ancient Civilizations",
      "Fantasy and Science Fiction": "Fantasy and Science Fiction",
      Quest: "Quest",
      "Philosophy and Religion": "Philosophy and Religion",
      "Religious Studies": "Religious Studies",
      "Science and Nature": "Science and Nature",
      "Biology and Zoology": "Biology and Zoology",
      "Technology and Science": "Technology and Science",
      "Art and Culture": "Art and Culture",
      Calligraphy: "Calligraphy",
      "Survival Stories": "Survival Stories",
      "Space Colonization": "Space Colonization",
      "Marine and Animal Studies": "Marine and Animal Studies",
      "Artificial Intelligence and Space": "Artificial Intelligence and Space",
      Fantasy: "Fantasy",
      "Magical Realism": "Magical Realism",
      "Folklore and Mythology": "Folklore and Mythology",
      "African Mythology": "African Mythology",
      "epic fantasy": "Epic Fantasy",
      "Young Adult Fantasy": "Young Adult Fantasy",
      "Humorous Fiction": "Humorous Fiction",
      "Classic and Literary Fiction": "Classic and Literary Fiction",
      "Classic and Historical Fiction": "Classic and Historical Fiction",
      "Slice of Life": "Slice of Life",
      Media: "Media",
      "World Literature": "World Literature",
      "Romance and Contemporary": "Romance and Contemporary",
      "Young Adult": "Young Adult",
      "Animal fantasy": "Animal Fantasy",
      "Musical and Science Fiction": "Musical and Science Fiction",
      "Drama and Family": "Drama and Family",
      "Personal Growth": "Personal Growth",
      "magical realism": "Magical Realism",
      Music: "Music",
      "Thriller and Mystery": "Thriller and Mystery",
      "Treasure Hunt": "Treasure Hunt",
      Dystopian: "Dystopian",
      Adventure: "Adventure",
      Historical: "Historical",
      "Harlem Renaissance": "Harlem Renaissance",
      "Fairy Tale": "Fairy Tale",
      "portal fantasy": "Portal Fantasy",
      "Social Commentary": "Social Commentary",
      "Greek Mythology": "Greek Mythology",
      "Action and Adventure": "Action and Adventure",
      "Treasure Hunting": "Treasure Hunting",
      "Ancient Mythology": "Ancient Mythology",
      "Social and Emotional Learning": "Social and Emotional Learning",
      "Coming-of-Age and Gothic Fiction": "Coming-of-Age and Gothic Fiction",
      War: "War",
      "Engineering and Robotics": "Engineering and Robotics",
      "Musical Friendship Adventure": "Musical Friendship Adventure",
      "Slice of life": "Slice of Life",
      "Earth and Environmental Sciences": "Earth and Environmental Sciences",
      Superhero: "Superhero",
      "Space and Time Adventures": "Space and Time Adventures",
      "Social Sciences and Issues": "Social Sciences and Issues",
      "Diversity and Human Rights": "Diversity and Human Rights",
      "Digital and Consumer Electronics": "Digital and Consumer Electronics",
      "Biographical Fiction": "Biographical Fiction",
      "Political and Military History": "Political and Military History",
      "Japanese Folklore": "Japanese Folklore",
      "Fantasy and Folklore": "Fantasy and Folklore",
      "Wild West": "Wild West",
      "Adventure and Travel": "Adventure and Travel",
      "Travel Guides": "Travel Guides",
      "Supernatural Mystery": "Supernatural Mystery",
      Folklore: "Folklore",
      "Friendship and Inspiring Stories": "Friendship and Inspiring Stories",
      "Tall Tale": "Tall Tale",
      "Legends and Fairy Tales": "Legends and Fairy Tales",
      "Space Adventure": "Space Adventure",
      "Health and Wellness": "Health and Wellness",
      "Nutrition and Healthy Living": "Nutrition and Healthy Living",
      "School and Slice of Life": "School and Slice of Life",
      "Fitness and Exercise": "Fitness and Exercise",
      "Historical Biographical Fiction": "Historical Biographical Fiction",
      "Western and Pirate Adventures": "Western and Pirate Adventures",
      fantasy: "Fantasy",
      "Animal Fantasy": "Animal Fantasy",
      "Aztec Mythology": "Aztec Mythology",
      Supernatural: "Supernatural",
      "Environmental awareness": "Environmental Awareness",
      "Health and Wellness Technology": "Health and Wellness Technology",
      "Historical and Humorous Stories": "Historical and Humorous Stories",
      "Animal Adventures and Superheroes": "Animal Adventures and Superheroes",
      "Self-help": "Self-help",
      Wellness: "Wellness",
      "Children's Mystery": "Children's Mystery",
      "Indian Mythology": "Indian Mythology",
      "Community Celebration": "Community Celebration",
      "Gothic and Horror": "Gothic and Horror",
      Horror: "Horror",
      "Urban Exploration": "Urban Exploration",
      "Quests and Treasures": "Quests and Treasures",
      "Comedy and Humor": "Comedy and Humor",
      "Environmental conservation": "Environmental Conservation",
      "Professional and Personal Development":
        "Professional and Personal Development",
      "Mindfulness and Personal Development":
        "Mindfulness and Personal Development",
      "Virtual Reality and Exploration": "Virtual Reality and Exploration",
      "Crime Thriller": "Crime Thriller",
      Sociology: "Sociology",
      "Historical Adventure": "Historical Adventure",
      "Heroic Fantasy": "Heroic Fantasy",
      Detective: "Detective",
      "Social-emotional Learning": "Social-emotional Learning",
      Sports: "Sports",
      "Sports Biographies": "Sports Biographies",
      Festivals: "Festivals",
      "Detective Fiction": "Detective Fiction",
      Business: "Business",
      Entrepreneurship: "Entrepreneurship",
      "Children's literature": "Coming-of-age",
      "True Crime and Paranormal": "True Crime and Paranormal",
      "Horror Stories": "Horror Stories",
      "Fictional Characters": "Fictional Characters",
      "Portal Fantasy": "Portal Fantasy",
      "Historical Exploration": "Historical Exploration",
      "Mythology and Folklore": "Mythology and Folklore",
      "Cultural Diversity": "Cultural Diversity",
      Drama: "Young Adult Mystery",
      "Norse Mythology": "Norse Mythology",
      "Inspirational and Media Coverage": "Inspirational and Media Coverage",
      "Medical and Alternative Medicine": "Medical and Alternative Medicine",
      "Family and Parenting": "Family and Parenting",
      Parenting: "Parenting",
      "historical fiction": "Historical Fiction",
      "Space Exploration": "Space Exploration",
      "WWII Resistance": "WWII Resistance",
      "Native American Mythology": "Native American Mythology",
      "Environmental Sustainability": "Environmental Sustainability",
      Friendship: "Friendship",
      "Virtual Reality": "Virtual Reality",
      "Teen Detective": "Teen Detective",
      Fairytale: "Fairytale",
      "Social Justice": "Social Justice",
      "Types of Sports": "Types of Sports",
      Education: "Education",
      "Media and STEAM Education": "Media and STEAM Education",
      "Adventure and Mountaineering": "Adventure and Mountaineering",
      "Alien and Dystopian Encounters": "Alien and Dystopian Encounters",
      "Urban and High Fantasy": "Urban and High Fantasy",
      Classic: "Classic",
      "Historical and Contemporary Romance":
        "Historical and Contemporary Romance",
      "Military and Heroic Thrillers": "Military and Heroic Thrillers",
      "Modernist Literature": "Modernist Literature",
      "Serial Killers": "Serial Killers",
      "Art Techniques": "Art Techniques",
      "Art Theft": "Art Theft",
      Mythology: "Mythology",
      "Hindu Mythology": "Hindu Mythology",
      "Children's Fantasy": "Children's Fantasy",
      "Film and Media": "Film and Media",
      Western: "Western",
      Surrealism: "Surrealism",
      "Cultural and Culinary Travel": "Cultural and Culinary Travel",
      "Animal and Sea Adventures": "Animal and Sea Adventures",
      "Fairy Tales": "Fairy Tales",
      "Detective Club": "Detective Club",
      "Arthurian Legend": "Arthurian Legend",
      Hauntings: "Hauntings",
      Memoirs: "Memoirs",
      "Environmental and Cultural Education":
        "Environmental and Cultural Education",
      Philosophy: "Philosophy",
      "Tall Tales": "Tall Tales",
      "Community Conflict": "Community Conflict",
      "Forbidden Love": "Forbidden Love",
      "Creation Myth": "Creation Myth",
      Legend: "Legend",
      Fable: "Fable",
      "Historical Fiction": "Historical fiction",
      "Historical Biography": "Historical biography",
      "Cultural and Celebrity Memoirs": "Cultural and Celebrity Memoirs",
      "Political and Medical Memoirs": "Political and Medical Memoirs",
      "Textile Art": "Textile Art",
      Prankster: "Prankster",
      "Medieval Adventure": "Medieval Adventure",
      "Civic and Civil Rights": "Civic and Civil Rights",
      "Mystery and Sports": "Mystery and Sports",
      "Psychological Horror": "Psychological Horror",
      "Library and Global Issues": "Library and Global Issues",
      "young adult mystery": "Gothic horror",
      "Diversity and Relationships": "Diversity and Relationships",
      "Supernatural Creatures": "Supernatural Creatures",
      "Epic and Heroic": "Epic and Heroic",
      tragedy: "Tragedy",
      "Animal adventure": "Animal Adventure",
      "Environmental Conservation": "Environmental Conservation",
      "Western Adventure": "Western Adventure",
      "Supernatural Phenomena": "Supernatural Phenomena",
      "Military Fiction": "Military Fiction",
      "Food and Culinary Arts": "Food and Culinary Arts",
      "Culinary Arts": "Culinary Arts",
      "Family Drama": "Family Drama",
      "Career and Communication": "Career and Communication",
      "Mental Health and Problem-solving": "Mental Health and Problem-solving",
      "heroic fantasy": "Heroic Fantasy",
      "Women's Suffrage Movement": "Women's Suffrage Movement",
      "Slavic Mythology": "Slavic Mythology",
      "Friendship and Adventure": "Friendship and Adventure",
      "Eastern European Mythology": "Eastern European Mythology",
      "Historical Mystery": "Historical Mystery",
      "Inuit Mythology": "Inuit Mythology",
      Comedy: "Comedy",
      Psychology: "Psychology",
      "Music and Memory": "Music and Memory",
      "Mythical Creatures": "Mythical Creatures",
      "Environmental Awareness": "Environmental awareness",
      "Career and Digital Learning": "Career and Digital Learning",
      Podcasts: "Podcasts",
      "Virtual Reality Adventure": "Virtual Reality Adventure",
      "War Fiction": "War Fiction",
      "Child and Educational Psychology": "Child and Educational Psychology",
      "Andean Mythology": "Andean Mythology",
      Military: "Military",
      "Sports Inspirational Fiction": "Sports Inspirational Fiction",
      "Charity and Community Service": "Charity and Community Service",
      "Friendship and Growth": "Friendship and Growth",
      "Coming-of-age": "Coming-of-Age",
      "Inspiring story": "Mystery",
      "Natural Disasters": "Natural Disasters",
      "Quest Fantasy": "Quest Fantasy",
      "Epic Fantasy": "Epic Fantasy",
      "Sports Fiction": "Sports Fiction",
      "Language and Literature": "Language and Literature",
      "Writing and Translation": "Writing and Translation",
      mystery: "Inspiring Story",
      "Existential and Absurdist Fiction": "Existential and Absurdist Fiction",
      "Children's Historical Fiction": "Children's Historical Fiction",
      Wizardry: "Wizardry",
      "West African Mythology": "West African Mythology",
      "Post-Apocalyptic": "Post-Apocalyptic",
      "Animal Fiction": "Animal Fiction",
      "Language Mastery": "Language Mastery",
      "Military ethics": "Military Ethics",
      "Sports Drama": "Sports Drama",
      "Renaissance Art": "Renaissance Art",
      Pirate: "Pirate",
      "Folk Tale": "Folk Tale",
      "Communication and Conflict Resolution":
        "Communication and Conflict Resolution",
      "Psychological Thriller": "Psychological Thriller",
      Medical: "Medical",
      "Medical Fields": "Medical Fields",
      "Budget and City Travel": "Budget and City Travel",
      "Cultural Heritage": "Cultural Heritage",
      "Greek Myth": "Greek Myth",
      "Chinese Mythology": "Chinese Mythology",
      Legends: "Legends",
      "Classic Western and Frontier Adventure":
        "Classic Western and Frontier Adventure",
      Relationships: "Relationships",
      "Eastern European Folklore": "Eastern European Folklore",
      "Epic Myth": "Epic Myth",
      "The Haunting Shadows: An Exploration of Psychological Horror":
        "The Haunting Shadows: An Exploration of Psychological Horror",
      "Western Mystery": "Western Mystery",
      "Regency Romance": "Regency Romance",
      School: "School",
      "Religious Fiction": "Religious Fiction",
      "Christian Fiction": "Christian Fiction",
      "Romantic Tragedy": "Romantic Tragedy",
      "Domestic Life": "Domestic Life",
      "Medieval Fantasy": "Medieval Fantasy",
      "Classic Fairy Tales": "Classic Fairy Tales",
      Cyberpunk: "Cyberpunk",
      Spy: "Spy",
      Epic: "Epic",
      Humorous: "Humorous",
      Contemporary: "Contemporary",
      Realism: "Realism",
      Community: "Community",
      "Cowgirl Adventure": "Cowgirl Adventure",
      "Heroic Myth": "Heroic Myth",
      "Urban Fiction": "Urban Fiction",
      Travel: "Travel",
      "Friendship and Music": "Friendship and Music",
      "Supernatural Horror": "Supernatural Horror",
      "Political Thriller": "Political Thriller",
      "Southern Gothic": "Southern Gothic",
      Geography: "Geography",
      "Desert Exploration": "Desert Exploration",
      "Ecotourism and Historical Travel": "Ecotourism and Historical Travel",
      Comics: "Comics",
      "Community Service": "Community Service",
      "Social issues": "Social Issues",
      "Child Development": "Child Development",
      "Parallel Universe": "Parallel Universe",
      "Revolutionary War Fiction": "Revolutionary War Fiction",
      "School life": "School Life",
      "Coming-of-Age": "Coming-of-Age",
      "Friendship and teamwork": "Friendship and Teamwork",
      Inspiration: "Inspiration",
      "Ancient Rome": "Ancient Rome",
      "Time Travel": "Time Travel",
      "Time Travel Comedy": "Time Travel Comedy",
      "Musical adventure": "Musical Adventure",
      "Classic Fairy Tale": "Classic Fairy Tale",
      "Music Therapy": "Music Therapy",
      Existentialism: "Existentialism",
      "Superhero Comedy": "Superhero Comedy",
      "Animal welfare": "Animal Welfare",
      "Ancient Civilization": "Ancient Civilization",
      "Inspiring Story": "Inspiring Story",
      "Contemporary Fiction": "Contemporary Fiction",
      "Classic Literature": "Classic Literature",
      novel: "Novel",
      "Community activism": "Drama",
      "Relationship Drama and Romantic Suspense":
        "Relationship Drama and Romantic Suspense",
      Mystery: "Mystery",
      "Young Adult Mystery": "Young Adult Mystery",
      "Gothic Horror": "Community Activism",
      "Psychological Fiction": "Psychological Fiction",
      Resistance: "Resistance",
      "historical activism": "Historical Activism",
      "Magical School": "Magical School",
      "Gothic horror": "Gothic Horror",
      Renaissance: "Renaissance",
      "Friendship and Values": "Friendship and Values",
      "Comics and Graphic Novels": "Comics and Graphic Novels",
      "Second Chance Romance": "Second Chance Romance",
      "Global Governance": "Global Governance",
      "American and Contemporary Fiction": "American and Contemporary Fiction",
      "Children's": "Children's",
      Legendary: "Legendary",
      "Slice of Life in a Small Village": "Slice of Life in a Small Village",
      Espionage: "Espionage",
      "School Stories": "School Stories",
      "Romantic Fiction": "Romantic Fiction",
      "Children's Literature": "Children's Literature",
      "Animal Fable": "Animal Fable",
      "Western Legends": "Western Legends",
      "Religious Fantasy": "Religious Fantasy",
      "Bounty Hunters and Gold Rush": "Bounty Hunters and Gold Rush",
      Thriller: "Thriller",
      "Korean Mythology": "Korean Mythology",
      Metafiction: "Metafiction",
      "community activism": "Community Activism",
      "Military espionage": "Military Espionage",
      "Book Club": "Book Club",
      drama: "Drama",
      "Alien Encounter": "Alien Encounter",
      "World War II Resistance": "World War II Resistance",
      "Renaissance Adventure": "Renaissance Adventure",
    },
  },
} as const;
