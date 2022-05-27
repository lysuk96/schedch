import React, { useState } from "react"
import TableDragSelect from "./TableDragSelect"
import "../pages/css/styles.css"
import hours from ".//Hours"

export function makeTable(curr, handleChange, handleClick, handleLeft, handleRight, timeBias, timeLength, startDay, endDay) {
    const startEnd = [startDay, endDay].join("");
    switch (timeLength) {
      case 1:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
        break;

    case 2:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
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
        break;

    case 3:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
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
        break;

    case 4:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
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
        break;

    case 5:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
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
        break;

    case 6:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
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
        break;

    case 7:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
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
        break;

    case 8:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
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
        break;

    case 9:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
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
        break;

    case 10:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
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
        break;

    case 11:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
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
        break;

    case 12:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
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
        break;

    case 13:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
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
        break;

    case 14:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
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
        break;

    case 15:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
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
        break;

    case 16:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
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
        break;

    case 17:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
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
        break;

    case 18:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
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
        break;

    case 19:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
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
        break;

    case 20:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
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
        break;

    case 21:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
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
        break;

    case 22:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
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
        break;

    case 23:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
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
        break;

    case 24:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
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
        break;

    case 25:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
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
        break;

    case 26:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
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
        break;

    case 27:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
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
        break;

    case 28:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
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
        break;

    case 29:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
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
        break;

    case 30:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
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
        break;

    case 31:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
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
        break;

    case 32:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
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
        break;

    case 33:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
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
        break;

    case 34:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
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
        break;

    case 35:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
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
        break;

    case 36:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
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
        break;

    case 37:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
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
        break;

    case 38:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
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
        break;

    case 39:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
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
        break;

    case 40:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
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
        break;

    case 41:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
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
        break;

    case 42:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
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
        break;

    case 43:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
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
        break;

    case 44:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+43].time}</td>
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
        break;

    case 45:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+43].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+44].time}</td>
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
        break;

    case 46:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+43].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+44].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+45].time}</td>
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
        break;

    case 47:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+43].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+44].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+45].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+46].time}</td>
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
        break;

    case 48:
        return (
            <div>
                <TableDragSelect value={curr.cells} onChange={handleChange}>
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
                    <tr>
                      <td disabled>{hours[timeBias+1].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+2].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+3].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+4].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+5].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+6].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+7].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+8].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+9].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+10].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+11].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+12].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+13].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+14].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+15].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+16].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+17].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+18].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+19].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+20].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+21].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+22].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+23].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+24].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+25].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+26].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+27].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+28].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+29].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+30].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+31].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+32].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+33].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+34].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+35].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+36].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+37].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+38].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+39].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+40].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+41].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+42].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+43].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+44].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+45].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+46].time}</td>
                      <td className="mon" />
                      <td className="tue" />
                      <td className="wed" />
                      <td className="thu" />
                      <td className="fri" />
                      <td className="sat" />
                      <td className="sun" />
                    </tr>
                    <tr>
                      <td disabled>{hours[timeBias+47].time}</td>
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
        break;
    }
}

export default makeTable;