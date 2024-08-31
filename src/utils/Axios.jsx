import Axios from "axios"; // Correct import

const instance = Axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRkYWZhYjI0YmU0OWEzN2M1ODNlYmEzMTljNDdiNCIsIm5iZiI6MTcyNDg3NzkyNC4wNTA5OCwic3ViIjoiNjZjZjg1OGIyNGY2MGMxNzUxZGQzNTdjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.bZEgb5pcjBaDQDuzFYVbjs3kmegeAvFrnmlNYmv_aOE'
    },
});

export default instance;