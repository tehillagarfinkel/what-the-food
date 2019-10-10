SearchFilter.create!(category: "Cuisine")
SearchFilter.create!(category: "Establishment type")
SearchFilter.create!(category: "Food type")
SearchFilter.create!(category: "Dietary restrictions")
SearchFilter.create!(category: "Review count")
SearchFilter.create!(category: "Rating")
SearchFilter.create!(category: "Price")

QuestionFormat.create!(format: "Multiple Choice")
QuestionFormat.create!(format: "Scale")
QuestionFormat.create!(format: "True or False")

# ----- Tom's Questions -------------------------------------------------------------------------------->
Question.create!(query: "Leave the gun, take the.... ?", question_format_id: 1)
Question.create!(query: "Did you enjoy the Sopranos final eipsode?", question_format_id: 3)
Question.create!(query: "On a scale of 1 to Hangry, how are you feeling?", question_format_id: 2)
Question.create!(query: "Early bird or night owl?", question_format_id: 3)
Question.create!(query: "How many wheels do you normally travel on?", question_format_id: 1)
Question.create!(query: "When you go to a friend's house, do you bring...?", question_format_id: 1)
Question.create!(query: "Budget buffet or feeling fancy?", question_format_id: 2)
Question.create!(query: "How many people know your middle name?", question_format_id: 1)
Question.create!(query: "Pick a color:", question_format_id: 1)
Question.create!(query: "What do you typically do with leftovers?", question_format_id: 1)
Question.create!(query: "How clean is your bathroom right now?", question_format_id: 2)
Question.create!(query: "If you received a free ticket to anywhere, where would you go?", question_format_id: 1)
Question.create!(query: "What is the worst sensation, of the following:", question_format_id: 1)
Question.create!(query: "Cheese or chocolate?", question_format_id: 3)
Question.create!(query: "Would you rather never add salt to anything again or never add sugar to anything again?", question_format_id: 3)
Question.create!(query: "Would you rather never be able to use condiments again or have to add condiments to everything you eat?", question_format_id: 3)
Question.create!(query: "Would you rather have to eat everything hot or have to eat everything cold?", question_format_id: 3)
Question.create!(query: "Breakfast or dinner?", question_format_id: 3)
Question.create!(query: "What item do you get EVERY TIME you go to the grocery store?", question_format_id: 1)
Question.create!(query: "Would you rather add chili pepper to everything you eat or add lemon juice to everything you eat?", question_format_id: 3)
Question.create!(query: "Wine or beer?", question_format_id: 3)
Question.create!(query: "How do you take your coffee?", question_format_id: 1)
Question.create!(query: "Do you always add to much salt to your food or too much pepper to your food?", question_format_id: 3)
Question.create!(query: "Would rather eat only cheese or only meat the rest of your life?", question_format_id: 3)

# ----- Tehilla's Questions -------------------------------------------------------------------------------->

Question.create!(query: "Would you rather eat the same thing every day or never be able to eat the same thing twice?", question_format_id: 3)
Question.create!(query: "If it meant you could save pizza from extinction, would you eat a cricket?", question_format_id: 3)
Question.create!(query: "Willing to walk or was today leg day?", question_format_id: 2)
Question.create!(query: "If you were responsible for choosing whether the world would have bagels or donuts, which one would you choose?", question_format_id: 3)
Question.create!(query: "How spicy do you like your food?", question_format_id: 1)
Question.create!(query: "Favorite reality TV show?", question_format_id: 1)
Question.create!(query: "Would you rather eat potatoes with every meal or rice with every meal?", question_format_id: 3)
Question.create!(query: "Of the following, what is your favorite fast food restaurant?", question_format_id: 1)
Question.create!(query: "Do you have a sweet tooth?", question_format_id: 3)
Question.create!(query: "What outfit are you wearing right now?", question_format_id: 1)
Question.create!(query: "How adventurous are you feeling?", question_format_id: 1)
Question.create!(query: "Which mythological creature do you wish were real?", question_format_id: 1)
Question.create!(query: "Do you have a sweet tooth?", question_format_id: 3)
Question.create!(query: "Which mythological creature do you wish were real?", question_format_id: 1)
Question.create!(query: "Do you grow your own herbs?", question_format_id: 3)
Question.create!(query: "What unusual food would you prefer?", question_format_id: 1)
Question.create!(query: "Favorite breakfast cereal:", question_format_id: 1)
Question.create!(query: "How high are you right now?", question_format_id: 2)
Question.create!(query: "Which type of movie would you rather see?", question_format_id: 1)
Question.create!(query: "Is bowling a sport?", question_format_id: 3)
Question.create!(query: "Pick a sport", question_format_id: 1)
Question.create!(query: "Pick an amusement park ride", question_format_id: 1)
Question.create!(query: "Which best describes your current mood?", question_format_id: 1)
Question.create!(query: "What's your favorite vegetable?", question_format_id: 1)
Question.create!(query: "Last minute reservation?", question_format_id: 3)
Question.create!(query: "How many slices of pizza can you eat in a single sitting?", question_format_id: 1)

