// FUNCIONES PARA CRUD DE LOS PRODUCTOS 
const saveProduct = async (data) => {
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = "/products";
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}

const editProduct = async (data) => {
    const {id, ...dataUpdate} = data;
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = `/products/${id}`;
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const config = {
        method: "PUT", // Actualizar 
        headers: header,
        body: JSON.stringify(dataUpdate)
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}

const removeProduct = async (data) => {
    const {id} = data;
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = `/products/${id}`;
    const config = {
        method: "DELETE", // Actualizar 
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}

const findProducts = async () => {
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = "/products";
    const config = {
        method: "GET", // Obtener todos los productos
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}
// CRUD DE LOS USUARIOS, con servidor de MOCKAPI
const saveUser = async (data) => {
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = "/users";
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}

const editUser = async (data) => {
    const {id, ...dataUpdate} = data;
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = `/users/${id}`;
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const config = {
        method: "PUT", // Actualizar 
        headers: header,
        body: JSON.stringify(dataUpdate)
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}

const removeUser = async (data) => {
    const {id} = data;
    const url = new URL("https://67e686846530dbd311105602.mockapi.io");
    url.pathname = `/users/${id}`;
    const config = {
        method: "DELETE", // Actualizar 
    }
    const response = await fetch(url.toString(), config)
    const result = await response.json()
    return result;
}









// MENU PARA CRUD DE LOS USUARIOS  
// while(confirm("¿Quieres registrar un usuario?")){
//     const data = {
//         name: prompt("Ingrese el nombre del usuario", "David"),
//         last: prompt("Ingrese el apellido del usuario", "Gamboa")
//     }
//     saveUser(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

// while(confirm("¿Quieres actualizar un usuario?")){
//     const data = {}
//     data.id= (prompt("Ingrese el ID del producto a actualizar","Mami-09" ))
//     data.name = (confirm("¿Desea cambiar el nombre del usuario?")) ? prompt("Ingrese el nuevo nombre") : undefined
//     data.last = (confirm("Desea cambiar el apellido del usuario?")) ? prompt("Ingrese el nuevo apellido") : undefined
//     editUser(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

// while(confirm("¿Quieres eliminar un usuario?")){
//     const data = {}
//     data.id= (prompt("Ingrese el ID del usuario a eliminar","Mami-09" ))
//     removeUser(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

// while(confirm("¿Quieres obtener todos los usuarios?")){
//     findUsers()
//     .then(result => console.table((result)))
//     .catch(error => alert(error))
//     break
// }



// MENU PARA CRUD DE LOS PRODUCTOS ///////////////////////////////////////
// while(confirm("¿Quieres guardar un producto?")){
//     const data = {
//         name: prompt("Ingrese el nombre", "Mac Mini"),
//         price: Number(prompt("Ingrese el precio", 600)),
//         category: prompt("Ingrese la categoría", "Technology")
//     }
//     saveProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

// while(confirm("¿Quieres actualizar un producto?")){
//     const data = {}
//     data.id= (prompt("Ingrese el ID del producto a actualizar","Mami-09" ))
//     data.name = (confirm("¿Desea cambiar el nombre del producto?")) ? prompt("Ingrese el nuevo nombre") : undefined
//     data.price = (confirm("¿Desea cambiar el precio del producto?")) ? Number(prompt("Ingrese el nuevo precio")) : undefined
//     data.category = (confirm("¿Desea cambiar la categoría del producto?")) ? prompt("Ingrese la nueva categoría") : undefined
//     editProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }


// while(confirm("¿Quieres eliminar un producto?")){
//     const data = {}
//     data.id= (prompt("Ingrese el ID del producto a eliminar","Mami-09" ))
//     removeProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

// while(confirm("¿Quieres obtener todos los productos?")){
//     findProducts()
//     .then(result => console.table((result)))
//     .catch(error => alert(error))
//     break
// }
///////////////////////////////////////////////////////

