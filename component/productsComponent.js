export default {
    data(){
        return {
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
        }
    },
    template: `<div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in products" :key="product.id">
        <div class="card">
            <img :src="product.imageUrl"
                alt="" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">{{product.title}}
                    <span class="float-end"> $ {{ product.price }}</span>
                </h6>
                <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
            </div>
        </div>
    </div>
</div>`
}