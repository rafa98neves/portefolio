<script lang="ts" setup>
import Card from "../atoms/Card.vue";
import GeoFigure from "../atoms/GeoFigure.vue";
</script>
<template>
  <section>
    <div class="s-Expertise padded-space">
      <GeoFigure pos="bottom-left" color="light" />
      <h3 class="text-center mb-4">About me</h3>
      <div class="s-Expertise--description">
        I'm a {{ new Date().getFullYear() - 1998 }} years old
        <b> Frontend Developer</b> passionate for coding <b>good</b>,
        <b>reliable</b> and <b>escalable</b> code. My professional skills are
        based on providing outstanding UIs that answer hard and complex real
        world problems and needs while also passionate on mentoring young and
        fresh engineers.
      </div>
      <div class="s-Expertise--cardContainer">
        <Card title="Languages" :icons="['code', 'desktop', 'language']">
          <ul class="s-Expertise--list">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </Card>

        <Card
          title="Frameworks"
          :icons="[
            'fa-brands fa-vuejs',
            'fa-brands fa-react',
            'fa-brands fa-angular',
          ]"
        >
          <ul class="s-Expertise--list">
            <li>Vue</li>
            <li>React</li>
            <li>Spring</li>
            <li>Quarkus</li>
          </ul>
        </Card>

        <Card
          title="Tools"
          :icons="['screwdriver', 'code-pull-request', 'globe']"
        >
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  &--description {
    @extend .text-center;
    max-width: 40rem;
    margin: 4rem auto;
  }

  &--cardContainer {
    display: flex;
    gap: 2rem;

    * {
      flex-grow: 1;
      margin-top: 1rem;
    }
  }

  &--list {
    @extend .text-center;
  }
}
</style>
