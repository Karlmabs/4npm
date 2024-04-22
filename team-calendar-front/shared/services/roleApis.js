import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/roles";

export const getAllRoles = async (data) => {
  try {
    return await axios.get(`${API_BASE_URL}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const getRole = async (id) => {
  try {
    return await axios.get(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const editRole = async (id, data) => {
  try {
    return await axios.put(`${API_BASE_URL}/${id}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const createRole = async (data) => {
  try {
    return await axios.post(`${API_BASE_URL}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const deleteRole = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
