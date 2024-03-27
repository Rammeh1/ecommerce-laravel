<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
            <router-link to="#" class="navbar-brand"> Ecommerce </router-link>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link
                            to="/listart"
                            class="nav-link"
                            aria-label="View Articles"
                        >
                            View Articles
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="/articletable"
                            class="nav-link"
                            aria-label="View Articles Tables"
                        >
                            View Articles Tables
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="/shopping"
                            class="nav-link"
                            aria-label="Shopping Cart"
                        >
                            Shopping Cart
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input
                        class="form-control me-sm-2"
                        type="search"
                        placeholder="Search"
                    />
                    <button
                        class="btn btn-secondary my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <router-link
                            to="/cart"
                            class="nav-link position-relative"
                            :class="$route.name == 'Cart' ? 'active' : ''"
                            aria-current="page"
                        >
                            <i
                                class="fa-solid fa-cart-shopping fa-lg"
                                style="color: #ffffff"
                            ></i>
                            <span
                                v-if="$store.state.Articlestore.cart.length > 0"
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bgdanger"
                            >
                                {{ $store.state.Articlestore.cart.length }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
