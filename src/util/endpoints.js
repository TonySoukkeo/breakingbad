export const URLS = {
  GET_CHARACTERS: {
    url: "/characters",
  },
};

export const getEndpointURL = (key) => {
  try {
    return URLS[key].url;
  } catch (error) {
    return error.message;
  }
};
