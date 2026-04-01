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
        <div class="row">
            <div class="col d-flex flex-wrap gap-5 my-3">
                <div v-for="project in projects" :key="project.id" class="card" style="width: 18rem;">
                    <ProjectCard :project="project" :baseUrl="baseUrl" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>