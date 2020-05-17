export const state = () => ({
  isContactUsShown: false,
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
};

//actions
export const actions = {
  showContactUs: async ({ commit }) => {
    commit('showContactUs');
  },
  closeContactUs: async ({ commit }) => {
    commit('closeContactUs');
  },
};
