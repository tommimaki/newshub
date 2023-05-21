export const getCurrentCoordinates = () =>
    new Promise<GeolocationCoordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
        );
    });
