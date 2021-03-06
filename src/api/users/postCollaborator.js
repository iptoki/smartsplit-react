import config from '../../config';

const postCollaborator = async (payload) => {
  const { email, firstName, lastName, artistName, user_id } = payload;
  const body = JSON.stringify({
    email,
    firstName,
    lastName,
    artistName,
  });
  try {
    const url = `${config.apiUrl}/users/${user_id}/collaborators/`;
    const method = 'POST';
    const bearer = `Bearer ${localStorage.getItem('accessToken')}`;
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'content-type': 'application/json',
        Authorization: bearer,
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

export default postCollaborator;
