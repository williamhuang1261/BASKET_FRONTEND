import UserTransportProp from "../interface/UserTransportProp";

const UserEx: UserTransportProp = {
  meta: {
    name: "Bob12345",
    email: "myEmail@gmail.com",
    location: {
      type: "Point",
      coordinates: [-73.9819773, 40.7308288],
      formattedAddress: "414 E 14th St, New York, NY 10009, USA",
    },
    preferences: {
      language: "en",
      weightUnits: "kg",
      distUnits: "km",
    },
    items: [
      {
        id: "66f3853cbe017003c58fced5",
        ref: {
          code: "12345",
          standard: "PLU",
        },
        select: {
          method: "weight",
          units: "kg",
          quantity: 1,
        },
      },
    ],
    filters: {
      searchFilters: {
        distance: {
          amount: 1,
          units: "km",
        },
        categories: [],
        stores: [],
      },
      basketFilters: {
        filteredStores: [],
        maxStores: Infinity,
      },
    },
    membership: ["Provigo"],
  },
};

export default UserEx;