# ----- Kayla's Questions -------------------------------------------------------------------------------->

Question.create!(query: "Which of these condiments would you never eat?", question_format_id: "1")
Question.create!(query: "Would you eat something you don't like if you were very hungry?", question_format_id: "3")
Question.create!(query: "Would you rather never be able to taste something sweet for the rest of your life, or never be able to taste something savory?", question_format_id: "3")
Question.create!(query: "Pick an animal", question_format_id: "1")
Question.create!(query: "If you had to choose, would you rather never eat fruit, or never eat vegetables?", question_format_id: "3")
Question.create!(query: "Which cake is best cake?", question_format_id: "1")
Question.create!(query: "You can only eat one flavor of ice cream for the rest of you life - which would it be?", question_format_id: "1")
Question.create!(query: "Are carbs a priority?", question_format_id: "3")
Question.create!(query: "What's for breakfast?", question_format_id: "1")
Question.create!(query: "Pick a pie:", question_format_id: "1")
Question.create!(query: "Favorite hot beverage?", question_format_id: "1")
Question.create!(query: "It's midnight. You're running to the fridge. What are you grabbing?", question_format_id: "1")
Question.create!(query: "Pick a sandwich:", question_format_id: "1")
Question.create!(query: "Favorite cocktail?", question_format_id: "1")
Question.create!(query: "Pick a soup:", question_format_id: "1")
Question.create!(query: "Pick a pasta:", question_format_id: "1")
Question.create!(query: "What's your starbucks order?", question_format_id: "1")
Question.create!(query: "How do you commute?", question_format_id: "1")
Question.create!(query: "What's your favorite season?", question_format_id: "1")
Question.create!(query: "You're going out. What's your preferred venue?", question_format_id: "1")
Question.create!(query: "You're stranded on a desert island and you have one meal you can eat for a year...what is it?", question_format_id: "1")
Question.create!(query: "Pick your essential, must-have ingredient:", question_format_id: "1")
Question.create!(query: "From Hard Rock Cafe to date night romance, what kind of atmosphere are you looking for?", question_format_id: "1")
Question.create!(query: "What do you like on your bagel?", question_format_id: "1")
Question.create!(query: "If you could only have one topping on your pizza, what would it be?", question_format_id: "1")

# ----- Adam's Questions -------------------------------------------------------------------------------->

Question.create!(query: "Which do you prefer for a vacation: beach or foreign city?", question_format_id: 3)
Question.create!(query: "What's on your hot dog?", question_format_id: 1)
Question.create!(query: "Any little ones joining the party?", question_format_id: 3)
Question.create!(query: "How easily do you get lost without GPS?", question_format_id: 2)
Question.create!(query: "What do you dip your fries in?", question_format_id: 1)
Question.create!(query: "What do you put on your toast?", question_format_id: 1)
Question.create!(query: "Deep frying anything... what oil do you use?", question_format_id: 1)
Question.create!(query: "Best use of potatoes?", question_format_id: 1)
Question.create!(query: "Pancakes or waffles?", question_format_id: 3)
Question.create!(query: "Bacon?", question_format_id: 3)
Question.create!(query: "How do you like your fries?", question_format_id: 1)
Question.create!(query: "Favorite comedy?", question_format_id: 1)
Question.create!(query: "Seafood, meat, or veg?", question_format_id: 1)
Question.create!(query: "Dream city to live in?", question_format_id: 1)
Question.create!(query: "What age do you wish you could permanently be?", question_format_id: 1)
Question.create!(query: "Pick an outdoor ativity:", question_format_id: 1)
Question.create!(query: "How much do you tip your server/delivery driver? (Don't worry, we won't tell...)", question_format_id: 1)
Question.create!(query: "Biggest fear?", question_format_id: 1)
Question.create!(query: "Pick a smell:", question_format_id: 1)
Question.create!(query: "Which season of Chef's Table was your favorite?", question_format_id: 1)
Question.create!(query: "Dumplings or sandwiches?", question_format_id: 3)
Question.create!(query: "Pick a dystopian universe:", question_format_id: 1)

# ---------------- Tom's answers ---------------------------------------------

Answer.create!(option: "cannoli", question_id: 1, search_filter_id: 1)
Answer.create!(option: "manju (sweet bean cake)", question_id: 1, search_filter_id: 1)
Answer.create!(option: "peach cobbler", question_id: 1, search_filter_id: 1)
Answer.create!(option: "dulce de leche", question_id: 1, search_filter_id: 1)

Answer.create!(option: "Yes", question_id: 2, search_filter_id: 1)
Answer.create!(option: "No", question_id: 2, search_filter_id: 1)

Answer.create!(option: "Meh, I could eat", question_id: 3, search_filter_id: 3)
Answer.create!(option: "peckish", question_id: 3, search_filter_id: 3)
Answer.create!(option: "snappish", question_id: 3, search_filter_id: 3)
Answer.create!(option: "How many times can I refresh the ETA?", question_id: 3, search_filter_id: 3)
Answer.create!(option: "Tea and cake or death", question_id: 3, search_filter_id: 3)

