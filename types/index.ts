export type CoffeeStoreType = {
  id: string;
  name: string;
  address: string;
  imgUrl: string;
}

export type MapboxType = {
  properties: {
    mapbox_id: string;
    full_address: string;
    name: string;
  };
};