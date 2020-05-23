import axios from 'axios';

export const state = () => ({
  statistics: [],
});

export const getters = {
  getStatictics: state => {
    return state.statistics;
  },
};

export const mutations = {
  setStatistics: (state, { statistics }) => {
    state.statistics = statistics;
    //заглушка на null-данные, откуда брать актуальные данные?
    state.statistics.forEach(item => {
      if (item.oldValue === null) {
        item.oldValue = 20;
      }
      if (item.currentValue === null) {
        item.currentValue = 40;
      }
    });
  },
};

export const actions = {
  getStatictics: ({ commit }) => {
    // const statistics = [
    //   {
    //     id: 1,
    //     type: 1,
    //     title:
    //       'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
    //     currentValue: 1,
    //     maxValue: 3,
    //     text: '1 из 3',
    //     source: 'Левада-Центр 2018',
    //   },
    //   {
    //     id: 2,
    //     type: 1,
    //     title: '2,6% Россиян имеют онкозаболевания.',
    //     currentValue: 26,
    //     maxValue: 1000,
    //     text: '3 700 000',
    //     source: 'Росстат 2018',
    //   },
    //   {
    //     id: 3,
    //     type: 2,
    //     title:
    //       'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
    //     bars: {
    //       previousValue: 60,
    //       currentValue: 75,
    //       maxValue: 100,
    //     },
    //     text: '↑28%',
    //     source: 'МНИОИ Герцена 2018',
    //   },
    //   {
    //     id: 4,
    //     type: 2,
    //     title:
    //       'На 25% снизилась смертность в течение первого года после постановки диагноза.',
    //     bars: {
    //       previousValue: 70,
    //       currentValue: 50,
    //       maxValue: 100,
    //     },
    //     text: '↓25%',
    //     source: 'МНИОИ Герцена 2018',
    //   },
    // ];
    return axios.get(process.env.API_URL + '/statistics').then(response => {
      return commit('setStatistics', { statistics: response.data });
    });
    // commit('setStatistics', { statistics });
  },
};
