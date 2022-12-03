// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const hostCloud = "https://shoppi.eastus.cloudapp.azure.com/api/";

export const categories = [
  {value: 'Comida'},
  {value: 'Electrónica'},
  {value: 'Anime'},
  {value: 'Ropa'},
  {value: 'Calzado'},
  {value: 'Postres'},
  {value: 'Videojuegos'},
  {value: 'Servicios'},
  {value: 'Asesorías'},
  {value: 'Pines'},
  {value: 'Stickers'},
  {value: 'Trueque'},
  {value: 'Variado'},
];

export const ROUTEfrontPage = "";

export const ROUTEregister = "auth/register";
export const ROUTElogin = "auth/login";

export const ROUTEproductGrid ='products/grid';


export const ROUTEuser = "user"
export const ROUTEuserProducts = "user/products"
export const ROUTEuserCreateProduct = "user/createProduct"
export const ROUTEuserViewProduct = "user/viewProduct"
export const ROUTEuserModifyProduct = "user/modifyProduct"

export const ROUTEgridProducttID = "products/product"


export const ROUTEuserAccount = "user/account"