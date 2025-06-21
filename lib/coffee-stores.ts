export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/forward?q=coffee&access_token=${process.env.MAPBOX_API}`
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching coffee stores:", error);
  }
};
