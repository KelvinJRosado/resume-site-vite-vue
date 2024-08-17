<script setup lang="ts">
import ContactButton from './components/ContactButton.vue';
</script>

<template>
    <div class="page-header">
        <h1 class="centered-row">Kelvin Rosado</h1>
        <div class="centered-row">
            <ContactButton
                displayText="Email"
                link="mailto:kelvin.rosado.ayala@gmail.com"
            ></ContactButton>
            <ContactButton
                displayText="LinkedIn"
                link="https://linkedin.com/in/kelvin-rosado"
            ></ContactButton>
            <ContactButton
                displayText="GitHub"
                link="https://github.com/KelvinJRosado"
            ></ContactButton>
            <ContactButton
                displayText="GitLab"
                link="https://gitlab.com/KelvinRosado"
            ></ContactButton>
        </div>
    </div>
    <div class="page-main-content">
        <ul>
            <li>Education</li>
            <li>Work Experience</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
    </div>
</template>

<style scoped>
.page-header {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.centered-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}
</style>
