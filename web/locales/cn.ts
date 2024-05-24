export default {
  pages: {
    indexPage: {
      description: "综合阅读应用, 集成了AI。目前正在进行Beta测试。",
      getStartedButton: "开始",
    },
    loginPage: {
      loginDescription: "登录到您的账户",
      backButton: "返回",
    },
    student: {
      readPage: {
        articleSelection: "文章选择",
        article: {
          articleNotFound: "找不到文章",
          articleInsufficientLevel: "您的阅读水平不足，无法阅读此文章。",
          readBefore: "您之前读过这篇文章",
          readBeforeDescription:
            "您可以再次阅读并练习，以提高您的阅读技能。这是您之前阅读的结果。",
          status: "状态",
          statusText: {
            completed: "已完成",
            uncompleted: "未完成",
          },
          statusDescription: "最后更新于 {date}",
          score: "测验分数",
          scoreText: "{score}",
          scoreDescription: "共 {total} 个问题",
          rated: "已评分",
          ratedText: "{rated} 分",
          ratedDescription: "您对这篇文章的评分",
          timeSpend: "花费时间",
          timeSpendText: "{time}",
          timeSpendDescription: "在 {total} 个问题中",
          scoreSuffix: {
            point: "分",
            points: "分",
          },
          secondSuffix: {
            second: "秒",
            seconds: "秒",
          },
        },
      },
      historyPage: {
        reminderToReread: "重读提醒",
        articleRecords: "文章记录",
        reminderToRereadDescription:
          "您可能想再次尝试阅读这些文章，以查看您是否有所提高。",
        articleRecordsDescription: "您的阅读记录将在这里显示。",
      },
      practicePage: {
        flashcard: "单词卡",
        manage: "管理",
        orderSentences: "排列句子",
        clozeTest: "填空测试",
        orderWords: "排序单词",
        matching: "匹配",
        flashcardDescription:
          "您可以使用单词卡来练习您的阅读技能，您保存的句子将在这里显示。",
        savedSentences: "保存的句子",
        noSavedSentences: "您没有保存的句子。",
        savedSentencesDescription: "您有 {total} 个保存的句子。",
        added: "添加于 {date}",
        deleteButton: "删除",
        neverPracticeButton: "不用再练习这个句子了",
        toast: {
          success: "成功",
          successDescription: "成功删除保存的句子",
          error: "错误",
          errorDescription: "删除保存的句子时出错",
        },
        flashcardPractice: {
          buttonEasy: "容易",
          buttonHard: "难",
          buttonGood: "好",
          buttonAgain: "再来",
          flipCard: "翻转",
          nextButton: "下一个",
          yourXp: "您已经获得了 {xp} XP 为这个活动。",
        },
        orderSentencesPractice: {
          orderSentences: "排列句子",
          orderSentencesDescription:
            "这些是你读过的某篇文章中的一些句子。请按照对你有意义的顺序排列这些句子。如果顺序与文章中的相同，你将获得5经验值。",
          saveOrder: "保存并稍后继续",
          errorOrder: "请正确排序",
        },
        clozeTestPractice: {
          clozeTest: "填空测试",
          clozeTestDescription:
            "这是你读过的一篇文章中的几个句子，请填写缺失的单词以完成它们。如果你回答正确，你将获得5经验值。",
          submitButton: "提交",
          errorCloze: "请填写所有空白处",
        },
        orderWordsPractice: {
          orderWords: "排序单词",
          orderWordsDescription:
            "这是你读过的一段文字中的一句。请将这些单词按对你有意义的顺序排列。如果这些单词的顺序与文章中的相同，你将获得5经验点。",
          saveOrder: "继续",
          errorOrder: "请正确排序",
          submitArticle: "检查你的答案",
          nextPassage: "下一段落",
          tryToSortThisSentence: "尝试排序这个句子",
        },
        matchingPractice: {
          matching: "配对",
          matchingDescription:
            "将句子与其翻译进行匹配。如果你正确匹配了所有句子，你将获得5 XP。",
          saveOrder: "保存并稍后继续",
          errorOrder: "请正确排序",
          submitArticle: "检查你的答案",
          nextPassage: "下一段",
          minSentencesAlert: "您至少需要保存五个句子才能进行这项活动。",
        },
      },
    },
  },
  components: {
    mainNav: {
      home: "主页",
      about: "关于",
      contact: "联系",
      authors: "作者",
    },
    userAccountNav: {
      level: "等级 {level}",
      settings: "设置",
      signOut: "登出",
    },
    themeSwitcher: {
      dark: "暗模式",
      light: "亮模式",
      system: "系统",
    },
    localeSwitcher: {
      en: "English",
      th: "ไทย",
      cn: "简体字",
      tw: "繁體字",
      vi: "Tiếng Việt",
    },
    sidebarNav: {
      read: "阅读",
      history: "历史",
      sentences: "句子",
      reports: "报告",
    },
    sidebarTeacherNav: {
      myClasses: "我的课程",
      myStudents: "我的学生",
      classRoster: "班级名单",
      reports: "报告",
      passages: "段落",
      assignments: "作业",
    },
    articleRecordsTable: {
      title: "标题",
      date: "日期",
      rated: "已评分",
      search: "搜索标题...",
      previous: "上一个",
      next: "下一个",
      select: "已选择 {selected} 个，共 {total} 个",
    },
    firstRunLevelTest: {
      heading: "让我们开始测试你的技能吧！",
      description: "选择正确的答案来评估您的阅读水平。",
      nextButton: "下一个",
      section: "部分 {currentSectionIndex}",
      toast: {
        successUpdate: "成功！",
        successUpdateDescription: "您的经验和等级已更新。",
        attention: "注意",
        attentionDescription: "请回答所有问题!",
        errorTitle: "出了点问题。",
        errorDescription: "您的经验和等级未更新。请重试。",
      },
      congratulations: "恭喜!",
      congratulationsDescription: "评估完成。",
      yourScore: "你的分数 : {xp}",
      yourCefrLevel: "你的 CEFR 等级 : {cefrLevel}",
      yourRaLevel: "你的 RA 级别 : {raLevel}",
      getStartedButton: "开始",
    },
    progressBarXp: {
      xp: "经验: ",
      level: "等级 {level}",
      congratulations: "恭喜!",
      upLevel: "您已獲得新等級！",
      close: "关闭",
    },
    select: {
      articleChoose: "请选择您想阅读的 {article}",
      articleChooseDescription:
        "您的级别是 {level}，这里是您可以选择的 {article}。",
    },
    article: {
      type: "文章类型",
      genre: "文章种类",
      subGenre: "文章子类",
      article: "文章",
    },
    articleCard: {
      raLevel: "阅读能力等级为 {raLevel}",
      cefrLevel: "CEFR 等级为 {cefrLevel}",
      articleCardDescription: "该文章涉及 {topic} 主题，属于 {genre} 类别。",
    },
    articleContent: {
      voiceAssistant: "语音助手",
      soundButton: {
        play: "播放声音",
        pause: "暂停声音",
      },
      // button translate
      translateฺButton: {
        open: "翻译",
        close: "關閉翻譯視窗",
      },
    },
    mcq: {
      quiz: "测验",
      reQuiz: "重新测验",
      quizDescription:
        "开始测验以测试您的知识，并看看这篇文章对您来说有多容易。",
      reQuizDescription:
        "您之前完成过这个测验。您可以重新参加测验以提高您的分数。",
      startButton: "开始测验",
      retakeButton: "重新测验",
      elapsedTime: "已用时间 {time} 秒",
      questionHeading: "问题 {number}，共 {total} 个",
      nextQuestionButton: "下一个问题",
      toast: {
        correct: "正确",
        correctDescription: "您答对了！",
        incorrect: "错误",
        incorrectDescription: "您答错了！",
        quizCompleted: "测验完成",
        quizCompletedDescription: "您已完成测验",
        error: "错误",
        errorDescription: "提交答案时出错，请稍后再试。",
      },
    },
    rate: {
      title: "评价这篇文章",
      content: "你如何评价本文的质量?",
      description: "此评分用于计算您下一级别。",
      newLevel: "您的新级别是 {level}",
      submitButton: "提交",
      backToHomeButton: "返回主页",
      nextQuizButton: "下一个测验",
      toast: {
        success: "成功",
        successDescription: "您的新级别是 {level}。",
      },
    },
    audioButton: {
      play: "播放声音",
      pause: "暂停声音",
    },
    menu: "菜单",
    loginButton: "登录",
    
    passages: {
      heading: "段落",
      type: "类型",
      fiction: "小说",
      nonFiction: "非小说类",
      topic: "主题",
      selectGenre: "选择类型",
      selectSubGenre: "选择子流派",
      level: "级别",
      search: "搜索...",
    }
  },
  selectType: {
    types: {
      "nonfiction": "非小说",
      "Biography and Memoir": "传记和回忆录",
      "historical biography": "历史传记",
      "History and Mythology": "历史和神话",
      "Genocide and Religious Studies": "种族灭绝和宗教研究",
      "fiction": "小说",
      "coming-of-age": "儿童文学",
      "Friendship and Kindness": "友谊和仁爱",
      "Ancient Civilizations": "古代文明",
      "Fantasy and Science Fiction": "奇幻与科幻",
      "Quest": "探险",
      "Philosophy and Religion": "哲学和宗教",
      "Religious Studies": "宗教研究",
      "Science and Nature": "科学和自然",
      "Biology and Zoology": "生物学和动物学",
      "Technology and Science": "技术和科学",
      "Art and Culture": "艺术和文化",
      "Calligraphy": "书法",
      "Survival Stories": "生存故事",
      "Space Colonization": "太空殖民",
      "Marine and Animal Studies": "海洋和动物研究",
      "Artificial Intelligence and Space": "人工智能和空间",
      "Fantasy": "奇幻",
      "Magical Realism": "魔幻现实主义",
      "Folklore and Mythology": "民间传说和神话",
      "African Mythology": "非洲神话",
      "epic fantasy": "史诗奇幻小说",
      "Young Adult Fantasy": "青少年奇幻小说",
      "Humorous Fiction": "幽默小说",
      "Classic and Literary Fiction": "经典和文学小说",
      "Classic and Historical Fiction": "经典和历史小说",
      "Slice of Life": "日常生活",
      "Media": "媒体",
      "World Literature": "世界文学",
      "Romance and Contemporary": "浪漫与当代",
      "Young Adult": "青少年",
      "Animal fantasy": "动物奇幻小说",
      "Musical and Science Fiction": "音乐和科幻小说",
      "Drama and Family": "戏剧和家庭",
      "Personal Growth": "个人成长",
      "magical realism": "魔幻现实主义",
      "Music": "音乐",
      "Thriller and Mystery": "惊悚和神秘",
      "Treasure Hunt": "寻宝",
      "Dystopian": "反乌托邦",
      "Adventure": "冒险",
      "Historical": "历史",
      "Harlem Renaissance": "哈莱姆复兴",
      "Fairy Tale": "童话故事",
      "portal fantasy": "传送门奇幻",
      "Social Commentary": "社会评论",
      "Greek Mythology": "希腊神话",
      "Action and Adventure": "动作与冒险",
      "Treasure Hunting": "寻宝",
      "Ancient Mythology": "古代神话",
      "Social and Emotional Learning": "社会和情感学习",
      "Coming-of-Age and Gothic Fiction": "成长和哥特小说",
      "War": "战争",
      "Engineering and Robotics": "工程与机器人学",
      "Musical Friendship Adventure": "音乐友谊冒险",
      "Slice of life": "日常生活",
      "Earth and Environmental Sciences": "地球和环境科学",
      "Superhero": "超级英雄",
      "Space and Time Adventures": "时空冒险",
      "Social Sciences and Issues": "社会科学和问题",
      "Diversity and Human Rights": "多样性和人权",
      "Digital and Consumer Electronics": "数码和消费电子",
      "Biographical Fiction": "传记小说",
      "Political and Military History": "政治和军事历史",
      "Japanese Folklore": "日本民间传说",
      "Fantasy and Folklore": "奇幻和民间传说",
      "Wild West": "西部荒野",
      "Adventure and Travel": "冒险和旅行",
      "Travel Guides": "旅行指南",
      "Supernatural Mystery": "超自然之谜",
      "Folklore": "民间传说",
      "Friendship and Inspiring Stories": "友情和励志故事",
      "Tall Tale": "荒诞故事",
      "Legends and Fairy Tales": "传奇和童话",
      "Space Adventure": "太空冒险",
      "Health and Wellness": "健康与健康",
      "Nutrition and Healthy Living": "营养与健康生活",
      "School and Slice of Life": "学校和日常生活",
      "Fitness and Exercise": "健身和运动",
      "Historical Biographical Fiction": "历史传记小说",
      "Western and Pirate Adventures": "西部和海盗冒险",
      "fantasy": "奇幻",
      "Animal Fantasy": "动物奇幻小说",
      "Aztec Mythology": "阿兹特克神话",
      "Supernatural": "超自然",
      "Environmental awareness": "环保意识",
      "Health and Wellness Technology": "健康和健康技术",
      "Historical and Humorous Stories": "历史和幽默故事",
      "Animal Adventures and Superheroes": "动物冒险和超级英雄",
      "Self-help": "自助",
      "Wellness": "健康",
      "Children's Mystery": "儿童推理",
      "Indian Mythology": "印度神话",
      "Community Celebration": "社区庆祝",
      "Gothic and Horror": "哥特和恐怖",
      "Horror": "恐怖",
      "Urban Exploration": "城市探险",
      "Quests and Treasures": "探险和宝藏",
      "Comedy and Humor": "喜剧和幽默",
      "Environmental conservation": "环境保护",
      "Professional and Personal Development": "职业和个人发展",
      "Mindfulness and Personal Development": "正念和个人发展",
      "Virtual Reality and Exploration": "虚拟现实和探索",
      "Crime Thriller": "犯罪惊悚",
      "Sociology": "社会学",
      "Historical Adventure": "历史冒险",
      "Heroic Fantasy": "英雄奇幻",
      "Detective": "侦探",
      "Social-emotional Learning": "社会情感学习",
      "Sports": "体育",
      "Sports Biographies": "体育传记",
      "Festivals": "节日",
      "Detective Fiction": "侦探小说",
      "Business": "商业",
      "Entrepreneurship": "创业",
      "Children's literature": "成长",
      "True Crime and Paranormal": "真实犯罪和超自然",
      "Horror Stories": "恐怖故事",
      "Fictional Characters": "虚构人物",
      "Portal Fantasy": "传送门奇幻",
      "Historical Exploration": "历史探索",
      "Mythology and Folklore": "神话和民间传说",
      "Cultural Diversity": "文化多样性",
      "Drama": "青少年悬疑",
      "Norse Mythology": "北欧神话",
      "Inspirational and Media Coverage": "灵感和媒体报道",
      "Medical and Alternative Medicine": "医学和替代医学",
      "Family and Parenting": "家庭和育儿",
      "Parenting": "育儿",
      "historical fiction": "历史小说",
      "Space Exploration": "太空探索",
      "WWII Resistance": "二战抵抗",
      "Native American Mythology": "美洲原住民神话",
      "Environmental Sustainability": "环境可持续性",
      "Friendship": "友谊",
      "Virtual Reality": "虚拟现实",
      "Teen Detective": "青少年侦探",
      "Fairytale": "童话",
      "Social Justice": "社会正义",
      "Types of Sports": "体育运动类型",
      "Education": "教育",
      "Media and STEAM Education": "媒体和STEAM教育",
      "Adventure and Mountaineering": "探险和登山",
      "Alien and Dystopian Encounters": "外星人和反乌托邦相遇",
      "Urban and High Fantasy": "城市和高级奇幻",
      "Classic": "经典",
      "Historical and Contemporary Romance": "历史和现代浪漫",
      "Military and Heroic Thrillers": "军事和英雄惊悚",
      "Modernist Literature": "现代主义文学",
      "Serial Killers": "连环杀手",
      "Art Techniques": "艺术技巧",
      "Art Theft": "艺术盗窃",
      "Mythology": "神话",
      "Hindu Mythology": "印度神话",
      "Children's Fantasy": "儿童幻想",
      "Film and Media": "电影和媒体",
      "Western": "西部片",
      "Surrealism": "超现实主义",
      "Cultural and Culinary Travel": "文化和烹饪旅行",
      "Animal and Sea Adventures": "动物和海洋冒险",
      "Fairy Tales": "童话故事",
      "Detective Club": "侦探俱乐部",
      "Arthurian Legend": "亚瑟王传奇",
      "Hauntings": "鬼故事",
      "Memoirs": "回忆录",
      "Environmental and Cultural Education": "环境和文化教育",
      "Philosophy": "哲学",
      "Tall Tales": "神话故事",
      "Community Conflict": "社区冲突",
      "Forbidden Love": "禁忌之爱",
      "Creation Myth": "创世神话",
      "Legend": "传奇",
      "Fable": "寓言",
      "Historical Fiction": "历史小说",
      "Historical Biography": "历史传记",
      "Cultural and Celebrity Memoirs": "文化和名人传记",
      "Political and Medical Memoirs": "政治和医学回忆录",
      "Textile Art": "纺织艺术",
      "Prankster": "恶作剧者",
      "Medieval Adventure": "中世纪冒险",
      "Civic and Civil Rights": "公民和公民权利",
      "Mystery and Sports": "神秘和体育",
      "Psychological Horror": "心理恐怖",
      "Library and Global Issues": "图书馆和全球问题",
      "young adult mystery": "哥特式恐怖",
      "Diversity and Relationships": "多样性和关系",
      "Supernatural Creatures": "超自然生物",
      "Epic and Heroic": "史诗和英勇",
      "tragedy": "悲剧",
      "Animal adventure": "动物冒险",
      "Environmental Conservation": "环境保护",
      "Western Adventure": "西部冒险",
      "Supernatural Phenomena": "超自然现象",
      "Military Fiction": "军事小说",
      "Food and Culinary Arts": "食品和烹饪艺术",
      "Culinary Arts": "烹饪艺术",
      "Family Drama": "家庭剧",
      "Career and Communication": "职业和沟通",
      "Mental Health and Problem-solving": "心理健康和问题解决",
      "heroic fantasy": "英雄幻想",
      "Women's Suffrage Movement": "妇女解放运动",
      "Slavic Mythology": "斯拉夫神话",
      "Friendship and Adventure": "友谊和冒险",
      "Eastern European Mythology": "东欧神话",
      "Historical Mystery": "历史悬疑",
      "Inuit Mythology": "因纽特神话",
      "Comedy": "喜剧",
      "Psychology": "心理学",
      "Music and Memory": "音乐和记忆",
      "Mythical Creatures": "神秘生物",
      "Environmental Awareness": "环境意识",
      "Career and Digital Learning": "职业和数字学习",
      "Podcasts": "播客",
      "Virtual Reality Adventure": "虚拟现实冒险",
      "War Fiction": "战争小说",
      "Child and Educational Psychology": "儿童和教育心理学",
      "Andean Mythology": "安第斯神话",
      "Military": "军事",
      "Sports Inspirational Fiction": "体育励志小说",
      "Charity and Community Service": "慈善和社区服务",
      "Friendship and Growth": "友谊和成长",
      "Coming-of-age": "成人",
      "Inspiring story": "神秘",
      "Natural Disasters": "自然灾害",
      "Quest Fantasy": "寻找奇迹",
      "Epic Fantasy": "史诗奇幻小说",
      "Sports Fiction": "体育小说",
      "Language and Literature": "语言和文学",
      "Writing and Translation": "写作和翻译",
      "mystery": "励志故事",
      "Existential and Absurdist Fiction": "存在主义和荒诞主义小说",
      "Children's Historical Fiction": "儿童历史小说",
      "Wizardry": "巫术",
      "West African Mythology": "西非神话",
      "Post-Apocalyptic": "末日后",
      "Animal Fiction": "动物小说",
      "Language Mastery": "语言掌握",
      "Military ethics": "军事伦理",
      "Sports Drama": "体育剧",
      "Renaissance Art": "文艺复兴艺术",
      "Pirate": "海盗",
      "Folk Tale": "民间故事",
      "Communication and Conflict Resolution": "沟通和冲突解决",
      "Psychological Thriller": "心理惊悚片",
      "Medical": "医学",
      "Medical Fields": "医学领域",
      "Budget and City Travel": "预算和城市旅行",
      "Cultural Heritage": "文化遗产",
      "Greek Myth": "希腊神话",
      "Chinese Mythology": "中国神话",
      "Legends": "传奇",
      "Classic Western and Frontier Adventure": "经典西部和边境冒险",
      "Relationships": "关系",
      "Eastern European Folklore": "东欧民间传说",
      "Epic Myth": "史诗神话",
      "The Haunting Shadows: An Exploration of Psychological Horror": "令人恐惧的阴影：心理恐怖的探索",
      "Western Mystery": "西部神秘",
      "Regency Romance": "摄政时代浪漫",
      "School": "学校",
      "Religious Fiction": "宗教小说",
      "Christian Fiction": "基督教小说",
      "Romantic Tragedy": "浪漫悲剧",
      "Domestic Life": "家庭生活",
      "Medieval Fantasy": "中世纪幻想",
      "Classic Fairy Tales": "经典童话",
      "Cyberpunk": "赛博朋克",
      "Spy": "间谍",
      "Epic": "史诗",
      "Humorous": "幽默",
      "Contemporary": "当代",
      "Realism": "现实主义",
      "Community": "社区",
      "Cowgirl Adventure": "牛仔冒险",
      "Heroic Myth": "英雄神话",
      "Urban Fiction": "都市小说",
      "Travel": "旅行",
      "Friendship and Music": "友谊和音乐",
      "Supernatural Horror": "超自然恐怖",
      "Political Thriller": "政治惊悚小说",
      "Southern Gothic": "南方哥特",
      "Geography": "地理",
      "Desert Exploration": "沙漠探险",
      "Ecotourism and Historical Travel": "生态旅游和历史旅游",
      "Comics": "漫画",
      "Community Service": "社区服务",
      "Social issues": "社会问题",
      "Child Development": "儿童发展",
      "Parallel Universe": "平行宇宙",
      "Revolutionary War Fiction": "革命战争小说",
      "School life": "校园生活",
      "Coming-of-Age": "成长",
      "Friendship and teamwork": "友谊和团队合作",
      "Inspiration": "灵感",
      "Ancient Rome": "古罗马",
      "Time Travel": "时间旅行",
      "Time Travel Comedy": "时间旅行喜剧",
      "Musical adventure": "音乐冒险",
      "Classic Fairy Tale": "经典童话",
      "Music Therapy": "音乐疗法",
      "Existentialism": "存在主义",
      "Superhero Comedy": "超级英雄喜剧",
      "Animal welfare": "动物福利",
      "Ancient Civilization": "古代文明",
      "Inspiring Story": "励志故事",
      "Contemporary Fiction": "当代小说",
      "Classic Literature": "经典文学",
      "novel": "小说",
      "Community activism": "戏剧",
      "Relationship Drama and Romantic Suspense": "关系剧和浪漫悬疑",
      "Mystery": "神秘",
      "Young Adult Mystery": "青少年神秘小说",
      "Gothic Horror": "社区行动",
      "Psychological Fiction": "心理小说",
      "Resistance": "抵抗",
      "historical activism": "历史行动主义",
      "Magical School": "魔法学校",
      "Gothic horror": "哥特式恐怖",
      "Renaissance": "文艺复兴",
      "Friendship and Values": "友谊和价值观",
      "Comics and Graphic Novels": "漫画和图像小说",
      "Second Chance Romance": "第二次机会的浪漫",
      "Global Governance": "全球治理",
      "American and Contemporary Fiction": "美国和当代小说",
      "Children's": "儿童",
      "Legendary": "传奇",
      "Slice of Life in a Small Village": "小村庄的生活",
      "Espionage": "间谍",
      "School Stories": "校园故事",
      "Romantic Fiction": "浪漫小说",
      "Children's Literature": "儿童文学",
      "Animal Fable": "动物寓言",
      "Western Legends": "西部传奇",
      "Religious Fantasy": "宗教幻想",
      "Bounty Hunters and Gold Rush": "赏金猎人和淘金热",
      "Thriller": "惊悚",
      "Korean Mythology": "韩国神话",
      "Metafiction": "元小说",
      "community activism": "社区行动主义",
      "Military espionage": "军事间谍",
      "Book Club": "读书俱乐部",
      "drama": "戏剧",
      "Alien Encounter": "外星人遭遇",
      "World War II Resistance": "二战抵抗",
      "Renaissance Adventure": "文艺复兴冒险"
    }
  }
} as const;
