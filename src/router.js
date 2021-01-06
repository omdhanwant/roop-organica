import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ProductGallery from './components/ProductsGallery.vue';
import ContactUs from './components/ContactUs.vue';
import AboutUs from './components/AboutUs.vue';

const router = new VueRouter({
    mode:'hash',
    routes : [
        {path: '' , redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/products-gallery', component: ProductGallery },
        {path: '/contact-us', component: ContactUs },
        {path: '/about-us', component: AboutUs },
        { path: '*', redirect: '/home' }
    ]
    ,
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    linkActiveClass:'active'
    
  });

export default {
    VueRouter,
    router
};