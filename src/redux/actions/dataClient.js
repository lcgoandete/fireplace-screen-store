export const SET_DATA_CLIENT = 'SET_DATA_CLIENT';

export function setDataClient(dataClient) {
  return {
    type: SET_DATA_CLIENT,
    dataClient,
  }
};
