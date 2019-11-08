// let options = [
//   {
//     name: "East Asian",
//     answer_ids: [1],
//   },,
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
  { name: "Bistros", answer_ids: [] },
  { name: "Brasseries", answer_ids: [] },
  { name: "Breakfast & Brunch", answer_ids: [] },
  { name: "Buffets", answer_ids: [] },
  { name: "Cafes", answer_ids: [] },
  { name: "Themed Cafes", answer_ids: [] },
  { name: "Cafeteria", answer_ids: [] },
  { name: "Canteen", answer_ids: [] },
  { name: "Chicken Shop", answer_ids: [] },
  { name: "Comfort Food", answer_ids: [] },
  { name: "Creperies", answer_ids: [] },
  { name: "Delis", answer_ids: [] },
  { name: "Diners", answer_ids: [] },
  { name: "Dinner Theater", answer_ids: [] },
  { name: "Fast Food", answer_ids: [] },
  { name: "Food Court", answer_ids: [] },
  { name: "Food Stands", answer_ids: [] },
  { name: "Gastropubs", answer_ids: [] },
  { name: "Hong Kong Style Cafe", answer_ids: [] },
  { name: "Conveyor Belt Sushi", answer_ids: [] },
  { name: "Milk Bars", answer_ids: [] },
  { name: "Night Food", answer_ids: [] },
  { name: "Noodles", answer_ids: [] },
  { name: "Open Sandwiches", answer_ids: [] },
  { name: "Parent Cafes", answer_ids: [] },
  { name: "Pop-Up Restaurants", answer_ids: [] },
  { name: "Poutineries", answer_ids: [] },
  { name: "Pub Food", answer_ids: [] },
  { name: "Soul Food", answer_ids: [] },
  { name: "Steakhouses", answer_ids: [] },
  { name: "Supper Clubs", answer_ids: [] },
  { name: "Sushi Bars", answer_ids: [] },
  { name: "Tapas Bars", answer_ids: [] },
  { name: "Wok", answer_ids: [] },
  {
    name: "Afghan",
    answer_ids: []
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
    answer_ids: []
  },
  {
    name: "Afghan",
    answer_ids: []
  },
  {
    name: "Arabian",
    answer_ids: []
  },
  {
    name: "Argentine",
    answer_ids: []
  },
  {
    name: "Armenian",
    answer_ids: []
  },
  {
    name: "Australian",
    answer_ids: []
  },
  {
    name: "Austrian",
    answer_ids: []
  },
  {
    name: "Bangladeshi",
    answer_ids: []
  },
  {
    name: "ּBelgian",
    answer_ids: []
  },
  {
    name: "Flemish",
    answer_ids: []
  },
  {
    name: "Brazilian",
    answer_ids: []
  },
  {
    name: "British",
    answer_ids: []
  },
  {
    name: "Bulgarian",
    answer_ids: []
  },
  {
    name: "Cajun/Creole",
    answer_ids: []
  },
  {
    name: "Cambodian",
    answer_ids: []
  },
  {
    name: "Canadian",
    answer_ids: []
  },
  {
    name: "Caribbean",
    answer_ids: []
  },
  {
    name: "Dominican",
    answer_ids: []
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
    answer_ids: []
  },
  {
    name: "Chinese",
    answer_ids: []
  },
  {
    name: "Cuban",
    answer_ids: []
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
    answer_ids: []
  },
  {
    name: "Ethiopian",
    answer_ids: []
  },
  {
    name: "Filipino",
    answer_ids: []
  },
  {
    name: "French",
    answer_ids: []
  },
  {
    name: "Georgian",
    answer_ids: []
  },
  {
    name: "German",
    answer_ids: []
  },
  {
    name: "Greek",
    answer_ids: []
  },
  {
    name: "Guamanian",
    answer_ids: []
  },
  {
    name: "Hawaiian",
    answer_ids: []
  },
  {
    name: "Honduran",
    answer_ids: []
  },
  {
    name: "Hungarian",
    answer_ids: []
  },
  {
    name: "Iberian",
    answer_ids: []
  },
  {
    name: "Indian",
    answer_ids: []
  },
  {
    name: "Indonesian",
    answer_ids: []
  },
  {
    name: "Irish",
    answer_ids: []
  },
  {
    name: "Israeli",
    answer_ids: []
  },
  {
    name: "Italian",
    answer_ids: []
  },

  {
    name: "Japanese",
    answer_ids: []
  },
  {
    name: "Japanese Curry",
    answer_ids: []
  },
  {
    name: "Western Style Japanese Food",
    answer_ids: []
  },
  {
    name: "Jewish",
    answer_ids: []
  },
  {
    name: "Korean",
    answer_ids: []
  },
  {
    name: "Latin American",
    answer_ids: []
  },
  {
    name: "Colombian",
    answer_ids: []
  },
  {
    name: "Salvadoran",
    answer_ids: []
  },
  {
    name: "Venezuelan",
    answer_ids: []
  },
  {
    name: "Malaysian",
    answer_ids: []
  },
  {
    name: "Mediterranean",
    answer_ids: []
  },
  {
    name: "Mexican",
    answer_ids: []
  },
  {
    name: "Middle Eastern",
    answer_ids: []
  },
  {
    name: "Egyptian",
    answer_ids: []
  },
  {
    name: "Lebanese",
    answer_ids: []
  },
  {
    name: "Modern Australian",
    answer_ids: []
  },
  {
    name: "Modern European",
    answer_ids: []
  },
  {
    name: "Mongolian",
    answer_ids: []
  },
  {
    name: "Moroccan",
    answer_ids: []
  },
  {
    name: "New Mexican Cuisine",
    answer_ids: []
  },
  {
    name: "New Zealand",
    answer_ids: []
  },
  {
    name: "Nicaraguan",
    answer_ids: []
  },
  {
    name: "Oriental",
    answer_ids: []
  },
  {
    name: "Pakistani",
    answer_ids: []
  },
  {
    name: "Pan Asian",
    answer_ids: []
  },
  {
    name: "Parma",
    answer_ids: []
  },
  {
    name: "Persian/Iranian",
    answer_ids: []
  },
  {
    name: "Peruvian",
    answer_ids: []
  },
  {
    name: "Polynesian",
    answer_ids: []
  },
  {
    name: "Portuguese",
    answer_ids: []
  },
  {
    name: "Romanian",
    answer_ids: []
  },
  {
    name: "Russian",
    answer_ids: []
  },
  {
    name: "Scandinavian",
    answer_ids: []
  },
  {
    name: "Scottish",
    answer_ids: []
  },
  {
    name: "Seafood",
    answer_ids: []
  },
  {
    name: "Singaporean",
    answer_ids: []
  },
  {
    name: "Slovakian",
    answer_ids: []
  },
  {
    name: "Somali",
    answer_ids: []
  },
  {
    name: "Southern",
    answer_ids: []
  },
  {
    name: "Spanish",
    answer_ids: []
  },
  {
    name: "Sri Lankan",
    answer_ids: []
  },
  {
    name: "Swedish",
    answer_ids: []
  },
  {
    name: "Swiss Food",
    answer_ids: []
  },
  {
    name: "Syrian",
    answer_ids: []
  },
  {
    name: "Taiwanese",
    answer_ids: []
  },
  {
    name: "Tex-Mex",
    answer_ids: []
  },
  {
    name: "Thai",
    answer_ids: []
  },
  {
    name: "Traditional Norwegian",
    answer_ids: []
  },
  {
    name: "Traditional Swedish",
    answer_ids: []
  },
  {
    name: "Turkish",
    answer_ids: []
  },
  {
    name: "Ukrainian",
    answer_ids: []
  },
  {
    name: "Uzbek",
    answer_ids: []
  },
  {
    name: "Vietnamese",
    answer_ids: []
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
    answer_ids: []
  }
];
