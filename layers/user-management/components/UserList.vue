<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <NuxtLink :to="`/contacts/${contact.id}`">{{ contact.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const contacts = [
  {
    id: 1,
    name: "Foo"
  },
  {
    id: 2,
    name: "Bar"
  }
]
</script>
