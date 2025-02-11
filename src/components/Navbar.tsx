import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHelpCircle,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiSearch,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <nav className="bg-gray-200 w-350 mx-auto p-4 mt-4 h-20 rounded-3xl shadow-md border-2">
      <div className="container mx-auto h-10 flex flex-col md:flex-row justify-between items-center gap-4 relative left-10">
        {/* logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img
              src="https://media-hosting.imagekit.io//b4cf628351e545be/Untitled-1.png?Expires=1833630205&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ccw8RO6VK-BaRmZtuSIn65FDKPubkEm-WGcfQk13qIqj8doVXNckuwICbPx-8fceFNj3ywYj-f89tLimvuAp-Onc6v19bQaXhkfuXTdsGFLudO0YfJb6drKYsIO1thUskZBQjPvqaX5CQtofZccHULQfHCz0bYJo48700OSKJfQCR8xMyCOAU6oPUrsxWAz0SUW0oTCi01QM3EP6NAgLiDpzKAX9uYNc-y4eWmsEk0ou~3NB-yJo~aYoZEpoosCn1S87JcA8WCmimC3PZ17jmYbVKrTALmK8ne2U7Yiy9S43DnmS0n2YX3F~Yu6D~2HNCNzU~GiGgVCfPK-HgDq24Q__"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">LOGO</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center border-2 rounded-full px-4 py-1 shadow-sm w-full md:w-150">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none w-full m-1 md:w-150 text-sm text-sm text-gray-700 font-bold"
          />
          <FiSearch className="cursor-pointer relative text-2xl m-1" />
        </div>

        {/* Icons Desktop */}
        <div className="hidden md:flex gap-10 relative right-20 ">
          <Link to="/help"><FiHelpCircle className="cursor-pointer text-2xl " /></Link>
          <Link to="/fav"><FiHeart className="cursor-pointer text-2xl" /></Link>
          <Link to="/user"><FiUser className="cursor-pointer text-2xl" /></Link>
          <Link to="/cart"><FiShoppingCart className="cursor-pointer text-2xl" /></Link>
        </div>

        {/* Icons Mobile*/}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu className="cursor-pointer text-2xl" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4">
            <FiHelpCircle className="cursor-pointer " />
            <FiHeart className="cursor-pointer " />
            <FiUser className="cursor-pointer " />
            <FiShoppingCart className="cursor-pointer " />
          </div>
        )}
      </div>
    </nav>
    </>
  );
};
export default Navbar;
