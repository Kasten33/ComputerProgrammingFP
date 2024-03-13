import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Searchbar from "./components/Searchbar/Searchbar";
import Book from "./pages/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Book /> },
      { path: "/product/:id", element: <Book /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
