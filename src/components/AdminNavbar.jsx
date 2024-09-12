import React, { useContext } from 'react'; // Import useContext
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import toast from 'react-hot-toast'; // Import toast for notifications
import BlogContext from "../context/BlogContext"; // Import your context

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(BlogContext); // Access isAuth and setIsAuth from context

  const handleLogout = async () => {
    try {
      // Send POST request to /logout endpoint
      const res = await axios.post("http://localhost:5000/api/logout", null, {
        withCredentials: true, // If cookies are used for authentication
      });
      const data = await res.data;

      if (data.success) {
        // Show a success message
        toast.success("Logout successful!");

        // Reset the authentication state
        setIsAuth(false);

        // Optional: Redirect to the login page
        navigate("/admin");
      }
    } catch (error) {
      console.error("Logout error:", error.message);
      toast.error("An error occurred during logout");
    }
  };

  const handleClick1 = () => {
    navigate('/'); // Redirect to Home component
  };
  
  const handleClick2 = () => {
    navigate('/admin'); // Redirect to Admin page
  };

  return (
    <nav className="bg-purple-500 p-4 mx-auto flex justify-between items-center shadow-md" style={{backgroundColor:"rgba(7,214,255,1"}}>
      <a href="/" className="text-white text-2xl font-bold">
        Interview-prep
      </a>
      <ul className="flex space-x-4 text-white">
        {/* <li
          className="hover:font-bold transition-all duration-300 ease-in-out cursor-pointer"
          onClick={handleClick1}
        >
          All Blogs
        </li> */}
        <li
          className="hover:font-bold transition-all duration-300 ease-in-out cursor-pointer"
          onClick={handleClick2}
        >
          Create Blog
        </li>
        <li
          className="hover:font-bold transition-all duration-300 ease-in-out cursor-pointer hover:text-red-200"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
