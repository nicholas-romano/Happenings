// src/DisplayMapFC.js

import * as React from "react";

const DisplayMap = () => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    function addMarkerToGroup(group, coordinate, html) {
      var marker = new H.map.Marker(coordinate);
      // add custom data to the marker
      marker.setData(html);
      group.addObject(marker);
    }

    function addInfoBubble(map) {
      var group = new H.map.Group();

      map.addObject(group);

      // add 'tap' event listener, that opens info bubble, to the group
      group.addEventListener(
        "tap",
        function (evt) {
          // event target is the marker itself, group is a parent event target
          // for all objects that it contains
          var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            // read custom data
            content: evt.target.getData(),
          });
          // show info bubble
          ui.addBubble(bubble);
        },
        false
      );

      addMarkerToGroup(
        group,
        { lat: 53.439, lng: -2.221 },
        '<div><a href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
          "</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>"
      );

      addMarkerToGroup(
        group,
        { lat: 53.43, lng: -2.961 },
        '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
          "</div><div >Anfield<br>Capacity: 45,362</div>"
      );
    }

    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "Vrz_Zo333ZzQ8yPEsFpn-feF4D3azhUmjudkwHCtEC0",
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    addInfoBubble(hMap);
    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    // return () => {
    //   hMap.dispose();
    // };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export default DisplayMap;
