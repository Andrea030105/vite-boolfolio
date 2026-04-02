<script>
export default {
  name: "ProjectCard",
  data() {
    return {};
  },
  props: {
    project: Object,
    baseUrl: String,
  },
};
</script>
<template>
  <img
    :src="
      project.image != null
        ? `${baseUrl}/storage/${project.image}`
        : `https://placehold.co/288x180?text=No+Image`
    "
    class="card-img-top"
    :alt="project.title"
  />
  <div class="card-body">
    <h5>
      {{ project.title }}
    </h5>
    <div>
      <h6>
        <strong> Linguaggio: </strong>
      </h6>
      <span v-if="project.type" class="badge bg-info mx-1">
        {{ project.type.name }}
      </span>
      <span v-else> Non Specificato </span>
    </div>
    <div>
      <h6>
        <strong> Tecnologies: </strong>
      </h6>
      <span
        class="badge bg-primary mx-1"
        v-for="technology in project.technologies"
        :key="technology.id"
      >
        {{ technology.name }}
      </span>
    </div>
    <p class="card-text">
      {{ project.description }}
    </p>
    <router-link
      :to="{ name: 'singleProject', params: { slug: project.slug } }"
      class="btn btn-sm btn-success"
    >
      Reaed
    </router-link>
  </div>
</template>
<style lang="scss" scoped></style>
