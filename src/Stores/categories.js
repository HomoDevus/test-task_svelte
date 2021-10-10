import { writable } from 'svelte/store';

export const categories = writable([
    {
        id: 1,
        value: 'Все категории',
        active: true
    },
    {
        id: 2,
        value: 'Кроссовки',
        active: false
    },
    {
        id: 3,
        value: 'Футболки',
        active: false
    }])