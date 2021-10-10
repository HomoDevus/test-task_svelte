<script>
	import CategoriesFilter from "./components/CategoriesFilter.svelte";
    import Products from "./components/Products.svelte";
    import {products} from "./Stores/products";

    let filteredProducts

    products.subscribe(value => {
        filteredProducts = value.filter(product => product.show)
    })

    // Выводит alert с выбронными товарами, дублирует в консоли
    function handleClick() {
        let chosen = filteredProducts.filter(product => product.selected)
        let text = ''
        for (let productName of chosen) {text += productName.name + '\n'}
        alert('Выбранные товары:\n\n' + text)
        console.table(chosen)
    }
</script>

<div class="App">
    <header class="App-header">
        <div class={"content-container"}>
            <svg class="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32">
                <path
                        d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
        </div>
    </header>
    <CategoriesFilter />
    <Products />
    <hr />
    <div class='content-container'>
        <button on:click={handleClick} class='show-selected'>Покозать выбранное</button>
    </div>
</div>