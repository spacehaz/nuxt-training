export default async function({ store }) {
  await store.dispatch('blocks/getBlocks');
  await store.dispatch('stories/getStories');
}
