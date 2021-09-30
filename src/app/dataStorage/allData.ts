import Product from '../interfaces/product'
const productsData:Array<Product>=[
    {name:'product1',type:'typeA',wareHouse:'Cairo',zeroBalance:true,onHand:513},
    {name:'product2',type:'typeB',wareHouse:'Cairo',zeroBalance:false,onHand:830},
    {name:'product3',type:'typeC',wareHouse:'Alexandria',zeroBalance:true,onHand:266},
    {name:'product4',type:'typeD',wareHouse:'Alexandria',zeroBalance:false,onHand:700},
    {name:'product5',type:'typeE',wareHouse:'Cairo',zeroBalance:true,onHand:654},
    {name:'product6',type:'typeF',wareHouse:'Alexandria',zeroBalance:false,onHand:456},

]


 export default productsData

 // a more realistic design would be each types,warehouse and products has array(table) with the id and name then we use the id not the name 