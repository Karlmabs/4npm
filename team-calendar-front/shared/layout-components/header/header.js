import Link from "next/link";
import React, {Fragment, useEffect, useState} from "react";
import {ThemeChanger} from "../../redux/action";
import {connect} from "react-redux";
import store from "@/shared/redux/store";
import Modalsearch from "../modal-search/modalsearch";
import {basePath} from "@/next.config";
import {useAuth} from "@/shared/context/AuthContext";

const Header = ({ local_varaiable, ThemeChanger }) => {
  const [passwordshow1, setpasswordshow1] = useState(false);

  const { user, logout } = useAuth();

  const data = (
    <span className="font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pink/10 text-pink text-[0.625rem]">
      Free shipping
    </span>
  );

  const cartProduct = [
    {
      id: 1,
      src: "/assets/images/ecommerce/jpg/1.jpg",
      name: "SomeThing Phone",
      price: "$1,299.00",
      color: "Metallic Blue",
      text: "6gb Ram",
      class: "",
    },
    {
      id: 2,
      src: "/assets/images/ecommerce/jpg/3.jpg",
      name: "Stop Watch",
      price: "$179.29",
      color: "Analog",
      text: data,
      class: "",
    },
    {
      id: 3,
      src: "/assets/images/ecommerce/jpg/5.jpg",
      name: "Photo Frame",
      price: "$29.00",
      color: "Decorative",
      text: "",
      class: "",
    },
    {
      id: 4,
      src: "/assets/images/ecommerce/jpg/4.jpg",
      name: "Kikon Camera",
      price: "$4,999.00",
      color: "Black",
      text: "50MM",
      class: "",
    },
    {
      id: 5,
      src: "/assets/images/ecommerce/jpg/6.jpg",
      name: "Canvas Shoes",
      price: "$129.00",
      color: "Gray",
      text: "Sports",
      class: "border-b-0",
    },
  ];

  const [cartItems, setCartItems] = useState([...cartProduct]);
  const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

  const handleRemove = (itemId, event) => {
    event.stopPropagation();
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCartItemCount(updatedCartItems.length);
  };

  //Notifications

  const span1 = <span className="text-warning">ID: #1116773</span>;
  const span2 = <span className="text-success">ID: 7731116</span>;

  const notifydata = [
    {
      id: 1,
      class: "Your Order Has Been Shipped",
      data: "Order No: 123456 Has Shipped To Your Delivery Address",
      icon: "gift",
      class2: "",
      color: "primary",
    },
    {
      id: 2,
      class: "Discount Available",
      data: "Discount Available On Selected Products",
      icon: "discount-2",
      class2: "",
      color: "secondary",
    },
    {
      id: 3,
      class: "Account Has Been Verified",
      data: "Your Account Has Been Verified Sucessfully",
      icon: "user-check",
      class2: "",
      color: "pink",
    },
    {
      id: 4,
      class: "Order Placed",
      data: "Order Placed Successfully",
      icon: "circle-check",
      class2: span1,
      color: "warning",
    },
    {
      id: 5,
      class: "Order Delayed",
      data: "Order Delayed Unfortunately",
      icon: "clock",
      class2: span2,
      color: "success",
    },
  ];

  const [notifications, setNotifications] = useState([...notifydata]);

  const handleNotificationClose = (index, event) => {
    // Ensure that event is not undefined before trying to access stopPropagation
    if (event) {
      event.stopPropagation();
    }
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const handleRemoveNotification = (notificationId, event) => {
    // Ensure that event is not undefined before trying to access stopPropagation
    if (event) {
      event.stopPropagation();
    }

    // Handle remove logic for notifications here
    // For example, you can filter out the notification with the given notificationId
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };

  let [storedata, SetStoreData] = useState(local_varaiable);

  //full screen
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // Enter fullscreen mode
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowObject = window;
      if (windowObject.innerWidth <= 991) {
        // ThemeChanger({ ...local_varaiable, "dataToggled": "close" })
      } else {
        // ThemeChanger({...local_varaiable,"dataToggled":""})
      }
    };
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    SetStoreData(local_varaiable);
  }, [local_varaiable]);

  function menuClose() {
    const theme = store.getState();
    ThemeChanger({ ...theme, dataToggled: "close" });
  }

  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "close-menu-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, dataToggled: "icon-overlay-close" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "icon-text-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "double-menu-open") {
              ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    "double-menu-active"
                  );
                } else {
                  ThemeChanger({ ...theme, dataToggled: "" });
                }
              }
            }

            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.dataToggled === "detached-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "detached-close" });
            }
            break;

          // default
          case "default":
            ThemeChanger({ ...theme, dataToggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.dataToggled === "menu-click-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.dataToggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.dataToggled === "icon-click-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.dataToggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      const theme = store.getState();
      if (theme.dataToggled === "close") {
        ThemeChanger({ ...theme, dataToggled: "open" });
        setTimeout(() => {
          if (theme.dataToggled == "open") {
            document
              .querySelector("#responsive-overlay")
              .classList.add("active");
            document
              .querySelector("#responsive-overlay")
              .addEventListener("click", () => {
                document
                  .querySelector("#responsive-overlay")
                  .classList.remove("active");
                menuClose();
              });
          }
          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              document
                .querySelector("#responsive-overlay")
                .classList.remove("active");
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, dataToggled: "close" });
      }
    }
  };
  //Dark Model
  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      class: local_varaiable.class == "dark" ? "light" : "dark",
      dataHeaderStyles:
        local_varaiable.dataHeaderStyles == "dark" ? "light" : "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout == "horizontal"
          ? local_varaiable.dataMenuStyles == "dark"
            ? "light"
            : "dark"
          : "dark",
    });
    const theme = store.getState();

    if (theme.class != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        Light: "",
        dataHeaderStyles: "",
      });
      localStorage.setItem("ynexdarktheme", "dark");
      localStorage.removeItem("ynexdarktheme");
      localStorage.removeItem("ynexHeader");
      localStorage.removeItem("ynexMenu");
    } else {
      localStorage.setItem("ynexdarktheme", "dark");
      localStorage.removeItem("ynexlighttheme");
    }
  };

  useEffect(() => {
    const navbar = document?.querySelector(".header");
    const navbar1 = document?.querySelector(".app-sidebar");
    const sticky = navbar?.clientHeight;
    // const sticky1 = navbar1.clientHeight;

    function stickyFn() {
      if (window.pageYOffset >= sticky) {
        navbar?.classList.add("sticky-pin");
        navbar1?.classList.add("sticky-pin");
      } else {
        navbar?.classList.remove("sticky-pin");
        navbar1?.classList.remove("sticky-pin");
      }
    }

    window.addEventListener("scroll", stickyFn);
    window.addEventListener("DOMContentLoaded", stickyFn);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyFn);
      window.removeEventListener("DOMContentLoaded", stickyFn);
    };
  }, []);

  return (
    <Fragment>
      <div className="app-header">
        <nav className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="main-header-container ps-[0.725rem] pe-[1rem] ">
            <div className="header-content-left">
              <div className="header-element">
                <div className="horizontal-logo">
                  <Link
                    href="/components/dashboards/crm/"
                    className="header-logo"
                  >
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/desktop-logo.png`}
                      alt="logo"
                      className="desktop-logo"
                    />
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/toggle-logo.png`}
                      alt="logo"
                      className="toggle-logo"
                    />
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/desktop-dark.png`}
                      alt="logo"
                      className="desktop-dark"
                    />
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/toggle-dark.png`}
                      alt="logo"
                      className="toggle-dark"
                    />
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/desktop-white.png`}
                      alt="logo"
                      className="desktop-white"
                    />
                    <img
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/images/brand-logos/toggle-white.png`}
                      alt="logo"
                      className="toggle-white"
                    />
                  </Link>
                </div>
              </div>
              <div
                className="header-element md:px-[0.325rem] !items-center"
                onClick={() => toggleSidebar()}
              >
                <Link
                  aria-label="Hide Sidebar"
                  className="sidemenu-toggle animated-arrow  hor-toggle horizontal-navtoggle inline-flex items-center"
                  href="#!"
                >
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="header-content-right">
              <div
                className="header-element header-theme-mode hidden !items-center sm:block !py-[1rem] md:!px-[0.65rem] px-2"
                onClick={() => ToggleDark()}
              >
                <Link
                  aria-label="anchor"
                  className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  href="#!"
                  data-hs-theme-click-value="dark"
                >
                  <i className="bx bx-moon header-link-icon"></i>
                </Link>
                <Link
                  aria-label="anchor"
                  className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs dark:bg-bodybg dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  href="#!"
                  data-hs-theme-click-value="light"
                >
                  <i className="bx bx-sun header-link-icon"></i>
                </Link>
              </div>

              <div className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left] profile-data">
                <button
                  id="dropdown-profile"
                  type="button"
                  className="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent "
                >
                  <img
                    className="inline-block rounded-full "
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/faces/9.jpg`}
                    width="32"
                    height="32"
                    alt="Image Description"
                  />
                </button>
                <div className="md:block hidden dropdown-profile">
                  <p className="font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ">
                    {user?.username}
                  </p>
                  <span className="opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ">
                    Web Designer
                  </span>
                </div>
                <div
                  className="hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                  aria-labelledby="dropdown-profile"
                >
                  <ul className="text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50">
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                        href="#!"
                      >
                        <i className="ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                        href="#!"
                      >
                        <i className="ti ti-inbox text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Inbox{" "}
                        <span className="!py-1 !px-[0.45rem] !font-semibold !rounded-sm text-success text-[0.75em] bg-success/10 ms-auto">
                          25
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                        href="#!"
                      >
                        <i className="ti ti-clipboard-check text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Task Manager
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                        href="#!"
                      >
                        <i className="ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex "
                        href="#!"
                      >
                        <i className="ti ti-wallet text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Bal: $7,12,950
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                        href="#!"
                      >
                        <i className="ti ti-headset text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                        href="#!"
                        onClick={() => {
                          logout();
                          window.location.href = "/";
                        }}
                      >
                        <i className="ti ti-logout text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*<div className="header-element md:px-[0.48rem]">
                <button aria-label="button" type="button"
                  className="hs-dropdown-toggle switcher-icon inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium  align-middle transition-all text-xs dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  data-hs-overlay="#hs-overlay-switcher">
                  <i className="bx bx-cog header-link-icon animate-spin-slow"></i>
                </button>
              </div>*/}
            </div>
          </div>
        </nav>
      </div>
      <Modalsearch />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
