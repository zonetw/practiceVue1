import qs from "qs";
import axios from "axios";

const CLIENT_ID = "c7ba4200a3e8056";
const ROOT_URL = "https://api.imgur.com";

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: "token",
        }

        const url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
        window.location = url;
    },
    fetchImage(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append("image", image);
            return axios.post(`${ROOT_URL}/3/image/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });

        return Promise.all(promises);
    }
}
// Client secret:
// a6d9ab8adb360c150e937101755933b6d7ed2a2
