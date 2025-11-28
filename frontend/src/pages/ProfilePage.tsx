// import { useEffect, useState } from "react";
// import {getProfile } from "../services/AuthService";

// const BASE_URL = "http://127.0.0.1:8000";

// interface ProfileData {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   profile: {
//     phone: string | null;
//     address: string | null;
//     avatar: string | null;
//   };
// }

// export default function ProfilePage() {
//   const [data, setData] = useState<ProfileData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     getProfile()
//       .then((res) => setData(res))
//       .catch((err) => {
//         console.error("Profile load error:", err);
//         setError("Failed to load profile. Please login again.");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p className="p-10 text-center">Loading profile...</p>;
//   if (error) return <p className="p-10 text-center text-red-500">{error}</p>;
//   if (!data) return <p className="p-10 text-center">No profile found</p>;

//   const avatarUrl = data.profile.avatar
//     ? `${BASE_URL}${data.profile.avatar}`
//     : "https://via.placeholder.com/150";

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">My Profile</h1>

//       <div className="bg-white p-6 rounded-xl shadow flex gap-6">
//         <img
//           src={avatarUrl}
//           alt="Avatar"
//           className="w-32 h-32 rounded-full object-cover border"
//         />

//         <div className="flex-1">
//           <h2 className="text-xl font-semibold">
//             {data.first_name} {data.last_name}
//           </h2>

//           <p className="mt-2">
//             <strong>Email:</strong> {data.email}
//           </p>

//           <p className="mt-2">
//             <strong>Phone:</strong> {data.profile.phone ?? "No phone added"}
//           </p>

//           <p className="mt-2">
//             <strong>Address:</strong> {data.profile.address ?? "No address added"}
//           </p>

//           <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
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
