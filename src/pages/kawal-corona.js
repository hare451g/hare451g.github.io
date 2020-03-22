import React, { useEffect, useState } from 'react';
import { get } from 'axios';

import HomeLayout from '../layouts/HomeLayout';
import CoronaMapComponent from '../containers/CoronaMapComponent';
import CoronaGraphComponent from '../containers/CoronaGraphComponent';

function KawalCorona() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    setLoading(true);
    const response = await get('https://api.kawalcorona.com/');

    if (response.data) {
      setData(response.data);
    } else {
      setError(response.error || 'Terjadi kesalahan');
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <HomeLayout>
      <h4>🚨 Sebaran COVID-19, seluruh dunia:</h4>
      <CoronaMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div style={{ maxWidth: `620px`, height: '500px' }} />
        }
        mapElement={<div style={{ height: `300px` }} />}
        data={data}
      />

      <CoronaGraphComponent data={data} isLoading={isLoading} />
    </HomeLayout>
  );
}

export default KawalCorona;
