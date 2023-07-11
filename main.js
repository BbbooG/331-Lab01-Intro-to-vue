const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Mother I need to sleep')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(30)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green',
            image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue',
            image: './assets/images/socks_blue.jpg'}
        ])
        const sizes = ref([
            {sizes:"S"},
            {sizes:"M"},
            {sizes: "L"}
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value +=1
        }

            function updateImage(variantImage){
                image.value = variantImage;
            }

        return {
            product,
            description,
            image,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage
        }
    }

}) .mount('#app')