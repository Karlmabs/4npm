import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/action-types";

export const getAllActionTypes = async (data) => {
  try {
    return await axios.get(`${API_BASE_URL}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const getActionType = async (id) => {
  try {
    return await axios.get(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const editActionType = async (id, data) => {
  try {
    return await axios.patch(`${API_BASE_URL}/${id}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const createActionType = async (data) => {
  try {
    return await axios.post(`${API_BASE_URL}`, data);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

export const deleteActionType = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
