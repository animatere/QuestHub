<script setup lang="ts">
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import { ref } from "vue";

const text = ref('');

</script>

<template>
  <h1>Welcome to QuestHub</h1>
  <div>
    <input-text v-model="text" />
    {{ text }}

    <Button icon="pi pi-home" aria-label="Save" />
    <Button label="Profile" icon="pi pi-user" />
    <Button label="Save" icon="pi pi-check" iconPos="right" />
    <Button label="Search" icon="pi pi-search" iconPos="top" />
    <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
  </div>
</template>

<style scoped>

</style>
