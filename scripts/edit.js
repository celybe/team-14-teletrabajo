const API_URL = "https://remotegoo.herokuapp.com";

let nameUser = document.getElementById("fname")
let lastnameUser = document.getElementById("lname")
let emailUser = document.getElementById("email")
let projectUser = document.getElementById("project")
let departmentUser = document.getElementById("department")
let roleUser = document.getElementById("role")
let birthUser = document.getElementById("birth")
let passwordUser = document.getElementById("password")
let users = []
let id;

let form = document.getElementById("form")

function getUser() {
    fetch(`${API_URL}/api/user`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            users = data
            nameUser.value = users[0].name
            lastnameUser.value = users[0].lastname
            emailUser.value = users[0].email
            projectUser.value = users[0].project[0].name
            roleUser.value = users[0].role
            departmentUser.value = users[0].department
            birthUser.value = users[0].dateOfBirth
            passwordUser.value = users[0].password
            id = users[0].id
        })
        .catch(err => console.log(err))
}

function saveUser() {
    const element = document.querySelector('#put-request .date-updated');
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch PUT Request Example' })
    };
    fetch('{$API_URL}/api/user/${id}', requestOptions)
        .then(response => response.json())
        .then(data => element.innerHTML = data.updatedAt );
}
