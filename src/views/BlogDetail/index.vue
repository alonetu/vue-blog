<template>
  {{ id }}
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const id = ref<string>("");
const route = useRoute();

id.value = route.params.id;
</script>
