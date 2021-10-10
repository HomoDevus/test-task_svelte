<script>
    export let image
    export let name
    export let category
    export let selected
    import {products} from "../Stores/products";

    // Поле клика по кнопке лайка обновляет значение selected в state
    function handleClick() {
        products.update(prev => prev.map(product => {
            if (product.name === name) {
                product.selected = !product.selected
            }
            return product
        }))
    }
</script>

<div class='products__item'>
    <img src={image} alt={name} />
    <div class="products__item-info">
        <div class="products__item-info__left">
            <p>{name}</p>
            <div class='products__category'>{category}</div>
        </div>
        <div class="products__item-info__right">
            <button class="like-button {selected ? 'active': null}" on:click={handleClick}>
                <div class="like-wrapper">
                    <div class="ripple"></div>
                    <svg class="heart" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</div>

<style>
    .products__item-info {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .like-button {
        font-size: 3rem;
        appearance: none;
        border: none;
        border-radius: 50%;
        background: white;

        width: 1em;
        height: 1em;
        padding: 0;
        outline: none;
        z-index: 2;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        margin-right: 10px;
    }

    .like-button:before {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 .3em 0.6em rgba(0, 0, 0, 0.15);
        border-radius: inherit;
        transition: inherit;
    }

    .like-wrapper {
        display: grid;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .heart {
        width: .5em;
        height: .5em;
        display: block;
    }

    .heart > path {
        stroke: #EA442B;
        stroke-width: 2;
        fill: transparent;
        transition: all 0.3s cubic-bezier(.7,0,.3,1);
    }

    .like-button.active .heart > path {
        fill: #EA442B;
    }
</style>