module.exports = {
  client: {
    includes: ["screens/*.{ts,tsx,js,jsx,graphql}"],
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "expotstemplate",
      url: "http://localhost:8000/graphql/",
    },
  },
};
