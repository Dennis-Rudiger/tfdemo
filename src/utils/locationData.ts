export interface LocationData {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
}

// Mock office locations with realistic coordinates
export const officeLocations: LocationData[] = [
  {
    name: 'Nairobi Headquarters',
    address: '123 Business Avenue, Westlands, Nairobi, Kenya',
    coordinates: {
      lat: -1.2730, 
      lng: 36.8143
    },
    phone: '+254 (0) 123 456 789',
    email: 'info@tronraftafrica.com'
  },
  {
    name: 'Mombasa Branch',
    address: '45 Ocean Drive, Nyali, Mombasa, Kenya',
    coordinates: {
      lat: -4.0350, 
      lng: 39.6688
    },
    phone: '+254 (0) 987 654 321',
    email: 'mombasa@tronraftafrica.com'
  },
  {
    name: 'Kisumu Operations',
    address: '78 Lakeside Road, Milimani, Kisumu, Kenya',
    coordinates: {
      lat: -0.0917, 
      lng: 34.7680
    },
    phone: '+254 (0) 765 432 109',
    email: 'kisumu@tronraftafrica.com'
  }
];

// Default main office location for single location displays
export const mainOffice = officeLocations[0];
