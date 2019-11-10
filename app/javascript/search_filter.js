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
  { name: "Beer Garden", answer_ids: [106, 136, 143, 145] },
  { name: "Beer Hall", answer_ids: [106, 142, 143, 145] },
  { name: "Bistros", answer_ids: [84, 102, 105, 133] },
  { name: "Brasseries", answer_ids: [] },
  { name: "Breakfast & Brunch", answer_ids: [86, 87, 89, 100, 103, 106, 109, 124, 125, 126, 127] },
  { name: "Buffets", answer_ids: [106, 144] },
  { name: "Cafes", answer_ids: [86, 96, 109] },
  { name: "Themed Cafes", answer_ids: [96, 110, 115] },
  { name: "Cafeteria", answer_ids: [81, 87, 89, 100, 106, 151, 152, 153] },
  { name: "Canteen", answer_ids: [151, 152, 153] },
  { name: "Chicken Shop", answer_ids: [101] },
  { name: "Comfort Food", answer_ids: [81, 86, 94, 100, 101, 107, 108, 109, 136, 138, 139, 140, 141, 142, 143, 145] },
  { name: "Creperies", answer_ids: [103, 110] },
  { name: "Delis", answer_ids: [89, 106] },
  { name: "Diners", answer_ids: [] },
  { name: "Dinner Theater", answer_ids: [144, 128, 129, 131] },
  { name: "Fast Food", answer_ids: [83, 94, 99, 100, 101, 107, 109, 119, 121, 138, 139, 140, 141, 149, 151, 152, 153] },
  { name: "Food Court", answer_ids: [83, 94, 99, 100, 101, 107, 119, 138, 139, 140, 141, 149] },
  { name: "Food Stands", answer_ids: [83, 94, 99, 100, 101, 107, 119, 138, 139, 140, 141, 149] },
  { name: "Gastropubs", answer_ids: [136, 143, 145] },
  { name: "Hong Kong Style Cafe", answer_ids: [96] },
  { name: "Conveyor Belt Sushi", answer_ids: [116] },
  { name: "Milk Bars", answer_ids: [126, 127, 142, 143, 145] },
  { name: "Night Food", answer_ids: [94] },
  { name: "Noodles", answer_ids: [] },
  { name: "Open Sandwiches", answer_ids: [] },
  { name: "Parent Cafes", answer_ids: [] },
  { name: "Pop-Up Restaurants", answer_ids: [106, 115] },
  { name: "Poutineries", answer_ids: [] },
  { name: "Pub Food", answer_ids: [101, 133] },
  { name: "Soul Food", answer_ids: [83, 87, 94] },
  { name: "Steakhouses", answer_ids: [84, 102, 93, 95, 117] },
  { name: "Supper Clubs", answer_ids: [105] },
  { name: "Sushi Bars", answer_ids: [110, 116] },
  { name: "Tapas Bars", answer_ids: [110] },
  { name: "Wok", answer_ids: [] },
  {
    name: "Afghan",
    answer_ids: [82, 113, 134]
  },
  {
    name: "African",
    answer_ids: []
  },
  {
    name: "South African",
    answer_ids: [104, 110, 134]
  },
  {
    name: "American",
    answer_ids: [81, 83, 87, 89, 100, 109, 121, 132, 136]
  },

  {
    name: "Arabian",
    answer_ids: [90, 104, 112]
  },
  {
    name: "Argentine",
    answer_ids: [91, 111]
  },
  {
    name: "Armenian",
    answer_ids: [82, 90, 103, 112]
  },
  {
    name: "Australian",
    answer_ids: [89, 93, 111, 134, 135]
  },
  {
    name: "Austrian",
    answer_ids: [89, 93, 112]
  },
  {
    name: "Bangladeshi",
    answer_ids: [82, 92, 98, 113, 134]
  },
  {
    name: "ּBelgian",
    answer_ids: [89]
  },
  {
    name: "Flemish",
    answer_ids: [89, 110]
  },
  {
    name: "Brazilian",
    answer_ids: [91, 104, 137]
  },
  {
    name: "British",
    answer_ids: [89, 97, 109, 132, 134, 130]
  },
  {
    name: "Bulgarian",
    answer_ids: [90, 111]
  },
  {
    name: "Cajun/Creole",
    answer_ids: [82, 113]
  },
  {
    name: "Cambodian",
    answer_ids: [92, 98, 112]
  },
  {
    name: "Canadian",
    answer_ids: [89, 109, 135]
  },
  {
    name: "Caribbean",
    answer_ids: [90, 111]
  },
  {
    name: "Dominican",
    answer_ids: [90]
  },
  {
    name: "Haitian",
    answer_ids: [112]
  },
  {
    name: "Puerto Rican",
    answer_ids: [104]
  },
  {
    name: "Chilean",
    answer_ids: [91]
  },
  {
    name: "Chinese",
    answer_ids: [91, 96, 98, 110]
  },
  {
    name: "Cuban",
    answer_ids: [82, 99, 110, 137]
  },
  {
    name: "Czech",
    answer_ids: [111]
  },
  {
    name: "Danish",
    answer_ids: [111]
  },
  {
    name: "Eastern European",
    answer_ids: [89, 97, 110]
  },
  {
    name: "Ethiopian",
    answer_ids: [92, 103]
  },
  {
    name: "Filipino",
    answer_ids: [82, 98, 111]
  },
  {
    name: "French",
    answer_ids: [89]
  },
  {
    name: "Georgian",
    answer_ids: [82, 113]
  },
  {
    name: "German",
    answer_ids: [89, 132]
  },
  {
    name: "Greek",
    answer_ids: [90, 104]
  },
  {
    name: "Guamanian",
    answer_ids: [82, 99, 113]
  },
  {
    name: "Hawaiian",
    answer_ids: [89, 103]
  },
  {
    name: "Honduran",
    answer_ids: [82, 99, 113]
  },
  {
    name: "Hungarian",
    answer_ids: [89, 104, 111]
  },
  {
    name: "Iberian",
    answer_ids: [90, 112]
  },
  {
    name: "Indian",
    answer_ids: [92, 98]
  },
  {
    name: "Indonesian",
    answer_ids: [92, 98, 113]
  },
  {
    name: "Irish",
    answer_ids: [90, 134]
  },
  {
    name: "Israeli",
    answer_ids: [90]
  },
  {
    name: "Italian",
    answer_ids: [83, 90, 104]
  },

  {
    name: "Japanese",
    answer_ids: [96, 111, 134, 116]
  },
  {
    name: "Japanese Curry",
    answer_ids: [82, 91, 112]
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
    answer_ids: [91, 96, 111, 132]
  },
  {
    name: "Latin American",
    answer_ids: [91]
  },
  {
    name: "Colombian",
    answer_ids: [91, 132, 137]
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
    answer_ids: [82, 92, 98, 113]
  },
  {
    name: "Mediterranean",
    answer_ids: [90]
  },
  {
    name: "Mexican",
    answer_ids: [91, 99, 120]
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
    answer_ids: [90, 111]
  },
  {
    name: "Moroccan",
    answer_ids: [91]
  },
  {
    name: "New Mexican Cuisine",
    answer_ids: [91, 111, 120]
  },
  {
    name: "New Zealand",
    answer_ids: [82, 93, 134]
  },
  {
    name: "Nicaraguan",
    answer_ids: [82, 91]
  },
  {
    name: "Oriental",
    answer_ids: [91, 111]
  },
  {
    name: "Pakistani",
    answer_ids: [82, 113, 134]
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
    answer_ids: [91, 113]
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
    answer_ids: [89, 97, 134]
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
    answer_ids: [116]
  },
  {
    name: "Singaporean",
    answer_ids: [82, 91]
  },
  {
    name: "Slovakian",
    answer_ids: [82, 89, 113]
  },
  {
    name: "Somali",
    answer_ids: [82, 92, 113]
  },
  {
    name: "Southern",
    answer_ids: [89]
  },
  {
    name: "Spanish",
    answer_ids: [91, 111, 112, 120, 137]
  },
  {
    name: "Sri Lankan",
    answer_ids: [82, 92, 98, 113, 134]
  },
  {
    name: "Swedish",
    answer_ids: [89, 132]
  },
  {
    name: "Swiss Food",
    answer_ids: [89, 95]
  },
  {
    name: "Syrian",
    answer_ids: [91, 103]
  },
  {
    name: "Taiwanese",
    answer_ids: [82]
  },
  {
    name: "Tex-Mex",
    answer_ids: [90, 111, 120]
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
    answer_ids: [90, 111]
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
    answer_ids: [89, 98, 112]
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
    answer_ids: [118, 146, 147, 148, 150, 114]
  },
  {
    name: "Vegetarian",
    answer_ids: [87, 118, 146, 147, 148, 150, 114]
  },
  {
    name: "Asian Fusion",
    answer_ids: []
  },
  {
    name: "Baguettes",
    answer_ids: [89, 104, 124]
  },
  {
    name: "Barbeque",
    answer_ids: [90, 93, 94]
  },
  {
    name: "Pancakes",
    answer_ids: [89, 96, 103, 126]
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
    answer_ids: [91, 100, 104, 122]
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
    answer_ids: [89, 104, 131, 116]
  },
  {
    name: "Flatbread",
    answer_ids: [87, 89]
  },
  {
    name: "Fondue",
    answer_ids: [126]
  },
  {
    name: "Game Meat",
    answer_ids: [93, 117]
  },
  {
    name: "Hot Dogs",
    answer_ids: [90, 94, 123]
  },
  {
    name: "Ramen",
    answer_ids: []
  },
  {
    name: "Tempura",
    answer_ids: [121, 138, 139, 140, 141, 149]
  },
  {
    name: "Kebab",
    answer_ids: [91]
  },
  {
    name: "Live/Raw Food",
    answer_ids: [123, 116]
  },
  {
    name: "Meatballs",
    answer_ids: [93, 123, 117]
  },
  {
    name: "Falafel",
    answer_ids: [90, 104]
  },
  {
    name: "Tacos",
    answer_ids: [91, 94, 99, 104, 120]
  },
  {
    name: "Pita",
    answer_ids: [89, 124]
  },
  {
    name: "Pizza",
    answer_ids: [83, 94, 151, 152, 153]
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
    answer_ids: [89, 97, 104]
  },
  {
    name: "Rice",
    answer_ids: [89, 98, 99, 104]
  },
  {
    name: "Rotisserie Chicken",
    answer_ids: [89, 100, 101]
  },
  {
    name: "Salad",
    answer_ids: [89, 102, 118, 125, 146, 147, 148, 150, 114]
  },
  {
    name: "Sandwiches",
    answer_ids: [89, 101, 124]
  },
  {
    name: "Schnitzel",
    answer_ids: [89, 101, 121]
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
    answer_ids: [89, 96, 103, 126]
  },
  {
    name: "Wraps",
    answer_ids: [89, 101, 104]
  }
];
