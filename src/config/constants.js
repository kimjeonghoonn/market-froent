export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server.herokuapp.com"
    : "http://43.201.28.227:8088";
