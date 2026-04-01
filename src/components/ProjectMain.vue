<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "ProjectMain",
    components: {
        ProjectCard
    },
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
                <div class="text-center my-4">
                    <h1>
                        Projects
                    </h1>
                </div>
            </div>
        </div>
        <div v-if="loading" class="row">
            <div class="col d-flex justify-content-center">
                <div class="loader"></div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap gap-5 my-3">
                <div v-for="project in projects" :key="project.id" class="card" style="width: 18rem;">
                    <ProjectCard :project="project" :baseUrl="baseUrl" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>