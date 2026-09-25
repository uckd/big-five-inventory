import test from "node:test";
import assert from "node:assert/strict";

import {
  QUESTIONS,
  DOMAINS,
  reverseScore,
  calculateScores,
} from "../scoring.js";

test("questionnaire contains 60 items", () => {
  assert.equal(QUESTIONS.length, 60);
  assert.deepEqual(
    QUESTIONS.map((question) => question.id),
    Array.from({ length: 60 }, (_, index) => index + 1),
  );
});

test("each domain has 12 items and each facet has 4 items", () => {
  for (const [domainKey, domain] of Object.entries(DOMAINS)) {
    assert.equal(
      QUESTIONS.filter((question) => question.domain === domainKey).length,
      12,
    );

    for (const facetKey of domain.facets) {
      assert.equal(
        QUESTIONS.filter((question) => question.facet === facetKey).length,
        4,
      );
    }
  }
});

test("facet item numbers match the published BFI-2-J key", () => {
  const expected = {
    sociability: [1, 16, 31, 46], assertiveness: [6, 21, 36, 51],
    energy: [11, 26, 41, 56], compassion: [2, 17, 32, 47],
    respectfulness: [7, 22, 37, 52], trust: [12, 27, 42, 57],
    organization: [3, 18, 33, 48], productiveness: [8, 23, 38, 53],
    responsibility: [13, 28, 43, 58], anxiety: [4, 19, 34, 49],
    depression: [9, 24, 39, 54], emotionalVolatility: [14, 29, 44, 59],
    intellectualCuriosity: [10, 25, 40, 55],
    aestheticSensitivity: [5, 20, 35, 50],
    creativeImagination: [15, 30, 45, 60],
  };

  for (const [facet, ids] of Object.entries(expected)) {
    assert.deepEqual(QUESTIONS.filter((question) => question.facet === facet).map((question) => question.id), ids);
  }
});

test("exactly 30 items are reverse keyed", () => {
  assert.equal(QUESTIONS.filter((question) => question.reverse).length, 30);
});


test("reverse-keyed item ids match the BFI-2-J scoring key", () => {
  const expected = [
    3, 4, 5, 8, 9, 11, 12, 16, 17, 22,
    23, 24, 25, 26, 28, 29, 30, 31, 36, 37,
    42, 44, 45, 47, 48, 49, 50, 51, 55, 58,
  ];
  assert.deepEqual(
    QUESTIONS.filter((question) => question.reverse).map((question) => question.id),
    expected,
  );
});

test("reverse scoring maps 1↔5 and 2↔4", () => {
  assert.equal(reverseScore(1), 5);
  assert.equal(reverseScore(2), 4);
  assert.equal(reverseScore(3), 3);
  assert.equal(reverseScore(4), 2);
  assert.equal(reverseScore(5), 1);
});

test("all neutral answers score every domain and facet at 3", () => {
  const answers = Object.fromEntries(QUESTIONS.map((question) => [question.id, 3]));
  const scores = calculateScores(answers);

  for (const score of Object.values(scores.domains)) {
    assert.equal(score, 3);
  }

  for (const score of Object.values(scores.facets)) {
    assert.equal(score, 3);
  }
});

test("balanced forward/reverse extreme answers can yield maximum scores", () => {
  const answers = Object.fromEntries(
    QUESTIONS.map((question) => [question.id, question.reverse ? 1 : 5]),
  );
  const scores = calculateScores(answers);

  for (const score of Object.values(scores.domains)) {
    assert.equal(score, 5);
  }

  for (const score of Object.values(scores.facets)) {
    assert.equal(score, 5);
  }
});

test("all scored results stay within 1–5, including the minimum", () => {
  for (const value of [1, 2, 3, 4, 5]) {
    const answers = Object.fromEntries(QUESTIONS.map((question) => [
      question.id, question.reverse ? 6 - value : value,
    ]));
    const scores = calculateScores(answers);
    for (const score of [...Object.values(scores.domains), ...Object.values(scores.facets)]) {
      assert.equal(score, value);
      assert.ok(score >= 1 && score <= 5);
    }
  }
});

test("an unanswered or out-of-range item cannot be scored", () => {
  const answers = Object.fromEntries(QUESTIONS.map((question) => [question.id, 3]));
  delete answers[1];
  assert.throws(() => calculateScores(answers), /項目 1/);
  answers[1] = 6;
  assert.throws(() => calculateScores(answers), /項目 1/);
});
