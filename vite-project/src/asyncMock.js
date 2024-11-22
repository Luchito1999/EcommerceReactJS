

const products = [
    {
        id: "1",
        name: "Camiseta Brasil 2014",
        price: 1000,
        category: "camiseta",
        img: "/assets/camisetabrasil.jpg",
        stock: 25,
        description: "Descripcion de Camiseta Brasil 2014",
    },
    {
        id: "2",
        name: "Camiseta Argentina 1990",
        price: 800,
        category: "camiseta",
        img: "/assets/camisetaargentina.jpg",
        stock: 16,
        description: "Descripcion de Camiseta Argentina 1990",
    },
    {
        id: "3",
        name: "Camiseta Croacia 2018",
        price: 1200,
        category: "camiseta",
        img: "/assets/camisetacroacia.jpg",
        stock: 0,
        description: "Descripcion de Camiseta Croacia 2018",
    },
    {
        id: "4",
        name: "Pelota Mundial 2010",
        price: 1200,
        category: "pelota",
        img: "/assets/pelota2010.jpeg",
        stock: 0,
        description: "Descripcion de Pelota Mundial 2010",
    },
    {
        id: "5",
        name: "Pelota Mundial 2018",
        price: 800,
        category: "pelota",
        img: "/assets/pelota2018.jpg",
        stock: 16,
        description: "Descripcion de Pelota Mundial 2018",
    },
    {
        id: "6",
        name: "Pelota Mundial 2022",
        price: 800,
        category: "pelota",
        img: "/assets/pelota2022.jpg",
        stock: 16,
        description: "Descripcion de Pelota Mundial 2022",
    },
    {
        id: "7",
        name: "Botines Umbro",
        price: 1200,
        category: "botines",
        img: "/assets/botinesumbro.jpg",
        stock: 0,
        description: "Descripcion de Botines Umbro",
    },
    {
        id: "8",
        name: "Botines Adidas",
        price: 1200,
        category: "botines",
        img: "/assets/botinesadidas.jpg",
        stock: 0,
        description: "Descripcion de Botines Adidas",
    },
    {
        id: "9",
        name: "Botines Puma",
        price: 1200,
        category: "botines",
        img: "/assets/botinespuma.jpg",
        stock: 0,
        description: "Descripcion de Botines Puma",
    },
];


// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
}

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};
