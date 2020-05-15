<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <!-- <p>Question 1:<input type="text" v-model="spending_total_all_credit_cards_monthly"></p>
      <p>Question 2:<input type="text" v-model="spending_amount_movable_monthly"></p> -->
      <!-- gfwhdasvhihifjjbdvadjaj -->
      <p>How much do you generally spend on your personal credit cards combined/month?
        <input type="text" v-model="spending_total_all_credit_cards_monthly"></p>
      <p>Could you move that full amount of spending each month onto one new credit card if it benefitted you?
        <input type="text" v-model="spending_amount_movable_monthly"></p>
      <p>If no, How much of your current spending per month would you be willing to divert to this credit card?
        <input type="text" v-model="spending_willing_to_change_credit_cards_monthly"></p>
      <p>How much on average do you spend per month on Lyft?
        <input type="text" v-model="spending_lyft_total_monthly"></p>
      <p>If you had to put a dollar value for yourself personally on getting free priority from Lyft in airport pick ups for a whole year, how much would that be worth to you in dollars? If this is something you would never spend money on, you should say zero.
        <input type="text" v-model="personal_value_lyft_priority_airport_pickup_12mo"></p>
      <p>How many times a month on average do you think you cancel a Lyft ride?
        <input type="text" v-model="personal_value_lyft_cancel_ride_times_monthly"></p>
      <p>How many times a year do you leave something in a Lyft?
        <input type="text" v-model="personal_value_lyft_lose_something_times_12mo"></p>
      <p>How much would you say you spend per year on meal delivery services such as Doordash, Postmates, or Grubhub?
        <input type="text" v-model="spending_meal_deliverly_total_monthly"></p>
      <p>How much would you say you spend per year on JUST DELIVERY FEES from meal delivery services such as Doordash, Postmates, or Grubhub?
        <input type="text" v-model="spending_meal_deliverly_delivery_fee_monthly"></p>
      <p>How much do you plan to spend in the next 12 months on flights? If you don't have a plan, then how much do you think you've spent historically on average each year?
        <input type="text" v-model="spending_travel_flights_next_12mo"></p>
      <p>How much do you plan to spend in the next 12 months on hotels?
        <input type="text" v-model="spending_travel_hotels_next_12mo"></p>
      <p>If you had to put a dollar value for yourself personally on free luxury airport lounge access that included access to free food and beverages for a whole year, how much would that be worth to you in dollars? If this is something you would never spend money on, you should say zero.
        <input type="text" v-model="personal_value_travel_airport_lounge_access_12mo"></p>
      <p>How many dollars do you think complimentary Concierge Service for a year is worth to you? If this is something you would never spend money on, you should say zero.
        <input type="text" v-model="personal_value_concierge_service"></p>
      <p>How much do you tend to spend per month dining out?
        <input type="text" v-model="spending_dining_total_monthly"></p>
      <p>Do you already have Global Entry?
        <input type="text" v-model="global_entry_boolean"></p>
      <p>If no, do you already have TSA pre-check?
        <input type="text" v-model="tsa_pre_boolean"></p>
      <p>If you don't have either yet, if you had to put a dollar value for yourself personally how much would pre-check plus global entry be worth to you in dollars if it lasted for 5 years? If this is something you would never spend money on, you should say zero.
        <input type="text" v-model="personal_value_global_entry_and_tsa_pre"></p>
      <p>If you have pre-check but not global entry, how much would you pay to just get global entry?
        <input type="text" v-model="personal_value_global_entry"></p>
      <p>If you don't have either, and TSA+Global entry is worth less than $100 to you, how much is just pre-check for 5 years worth?
        <input type="text" v-model="personal_value_tsa_pre"></p>
    </div>
    <div>{{empty_array_on_my_vue_page}}</div>
    <!-- my button that works -->
    <button v-on:click="csrAnalysis()">Do my cost-benefit analysis</button>
    <!-- their pretty turquoise button -->
    <ul class="actions fit">
			<li><a href="#" class="button primary fit">Analyze my costs and benefits</a></li>
		</ul>
    <!-- end of turquoise button -->
    <h2>This app built by {{name}}</h2>
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
      name: "Julia de Lorimier",
      empty_array_on_my_vue_page: [],
      spending_total_all_credit_cards_monthly: "",
      spending_amount_movable_monthly: "",
      spending_willing_to_change_credit_cards_monthly: "",
      spending_lyft_total_monthly: "",
      personal_value_lyft_priority_airport_pickup_12mo: "",
      personal_value_lyft_cancel_ride_times_monthly: "",
      personal_value_lyft_lose_something_times_12mo: "",
      spending_meal_deliverly_total_monthly: "",
      spending_meal_deliverly_delivery_fee_monthly: "",
      spending_travel_flights_next_12mo: "",
      spending_travel_hotels_next_12mo: "",
      personal_value_travel_airport_lounge_access_12mo: "",
      personal_value_concierge_service: "",
      spending_dining_total_monthly: "",
      global_entry_boolean: "",
      tsa_pre_boolean: "",
      personal_value_global_entry_and_tsa_pre: "",
      personal_value_global_entry: "",
      personal_value_tsa_pre: ""
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
      console.log("spending_total_all_credit_cards_monthly: " + this.spending_total_all_credit_cards_monthly)
      console.log("spending_amount_movable_monthly: " + this.spending_amount_movable_monthly)
      console.log("spending_willing_to_change_credit_cards_monthly: " + this.spending_willing_to_change_credit_cards_monthly)
      console.log("spending_lyft_total_monthly: " + this.spending_lyft_total_monthly)
      console.log("personal_value_lyft_priority_airport_pickup_12mo: " + this.personal_value_lyft_priority_airport_pickup_12mo)
      console.log("personal_value_lyft_cancel_ride_times_monthly: " + this.personal_value_lyft_cancel_ride_times_monthly)
      console.log("personal_value_lyft_lose_something_times_12mo: " + this.personal_value_lyft_lose_something_times_12mo)
      console.log("spending_meal_deliverly_total_monthly: " + this.spending_meal_deliverly_total_monthly)
      console.log("spending_meal_deliverly_delivery_fee_monthly: " + this.spending_meal_deliverly_delivery_fee_monthly)
      console.log("spending_travel_flights_next_12mo: " + this.spending_travel_flights_next_12mo)
      console.log("spending_travel_hotels_next_12mo: " + this.spending_travel_hotels_next_12mo)
      console.log("personal_value_travel_airport_lounge_access_12mo: " + this.personal_value_travel_airport_lounge_access_12mo)
      console.log("personal_value_concierge_service: " + this.personal_value_concierge_service)
      console.log("spending_dining_total_monthly: " + this.spending_dining_total_monthly)
      console.log("global_entry_boolean: " + this.global_entry_boolean)
      console.log("tsa_pre_boolean: " + this.tsa_pre_boolean)
      console.log("personal_value_global_entry_and_tsa_pre: " + this.personal_value_global_entry_and_tsa_pre)
      console.log("personal_value_global_entry: " + this.personal_value_global_entry)
      console.log("personal_value_tsa_pre: " + this.personal_value_tsa_pre)
      console.log("Sending the user's inputs to the server...")
      // You need to...
      // get user inputs
      var params = {
        // THESE KEYS NEED TO MATCH WHAT'S IN YOUR CONTROLLER IN RAILS
        spending_total_all_credit_cards_monthly: this.spending_total_all_credit_cards_monthly,
        spending_amount_movable_monthly: this.spending_amount_movable_monthly, 
        spending_willing_to_change_credit_cards_monthly: this.spending_willing_to_change_credit_cards_monthly, 
        spending_lyft_total_monthly: this.spending_lyft_total_monthly,
        personal_value_lyft_priority_airport_pickup_12mo: this.personal_value_lyft_priority_airport_pickup_12mo, 
        personal_value_lyft_cancel_ride_times_monthly: this.personal_value_lyft_cancel_ride_times_monthly, 
        personal_value_lyft_lose_something_times_12mo: this.personal_value_lyft_lose_something_times_12mo, 
        spending_meal_deliverly_total_monthly: this.spending_meal_deliverly_total_monthly,
        // #30
        // #0 
        spending_meal_deliverly_delivery_fee_monthly: this.spending_meal_deliverly_delivery_fee_monthly, 
        spending_travel_flights_next_12mo: this.spending_travel_flights_next_12mo, 
        // #800
        spending_travel_hotels_next_12mo: this.spending_travel_hotels_next_12mo, 
        personal_value_travel_airport_lounge_access_12mo: this.personal_value_travel_airport_lounge_access_12mo, 
        personal_value_concierge_service: this.personal_value_concierge_service, 
        spending_dining_total_monthly: this.spending_dining_total_monthly, 
        global_entry_boolean: this.global_entry_boolean, 
        // #true
        tsa_pre_boolean: this.tsa_pre_boolean,
        // #false
        personal_value_global_entry_and_tsa_pre: this.personal_value_global_entry_and_tsa_pre, 
        personal_value_global_entry: this.personal_value_global_entry, 
        personal_value_tsa_pre: this.personal_value_tsa_pre
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

