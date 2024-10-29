<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Communication</template>
    Du bist eher introvertiert und möchtest deine Komfortzone erweitern, in dem du andere Leute kennenlernst
    oder generell daran arbeitest mehr am Weltgeschehen teilzunehmen als wieder vor dem PC oder Fernseher zu hocken.
<!--    Vue’s-->
<!--    <a href="https://vuejs.org/" target="_blank" rel="noopener"-->
<!--      >official documentation</a-->
<!--    >-->
<!--    provides you with all information you need to get started.-->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Fun</template>
    Ein lustiger Abend mit Freunden, doch niemand weiß was man am Samstag Abend machen kann?
    Wir geben euch lustige Ideen, wie ihr mit Leuten in Kontakt kommt oder einfach peinliche Dinge in der Öffentlichkeit macht.
<!--    This project is served and bundled with-->
<!--    <a-->
<!--      href="https://vite.dev/guide/features.html"-->
<!--      target="_blank"-->
<!--      rel="noopener"-->
<!--      >Vite</a-->
<!--    >. The recommended IDE setup is-->
<!--    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"-->
<!--      >VSCode</a-->
<!--    >-->
<!--    +-->
<!--    <a-->
<!--      href="https://github.com/johnsoncodehk/volar"-->
<!--      target="_blank"-->
<!--      rel="noopener"-->
<!--      >Volar</a-->
<!--    >. If you need to test your components and web pages, check out-->
<!--    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>-->
<!--    and-->
<!--    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"-->
<!--      >Cypress Component Testing</a-->
<!--    >.-->

<!--    <br />-->

<!--    More instructions are available in <code>README.md</code>.-->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Discover</template>

    Finde neue Möglichkeiten, deine Freizeit zu gestalten indem du mit Discover kreative Quests bekommst.
<!--    Get official tools and libraries for your project:-->
<!--    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,-->
<!--    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"-->
<!--      >Vue Router</a-->
<!--    >,-->
<!--    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"-->
<!--      >Vue Test Utils</a-->
<!--    >, and-->
<!--    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"-->
<!--      >Vue Dev Tools</a-->
<!--    >. If you need more resources, we suggest paying-->
<!--    <a-->
<!--      href="https://github.com/vuejs/awesome-vue"-->
<!--      target="_blank"-->
<!--      rel="noopener"-->
<!--      >Awesome Vue</a-->
<!--    >-->
<!--    a visit.-->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Dating</template>

    Dein Datingleben ist eingeschlafen oder du bekommst einfach keine Matches auf Dating Apps?
    Wir helfen dir deine Komfortzone zu erweitern um Menschen im echten Leben kennenzulernen.
<!--    Got stuck? Ask your question on-->
<!--    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a-->
<!--    >, our official Discord server, or-->
<!--    <a-->
<!--      href="https://stackoverflow.com/questions/tagged/vue.js"-->
<!--      target="_blank"-->
<!--      rel="noopener"-->
<!--      >StackOverflow</a-->
<!--    >. You should also subscribe to-->
<!--    <a href="https://news.vuejs.org" target="_blank" rel="noopener"-->
<!--      >our mailing list</a-->
<!--    >-->
<!--    and follow the official-->
<!--    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"-->
<!--      >@vuejs</a-->
<!--    >-->
<!--    twitter account for latest news in the Vue world.-->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Party</template>

Du willst lustige Momente mit der App erleben und diese mit deinen Freunden teilen?
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >Hier</a
    >bist du genau richtig.
  </WelcomeItem>
</template>
