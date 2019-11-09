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
  {
    name: "Beer Garden",
    answer_ids: [267, 281, 306, 320, 321]
  },
  {
    name: "Beer Hall",
    answer_ids: [267, 268, 281, 306, 320, 321]
  },
  {
    name: "Bistros",
    answer_ids: [267, 269, 281, 288, 321, 322, 323, 331, 332]
  },
  {
    name: "Brasseries",
    answer_ids: [267, 269, 281, 288, 321, 322, 323, 331, 332]
  },
  {
    name: "Breakfast & Brunch",
    answer_ids: [278, 284, 298, 319, 320, 321, 330, 331]
  },
  {
    name: "Buffets",
    answer_ids: [278, 279, 280, 313, 319, 324, 329, 330, 331]
  },
  {
    name: "Cafes",
    answer_ids: [267, 278, 320, 329, 330, 331]
  },
  {
    name: "Themed Cafes",
    answer_ids: [322]
  },
  {
    name: "Cafeteria",
    answer_ids: [278, 284, 300, 305, 319, 324, 326, 333, 341]
  },
  {
    name: "Canteen",
    answer_ids: [266, 306]
  },
  {
    name: "Chicken Shop",
    answer_ids: [311]
  },
  {
    name: "Comfort Food",
    answer_ids: [269, 278, 280, 295, 338, 351]
  },
  {
    name: "Creperies",
    answer_ids: [267, 281, 296]
  },
  {
    name: "Delis",
    answer_ids: [278, 294, 333, 349]
  },
  {
    name: "Diners",
    answer_ids: [278, 284, 289, 294, 295, 300, 324, 329, 330]
  },
  {
    name: "Dinner Theater",
    answer_ids: [324, 331, 332]
  },
  {
    name: "Fast Food",
    answer_ids: [278, 289, 294, 303, 301, 305, 319, 326, 333, 341, 349, 353]
  },
  {
    name: "Food Court",
    answer_ids: [278, 289, 300, 305, 319, 326, 333, 341, 348, 353]
  },
  {
    name: "Food Stands",
    answer_ids: [289, 320, 321, 329, 338, 348]
  },
  {
    name: "Gastropubs",
    answer_ids: [281, 288, 306, 308, 320, 321, 338]
  },
  {
    name: "Hong Kong Style Cafe",
    answer_ids: [267]
  },
  {
    name: "Conveyor Belt Sushi",
    answer_ids: [267, 310, 335]
  },
  {
    name: "Milk Bars",
    answer_ids: [308]
  },
  {
    name: "Night Food",
    answer_ids: [269, 270, 273, 281, 278, 300, 320, 329]
  },
  {
    name: "Noodles",
    answer_ids: [267, 348]
  },
  {
    name: "Open Sandwiches",
    answer_ids: [278, 294, 329, 349]
  },
  {
    name: "Parent Cafes",
    answer_ids: [305, 321, 322, 327]
  },
  {
    name: "Pop-Up Restaurants",
    answer_ids: [320, 321]
  },
  {
    name: "Poutineries",
    answer_ids: [267, 269, 281, 288, 294, 302]
  },
  {
    name: "Pub Food",
    answer_ids: [269, 278, 289, 294, 320, 321]
  },
  {
    name: "Soul Food",
    answer_ids: [279]
  },
  {
    name: "Steakhouses",
    answer_ids: [278, 288, 295, 302, 311, 321, 322, 323, 325, 332, 340]
  },
  {
    name: "Supper Clubs",
    answer_ids: [323, 324, 325, 331, 332]
  },
  {
    name: "Sushi Bars",
    answer_ids: [267, 310, 335]
  },
  {
    name: "Tapas Bars",
    answer_ids: [267]
  },
  {
    name: "Wok",
    answer_ids: [267]
  },
  {
    name: "Afghan",
    answer_ids: []
  },
  {
    name: "African",
    answer_ids: [267]
  },
  {
    name: "South African",
    answer_ids: [267]
  },
  {
    name: "American",
    answer_ids: [269, 270, 271, 272, 273, 278, 279, 280, 282, 295, 294]
  },
  {
    name: "Arabian",
    answer_ids: [267, 316]
  },
  {
    name: "Argentine",
    answer_ids: [267, 311]
  },
  {
    name: "Armenian",
    answer_ids: [267, 317]
  },
  {
    name: "Australian",
    answer_ids: [267, 286, 350]
  },
  {
    name: "Austrian",
    answer_ids: [267, 268, 295, 317]
  },
  {
    name: "Bangladeshi",
    answer_ids: [267]
  },
  {
    name: "ּBelgian",
    answer_ids: [267, 269, 288, 294, 297, 314]
  },
  {
    name: "Flemish",
    answer_ids: [267, 269, 288, 294]
  },
  {
    name: "Brazilian",
    answer_ids: [267, 307, 311]
  },
  {
    name: "British",
    answer_ids: [267, 283, 294]
  },
  {
    name: "Bulgarian",
    answer_ids: [267, 317]
  },
  {
    name: "Cajun/Creole",
    answer_ids: [267]
  },
  {
    name: "Cambodian",
    answer_ids: [267]
  },
  {
    name: "Canadian",
    answer_ids: [267, 281, 282]
  },
  {
    name: "Caribbean",
    answer_ids: [266, 304]
  },
  {
    name: "Dominican",
    answer_ids: [266, 304]
  },
  {
    name: "Haitian",
    answer_ids: [266, 304]
  },
  {
    name: "Puerto Rican",
    answer_ids: [266]
  },
  {
    name: "Chilean",
    answer_ids: [267]
  },
  {
    name: "Chinese",
    answer_ids: [267, 315]
  },
  {
    name: "Cuban",
    answer_ids: [266, 304]
  },
  {
    name: "Czech",
    answer_ids: [267, 268, 295, 317]
  },
  {
    name: "Danish",
    answer_ids: [267, 269, 281, 294, 314]
  },
  {
    name: "Eastern European",
    answer_ids: [267, 268, 293, 317]
  },
  {
    name: "Ethiopian",
    answer_ids: [267]
  },
  {
    name: "Filipino",
    answer_ids: [267]
  },
  {
    name: "French",
    answer_ids: [267, 269, 281, 294, 314]
  },
  {
    name: "Georgian",
    answer_ids: [267]
  },
  {
    name: "German",
    answer_ids: [267, 268]
  },
  {
    name: "Greek",
    answer_ids: [267, 318]
  },
  {
    name: "Guamanian",
    answer_ids: [266]
  },
  {
    name: "Hawaiian",
    answer_ids: [266]
  },
  {
    name: "Honduran",
    answer_ids: [267]
  },
  {
    name: "Hungarian",
    answer_ids: [267, 268, 317]
  },
  {
    name: "Iberian",
    answer_ids: [267, 295]
  },
  {
    name: "Indian",
    answer_ids: [267, 294]
  },
  {
    name: "Indonesian",
    answer_ids: [267]
  },
  {
    name: "Irish",
    answer_ids: [267, 294]
  },
  {
    name: "Israeli",
    answer_ids: [267, 316]
  },
  {
    name: "Italian",
    answer_ids: [267, 292, 318]
  },

  {
    name: "Japanese",
    answer_ids: [267, 296, 315]
  },
  {
    name: "Japanese Curry",
    answer_ids: [267, 315]
  },
  {
    name: "Western Style Japanese Food",
    answer_ids: [267, 296, 315]
  },
  {
    name: "Jewish",
    answer_ids: [267, 316]
  },
  {
    name: "Korean",
    answer_ids: [267, 315]
  },
  {
    name: "Latin American",
    answer_ids: [267]
  },
  {
    name: "Colombian",
    answer_ids: [267]
  },
  {
    name: "Salvadoran",
    answer_ids: [267]
  },
  {
    name: "Venezuelan",
    answer_ids: [267]
  },
  {
    name: "Malaysian",
    answer_ids: [267]
  },
  {
    name: "Mediterranean",
    answer_ids: [267, 292, 318]
  },
  {
    name: "Mexican",
    answer_ids: [266]
  },
  {
    name: "Middle Eastern",
    answer_ids: [267, 316]
  },
  {
    name: "Egyptian",
    answer_ids: [267, 316]
  },
  {
    name: "Lebanese",
    answer_ids: [267, 316]
  },
  {
    name: "Modern Australian",
    answer_ids: [267, 286]
  },
  {
    name: "Modern European",
    answer_ids: [267, 295, 314, 317, 318]
  },
  {
    name: "Mongolian",
    answer_ids: [267]
  },
  {
    name: "Moroccan",
    answer_ids: [267]
  },
  {
    name: "New Mexican Cuisine",
    answer_ids: [267]
  },
  {
    name: "New Zealand",
    answer_ids: [267, 286, 350]
  },
  {
    name: "Nicaraguan",
    answer_ids: [267]
  },
  {
    name: "Oriental",
    answer_ids: [267]
  },
  {
    name: "Pakistani",
    answer_ids: [267]
  },
  {
    name: "Pan Asian",
    answer_ids: [267, 315]
  },
  {
    name: "Parma",
    answer_ids: [267]
  },
  {
    name: "Persian/Iranian",
    answer_ids: [267, 316]
  },
  {
    name: "Peruvian",
    answer_ids: [267]
  },
  {
    name: "Polynesian",
    answer_ids: [266]
  },
  {
    name: "Portuguese",
    answer_ids: [267]
  },
  {
    name: "Romanian",
    answer_ids: [267, 268, 293, 317]
  },
  {
    name: "Russian",
    answer_ids: [267]
  },
  {
    name: "Scandinavian",
    answer_ids: [267]
  },
  {
    name: "Scottish",
    answer_ids: [267, 294]
  },
  {
    name: "Seafood",
    answer_ids: [266, 304, 310]
  },
  {
    name: "Singaporean",
    answer_ids: [267, 315]
  },
  {
    name: "Slovakian",
    answer_ids: [267, 268, 293, 317]
  },
  {
    name: "Somali",
    answer_ids: [267]
  },
  {
    name: "Southern",
    answer_ids: [267, 279, 280]
  },
  {
    name: "Spanish",
    answer_ids: [267, 295]
  },
  {
    name: "Sri Lankan",
    answer_ids: [267]
  },
  {
    name: "Swedish",
    answer_ids: [267]
  },
  {
    name: "Swiss Food",
    answer_ids: [267, 269, 281, 288, 294]
  },
  {
    name: "Syrian",
    answer_ids: [267, 316]
  },
  {
    name: "Taiwanese",
    answer_ids: [267, 315]
  },
  {
    name: "Tex-Mex",
    answer_ids: [267, 280, 289]
  },
  {
    name: "Thai",
    answer_ids: [267, 315]
  },
  {
    name: "Traditional Norwegian",
    answer_ids: [267]
  },
  {
    name: "Traditional Swedish",
    answer_ids: [267]
  },
  {
    name: "Turkish",
    answer_ids: [267, 316]
  },
  {
    name: "Ukrainian",
    answer_ids: [267]
  },
  {
    name: "Uzbek",
    answer_ids: [267]
  },
  {
    name: "Vietnamese",
    answer_ids: [267, 315]
  },
  {
    name: "Gluten-Free",
    answer_ids: [278, 279, 280, 281, 304]
  },
  {
    name: "Halal",
    answer_ids: [267, 299, 316]
  },
  {
    name: "Kosher",
    answer_ids: [299, 316]
  },
  {
    name: "Vegan",
    answer_ids: [285, 290, 299, 304, 312, 327, 339]
  },
  {
    name: "Vegetarian",
    answer_ids: [278, 279, 285, 290, 299, 304, 312, 327, 339]
  },
  {
    name: "Asian Fusion",
    answer_ids: [267, 315]
  },
  {
    name: "Baguettes",
    answer_ids: [349]
  },
  {
    name: "Barbeque",
    answer_ids: [279, 311, 340]
  },
  {
    name: "Pancakes",
    answer_ids: [283, 296]
  },
  {
    name: "Burgers",
    answer_ids: [278, 294, 311, 328, 340, 349]
  },
  {
    name: "Cheesesteaks",
    answer_ids: [294, 311, 349]
  },
  {
    name: "Chicken Wings",
    answer_ids: [279, 290, 291, 306, 311]
  },
  {
    name: "Curry Sausage",
    answer_ids: [267, 311]
  },
  {
    name: "Dumplings",
    answer_ids: [293, 348]
  },
  {
    name: "Fish & Chips",
    answer_ids: [289, 290, 294, 310]
  },
  {
    name: "Flatbread",
    answer_ids: []
  },
  {
    name: "Fondue",
    answer_ids: [269]
  },
  {
    name: "Game Meat",
    answer_ids: [288, 311, 335, 351]
  },
  {
    name: "Hot Dogs",
    answer_ids: [268, 269, 270, 271, 272, 273, 306, 311, 328, 349]
  },
  {
    name: "Ramen",
    answer_ids: [267, 315]
  },
  {
    name: "Tempura",
    answer_ids: [267, 315]
  },
  {
    name: "Kebab",
    answer_ids: [267, 316, 349]
  },
  {
    name: "Live/Raw Food",
    answer_ids: [335]
  },
  {
    name: "Meatballs",
    answer_ids: [311, 318, 348]
  },
  {
    name: "Falafel",
    answer_ids: [267, 316, 348]
  },
  {
    name: "Tacos",
    answer_ids: [267, 328, 349]
  },
  {
    name: "Pita",
    answer_ids: [267, 316, 349]
  },
  {
    name: "Pizza",
    answer_ids: [328, 326]
  },
  {
    name: "Polish",
    answer_ids: [268, 293, 311, 317]
  },
  {
    name: "Pierogis",
    answer_ids: [267, 293, 317, 348]
  },
  {
    name: "Potatoes",
    answer_ids: [278, 279, 280, 281, 312, 348]
  },
  {
    name: "Rice",
    answer_ids: [291, 312, 315]
  },
  {
    name: "Rotisserie Chicken",
    answer_ids: [295, 311]
  },
  {
    name: "Salad",
    answer_ids: [291, 312, 327, 339]
  },
  {
    name: "Sandwiches",
    answer_ids: [294, 328, 349]
  },
  {
    name: "Schnitzel",
    answer_ids: [267, 268, 293]
  },
  {
    name: "Soup",
    answer_ids: [291]
  },
  {
    name: "Tapas/Small Plates",
    answer_ids: [267]
  },
  {
    name: "Waffles",
    answer_ids: [282, 283, 297]
  },
  {
    name: "Wraps",
    answer_ids: [294, 327, 349]
  }
];
