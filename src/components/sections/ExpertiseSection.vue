<script lang="ts" setup>
import Card from "../atoms/Card.vue";
</script>

<template>
  <section>
    <div class="s-Expertise padded-space">
      <h3 class="text-center mb-4">About me</h3>
      <div class="s-Expertise--description">
        <div class="mb-2">
          I am a {{ new Date().getFullYear() - 1998 }}-year-old
          <b>Frontend Developer</b> driven by a passion for crafting
          <b>high-quality</b>, <b>reliable</b>, and <b>scalable</b> code.
        </div>
        <div>
          My expertise lies in designing exceptional user interfaces that
          effectively address challenging real-world problems and requirements.
          Additionally, I am enthusiastic about mentoring and guiding aspiring
          engineers.
        </div>
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
  min-height: 0;
}

.s-Expertise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @include maxLG {
    margin-top: 7rem;
  }

  &--description {
    @extend .text-center;
    max-width: 40rem;
    margin: 4rem auto;
  }

  &--cardContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    * {
      flex-grow: 1;
      margin-top: 1rem;

      @include maxLG {
        min-width: 50%;
      }
    }
  }

  &--list {
    @extend .text-center;
  }
}
</style>
