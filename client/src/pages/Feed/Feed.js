import React, { useState, useEffect, useRef, Component } from 'react'
import { Link } from 'react-router-dom'

navigator.geolocation.getCurrentPosition(function (position) {
  console.log('Latitude is :', position.coords.latitude)
  console.log('Longitude is :', position.coords.longitude)
})

function Feed () {
  return <h1>Check out the neighborhood!</h1>
}

export default Feed
