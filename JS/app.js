const btnRes = document.getElementById('btnBuscar').addEventListener('click', function(){
    cargarAjax();
});

const btnLimpiar = document.getElementById('btnLimpiar').addEventListener('click', function(){
    Limpiar();
});

function cargarAjax(){
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
    .get(url)
    .then((res) =>{
        mostrar(res.data);
    }).catch((err) =>{
        console.log("Ocurrió un error" + err);
    })

    function mostrar(data){
        const inputBuscar = document.getElementById('inputBuscar').value;

        for(item of data){
            if(inputBuscar == item.id){
                document.getElementById('inputBuscar').value = "";

            document.getElementById('inputBuscar').value = item.id;
            document.getElementById('Nombre').value = item.name;
            document.getElementById('NombreUsuario').value = item.username;
            document.getElementById('Email').value = item.email;
            document.getElementById('Calle').value = item.address.street;
            document.getElementById('Numero').value = item.address.suite;
            document.getElementById('Ciudad').value = item.address.city;
            return;
            }
        }
    }
}

function Limpiar(){
    location.reload()
}