export const state = () => ({
  isContactUsShown: false,
  answers: {},
});

// getters
export const getters = {
  getContactUsVisibility: state => {
    return state.isContactUsShown;
  },
};

//mutations
export const mutations = {
  showContactUs: state => {
    state.isContactUsShown = true;
  },
  closeContactUs: state => {
    state.isContactUsShown = false;
  },
  saveAnswers: (state, payload) => {
    state.answers = payload;
    console.log(state.answers);
  },
};

//actions
export const actions = {
  showContactUs: async ({ commit }) => {
    commit('showContactUs');
  },
  closeContactUs: async ({ commit }) => {
    commit('closeContactUs');
  },
  saveAnswers: async ({ commit }, payload) => {
    commit('saveAnswers', payload);
  },
};
