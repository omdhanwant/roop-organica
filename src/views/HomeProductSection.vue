<template>
    <div>
        <section class="product-area">
            <SectionHeader  heading="Best Seller"></SectionHeader>
            
                    <div class="button-group pb-4 text-center">

                    <button 
                    v-for="category in categories" :key="category"
                    type="button" :data-filter="category" 
                    :class="{'active' : selectedCategory == category }"
                    @click="onCategorySelected(category)"
                    >
                    {{category }}
                    </button>
                </div>
            
                <div class="row grid m-0 justify-content-center">
                    <!-- add product cards -->
                    <div v-for="(product, i) in products" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                            <ProductCard :name="product.name" :description="product.name"></ProductCard>
                    </div>
                    
                </div>
            
        </section>
    </div>
</template>

<script>
import SectionHeader from '../views/SectionHeader';
import ProductCard from '../views/ProductCard';
export default {
    components: {
        SectionHeader,
        ProductCard
    },
     data() {
        return {
            products:[ {
                name: 'Product 1',
                id: 'latest'
            },
            {
                name: 'Product 2',
                id: 'popular'
            },
            {
                name: 'Product 3',
                id: 'popular'
            },
            {
                name: 'Product 4',
                id: 'upcoming'
            }
            ],
            selectedCategory: 'all',
            categories: ['popular', 'latest' , 'upcoming']
        }
    },

    methods:{
        onCategorySelected(category) {
            this.selectedCategory = category;
        }
    }
}
</script>

<style scoped>
/* Project area */
.product-area {
    padding: 2rem;
}

.product-area .button-group button {
    background: transparent;
    border: none;
    font: normal 500 16px/30px var(--roboto);
    text-transform: uppercase;
}
.product-area .button-group button + button {
    margin-left: 3rem;
}

.button-group button {
    position: relative;
    transition: all 0.2s ease-in-out;
}
.button-group button::after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0px;
        height: 2px;
        margin: 5px 0 0;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.75s;
        opacity: 0;
        left: 0;
        background-color: var(--primary-color-dark);
}

.button-group button.active::after{
        width: 100%;
          opacity: 1;
}
/* Project area */
</style>