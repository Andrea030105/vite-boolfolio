<script>
import axios from 'axios';

export default {
    name: "ProjectMain",
    data() {
        return {
            projects: [],
            loading: true,
            baseUrl: "http://127.0.0.1:8000"
        }
    },
    methods: {
        getProject() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.projects;
                this.loading = false;
            })
        }
    },
    mounted() {
        this.getProject();
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div v-for="project in projects" :key="project.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="project.image != null ? `${baseUrl}/storage/${project.image}` : `https://placehold.co/288x180?text=No+Image`"
                            class="card-img-top" :alt="project.title">
                        <div class="card-body">
                            <h5>
                                {{ project.title }}
                            </h5>
                            <p class="card-text">
                                {{ project.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>