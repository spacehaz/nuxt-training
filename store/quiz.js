export const state = {
  quizShown: false,
};

export const mutations = {
  toggleQuiz(state) {
    return (state.quizShown = !state.quizShown);
  },
};

export const getters = {
  getQuizShown(state) {
    return state.quizShown;
  },
};
