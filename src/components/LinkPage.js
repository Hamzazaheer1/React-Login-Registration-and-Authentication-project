import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section className="bg-gray-900 h-screen ">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-white">
        Links
      </h1>
      <br />
      <h2 className="flex items-center mb-6 text-2xl font-semibold text-white">
        Public
      </h2>
      <div className="text-white underline px-10">
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
      </div>
      <br />
      <h2 className="flex items-center mb-6 text-2xl font-semibold text-white">
        Private
      </h2>
      <div className="text-white underline px-10">
        <Link to="/">Home</Link>
        <br />
        <Link to="/editor">Editors Page</Link>
        <br />
        <Link to="/admin">Admin Page</Link>
        <br />
      </div>
    </section>
  );
};

export default LinkPage;
