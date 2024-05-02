<script>
export default {
  data() {
    return {
      composedNumber: ''
    };
  },
  methods: {
    addToComposedNumber(number) {
          this.composedNumber += number.toString();
          this.$emit("call-number", number);
      },  

      callNumber() {
          this.$emit("call");
      },
      onCall() {
    const now = new Date();
    const matchingContact = this.contactStore.contacts.find(
        (contact) => contact.number === this.composedNumber
    );
    const call = {
        display: matchingContact
            ? matchingContact.name
            : this.composedNumber,
        number: this.composedNumber, 
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
    };
    this.callStore.addCall(call);
    this.composedNumber = ""; 
}

  }
};
</script>

<template>
  <div>
    <div>{{ composedNumber }}</div>
    <div>
      <button @click="addToComposedNumber(1)">1</button>
      <button @click="addToComposedNumber(2)">2</button>
      <button @click="addToComposedNumber(3)">3</button>
    </div>
    <div>
      <button @click="addToComposedNumber(4)">4</button>
      <button @click="addToComposedNumber(5)">5</button>
      <button @click="addToComposedNumber(6)">6</button>
    </div>
    <div>
      <button @click="addToComposedNumber(7)">7</button>
      <button @click="addToComposedNumber(8)">8</button>
      <button @click="addToComposedNumber(9)">9</button>
    </div>
    <div>
      <button @click="addToComposedNumber(0)">0</button>
    </div>
    <div>
      <button @click="callNumber">Appeler</button>
    </div>
  </div>
</template>

<style scoped>
button{
  width: 40px;
  height: 40px;
}
</style>