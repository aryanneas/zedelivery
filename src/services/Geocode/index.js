export const getGeocode = (address) => {
  const apiUrl = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&polygon=1&addressdetails=1`
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data[0])
}
