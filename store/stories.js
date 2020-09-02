import axios from 'axios';

export const state = () => ({
  stories: [],
  filteredStories: [],
  storiesPerPage: 0,
  currentPage: 1,
  currentStory: {},
  query: '',
});

export const getters = {
  getStories: state => {
    if (state.stories) {
      return state.filteredStories
        .filter(item => !item.celebrity)
        .slice(
          state.storiesPerPage * (state.currentPage - 1),
          (state.currentPage - 1) * state.storiesPerPage + state.storiesPerPage
        );
    }
    return state.stories;
  },
  getFeaturedStories: state => {
    if (state.stories) {
      return state.stories.filter(item => item.celebrity);
    }
    return state.stories;
  },
  getRandomStories: state => {
    if (state.stories) {
      const randomisedArray = [...state.stories];
      randomisedArray.sort(() => 0.5 - Math.random());
      return randomisedArray.slice(
        state.storiesPerPage * (state.currentPage - 1),
        (state.currentPage - 1) * state.storiesPerPage + state.storiesPerPage
      );
    }
    return state.stories;
  },
  getStoriesQuantity: state => {
    return state.filteredStories ? state.filteredStories.length : 0;
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
    state.filteredStories = state.stories;
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
  searchStories: (state, query) => {
    state.query = query.toLowerCase();
    state.filteredStories = state.stories.filter(
      story =>
        story.title.toLowerCase().includes(state.query) ||
        story.author.toLowerCase().includes(state.query) ||
        story.text.toLowerCase().includes(state.query)
    );
  },
};

export const actions = {
  getStories: async ({ commit }) => {
    return axios
      .get(process.env.API_URL + '/stories?_sort=date:DESC')
      .then(response => {
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
  searchStories({ commit }, query) {
    commit('searchStories', query);
  },
};
