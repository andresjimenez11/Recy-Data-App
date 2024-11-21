import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function LocationComponent({ onLocationRetrieved }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);  // Estado para controlar si ya obtuviste la ubicación

  useEffect(() => {
    if (locationFetched) return;  // Si ya se ha obtenido la ubicación, no hacer nada

    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permiso para acceder a la ubicación fue denegado.");
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setLocationFetched(true);  // Marcar que la ubicación fue obtenida

        if (onLocationRetrieved) {
          onLocationRetrieved(currentLocation);  // Pasar la ubicación al componente padre
        }
      } catch (error) {
        setErrorMsg("Error al obtener la ubicación.");
        console.log(error);
      }
    };

    getLocation();
  }, [locationFetched, onLocationRetrieved]);  // Solo se ejecuta si locationFetched es false

  if (errorMsg) {
    console.log(errorMsg);
  }

  return null; // Este componente no necesita renderizar nada
}
