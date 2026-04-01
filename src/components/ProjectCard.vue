<script>
export default {
    name: "ProjectCard",
    data() {
        return {
        }
    },
    props: {
        project: Object,
        baseUrl: String,
    }
}
</script>
<template>
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
</template>
<style lang="scss" scoped></style>