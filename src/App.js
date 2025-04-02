import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Order from "./Routes/Order";
import Products from "./Routes/Products";
import Features from "./Routes/Features";
import New from "./Routes/New";
import Users from "./Routes/Users";
import UserDetails from "./Routes/UserDetails";
import Admin from "./Routes/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

        {/* nested route */}
        <Route path="/products" element={<Products />}>
          {/* index route */}
          <Route index element={<Features />} />
          <Route path="features" element={<Features />} />
          <Route path="new" element={<New />} />
        </Route>

        {/* Dynamic routes */}
        {/* <Route path="/users/1" element={<Users />}/> */}

        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