Answer.create!(option: "Up before 4 AM", question_id: 4, search_filter_id: 3)
Answer.create!(option: "Day starts at 6", question_id: 4, search_filter_id: 3)
Answer.create!(option: "Noon is a happy medium", question_id: 4, search_filter_id: 3)
Answer.create!(option: "Out on the town for dinner", question_id: 4, search_filter_id: 3)
Answer.create!(option: "4 AM? You mean bedtime?", question_id: 4, search_filter_id: 3)

Answer.create!(option: "One", question_id: 5, search_filter_id: 3)
Answer.create!(option: "Two", question_id: 5, search_filter_id: 3)
Answer.create!(option: "Four", question_id: 5, search_filter_id: 3)
Answer.create!(option: "Zero", question_id: 5, search_filter_id: 3)

Answer.create!(option: "Booze for the host", question_id: 6, search_filter_id: 7)
Answer.create!(option: "Booze to share", question_id: 6, search_filter_id: 7)
Answer.create!(option: "Booze for yourself", question_id: 6, search_filter_id: 7)
Answer.create!(option: "Nothing, I drink their stock", question_id: 6, search_filter_id: 7)

Answer.create!(option: "Dirty water dogs", question_id: 7, search_filter_id: 7)
Answer.create!(option: "Local diner", question_id: 7, search_filter_id: 7)
Answer.create!(option: "The neighborhood standby", question_id: 7, search_filter_id: 7)
Answer.create!(option: "The best damn joint in town", question_id: 7, search_filter_id: 7)
Answer.create!(option: "Le Bernardin", question_id: 7, search_filter_id: 7)

Answer.create!(option: "No one", question_id: 8, search_filter_id: 2)
Answer.create!(option: "2-3 people", question_id: 8, search_filter_id: 2)
Answer.create!(option: "10-20 people", question_id: 8, search_filter_id: 2)
Answer.create!(option: "Literally everyone", question_id: 8, search_filter_id: 2)

Answer.create!(option: "Blue", question_id: 9, search_filter_id: 1)
Answer.create!(option: "Red", question_id: 9, search_filter_id: 1)
Answer.create!(option: "Orange", question_id: 9, search_filter_id: 1)
Answer.create!(option: "Green", question_id: 9, search_filter_id: 1)

Answer.create!(option: "Leftovers? What are leftovers?", question_id: 10, search_filter_id: 7)
Answer.create!(option: "Toss them in the fridge and then forget about them", question_id: 10, search_filter_id: 7)
Answer.create!(option: "Bring them to work for lunch the next day", question_id: 10, search_filter_id: 7)
Answer.create!(option: "Use them as ingredients for another meal", question_id: 10, search_filter_id: 7)

Answer.create!(option: "You could eat off the floor", question_id: 11, search_filter_id: 6)
Answer.create!(option: "Spic n' span", question_id: 11, search_filter_id: 6)
Answer.create!(option: "It could use a quick clean", question_id: 11, search_filter_id: 6)
Answer.create!(option: "Bit of a mess right now", question_id: 11, search_filter_id: 6)
Answer.create!(option: "What's growing in the sink?", question_id: 11, search_filter_id: 6)

Answer.create!(option: "Great Wall of China", question_id: 12, search_filter_id: 1)
Answer.create!(option: "Egyptian Pyramids", question_id: 12, search_filter_id: 1)
Answer.create!(option: "Eiffel Tower", question_id: 12, search_filter_id: 1)
Answer.create!(option: "The Alamo", question_id: 12, search_filter_id: 1)

Answer.create!(option: "Breaking a nail", question_id: 13, search_filter_id: 1)
Answer.create!(option: "Stepping in a mud pile", question_id: 13, search_filter_id: 1)
Answer.create!(option: "Burning your fingertip", question_id: 13, search_filter_id: 1)
Answer.create!(option: "Touching someone's chewed gum stuck under the table", question_id: 13, search_filter_id: 1)

Answer.create!(option: "Cheese", question_id: 14, search_filter_id: 1)
Answer.create!(option: "Chocolate", question_id: 14, search_filter_id: 1)

Answer.create!(option: "Salt", question_id: 15, search_filter_id: 1)
Answer.create!(option: "Sugar", question_id: 15, search_filter_id: 1)

Answer.create!(option: "Never", question_id: 16, search_filter_id: 1)
Answer.create!(option: "Always", question_id: 16, search_filter_id: 1)

Answer.create!(option: "Hot", question_id: 17, search_filter_id: 1)
Answer.create!(option: "Cold", question_id: 17, search_filter_id: 1)

Answer.create!(option: "Breakfast", question_id: 18, search_filter_id: 3)
Answer.create!(option: "Dinner", question_id: 18, search_filter_id: 3)

Answer.create!(option: "Coffee", question_id: 19, search_filter_id: 3)
Answer.create!(option: "A pastry", question_id: 19, search_filter_id: 3)
Answer.create!(option: "Meat", question_id: 19, search_filter_id: 3)
Answer.create!(option: "Avocados", question_id: 19, search_filter_id: 3)

