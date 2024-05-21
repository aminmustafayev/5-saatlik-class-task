import Add from "../pages/Add/Add";
import Basket from "../pages/Basket/Basket";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import SiteRoot from "../pages/SiteRoot";
import Wishlist from "../pages/Wishlist/Wishlist";


export const Router =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/basket',
                element:<Basket/>
            },
            {
                path:'/add',
                element:<Add/>
            },
            {
                path:'/wishlist',
                element:<Wishlist/>
            },
            {
                path:'/:id',
                element:<Detail/>
            }
        ]
    }
] 