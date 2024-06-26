#!/usr/bin/nodejs

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const x = 'The fake API is not working currently';
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error(x));
    }
  });
}

module.exports = getFullResponseFromAPI;
