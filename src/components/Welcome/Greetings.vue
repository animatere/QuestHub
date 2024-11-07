<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="Greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            Unser Ziel ist es euch und euren Freunden eine lustige Zeit zu
            bescheren. Dazu bekommt ihr je nach Kategorie entsprechende Quests.
        </h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