Answer.create!(option: "Chili pepper", question_id: 20, search_filter_id: 1)
Answer.create!(option: "Lemon juice", question_id: 20, search_filter_id: 1)

Answer.create!(option: "Wine", question_id: 21, search_filter_id: 3)
Answer.create!(option: "Beer", question_id: 21, search_filter_id: 3)

Answer.create!(option: "Black. Is there any other way?", question_id: 22, search_filter_id: 3)
Answer.create!(option: "Splash of cream, no sugar", question_id: 22, search_filter_id: 3)
Answer.create!(option: "Sweet, no cream", question_id: 22, search_filter_id: 3)
Answer.create!(option: "Would you like some coffee with your sweetened milk?", question_id: 22, search_filter_id: 3)

Answer.create!(option: "Salt", question_id: 23, search_filter_id: 3)
Answer.create!(option: "Pepper", question_id: 23, search_filter_id: 3)

Answer.create!(option: "Cheese", question_id: 24, search_filter_id: 3)
Answer.create!(option: "Meat", question_id: 24, search_filter_id: 3)

# ---------------- Tehilla's answers ---------------------------------------------

Answer.create!(option: "same thing every day", question_id: 25, search_filter_id: 1)
Answer.create!(option: "never be able to eat the same thing twice", question_id: 25, search_filter_id: 1)

Answer.create!(option: "yes", question_id: 26, search_filter_id: 1)
Answer.create!(option: "no", question_id: 26, search_filter_id: 1)
Answer.create!(option: "yes", question_id: 26, search_filter_id: 1)

Answer.create!(option: "donuts", question_id: 28, search_filter_id: 1)
Answer.create!(option: "bagels", question_id: 28, search_filter_id: 1)
Answer.create!(option: "bagels", question_id: 28, search_filter_id: 1)

Answer.create!(option: "mild", question_id: 29, search_filter_id: 1)
Answer.create!(option: "medium", question_id: 29, search_filter_id: 1)
Answer.create!(option: "spicy", question_id: 29, search_filter_id: 1)
Answer.create!(option: "nuclear", question_id: 29, search_filter_id: 1)

Answer.create!(option: "Duck Dynasty", question_id: 30, search_filter_id: 1)
Answer.create!(option: "Bachelor/Bachelorette", question_id: 30, search_filter_id: 1)
Answer.create!(option: "Real Housewives of Wherever", question_id: 30, search_filter_id: 1)
Answer.create!(option: "Terrace House", question_id: 30, search_filter_id: 1)

Answer.create!(option: "potatoes", question_id: 31, search_filter_id: 1)
Answer.create!(option: "rice", question_id: 31, search_filter_id: 1)

Answer.create!(option: "Taco Bell", question_id: 32, search_filter_id: 1)
Answer.create!(option: "McDonalds", question_id: 32, search_filter_id: 1)
Answer.create!(option: "Chick-fil-A", question_id: 32, search_filter_id: 1)
Answer.create!(option: "I don't eat fast food", question_id: 32, search_filter_id: 1)

Answer.create!(option: "yes", question_id: 33, search_filter_id: 1)
Answer.create!(option: "no", question_id: 33, search_filter_id: 1)

Answer.create!(option: "business suit", question_id: 34, search_filter_id: 7)
Answer.create!(option: "jeans/T-shirt", question_id: 34, search_filter_id: 7)
Answer.create!(option: "pajamas", question_id: 34, search_filter_id: 7)
Answer.create!(option: "nothing", question_id: 34, search_filter_id: 7)

Answer.create!(option: "NOPE", question_id: 35, search_filter_id: 1)
Answer.create!(option: "I can be convinced", question_id: 35, search_filter_id: 1)
Answer.create!(option: "On Wednesdays I try new things", question_id: 35, search_filter_id: 1)
Answer.create!(option: "I'm up for something new", question_id: 35, search_filter_id: 1)
Answer.create!(option: "Surprise me", question_id: 35, search_filter_id: 1)

Answer.create!(option: "Ents", question_id: 36, search_filter_id: 1)
Answer.create!(option: "Hippogriffs", question_id: 36, search_filter_id: 1)
Answer.create!(option: "The Kraken", question_id: 36, search_filter_id: 1)
Answer.create!(option: "Chupacabra", question_id: 36, search_filter_id: 1)

Answer.create!(option: "yes", question_id: 39, search_filter_id: 2)
Answer.create!(option: "no", question_id: 39, search_filter_id: 2)

Answer.create!(option: "brain tacos", question_id: 40, search_filter_id: 1)
Answer.create!(option: "fried tarantula", question_id: 40, search_filter_id: 1)
Answer.create!(option: "grilled grasshoppers", question_id: 40, search_filter_id: 1)
Answer.create!(option: "fermented shark", question_id: 40, search_filter_id: 1)

