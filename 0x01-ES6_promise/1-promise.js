#!/usr/bin/nodejs

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const obj = { status: 200, body: 'Success' };
    const x = 'The fake API is not working currently';
    if (success) {
      resolve(obj);
    } else {
      reject(new Error(x));
    }
  });
}

module.exports = getFullResponseFromAPI;
