import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/RootLayout";
import Books from "../components/Books/Books";
import BookInfo from "../components/BookInfo/BookInfo";
import Cart from "../components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: "/book/:bookId",
        element: <BookInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
