import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/auth";

export const login = async (data) => {
  try {
    return await axios.post(`${API_BASE_URL}/login`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const register = async (data) => {
  try {
    return await axios.post(`${API_BASE_URL}/register`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
