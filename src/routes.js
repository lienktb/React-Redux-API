import React from "react";
import HomePage from "./pages/HomePage";
import ProductActionPage from "./pages/ProductActionPage";
import ProductPage from "./pages/ProductPage";

const routes = [
  {
    path: "/",
    exact: true,
    element: <HomePage/>,
  },
  {
    path: "/home",
    exact: false,
    element: <HomePage/>,
  },
  {
    path: "/product",
    exact: true,
    element: <ProductPage />,
  },
  {
    path: "/product/add-product",
    exact: true,
    element: <ProductActionPage />,
  },
  {
    path: "/product/:id/edit",
    exact: true,
    element: <ProductActionPage />,
  },
];
export {routes};
