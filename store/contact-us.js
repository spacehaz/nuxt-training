import axios from 'axios';

export const state = () => ({
  isContactUsShown: false,
  answers: {},
  isStatusOk: true,
  errorText: '',
});

// getters
export const getters = {
  getContactUsVisibility: state => {
    return state.isContactUsShown;
  },
  getStatus: state => {
    return state.isStatusOk;
  },
  getErrorText: state => {
    return state.errorText;
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
    state.errorText = '';
  },
  setStatusError: state => {
    state.isStatusOk = false;
  },
  setInitialState: state => {
    state.answers = {};
    state.isStatusOk = true;
  },
  setErrorText: (state, payload) => {
    state.errorText = payload;
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
          return commit('setStatusError');
        }
      );
  },
};
