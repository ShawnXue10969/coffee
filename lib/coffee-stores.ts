export const fetchCoffeeStores = async () => {
  const response = await fetch(
    `https://api.mapbox.com/search/searchbox/v1/forward?q=coffee&access_token=${process.env.MAPBOX_API}`
  );

  return await response.json();
};
