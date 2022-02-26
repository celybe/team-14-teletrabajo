function log() {
    var element = document.getElementById("log");
    console.log(element);
    element.classList.toggle("showed"); 
    element.classList.toggle("hidden");
}

async function fetchApi(e) {
    e.preventDefault();
    console.log('dentro');
    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    await fetch(`https://fakestoreapi.com/products`,
    {
        method:"GET",
        mode:"no-cors",
        referrer:"no-referrer"
    })
    .then((resp => resp.json()))
    .then(function (data) {
        console.log(data.results);
        testData(data.results, password);
    })
    .catch(function (err) {
        alert("Email or password incorrect");
        console.log(err);
    })
  }
function testData(data, password) {
    
    if (data.password === password) {
        window.location.href = "./welcome.html";    
    }
    else{
        alert("Email or password incorrect");
    }
}
  
