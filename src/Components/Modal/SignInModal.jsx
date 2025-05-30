import {useEffect, useState} from "react";
import {FaEye, FaEyeSlash, FaGoogle, FaFacebookF} from "react-icons/fa";

const SignInModal = ({isOpen, onClose}) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white/80  rounded-2xl shadow-lg w-full max-w-md p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In to Your Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none pr-10"
              placeholder="••••••••"
              required
            />
            <span
              className="absolute top-9 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <span className="hover:underline cursor-pointer text-orange-600">
              Forgot Password?
            </span>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="flex text-black items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm">
            <FaGoogle className="text-red-500" /> Continue with Google
          </button>
          <button className="flex text-black items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm">
            <FaFacebookF className="text-blue-500" /> Facebook
          </button>
        </div>
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <button className="underline text-orange-500">Sign Up </button>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
