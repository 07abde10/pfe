import {Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


const Home = () => <h2 className="text-center text-2xl mt-4">Home Page</h2>;
const Help = () => <h2 className="text-center text-2xl mt-4">Help Page</h2>;
const Fav = () => <h2 className="text-center text-2xl mt-4">Favorite Page</h2>;
const User = () => <h2 className="text-center text-2xl mt-4">Profile Page</h2>;
const Cart = () => <h2 className="text-center text-2xl mt-4">Cart Page</h2>;

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
