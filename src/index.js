const fs = require('fs');
const { generateAndSortSSList, findBestAssignment } = require('./shipmentAssigner')

const readInputFiles = (streetAddressesFilePath, driverNamesFilePath) => {
    const streetAddresses = fs.readFileSync(streetAddressesFilePath, 'utf8').trim().split('\n');
    const driverNames = fs.readFileSync(driverNamesFilePath, 'utf8').trim().split('\n');
    return { streetAddresses, driverNames };
};
const main = () => {
    //Read file from CLI
    const args = process.argv.slice(2);
    if (args.length !== 2) {
        console.error('Usage: node main.js <street_addresses_file> <driver_names_file>');
        process.exit(1);
    }

    const streetAddressesFilePath = args[0];
    const driverNamesFilePath = args[1];

    const { streetAddresses, driverNames } = readInputFiles(streetAddressesFilePath, driverNamesFilePath);

    //Generate initial sorted list
    const ssList = generateAndSortSSList(streetAddresses, driverNames);
    // Find the best assignment and calculate the total SS
    const bestAssignment = findBestAssignment(ssList);
    const totalSS = bestAssignment.reduce((acc, assignment) => acc + assignment.score, 0);

    console.log('Total Suitability Score:', totalSS);
    console.log('Best Assignment:');
    bestAssignment.forEach(({ shipmentIndex, driverIndex }) => {
        console.log(`${streetAddresses[shipmentIndex]}: ${driverNames[driverIndex]}`);
    });
};

main()