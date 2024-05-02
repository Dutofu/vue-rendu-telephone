<template>
  <div>
    <h2>Liste de Contacts</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.phoneNumber }}
        <button @click="callContact(contact)">Appeler</button>
      </li>
    </ul>

    <h2>Ajouter un Contact</h2>
    <form @submit.prevent="addContact">
      <div>
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="newContact.name" required>
      </div>
      <div>
        <label for="phoneNumber">Numéro de Téléphone:</label>
        <input type="text" id="phoneNumber" v-model="newContact.phoneNumber" required>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
import contactMethods from '../stores/contactMethods.js';

export default {
  data() {
    return {
      contacts: [
        { id: 1, name: "Romain Royer", phoneNumber: "123456789" },
        { id: 2, name: "Hugo Hodzaj", phoneNumber: "987654321" },
      ],
      newContact: {
        name: '',
        phoneNumber: ''
      }
    };
  },
  methods: contactMethods
};
</script>
