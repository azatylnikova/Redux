import {
  ADMIN_ROUTE,
  DEFAULT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USERS_ROUTE,
  USER_PAGE_ROUTE
} from "./utils/consts";

export const authRoutes = [
  ///// Доступ только для авторизованных пользователей
  {
    path: ADMIN_ROUTE,
    Component: "Admin"
  }
];
export const publicRoutes = [
  ///// Доступ только для всех пользователей
  {
    path: USERS_ROUTE,
    Component: "Users"
  },
  {
    path: DEFAULT_ROUTE,
    Component: "Auth"
  },
  {
    path: USER_PAGE_ROUTE,
    Component: "UserPage"
  },
  {
    path: LOGIN_ROUTE,
    Component: "Auth"
  },
  {
    path: REGISTRATION_ROUTE + "/id",
    Component: "Auth"
  }
];
