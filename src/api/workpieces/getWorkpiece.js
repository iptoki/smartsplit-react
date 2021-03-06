import config from '../../config';

const getWorkpiece = async (payload) => {
  try {
    const url = `${config.apiUrl}/workpieces/${payload.workpiece_id}`;
    const method = 'GET';
    const bearer = `Bearer ${localStorage.getItem('accessToken')}`;
    const response = await fetch(url, {
      method,
      headers: {
        'content-type': 'application/json',
        Authorization: bearer,
      },
    });
    const textResponse = await response.text();
    const parsedResponse = JSON.parse(textResponse);

    // DATA MAPPING
    if (parsedResponse.rightSplit) {
      if (parsedResponse.rightSplit.copyright) {
        parsedResponse.rightSplit.copyright.forEach((el) => {
          el.rightHolder_id = el.rightHolder.user_id;
        });
      }
      if (parsedResponse.rightSplit.performance) {
        parsedResponse.rightSplit.performance.forEach((el) => {
          el.rightHolder_id = el.rightHolder.user_id;
        });
      }
      if (parsedResponse.rightSplit.recording) {
        parsedResponse.rightSplit.recording.forEach((el) => {
          el.rightHolder_id = el.rightHolder.user_id;
        });
      }
      if (parsedResponse.rightSplit.privacy) {
        parsedResponse.rightSplit.privacy.forEach((el) => {
          el.rightHolder_id = el.rightHolder.user_id;
        });
      }
      if (
        parsedResponse.rightSplit.label &&
        Object.keys(parsedResponse.rightSplit.label).length > 0
      ) {
        parsedResponse.rightSplit.label.rightHolder_id =
          parsedResponse.rightSplit.label.rightHolder.user_id;
      }
    }

    if (parsedResponse.archivedSplits) {
      parsedResponse.archivedSplits.forEach((rightSplit, id) => {
        if (rightSplit.copyright) {
          rightSplit.copyright.forEach((el) => {
            el.rightHolder_id = el.rightHolder.user_id;
          });
        }
        if (rightSplit.performance) {
          rightSplit.performance.forEach((el) => {
            el.rightHolder_id = el.rightHolder.user_id;
          });
        }
        if (rightSplit.recording) {
          rightSplit.recording.forEach((el) => {
            el.rightHolder_id = el.rightHolder.user_id;
          });
        }
        if (rightSplit.privacy) {
          rightSplit.privacy.forEach((el) => {
            el.rightHolder_id = el.rightHolder.user_id;
          });
        }
        if (rightSplit.label) {
          rightSplit.label.rightHolder_id =
            rightSplit.label.rightHolder.user_id;
        }
      });
    }

    console.log(parsedResponse);
    return parsedResponse;
  } catch (err) {
    console.log(err);
    const parsedResponse = { errors: ["Can't reach server"] };
    return parsedResponse;
  }
};

export default getWorkpiece;
