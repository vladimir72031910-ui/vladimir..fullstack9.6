import '../scss/style.scss'

console.log('It works!')

import Swiper from 'swiper';

import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.brands', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true

    }
});