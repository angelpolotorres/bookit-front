import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};
