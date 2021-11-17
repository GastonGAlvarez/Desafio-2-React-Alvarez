// Creo la clase Products
class Products{
    constructor(nombre,precio,stock,id){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
}

const producto = { nombre: "pepe", precio: 10, stock: 5, id:69};

// Declaro el array de productos
const arrayProducts = [];

// Declaro 20 productos de tipo Object y los agrego al array de productos 
arrayProducts.push(new Products("9 de Oro", 44.99, 20));
arrayProducts.push(new Products("Cachafaz Avena", 98.99, 10));
arrayProducts.push(new Products("Chocolinas", 55.50, 40));
arrayProducts.push(new Products("Cachafaz Cacao", 104.99, 15));
arrayProducts.push(new Products("Don Satur", 37.50, 25));
// ^^ 5 ^^
arrayProducts.push(new Products("Express", 20.00, 50));
arrayProducts.push(new Products("Jorgito", 25.99, 20));
arrayProducts.push(new Products("Lincoln", 35.75, 30));
arrayProducts.push(new Products("Melba", 30.00, 25));
arrayProducts.push(new Products("Merengadas", 27.25, 30));
// ^^ 10 ^^
arrayProducts.push(new Products("Opera", 32.50, 85));
arrayProducts.push(new Products("Oreo", 45.99, 25));
arrayProducts.push(new Products("Palitos Don Satur", 15.50, 50));
arrayProducts.push(new Products("Pepitos", 48.99, 35));
arrayProducts.push(new Products("Pringles Cebolla", 87.99, 40));
// ^^ 15 ^^
arrayProducts.push(new Products("Pringles Queso", 95.99, 50));
arrayProducts.push(new Products("Rumba", 39.99, 40));
arrayProducts.push(new Products("Sonrisas", 30.25, 55));
arrayProducts.push(new Products("Surtido Bagley", 60.00, 45));
arrayProducts.push(new Products("Traviatas", 17.50, 70));
// ^^ 20 ^^


for(let element in arrayProducts){
    arrayProducts[element].id = element;
}

export const getFetch = new Promise((resolve, reject) => {

    const condition = true;
    if(condition){
        setTimeout(() =>{
            resolve(arrayProducts)
        }, 2000)
    }
    else {
        setTimeout(() =>{
            reject("404 Not Found")
        },2000)
    }
})


export const getFetchProduct = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve(producto)
    }, 2000)

})

