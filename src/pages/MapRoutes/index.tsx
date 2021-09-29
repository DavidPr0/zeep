import React, { useState, useEffect } from 'react';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import { View, Text, Platform } from 'react-native';

import GetGeolocalizations from '../../Utils/getGeolocation';

const MapRoutes: React.FC = () => {
  const { coords, errorMsg } = GetGeolocalizations();
  return (
    <View>
      <Text>{coords.latitude}</Text>
      <Text>{coords.longitude}</Text>
    </View>
  );
};

export default MapRoutes;
