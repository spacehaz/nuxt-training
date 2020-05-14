export const state = () => ({
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
export const getters = {};

//mutations
export const mutations = {};

//actions
export const actions = {};
