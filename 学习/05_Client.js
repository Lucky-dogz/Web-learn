const axios = require('axios')

function getStudents() {
    axios.get("http://localhost:5005/students").then(
        (response) => {
            console.log("请求成功了", response.data);
        },
        (error) => {
            console.log("请求失败了", error.message);
        }
    );
}

getStudents()