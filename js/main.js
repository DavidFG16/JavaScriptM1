const users = {
    url: "https://67e686846530dbd311105602.mockapi.io",
    endpoint: "/users",
  
    async save() {
      const url = new URL(this.url);
      url.pathname += this.endpoint;
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const config = {
        method: "POST", // Guardar todos los usuarios
        headers: headers,
        body: JSON.stringify({
          name: this.name,
          last: this.last
        })
      };
  
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      return result;
    },
  
    async search() {
      const url = new URL(this.url);
      url.pathname += `${this.endpoint}/${this.id}`;
      const config = {
        method: "GET"
      };
  
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      return result;
    },
  
    async edit() {
      const url = new URL(this.url);
      url.pathname += `${this.endpoint}/${this.id}`;
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const config = {
        method: "PUT", // Actualizar el usuario completo (puedes usar PATCH para actualización parcial)
        headers: headers,
        body: JSON.stringify({
          name: this.name,
          last: this.last
        })
      };
  
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      return result;
    },
  
    async remove() {
      const url = new URL(this.url);
      url.pathname += `${this.endpoint}/${this.id}`;
      const config = {
        method: "DELETE" // Eliminar el usuario
      };
  
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      return result;
    },
  
    async find() {
      const url = new URL(this.url);
      url.pathname += this.endpoint;
      const config = {
        method: "GET" // Obtener todos los usuarios
      };
  
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      return result;
    }
  };

const { url, endpoint, save, edit, remove, find, search } = users;
const usersEdit = {
  url,
  endpoint,
  edit,
  id: Number(prompt("Ingrese el id del usuario a editar", 3)),
  name: prompt("Ingrese el nuevo nombre del usuario", "Adrian"),
  last: prompt("Ingrese el nuevo apellido del usuario", "Ruiz")
};

const usersFind = {
  url,
  endpoint,
  find
};

const usersSearch = {
  url,
  endpoint,
  search,
  id: Number(prompt("Ingrese el id del usuario a buscar", 3))
};

const usersSave = {
  url,
  endpoint,
  save,
  name: prompt("Ingrese el nombre del usuario", "Adrian"),
  last: prompt("Ingrese el apellido del usuario", "Ruiz")
};

const usersRemove = {
  url,
  endpoint,
  remove,
  id: Number(prompt("Ingrese el id del usuario a eliminar", 3))
};






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

