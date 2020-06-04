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
    //добавление оберток, раз они не приходят в api ответе
    //похоже правильной идеей будет получать путь до обложек, которые хранятся на сервере,
    //но раз не приходят они в ответе, то пока так.
    const pictures = {
      1: '/video-images/pozner.jpg',
      2: '/video-images/rinat.jpg',
      3: '/video-images/olga.jpg',
    };
    state.videos.forEach((video, index) => {
      if (pictures[video.id]) state.videos[index].picture = pictures[video.id];
    });
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
