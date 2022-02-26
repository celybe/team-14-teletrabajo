const API_URL = "https://remotegoo.herokuapp.com";

function get() {

    fetch('${API_URL}/api/user')
    .then(response => response.json())
    .then(json => console.log(json))
    return response
}