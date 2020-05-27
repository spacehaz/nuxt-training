export const state = () => ({
  photos: [],
  imagesToShow: 8,
});

// getters
export const getters = {
  getPhotos: state => {
    const randomisedArray = [...state.photos];
    randomisedArray.sort(() => 0.5 - Math.random());
    return randomisedArray.slice(0, state.imagesToShow);
  },
};

//mutations
export const mutations = {
  addPhotos: (state, formatData) => {
    state.photos = formatData;
  },
};

//actions
export const actions = {
  async getPhotos({ commit }) {
    const data = await this.$axios.$get(
      'https://www.instagram.com/raklechitsa/?__a=1'
    );
    const formatData = data.graphql.user.edge_owner_to_timeline_media.edges.map(
      post => {
        const {
          node: { display_url, accessibility_caption, shortcode },
        } = post;
        return {
          display_url,
          accessibility_caption,
          url: `https://www.instagram.com/p/${shortcode}`,
        };
      }
    );
    commit('addPhotos', formatData);
  },
};
