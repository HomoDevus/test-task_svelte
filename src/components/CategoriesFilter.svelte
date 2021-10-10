<script>
    export let activeCategory
    import {categories} from '../Stores/categories.js'
    let categoriesList;

    categories.subscribe(value => {
        categoriesList = value;
    })

    // Обновляет обект категорий. Присваевает значение active = true активной категории
    function handleChange() {
        categories.update((value => {
            for (let category of value) {
                category.active = category.value === activeCategory;
            }
            return value
        }))
    }
</script>

<div class={'content-container'}>
    <select bind:value={activeCategory} on:change={handleChange} class='menu'>
        {#each categoriesList as category}
            <option value={category.value}>
                {category.value}
            </option>
        {/each}
    </select>
</div>