import rathnapuraImg from '../assets/images/specialExhibition/The Land — Rathnapura.jpg';
import walawwaImg from '../assets/images/specialExhibition/Trust — Walawwa Culture.jpg';
import prinseImg from '../assets/images/specialExhibition/Prinse Jayawardena.jfif';
import balangodaImg from '../assets/images/specialExhibition/Lives Intertwined — Balangoda.jpg';
import marketImg from '../assets/images/specialExhibition/Learning — The Market.png';
import roadImg from '../assets/images/specialExhibition/The Road — Conflict and Continuity.jpg';
import rubyJewellersImg from '../assets/images/specialExhibition/Craft — Ruby Jewellers.JPG';
import futureImg from '../assets/images/specialExhibition/Future — Ethical Sri Lanka.jpg';
import contextHistoryImg from '../assets/images/specialExhibition/Context & History.jpg';

export const exhibitionDetails = {
  1: {
    stats: [
      { iconName: "Gem", label: "Legacy", value: "130+ years" },
      { iconName: "Users", label: "Generations", value: "Three generations" },
      { iconName: "Clock3", label: "Story mode", value: "Scene-based exhibition" },
      { iconName: "ShieldCheck", label: "Theme", value: "Ethics + culture" },
    ],
    culturalBackground: "20世紀初頭から中頃のスリランカでは、宝石は遠い存在の高級品ではありませんでした。それは川や家々、家族の会話、そして信頼によって築かれた取引ネットワークの中に存在する、日常そのものの一部でした。ラトゥナプラやバランゴダのような地域では、宝石と共にある暮らしは、農業、季節労働、地域社会の慣習と自然に結びついていました。",
    culturalBackgroundImage: contextHistoryImg,
    scenes: [
      {
        id: "rathnapura",
        title: "土地 — ラトゥナプラ",
        eyebrow: "Scene 01",
        image: rathnapuraImg,
        body: "宝石が世界市場へ流通する以前、それは土地そのものの一部でした。「宝石の街」ラトゥナプラは、川、労働、そして代々受け継がれてきた知識を通して、人々と宝石の両方を育んできました。",
        details: [
          "伝統的な河川採掘と坑道採掘",
          "モンスーン後に行われる家族単位の季節労働",
          "土地、記憶、信頼に根ざした宝石文化",
        ],
      },
      {
        id: "walawwa",
        title: "信頼 — ワラウワ文化",
        eyebrow: "Scene 02",
        image: walawwaImg,
        body: "バンダラナイケ・アルウィス・ワラウワのような名家は、単なる住居ではありませんでした。そこは、慎み、技術、忠誠心、そして文化的責任感が日常を形づくる、社会的・道徳的中心地でもありました。",
        details: [
          "工芸技術と家庭生活の共存",
          "雇用関係は契約よりも信頼によって成り立っていた",
          "宝飾品は社会的・儀礼的意味を持っていた",
        ],
      },
      {
        id: "prinse",
        title: "規律 — プリンス・ジャヤワルダナ",
        eyebrow: "Scene 03",
        image: prinseImg,
        body: "元軍人であったプリンス・ジャヤワルダナは、規律、節度、責任感を宝石商の世界へ持ち込みました。彼の事業は、忍耐、評判、そして落ち着いた統率力によって成長しました。",
        details: [
          "軍隊経験が商業倫理を形成",
          "デヒワラの借店舗から事業を開始",
          "後に Alfred Jewellers を取得",
        ],
      },
      {
        id: "balangoda",
        title: "交差する人生 — バランゴダ",
        eyebrow: "Scene 04",
        image: balangodaImg,
        body: "バランゴダは、この家族の物語における感情的中心地となりました。そこでは、宝石と共にある暮らし、家庭内の奉仕、そして個人の運命が、静かに自然に交わっていました。",
        details: [
          "バンダラナイケ家との祖先的つながり",
          "ルビーの両親は、この信頼ある環境の中で出会った",
          "宝石産地の暮らしが日常的な人間関係を形成した",
        ],
      },
      {
        id: "market",
        title: "学び — 市場",
        eyebrow: "Scene 05",
        image: marketImg,
        body: "ラトゥナプラにおいて、ルビー・クレメントは正式な教育ではなく、観察を通して学びました。市場は、沈黙、信頼、判断力、そして価値を扱う倫理観を教える場でした。",
        details: [
          "話す前に観察すること",
          "取引より先に信頼を築くこと",
          "宝石だけでなく、人を通して価値を理解すること",
        ],
      },
      {
        id: "conflict",
        title: "道 — 紛争と継続",
        eyebrow: "Scene 06",
        image: roadImg,
        body: "内戦や社会不安の時代においても、コロンボとラトゥナプラを結ぶ道は物語の一部であり続けました。取引は、不確実性、検問所、そして静かな忍耐の中でも継続されました。",
        details: [
          "軍の検問所と輸送の遅延",
          "急速な拡大よりも継続性を重視",
          "人間関係が事業を支え続けた",
        ],
      },
      {
        id: "ruby",
        title: "技 — Ruby Jewellers",
        eyebrow: "Scene 07",
        image: rubyJewellersImg,
        body: "Ruby Jewellers は、懐古主義ではなく「継承」を象徴しています。伝統的な判断力は現代的な機器と共存しながら、「機械は石を磨くが、価値を形づくるのは人である」という信念に導かれています。",
        details: [
          "1987年にデヒワラで創業",
          "伝統的判断力と現代設備の融合",
          "師弟関係を生きた継承として重視",
        ],
      },
      {
        id: "ethics",
        title: "未来 — 倫理的なスリランカ",
        eyebrow: "Scene 08",
        image: futureImg,
        body: "21世紀に入り、スリランカの宝石文化は、ますます倫理性、責任、人間性によって定義されるようになっています。ジャヤワルダナ家の物語は、そのより大きな歩みを映し出しています。",
        details: [
          "倫理的調達と熟練労働",
          "制度だけではなく、人々によって築かれる継承",
          "生きた責任としての宝石文化",
        ],
      },
    ],
    timeline: [
      { year: "1890", text: "チャールズが家族の歴史を築き始める" },
      { year: "1937", text: "Prinse Jewellers 創業" },
      { year: "1972", text: "Ruby が独立して取引を開始" },
      { year: "1987", text: "Ruby Jewellers 創業" },
      { year: "現在", text: "継承、指導、倫理的遺産を未来へ" },
    ],
    locations: [
      {
        name: "ラトゥナプラ",
        role: "土地と学び",
        description: "採掘、研磨、市場、徒弟制度の中心地。",
        mapQuery: "Rathnapura",
      },
      {
        name: "バランゴダ",
        role: "人生と家族",
        description: "物語の感情的・文化的中心。",
        mapQuery: "Balangoda",
      },
      {
        name: "コロンボ / デヒワラ",
        role: "交易と継続",
        description: "小売、流通、そして長年にわたる信頼の拠点。",
        mapQuery: "Colombo / Dehiwala",
      },
    ],
    finalMessage: {
      title: "これは、単なる宝石についての物語ではありません。",
      body: "それは、人々についての物語です。記憶、労働、家族、規律、そして「価値あるものと共に生きる」という生き方についての物語です。",
    },
  },
};
