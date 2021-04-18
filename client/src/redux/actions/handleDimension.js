export const HANDLE_DIMENSION = 'HANDLE_DIMENSION';

export const handleDimension = (name, value) => ({
  type: HANDLE_DIMENSION,
  name,
  value,
});
