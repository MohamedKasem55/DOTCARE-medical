export default interface Product {
    name:string,
    wareHouse:string,
    type:string,
    zeroBalance:boolean,
    onHand:number
}
export  interface searchedProduct {
    productName?:string,
    productWareHouse?:string,
    productType?:string,
    zeroBalance?:boolean
}
