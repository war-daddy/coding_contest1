import React from "react";

const Header = () => {
  return (
    <>
      <h2 style={{ fontFamily: "fantasy" }}>All Upcoming Coding Contests</h2>
      <table>
        <tr>
          <td>Name</td>
          <td>Site</td>
          <td>Url</td>
          <td>Start_time</td>
          <td>End_time</td>
          <td>Duration</td>
          <td>Status</td>
          <td>In_24_hrs</td>
        </tr>
      </table>
    </>
  );
};
export default Header;
