const axios = require("axios");

const getFromPretalx = async (url) => {
  const token = process.env.PRETALX_TOKEN;
  const headers = {
    Authorization: `Token ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.results;
  } catch (e) {
    // check if error is 401
    if (e.response.status === 401) {
      console.error(e);
      throw new Error("Can't fetch speakers, check your token");
    }
  }
};

const getSpeakers = async () => {
  const speakers = await getFromPretalx(
    "https://speak.ticketh.xyz/api/events/protocol-berg/speakers/?format=json&limit=200"
  );
  return speakers;
};

const getSubmissions = async () => {
  const submissions = await getFromPretalx(
    "https://speak.ticketh.xyz/api/events/protocol-berg/submissions/?format=json&limit=200"
  );
  return submissions;
};

exports.onCreatePage = async ({ actions: { createPage }, page }) => {
  const allSpeakers = await getSpeakers();
  const allSubmissions = await getSubmissions();
  const confirmedSubmissions = allSubmissions.filter(
    (submission) => submission.state === "confirmed"
  );
  const confirmedSpeakerIds = confirmedSubmissions
    .map((submission) => submission.speakers)
    .reduce((acc, val) => {
      val.forEach((speaker) => acc.add(speaker.code));
      return acc;
    }, new Set());

  const confirmedSpeakers = allSpeakers.filter((speaker) =>
    confirmedSpeakerIds.has(speaker.code)
  );
  console.log(confirmedSpeakers);

  createPage({
    ...page,
    context: {
      ...page.context,
      confirmedSpeakers,
    },
  });
};
