<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <Card>
    <template #title>
      <h1>About</h1>
    </template>
    <template #content>
      <p>
        This is a simple resume website that I created using Vue 3 and Vite. It
        is a single-page application with routing and a dark mode toggle that I
        made to practive my frontend development.
      </p>
      <br />
      <p>
        You can use the buttons in the header to view my external links. You can
        also navigate to the different pages of my site by using the buttons in
        the toolbar above
      </p>
      <br />
      <p>
        You can also view the source code for this project on my GitHub
        <a
          href="https://github.com/KelvinJRosado/resume-site-vite-vue"
          target="_blank"
          >here</a
        >"
      </p>
      <br />
      <p>
        Feel free to leave me feedback via email. Thanks for checking out my
        site!
      </p>
    </template>
  </Card>
</template>

<style scoped></style>
