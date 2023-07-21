<template>
  <div class="shareCard">
    <h1 class="title">
      <span>Hi, I'm 你的饮月君 👋</span>
    </h1>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const description = ref("");

async function getRandomJoke() {
  try {
    const response = await fetch("/joke.json");
    const { data: jokes } = await response.json();
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  } catch (error) {
    console.error("Error fetching jokes:", error);
    return null;
  }
}

onMounted(async () => {
  const joke = await getRandomJoke();
  if (joke) {
    description.value = joke;
  } else {
    description.value = "Oops! Something went wrong. Unable to fetch jokes.";
  }
});
</script>

<style scoped>
.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}
.description {
  margin: 1em 0;
  white-space: pre-line;
}
</style>