Answer.create!(option: "Honey Bunches of Oats", question_id: 41, search_filter_id: 1)
Answer.create!(option: "Special", question_id: 41, search_filter_id: 1)
Answer.create!(option: "Cookie Crisp", question_id: 41, search_filter_id: 1)
Answer.create!(option: "Lucky Charms", question_id: 41, search_filter_id: 1)

Answer.create!(option: "Summer blockbuster", question_id: 43, search_filter_id: 1)
Answer.create!(option: "Small, indie-house flick", question_id: 43, search_filter_id: 1)
Answer.create!(option: "British period piece", question_id: 43, search_filter_id: 1)
Answer.create!(option: "Bollywood spectacle", question_id: 43, search_filter_id: 1)

Answer.create!(option: "yes", question_id: 44, search_filter_id: 7)
Answer.create!(option: "no", question_id: 44, search_filter_id: 7)

Answer.create!(option: "Cricket", question_id: 45, search_filter_id: 1)
Answer.create!(option: "Curling", question_id: 45, search_filter_id: 1)
Answer.create!(option: "Football", question_id: 45, search_filter_id: 1)
Answer.create!(option: "Jai Alai", question_id: 45, search_filter_id: 1)

Answer.create!(option: "Roller Coaster", question_id: 46, search_filter_id: 1)
Answer.create!(option: "Ferris Wheel", question_id: 46, search_filter_id: 1)
Answer.create!(option: "Merry-go-round", question_id: 46, search_filter_id: 1)
Answer.create!(option: "Spinning Teacups", question_id: 46, search_filter_id: 1)

Answer.create!(option: "Facepalm", question_id: 47, search_filter_id: 3)
Answer.create!(option: "Sad Face", question_id: 47, search_filter_id: 3)
Answer.create!(option: "Happy Face", question_id: 47, search_filter_id: 3)
Answer.create!(option: "Angry Face", question_id: 47, search_filter_id: 3)

Answer.create!(option: "broccoli", question_id: 48, search_filter_id: 1)
Answer.create!(option: "potatoes", question_id: 48, search_filter_id: 1)
Answer.create!(option: "radish", question_id: 48, search_filter_id: 1)
Answer.create!(option: "what's a vegetable?", question_id: 48, search_filter_id: 1)

Answer.create!(option: "I don't eat pizza", question_id: 50, search_filter_id: 1)
Answer.create!(option: "Two. That's it", question_id: 50, search_filter_id: 1)
Answer.create!(option: "Four... or maybe more", question_id: 50, search_filter_id: 1)
Answer.create!(option: "I'll eat the whole damn pizza", question_id: 50, search_filter_id: 1)

# ----- Kayla's Answers -------------------------------------------------------------------------------->

Answer.create!(option: "Ketchup", question_id: 51, search_filter_id: 1)
Answer.create!(option: "Mayonnaise", question_id: 51, search_filter_id: 1)
Answer.create!(option: "Barbecue Sauce", question_id: 51, search_filter_id: 1)
Answer.create!(option: "Sriracha", question_id: 51, search_filter_id: 1)

Answer.create!(option: "Yes", question_id: 52, search_filter_id: )
Answer.create!(option: "No", question_id: 52, search_filter_id: )

Answer.create!(option: "I don't have much of a sweet tooth anyway, bring on the savory.", question_id: 53, search_filter_id: 1)
Answer.create!(option: "All the sweets, all the time!", question_id: 53, search_filter_id: 1)

Answer.create!(option: "Sea Otter", question_id: 54, search_filter_id: 1)
Answer.create!(option: "Rabbit", question_id: 54, search_filter_id: 1)
Answer.create!(option: "Giraffe", question_id: 54, search_filter_id: 1)
Answer.create!(option: "Kangaroo", question_id: 54, search_filter_id: 1)

Answer.create!(option: "No more veggies? Sounds good to me!", question_id: 55, search_filter_id: 1)
Answer.create!(option: "I'm fine without the fruit, bring on the greens.", question_id: 55, search_filter_id: 1)

Answer.create!(option: "Chocolate", question_id: 56, search_filter_id: 1)
Answer.create!(option: "Carrot", question_id: 56, search_filter_id: 1)
Answer.create!(option: "Cheese", question_id: 56, search_filter_id: 1)
Answer.create!(option: "Coffee", question_id: 56, search_filter_id: 1)

Answer.create!(option: "Chocolate", question_id: 57, search_filter_id: 1)
Answer.create!(option: "Mint Chocolate Chip", question_id: 57, search_filter_id: 1)
Answer.create!(option: "Vanilla", question_id: 57, search_filter_id: 1)
Answer.create!(option: "Pistachio", question_id: 57, search_filter_id: 1)
Answer.create!(option: "Neapolitan", question_id: 57, search_filter_id: 1)
Answer.create!(option: "Cookie Dough", question_id: 57, search_filter_id: 1)

Answer.create!(option: "What else is there?", question_id: 58, search_filter_id: 1)
Answer.create!(option: "No, not really", question_id: 58, search_filter_id: 1)

