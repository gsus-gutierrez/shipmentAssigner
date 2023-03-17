# Shipment Assigner

Shipment Assigner is a command line application that assigns shipment destinations to drivers, maximizing the total Suitability Score (SS) over the set of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js (version 12 or newer)
* You have a code editor, such as Visual Studio Code or Sublime Text

## Setup

To install the necessary dependencies, follow these steps:

1. Clone the repository:

2. Change to the project directory:
-cd shipment-assigner
3. Install the dependencies(which, in reality, are not needed other than core NodeJS, the dependencies are only there to run the tests):
-npm install
## Running the Application

To run the application, use the following command:
-node main.js <street_addresses_file> <driver_names_file>
Replace `<street_addresses_file>` and `<driver_names_file>` with the paths to the input files containing street addresses and driver names, respectively.

The application will output the total SS and the matching between shipment destinations and drivers.

## Running Tests

To run the Jest tests, use the following command:
-npm test


## Assumptions

The following assumptions were made during the development of this application:

1. The algorithm does not take into account numbers or special characters in street names or driver names. It only considers alphabetic characters. This also makes it so that street name lengths and driver name lengths are calculated without spaces or numbers.
2. This algorithm does not always guarantee the best possible SS, as it employs a tiebreaker strategy to resolve SS ties, which simplifies the problem at the cost of potentially missing the optimal solution. This decision was made to avoid a recursive approach, which would lead to significant performance issues for larger datasets.
3. The time complexity of the current solution is O(n^2 * log n), where n is the number of drivers (or shipments). This complexity is mainly due to the generation and sorting of the SS list.