import makeTable from "./Table"

export function makeTables(curr, handleChange, handleClick, handleLeft, handleRight, timeBias, timeLength, dateBias, dateLength, tableList, dayTexts, monText) {
    // var currDate = startDate; // Object.assign({}, startDate);
    // var tableList = [];
    // var tempList = [];
    // while (currDate.getTime() <= endDate.getTime()) {
    //     if (currDate.getDay() === 1 && tempList.length > 0) {
    //         tableList.push(tempList);
    //         tempList = [currDate];
    //     } else {
    //         tempList.push(currDate);
    //     }
    //     currDate = new Date(currDate.getTime() + (24*60*60*1000))
    // }
    // if (tempList.length > 0) {
    //     tableList.push(tempList);
    // }
    // console.log(tableList)
    return makeTable(
            curr,
            handleChange,
            handleClick,
            handleLeft,
            handleRight,
            timeBias,
            timeLength,
            dayTexts,
            monText
        )

    // return tableList.map(
    //     days => makeTable(
    //         curr,
    //         handleChange,
    //         handleClick,
    //         handleLeft,
    //         handleRight,
    //         timeBias,
    //         timeLength,
    //         days
    //     )
    // )
    if (dateBias + dateLength <= 7) {
        return [makeTable(curr, handleChange, timeBias, timeLength, dateBias, dateBias + dateLength-1)];
    } else {
        var tables = [];
        var i;
        tables.push(makeTable(curr, handleChange, handleClick, handleLeft, handleRight, timeBias, timeLength, dateBias, 7));
        for (i = 0; i < parseInt((dateBias + dateLength - 1) / 7); i++) {
            tables.push(makeTable(curr, handleChange, timeBias, timeLength, 0, (dateBias + dateLength - 1) % 7));
        }
        return tables;
    }
}

export default makeTables;