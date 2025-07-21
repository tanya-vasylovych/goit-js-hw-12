import axios from "axios";

export function getImagesByQuery(query) {
    const params = {
        key: "51362272-d48daa27a05223f6096b84303",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

     return axios.get("https://pixabay.com/api/", { params })
        .then(response =>  response.data)
        .catch(err => {
            console.log(err);
             throw err;
        });
}

