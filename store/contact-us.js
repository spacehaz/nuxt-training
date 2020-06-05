import axios from 'axios';

export const state = () => ({
  isContactUsShown: false,
  answers: {},
  isStatusOk: true,
});

// getters
export const getters = {
  getContactUsVisibility: state => {
    return state.isContactUsShown;
  },
  getStatus: state => {
    return state.isStatusOk;
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
  },
  setStatusOk: state => {
    state.isStatusOk = true;
  },
  setStatusError: state => {
    state.isStatusOk = false;
  },
  setInitialState: state => {
    state.answers = {};
    state.isStatusOk = true;
  },
};

//actions
export const actions = {
  showContactUs: async ({ commit }) => {
    return commit('showContactUs');
  },
  closeContactUs: async ({ commit }) => {
    return commit('closeContactUs');
  },
  saveAnswers: async ({ commit }, payload) => {
    return commit('saveAnswers', payload);
  },
  sendDataToServer: async ({ commit, state }) => {
    console.log(state.answers);
    return axios
      .post(process.env.API_URL + '/forms/contacts', state.answers)
      .then(
        response => {
          commit('setStatusOk');
          return commit('setInitialState');
        },
        error => {
          return commit('setStatusError');
        }
      );
  },
};
