<template>
  <section class="s-Greeting">
    <div class="s-Greeting--text">
      <h3>Hello, I am</h3>
      <h1>Rafael Neves</h1>
      <h2 class="mb-8 pb-4">Frontend Developer</h2>
      <p>Scroll down to read more about me</p>
    </div>
    <div class="s-Greeting--image">
      <img src="/public/me-1.png" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-Greeting {
  @extend .light-bg;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  &--image {
    margin-bottom: -6px;
  }
}
</style>
