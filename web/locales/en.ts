export default {
  pages: {
    indexPage: {
      description:
        "Extensive reading app incorporating AI. Alpha version and testing in progress.",
      getStartedButton: "Get Started",
    },
    loginPage: {
      loginDescription: "Log in to your account",
      backButton: "Back",
    },
    student: {
      readPage: {
        //Headings
        articleSelection: "Article Selection",
        // nextquiz/[articleId] page
        article: {
          articleNotFound: "Article not found",
          articleInsufficientLevel:
            "You cannot read this article because your reading level is insufficient.",
          //headings
          readBefore: "You have read this article before",
          readBeforeDescription:
            "You might try reading and practicing again to improve your reading skills. And this is the result of your previous reading.",
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
          timeSpend: "Time spend",
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
        flashcard: "Flashcard",
        //descriptions
        flashcardDescription:
          "You can practice your reading skills with flashcards. and your saved sentences will be displayed here.",
        savedSentences: "Saved Sentences",
        noSavedSentences: "You have no saved sentences.",
        savedSentencesDescription: "Your have {total} saved sentences.",
        added: "Added {date}",
        deleteButton: "Delete",
        toast: {
          success: "Success",
          successDescription: "Delete saved sentence successfully",
          error: "Error",
          errorDescription:
            "Something went wrong while deleting saved sentence",
        },
        flashcardPractice: {
          buttonVeryHard: "Very Hard",
          buttonHard: "Hard",
          buttonGood: "Good",
          buttonEasy: "Easy",
          flipCard:'Flip'
        },
      },
    },
  },
  components: {
    mainNav: {
      home: "Home",
      about: "About",
      contact: "Contact",
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
      history: "History",
      practice: "Practice",
      reports: "Reports",
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
    // use this for article selection page
    // this is the select component
    select: {
      articleChoose: "Please choose the {article} you want to read",
      articleChooseDescription:
        "Your level is {level} and here are the {article} that you can choose.",
    },
    // use this for article selection page
    article: {
      type: "article type",
      genre: "article genre",
      subGenre: "article sub-genre",
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
      translateฺButton: {
        open: "",
        close: "",
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
  },
} as const;
