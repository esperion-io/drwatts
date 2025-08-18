import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  height?: string;
  zoom?: number;
  center?: { lat: number; lng: number };
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
  serviceAreas?: Array<{
    center: { lat: number; lng: number };
    radius: number;
    name: string;
  }>;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  height = '400px',
  zoom = 11,
  center = { lat: -36.8485, lng: 174.7633 }, // Auckland center
  markers = [],
  serviceAreas = []
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
          setError('Google Maps API key not found');
          return;
        }

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        const google = await loader.load();
        
        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9c9c9' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          });

          setMap(mapInstance);

          // Add markers
          markers.forEach(marker => {
            const mapMarker = new google.maps.Marker({
              position: marker.position,
              map: mapInstance,
              title: marker.title,
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12" fill="#16a34a" stroke="#ffffff" stroke-width="2"/>
                    <path d="M16 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#ffffff"/>
                  </svg>
                `),
                scaledSize: new google.maps.Size(32, 32)
              }
            });

            if (marker.info) {
              const infoWindow = new google.maps.InfoWindow({
                content: `
                  <div style="padding: 10px; max-width: 200px;">
                    <h3 style="margin: 0 0 5px 0; color: #16a34a; font-size: 16px;">${marker.title}</h3>
                    <p style="margin: 0; color: #666; font-size: 14px;">${marker.info}</p>
                  </div>
                `
              });

              mapMarker.addListener('click', () => {
                infoWindow.open(mapInstance, mapMarker);
              });
            }
          });

          // Add service area circles
          serviceAreas.forEach(area => {
            new google.maps.Circle({
              strokeColor: '#16a34a',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#16a34a',
              fillOpacity: 0.15,
              map: mapInstance,
              center: area.center,
              radius: area.radius
            });
          });

          setIsLoaded(true);
        }
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map. Please check your internet connection.');
      }
    };

    initMap();
  }, [center, zoom, markers, serviceAreas]);

  if (error) {
    return (
      <div 
        className="bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center p-6">
          <div className="text-gray-500 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Service Areas Map</p>
          <p className="text-sm text-gray-500 mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        style={{ height, width: '100%' }}
        className="rounded-lg overflow-hidden shadow-lg"
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center"
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;