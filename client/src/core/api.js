import axios from "axios";

export const createApiClient = () => {
  return {
    getPixabayHits: (category="sports", search) => {
      return axios
        .get(
          `http://localhost:8000/api/pixabay/category/${
            category ? category : ""
          }${search ? "?" + new URLSearchParams(search) : ""}`
        )
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
  };
};
