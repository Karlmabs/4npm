import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/actions";

export const getAllActions = async (data) => {
  try {
    return await axios.get(`${API_BASE_URL}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const getAction = async (id) => {
  try {
    return await axios.get(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const editAction = async (id, data) => {
  try {
    return await axios.put(`${API_BASE_URL}/${id}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const createAction = async (data) => {
  try {
    return await axios.post(`${API_BASE_URL}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const deleteAction = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
