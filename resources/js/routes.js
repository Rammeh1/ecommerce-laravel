import Accueil from './App.vue';
import ViewArticles from "./components/articles/ViewArticles.vue"
import AddArticle from "./components/articles/AddArticle.vue"
//import Viewcategorie from "./components/categories/Viewcategorie.vue"
//import Addcategorie from "./components/categories/Addcategorie.vue"
import EditArticle from "./components/articles/EditArticle.vue"
import Viwearticletable from "./components/articlesTable/Viewarticletable.vue"
import AddArticleTable from "./components/articlesTable/AddArticleTable.vue"
import HomeCart from './components/cart/HomeCart.vue'
import Cart from './components/cart/Cart.vue'


export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        name: 'AddArticleTable',
        path: '/AddArticleTable',
        component: AddArticleTable
    },
    {
        name: "ViewArticles",
        path: "/listart",
        component: ViewArticles
    },
    {
        name: "AddArticle",
        path: "/AddArticle",
        component: AddArticle
    },
    {
        name: "EditArticle",
        path: "/EditArticle/:id",
        component: EditArticle
    },
    {
        name: "Viewarticletable",
        path: "/articletable",
        component: Viwearticletable
    },
    {
        path: '/shopping',
        name: 'HomeCart',
        component: HomeCart
    },
    /* {
         name: "Viewcategorie",
         path: "/listcat",
         component: Viewcategorie
     },
     {
         name: "Addcategorie",
         path: "/addcategorie",
         component: Addcategorie
     },*/
];  