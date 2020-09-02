import axios from 'axios';

export const state = () => ({
  currentQuestion: 1,
  questions: {},
  answers: {},
  isQuizOver: false,
  isQuizShown: false,
  keys: {},
  result: {},
  isFormValid: true,
  isQuizSent: false,
  errorText: '',
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
    if (state.isQuizSent) return 'Спасибо что приняли участие!';

    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].title
      : '';
  },
  getCurrentQuestionAnswer: state => {
    return state.answers[state.currentQuestion]
      ? state.answers[state.currentQuestion]
      : '';
  },
  getCurrentPlaceHolder: state => {
    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].placeholder
      : '';
  },
  getCurrentPattern: state => {
    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].pattern
      : '';
  },
  getCurrentPatternMismatchText: state => {
    return state.questions[state.currentQuestion]
      ? state.questions[state.currentQuestion].patternMismatchText
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
  getFormValidity: state => {
    return state.isFormValid;
  },
  isQuizSent: state => {
    return state.isQuizSent;
  },
  getErrorText: state => {
    return state.errorText;
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
    state.isQuizSent = false;
    state.isFormValid = true;
  },
  setQuestions: (state, { questions }) => {
    state.questions = questions;
  },
  showQuiz: state => {
    state.isQuizShown = true;
  },
  closeQuiz: state => {
    state.isQuizShown = false;
    state.isQuizSent = false;
  },
  finishQuiz: state => {
    state.result = Object.keys(state.keys).reduce((acc, item) => {
      acc[state.keys[item].key] = state.answers[item];
      return acc;
    }, {});
  },
  setFormInvalid: state => {
    state.isFormValid = false;
  },
  setFormValid: state => {
    state.isFormValid = true;
  },
  setQuizSentStatus: state => {
    state.isQuizSent = true;
    state.errorText = '';
  },
  setInitialState: state => {
    state.currentQuestion = 1;
    state.answers = {};
    state.isQuizOver = false;
    state.isFormValid = true;
  },
  setErrorText: (state, payload) => {
    state.errorText = payload;
  },
};

//actions
export const actions = {
  saveAnswerAction: async ({ commit }, { answer }) => {
    await commit('saveAnswer', { answer });
  },
  setNextQuestion: async ({ commit }) => {
    await commit('setNextQuestion');
  },
  getPreviousQuestionAction: async ({ commit }) => {
    await commit('setPrevQuestion');
  },
  getQuestions: async ({ commit }) => {
    //имитация запроса к api
    const questions = {
      1: {
        key: 'full_name',
        title: 'Шаг 1 из 13',
        mainQuestion: 'Как вас зовут?',
      },
      2: {
        key: 'story',
        title: 'Шаг 2 из 13',
        mainQuestion: 'Было ли у вас онкологическое заболевание?',
        additionalQuestion:
          'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
      },
      3: {
        key: 'pleas_act',
        title: 'Шаг 3 из 13',
        mainQuestion: 'Какие занятия приносят Вам наибольшее удовольствие?',
        additionalQuestion:
          'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
      },
      4: {
        key: 'common_act',
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
        key: 'reg_act',
        title: 'Шаг 7 из 13',
        mainQuestion:
          'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
        additionalQuestion: 'Кроме необходимых, таких, как чистка зубов.',
      },
      8: {
        key: 'alone_act',
        title: 'Шаг 8 из 13',
        mainQuestion:
          'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      },
      9: {
        key: 'calm_act',
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
        placeholder: '+7 000 000 00 00',
        pattern: /^\+?\d{1}?\s*(?:\(\s*\d{3}\s*\)|\d{3})?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
        patternMismatchText: 'Введите телефон в формате "+7 000 000 00 00"',
      },
      13: {
        key: 'email',
        title: 'Шаг 13 из 13',
        mainQuestion: 'Почта.',
        additionalQuestion:
          'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
        placeholder: 'pochta@example.com',
        pattern: /^[\w._-]+@[\w.-]+\.[a-z]{2,}$/,
        patternMismatchText:
          'Введите электронную почту в формате "pochta@example.com"',
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
  sendDataToServer: async ({ commit, state }) => {
    return axios
      .post(process.env.API_URL + '/forms/stories', state.result)
      .then(
        response => {
          commit('setQuizSentStatus');
          return commit('setInitialState');
        },
        error => {
          if (
            error.response.data.detail ===
            'Please provide a valid email address.'
          ) {
            commit(
              'setErrorText',
              'Введите корректный адрес электронной почты.'
            );
          } else if (
            error.response.data.detail.includes(
              'looks fake or invalid, please enter a real email address.'
            )
          ) {
            commit('setErrorText', 'Введите реальный адрес электронной почты.');
          } else if (
            error.response.data.detail.includes(
              'is already a list member. Use PUT to insert or update list members.'
            )
          ) {
            commit(
              'setErrorText',
              'Указанный электронный адрес уже использовался.'
            );
          } else {
            commit(
              'setErrorText',
              'Ошибка отправки данных, пожалуйста, попробуйте еще раз.'
            );
          }
          return commit('setFormInvalid');
        }
      );
  },
};
