export const ThemeChanger = (value) => async (dispatch) => {
  dispatch({
    type: "ThemeChanger",
    payload: value,
  });
};
export const AddToCart = (id) => async (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: id,
  });
};
export const ProductReduxData = (id) => async (dispatch) => {
  dispatch({
    type: "PRODUCT",
    payload: id,
  });
};
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.error) {
      dispatch({ type: "LOGIN_ERROR", payload: data.error });
    } else {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.message });
  }
};
