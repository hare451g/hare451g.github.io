import React, { useState } from 'react';
import moment from 'moment';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const CoronaMapComponent = withScriptjs(
  withGoogleMap(props => {
    const [selected, setSelected] = useState(null);

    const handleMarkerClick = location => {
      if (selected && location.OBJECTID === selected.OBJECTID) {
        setSelected(null);
      } else {
        setSelected(location);
      }
    };

    return (
      <>
        <GoogleMap
          defaultZoom={5}
          defaultCenter={{ lat: -0.7893, lng: 113.9213 }}
        >
          {props.data.map(row => (
            <Marker
              position={{ lat: row.attributes.Lat, lng: row.attributes.Long_ }}
              onClick={() => handleMarkerClick(row.attributes)}
            />
          ))}
        </GoogleMap>
        {selected && (
          <div>
            <h4>{selected.Country_Region}</h4>
            <hr />
            <div>
              Confirmed: <strong>{selected.Confirmed}</strong>
            </div>
            <div>
              Active: <strong>{selected.Active}</strong>
            </div>
            <div>
              Recovered: <strong>{selected.Recovered}</strong>
            </div>
            <div>
              Deaths: <strong>{selected.Deaths}</strong>
            </div>
            <div>
              Last Updated:{' '}
              {moment(selected.Last_Update).format('DD-MM-YYYY hh:mm:ss')}
            </div>
          </div>
        )}
      </>
    );
  })
);

export default CoronaMapComponent;
