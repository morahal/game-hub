import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "edc715e198924026a47540bb78a6e171",
  },
});
