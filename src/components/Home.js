import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <section className="bg-gray-900 h-screen">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-white">
        Home
      </h1>
      <br />
      <p className="flex items-center mb-6 text-2xl font-semibold text-white">
        You are logged in!
      </p>
      <br />
      <div className="text-white underline px-10">
        <Link to="/editor">Go to the Editor page</Link>
        <br />
        <Link to="/admin">Go to the Admin page</Link>
        <br />
        <Link to="/lounge">Go to the Lounge</Link>
        <br />
        <Link to="/linkpage">Go to the link page</Link>
      </div>
      <br />

      <button onClick={signOut} className="bg-blue-600 p-2 rounded-lg ml-2">
        Sign Out
      </button>
    </section>
  );
};

export default Home;
