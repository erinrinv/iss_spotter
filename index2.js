// index2.js
//Testing
//const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

const { nextISSTimesForMyLocation } = require('./iss_promised');


//testing
/* fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchCoordsByIP)  
.then(body => console.log(body));
 */

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
