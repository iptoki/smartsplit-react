const voteRightSplit = async (payload) => {
  const { copyright, performance, recording, privacy, label } = payload;
  const body = JSON.stringify({
    copyright,
    performance,
    recording,
    privacy,
    label,
  });
  try {
    const url = `http://159.203.15.16:3001/v1/workpieces/${payload.workpiece_id}/rightSplit/vote`;
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
    console.log(textResponse);
  } catch (err) {
    console.log(err);
    const parsedResponse = { errors: ["Can't reach server"] };
    return parsedResponse;
  }
};

export default voteRightSplit;
