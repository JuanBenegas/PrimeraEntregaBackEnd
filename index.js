class Product{
  constructor(tittle, description, price, thumbnail, code, stock) {
    this.tittle = tittle
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
  }
}

class ProductManager {
  addProduct(objeto) {
    let cantidadProductos = products.push(objeto)
    return `La cantidad de productos es ${cantidadProductos}`
  }

  getProduct(id) {
    let product = products.find(id === products.id);
    return product
  }
}

const manager = new ProductManager();

console.log(manager.getProduct(0));


// const asd = [{ name: 'JOSE', age: 21 }];

// function addProdutc() {
//   let cuantosHay = asd.push({ name: 'JOSE', age: 21 }, { name: 'RAUL', age: 265 });
//   console.log(asd);
//   console.log(cuantosHay);
// }

// addProdutc();
**