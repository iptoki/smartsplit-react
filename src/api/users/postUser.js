import config from '../../config';

const postUser = async (payload) => {
  const { email, password, firstName, lastName, artistName } = payload;
  const body = JSON.stringify({
    email,
    password,
    firstName,
    lastName,
    artistName,
  });
  try {
    const url = `${config.apiUrl}/users/`;
    const method = 'POST';
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'content-type': 'application/json',
      },
    });
    const textResponse = await response.text();
    const parsedResponse = JSON.parse(textResponse);
    console.log(parsedResponse);
    return parsedResponse;
  } catch (err) {
    console.log(err);
    const parsedResponse = { errors: ["Can't reach server"] };
    return parsedResponse;
  }
};

export default postUser;
