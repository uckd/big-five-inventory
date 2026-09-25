export const SCALE_LABELS = {
  1: "全くあてはまらない",
  2: "あてはまらない",
  3: "どちらともいえない",
  4: "あてはまる",
  5: "とてもよくあてはまる",
};

export const DOMAINS = {
  extraversion: {
    label: "外向性",
    english: "Extraversion",
    facets: ["sociability", "assertiveness", "energy"],
  },
  agreeableness: {
    label: "協調性",
    english: "Agreeableness",
    facets: ["compassion", "respectfulness", "trust"],
  },
  conscientiousness: {
    label: "勤勉性",
    english: "Conscientiousness",
    facets: ["organization", "productiveness", "responsibility"],
  },
  negativeEmotionality: {
    label: "否定的情動性",
    english: "Negative Emotionality",
    facets: ["anxiety", "depression", "emotionalVolatility"],
  },
  openMindedness: {
    label: "開放性",
    english: "Open-Mindedness",
    facets: ["intellectualCuriosity", "aestheticSensitivity", "creativeImagination"],
  },
};

export const FACETS = {
  sociability: { label: "社交性", english: "Sociability" },
  assertiveness: { label: "自己主張性", english: "Assertiveness" },
  energy: { label: "活力", english: "Energy Level" },
  compassion: { label: "思いやり", english: "Compassion" },
  respectfulness: { label: "敬意", english: "Respectfulness" },
  trust: { label: "信用", english: "Trust" },
  organization: { label: "秩序", english: "Organization" },
  productiveness: { label: "生産性", english: "Productiveness" },
  responsibility: { label: "責任感", english: "Responsibility" },
  anxiety: { label: "不安", english: "Anxiety" },
  depression: { label: "抑うつ", english: "Depression" },
  emotionalVolatility: { label: "情緒不安定性", english: "Emotional Volatility" },
  intellectualCuriosity: { label: "知的好奇心", english: "Intellectual Curiosity" },
  aestheticSensitivity: { label: "美的感性", english: "Aesthetic Sensitivity" },
  creativeImagination: { label: "創造的想像力", english: "Creative Imagination" },
};

