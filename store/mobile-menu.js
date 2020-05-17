export const state = () => ({
  isMobileMenuOpened: false,
});

export const getters = {
  isMobileMenuOpened: state => {
    return state.isMobileMenuOpened;
  },
};

export const mutations = {
  toggleMobileMenuState: state => {
    state.isMobileMenuOpened = !state.isMobileMenuOpened;
  },
  closeMobileMenu: state => {
    state.isMobileMenuOpened = false;
  },
};

export const actions = {
  toggleMobileMenuState: ({ commit }) => {
    commit('toggleMobileMenuState');
  },
  closeMobileMenu: async ({ commit }) => {
    commit('closeMobileMenu');
  },
};
