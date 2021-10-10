<script>
    import {products} from '../Stores/products.js'
    import {categories} from '../Stores/categories.js'
    import ProductItem from "./ProductItem.svelte";
    let activeCategory
    let filteredProducts

    categories.subscribe(value => {
        // Обновляет текущую категорию
        for (let category of value) {
            if (category.active) activeCategory = category.value
        }

        // После обновления текущей категории, обноаляет значение show каждого товара в хранилище products
        products.update(prevProducts => {
            for (let product of prevProducts) {
                product.show = activeCategory === 'Все категории' || product.category === activeCategory;
            }
            return prevProducts
        })
    })

    // Фильтрует товары
    products.subscribe(value => {filteredProducts = value.filter(product => product.show)})
</script>

<div class='content-container products'>
    {#each filteredProducts as product (product.id)}
        <ProductItem {...product} />
    {/each}
</div>