import React from "react";
import ReactDOM from "react-dom";
import axios from "./utils/axios-instance";

class SwapiService {
    getResource = async (url) => {
        const response = await axios(url);
        return response;
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.data.results;
    };

    getPerson = (id) => {
        return this.getResource(`/people/${id}/`);
    };
}

const service = new SwapiService();

service.getAllPeople().then((res) => console.log(res));
service.getPerson(2).then((res) => console.log(res));

ReactDOM.render(
    <React.StrictMode>
        <div>Jello World</div>
    </React.StrictMode>,
    document.getElementById("root")
);
