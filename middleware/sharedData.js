export default async function({ store, route }) {
  await store.dispatch('blocks/getBlocks');
}
