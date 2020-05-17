export const state = () => ({
  stories: [],
  storiesPerPage: 0,
  currentPage: 1,
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
};

export const actions = {
  //эмуляция получения данных с сервера
  getStories: async ({ commit }) => {
    const stories = [
      {
        id: 1,
        imageSrc: '',
        author: 'Владимир Тен1',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 2,
        imageSrc: '',
        author: 'Владимир Тен2',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 3,
        imageSrc: '',
        author: 'Владимир Тен3',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 4,
        imageSrc: '',
        author: 'Владимир Тен4',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 5,
        imageSrc: '',
        author: 'Владимир Тен5',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 6,
        imageSrc: '',
        author: 'Владимир Тен6',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 7,
        imageSrc: '',
        author: 'Владимир Тен7',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 8,
        imageSrc: '',
        author: 'Владимир Тен8',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 9,
        imageSrc: '',
        author: 'Владимир Тен9',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 10,
        imageSrc: '',
        author: 'Владимир Тен10',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 11,
        imageSrc: '',
        author: 'Владимир Тен11',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 12,
        imageSrc: '',
        author: 'Владимир Тен12',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 13,
        imageSrc: '',
        author: 'Владимир Тен13',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 14,
        imageSrc: '',
        author: 'Владимир Тен14',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 15,
        imageSrc: '',
        author: 'Владимир Тен15',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 16,
        imageSrc: '',
        author: 'Владимир Тен16',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    ];
    commit('setStories', { stories });
  },
  setStoriesPerPage: ({ commit }, { storiesPerPage }) => {
    commit('setStoriesPerPage', { storiesPerPage });
  },
  changeStoriesPage: ({ commit }, { page }) => {
    commit('changeStoriesPage', { page });
  },
};
