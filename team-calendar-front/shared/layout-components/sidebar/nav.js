import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;

export const MenuItems = [
  {
    menutitle: "MENU",
    Items: [
      {
        icon: DashboardIcon,
        title: "Dashboard",
        type: "sub",
        active: false,
        children: [
          {
            path: "/full-calendar",
            type: "link",
            active: false,
            selected: false,
            title: "Calendar",
          },
        ],
      },
      {
        icon: <i className="bx bx-user side-menu__icon" />,
        title: "Users",
        type: "sub",
        active: false,
        children: [
          {
            path: "/users",
            type: "link",
            active: false,
            selected: false,
            title: "Users",
          },
          {
            path: "/users/new-user",
            type: "link",
            active: false,
            selected: false,
            title: "Add a user",
          },
        ],
      },
      {
        icon: <i className="bx bx-user side-menu__icon" />,
        title: "Roles",
        type: "sub",
        active: false,
        children: [
          {
            path: "/roles",
            type: "link",
            active: false,
            selected: false,
            title: "Roles",
          },
          {
            path: "/roles/new-role",
            type: "link",
            active: false,
            selected: false,
            title: "Add a role",
          },
        ],
      },
      {
        icon: <i className="bx bx-user side-menu__icon" />,
        title: "Action Types",
        type: "sub",
        active: false,
        children: [
          {
            path: "/action-types",
            type: "link",
            active: false,
            selected: false,
            title: "Action Types",
          },
          {
            path: "/action-types/new",
            type: "link",
            active: false,
            selected: false,
            title: "Add an action type",
          },
        ],
      },
      {
        icon: <i className="bx bx-note side-menu__icon" />,
        title: "Actions",
        type: "sub",
        active: false,
        children: [
          {
            path: "/actions",
            type: "link",
            active: false,
            selected: false,
            title: "Actions",
          },
          {
            path: "/actions/new-action",
            type: "link",
            active: false,
            selected: false,
            title: "Add an action",
          },
        ],
      },
    ],
  },
];
export default MenuItems;
