import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <div className="home">
      <h2>Welcome to the Community Event Website</h2>
      <p>Discover local events and get involved in your community.</p>
      <Link to="/events" className="btn">View Events</Link>
    </div>
    <Outlet /> 
    </>
  );
}

export default HomePage;