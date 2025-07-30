import React from "react";
import "./App.css";

function App() {
  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://www.dbsindia.com/wp-content/uploads/2019/04/DBS-office.jpg"
    },
    {
      Name: "WeWork",
      Rent: 70000,
      Address: "Mumbai",
      Image: "https://www.coworkingers.com/wp-content/uploads/2022/03/WeWork-Vikhroli.jpg"
    },
    {
      Name: "Regus",
      Rent: 60000,
      Address: "Bangalore",
      Image: "https://www.regus.com/work-us/wp-content/uploads/2021/04/open-office-space.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space, at Affordable Range</h1>

      {offices.map((item, index) => {
        const rentColor = item.Rent < 60000 ? "red" : "green";
        return (
          <div key={index} style={{ marginBottom: "30px" }}>
            <img
              src={item.Image}
              alt="Office Space"
              style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h2>Name: {item.Name}</h2>
            <h3 style={{ color: rentColor }}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;


