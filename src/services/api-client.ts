import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '309adc882f684f53b2dbebc2613b0e93',
    },
});