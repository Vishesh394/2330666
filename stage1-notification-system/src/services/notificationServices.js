const axios = require("axios");
require("dotenv").config();

async function fetchNotifications() {
  const token = process.env.ACCESS_TOKEN;
  if (!token) {
    throw new Error("ACCESS_TOKEN is not set. Add it to a .env file in the project root.");
  }

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`
      }
    }
  );

  return response.data.notifications;
}

module.exports = {
  fetchNotifications
};