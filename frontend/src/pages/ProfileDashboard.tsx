
// import { useState } from "react";
// import { AiOutlineHeart,AiOutlineLogout,} from "react-icons/ai";
// import {HiOutlineShoppingCart,HiOutlineCog, HiOutlineLocationMarker,} from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FiMoreVertical } from "react-icons/fi";
// import { Link } from "react-router-dom";
// export {};
// export default function ProfileDashboard() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selected, setSelected] = useState("overview");

//   return (
//     <div className="min-h-screen bg-gray-100 flex">

//       {/* ===================== SIDEBAR ===================== */}
//       <aside className="w-64 bg-white shadow-md p-6 hidden md:block">

//         <h2 className="text-2xl font-bold mb-6">My Account</h2>

//         <nav className="space-y-3">
//           {/* Overview */}
//           <button
//             onClick={() => setSelected("overview")}
//             className={`w-full text-left px-4 py-2 rounded-lg ${
//               selected === "overview"
//                 ? "bg-black text-white"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             Overview
//           </button>

//           {/* Orders */}
//           <button
//             onClick={() => setSelected("orders")}
//             className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
//               selected === "orders"
//                 ? "bg-black text-white"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             <MdOutlineShoppingBag size={20} /> Orders
//           </button>

//           {/* Wishlist */}
//           <Link
//             to="/wishlist"
//             className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
//           >
//             <AiOutlineHeart size={20} /> Wishlist
//           </Link>

//           {/* Addresses */}
//           <button
//             onClick={() => setSelected("address")}
//             className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
//               selected === "address"
//                 ? "bg-black text-white"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             <HiOutlineLocationMarker size={20} /> Addresses
//           </button>

//           {/* Settings */}
//           <button
//             onClick={() => setSelected("settings")}
//             className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
//               selected === "settings"
//                 ? "bg-black text-white"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             <HiOutlineCog size={20} /> Settings
//           </button>

//           {/* Logout */}
//           <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-6">
//             <AiOutlineLogout size={20} /> Logout
//           </button>
//         </nav>
//       </aside>

//       {/* ===================== MAIN CONTENT ===================== */}
//       <main className="flex-1 p-6">

//         {/* ---------- TOP HEADER ---------- */}
//         <div className="flex justify-end items-center gap-4 relative">

//           {/* Wishlist icon */}
//           <Link to="/wishlist" className="p-2 hover:bg-gray-200 rounded-full">
//             <AiOutlineHeart size={22} />
//           </Link>

//           {/* Cart icon */}
//           <Link to="/cart" className="p-2 hover:bg-gray-200 rounded-full">
//             <HiOutlineShoppingCart size={22} />
//           </Link>

//           {/* Profile circle */}
//           <div className="w-11 h-11 rounded-full bg-gray-300 border overflow-hidden"></div>

//           {/* 3-dot menu */}
//           <button
//             className="p-2 hover:bg-gray-200 rounded-full"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <FiMoreVertical size={22} />
//           </button>

//           {/* Dropdown */}
//           {menuOpen && (
//             <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 py-2 border z-50">
//               <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
//                 Settings
//               </Link>
//               <Link to="/profile/edit-profile" className="block px-4 py-2 hover:bg-gray-100">
//                 Edit Profile
//               </Link>
//               <Link to="/change-password" className="block px-4 py-2 hover:bg-gray-100">
//                 Change Password
//               </Link>
//               <Link to="/manage-account" className="block px-4 py-2 hover:bg-gray-100">
//                 Manage Account
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* ---------- PAGE CONTENT ---------- */}
//         <section className="mt-8">

//           {selected === "overview" && (
//             <div>
//               <h1 className="text-3xl font-bold mb-4">Overview</h1>
//               <p className="text-gray-600">
//                 Welcome back! Here is your account summary.
//               </p>

//               {/* Stats Boxes */}
//               <div className="grid md:grid-cols-3 gap-6 mt-6">

//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <p className="text-gray-500">Total Orders</p>
//                   <h2 className="text-2xl font-bold mt-2">12</h2>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <p className="text-gray-500">Wishlist Items</p>
//                   <h2 className="text-2xl font-bold mt-2">8</h2>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <p className="text-gray-500">Addresses Saved</p>
//                   <h2 className="text-2xl font-bold mt-2">3</h2>
//                 </div>

//               </div>
//             </div>
//           )}

//           {selected === "orders" && (
//             <div>
//               <h1 className="text-3xl font-bold mb-4">My Orders</h1>
//               <p className="text-gray-500">List of your purchased items</p>
//             </div>
//           )}

//           {selected === "address" && (
//             <div>
//               <h1 className="text-3xl font-bold mb-4">Shipping Addresses</h1>
//               <p className="text-gray-600">Manage your saved addresses</p>
//             </div>
//           )}

//           {selected === "settings" && (
//             <div>
//               <h1 className="text-3xl font-bold mb-4">Settings</h1>
//               <p className="text-gray-600">Manage your account preferences</p>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineShoppingCart, HiOutlineCog, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

export default function ProfileDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* ===================== SIDEBAR ===================== */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">My Account</h2>

        <nav className="space-y-3">
          <Link
            to=""
            className="block px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Overview
          </Link>

          <Link
            to="orders"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <MdOutlineShoppingBag size={20} /> Orders
          </Link>

          <Link
            to="wishlist"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <AiOutlineHeart size={20} /> Wishlist
          </Link>

          <Link
            to="address"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <HiOutlineLocationMarker size={20} /> Addresses
          </Link>

          <Link
            to="settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <HiOutlineCog size={20} /> Settings
          </Link>

          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-6">
            <AiOutlineLogout size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* ===================== MAIN CONTENT ===================== */}
      <main className="flex-1 p-6">

        {/* ---------- TOP HEADER ---------- */}
        <div className="flex justify-end items-center gap-4 relative">

          {/* Wishlist icon */}
          <Link to="/wishlist" className="p-2 hover:bg-gray-200 rounded-full">
            <AiOutlineHeart size={22} />
          </Link>

          {/* Cart icon */}
          <Link to="/cart" className="p-2 hover:bg-gray-200 rounded-full">
            <HiOutlineShoppingCart size={22} />
          </Link>

          {/* Profile circle */}
          <div className="w-11 h-11 rounded-full bg-gray-300 border overflow-hidden"></div>

          {/* 3-dot menu */}
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMoreVertical size={22} />
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 py-2 border z-50">
              <Link to="settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </Link>
              <Link to="edit-profile" className="block px-4 py-2 hover:bg-gray-100">
                Edit Profile
              </Link>
              <Link to="change-password" className="block px-4 py-2 hover:bg-gray-100">
                Change Password
              </Link>
              <Link to="manage-account" className="block px-4 py-2 hover:bg-gray-100">
                Manage Account
              </Link>
            </div>
          )}
        </div>

        {/* ---------- NESTED ROUTES CONTENT ---------- */}
        <section className="mt-8">
          {/* This is where nested routes render */}
          <Outlet />
        </section>
      </main>
    </div>
  );
}

