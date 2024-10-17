import { useState } from "react";
import "../Events/Events.css";
import img1 from "../../assets/lfh.webp";
import img2 from "../../assets/spider2.webp";
import Contact from "../Contact/Contact";

const eventsData = [
  {
    id: 1,
    title: "Community Cleanup",
    date: "2024-01-15",
    category: "Volunteer",
    location: "Park",
    image: img2,
  },
  {
    id: 1,
    title: "Community Cleanup",
    date: "2024-09-15",
    category: "Volunteer",
    location: "Bulla Lounge",
    image: img2,
  },
  {
    id: 2,
    title: "Art Festival",
    date: "2024-09-20",
    category: "Arts",
    location: "Bulla Lounge",
    image: img1,
  },
  {
    id: 3,
    title: "Food Drive",
    date: "2024-09-18",
    category: "Charity",
    location: "Community Center",
    image: img1,
  },
  // Add more event data as needed
];

const Events = () => {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [month, setMonth] = useState("All");

  const filteredEvents = eventsData.filter((event) => {
    const eventMonth = new Date(event.date).getMonth() + 1;
    return (
      (category === "All" || event.category === category) &&
      (location === "All" || event.location === location) &&
      (month === "All" || eventMonth === parseInt(month))
    );
  });

  return (
    <div className="events-page">
      <h1>
        Upcoming <span>Events</span>
      </h1>
      <div className="filters">
        <div className="cat">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Arts">Arts</option>
            <option value="Charity">Charity</option>
            {/* Add more categories as needed */}
          </select>
        </div>

       <div className="cat">
       <label>Location:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All</option>
          <option value="Park">Park</option>
          <option value="Bulla Lounge">Bulla Lounge</option>
          <option value="Community Center">Community Center</option>
          {/* Add more locations as needed */}
        </select>
       </div>

       <div className="cat">
       <label>Month:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="All">All</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
       </div>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="card-content">
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>Category: {event.category}</p>
              <p>Location: {event.location}</p>
              <a href="#" className="button">
                View more
              </a>
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Events;
