import axios from 'axios';

export const state = () => ({
  stories: [],
  storiesPerPage: 0,
  currentPage: 1,
  currentStory: {},
});

export const getters = {
  getStories: state => {
    if (state.stories) {
      return state.stories.slice(
        state.storiesPerPage * (state.currentPage - 1),
        (state.currentPage - 1) * state.storiesPerPage + state.storiesPerPage
      );
    }
    return state.stories;
  },
  getStoriesQuantity: state => {
    return state.stories ? state.stories.length : 0;
  },
  getCurrentStory: state => {
    return state.currentStory;
  },
  getStoriesPerPage: state => {
    return state.storiesPerPage;
  },
};

export const mutations = {
  setStories: (state, { stories }) => {
    state.stories = stories;
  },
  setStoriesPerPage: (state, { storiesPerPage }) => {
    state.storiesPerPage = storiesPerPage;
    state.currentPage = 1;
  },
  changeStoriesPage: (state, { page }) => {
    state.currentPage = page;
  },
  setStory: (state, { story }) => {
    state.currentStory = story;
  },
};

export const actions = {
  //эмуляция получения данных с сервера
  getStories: async ({ commit }) => {
    return axios.get(process.env.API_URL + '/stories').then(response => {
      return commit('setStories', { stories: response.data });
    });
  },
  getStory: async ({ commit }, { id }) => {
    return axios.get(process.env.API_URL + `/stories/${id}`).then(response => {
      return commit('setStory', { story: response.data });
    });
  },
  setStoriesPerPage: ({ commit }, { storiesPerPage }) => {
    commit('setStoriesPerPage', { storiesPerPage });
  },
  changeStoriesPage: ({ commit }, { page }) => {
    commit('changeStoriesPage', { page });
  },
};
