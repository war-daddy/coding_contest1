import "./styles.css";
import Header from "./Header.js";
import React, { useEffect, useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <Header />
      {items.map((item) => {
        return (
          <table>
            <tr>
              <th>{item.name}</th>
              <th>{item.site}</th>

              <th style={{ maxWidth: "100px" }}>{item.url}</th>

              <th>{item.start_time}</th>
              <th>{item.end_time}</th>
              <th> {item.duration}</th>
              <th>{item.status}</th>
              <th>{item.in_24_hours}</th>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
