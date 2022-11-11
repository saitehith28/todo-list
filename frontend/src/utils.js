export const getMaxId = (tasks) => {
  const ids = tasks.map(t => t.id);
  return Math.max(...ids, 0);
}