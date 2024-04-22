import {Itemsdata1} from "@/shared/data/ecommerces/ecommercedata";

let initialState = {
  lang: "en",
  dir: "ltr",
  class: "light",
  dataMenuStyles: "dark",
  dataNavLayout: "vertical",
  dataHeaderStyles: "light",
  dataVerticalStyle: "overlay",
  dataToggled: "",
  loading: false,
  error: null,
  user: null,
  dataNavStyle: "",
  horStyle: "",
  dataPageStyle: "regular",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "",
  colorPrimary: "",
  bodyBg: "",
  Light: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: {
    class: "",
  },
};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      state = payload;
      return state;

    case "ADD_TO_CART":
      state.ecommercedata = Itemsdata1.filter((idx) => {
        return idx.id === payload;
      });
      return state;

    case "PRODUCT":
      state.ecommercedata = state.ecommercedata.filter((idx) => {
        return idx.id === payload;
      });
      return state;

    case "LOGIN_SUCCESS":
      return { ...state, user: payload, loading: false, error: null };

    case "LOGIN_ERROR":
      return { ...state, user: null, loading: false, error: payload };

    default:
      return state;
  }
}
