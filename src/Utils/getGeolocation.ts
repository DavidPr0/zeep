import React, { useState, useEffect } from 'react';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import { Platform } from 'react-native';

interface coordsData {
  latitude: number;
  longitude: number;
}

export default function GetGeolocalizations() {
  const [errorMsg, setErrorMsg] = useState('');
  const [coords, setCoords] = useState<coordsData>({} as coordsData);
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);

  const getLocation = async () => {
    const auth = await Geolocation.requestAuthorization("whenInUse");
    
    if(auth === "granted") {
      Geolocation.getCurrentPosition(
        (position) => {
          // const currentLatitude = JSON.stringify(position.coords.latitude);
          // const currentLongitude = JSON.stringify(position.coords.longitude);
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          // setCurrentLatitude(currentLatitude);
          // setCurrentLongitude(currentLongitude);
        },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000,
        }
      );
    } else {
      setErrorMsg('Não foii possível obter a localização.');
    }
  }
  useEffect( () => {
    if(Platform.OS === 'ios') {
        getLocation();
    } else {
      (async function loadPosition() {
        const result = requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
        ]).then(statuses => {
          const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
          const statusBack =
            statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION];

        if (Platform.Version < 29) {
          if (statusFine == 'granted') {
            return true;
          } else {
            setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
          }
        }
        if (statusFine == 'granted' && statusBack == 'granted') {
          return true;
        } else {
          setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
        }
      });
      if (await result) {
        await Geolocation.getCurrentPosition(
          ({ coords }) => {
            setCoords({
              latitude: coords.latitude,
              longitude: coords.longitude,
            });
          },
          error => {
            setErrorMsg('Não foi possível obter a localização.');
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            showLocationDialog: true,
          },
        );
      }
    })();
    }
  }, []);
  return { coords, errorMsg, currentLongitude, currentLatitude};
}
