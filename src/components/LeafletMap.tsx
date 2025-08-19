import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Add custom styles for marker hover effects
const markerStyles = `
  .custom-marker:hover > div {
    transform: scale(1.1) !important;
    box-shadow: 0 6px 16px rgba(30, 64, 175, 0.4), 0 4px 8px rgba(0,0,0,0.15) !important;
  }
  
  .leaflet-popup-content-wrapper {
    border-radius: 8px !important;
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.15) !important;
  }
  
  .leaflet-popup-tip {
    background: white !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = markerStyles;
  document.head.appendChild(styleElement);
}

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LeafletMapProps {
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

const LeafletMap: React.FC<LeafletMapProps> = ({
  height = '400px',
  zoom = 10,
  center = { lat: -36.5849, lng: 174.6926 }, // Orewa town center, Hibiscus Coast
  markers = [],
  serviceAreas = []
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        if (mapRef.current && !mapInstanceRef.current) {
          // Create the map instance
          const mapInstance = L.map(mapRef.current).setView([center.lat, center.lng], zoom);

          // Add OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
          }).addTo(mapInstance);

          mapInstanceRef.current = mapInstance;

          // Create custom icon for markers with professional blue styling
          const customIcon = L.divIcon({
            html: `
              <div style="
                width: 32px;
                height: 32px;
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border: 2px solid #ffffff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3), 0 2px 4px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
              ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l2 7h7l-5.5 4.5 2 7L12 16l-5.5 4.5 2-7L3 9h7z"/>
                </svg>
              </div>
            `,
            className: 'custom-marker',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
          });

          // Add markers
          markers.forEach(marker => {
            const leafletMarker = L.marker([marker.position.lat, marker.position.lng], {
              icon: customIcon
            }).addTo(mapInstance);

            if (marker.info) {
              const popupContent = `
                <div style="padding: 12px; max-width: 220px; border-radius: 8px;">
                  <h3 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 16px; font-weight: 600; border-bottom: 2px solid #3b82f6; padding-bottom: 4px;">${marker.title}</h3>
                  <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5;">${marker.info}</p>
                </div>
              `;
              leafletMarker.bindPopup(popupContent);
            } else {
              leafletMarker.bindPopup(`
                <div style="padding: 12px; border-radius: 8px;">
                  <h3 style="margin: 0; color: #1e3a8a; font-size: 16px; font-weight: 600; border-bottom: 2px solid #3b82f6; padding-bottom: 4px;">${marker.title}</h3>
                </div>
              `);
            }
          });

          // Add service area circles with professional blue styling
          serviceAreas.forEach(area => {
            L.circle([area.center.lat, area.center.lng], {
              color: '#1e40af',
              fillColor: '#3b82f6',
              fillOpacity: 0.12,
              radius: area.radius,
              weight: 2.5,
              opacity: 0.8,
              dashArray: '5, 5'
            }).addTo(mapInstance);
          });

          setIsLoaded(true);
        }
      } catch (err) {
        console.error('Error loading Leaflet map:', err);
        setError('Failed to load map. Please check your internet connection.');
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center.lat, center.lng, zoom, markers, serviceAreas]);

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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeafletMap;