import qs from "qs";

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
    }
}
