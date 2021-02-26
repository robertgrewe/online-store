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
        loadChildren:() => import('./pages/category/category.module').then(m => m.CategoryModule)
    },
    {
        path:'product',
        loadChildren:() => import('./pages/product/product.module').then(m => m.ProductModule)
    },
    {
        path:'cart',
        loadChildren:() => import('./pages/cart/cart-page.module').then(m => m.CartPageModule)
    },
    {
        path:'**',
        loadChildren:() => import('./pages/category/category.module').then(m => m.CategoryModule)
    }
];
