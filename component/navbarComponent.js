const { mapState } = Pinia;
import cartStore from "../store/cartStore.js"

export default {
    template: `<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <button type="button" class="btn">
            購物車
            <span class="badge rounded-pill bg-danger">{{ cart.length }}</span>
        </button>
    </div>
</nav>
    `,
    computed: {
        ...mapState(cartStore, ['cart'])
    }
}