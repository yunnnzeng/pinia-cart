const { defineStore } = Pinia;
import productsStore from "./productsStore.js";

export default defineStore('cart', {
    state: () => ({
        cart: []
    }),
    actions: {
        addToCart(productId, qty=1){
            // 取得已經有加入購物車的項目
            const currentCart = this.cart.find((item) => item.productId === productId)
            if (currentCart) {
                currentCart.qty += qty;
            } else {
                this.cart.push({
                    id: new Date().getTime(),
                    productId,
                    qty
                })
            }
        },
        removeCartItem(id) {
            const index = this.cart.findIndex((item) => item.id === id);
            this.cart.splice(index, 1);
        }
    },
    getters: {
        cartList: ({ cart }) => {
            // 1. 購物車的品項資訊，需要整合產品資訊
            // 2. 必須計算小計的金額
            // 3. 必須提供總金額
            const { products } = productsStore();
            const carts = cart.map((item) => {
                const product = products.find((product) => product.id === item.productId)
                return {
                    ...item,
                    product,
                    subtotal: product.price * item.qty
                }
            });
            const total = carts.reduce((a,b) => a + b.subtotal, 0);

            return {
                carts,
                total: total,
            }
        }
    }
})