<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="message" />
    </template>
    <template #heading>Communication</template>
    Du bist eher introvertiert und möchtest deine Komfortzone erweitern, in dem du andere Leute kennenlernst
    oder generell daran arbeitest mehr am Weltgeschehen teilzunehmen als wieder vor dem PC oder Fernseher zu hocken.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="wine-glass-empty" />
    </template>
    <template #heading>Fun</template>
    Ein lustiger Abend mit Freunden, doch niemand weiß was man am Samstag Abend machen kann?
    Wir geben euch lustige Ideen, wie ihr mit Leuten in Kontakt kommt oder einfach peinliche Dinge in der Öffentlichkeit macht.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="sun" />
    </template>
    <template #heading>Discover</template>
    Finde neue Möglichkeiten, deine Freizeit zu gestalten indem du mit Discover kreative Quests bekommst.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fire" />
    </template>
    <template #heading>Dating</template>
    Dein Datingleben ist eingeschlafen oder du bekommst einfach keine Matches auf Dating Apps?
    Wir helfen dir deine Komfortzone zu erweitern um Menschen im echten Leben kennenzulernen.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="wine-glass-empty" />
    </template>
    <template #heading>Party</template>
    Du willst lustige Momente mit der App erleben und diese mit deinen Freunden teilen?
    Hier bist du genau richtig.
  </WelcomeItem>

</template>
