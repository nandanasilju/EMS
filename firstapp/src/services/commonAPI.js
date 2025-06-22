



import axios from 'axios';

const commonAPI = async (method, url, body, headers) => {
  const reqConfig = {
    method,
    url,
    data: body,
    headers
  };

  return await axios(reqConfig);
};

export default commonAPI;
