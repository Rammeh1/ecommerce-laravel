<template>
    <div>
        <div v-if="isLoading">
            <h2>Loading ....</h2>
        </div>
        <div v-else class="py-6">
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <div class="container-fluid">
                    <router-link
                        to="/addArticle"
                        class="btn btn-warning roundedcircle"
                        aria-label="New Articles"
                    >
                        <span style="color: rgb(43, 27, 27)">
                            <i class="fa-solid fa-square-plus"> </i>
                        </span>
                        New
                    </router-link>
                </div>
            </nav>
            <form v-if="visible">
                <div class="card flex justify-content-center">
                    <Dialog v-model:visible="visible">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="reference" class="form-label"
                                    >Référence</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="reference"
                                    v-model="article.reference"
                                />
                            </div>
                            <div class="col-md-6 ms-auto">
                                <label for="designation" class="form-label"
                                    >Désignation</label
                                >
                                <input
                                    type="texte"
                                    class="form-control"
                                    id="designation"
                                    v-model="article.designation"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="marque" class="form-label"
                                    >Marque</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="marque"
                                    v-model="article.marque"
                                />
                            </div>
                            <div class="col-md-6 ms-auto">
                                <label for="Quantité" class="form-label"
                                    >Qtock</label
                                >
                                <input
                                    type="texte"
                                    class="form-control"
                                    id="qtestock"
                                    v-model="article.qtestock"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="prix" class="form-label"
                                    >Prix</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="prix"
                                    v-model="article.prix"
                                />
                            </div>
                            <div class="col-md-6 ms-auto">
                                <label for="scategorie" class="form-label"
                                    >Sous Catégorie</label
                                >
                                <select
                                    class="form-control"
                                    v-model="article.scategorieID"
                                >
                                    <option
                                        v-for="sc in Scategories"
                                        :key="sc.id"
                                        :value="sc.id"
                                    >
                                        {{ sc.nomscategorie }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="Image" class="form-label"
                                    >Image</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="imageart"
                                    v-model="article.imageart"
                                />
                            </div>
                        </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                            @click="addArticle"
                        >
                            <i class="fa-solid fa-floppy-disk"></i>Enregister
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            @click="cancel"
                        >
                            <i class="fa-solid fa-floppy-disk"></i>cancel
                        </button>
                    </Dialog>
                </div>
            </form>
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Référence</th>
                        <th scope="col">Désignation</th>
                        <th scope="col">Quantité Stock</th>
                        <th scope="col">Prix</th>
                        <th scope="col">View</th>
                        <th scope="col">Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="art in articles" :key="art.id">
                        <td>
                            <img :src="art.imageart" width="70" height="80" />
                        </td>
                        <td>{{ art.reference }}</td>
                        <td>{{ art.designation }}</td>
                        <td>{{ art.marque }}</td>
                        <td>{{ art.qtestock }}</td>
                        <td>{{ art.prix }}</td>
                        <td>
                            <router-link
                                :to="{
                                    name: 'EditArticle',
                                    params: { id: art.id },
                                }"
                                class="btn btn-outline-warning mx-2"
                            >
                                <i class="fa-solid fa-pen-to-square"></i>
                                Modifier
                            </router-link>
                        </td>

                        <td>
                            <button
                                class="btn btn-outline-danger mx2"
                                @click="deletearticle(art.id)"
                            >
                                <i class="fa-solid fa-trash-can"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const articles = ref([]);
const isLoading = ref(true);
import Dialog from "primevue/dialog";
const myFiles = ref([]);
const visible = ref(false);
const article = ref({
    reference: "",
    designation: "",
    marque: "",
    qtestock: 0,
    prix: 0,
    imageart: "/img/img1",
    scategorieID: "",
});

const getarticles = async () => {
    await axios
        .get("http://localhost:8000/api/articles")
        .then((res) => {
            articles.value = res.data;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error);
        });
};
const deletearticle = async (id) => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
        try {
            await axios.delete(`http://localhost:8000/api/articles/${id}`);
            getarticles();
        } catch (error) {
            console.log(error);
        }
    }
};
onMounted(() => {
    getarticles();
});
</script>
<style lang="scss" scoped></style>
