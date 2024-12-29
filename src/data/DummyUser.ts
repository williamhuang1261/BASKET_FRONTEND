import UserTransportProp from "../interface/UserTransportProp";

const DummyUser: UserTransportProp = {
  meta: {
    name: "Bob12345",
    email: "myEmail@gmail.com",
    location: {
      country: "Canada",
      type: "Point",
      coordinates: [-73.9819773, 40.7308288],
      formattedAddress: "Toronto, ON, Canada",
    },
    preferences: {
      language: "en",
      weightUnits: "kg",
      distUnits: "km",
    },
    items: new Map(),
    filters: {
      searchPreferences: {
        distance: {
          amount: 5,
          units: "km",
        },
        categories: new Set(),
        stores: new Set(),
      },
      basketFilters: {
        filteredStores: new Set(),
        maxStores: Infinity,
      },
    },
    membership: new Set(),
  },
  isLoggedIn: false
};

export default DummyUser;
