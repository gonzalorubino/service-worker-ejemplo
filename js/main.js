// Escucho si el usuario se desconecta, y ejecuto algo
window.addEventListener("offline", (event) => {
  document.getElementById('offline').classList.remove('d-none');
  document.getElementById("main-container").classList.add('d-none');
});

// Escucho si el usuario tiene conexion
window.addEventListener("online", (event) => {
  document.getElementById("offline").classList.add("d-none");
  document.getElementById("main-container").classList.remove("d-none");
});

// Escucho si el navegador esta online o no, util en los casos que entro sin conexion.
if (!navigator.onLine) {
  //document.getElementById("offline").classList.remove("d-none");
  //document.getElementById("main-container").classList.add("d-none");
  console.log("estoy sin conexion!!");
}

function traerContenido(){
  fetch("https://www.scorebat.com/video-api/v1/")
  .then(function(response){
    console.log(response);

    return response.json();
  }).then(function(responseJson){
    printResultados(responseJson)
  })
  .catch(function(error){
    console.log('Fallo!');
  });
};

function printResultados(data){
  var container = document.getElementById('main-container');
  var i;
  var results = "";
  for(i = 0; i< data.length; i++){
    results += `<p><img src="${data[i].thumbnail}"/><br /><a href="${data[i].url}" target="_blank">${data[i].title}</a></p>`;
  }

  container.innerHTML = results;
};

traerContenido();