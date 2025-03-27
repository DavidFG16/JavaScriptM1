const saveProduct = async (data) => {
    const config = {
        method: "POST",
        body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:5600/products', config)
    const result = await response.json()
    return result;
}

const editProduct = async (data) => {
    const {id, ...dataUpdate} = data;
    const config = {
        method: "PATCH", // Actualizar 
        body: JSON.stringify(dataUpdate)
    }
    const response = await fetch(`http://localhost:5600/products/${id}`, config)
    const result = await response.json()
    return result;
}

const removeProduct = async (data) => {
    const {id} = data;
    const config = {
        method: "DELETE", // Actualizar 
    }
    const response = await fetch(`http://localhost:5600/products/${id}`, config)
    const result = await response.json()
    return result;
}

const findProducts = async (data) => {
    const config = {
        method: "GET", // Obtener todos los productos
    }
    const response = await fetch(`http://localhost:5600/products`, config)
    const result = await response.json()
    return result;
}


// while(confirm("¿Quieres guardar un producto?")){
//     const data = {
//         id: prompt("Ingrese el ID","Mami-09" ),
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
//     data.id= Number(prompt("Ingrese el ID del producto a actualizar","Mami-09" ))
//     data.name = (confirm("¿Desea cambiar el nombre del producto?")) ? prompt("Ingrese el nuevo nombre") : undefined
//     data.price = (confirm("¿Desea cambiar el precio del producto?")) ? Number(prompt("Ingrese el nuevo precio")) : undefined
//     data.category = (confirm("¿Desea cambiar la categoría del producto?")) ? prompt("Ingrese la nueva categoría") : undefined
//     editProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }


// while(confirm("¿Quieres eliminar un producto?")){
//     const data = {}
//     data.id= Number(prompt("Ingrese el ID del producto a eliminar","Mami-09" ))
//     removeProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

while(confirm("¿Quieres obtener todos los productos?")){
    findProducts()
    .then(result => console.table((result)))
    .catch(error => alert(error))
    break
}