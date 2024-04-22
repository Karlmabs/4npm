import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/users";

export const getAllUsers = async (data) => {
  try {
    return await axios.get(`${API_BASE_URL}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const editUser = async (id, data) => {
  try {
    return await axios.put(`${API_BASE_URL}/${id}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
