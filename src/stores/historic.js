export default {

  
    methods: {
      addToComposedNumber(number) {
        this.composedNumber += number.toString();
      },
      callNumber() {
        // ...
        this.$router.push({ path: '/call-history', props: { callLog: this.callLog }});
      }
    }
  };