export const state = () => ({
  isShareUsShown: false,
});

// getters
export const getters = {
  getShareUsVisibility: state => {
    return state.isShareUsShown;
  },
};

//mutations
export const mutations = {
  showShareUs: state => {
    state.isShareUsShown = true;
  },
  closeShareUs: state => {
    state.isShareUsShown = false;
  },
};

//actions
export const actions = {
  showShareUs: async ({ commit }) => {
    commit('showShareUs');
  },
  closeShareUs: async ({ commit }) => {
    commit('closeShareUs');
  },
};
