/**
 * Created by andrew.yang on 7/27/2017.
 */
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'',
        pathMatch:'full',
        component: HomeComponent,
    },
    {
        path:'about',
        component: AboutComponent,
        //redirectTo:'about',
        //loadChildren:'./about/about.component'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];
