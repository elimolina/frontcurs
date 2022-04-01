const app = new Vue({
  el: "#app",
  data: {
    goals: [],
    enteredValue: ''
  },
  methods: {
    addGoal() {
      console.log("Goal añadido" + this.enteredValue);
      this.goals.pusch(this.enteredValue);
      this.enteredValue= '';
    }
  }
});