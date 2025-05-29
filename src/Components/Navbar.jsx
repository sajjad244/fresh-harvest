import {FaShoppingCart} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {Link, NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];

  return (
    <div
      className={`navbar container   mx-auto ${
        isHomePage ? "relative z-30 " : ""
      }`}
    >
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-black ">
          Fresh Harvests
        </Link>
      </div>

      {/* Center Menu (for large screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 font-semibold gap-8 ${
            isHomePage ? "text-white" : "text-purple-500"
          }`}
        >
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-gray-600 underline" : "text-gray-600"
              } `
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-gray-600 underline" : "text-gray-600"
              } `
            }
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-gray-600 underline" : "text-gray-600"
              } `
            }
            to="/about"
          >
            About us
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-gray-600 underline" : "text-gray-600"
              } `
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </ul>
      </div>

      {/* Right side (cart + heart + burger menu on small screen) */}
      <div className="navbar-end space-x-4">
        {/* Cart Icon */}
        <div className="relative">
          <FaShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
            {cartItems.length}
          </span>
        </div>

        {/* Heart Icon */}
        <div className="relative hidden md:block ">
          <IoMdHeart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
            {favoriteItems.length}
          </span>
        </div>
        {/* sign in  */}
        <Link className="hidden md:block" to={"/login"}>
          <button className="btn border border-black">Sign in</button>
        </Link>

        {/* Burger Menu (mobile only) */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 ${
              isHomePage ? "text-white" : "text-purple-500"
            }`}
          >
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-gray-600 underline" : "text-gray-600"
                } `
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-gray-600 underline" : "text-gray-600"
                } `
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-gray-600 underline" : "text-gray-600"
                } `
              }
              to="/about"
            >
              About us
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-gray-600 underline" : "text-gray-600"
                } `
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-gray-600 underline" : "text-gray-600"
                } `
              }
              to="/login"
            >
              Sign in
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
