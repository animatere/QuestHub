<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref, computed } from 'vue'
const text = ref('')
const count = ref(5)
const doubleCount = computed(() => count.value * 2)
</script>

<template>
    <h1>Welcome to QuestHub</h1>
    <div>
        <input-text v-model="text" />
        {{ text }}<br /><br />
        <i class="fa fa-user"></i> Profile<br />

        <label>First Number</label>
        <p>{{ count }}</p>
        <label>Second Number</label>
        <p>{{ doubleCount }}</p>

        <button style="width: 200px; height: 50px" @click="count += 2">
            Increase
        </button>

        <button style="width: 200px; height: 50px" @click="count = 5">
            Reset
        </button>
    </div>
</template>

<style scoped></style>
