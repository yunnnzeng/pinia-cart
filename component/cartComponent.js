import cartStore from "../store/cartStore.js";
const { mapState, mapActions } = Pinia;

export default {
    template: ` <div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
        <tbody>
            <tr v-for="item in cartList.carts" :key="item.id">
                <td>
                    <a href="#" class="text-dark"
                        @click.prevent="removeCartItem(item.id)"
                    >X</a>
                </td>
                <td>
                    <img :src="item.product.imageUrl"
                        alt="" class="table-image">
                </td>
                <td>{{ item.product.title }}</td>
                <td>
                    <select name="" class="form-select" id="">
                        <option value="">1</option>
                    </select>
                </td>
                <td class="text-end">
                    $ {{item.subtotal}}
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5" class="text-end">總金額 NT$ {{cartList.total}} </td>
            </tr>
        </tfoot>
    </table>
</div>
`,
    computed: {
        ...mapState(cartStore, ['cartList'])
    },
    methods: {
        ...mapActions(cartStore, ['removeCartItem'])
    }
}