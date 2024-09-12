import React, { useEffect, useState } from 'react'

const StaticMap = ({apiKey, location, zoom =14, size = "600x300", mapType = 'roadmap'}) => {
  const [mapUrl, setMapUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchMap = async () => {
      try {
        const src = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=${zoom}&size=${size}&maptype=${mapType}&key=${apiKey}`;
  
        const response = await fetch(src);
        if(!response.ok) {
          throw new Error('Failed to fetch map');
        }
  
        const blob = await response.blob();
        const imageUrl = URL.createObjectUrl(blob);
        setMapUrl(imageUrl);
  
      } catch (err) {
        console.err('Error fetching static map:', err);
        setError(err.message);
  
      } finally {
        setLoading(false);
      }
    };
  
    fetchMap()

  }, [apiKey, location, zoom, size, mapType]);
  
  return (
    <div>
      {loading &&<p>Loading Map...</p>}
      {error && <p>Error: {error}</p>}
      {mapUrl && !loading && !error && <img src={mapUrl} alt="Google Maps Static" />}
    </div>
  );
};

export default StaticMap;
