<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{name}}</h1>
    <div>
      <p>Question 1:<input type="text"></p>
    </div>
    <div>{{empty_array_on_my_vue_page}}</div>
    <button v-on:click="csrAnalysis()">Do my cost-benefit analysis</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Get pumped for your Card app! Vue.js!",
      name: "Julia",
      empty_array_on_my_vue_page: []
    };
  },
  created: function() {
    // Anything inside of the `created:` function will run as soon as the page loads.
    console.log('Console.log message in the created');
    // What Brian says the axios lines are doing "Go to Rails app (axios) > go to index action (in your case it's the calculate_cost_benefit action: /api/calculate_cost_benefot) > take all the data (then function response) > print it out (console.log)"
    axios.post("/api/calculate_cost_benefit").then(response => {
      // console.log(response);
      // This next line will give you the render json hash from line ~351 in your credit_cards_controller.rb
      // this.empty_array_on_my_vue_page = response.data;
      // ^^I ended up commenting this out bc I didn't want the array to populate with a response before the params were sent.
    })
  },
  methods: {
    csrAnalysis: function() {
      console.log("Sending the user's inputs to the server...")
      // You need to...
      // get user inputs
      var params = {
        // THESE KEYS NEED TO MATCH WHAT'S IN YOUR CONTROLLER IN RAILS
        spending_total_all_credit_cards_monthly: 2300,
        spending_amount_movable_monthly: true, 
        spending_willing_to_change_credit_cards_monthly: "na", 
        spending_lyft_total_monthly: 80,
        personal_value_lyft_priority_airport_pickup_12mo: 60, 
        personal_value_lyft_cancel_ride_times_monthly: 0, 
        personal_value_lyft_lose_something_times_12mo: 1, 
        spending_meal_deliverly_total_monthly: 2,
        // #30
        // #0 
        spending_meal_deliverly_delivery_fee_monthly: 0, 
        spending_travel_flights_next_12mo: 4000, 
        // #800
        spending_travel_hotels_next_12mo: 0, 
        personal_value_travel_airport_lounge_access_12mo: 80, 
        personal_value_concierge_service: 20, 
        spending_dining_total_monthly: 450, 
        global_entry_boolean: false, 
        // #true
        tsa_pre_boolean: false,
        // #false
        personal_value_global_entry_and_tsa_pre: 50, 
        personal_value_global_entry: "na", 
        personal_value_tsa_pre: "na"
      }
      // send those to rails as params
      console.log("Doing the cost benefit analysis...")
        // Make a post request to where it needs to go in the Rails app:
        // First argument inside the () for the post request is the URL, the second one will be your params hash.
      axios.post("/api/calculate_cost_benefit", params).then(response => {
        console.log("Console logging the response.data:", response.data);
        this.empty_array_on_my_vue_page.push(response.data)
      })
      // add the response to the html page
    }
  }
};
</script>

