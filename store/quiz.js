export const state = () => ({
  currentQuestion: 1,
  questions: {},
  answers: {},
  isQuizOver: false,
  isQuizShown: false,
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
    state.answers[state.currentQuestion] =
      state.questions[state.currentQuestion];
    state.answers[state.currentQuestion].answer = answer;
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
        title: 'Шаг 1 из 12',
        mainQuestion: 'Как вас зовут?',
      },
      2: {
        title: 'Шаг 2 из 12',
        mainQuestion: 'Было ли у вас онкологическое заболевание?',
        additionalQuestion:
          'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
      },
      3: {
        title: 'Шаг 3 из 12',
        mainQuestion: 'Какие занятия приносят Вам наибольшее удовольствие?',
        additionalQuestion:
          'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
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
