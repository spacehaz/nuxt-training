import axios from 'axios';

export const state = () => ({
  seo: [],
});

export const getters = {
  getSeo(state) {
    return state.seo;
  },
};

export const mutations = {
  setSeo(state, { seo }) {
    state.seo = seo;
  },
};

export const actions = {
  getSeo({ commit }, payload) {
    return axios.get(process.env.API_URL + '/seo-nastrojkis').then(response => {
      return commit('setSeo', { seo: response.data });
    });
  },
};
