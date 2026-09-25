import {
  SCALE_LABELS,
  DOMAINS,
  FACETS,
  QUESTIONS,
  calculateScores,
} from "./scoring.js";

const state = {
  index: 0,
  answers: {},
};

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const startButton = document.querySelector("#start-button");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const printButton = document.querySelector("#print-button");
const questionForm = document.querySelector("#question-form");
const questionText = document.querySelector("#question-text");
const choices = document.querySelector("#choices");
const progressText = document.querySelector("#progress-text");
const answeredText = document.querySelector("#answered-text");
const progressBar = document.querySelector("#progress-bar");
const domainResults = document.querySelector("#domain-results");
const resultsTitle = document.querySelector("#results-title");

function showOnly(section) {
  intro.hidden = section !== intro;
  quiz.hidden = section !== quiz;
  results.hidden = section !== results;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectedAnswer() {
  const selected = questionForm.querySelector('input[name="answer"]:checked');
  return selected ? Number(selected.value) : null;
}

function renderQuestion() {
  const question = QUESTIONS[state.index];
  const saved = state.answers[question.id];

  progressText.textContent = `${state.index + 1} / ${QUESTIONS.length}`;
  answeredText.textContent = `回答済み ${Object.keys(state.answers).length} / ${QUESTIONS.length}`;
  progressBar.style.width = `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  questionText.textContent = `${question.id}. ${question.text}`;
  previousButton.disabled = state.index === 0;
  nextButton.textContent = state.index === QUESTIONS.length - 1 ? "結果を見る" : "次へ";

  choices.replaceChildren(
    ...Object.entries(SCALE_LABELS).map(([value, label]) => {
      const choice = document.createElement("label");
      choice.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = value;
      input.checked = Number(value) === saved;

      const number = document.createElement("span");
      number.className = "choice-number";
      number.textContent = value;

      const labelText = document.createElement("span");
      labelText.className = "choice-label";
      labelText.textContent = label;

      choice.append(input, number, labelText);
      return choice;
    }),
  );

  nextButton.disabled = !saved;
}

function saveCurrentAnswer() {
  const value = selectedAnswer();
  if (value === null) return false;

  state.answers[QUESTIONS[state.index].id] = value;
  answeredText.textContent = `回答済み ${Object.keys(state.answers).length} / ${QUESTIONS.length}`;
  return true;
}

function scoreToPercent(score) {
  return ((score - 1) / 4) * 100;
}

function renderResults() {
  const scores = calculateScores(state.answers);

  domainResults.replaceChildren(
    ...Object.entries(DOMAINS).map(([domainKey, domain]) => {
      const card = document.createElement("article");
      card.className = "domain-card";

      const heading = document.createElement("div");
      heading.className = "domain-heading";

      const title = document.createElement("h2");
      title.textContent = domain.label;
      const english = document.createElement("small");
      english.textContent = domain.english;
      title.append(english);

      const score = document.createElement("span");
      score.className = "score";
      score.innerHTML = `${scores.domains[domainKey].toFixed(2)} <small>/ 5</small>`;

      heading.append(title, score);

      const track = document.createElement("div");
      track.className = "score-track";
      track.setAttribute("aria-label", `${domain.label} ${scores.domains[domainKey].toFixed(2)} / 5`);

      const fill = document.createElement("div");
      fill.className = "score-fill";
      fill.style.width = `${scoreToPercent(scores.domains[domainKey])}%`;
      track.append(fill);

      const facetList = document.createElement("div");
      facetList.className = "facets";

      for (const facetKey of domain.facets) {
        const facet = document.createElement("div");
        facet.className = "facet";
        facet.textContent = FACETS[facetKey].label;

        const facetScore = document.createElement("strong");
        facetScore.textContent = scores.facets[facetKey].toFixed(2);
        facet.append(facetScore);
        facetList.append(facet);
      }

      card.append(heading, track, facetList);
      return card;
    }),
  );
}

startButton.addEventListener("click", () => {
  state.index = 0;
  state.answers = {};
  renderQuestion();
  showOnly(quiz);
  questionText.focus();
});

choices.addEventListener("change", () => {
  saveCurrentAnswer();
  nextButton.disabled = false;
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!saveCurrentAnswer()) return;

  if (state.index === QUESTIONS.length - 1) {
    renderResults();
    showOnly(results);
    resultsTitle.focus();
    return;
  }

  state.index += 1;
  renderQuestion();
  questionText.focus();
});

previousButton.addEventListener("click", () => {
  saveCurrentAnswer();
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
  questionText.focus();
});

restartButton.addEventListener("click", () => {
  state.index = 0;
  state.answers = {};
  renderQuestion();
  showOnly(quiz);
  questionText.focus();
});

printButton.addEventListener("click", () => window.print());

document.addEventListener("keydown", (event) => {
  if (quiz.hidden || event.altKey || event.ctrlKey || event.metaKey) return;

  if (["1", "2", "3", "4", "5"].includes(event.key)) {
    const input = choices.querySelector(`input[value="${event.key}"]`);
    if (input) {
      input.checked = true;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }
});
