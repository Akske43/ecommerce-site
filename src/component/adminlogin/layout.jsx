import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authservice from "../../appwrite/auth";

const Layout = ({ Logouthandler }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const user = await authservice.getCurrentUser();
        const userDetails = await authservice.getUserDataByEmail(user.email);
        setUserData(userDetails);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] ">
      <header className="w-full flex flex-col sm:flex-row justify-between items-center bg-[#1f2937] p-4 shadow-md">
        <div className="text-white text-lg sm:text-xl font-semibold text-center sm:text-left mb-2 sm:mb-0">
          Welcome to the Admin Panel{userData?.name ? `, ${userData.name}` : ""}
        </div>
        <button
          className="px-5 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-blue-600 hover:text-white transition"
          onClick={Logouthandler}
        >
          Logout
        </button>
      </header>

      <main className="bg-[#111827] p-8 min-h-[calc(100vh-72px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
