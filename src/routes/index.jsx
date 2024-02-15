import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import Mijozlar from "../pages/Mijozlar";
import Kategoriya from "../pages/Kategoriya";
import Mahsulotlar from "../pages/Mahsulotlar";
import LogOut from "../components/common/LogOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "dashboard/",
        element: <MainLayout />,
        children: [
          {
            path:"home",
            element: < DashboardPage />
          },
          {
            path: "mijozlar",
            element: <Mijozlar/>
          },
          {
            path: "kategoriya",
            element: < Kategoriya/>
          },
          {
          path: "mahsulotlar",
            element: < Mahsulotlar/>
          },
          {
            path: "logout",
            element: < LogOut />
          },
        ]
      }
    ]
  }
]);