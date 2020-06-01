import axios from 'axios';

export const state = () => ({
  blocks: {},
});

export const getters = {
  getBlocks: state => {
    return state.blocks;
  },
};

export const mutations = {
  setBlocks: (state, { blocks }) => {
    state.blocks = {};
    blocks.forEach(item => {
      state.blocks[item.block] = item;
    });
  },
};

export const actions = {
  getBlocks: ({ commit, state }) => {
    if (Object.keys(state.blocks).length === 0) {
      return axios.get(process.env.API_URL + '/blocks').then(response => {
        return commit('setBlocks', { blocks: response.data });
      });
    }
  },
};