Answer.create!(option: "Pancakes", question_id: 59, search_filter_id: 1)
Answer.create!(option: "Full English", question_id: 59, search_filter_id: 1)
Answer.create!(option: "Avocado Toast", question_id: 59, search_filter_id: 1)
Answer.create!(option: "Cold leftover pizza", question_id: 59, search_filter_id: 1)
Answer.create!(option: "Oatmeal", question_id: 59, search_filter_id: 1)
Answer.create!(option: "Rice and eggs", question_id: 59, search_filter_id: 1)

Answer.create!(option: "Pumpkin", question_id: 60, search_filter_id: 1)
Answer.create!(option: "Apple", question_id: 60, search_filter_id: 1)
Answer.create!(option: "Blueberry", question_id: 60, search_filter_id: 1)
Answer.create!(option: "Pot-", question_id: 60, search_filter_id: 1)

Answer.create!(option: "Coffee", question_id: 61, search_filter_id: 1)
Answer.create!(option: "Tea", question_id: 61, search_filter_id: 1)
Answer.create!(option: "Apple Cider", question_id: 61, search_filter_id: 1)
Answer.create!(option: "Hot Cocoa", question_id: 61, search_filter_id: 1)
Answer.create!(option: "Hot Toddy", question_id: 61, search_filter_id: 1)
Answer.create!(option: "Mulled Wine", question_id: 61, search_filter_id: 1)

Answer.create!(option: "Cake", question_id: 62, search_filter_id: 1)
Answer.create!(option: "An apple", question_id: 62, search_filter_id: 1)
Answer.create!(option: "Cookies", question_id: 62, search_filter_id: 1)
Answer.create!(option: "Chips", question_id: 62, search_filter_id: 1)
Answer.create!(option: "A sandwich", question_id: 62, search_filter_id: 1)
Answer.create!(option: "I have more self control than that.", question_id: 62, search_filter_id: 1)

Answer.create!(option: "Bahn Mi", question_id: 63, search_filter_id: 1)
Answer.create!(option: "Grilled Cheese", question_id: 63, search_filter_id: 1)
Answer.create!(option: "Meatball Sub", question_id: 63, search_filter_id: 1)
Answer.create!(option: "BLT", question_id: 63, search_filter_id: 1)
Answer.create!(option: "Tuna Melt", question_id: 63, search_filter_id: 1)
Answer.create!(option: "Cuban", question_id: 63, search_filter_id: 1)

Answer.create!(option: "Martini", question_id: 64, search_filter_id: 1)
Answer.create!(option: "Moscow Mule", question_id: 64, search_filter_id: 1)
Answer.create!(option: "Margarita", question_id: 64, search_filter_id: 1)
Answer.create!(option: "Mimosa", question_id: 64, search_filter_id: 1)

Answer.create!(option: "Matzoh Ball Soup", question_id: 65, search_filter_id: 1)
Answer.create!(option: "Chicken Noodle", question_id: 65, search_filter_id: 1)
Answer.create!(option: "Miso", question_id: 65, search_filter_id: 1)
Answer.create!(option: "Gazpacho", question_id: 65, search_filter_id: 1)
Answer.create!(option: "French Onion", question_id: 65, search_filter_id: 1)
Answer.create!(option: "Lentil", question_id: 65, search_filter_id: 1)

Answer.create!(option: "Macaroni", question_id: 66, search_filter_id: 1)
Answer.create!(option: "Udon", question_id: 66, search_filter_id: 1)
Answer.create!(option: "Spaghetti", question_id: 66, search_filter_id: 1)
Answer.create!(option: "Soba", question_id: 66, search_filter_id: 1)
Answer.create!(option: "Lo Mein", question_id: 66, search_filter_id: 1)
Answer.create!(option: "Orzo", question_id: 66, search_filter_id: 1)

Answer.create!(option: "PSL", question_id: 67, search_filter_id: 1)
Answer.create!(option: "Drip, blonde roast, no cream or sugar", question_id: 67, search_filter_id: 1)
Answer.create!(option: "Caramel Macchiato", question_id: 67, search_filter_id: 1)
Answer.create!(option: "Frappuccino", question_id: 67, search_filter_id: 1)
Answer.create!(option: "Iced Chai", question_id: 67, search_filter_id: 1)
Answer.create!(option: "Cold Brew", question_id: 67, search_filter_id: 1)

Answer.create!(option: "Drive", question_id: 68, search_filter_id: 1)
Answer.create!(option: "Public Transportation", question_id: 68, search_filter_id: 1)
Answer.create!(option: "Walk", question_id: 68, search_filter_id: 1)
Answer.create!(option: "Bike", question_id: 68, search_filter_id: 1)
Answer.create!(option: "Uber", question_id: 68, search_filter_id: 1)
Answer.create!(option: "Commute?  Do you mean the shuffle from my bed to my desk?", question_id: 68, search_filter_id: 1)

Answer.create!(option: "Spring", question_id: 69, search_filter_id: 1)
Answer.create!(option: "Summer", question_id: 69, search_filter_id: 1)
Answer.create!(option: "Fall", question_id: 69, search_filter_id: 1)
Answer.create!(option: "Winter", question_id: 69, search_filter_id: 1)

