import { Carrito } from "./components/pages/carrito/Carrito"
import { CheckOut } from "./components/pages/checkout/CheckOut"
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail"
import { ItemList } from "./components/pages/itemList/ItemList"


export const rutas = [{
    id: "home",
    path: "/",
    Element: ItemList

},{
    id: "categorias",
    path: "/categoria/:categoria",
    Element: ItemList
},{
    id: "detalleproductos",
    path: "/detalleproducto/:id",
    Element: ItemDetail

},{
    id: "carrito",
    path: "/carrito",
    Element: Carrito

},{
    id: "checkout",
    path: "/checkout",
    Element: CheckOut
},
]