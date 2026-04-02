<script>
import axios from "axios";
export default {
  data() {
    return {
      project: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.loading = false;
        console.log(response.data);
        if (response.data.success) {
          this.project = response.data.projects;
        } else {
          this.$router.push({ name: "not-found" });
        }
      });
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card my-4">
          <img
            :src="
              project.image != null
                ? `${baseUrl}/storage/${project.image}`
                : `https://placehold.co/288x180?text=No+Image`
            "
            class="card-img-top w-25"
            :alt="project.title"
          />
          <div class="card-body">
            <h5>
              {{ project.title }}
            </h5>
            <div class="my-3">
              <h6>
                <strong> Linguaggio: </strong>
              </h6>
              <span v-if="project.type" class="badge bg-info mx-1">
                {{ project.type.name }}
              </span>
              <span v-else> Non Specificato </span>
            </div>
            <div class="my-3">
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
            <p class="card-text my-3">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
