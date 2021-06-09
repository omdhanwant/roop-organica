import service from './products.service';

export default {
    getProductByName: (name) => {
        return service.products.find(p => p.name === name);
    }
}