Answer.create!(option: "Neighborhood watering hole", question_id: 70, search_filter_id: 2)
Answer.create!(option: "Piano Bar", question_id: 70, search_filter_id: 2)
Answer.create!(option: "The latest and greatest cocktail lounge", question_id: 70, search_filter_id: 2)
Answer.create!(option: "Movie theater", question_id: 70, search_filter_id: 2)
Answer.create!(option: "Club hopping!", question_id: 70, search_filter_id: 2)
Answer.create!(option: "My couch", question_id: 70, search_filter_id: 2)

Answer.create!(option: "Drunken noodles", question_id: 71, search_filter_id: 1)
Answer.create!(option: "Samosas", question_id: 71, search_filter_id: 1)
Answer.create!(option: "Cake", question_id: 71, search_filter_id: 1)
Answer.create!(option: "Pizza", question_id: 71, search_filter_id: 1)
Answer.create!(option: "Sushi", question_id: 71, search_filter_id: 1)
Answer.create!(option: "Fish and Chips", question_id: 71, search_filter_id: 1)

Answer.create!(option: "Onion", question_id: 72, search_filter_id: 1)
Answer.create!(option: "Chili Pepper", question_id: 72, search_filter_id: 1)
Answer.create!(option: "Eggs", question_id: 72, search_filter_id: 1)
Answer.create!(option: "Meat", question_id: 72, search_filter_id: 1)
Answer.create!(option: "Garlic", question_id: 72, search_filter_id: 1)
Answer.create!(option: "Spinach", question_id: 72, search_filter_id: 1)

Answer.create!(option: "Egg and heese.", question_id: 74, search_filter_id: 1)
Answer.create!(option: "Cream cheese schmear, lox and all the fixings.", question_id: 74, search_filter_id: 1)
Answer.create!(option: "Butter.", question_id: 74, search_filter_id: 1)
Answer.create!(option: "I don't eat bagels.", question_id: 74, search_filter_id: 1)

Answer.create!(option: "Pepperoni", question_id: 75, search_filter_id: 1)
Answer.create!(option: "Olives", question_id: 75, search_filter_id: 1)
Answer.create!(option: "Pineapple", question_id: 75, search_filter_id: 1)
Answer.create!(option: "Mushrooms", question_id: 75, search_filter_id: 1)

# -------------- Adam's answers----------------------------------------->

Answer.create!(option: "Beach", question_id: 76, search_filter_id: 1)
Answer.create!(option: "Foreign city", question_id: 76, search_filter_id: 1)

Answer.create!(option: "Sauerkraut", question_id: 77, search_filter_id: 1)
Answer.create!(option: "Cheese", question_id: 77, search_filter_id: 1)
Answer.create!(option: "Chili", question_id: 77, search_filter_id: 1)
Answer.create!(option: "Mustard", question_id: 77, search_filter_id: 1)
Answer.create!(option: "Ketchup", question_id: 77, search_filter_id: 1)
Answer.create!(option: "Grilled Onions", question_id: 77, search_filter_id: 1)

Answer.create!(option: "Kids", question_id: 78, search_filter_id: 7)
Answer.create!(option: "No Kids", question_id: 78, search_filter_id: 7)

Answer.create!(option: "Never been lost in my life", question_id: 79, search_filter_id: 7)
Answer.create!(option: "I'm lost right now!", question_id: 79, search_filter_id: 7)

Answer.create!(option: "Ketchup", question_id: 80, search_filter_id: 2)
Answer.create!(option: "BBQ Sauce", question_id: 80, search_filter_id: 2)
Answer.create!(option: "Ranch", question_id: 80, search_filter_id: 2)
Answer.create!(option: "Mayo", question_id: 80, search_filter_id: 2)

Answer.create!(option: "Butter", question_id: 81, search_filter_id: 1)
Answer.create!(option: "Butter", question_id: 81, search_filter_id: 1)
Answer.create!(option: "Jam", question_id: 81, search_filter_id: 1)
Answer.create!(option: "Peanut Butter", question_id: 81, search_filter_id: 1)
Answer.create!(option: "Marmite", question_id: 81, search_filter_id: 1)
Answer.create!(option: "Nothing", question_id: 81, search_filter_id: 1)

Answer.create!(option: "Duck Fat", question_id: 82, search_filter_id: 7)
Answer.create!(option: "Whatever oil is available", question_id: 82, search_filter_id: 7)
Answer.create!(option: "Vegetable Oil", question_id: 82, search_filter_id: 7)
Answer.create!(option: "I don't eat fried food", question_id: 82, search_filter_id: 7)

Answer.create!(option: "Gnocchi", question_id: 83, search_filter_id: 1)
Answer.create!(option: "Pierogis", question_id: 83, search_filter_id: 7)
Answer.create!(option: "French Fries", question_id: 83, search_filter_id: 7)
Answer.create!(option: "Baked with Fresh Herbs", question_id: 83, search_filter_id: 7)

