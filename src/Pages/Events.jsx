import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Community Cleanup",
    date: "2024-09-15",
    category: "Volunteer",
    location: "Park",
  },
  {
    id: 2,
    title: "Art Festival",
    date: "2024-09-20",
    category: "Arts",
    location: "Downtown",
  },
  {
    id: 3,
    title: "Food Drive",
    date: "2024-09-18",
    category: "Charity",
    location: "Community Center",
  },
  {
    id: 3,
    title: "Food Drive",
    date: "2024-09-18",
    category: "Charity",
    location: "Community Center",
  },

  // Add more event data as needed
];

const Events = () => {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredEvents = eventsData.filter((event) => {
    return (
      (category === "All" || event.category === category) &&
      (location === "All" || event.location === location)
    );
  });

  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      <div className="filters">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Volunteer">Last Friday Hangouts </option>
          <option value="Arts">Tech and Arts</option>
          <option value="Charity">Charity</option>
          {/* Add more categories as needed */}
        </select>

        <label>Location:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All</option>
          <option value="Park">Park</option>
          <option value="Downtown">Downtown</option>
          <option value="Community Center">Community Center</option>
          {/* Add more locations as needed */}
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Category: {event.category}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
