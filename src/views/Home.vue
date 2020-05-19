<template>
  <div class="home">
    <section id="one">
      <div class="container">
        <header class="major" id="one">
          <h2>Chase Sapphire Reserve:</h2> 
          <!-- <p>I want my questions to look like this. But maybe with the h2 coloring same as above. <a href="http://html5up.net">Link here</a>.</p> -->
        </header>
      </div>
    </section>
    <!-- copied from App.vue below -->
    <section>
      <!-- <h4>Form</h4> -->
      <form method="post" action="#" v-on:submit.prevent="csrAnalysis()">
        <div class="row gtr-uniform">
          <!-- where my router-view was in App.vue -->
          <div>
      <p>How much do you generally spend on your personal credit cards combined/month?
        <input type="text" v-model="spending_total_all_credit_cards_monthly"></p>
      <p>Could you move that full amount of spending each month onto one new credit card if it benefitted you?
        <!-- <select name="global-entry-boolean">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select> -->
        <!-- <input type="text" v-model="spending_amount_movable_monthly"> -->
        <!-- their radio buttons that don't work -->
        <!-- <div class="col-6 col-12-medium">
          <input type="radio" value="true" id="demo-priority-low" name="amount-movable" checked>
          <label for="demo-priority-low">Yes</label>
        </div>
        <div class="col-6 col-12-medium">
          <input type="radio" value="false" id="demo-priority-normal" name="amount-movable">
          <label for="demo-priority-normal">No</label>
        </div> -->
        <!-- <div>full amount movable? {{}}</div> -->
      <!-- end of radio buttons -->
      </p>
      <p>If no, how much of your current spending per month would you be willing to divert to this credit card?
        <input type="text" v-model="spending_willing_to_change_credit_cards_monthly"></p>
      <p>How much on average do you spend per month on Lyft?
        <input type="text" v-model="spending_lyft_total_monthly"></p>
      <p>If you had to put a dollar value for yourself personally on getting free priority from Lyft in airport pick ups for a whole year, how much would that be worth to you in dollars? (If this is something you would never spend money on, you should say zero.)
        <input type="text" v-model="personal_value_lyft_priority_airport_pickup_12mo"></p>
      <p>How many times a month on average do you think you cancel a Lyft ride?
        <input type="text" v-model="personal_value_lyft_cancel_ride_times_monthly"></p>
      <p>How many times a year do you leave something in a Lyft?
        <input type="text" v-model="personal_value_lyft_lose_something_times_12mo"></p>
      <p>How much do you spend per month on meal delivery services such as Doordash, Postmates, or Grubhub?
        <input type="text" v-model="spending_meal_deliverly_total_monthly"></p>
      <p>How much do you spend per month on JUST DELIVERY FEES from meal delivery services such as Doordash, Postmates, or Grubhub?
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
        <!-- <input type="text" v-model="global_entry_boolean"> -->
        <!-- their dropdown -->
        <select v-model="global_entry_boolean" name="global-entry-boolean">
          <!-- i am deleting "" from the select div. not sure if I need an id attribute -->
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <!-- end of their dropdown -->
        <!-- their radio buttons that don't work -->
        <!-- <div class="col-6 col-12-medium">
          {{global_entry_boolean}}
          <input type="radio">
          <input v-model="global_entry_boolean" value="true" type="radio" name="global-entry-boolean" checked>
          <label for="demo-priority-low">Yes</label>
        </div>
        <div class="col-6 col-12-medium">
          <input v-model="global_entry_boolean" value="false" type="radio" name="global-entry-boolean">
          <label for="demo-priority-normal">No</label>
        </div> -->
      </p>
      <!-- end of radio buttons -->
      <p>If no, do you already have TSA pre-check?
        <!-- their dropdown -->
        <select v-model="tsa_pre_boolean" name="tsa-pre-boolean">
          <!-- i am deleting "" from the select div. not sure if I need an id attribute -->
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <!-- end of their dropdown -->
        <!-- <input type="text" v-model="tsa_pre_boolean"> -->
        <!-- their radio buttons that don't work -->
        <!-- <div class="col-6 col-12-medium">
          <input v-model="tsa_pre_boolean" value="true" type="radio" name="tsa-pre-boolean" checked>
          <label for="demo-priority-low">Yes</label>
        </div>
        <div class="col-6 col-12-medium">
          <input v-model="tsa_pre_boolean" value="false" type="radio" name="tsa-pre-boolean">
          <label for="demo-priority-normal">No</label>
        </div> -->
        <!-- end of radio buttons -->
      </p>
      <p>If you don't have either yet, if you had to put a dollar value for yourself personally, how much would pre-check plus global entry be worth to you in dollars if it lasted for 5 years? If this is something you would never spend money on, you should say zero.
        <input type="text" v-model="personal_value_global_entry_and_tsa_pre"></p>
      <p>If you have pre-check but not global entry, how much would you pay to just get global entry?
        <input type="text" v-model="personal_value_global_entry"></p>
      <p>If you don't have either, and TSA+Global entry is worth less than $100 to you, how much is just pre-check for 5 years worth?
        <input type="text" v-model="personal_value_tsa_pre"></p>
    </div>  
    <div>Benefit: ${{empty_array_on_my_vue_page.benefit}}</div>
    <div>Cost: ${{empty_array_on_my_vue_page.cost}}</div>
    <div>Net Benefit: ${{empty_array_on_my_vue_page.netbenefit}}</div>
    <div>{{empty_array_on_my_vue_page.final_message}}</div>
    <!-- my button that works -->
    <!-- <button v-on:click="csrAnalysis()">Do my cost-benefit analysis</button> -->
    <!-- their pretty turquoise button that isn't working for me -->
    <ul class="actions fit" id="two">
			<li><a v-on:click="csrAnalysis()" class="button primary fit">Analyze my costs and benefits</a></li>
		</ul>
    <!-- end of turquoise button -->
    <p id="three">
      <h3><a href="https://creditcards.chase.com/a1/sapphire/goreserve?CELL=6W2Q">Apply here for the Chase Sapphire Reserve*</a></h3>
    </p>
          <!-- radio buttons -->
            <!-- left third radio -->
          <div class="col-6 col-12-medium">
            <input type="radio" id="demo-priority-low" name="demo-priority" checked>
            <label for="demo-priority-low">Yes</label>
          </div>
            <!-- middle third radio -->
          <div class="col-6 col-12-medium">
            <input type="radio" id="demo-priority-normal" name="demo-priority">
            <label for="demo-priority-normal">No</label>
          </div>
          <!-- end of textarea with POST request button and reset button-->
        </div>
      </form>
    </section>
    <!-- <section id="one">
      <div class="container">
        <header class="major">
          This is a paragraph in the "major" class
          <h1>h1 inside header</h1>
          <h2>h2 inside header</h2>
          <h3>h3 inside header</h3>
        </header>
      </div>
    </section> -->
    <!-- End of Form Section!!!! -->
    <!-- coppied from App.vue above -->
    <!-- removed my form questions from here -->
    <!-- I want the results to go here -->
    <!-- <section id="one">
								<div class="container">
									<header class="major">
										<h2>{{empty_array_on_my_vue_page}}</h2>
										<p>I want my questions to look like this. But maybe with the h2 coloring same as above. <a href="http://html5up.net">Link here</a>.</p>
									</header>
									<p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
								</div>
							</section> -->
    <!-- disclaimers below -->
    <div class="row" id="four">
      <div class="col-12 col-12-xsmall">
        <h5>About this analysis</h5>
        <ul class="alt">
          <li>This app was built to do a conservative cost-benefit analysis based on this credit card's fee and what a user already spends. The user may also derive benefit from additional perks of this card including but not limited to the following:</li>
          <li>Additional Lyft Pink Membership benefits such as three free ride cancellations per month, reimbursed lost and found fees, and three complimentary 30 minute scooter or Lyft bike rides per month.</li>
          <li>Additional DashPass benefits from DoorDash including free delivery on orders over $12, and $60 in additional DoorDash credits to use in 2021. </li>
          <li>*This analysis assumes the user will be getting this credit card for the first time, and is therefore eligible for the standard sign-on bonus. </li>
          <li>This analysis was done under the assumption that credit card balances are paid in full at the end of each payment period.</li>
          <li>Carrying a balance on any credit card can lead to high interest payments and a lower credit score for the card holder, which generally has a negative financial impact on the cardholder. In general, paying off all other outstanding credit card debt is recommended before opening an additional credit card.</li>
          <li>The information provided by this app is educational only, and is not financial advice.</li>
        </ul>
      </div>
    </div>
    <!-- end of disclaimers -->
    <!-- <h2>Analysis built by {{name}}</h2>
    <h2>Copy written by {{name}}</h2> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "",
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
    // What Brian says the axios lines are doing "Go to Rails app (axios) > go to index action (in your case it's the calculate_cost_benefit action: /api/calculate_cost_benefit) > take all the data (then function response) > print it out (console.log)"
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
        this.empty_array_on_my_vue_page = response.data
      })
      // add the response to the html page
    }
  }
};
</script>

