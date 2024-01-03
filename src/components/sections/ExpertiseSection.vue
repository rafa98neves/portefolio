<script lang="ts" setup>
import Card from "../atoms/Card.vue";
</script>
<template>
  <section>
    <div class="s-Expertise padded-space">
      <div class="s-Expertise--description">
        I'm a {{ new Date().getFullYear() - 1998 }} years old
        <b> frontend developer </b>, passionate by coding <b> good</b>,
        <b>reliable</b> and <b>escalable</b> code. My professional skills are
        based on providing outstanding UIs that answer hard and complex real
        world problems and needs while also passionate on mentoring young and
        fresh engineers.
      </div>
      <div class="s-Expertise--cardContainer">
        <Card title="Languages">
          <ul class="s-Expertise--list">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li class="pt-4">Java</li>
          </ul>
        </Card>

        <Card title="Frameworks">
          <ul class="s-Expertise--list">
            <li>Vue</li>
            <li>React</li>
            <li class="pt-4">Spring</li>
            <li>Quarkus</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul class="s-Expertise--list">
            <li>Github</li>
            <li>Figma</li>
            <li>Jira</li>
            <li>Azure Dev Ops</li>
            <li>Amazon Web Services</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .light-bg;
}
.s-Expertise {
  margin-top: 4rem;
  margin-bottom: 4rem;
  &--cardContainer {
    display: flex;
    gap: 2rem;
    align-items: stretch;
    justify-content: stretch;

    * {
      flex-grow: 1;
      margin-top: 1rem;
    }
  }

  &--list {
    @extend .text-center;
  }

  &--description {
    @extend .text-center;
    max-width: 40rem;
    margin: 3rem auto 2rem auto;
  }
}
</style>