Answer.create!(option: "Pancakes", question_id: 84, search_filter_id: 2)
Answer.create!(option: "Waffles", question_id: 84, search_filter_id: 2)

Answer.create!(option: "Bacon makes EVERYTHING better!", question_id: 85, search_filter_id: 4)
Answer.create!(option: "Bacon makes me ill", question_id: 85, search_filter_id: 4)

Answer.create!(option: "Shoestring", question_id: 86, search_filter_id: 2)
Answer.create!(option: "Waffle", question_id: 86, search_filter_id: 2)
Answer.create!(option: "Chipped", question_id: 86, search_filter_id: 2)
Answer.create!(option: "Curly", question_id: 86, search_filter_id: 2)

Answer.create!(option: "Ace Ventura", question_id: 87, search_filter_id: 1)
Answer.create!(option: "Mean Girls", question_id: 87, search_filter_id: 1)
Answer.create!(option: "Animal House", question_id: 87, search_filter_id: 1)
Answer.create!(option: "Airplane", question_id: 87, search_filter_id: 1)
Answer.create!(option: "Bridesmaids", question_id: 87, search_filter_id: 1)
Answer.create!(option: "The Big Lebowski", question_id: 87, search_filter_id: 1)

Answer.create!(option: "Seafood", question_id: 88, search_filter_id: 1)
Answer.create!(option: "Meat", question_id: 88, search_filter_id: 1)
Answer.create!(option: "Veggies", question_id: 88, search_filter_id: 1)
Answer.create!(option: "All three, please!", question_id: 88, search_filter_id: 1)

Answer.create!(option: "Paris", question_id: 89, search_filter_id: 1)
Answer.create!(option: "Tokyo", question_id: 89, search_filter_id: 1)
Answer.create!(option: "Dubai", question_id: 89, search_filter_id: 1)
Answer.create!(option: "Vienna", question_id: 89, search_filter_id: 1)
Answer.create!(option: "Milan", question_id: 89, search_filter_id: 1)

Answer.create!(option: "15", question_id: 90, search_filter_id: 2)
Answer.create!(option: "25", question_id: 90, search_filter_id: 2)
Answer.create!(option: "35", question_id: 90, search_filter_id: 2)
Answer.create!(option: "45", question_id: 90, search_filter_id: 2)
Answer.create!(option: "55", question_id: 90, search_filter_id: 2)
Answer.create!(option: "66", question_id: 90, search_filter_id: 2)

Answer.create!(option: "Camping/Fishing", question_id: 91, search_filter_id: 2)
Answer.create!(option: "Outdoor Shopping Mall", question_id: 91, search_filter_id: 2)
Answer.create!(option: "Gardening", question_id: 91, search_filter_id: 2)
Answer.create!(option: "Skateboarding", question_id: 91, search_filter_id: 2)

Answer.create!(option: "5-10%", question_id: 92, search_filter_id: 2)
Answer.create!(option: "11-15%", question_id: 92, search_filter_id: 2)
Answer.create!(option: "16-20%", question_id: 92, search_filter_id: 2)
Answer.create!(option: ">20%", question_id: 92, search_filter_id: 2)
Answer.create!(option: "Tip? HA!", question_id: 92, search_filter_id: 2)

Answer.create!(option: "Close Spaces", question_id: 93, search_filter_id: 2)
Answer.create!(option: "Nature (outdoors/bugs/etc.)", question_id: 93, search_filter_id: 2)
Answer.create!(option: "Heights", question_id: 93, search_filter_id: 2)
Answer.create!(option: "Public Speaking", question_id: 93, search_filter_id: 2)

Answer.create!(option: "Barnyard", question_id: 94, search_filter_id: 1)
Answer.create!(option: "Cut Grass", question_id: 94, search_filter_id: 1)
Answer.create!(option: "Campfire", question_id: 94, search_filter_id: 1)
Answer.create!(option: "Asphalt", question_id: 94, search_filter_id: 1)

Answer.create!(option: "Season 1", question_id: 95, search_filter_id: 1)
Answer.create!(option: "Season 2", question_id: 95, search_filter_id: 1)
Answer.create!(option: "Season 3", question_id: 95, search_filter_id: 1)
Answer.create!(option: "Season 4", question_id: 95, search_filter_id: 1)
Answer.create!(option: "Season 5", question_id: 95, search_filter_id: 1)
Answer.create!(option: "I don't watch Chef's Table", question_id: 94, search_filter_id: 1)

Answer.create!(option: "Dumplings", question_id: 96, search_filter_id: 1)
Answer.create!(option: "Sandwiches", question_id: 96, search_filter_id: 1)

Answer.create!(option: "Mad Max", question_id: 97, search_filter_id: 2)
Answer.create!(option: "Hunger Games", question_id: 97, search_filter_id: 2)
Answer.create!(option: "The Handmaid's Tale", question_id: 97, search_filter_id: 2)
Answer.create!(option: "Zombieland", question_id: 97, search_filter_id: 2)



