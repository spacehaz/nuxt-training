export const state = () => ({
  isPopupShown: false,
  isContentValid: true,
  errorText: '',
});

export const getters = {
  getPopupVisibility(state) {
    return state.isPopupShown;
  },
  getContentValidity(state) {
    return state.isContentValid;
  },
  getErrorText(state) {
    return state.errorText;
  },
};

export const mutations = {
  togglePopupVisibility(state) {
    state.isPopupShown = !state.isPopupShown;
  },
  setPopupVisibility(state, val) {
    state.isPopupShown = val;
  },
  setContentInvalid(state, { errorText }) {
    state.isContentValid = false;
    state.errorText = errorText;
  },
  setContentValid(state) {
    state.isContentValid = true;
    state.errorText = '';
  },
};

export const actions = {
  setContentInvalid({ commit }, payload) {
    commit('setContentInvalid', payload);
  },
  setContentValid({ commit }) {
    commit('setContentValid');
  },
};
