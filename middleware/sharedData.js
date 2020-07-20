export default async function({ store }) {
  await store.dispatch('blocks/getBlocks');
  await store.dispatch('seo/getSeo');
  await store.dispatch('stories/getStories');
}
