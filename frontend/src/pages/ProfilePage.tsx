
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* TOP SECTION */}
      <div className="flex justify-end items-center gap-4 relative">

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <AiOutlineHeart size={24} />
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <HiOutlineShoppingCart size={24} />
        </Link>

        {/* Profile circle */}
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-400 cursor-pointer"></div>

        {/* 3-dot menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiMoreVertical size={24} />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg border py-2 z-50">
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              to="/edit-profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Edit Profile
            </Link>
            <Link
              to="/change-password"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Change Password
            </Link>
            <Link
              to="/manage-account"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Manage Account
            </Link>
          </div>
        )}
      </div>

      {/* PROFILE CONTENT */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-600 mt-2">
          Manage your personal information, settings, and more.
        </p>

        {/* Products Button */}
        <Link
          to="/products"
          className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
