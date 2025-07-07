import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./App/Store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";

//

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "product", element: <Product /> },
        { path: "singleProduct/:id", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        { path: "footer", element: <Footer /> },
      ],
    },
  ],
  { basename: "/ecomm" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
