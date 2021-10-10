import { writable } from 'svelte/store';

export const products = writable([
    {
        id: 1,
        name: 'Nike Air VaporMax 2021 FK',
        image: 'img/кроссовки-air-vapormax-2021-fk-Tk4KhJ.jfif',
        selected: false,
        category: 'Кроссовки',
        show: true
    },
    {
        id: 2,
        name: 'Nike Air Max 96 II',
        image: 'img/кроссовки-air-max-96-2-6dHbwR.jfif',
        selected: false,
        category: 'Кроссовки',
        show: true
    },
    {
        id: 3,
        name: 'Nike Air Max 90',
        image: 'img/кроссовки-air-max-90-S8L0TL.jfif',
        selected: false,
        category: 'Кроссовки',
        show: true
    },
    {
        id: 4,
        name: 'Nike Air Max 97',
        image: 'img/кроссовки-air-max-97-78Q3Q7.jfif',
        selected: false,
        category: 'Кроссовки',
        show: true
    },
    {
        id: 5,
        name: 'Philadelphia 76ers',
        image: 'img/футболка-с-логотипом-нба-dri-fit-philadelphia-76ers-NMpxKF.jfif',
        selected: false,
        category: 'Футболки',
        show: true
    },
    {
        id: 6,
        name: 'Jazz',
        image: 'img/футболка-нба-jazz-X7T63R.jfif',
        selected: false,
        category: 'Футболки',
        show: true
    },
    {
        id: 7,
        name: 'Celtics',
        image: 'img/футболка-нба-celtics-0sBqmQ.jfif',
        selected: false,
        category: 'Футболки',
        show: true
    }
]);