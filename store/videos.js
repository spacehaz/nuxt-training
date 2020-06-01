import axios from 'axios';

export const state = () => ({
  videos: [],
});

export const getters = {
  getVideos: state => {
    return state.videos;
  },
};

export const mutations = {
  setVideos: (state, { videos }) => {
    state.videos = videos;
  },
};

export const actions = {
  //эмуляция получения данных с сервера
  getVideos: async ({ commit }) => {
    return axios.get(process.env.API_URL + '/videos').then(response => {
      return commit('setVideos', { videos: response.data });
    });
  },
};
