import React, { useEffect, useRef } from 'react';

// Declare the google types for TypeScript
declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}

interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string }>;
  markerPosition?: { lat: number; lng: number; title?: string }; // Add support for single marker
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  center = { lat: -1.2921, lng: 36.8219 }, // Default to Nairobi
  zoom = 12,
  markers = [],
  markerPosition, // Add this prop
  height = '400px'
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  // Convert single markerPosition to markers array if provided
  const allMarkers = markerPosition 
    ? [...markers, markerPosition]
    : markers;

  useEffect(() => {
    // Only load the script once
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Define the callback function
      window.initMap = () => {
        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center,
            zoom,
          });
          mapInstanceRef.current = map;

          // Add markers
          allMarkers.forEach(marker => {
            new google.maps.Marker({
              position: { lat: marker.lat, lng: marker.lng },
              map,
              title: marker.title,
            });
          });
        }
      };

      document.head.appendChild(script);
    } else if (mapRef.current && !mapInstanceRef.current) {
      // Google Maps API is already loaded, initialize the map directly
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
      mapInstanceRef.current = map;

      // Add markers
      allMarkers.forEach(marker => {
        new google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map,
          title: marker.title,
        });
      });
    }

    // Cleanup
    return () => {
      window.initMap = () => { };
    };
  }, [apiKey, center, zoom, allMarkers]);

  return <div ref={mapRef} style={{ height, width: '100%' }} className="map-container" />;
};

export default GoogleMap;
