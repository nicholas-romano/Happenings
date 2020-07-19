import React, { useState, useEffect, useRef, Component } from 'react';
import { Link } from 'react-router-dom'

//  EXS just some starter code for getting current GeoLocation

navigator.geolocation.getCurrentPosition(function (position) {
  const myLat = position.coords.longitude;
  const myLong = position.coords.longitude;
  console.log('Latitude is :', position.coords.latitude);
  console.log('Longitude is :', position.coords.longitude);
  console.log(myLat, myLong);
})

function Feed () {
  return (
    <>
      <h1>Check out the neighborhood!</h1>
    </>
  );
  
}

export default Feed