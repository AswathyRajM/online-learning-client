import axios from 'axios';

export const handleError = (error, endpoint) => {
  console.error('Err while fetching ' + endpoint, error);

  if (axios.isAxiosError(error)) {
    return error.response;
  } else {
    return error;
  }
};
