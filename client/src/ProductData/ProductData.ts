export interface ListProduct {
  name: string;
  description: string;
  price: string;
  available: boolean;
}

export const products: ListProduct[] = [
  // {
  //   name: 'Produto 1',
  //   description: 'Descrição do produto 1',
  //   price: '10',
  //   available: true,
  // },
  // {
  //   name: 'Produto 2',
  //   description: 'Descrição do produto 2',
  //   price: '120',
  //   available: false,
  // },
  // {
  //   name: 'Produto 3',
  //   description: 'Descrição do produto 3',
  //   price: '150',
  //   available: true,
  // },
  // {
  //   name: 'Produto 4',
  //   description: 'Descrição do produto 4',
  //   price: '200',
  //   available: false,
  // },
  // {
  //   name: 'Produto 5',
  //   description: 'Descrição do produto 5',
  //   price: '250',
  //   available: true,
  // },
];


// Função para salvar os produtos no localStorage
export const saveProductsToLocalStorage = (products: ListProduct[]) => {
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products)
};

// Função para carregar os produtos do localStorage
export const loadProductsFromLocalStorage = (): ListProduct[] => {
  const productsStored = localStorage.getItem('products');
  console.log(productsStored)
  return productsStored ? JSON.parse(productsStored) : [];
};