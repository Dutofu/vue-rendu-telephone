<script>
import { useCallStore } from "../stores/call.js";

export default {
  setup() {
        const callStore = useCallStore();

        const calls = callStore.calls;

        const callBack = (number) => {
            console.log(`Calling back ${number}`);
        };

        return {
            calls,
            callBack,
        };
    },
};
</script>

<template>
  <div>
    <h2>Historique des Appels</h2>
    <div v-for="call in calls" :key="call.date + call.time" class="call-item">
      <div>{{ call.display }}</div>
      <div>{{ call.date }}</div>
      <div>{{ call.time }}</div>
      <button @click="callBack(call.number)">Rappeler</button>
    </div>
  </div>
</template>


