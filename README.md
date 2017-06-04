Read me for print shop group project!

**Link to deployed app:**
(https://squadorange.github.io/PrintShopClient/)

**Link to deployed back-end:**
(https://secure-chamber-31638.herokuapp.com/

**Link to front-end repo:**
(https://github.com/SquadOrange/PrintShopClient)

**Link to back-end repo:**
(https://github.com/SquadOrange/printshopbackend)

By Maggie, Catherine, and Spencer!

Print Shop -- Description:
  Print shop is an online store where you can choose from 9 different prints to order, each of which costs $100.  You can order as many prints as you want.  You can add prints to the cart and then change the number of prints you order from the cart or remove the prints altogether.  Prints are purchased using the third party API stripe, and require only an email address and a valid credit card number. Stripe can only be used in test mode with the test credit card number 4242-4242-4242-4242 and an expiration date in the future.  This allows you to simulate purchasing the prints using stripe and clears the cart.

Technology used:
Express, Mongoose, Stripe, bodyParser, MongoDB, Html, Css, Handlebars, Javascript, JQuery, Node.js

Installation Instructions:
npm install should install all the necessary dependencies expect for stripe.  To install stripe please write ``` npm install stripe --save ``` in the command line.

More about the technolgoies used:
We used Stripe, which is a third party api, to manage the purchases of prints in the ecommerce print store.  We used the configuation of stripe that goes with the express framework.  Information from stripe's website on this set up process can be found here: https://stripe.com/docs/recipes/custom-checkout

 Initially we installed and used fetch to make the ajax call, but then we replaced it and made the call not using fetch, so fetch does not need to be installed.

 We used handlebars to display the print cart and print history data.

 General Approach:

 We started by representing prints as nested objects within a prints array in a cart in a buyers mongoDB document.  However, we found this made it difficult to update individual print attributes and display these prints using handlebars.  Although this approach felt very object oriented, and mirrored the way that one uses a store in real life, it ultimately made the data more difficult to use so we restarted with a new set up.

 We then changed to the current model that we have here, where there are many different collections, all of which reference the same user thought the _owner attribute, and require authentication.  We have a users collection, a prints collection, an orders collection, and a charges collection.

 If we were going to redo it a third time to optimize it we would make more reference keys, so that a cart of order would always point to onjects in a prints database, which would allow for changing the inventory easily and would then be able to automatically update the store based on what was the prints inventory.

User Stories:
  As a user, I can purchase as many prints as I want
	As a user, I can buy print online
	As a user, I can sign in and see prints I bought in the past
	As a user, I can sign in and see print I put in my cart but never purchased.
	As a user, I can see all the print before I sign in.
	As a user, I cannot add prints the shopping cart until I am successfully signed in.

ERD: https://drive.google.com/open?id=0B8QUtri9n-m_VG5SSjRuemUzOVU

Wireframe: https://drive.google.com/open?id=0B8QUtri9n-m_QzZsUUs0dmpRaTQ
