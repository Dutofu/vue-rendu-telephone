<template>
    <div>
      <h2>Liste de Contacts</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          {{ contact.name }} - {{ contact.phoneNumber }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['contacts'],
  };
  </script>

  