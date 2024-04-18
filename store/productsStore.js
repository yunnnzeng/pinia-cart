const { defineStore } = Pinia;

export default defineStore('productsStore', {
    // data, methods, computed
    // state, action, getters
    state: () => ({
        products:[
            {
                id: 1,
                title: '雪莉梅',
                imageUrl: 'https://i04piccdn.sogoucdn.com/1381c3d43445770b',
                price: 180
            },
            {
                id: 2,
                title: '達菲',
                imageUrl: 'https://i03piccdn.sogoucdn.com/237f5864ca37bc26',
                price: 210
            },
            {
                id: 3,
                title: '史黛菈',
                imageUrl: 'https://i02piccdn.sogoucdn.com/2fdfb440cc759ce4',
                price: 230
            },
            {
                id: 4,
                title: '傑拉東尼',
                imageUrl: 'https://i03piccdn.sogoucdn.com/574556be886d3409',
                price: 290
            }
        ]
    }),
    getters:{
        sortProducts: ({ products }) =>{
            return products;
        }
    }
})