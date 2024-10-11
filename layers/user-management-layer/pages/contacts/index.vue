<template>
  <div>Contacts</div>

  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <a :href="`/contacts/${contact.id}`">{{ contact.name }}</a>
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
