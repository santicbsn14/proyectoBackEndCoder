class ProductManager {

    #id 
    #products 
  
    constructor() { 
      this.#id = 1;
      this.#products = [];
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      constructor(); 
      const isExist = this.isExist('code', code); 
  
      if (isExist) throw new Error(`Codigo ingresado existente`);
  
      if (title.length === 0 || description.length === 0 || price.length === 0 || thumbnail.length === 0 || code.length === 0 || stock.length === 0) throw new Error('Todos los campos son obligatorios');
  
      this.#products.push({ 
        id: this.#id++, 
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.#products; 
    }
  
    getProductById(id) {
      const product = this.#products.find(product => product.id === id);
  
      if (!product) throw new Error("Este producto no se encuentra");
  
      return product;
    }
  
    isExist(key, value) {
      return this.#products.find(product => product[key] === value)
    };
  }
  
  const item = {
    title: 'producto prueba',
    description: 'Producto de prueba',
    price: 200,
    thumbnail: 'No existe imagen',
    code: 'abc123',
    stock: 25
  };
  
  const product = new ProductManager();
  console.log(product.getProducts());
  product.addProduct(item);
  console.log(product.getProducts());
  product.addProduct(item);
  console.log(product.getProductById(1));
  console.log(product.getProductById(2));