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
            baseUrl: "http://127.0.0.1:8000",
            current_page: 1,
            last_page: null
        }
    },
    methods: {
        getProject(project_page) {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`, { params: { page: project_page } }).then((response) => {
                this.projects = response.data.projects.data;
                this.loading = false;
                this.current_page = response.data.projects.current_page;
                this.last_page = response.data.projects.last_page;
            })
        }
    },
    mounted() {
        this.getProject(this.current_page);
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
        <div class="row">
            <div class="col d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" @click="getProject(current_page - 1)"
                                :class="current_page == 1 ? 'disabled' : ''">
                                Prev
                            </a>
                        </li>
                        <li class="page-item" v-for="i in last_page" :class="current_page == i ? 'disabled' : ''">
                            <a @click="getProject(i)" class="page-link">{{ i }}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" @click="getProject(current_page + 1)"
                                :class="current_page == last_page ? 'disabled' : ''">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
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