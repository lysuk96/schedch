import makeTable from "./Table"

export function makeTables(curr, handleChange, handleClick, handleLeft, handleRight, timeBias, timeLength, dateBias, dateLength) {
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