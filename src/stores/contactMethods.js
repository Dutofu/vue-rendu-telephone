export default {
    callContact(contact) {
      console.log("Appeler le contact :", contact);
      alert("Appel initié vers " + contact.name + " au numéro " + contact.phoneNumber);
    },
  
    addContact() {
      this.contacts.push({
        id: Date.now(),
        name: this.newContact.name,
        phoneNumber: this.newContact.phoneNumber
      });
  
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
  
      this.newContact = { name: '', phoneNumber: '' };
    }
  };
  