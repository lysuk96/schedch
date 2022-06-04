import React, { useState } from "react"
import TableDragSelect from "./TableDragSelect"
import "../pages/css/styles.css"
import hours from ".//Hours"

export function makeTable(curr, handleChange, handleClick, handleLeft, handleRight, timeBias, timeLength, dayTexts, monText) {
  // var firstDay = days[0].getDay();
  // var monday = new Date(days[0].getTime() - (firstDay - (firstDay == 0 ? -6 : 1)) * (24*60*60*1000) );
  // var week = [
  //   monday,
  //   new Date(monday.getTime() + (24*60*60*1000) * 1),
  //   new Date(monday.getTime() + (24*60*60*1000) * 2),
  //   new Date(monday.getTime() + (24*60*60*1000) * 3),
  //   new Date(monday.getTime() + (24*60*60*1000) * 4),
  //   new Date(monday.getTime() + (24*60*60*1000) * 5),
  //   new Date(monday.getTime() + (24*60*60*1000) * 6),
  // ];
  // var validDays = [ false, false, false, false, false, false, false ];
  // days.forEach (
  //   day => validDays[(day.getDay() + 6) % 7] = true
  // );
  // console.log(dayTexts);
  return (
      <div>
        <TableDragSelect value={curr.cells} onChange={handleChange}>
          <tr>
            <td disabled />
            {
              dayTexts.map(
                text => <td disabled>{text.text}</td>
              )
            }
          </tr>
          <tr>
            <td disabled />
            <td disabled>Mon</td>
            <td disabled>Tue</td>
            <td disabled>Wed</td>
            <td disabled>Thu</td>
            <td disabled>Fri</td>
            <td disabled>Sat</td>
            <td disabled>Sun</td>
          </tr>
          <tr>
            <td disabled>{hours[timeBias+0].time}</td>
            <td className="mon" />
            <td className="tue" />
            <td className="wed" />
            <td className="thu" />
            <td className="fri" />
            <td className="sat" />
            <td className="sun" />
          </tr>
        </TableDragSelect>
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleLeft}>Prev</button>
        <button onClick={handleRight}>Next</button>
      </div>
  );
}

export default makeTable;