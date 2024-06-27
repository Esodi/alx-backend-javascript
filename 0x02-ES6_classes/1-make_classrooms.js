#!/usr/bin/nodejs

import ClassRoom from './0-classroom';

function initializeRooms() {
  const obj = new ClassRoom(19);
  const obj1 = new ClassRoom(20);
  const obj2 = new ClassRoom(34);

  return [obj, obj1, obj2];
}

module.exports = initializeRooms;
