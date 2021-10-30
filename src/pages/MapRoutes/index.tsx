import React, { useState, useEffect } from 'react';

import { View, Text, Platform } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import GetGeolocalizations from '../../Utils/getGeolocation';
import { Container, ViewFooter } from './styles';

const MapRoutes: React.FC = () => {
  const { coords, errorMsg, currentLatitude, currentLongitude } = GetGeolocalizations();
  return (
    <Container>
      <MapView
        // loadingEnabled={true}
          provider="google"
          style={{flex:1}}
          initialRegion={{
          latitude: -10.8958044,
          longitude: -37.1009032,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
      <ViewFooter>
        
      </ViewFooter>
      {/* <Text>Latitudes: {coords.latitude}</Text>
      <Text>Longitude: {coords.longitude}</Text> */}
      <Text>{errorMsg}</Text>
    </Container>
  );
};

export default MapRoutes;
