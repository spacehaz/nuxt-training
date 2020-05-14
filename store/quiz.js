export const state = () => ({
  isPopupShown: false,
  currentQuestion: 1,
  questions: questions,
  answers: {},
});

//outsource data
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
};

// getters
export const getters = {
  getQuizVisibility(state) {
    return state.isPopupShown;
  },
};

//mutations
export const mutations = {
  toggleQuiz(state) {
    return (state.isPopupShown = !state.isPopupShown);
  },
};

//actions
export const actions = {};
