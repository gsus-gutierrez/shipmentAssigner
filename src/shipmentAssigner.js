const { determineSuitabilityScore } = require("./determineSuitabilityScore");


//Find best assignment, assuming the list is sorted by SS, and tiebreaker is basically who is at the top of the list
function findBestAssignment(sortedSSList) {
    const assignments = [];
    const assignedDrivers = new Set();
    const assignedShipments = new Set();

    for (const ssItem of sortedSSList) {
        const { shipmentIndex, driverIndex, score } = ssItem;
        if (!assignedDrivers.has(driverIndex) && !assignedShipments.has(shipmentIndex)) {
            assignments.push({ shipmentIndex, driverIndex, score });
            assignedDrivers.add(driverIndex);
            assignedShipments.add(shipmentIndex);
        }
    }

    return assignments;
}

// Generate and sort the SS list
const generateAndSortSSList = (streetAddresses, driverNames) => {
    const ssList = [];
    for (let i = 0; i < streetAddresses.length; i++) {
        for (let j = 0; j < driverNames.length; j++) {
            const score = determineSuitabilityScore(streetAddresses[i], driverNames[j]);
            ssList.push({ shipmentIndex: i, driverIndex: j, score });
        }
    }
    ssList.sort((a, b) => b.score - a.score);
    return ssList;
}


module.exports = { findBestAssignment, generateAndSortSSList }