export const QUESTIONS = [
  { id: 1, text: "積極的で，社交的である", domain: "extraversion", facet: "sociability", reverse: false },
  { id: 2, text: "思いやりがあり，優しい", domain: "agreeableness", facet: "compassion", reverse: false },
  { id: 3, text: "行き当たりばったりな方だ", domain: "conscientiousness", facet: "organization", reverse: true },
  { id: 4, text: "リラックスしていて，ストレスにうまく対処している", domain: "negativeEmotionality", facet: "anxiety", reverse: true },
  { id: 5, text: "芸術的関心があまりない", domain: "openMindedness", facet: "aestheticSensitivity", reverse: true },
  { id: 6, text: "積極的な性格だ", domain: "extraversion", facet: "assertiveness", reverse: false },
  { id: 7, text: "礼儀正しく，他人に敬意をもって接する", domain: "agreeableness", facet: "respectfulness", reverse: false },
  { id: 8, text: "だらだらと過ごす方だ", domain: "conscientiousness", facet: "productiveness", reverse: true },
  { id: 9, text: "失敗を経験しても楽天的なままでいる", domain: "negativeEmotionality", facet: "depression", reverse: true },
  { id: 10, text: "色々な物事に対する好奇心が強い", domain: "openMindedness", facet: "intellectualCuriosity", reverse: false },
  { id: 11, text: "めったに興奮したり，熱狂したりしない", domain: "extraversion", facet: "energy", reverse: true },
  { id: 12, text: "他人の欠点を見つけ出す方だ", domain: "agreeableness", facet: "trust", reverse: true },
  { id: 13, text: "しっかりしていて，真面目だ", domain: "conscientiousness", facet: "responsibility", reverse: false },
  { id: 14, text: "不機嫌になりやすく，感情の起伏が激しい", domain: "negativeEmotionality", facet: "emotionalVolatility", reverse: false },
  { id: 15, text: "創意工夫が得意で，うまい方法を思いつくことができる", domain: "openMindedness", facet: "creativeImagination", reverse: false },
  { id: 16, text: "無口な方だ", domain: "extraversion", facet: "sociability", reverse: true },
  { id: 17, text: "他人のことを思って心が痛むことはほとんどない", domain: "agreeableness", facet: "compassion", reverse: true },
  { id: 18, text: "几帳面で，規則正しく整えることが好きだ", domain: "conscientiousness", facet: "organization", reverse: false },
  { id: 19, text: "神経が張り詰めることがある", domain: "negativeEmotionality", facet: "anxiety", reverse: false },
  { id: 20, text: "芸術，音楽，文学に魅了されている", domain: "openMindedness", facet: "aestheticSensitivity", reverse: false },
  { id: 21, text: "上に立つ方で，リーダーとして活動する", domain: "extraversion", facet: "assertiveness", reverse: false },
  { id: 22, text: "他人と言い争いを始める", domain: "agreeableness", facet: "respectfulness", reverse: true },
  { id: 23, text: "なかなか作業に取り掛かることができない", domain: "conscientiousness", facet: "productiveness", reverse: true },
  { id: 24, text: "安心感を抱いており，心地よい", domain: "negativeEmotionality", facet: "depression", reverse: true },
  { id: 25, text: "知的で哲学的な考察を避けるようにしている", domain: "openMindedness", facet: "intellectualCuriosity", reverse: true },
  { id: 26, text: "他の人と比べて活発ではない", domain: "extraversion", facet: "energy", reverse: true },
  { id: 27, text: "他人を大目に見る寛大な人間だ", domain: "agreeableness", facet: "trust", reverse: false },
  { id: 28, text: "少し不注意なところがある", domain: "conscientiousness", facet: "responsibility", reverse: true },
  { id: 29, text: "情緒が安定しており，簡単には取り乱さない", domain: "negativeEmotionality", facet: "emotionalVolatility", reverse: true },
  { id: 30, text: "創造性がほとんどない", domain: "openMindedness", facet: "creativeImagination", reverse: true },
  { id: 31, text: "内気なところがあり，内向的である", domain: "extraversion", facet: "sociability", reverse: true },
  { id: 32, text: "進んで手伝おうとし，他人の利益を優先する", domain: "agreeableness", facet: "compassion", reverse: false },
  { id: 33, text: "物事をきれいに揃えたりまとめたりする", domain: "conscientiousness", facet: "organization", reverse: false },
  { id: 34, text: "多くの悩みごとを抱えている", domain: "negativeEmotionality", facet: "anxiety", reverse: false },
  { id: 35, text: "芸術と美を重視する", domain: "openMindedness", facet: "aestheticSensitivity", reverse: false },
  { id: 36, text: "人々の行動を左右するような影響力をもつことは難しいと感じる", domain: "extraversion", facet: "assertiveness", reverse: true },
  { id: 37, text: "他人を見下すことがある", domain: "agreeableness", facet: "respectfulness", reverse: true },
  { id: 38, text: "手際よく行動し，物事を最後までやり遂げる", domain: "conscientiousness", facet: "productiveness", reverse: false },
  { id: 39, text: "よく悲しい気分になる", domain: "negativeEmotionality", facet: "depression", reverse: false },
  { id: 40, text: "考え方が複雑で，深く考える人間だ", domain: "openMindedness", facet: "intellectualCuriosity", reverse: false },
  { id: 41, text: "活力にあふれている", domain: "extraversion", facet: "energy", reverse: false },
  { id: 42, text: "他人が考えていることを怪しんで不信感を抱く", domain: "agreeableness", facet: "trust", reverse: true },
  { id: 43, text: "ちゃんとしていて，いつも周りから当てにされる", domain: "conscientiousness", facet: "responsibility", reverse: false },
  { id: 44, text: "自分の感情をコントロールしている", domain: "negativeEmotionality", facet: "emotionalVolatility", reverse: true },
  { id: 45, text: "ものごとを自由に心に思い描くのは難しい", domain: "openMindedness", facet: "creativeImagination", reverse: true },
  { id: 46, text: "おしゃべりな方だ", domain: "extraversion", facet: "sociability", reverse: false },
  { id: 47, text: "冷淡で思いやりに欠けることがある", domain: "agreeableness", facet: "compassion", reverse: true },
  { id: 48, text: "乱雑なものはそのままにして，きれいにしない", domain: "conscientiousness", facet: "organization", reverse: true },
  { id: 49, text: "不安や恐れを感じることはめったにない", domain: "negativeEmotionality", facet: "anxiety", reverse: true },
  { id: 50, text: "詩や演劇をつまらないと思う", domain: "openMindedness", facet: "aestheticSensitivity", reverse: true },
  { id: 51, text: "他の人にリーダーシップを発揮してもらうほうが良いと思う", domain: "extraversion", facet: "assertiveness", reverse: true },
  { id: 52, text: "他人に丁寧で，礼儀正しい", domain: "agreeableness", facet: "respectfulness", reverse: false },
  { id: 53, text: "根気強く，与えられた課題が終わるまで取り組む", domain: "conscientiousness", facet: "productiveness", reverse: false },
  { id: 54, text: "憂うつになり，落胆する方だ", domain: "negativeEmotionality", facet: "depression", reverse: false },
  { id: 55, text: "抽象的な知識にはほとんど関心がない", domain: "openMindedness", facet: "intellectualCuriosity", reverse: true },
  { id: 56, text: "情熱を大いに表に出す", domain: "extraversion", facet: "energy", reverse: false },
  { id: 57, text: "人々のいちばん良いところを思い浮かべる", domain: "agreeableness", facet: "trust", reverse: false },
  { id: 58, text: "無責任な行動をしてしまうことがある", domain: "conscientiousness", facet: "responsibility", reverse: true },
  { id: 59, text: "神経質で，感情的になりやすい", domain: "negativeEmotionality", facet: "emotionalVolatility", reverse: false },
  { id: 60, text: "個性的で，新しいアイディアを思いつく", domain: "openMindedness", facet: "creativeImagination", reverse: false },
];

export function reverseScore(value) {
  if (!Number.isInteger(value) || value < 1 || value > 5) {
    throw new RangeError("回答値は1〜5の整数である必要があります。");
  }
  return 6 - value;
}

export function scoreItem(question, value) {
  return question.reverse ? reverseScore(value) : value;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function calculateScores(answers) {
  const normalized = new Map();

  for (const question of QUESTIONS) {
    const rawValue = Number(answers[question.id]);
    if (!Number.isInteger(rawValue) || rawValue < 1 || rawValue > 5) {
      throw new Error(`項目 ${question.id} の回答がありません。`);
    }
    normalized.set(question.id, scoreItem(question, rawValue));
  }

  const domains = {};
  const facets = {};

  for (const [domainKey, domain] of Object.entries(DOMAINS)) {
    const domainValues = QUESTIONS
      .filter((question) => question.domain === domainKey)
      .map((question) => normalized.get(question.id));

    domains[domainKey] = average(domainValues);

    for (const facetKey of domain.facets) {
      const facetValues = QUESTIONS
        .filter((question) => question.facet === facetKey)
        .map((question) => normalized.get(question.id));

      facets[facetKey] = average(facetValues);
    }
  }

  return { domains, facets };
}
