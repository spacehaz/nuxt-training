export const state = () => ({
  currentQuestion: 1,
  questions: {},
  answers: {},
  isQuizOver: false,
  isQuizShown: false,
  keys: {},
});

// getters
export const getters = {
  getCurrentQuestionMainText: state => {
    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].mainQuestion
      : '';
  },
  getCurrentQuestionAdditionalText: state => {
    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].additionalQuestion
      : '';
  },
  getCurrentQuestionTitle: state => {
    if (state.isQuizOver) return 'Спасибо что приняли участие!';

    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].title
      : '';
  },
  getCurrentQuestionAnswer: state => {
    return state.answers[state.currentQuestion]
      ? state.answers[state.currentQuestion].answer
      : '';
  },
  isFirstQuestion: state => {
    const questionIds = Object.keys(state.questions);
    return state.currentQuestion === Math.min(...questionIds);
  },
  isLastQuestion: state => {
    const questionIds = Object.keys(state.questions);
    return state.currentQuestion === Math.max(...questionIds);
  },
  isQuizOver: state => {
    return state.isQuizOver;
  },
  getQuizVisibility: state => {
    return state.isQuizShown;
  },
};

//mutations
export const mutations = {
  setNextQuestion(state) {
    if (Object.keys(state.questions).length === state.currentQuestion) {
      state.isQuizOver = true;
      return;
    }
    state.currentQuestion++;
  },
  saveAnswer(state, { answer }) {
    state.answers[state.currentQuestion] = answer;
    state.keys[state.currentQuestion] = {
      key: state.questions[state.currentQuestion].key,
    };
  },
  setPrevQuestion: state => {
    if (state.currentQuestion === 1) {
      return;
    }
    state.currentQuestion--;
    state.isQuizOver = false;
  },
  setQuestions: (state, { questions }) => {
    state.questions = questions;
  },
  showQuiz: state => {
    state.isQuizShown = true;
  },
  closeQuiz: state => {
    state.isQuizShown = false;
  },
  finishQuiz: state => {
    const result = Object.keys(state.keys).reduce((acc, item) => {
      acc[state.keys[item].key] = state.answers[item];
      return acc;
    }, {});
    console.log({ result });

    state.currentQuestion = 1;
    (state.answers = {}), (state.isQuizOver = false);
  },
};

//actions
export const actions = {
  saveAnswerAction: async ({ commit }, { answer }) => {
    await commit('saveAnswer', { answer });
    commit('setNextQuestion');
  },
  getPreviousQuestionAction: async ({ commit }) => {
    await commit('setPrevQuestion');
  },
  getQuestions: async ({ commit }) => {
    //имитация запроса к api
    const questions = {
      1: {
        key: 'name',
        title: 'Шаг 1 из 13',
        mainQuestion: 'Как вас зовут?',
      },
      2: {
        key: 'cancerStory',
        title: 'Шаг 2 из 13',
        mainQuestion: 'Было ли у вас онкологическое заболевание?',
        additionalQuestion:
          'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
      },
      3: {
        key: 'pleasureActivities',
        title: 'Шаг 3 из 13',
        mainQuestion: 'Какие занятия приносят Вам наибольшее удовольствие?',
        additionalQuestion:
          'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
      },
      4: {
        key: 'commonActivities',
        title: 'Шаг 4 из 13',
        mainQuestion:
          'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      },
      5: {
        key: 'hobbies',
        title: 'Шаг 5 из 13',
        mainQuestion: 'Какие сильные увлечения у Вас есть?',
        additionalQuestion:
          'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
      },
      6: {
        key: 'habits',
        title: 'Шаг 6 из 13',
        mainQuestion:
          'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      },
      7: {
        key: 'regularActivities',
        title: 'Шаг 7 из 13',
        mainQuestion:
          'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
        additionalQuestion: 'Кроме необходимых, таких, как чистка зубов.',
      },
      8: {
        key: 'aloneActivities',
        title: 'Шаг 8 из 13',
        mainQuestion:
          'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      },
      9: {
        key: 'calmDownActivities',
        title: 'Шаг 9 из 13',
        mainQuestion: 'Что Вас успокаивает/умиротворяет лучше всего?',
      },
      10: {
        key: 'events',
        title: 'Шаг 10 из 13',
        mainQuestion:
          'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      },
      11: {
        key: 'weekends',
        title: 'Шаг 11 из 13',
        mainQuestion: 'Как вы обычно проводите выходные?',
      },
      12: {
        key: 'phone',
        title: 'Шаг 12 из 13',
        mainQuestion: 'Телефон для связи.',
      },
      13: {
        key: 'email',
        title: 'Шаг 13 из 13',
        mainQuestion: 'Почта.',
        additionalQuestion:
          'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
      },
    };
    commit('setQuestions', { questions });
  },
  showQuiz: async ({ commit }) => {
    commit('showQuiz');
  },
  closeQuiz: async ({ commit }) => {
    commit('closeQuiz');
  },
  finishQuiz: async ({ commit }) => {
    commit('finishQuiz');
  },
};
