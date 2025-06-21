import { MapboxType } from "@/types";


const transformCoffeeStore = (result: MapboxType) => {
  return {
    id: result.properties.mapbox_id,
    address: result.properties?.full_address || "",
    name: result.properties?.name || "",
    imgUrl:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMiA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  };
};

export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/forward?q=coffee&access_token=${process.env.MAPBOX_API}`
    );

    const data = await response.json();
    return data.features.map((result: MapboxType) =>
      transformCoffeeStore(result)
    );
  } catch (error) {
    console.error("Error fetching coffee stores:", error);
  }
};
