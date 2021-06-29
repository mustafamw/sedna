import axios from "axios";

export const httpRequest = async (method, endpoint) => {
    try {
        const apiUri = process.env.REACT_APP_API;
        const data = await axios[method](`${apiUri}/${endpoint}`);
        return data.data;
    } catch (error) {
        console.error(error);
        throw Error;
    }
}