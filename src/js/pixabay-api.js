import axios from "axios";

export async function getImagesByQuery(query, page = 1) {
    const params = {
        key: "51362272-d48daa27a05223f6096b84303",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15,
    };
    try {
        const response = await axios.get("https://pixabay.com/api/", { params });
        return response.data;

    } catch (err) {
        console.log(err);
             throw err;
}
}

