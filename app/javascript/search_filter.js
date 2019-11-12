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
    answer_ids: [267, 281, 306, 320, 321, 106, 136, 143, 145, 160, 166, 178, 195, 244]
  },
  {
    name: "Beer Hall",
    answer_ids: [267, 268, 281, 306, 320, 321, 106, 142, 143, 145, 160, 166, 178, 195, 244]
  },
  {
    name: "Bistros",
    answer_ids: [267, 269, 281, 288, 321, 322, 323, 331, 332, 84, 102, 105, 133, 163, 167, 178, 242]
  },
  {
    name: "Brasseries",
    answer_ids: [267, 269, 281, 288, 321, 322, 323, 331, 332, 160, 166, 179]
  },
  {
    name: "Breakfast & Brunch",
    answer_ids: [
      278,
      284,
      298,
      319,
      320,
      321,
      330,
      331,
      86,
      87,
      89,
      100,
      103,
      106,
      109,
      124,
      125,
      126,
      127,
      160,
      161,
      171,
      178,
      180,
      184,
      190,
      192,
      193,
      224,
      225,
      226,
      227,
      228,
      229,
      236,
      248,
      254,
      258,
      259,
      260
    ]
  },
  {
    name: "Buffets",
    answer_ids: [278, 279, 280, 313, 319, 324, 329, 330, 331, 106, 144, 160]
  },
  {
    name: "Cafes",
    answer_ids: [267, 278, 320, 329, 330, 331, 86, 96, 109, 161, 171, 224, 225, 226, 227, 228, 229, 248, 258, 259, 260]
  },
  {
    name: "Themed Cafes",
    answer_ids: [322, 96, 110, 115, 161, 170]
  },
  {
    name: "Cafeteria",
    answer_ids: [278, 284, 300, 305, 319, 324, 326, 333, 341, 81, 87, 89, 100, 106, 151, 152, 153, 160, 254]
  },
  {
    name: "Canteen",
    answer_ids: [266, 306, 151, 152, 153, 160]
  },
  {
    name: "Chicken Shop",
    answer_ids: [311, 101, 160, 166, 179, 189]
  },
  {
    name: "Comfort Food",
    answer_ids: [
      269,
      278,
      280,
      295,
      338,
      351,
      81,
      86,
      94,
      100,
      101,
      107,
      108,
      109,
      136,
      138,
      139,
      140,
      141,
      142,
      143,
      145,
      160,
      164,
      178,
      187,
      189,
      212,
      213,
      239,
      245,
      248
    ]
  },
  {
    name: "Creperies",
    answer_ids: [267, 281, 296, 103, 110, 161, 186, 178]
  },
  {
    name: "Delis",
    answer_ids: [278, 294, 333, 349, 89, 106, 160, 166, 178]
  },
  {
    name: "Diners",
    answer_ids: [278, 284, 289, 294, 295, 300, 324, 329, 330, 160, 166, 178]
  },
  {
    name: "Dinner Theater",
    answer_ids: [324, 331, 332, 144, 128, 129, 131, 170, 243]
  },
  {
    name: "Fast Food",
    answer_ids: [
      278,
      289,
      294,
      303,
      301,
      305,
      319,
      326,
      333,
      341,
      349,
      353,
      83,
      94,
      99,
      100,
      101,
      107,
      109,
      119,
      121,
      138,
      139,
      140,
      141,
      149,
      151,
      152,
      153,
      160,
      163,
      178,
      199,
      240
    ]
  },
  {
    name: "Food Court",
    answer_ids: [
      278,
      289,
      300,
      305,
      319,
      326,
      333,
      341,
      348,
      353,
      83,
      94,
      99,
      100,
      101,
      107,
      119,
      138,
      139,
      140,
      141,
      149,
      160,
      178,
      199,
      240
    ]
  },
  {
    name: "Food Stands",
    answer_ids: [289, 320, 321, 329, 338, 348, 83, 94, 99, 100, 101, 107, 119, 138, 139, 140, 141, 149, 160, 240]
  },
  {
    name: "Gastropubs",
    answer_ids: [281, 288, 306, 308, 320, 321, 338, 136, 143, 145, 160, 178]
  },
  {
    name: "Hong Kong Style Cafe",
    answer_ids: [267, 96, 160]
  },
  {
    name: "Conveyor Belt Sushi",
    answer_ids: [267, 310, 335, 116, 160, 162, 178, 250]
  },
  {
    name: "Milk Bars",
    answer_ids: [308, 126, 127, 142, 143, 145, 161, 168, 174, 178, 196, 248]
  },
  {
    name: "Night Food",
    answer_ids: [269, 270, 273, 281, 278, 300, 320, 329, 94, 160, 168, 178, 242]
  },
  {
    name: "Noodles",
    answer_ids: [267, 348, 160, 178, 213, 218, 219, 220, 221, 222, 223, 246]
  },
  {
    name: "Open Sandwiches",
    answer_ids: [278, 294, 329, 349, 160, 178, 200]
  },
  {
    name: "Parent Cafes",
    answer_ids: [305, 321, 322, 327]
  },
  {
    name: "Pop-Up Restaurants",
    answer_ids: [320, 321, 106, 115, 160, 240]
  },
  {
    name: "Poutineries",
    answer_ids: [267, 269, 281, 288, 294, 302, 160, 178]
  },
  {
    name: "Pub Food",
    answer_ids: [269, 278, 289, 294, 320, 321, 101, 133, 160, 166, 178, 199, 208, 209, 210, 211, 244]
  },
  {
    name: "Soul Food",
    answer_ids: [279, 83, 87, 94, 160, 168, 170, 178, 199]
  },
  {
    name: "Steakhouses",
    answer_ids: [278, 288, 295, 302, 311, 321, 322, 323, 325, 332, 340, 84, 102, 93, 95, 117, 160, 166, 179, 255]
  },
  {
    name: "Supper Clubs",
    answer_ids: [323, 324, 325, 331, 332, 105, 160, 178, 208, 209, 210, 211, 242, 244]
  },
  {
    name: "Sushi Bars",
    answer_ids: [267, 310, 335, 110, 116, 160, 162, 167, 178, 214, 250]
  },
  {
    name: "Tapas Bars",
    answer_ids: [267, 110, 160, 163, 167, 178]
  },
  {
    name: "Wok",
    answer_ids: [267, 160, 178]
  },
  {
    name: "Afghan",
    answer_ids: [82, 113, 134, 160]
  },
  {
    name: "African",
    answer_ids: [267, 160, 164]
  },
  {
    name: "South African",
    answer_ids: [104, 110, 134, 160, 164]
  },
  {
    name: "American",
    answer_ids: [
      81,
      83,
      87,
      89,
      100,
      109,
      121,
      132,
      136,
      267,
      269,
      270,
      271,
      272,
      273,
      278,
      279,
      280,
      282,
      295,
      294,
      160,
      180,
      186,
      187,
      188,
      190,
      203,
      218,
      224,
      249,
      252,
      258
    ]
  },

  {
    name: "Arabian",
    answer_ids: [90, 104, 112, 160]
  },
  {
    name: "Argentine",
    answer_ids: [91, 111, 160, 267, 311]
  },
  {
    name: "Armenian",
    answer_ids: [82, 90, 103, 112, 160, 267, 317]
  },
  {
    name: "Australian",
    answer_ids: [89, 93, 111, 134, 135, 160, 165, 267, 286, 350]
  },
  {
    name: "Austrian",
    answer_ids: [89, 93, 112, 160, 267, 268, 295, 317]
  },
  {
    name: "Bangladeshi",
    answer_ids: [82, 92, 98, 113, 134, 160, 247, 256, 267]
  },
  {
    name: "ּBelgian",
    answer_ids: [89, 160, 267, 269, 288, 294, 297, 314]
  },
  {
    name: "Flemish",
    answer_ids: [89, 110, 160, 163, 267, 269, 288, 294]
  },
  {
    name: "Brazilian",
    answer_ids: [91, 104, 137, 160, 264, 267, 307, 311]
  },
  {
    name: "British",
    answer_ids: [89, 97, 109, 132, 134, 130, 160, 181, 187, 191, 251, 267, 283, 294]
  },
  {
    name: "Bulgarian",
    answer_ids: [90, 111, 160, 267, 317]
  },
  {
    name: "Cajun/Creole",
    answer_ids: [82, 113, 160, 162, 267]
  },
  {
    name: "Cambodian",
    answer_ids: [92, 98, 112, 160, 267]
  },
  {
    name: "Canadian",
    answer_ids: [89, 109, 135, 160, 188, 267, 281, 282]
  },
  {
    name: "Caribbean",
    answer_ids: [90, 111, 160, 266, 304]
  },
  {
    name: "Dominican",
    answer_ids: [90, 160, 266, 304]
  },
  {
    name: "Haitian",
    answer_ids: [112, 160, 266, 304]
  },
  {
    name: "Puerto Rican",
    answer_ids: [104, 160, 162, 266]
  },
  {
    name: "Chilean",
    answer_ids: [91, 160, 162, 267]
  },
  {
    name: "Chinese",
    answer_ids: [91, 96, 98, 110, 160, 222, 252, 256, 264, 265, 267, 315]
  },
  {
    name: "Cuban",
    answer_ids: [82, 99, 110, 137, 160, 207, 266, 304]
  },
  {
    name: "Czech",
    answer_ids: [111, 160, 267, 268, 295, 317]
  },
  {
    name: "Danish",
    answer_ids: [111, 160, 267, 269, 281, 294, 314]
  },
  {
    name: "Eastern European",
    answer_ids: [89, 97, 110, 160, 267, 268, 293, 317]
  },
  {
    name: "Ethiopian",
    answer_ids: [92, 103, 160, 163, 164, 267]
  },
  {
    name: "Filipino",
    answer_ids: [82, 98, 111, 160, 247, 267]
  },
  {
    name: "French",
    answer_ids: [89, 160, 216, 265, 267, 269, 281, 294, 314]
  },
  {
    name: "Georgian",
    answer_ids: [82, 113, 160, 267]
  },
  {
    name: "German",
    answer_ids: [89, 132, 160, 267, 268]
  },
  {
    name: "Greek",
    answer_ids: [90, 104, 160, 162, 163, 217, 267, 318]
  },
  {
    name: "Guamanian",
    answer_ids: [82, 99, 113, 160, 266]
  },
  {
    name: "Hawaiian",
    answer_ids: [89, 103, 161, 162, 266]
  },
  {
    name: "Honduran",
    answer_ids: [82, 99, 113, 160, 267]
  },
  {
    name: "Hungarian",
    answer_ids: [89, 104, 111, 160, 267, 268, 317]
  },
  {
    name: "Iberian",
    answer_ids: [90, 112, 160, 267, 295]
  },
  {
    name: "Indian",
    answer_ids: [92, 98, 160, 169, 247, 252, 253, 267, 294]
  },
  {
    name: "Indonesian",
    answer_ids: [92, 98, 113, 160, 247, 267]
  },
  {
    name: "Irish",
    answer_ids: [90, 134, 160, 194, 267, 294]
  },
  {
    name: "Israeli",
    answer_ids: [90, 160, 163, 212, 267, 316]
  },
  {
    name: "Italian",
    answer_ids: [83, 90, 104, 267, 316, 160, 163, 204, 220, 223, 249, 263, 267, 292, 318, 83, 90, 104]
  },

  {
    name: "Japanese",
    answer_ids: [96, 111, 134, 116, 160, 162, 170, 214, 219, 221, 250, 254]
  },
  {
    name: "Japanese Curry",
    answer_ids: [267, 315, 82, 91, 112, 160]
  },
  {
    name: "Western Style Japanese Food",
    answer_ids: [267, 296, 315, 96, 160, 170, 214, 219, 221, 250, 254]
  },
  {
    name: "Jewish",
    answer_ids: [267, 316, 89, 160, 212, 259]
  },
  {
    name: "Korean",
    answer_ids: [267, 315, 91, 96, 111, 132, 160, 162, 256]
  },
  {
    name: "Latin American",
    answer_ids: [267, 91, 160, 162]
  },
  {
    name: "Colombian",
    answer_ids: [267, 91, 132, 137, 160]
  },
  {
    name: "Salvadoran",
    answer_ids: [267, 91, 160]
  },
  {
    name: "Venezuelan",
    answer_ids: [267, 91, 160]
  },
  {
    name: "Malaysian",
    answer_ids: [267, 82, 92, 98, 113, 160]
  },
  {
    name: "Mediterranean",
    answer_ids: [267, 292, 318, 90, 160, 162, 163]
  },
  {
    name: "Mexican",
    answer_ids: [266, 91, 99, 120, 160, 168, 253]
  },
  {
    name: "Middle Eastern",
    answer_ids: [267, 316, 90, 160]
  },
  {
    name: "Egyptian",
    answer_ids: [267, 316, 82, 160]
  },
  {
    name: "Lebanese",
    answer_ids: [267, 316, 82, 90, 160, 217]
  },
  {
    name: "Modern Australian",
    answer_ids: [267, 286, 89, 160, 165]
  },
  {
    name: "Modern European",
    answer_ids: [267, 295, 314, 317, 318, 89, 160]
  },
  {
    name: "Mongolian",
    answer_ids: [267, 90, 111, 160]
  },
  {
    name: "Moroccan",
    answer_ids: [267, 91, 160, 163]
  },
  {
    name: "New Mexican Cuisine",
    answer_ids: [267, 91, 111, 120, 160, 168, 253]
  },
  {
    name: "New Zealand",
    answer_ids: [267, 286, 350, 82, 93, 134, 160, 163]
  },
  {
    name: "Nicaraguan",
    answer_ids: [267, 82, 91, 160, 164]
  },
  {
    name: "Oriental",
    answer_ids: [267, 91, 111, 160]
  },
  {
    name: "Pakistani",
    answer_ids: [267, 82, 113, 134, 160, 247]
  },
  {
    name: "Pan Asian",
    answer_ids: [267, 315, 91, 96, 160, 222]
  },
  {
    name: "Parma",
    answer_ids: [267, 82, 160]
  },
  {
    name: "Persian/Iranian",
    answer_ids: [267, 316, 91, 113, 160]
  },
  {
    name: "Peruvian",
    answer_ids: [267, 91, 160]
  },
  {
    name: "Polynesian",
    answer_ids: [266, 160]
  },
  {
    name: "Portuguese",
    answer_ids: [267, 160, 215]
  },
  {
    name: "Romanian",
    answer_ids: [267, 268, 293, 317, 82, 89, 160]
  },
  {
    name: "Russian",
    answer_ids: [267, 89, 97, 134, 160, 208]
  },
  {
    name: "Scandinavian",
    answer_ids: [267, 89, 160, 162]
  },
  {
    name: "Scottish",
    answer_ids: [267, 294, 82, 89, 160]
  },
  {
    name: "Seafood",
    answer_ids: [266, 304, 310, 116, 160, 162]
  },
  {
    name: "Singaporean",
    answer_ids: [267, 315, 82, 91, 160, 247]
  },
  {
    name: "Slovakian",
    answer_ids: [267, 268, 293, 317, 82, 89, 113, 160]
  },
  {
    name: "Somali",
    answer_ids: [267, 82, 92, 113, 160, 164]
  },
  {
    name: "Southern",
    answer_ids: [267, 279, 280, 89, 168, 160]
  },
  {
    name: "Spanish",
    answer_ids: [267, 295, 91, 111, 112, 120, 137, 160, 215]
  },
  {
    name: "Sri Lankan",
    answer_ids: [267, 82, 92, 98, 113, 134]
  },
  {
    name: "Swedish",
    answer_ids: [267, 89, 132, 160]
  },
  {
    name: "Swiss Food",
    answer_ids: [267, 269, 281, 288, 294, 89, 95, 160, 162]
  },
  {
    name: "Syrian",
    answer_ids: [267, 316, 91, 103, 160, 164, 217]
  },
  {
    name: "Taiwanese",
    answer_ids: [267, 315, 82, 160]
  },
  {
    name: "Tex-Mex",
    answer_ids: [267, 280, 289, 90, 111, 120, 160]
  },
  {
    name: "Thai",
    answer_ids: [267, 315, 90, 98, 160, 162, 246]
  },
  {
    name: "Traditional Norwegian",
    answer_ids: [267, 89, 95, 160, 162]
  },
  {
    name: "Traditional Swedish",
    answer_ids: [267, 89, 160, 162]
  },
  {
    name: "Turkish",
    answer_ids: [267, 316, 90, 111, 160, 253]
  },
  {
    name: "Ukrainian",
    answer_ids: [267, 91, 97, 160]
  },
  {
    name: "Uzbek",
    answer_ids: [267, 82, 92, 160]
  },
  {
    name: "Vietnamese",
    answer_ids: [267, 315, 89, 98, 112, 160, 162, 202]
  },
  {
    name: "Gluten-Free",
    answer_ids: [278, 279, 280, 281, 304, 163, 169, 179, 26]
  },
  {
    name: "Halal",
    answer_ids: [267, 299, 316, 166]
  },
  {
    name: "Kosher",
    answer_ids: [299, 316, 166, 212]
  },
  {
    name: "Vegan",
    answer_ids: [118, 146, 147, 148, 150, 114, 285, 290, 299, 304, 312, 327, 339, 163, 167, 169, 197, 215, 257]
  },
  {
    name: "Vegetarian",
    answer_ids: [
      87,
      118,
      146,
      147,
      148,
      150,
      114,
      278,
      279,
      285,
      290,
      299,
      304,
      312,
      327,
      339,
      163,
      167,
      169,
      197,
      215,
      257
    ]
  },
  {
    name: "Asian Fusion",
    answer_ids: [267, 315, 160, 222]
  },
  {
    name: "Baguettes",
    answer_ids: [349, 89, 104, 124, 160, 163, 178, 202, 204]
  },
  {
    name: "Barbeque",
    answer_ids: [279, 311, 340, 90, 93, 94, 160, 166, 179, 237, 255]
  },
  {
    name: "Pancakes",
    answer_ids: [283, 296, 89, 96, 103, 126, 161, 171, 178, 180, 236]
  },
  {
    name: "Burgers",
    answer_ids: [278, 294, 311, 328, 340, 349, 89, 100, 93, 94, 160, 166, 178, 237, 255]
  },
  {
    name: "Cheesesteaks",
    answer_ids: [294, 311, 349, 89, 100, 102, 93, 160, 166, 178, 203, 206]
  },
  {
    name: "Chicken Wings",
    answer_ids: [279, 290, 291, 306, 311, 91, 100, 104, 122, 160, 166]
  },
  {
    name: "Curry Sausage",
    answer_ids: [267, 311, 92, 160, 166, 179]
  },
  {
    name: "Dumplings",
    answer_ids: [293, 348, 160, 178, 247]
  },
  {
    name: "Fish & Chips",
    answer_ids: [89, 104, 131, 116, 289, 290, 294, 310, 160, 162, 166, 178, 206, 251]
  },
  {
    name: "Flatbread",
    answer_ids: [87, 89, 160, 163, 178, 182, 200, 203]
  },
  {
    name: "Fondue",
    answer_ids: [126, 269, 160, 170, 178]
  },
  {
    name: "Game Meat",
    answer_ids: [93, 117, 288, 311, 335, 351, 160, 163, 166, 179, 255]
  },
  {
    name: "Hot Dogs",
    answer_ids: [90, 94, 123, 268, 269, 270, 271, 272, 273, 306, 311, 328, 349, 160, 166, 178, 237, 262]
  },
  {
    name: "Ramen",
    answer_ids: [267, 315, 160, 178]
  },
  {
    name: "Tempura",
    answer_ids: [267, 315, 121, 138, 139, 140, 141, 149, 160, 167, 178]
  },
  {
    name: "Kebab",
    answer_ids: [267, 316, 349, 91, 160, 166, 179]
  },
  {
    name: "Live/Raw Food",
    answer_ids: [335, 123, 116, 160, 162, 166, 179]
  },
  {
    name: "Meatballs",
    answer_ids: [311, 318, 348, 93, 123, 117, 160, 166, 179, 204, 255, 262]
  },
  {
    name: "Falafel",
    answer_ids: [267, 316, 348, 90, 104, 160, 167, 178]
  },
  {
    name: "Tacos",
    answer_ids: [267, 328, 349, 91, 94, 99, 104, 120, 160, 168, 179]
  },
  {
    name: "Pita",
    answer_ids: [267, 316, 349, 89, 124, 160, 163, 167, 178, 200]
  },
  {
    name: "Pizza",
    answer_ids: [328, 326, 83, 94, 151, 152, 153, 160, 178, 183, 249, 262, 263, 264, 265]
  },
  {
    name: "Polish",
    answer_ids: [268, 293, 311, 317, 89, 97, 160, 166, 179]
  },
  {
    name: "Pierogis",
    answer_ids: [267, 293, 317, 348, 89, 160, 178]
  },
  {
    name: "Potatoes",
    answer_ids: [278, 279, 280, 281, 312, 348, 89, 97, 104, 160, 163, 167, 178, 181, 199, 247]
  },
  {
    name: "Rice",
    answer_ids: [291, 312, 315, 89, 98, 99, 104, 160, 178, 185]
  },
  {
    name: "Rotisserie Chicken",
    answer_ids: [295, 311, 89, 100, 101, 160, 166, 179, 189, 212, 213]
  },
  {
    name: "Salad",
    answer_ids: [291, 312, 327, 339, 89, 102, 118, 125, 146, 147, 148, 150, 114, 163, 167, 169, 179, 201, 257]
  },
  {
    name: "Sandwiches",
    answer_ids: [294, 328, 349, 89, 101, 124, 160, 163, 167, 178, 200, 202, 203, 204, 205, 206, 207]
  },
  {
    name: "Schnitzel",
    answer_ids: [267, 268, 293, 160, 166, 178, 189]
  },
  {
    name: "Soup",
    answer_ids: [291, 160, 179, 185, 212, 213, 214, 215, 216, 217, 219, 238, 239]
  },
  {
    name: "Tapas/Small Plates",
    answer_ids: [90, 160, 163, 167, 179]
  },
  {
    name: "Waffles",
    answer_ids: [282, 283, 297, 89, 96, 103, 126, 161, 170, 178, 180, 236]
  },
  {
    name: "Wraps",
    answer_ids: [294, 327, 349, 89, 101, 104, 161, 163, 167, 178, 236, 257]
  }
];
