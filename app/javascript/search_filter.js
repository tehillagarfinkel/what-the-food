// let options = [
//   {
//     name: "East Asian",
//     answer_ids: [1],
//   },
//   {
//     name: "Japan",
//     answer_ids: [1,4]
//   }
// ];

// options.filter(option => {
//   option.answer_ids.includes(answer_id);
// });

// format raw data as above

let options = [
  { name: "Beer Garden", answer_ids: [] },
  { name: "Beer Hall", answer_ids: [] },
  { name: "Bistros", answer_ids: [84, 102] },
  { name: "Brasseries", answer_ids: [] },
  { name: "Breakfast & Brunch", answer_ids: [86, 87, 89, 100] },
  { name: "Buffets", answer_ids: [] },
  { name: "Cafes", answer_ids: [86, 96] },
  { name: "Themed Cafes", answer_ids: [96] },
  { name: "Cafeteria", answer_ids: [81, 87, 89, 100] },
  { name: "Canteen", answer_ids: [] },
  { name: "Chicken Shop", answer_ids: [101] },
  { name: "Comfort Food", answer_ids: [81, 86, 94, 100, 101] },
  { name: "Creperies", answer_ids: [] },
  { name: "Delis", answer_ids: [89] },
  { name: "Diners", answer_ids: [] },
  { name: "Dinner Theater", answer_ids: [] },
  { name: "Fast Food", answer_ids: [83, 94, 99, 100, 101] },
  { name: "Food Court", answer_ids: [83, 94, 99, 100, 101] },
  { name: "Food Stands", answer_ids: [83, 94, 99, 100, 101] },
  { name: "Gastropubs", answer_ids: [] },
  { name: "Hong Kong Style Cafe", answer_ids: [96] },
  { name: "Conveyor Belt Sushi", answer_ids: [] },
  { name: "Milk Bars", answer_ids: [] },
  { name: "Night Food", answer_ids: [94] },
  { name: "Noodles", answer_ids: [] },
  { name: "Open Sandwiches", answer_ids: [] },
  { name: "Parent Cafes", answer_ids: [] },
  { name: "Pop-Up Restaurants", answer_ids: [] },
  { name: "Poutineries", answer_ids: [] },
  { name: "Pub Food", answer_ids: [101] },
  { name: "Soul Food", answer_ids: [83, 87, 94] },
  { name: "Steakhouses", answer_ids: [84, 102, 93, 95] },
  { name: "Supper Clubs", answer_ids: [] },
  { name: "Sushi Bars", answer_ids: [] },
  { name: "Tapas Bars", answer_ids: [] },
  { name: "Wok", answer_ids: [] },
  {
    name: "Afghan",
    answer_ids: [82]
  },
  {
    name: "African",
    answer_ids: []
  },
  {
    name: "South African",
    answer_ids: []
  },
  {
    name: "American",
    answer_ids: [81, 83, 87, 89, 100]
  },
  {
    name: "Afghan",
    answer_ids: [82]
  },
  {
    name: "Arabian",
    answer_ids: [90]
  },
  {
    name: "Argentine",
    answer_ids: [91]
  },
  {
    name: "Armenian",
    answer_ids: [82, 90]
  },
  {
    name: "Australian",
    answer_ids: [89, 93]
  },
  {
    name: "Austrian",
    answer_ids: [89, 93]
  },
  {
    name: "Bangladeshi",
    answer_ids: [82, 92, 98]
  },
  {
    name: "ּBelgian",
    answer_ids: [89]
  },
  {
    name: "Flemish",
    answer_ids: [89]
  },
  {
    name: "Brazilian",
    answer_ids: [91]
  },
  {
    name: "British",
    answer_ids: [89, 97]
  },
  {
    name: "Bulgarian",
    answer_ids: [90]
  },
  {
    name: "Cajun/Creole",
    answer_ids: [82]
  },
  {
    name: "Cambodian",
    answer_ids: [92, 98]
  },
  {
    name: "Canadian",
    answer_ids: [89]
  },
  {
    name: "Caribbean",
    answer_ids: [90]
  },
  {
    name: "Dominican",
    answer_ids: [90]
  },
  {
    name: "Haitian",
    answer_ids: []
  },
  {
    name: "Puerto Rican",
    answer_ids: []
  },
  {
    name: "Chilean",
    answer_ids: [91]
  },
  {
    name: "Chinese",
    answer_ids: [91, 96, 98]
  },
  {
    name: "Cuban",
    answer_ids: [82, 99]
  },
  {
    name: "Czech",
    answer_ids: []
  },
  {
    name: "Danish",
    answer_ids: []
  },
  {
    name: "Eastern European",
    answer_ids: [89, 97]
  },
  {
    name: "Ethiopian",
    answer_ids: [92]
  },
  {
    name: "Filipino",
    answer_ids: [82, 98]
  },
  {
    name: "French",
    answer_ids: [89]
  },
  {
    name: "Georgian",
    answer_ids: [82]
  },
  {
    name: "German",
    answer_ids: [89]
  },
  {
    name: "Greek",
    answer_ids: [90]
  },
  {
    name: "Guamanian",
    answer_ids: [82, 99]
  },
  {
    name: "Hawaiian",
    answer_ids: [89]
  },
  {
    name: "Honduran",
    answer_ids: [82, 99]
  },
  {
    name: "Hungarian",
    answer_ids: [89]
  },
  {
    name: "Iberian",
    answer_ids: [90]
  },
  {
    name: "Indian",
    answer_ids: [92, 98]
  },
  {
    name: "Indonesian",
    answer_ids: [92, 98]
  },
  {
    name: "Irish",
    answer_ids: [90]
  },
  {
    name: "Israeli",
    answer_ids: [90]
  },
  {
    name: "Italian",
    answer_ids: [83, 90]
  },

  {
    name: "Japanese",
    answer_ids: [96]
  },
  {
    name: "Japanese Curry",
    answer_ids: [82, 91]
  },
  {
    name: "Western Style Japanese Food",
    answer_ids: [96]
  },
  {
    name: "Jewish",
    answer_ids: [89]
  },
  {
    name: "Korean",
    answer_ids: [91, 96]
  },
  {
    name: "Latin American",
    answer_ids: [91]
  },
  {
    name: "Colombian",
    answer_ids: [91]
  },
  {
    name: "Salvadoran",
    answer_ids: [91]
  },
  {
    name: "Venezuelan",
    answer_ids: [91]
  },
  {
    name: "Malaysian",
    answer_ids: [82, 92, 98]
  },
  {
    name: "Mediterranean",
    answer_ids: [90]
  },
  {
    name: "Mexican",
    answer_ids: [91, 99]
  },
  {
    name: "Middle Eastern",
    answer_ids: [90]
  },
  {
    name: "Egyptian",
    answer_ids: [82]
  },
  {
    name: "Lebanese",
    answer_ids: [82, 90]
  },
  {
    name: "Modern Australian",
    answer_ids: [89]
  },
  {
    name: "Modern European",
    answer_ids: [89]
  },
  {
    name: "Mongolian",
    answer_ids: [90]
  },
  {
    name: "Moroccan",
    answer_ids: [91]
  },
  {
    name: "New Mexican Cuisine",
    answer_ids: [91]
  },
  {
    name: "New Zealand",
    answer_ids: [82, 93]
  },
  {
    name: "Nicaraguan",
    answer_ids: [82, 91]
  },
  {
    name: "Oriental",
    answer_ids: [91]
  },
  {
    name: "Pakistani",
    answer_ids: [82]
  },
  {
    name: "Pan Asian",
    answer_ids: [91, 96]
  },
  {
    name: "Parma",
    answer_ids: [82]
  },
  {
    name: "Persian/Iranian",
    answer_ids: [91]
  },
  {
    name: "Peruvian",
    answer_ids: [91]
  },
  {
    name: "Polynesian",
    answer_ids: [82, 93]
  },
  {
    name: "Portuguese",
    answer_ids: [91]
  },
  {
    name: "Romanian",
    answer_ids: [82, 89]
  },
  {
    name: "Russian",
    answer_ids: [89, 97]
  },
  {
    name: "Scandinavian",
    answer_ids: [89]
  },
  {
    name: "Scottish",
    answer_ids: [82, 89]
  },
  {
    name: "Seafood",
    answer_ids: []
  },
  {
    name: "Singaporean",
    answer_ids: [82, 91]
  },
  {
    name: "Slovakian",
    answer_ids: [82, 89]
  },
  {
    name: "Somali",
    answer_ids: [82, 92]
  },
  {
    name: "Southern",
    answer_ids: [89]
  },
  {
    name: "Spanish",
    answer_ids: [91]
  },
  {
    name: "Sri Lankan",
    answer_ids: [82, 92, 98]
  },
  {
    name: "Swedish",
    answer_ids: [89]
  },
  {
    name: "Swiss Food",
    answer_ids: [89, 95]
  },
  {
    name: "Syrian",
    answer_ids: [91]
  },
  {
    name: "Taiwanese",
    answer_ids: [82]
  },
  {
    name: "Tex-Mex",
    answer_ids: [90]
  },
  {
    name: "Thai",
    answer_ids: [90, 98]
  },
  {
    name: "Traditional Norwegian",
    answer_ids: [89, 95]
  },
  {
    name: "Traditional Swedish",
    answer_ids: [89]
  },
  {
    name: "Turkish",
    answer_ids: [90]
  },
  {
    name: "Ukrainian",
    answer_ids: [91, 97]
  },
  {
    name: "Uzbek",
    answer_ids: [82, 92]
  },
  {
    name: "Vietnamese",
    answer_ids: [89, 98]
  },
  {
    name: "Gluten-Free",
    answer_ids: []
  },
  {
    name: "Halal",
    answer_ids: []
  },
  {
    name: "Kosher",
    answer_ids: []
  },
  {
    name: "Vegan",
    answer_ids: []
  },
  {
    name: "Vegetarian",
    answer_ids: [87]
  },
  {
    name: "Asian Fusion",
    answer_ids: []
  },
  {
    name: "Baguettes",
    answer_ids: [89]
  },
  {
    name: "Barbeque",
    answer_ids: [90, 93, 94]
  },
  {
    name: "Pancakes",
    answer_ids: [89, 96]
  },
  {
    name: "Burgers",
    answer_ids: [89, 100, 93, 94]
  },
  {
    name: "Cheesesteaks",
    answer_ids: [89, 100, 102, 93]
  },
  {
    name: "Chicken Wings",
    answer_ids: [91, 100]
  },
  {
    name: "Curry Sausage",
    answer_ids: [92]
  },
  {
    name: "Dumplings",
    answer_ids: []
  },
  {
    name: "Fish & Chips",
    answer_ids: [89]
  },
  {
    name: "Flatbread",
    answer_ids: [87, 89]
  },
  {
    name: "Fondue",
    answer_ids: []
  },
  {
    name: "Game Meat",
    answer_ids: [93]
  },
  {
    name: "Hot Dogs",
    answer_ids: [90, 94]
  },
  {
    name: "Ramen",
    answer_ids: []
  },
  {
    name: "Tempura",
    answer_ids: []
  },
  {
    name: "Kebab",
    answer_ids: [91]
  },
  {
    name: "Live/Raw Food",
    answer_ids: []
  },
  {
    name: "Meatballs",
    answer_ids: [93]
  },
  {
    name: "Falafel",
    answer_ids: [90]
  },
  {
    name: "Tacos",
    answer_ids: [91, 94, 99]
  },
  {
    name: "Pita",
    answer_ids: [89]
  },
  {
    name: "Pizza",
    answer_ids: [83, 94]
  },
  {
    name: "Polish",
    answer_ids: [89, 97]
  },
  {
    name: "Pierogis",
    answer_ids: [89]
  },
  {
    name: "Potatoes",
    answer_ids: [89, 97]
  },
  {
    name: "Rice",
    answer_ids: [89, 98, 99]
  },
  {
    name: "Rotisserie Chicken",
    answer_ids: [89, 100, 101]
  },
  {
    name: "Salad",
    answer_ids: [89, 102]
  },
  {
    name: "Sandwiches",
    answer_ids: [89, 101]
  },
  {
    name: "Schnitzel",
    answer_ids: [89, 101]
  },
  {
    name: "Soup",
    answer_ids: []
  },
  {
    name: "Tapas/Small Plates",
    answer_ids: [90]
  },
  {
    name: "Waffles",
    answer_ids: [89, 96]
  },
  {
    name: "Wraps",
    answer_ids: [89, 101]
  }
];
