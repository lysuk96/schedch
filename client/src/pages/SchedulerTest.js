import React, { useState } from "react"
import { RoomCardWrapper, CardBody } from "../components/Card"
import TableDragSelect from "../components/TableDragSelect"
import "./css/styles.css"
import hours from "../components/Hours"
import makeTables from "../components/TableList"


let toggle = [false, false, false, false, false, false, false];
function SchedulerTest() {

  // Dummy arguments
  const startDate = new Date('August 01, 2022');
  const endDate = new Date('August 15, 2022');
  const startTime = 12;
  const endTime = 16;

  // mon: 0, tue: 1, ...
  const startDay = (startDate.getDay() + 6) % 7;
  const endDay = (endDate.getDay() + 6) % 7;
  const dateDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)

  var initCells = [];
  var temp;
  for (temp = 0; temp < (endTime - startTime + 1) * 2; temp++) {
    initCells.push([false, false, false, false, false, false, false])
  }


  const [curr, changeCurr] = useState({
    cells: initCells  });

  var tableState = [];
  for (temp = 0; temp < parseInt((startDay + dateDiff - 1) / 7+1); temp++) {
    tableState.push([...initCells]);
  }

  const [currTot, changeCurrTot] = useState({ cellsTot: tableState});
  const [currIdx, changeCurrIdx] = useState({ index: 0});

  function handleChange(cells) {
    changeCurr({ cells });
    // console.log(cells);
  }

  const handleClick = () => {
    // changeCurr({ cells });
    console.log(currTot.cellsTot);
  };

  const handleLeft = () => {
    if (currIdx.index > 0) {
      console.log(currTot.cellsTot);
      var temp = [...currTot.cellsTot];
      temp[currIdx.index] = [...curr.cells];
      changeCurrTot({cellsTot: temp});
      changeCurr({ cells: [...temp[currIdx.index-1]] });
      changeCurrIdx({index: currIdx.index - 1})
    }
  }

  const handleRight = () => {
    if (currIdx.index < tableState.length - 1) {
      console.log(currTot.cellsTot);
      var temp = [...currTot.cellsTot]
      temp[currIdx.index] = [...curr.cells];
      changeCurrTot({cellsTot: temp});
      changeCurr({ cells: [...temp[currIdx.index+1]] });
      changeCurrIdx({index: currIdx.index + 1})
    }
  }

  return makeTables(curr, handleChange, handleClick, handleLeft, handleRight, startTime * 2, (endTime-startTime)*2, startDay, dateDiff);
}

export default SchedulerTest