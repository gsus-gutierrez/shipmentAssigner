const { findBestAssignment } = require('../src/shipmentAssigner');
const { determineSuitabilityScore } = require('../src/determineSuitabilityScore')

describe('calculateSuitabilityScore', () => {
    test('Returns correct score for sample inputs', () => {
        const streetName = 'Oakland Ave';
        const driverName = 'Sarah Smith';
        const expectedScore = 6.75;
        expect(determineSuitabilityScore(streetName, driverName)).toBe(expectedScore);
    });

    test('Returns 0 score when no vowels present in street name', () => {
        const streetName = 'xyz';
        const driverName = 'John Doe';
        const expectedScore = 4;
        expect(determineSuitabilityScore(streetName, driverName)).toBe(expectedScore);
    });

    test('Returns 0 score when street name and driver name are empty', () => {
        const streetName = '';
        const driverName = '';
        const expectedScore = 0;
        expect(determineSuitabilityScore(streetName, driverName)).toBe(expectedScore);
    });

    test('Returns correct score when street name and driver name contain mixed case vowels', () => {
        const streetName = 'oAkLaNd AvE';
        const driverName = 'SaRaH SmItH';
        const expectedScore = 6.75;
        expect(determineSuitabilityScore(streetName, driverName)).toBe(expectedScore);
    });

    describe('findBestAssignment', () => {
        test('returns correct assignments for a sorted SS list', () => {
            const sortedSSList = [
                { shipmentIndex: 0, driverIndex: 1, score: 10.5 },
                { shipmentIndex: 2, driverIndex: 2, score: 11.25 },
                { shipmentIndex: 1, driverIndex: 0, score: 7.5 },
                { shipmentIndex: 0, driverIndex: 0, score: 7 },
                { shipmentIndex: 1, driverIndex: 1, score: 6 },
                { shipmentIndex: 2, driverIndex: 1, score: 4.5 },
            ];

            const expectedAssignments = [
                { shipmentIndex: 0, driverIndex: 1, score: 10.5 },
                { shipmentIndex: 2, driverIndex: 2, score: 11.25 },
                { shipmentIndex: 1, driverIndex: 0, score: 7.5 },
            ];

            const result = findBestAssignment(sortedSSList);
            expect(result).toEqual(expectedAssignments);
        });
    });
});
