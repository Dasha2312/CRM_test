import axios from "axios"

async function apiUsers(page = 1, limit = 10) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const response = await axios.get(`${BASE_URL}/users`, {
    params: { page, limit }
  });

  return response.data;
}

export default apiUsers;