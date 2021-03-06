import config from '../../config';

const patchUser = async (payload) => {
  const {
    user_id,
    firstName,
    lastName,
    artistName,
    email,
    phoneNumber,
    avatar,
    locale,
    notifications,
    professionalIdentity,
    isni,
    birthDate,
    address,
    organisations,
    projects,
    uri,
  } = payload;
  const body = JSON.stringify({
    firstName,
    lastName,
    artistName,
    email,
    phoneNumber,
    avatar,
    locale,
    notifications,
    professionalIdentity,
    isni,
    birthDate,
    address,
    organisations,
    projects,
    uri,
  });
  try {
    const url = `${config.apiUrl}/users/${user_id}`;
    const method = 'PATCH';
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

export default patchUser;
