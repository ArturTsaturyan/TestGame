import { GAMES,GAMENAMES } from './games.type';


const initialState = {
  games:{
    "softswiss/AztecMagic": {
      "title": "Aztec Magic",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 64,
        "slots": 0,
        "_hd": 93,
        "all": 93
      },
      "real": {
        "BTC": {
          "id": 1
        },
        "ETH": {
          "id": 151
        },
        "LTC": {
          "id": 152
        },
        "DOG": {
          "id": 153
        }
      },
      "demo": "/games/softswiss/AztecMagic/154"
    },
    "softswiss/WestTown": {
      "title": "West Town",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 14,
        "slots": 1050,
        "_hd": 1278,
        "all": 1334
      },
      "real": {
        "BTC": {
          "id": 4
        },
        "ETH": {
          "id": 5
        },
        "LTC": {
          "id": 6
        },
        "DOG": {
          "id": 7
        }
      },
      "demo": "/games/softswiss/WestTown/8"
    },
    "softswiss/PrincessOfSky": {
      "title": "Princess of Sky",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 795,
        "_hd": 988,
        "all": 1038
      },
      "real": {
        "BTC": {
          "id": 11
        },
        "ETH": {
          "id": 12
        },
        "LTC": {
          "id": 13
        },
        "DOG": {
          "id": 14
        }
      },
      "demo": "/games/softswiss/PrincessOfSky/15"
    },
    "softswiss/SlotomonGo": {
      "title": "Slotomon Go",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 211,
        "slots": 882,
        "_hd": 1085,
        "all": 1138
      },
      "real": {
        "BTC": {
          "id": 18
        },
        "ETH": {
          "id": 19
        },
        "LTC": {
          "id": 20
        },
        "DOG": {
          "id": 21
        }
      },
      "demo": "/games/softswiss/SlotomonGo/22"
    },
    "softswiss/BookOfPyramids": {
      "title": "Book of Pyramids",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 114,
        "slots": 150,
        "_hd": 338,
        "all": 352
      },
      "real": {
        "BTC": {
          "id": 25
        },
        "ETH": {
          "id": 26
        },
        "LTC": {
          "id": 27
        },
        "DOG": {
          "id": 28
        }
      },
      "demo": "/games/softswiss/BookOfPyramids/29"
    },
    "softswiss/LuckyBlue": {
      "title": "Lucky Blue",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 66,
        "slots": 602,
        "_hd": 810,
        "all": 853
      },
      "real": {
        "BTC": {
          "id": 32
        },
        "ETH": {
          "id": 33
        },
        "LTC": {
          "id": 34
        },
        "DOG": {
          "id": 35
        }
      },
      "demo": "/games/softswiss/LuckyBlue/36"
    },
    "softswiss/DesertTreasure": {
      "title": "Desert Treasure",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 278,
        "_hd": 506,
        "all": 523
      },
      "real": {
        "BTC": {
          "id": 39
        },
        "ETH": {
          "id": 40
        },
        "LTC": {
          "id": 41
        },
        "DOG": {
          "id": 42
        }
      },
      "demo": "/games/softswiss/DesertTreasure/43"
    },
    "softswiss/DeepSea": {
      "title": "Deep Sea",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 117,
        "slots": 270,
        "_hd": 498,
        "all": 515
      },
      "real": {
        "BTC": {
          "id": 46
        },
        "ETH": {
          "id": 47
        },
        "LTC": {
          "id": 48
        },
        "DOG": {
          "id": 49
        }
      },
      "demo": "/games/softswiss/DeepSea/50"
    },
    "softswiss/JourneyFlirt": {
      "title": "Journey Flirt",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 70,
        "slots": 537,
        "_hd": 752,
        "all": 790
      },
      "real": {
        "BTC": {
          "id": 53
        },
        "ETH": {
          "id": 54
        },
        "LTC": {
          "id": 55
        },
        "DOG": {
          "id": 56
        }
      },
      "demo": "/games/softswiss/JourneyFlirt/57"
    },
    "softswiss/AlohaKingElvis": {
      "title": "Aloha King Elvis",
      "provider": "bgaming",
      "collections": {
        "novelty": 29,
        "popularity": 5,
        "slots": 67,
        "_hd": 152,
        "all": 156,
        "bonusbuy": 59
      },
      "real": {
        "BTC": {
          "id": 60
        },
        "ETH": {
          "id": 61
        },
        "LTC": {
          "id": 62
        },
        "DOG": {
          "id": 63
        }
      },
      "demo": "/games/softswiss/AlohaKingElvis/64"
    },
    "softswiss/WbcRingOfRiches": {
      "title": "WBC Ring of Riches",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1044,
        "_hd": 1272,
        "all": 1328
      },
      "real": {
        "BTC": {
          "id": 67
        },
        "ETH": {
          "id": 68
        },
        "LTC": {
          "id": 69
        },
        "DOG": {
          "id": 70
        }
      },
      "demo": "/games/softswiss/WbcRingOfRiches/71"
    },
    "softswiss/AztecMagicDeluxe": {
      "title": "Aztec Magic Deluxe",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 130,
        "slots": 91,
        "_hd": 177,
        "all": 182
      },
      "real": {
        "BTC": {
          "id": 74
        },
        "ETH": {
          "id": 75
        },
        "LTC": {
          "id": 76
        },
        "DOG": {
          "id": 77
        }
      },
      "demo": "/games/softswiss/AztecMagicDeluxe/78"
    },
    "softswiss/MechanicalClover": {
      "title": "Mechanical Clover",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 357,
        "slots": 662,
        "_hd": 860,
        "all": 908
      },
      "real": {
        "BTC": {
          "id": 81
        },
        "ETH": {
          "id": 82
        },
        "LTC": {
          "id": 83
        },
        "DOG": {
          "id": 84
        }
      },
      "demo": "/games/softswiss/MechanicalClover/85"
    },
    "softswiss/BraveViking": {
      "title": "Brave Viking",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 258,
        "slots": 165,
        "_hd": 353,
        "all": 367
      },
      "real": {
        "BTC": {
          "id": 88
        },
        "ETH": {
          "id": 89
        },
        "LTC": {
          "id": 90
        },
        "DOG": {
          "id": 91
        }
      },
      "demo": "/games/softswiss/BraveViking/92"
    },
    "softswiss/LuckySweets": {
      "title": "Lucky Sweets",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 374,
        "slots": 631,
        "_hd": 837,
        "all": 881
      },
      "real": {
        "BTC": {
          "id": 95
        },
        "ETH": {
          "id": 96
        },
        "LTC": {
          "id": 97
        },
        "DOG": {
          "id": 98
        }
      },
      "demo": "/games/softswiss/LuckySweets/99"
    },
    "softswiss/ScrollOfAdventure": {
      "title": "Scroll of Adventure",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 855,
        "_hd": 1058,
        "all": 1111
      },
      "real": {
        "BTC": {
          "id": 102
        },
        "ETH": {
          "id": 103
        },
        "LTC": {
          "id": 104
        },
        "DOG": {
          "id": 105
        }
      },
      "demo": "/games/softswiss/ScrollOfAdventure/106"
    },
    "softswiss/HawaiiCocktails": {
      "title": "Hawaii Cocktails",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 382,
        "slots": 460,
        "_hd": 683,
        "all": 713
      },
      "real": {
        "BTC": {
          "id": 109
        },
        "ETH": {
          "id": 110
        },
        "LTC": {
          "id": 111
        },
        "DOG": {
          "id": 112
        }
      },
      "demo": "/games/softswiss/HawaiiCocktails/113"
    },
    "softswiss/LuckyLadyClover": {
      "title": "Lucky Lady's Clover",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 166,
        "slots": 621,
        "_hd": 827,
        "all": 871
      },
      "real": {
        "BTC": {
          "id": 116
        },
        "ETH": {
          "id": 117
        },
        "LTC": {
          "id": 118
        },
        "DOG": {
          "id": 119
        }
      },
      "demo": "/games/softswiss/LuckyLadyClover/120"
    },
    "softswiss/FantasyPark": {
      "title": "Fantasy Park",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 349,
        "_hd": 568,
        "all": 591
      },
      "real": {
        "BTC": {
          "id": 123
        },
        "ETH": {
          "id": 124
        },
        "LTC": {
          "id": 125
        },
        "DOG": {
          "id": 126
        }
      },
      "demo": "/games/softswiss/FantasyPark/127"
    },
    "softswiss/DomnitorsDeluxe": {
      "title": "Domnitors Deluxe",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 180,
        "slots": 295,
        "_hd": 520,
        "all": 540
      },
      "real": {
        "BTC": {
          "id": 130
        },
        "ETH": {
          "id": 131
        },
        "LTC": {
          "id": 132
        },
        "DOG": {
          "id": 133
        }
      },
      "demo": "/games/softswiss/DomnitorsDeluxe/134"
    },
    "softswiss/DigDigDigger": {
      "title": "Dig Dig Digger",
      "provider": "bgaming",
      "collections": {
        "novelty": 44,
        "popularity": 0,
        "slots": 289,
        "_hd": 515,
        "all": 535,
        "bonusbuy": 68
      },
      "real": {
        "BTC": {
          "id": 137
        },
        "ETH": {
          "id": 138
        },
        "LTC": {
          "id": 139
        },
        "DOG": {
          "id": 140
        }
      },
      "demo": "/games/softswiss/DigDigDigger/141"
    },
    "softswiss/SpinAndSpell": {
      "title": "Spin and Spell",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 897,
        "_hd": 1131,
        "all": 1184
      },
      "real": {
        "BTC": {
          "id": 144
        },
        "ETH": {
          "id": 145
        },
        "LTC": {
          "id": 146
        },
        "DOG": {
          "id": 147
        }
      },
      "demo": "/games/softswiss/SpinAndSpell/148"
    },
    "softswiss/FireLightning": {
      "title": "Fire Lightning",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 207,
        "slots": 357,
        "_hd": 575,
        "all": 599
      },
      "real": {
        "BTC": {
          "id": 157
        },
        "ETH": {
          "id": 158
        },
        "LTC": {
          "id": 159
        },
        "DOG": {
          "id": 160
        }
      },
      "demo": "/games/softswiss/FireLightning/161"
    },
    "softswiss/PlatinumLightningDeluxe": {
      "title": "Platinum Lightning Deluxe",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 189,
        "slots": 776,
        "_hd": 969,
        "all": 1019
      },
      "real": {
        "BTC": {
          "id": 164
        },
        "ETH": {
          "id": 165
        },
        "LTC": {
          "id": 166
        },
        "DOG": {
          "id": 167
        }
      },
      "demo": "/games/softswiss/PlatinumLightningDeluxe/168"
    },
    "softswiss/CherryFiesta": {
      "title": "Cherry Fiesta",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 210,
        "slots": 206,
        "_hd": 391,
        "all": 407
      },
      "real": {
        "BTC": {
          "id": 171
        },
        "ETH": {
          "id": 172
        },
        "LTC": {
          "id": 173
        },
        "DOG": {
          "id": 174
        }
      },
      "demo": "/games/softswiss/CherryFiesta/175"
    },
    "softswiss/Domnitors": {
      "title": "Domnitors",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 294,
        "_hd": 519,
        "all": 539
      },
      "real": {
        "BTC": {
          "id": 178
        },
        "ETH": {
          "id": 179
        },
        "LTC": {
          "id": 180
        },
        "DOG": {
          "id": 181
        }
      },
      "demo": "/games/softswiss/Domnitors/182"
    },
    "softswiss/MechanicalOrange": {
      "title": "Mechanical Orange",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 663,
        "_hd": 861,
        "all": 909
      },
      "real": {
        "BTC": {
          "id": 185
        },
        "ETH": {
          "id": 186
        },
        "LTC": {
          "id": 187
        },
        "DOG": {
          "id": 188
        }
      },
      "demo": "/games/softswiss/MechanicalOrange/189"
    },
    "softswiss/HelloEaster": {
      "title": "Hello Easter",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 465,
        "_hd": 686,
        "all": 716
      },
      "real": {
        "BTC": {
          "id": 192
        },
        "ETH": {
          "id": 193
        },
        "LTC": {
          "id": 194
        },
        "DOG": {
          "id": 195
        }
      },
      "demo": "/games/softswiss/HelloEaster/196"
    },
    "softswiss/CrazyStarter": {
      "title": "Crazy Starter",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 339,
        "slots": 248,
        "_hd": 479,
        "all": 495
      },
      "real": {
        "BTC": {
          "id": 199
        },
        "ETH": {
          "id": 200
        },
        "LTC": {
          "id": 201
        },
        "DOG": {
          "id": 202
        }
      },
      "demo": "/games/softswiss/CrazyStarter/203"
    },
    "softswiss/PlatinumLightning": {
      "title": "Platinum Lightning",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 230,
        "slots": 775,
        "_hd": 968,
        "all": 1018
      },
      "real": {
        "BTC": {
          "id": 206
        },
        "ETH": {
          "id": 207
        },
        "LTC": {
          "id": 208
        },
        "DOG": {
          "id": 209
        }
      },
      "demo": "/games/softswiss/PlatinumLightning/210"
    },
    "softswiss/PrincessRoyal": {
      "title": "Princess Royal",
      "provider": "bgaming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 792,
        "_hd": 985,
        "all": 1035
      },
      "real": {
        "BTC": {
          "id": 213
        },
        "ETH": {
          "id": 214
        },
        "LTC": {
          "id": 215
        },
        "DOG": {
          "id": 216
        }
      },
      "demo": "/games/softswiss/PrincessRoyal/217"
    },
    "platipus/aztectemple": {
      "title": "Aztec Temple",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 181,
        "slots": 95,
        "_hd": 180,
        "all": 186
      },
      "real": {
        "BTC": {
          "id": 226
        },
        "DOG": {
          "id": 227
        },
        "ETH": {
          "id": 228
        },
        "LTC": {
          "id": 230
        }
      },
      "demo": "/games/platipus/aztectemple/229"
    },
    "platipus/amazonqueen": {
      "title": "Mistress of Amazon",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 681,
        "_hd": 878,
        "all": 927
      },
      "real": {
        "BTC": {
          "id": 233
        },
        "DOG": {
          "id": 234
        },
        "ETH": {
          "id": 235
        },
        "LTC": {
          "id": 237
        }
      },
      "demo": "/games/platipus/amazonqueen/236"
    },
    "platipus/powerofposeidon": {
      "title": "Power Of Poseidon",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 786,
        "_hd": 979,
        "all": 1029
      },
      "real": {
        "BTC": {
          "id": 240
        },
        "DOG": {
          "id": 241
        },
        "ETH": {
          "id": 242
        },
        "LTC": {
          "id": 244
        }
      },
      "demo": "/games/platipus/powerofposeidon/243"
    },
    "platipus/bisontrail": {
      "title": "Bison Trail",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 178,
        "slots": 122,
        "_hd": 205,
        "all": 216
      },
      "real": {
        "BTC": {
          "id": 247
        },
        "DOG": {
          "id": 248
        },
        "ETH": {
          "id": 249
        },
        "LTC": {
          "id": 251
        }
      },
      "demo": "/games/platipus/bisontrail/250"
    },
    "platipus/egyptiangold": {
      "title": "Cleo's Gold",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 226,
        "_hd": 457,
        "all": 473
      },
      "real": {
        "BTC": {
          "id": 254
        },
        "DOG": {
          "id": 255
        },
        "ETH": {
          "id": 256
        },
        "LTC": {
          "id": 258
        }
      },
      "demo": "/games/platipus/egyptiangold/257"
    },
    "platipus/loveis": {
      "title": "Love is",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 596,
        "_hd": 807,
        "all": 848
      },
      "real": {
        "BTC": {
          "id": 261
        },
        "DOG": {
          "id": 262
        },
        "ETH": {
          "id": 263
        },
        "LTC": {
          "id": 265
        }
      },
      "demo": "/games/platipus/loveis/264"
    },
    "platipus/dragonselement": {
      "title": "Dragon's Element",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 314,
        "jackpot": 22,
        "_hd": 538,
        "all": 558
      },
      "real": {
        "BTC": {
          "id": 268
        },
        "DOG": {
          "id": 269
        },
        "ETH": {
          "id": 270
        },
        "LTC": {
          "id": 272
        }
      },
      "demo": "/games/platipus/dragonselement/271"
    },
    "platipus/spacequest": {
      "title": "Fiery Planet",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 355,
        "_hd": 573,
        "all": 597
      },
      "real": {
        "BTC": {
          "id": 275
        },
        "DOG": {
          "id": 276
        },
        "ETH": {
          "id": 277
        },
        "LTC": {
          "id": 279
        }
      },
      "demo": "/games/platipus/spacequest/278"
    },
    "platipus/leprechauns": {
      "title": "Leprechaun's Coins",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 111,
        "slots": 583,
        "jackpot": 33,
        "_hd": 789,
        "all": 830,
        "bonusbuy": 48
      },
      "real": {
        "BTC": {
          "id": 282
        },
        "DOG": {
          "id": 283
        },
        "ETH": {
          "id": 284
        },
        "LTC": {
          "id": 286
        }
      },
      "demo": "/games/platipus/leprechauns/285"
    },
    "platipus/sakuragarden": {
      "title": "Sakura Wind",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 839,
        "_hd": 1032,
        "all": 1084
      },
      "real": {
        "BTC": {
          "id": 289
        },
        "DOG": {
          "id": 290
        },
        "ETH": {
          "id": 291
        },
        "LTC": {
          "id": 293
        }
      },
      "demo": "/games/platipus/sakuragarden/292"
    },
    "platipus/hawaiiannight": {
      "title": "Hawaiian Night",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 463,
        "jackpot": 28,
        "_hd": 684,
        "all": 714
      },
      "real": {
        "BTC": {
          "id": 296
        },
        "DOG": {
          "id": 297
        },
        "ETH": {
          "id": 298
        },
        "LTC": {
          "id": 300
        }
      },
      "demo": "/games/platipus/hawaiiannight/299"
    },
    "platipus/legendofatlantis": {
      "title": "Legend of Atlantis",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 577,
        "_hd": 783,
        "all": 824
      },
      "real": {
        "BTC": {
          "id": 303
        },
        "DOG": {
          "id": 304
        },
        "ETH": {
          "id": 305
        },
        "LTC": {
          "id": 307
        }
      },
      "demo": "/games/platipus/legendofatlantis/306"
    },
    "platipus/juicyspins": {
      "title": "Juicy Spins",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 541,
        "_hd": 756,
        "all": 794
      },
      "real": {
        "BTC": {
          "id": 310
        },
        "DOG": {
          "id": 311
        },
        "ETH": {
          "id": 312
        },
        "LTC": {
          "id": 314
        }
      },
      "demo": "/games/platipus/juicyspins/313"
    },
    "platipus/megadrago": {
      "title": "Mega Drago",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 126,
        "slots": 665,
        "_hd": 863,
        "all": 911
      },
      "real": {
        "BTC": {
          "id": 317
        },
        "DOG": {
          "id": 318
        },
        "ETH": {
          "id": 319
        },
        "LTC": {
          "id": 321
        }
      },
      "demo": "/games/platipus/megadrago/320"
    },
    "platipus/rhinomania": {
      "title": "Rhino Mania",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 118,
        "slots": 813,
        "_hd": 1004,
        "all": 1055
      },
      "real": {
        "BTC": {
          "id": 324
        },
        "DOG": {
          "id": 325
        },
        "ETH": {
          "id": 326
        },
        "LTC": {
          "id": 328
        }
      },
      "demo": "/games/platipus/rhinomania/327"
    },
    "platipus/magicalwolf": {
      "title": "Magical Wolf",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 646,
        "_hd": 846,
        "all": 894
      },
      "real": {
        "BTC": {
          "id": 331
        },
        "DOG": {
          "id": 332
        },
        "ETH": {
          "id": 333
        },
        "LTC": {
          "id": 335
        }
      },
      "demo": "/games/platipus/magicalwolf/334"
    },
    "platipus/junglespin": {
      "title": "Jungle Spin",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 381,
        "slots": 548,
        "_hd": 762,
        "all": 800
      },
      "real": {
        "BTC": {
          "id": 338
        },
        "DOG": {
          "id": 339
        },
        "ETH": {
          "id": 340
        },
        "LTC": {
          "id": 342
        }
      },
      "demo": "/games/platipus/junglespin/341"
    },
    "platipus/hotfruits": {
      "title": "7 & Hot Fruits",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 34,
        "jackpot": 4,
        "_hd": 127,
        "all": 127
      },
      "real": {
        "BTC": {
          "id": 345
        },
        "DOG": {
          "id": 346
        },
        "ETH": {
          "id": 347
        },
        "LTC": {
          "id": 349
        }
      },
      "demo": "/games/platipus/hotfruits/348"
    },
    "platipus/monkeysjourney": {
      "title": "Monkey's Journey",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 692,
        "_hd": 886,
        "all": 935
      },
      "real": {
        "BTC": {
          "id": 352
        },
        "DOG": {
          "id": 353
        },
        "ETH": {
          "id": 354
        },
        "LTC": {
          "id": 356
        }
      },
      "demo": "/games/platipus/monkeysjourney/355"
    },
    "platipus/piratesmap": {
      "title": "Pirates Map",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 195,
        "slots": 773,
        "jackpot": 44,
        "_hd": 966,
        "all": 1016
      },
      "real": {
        "BTC": {
          "id": 359
        },
        "DOG": {
          "id": 360
        },
        "ETH": {
          "id": 361
        },
        "LTC": {
          "id": 363
        }
      },
      "demo": "/games/platipus/piratesmap/362"
    },
    "platipus/richywitchy": {
      "title": "Richy Witchy",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 814,
        "_hd": 1005,
        "all": 1056
      },
      "real": {
        "BTC": {
          "id": 366
        },
        "DOG": {
          "id": 367
        },
        "ETH": {
          "id": 368
        },
        "LTC": {
          "id": 370
        }
      },
      "demo": "/games/platipus/richywitchy/369"
    },
    "platipus/chillifiesta": {
      "title": "Chilli Fiesta",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 213,
        "jackpot": 14,
        "_hd": 397,
        "all": 413
      },
      "real": {
        "BTC": {
          "id": 373
        },
        "DOG": {
          "id": 374
        },
        "ETH": {
          "id": 375
        },
        "LTC": {
          "id": 377
        }
      },
      "demo": "/games/platipus/chillifiesta/376"
    },
    "platipus/safariadventure": {
      "title": "Safari Adventures",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 835,
        "_hd": 1028,
        "all": 1080
      },
      "real": {
        "BTC": {
          "id": 380
        },
        "DOG": {
          "id": 381
        },
        "ETH": {
          "id": 382
        },
        "LTC": {
          "id": 384
        }
      },
      "demo": "/games/platipus/safariadventure/383"
    },
    "platipus/wealthofwisdom": {
      "title": "Wealth of Wisdom",
      "provider": "platipus",
      "collections": {
        "novelty": 107,
        "popularity": 398,
        "slots": 1047,
        "jackpot": 65,
        "_hd": 1275,
        "all": 1331
      },
      "real": {
        "BTC": {
          "id": 387
        },
        "DOG": {
          "id": 388
        },
        "ETH": {
          "id": 389
        },
        "LTC": {
          "id": 391
        }
      },
      "demo": "/games/platipus/wealthofwisdom/390"
    },
    "platipus/cinderella": {
      "title": "Cinderella",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 223,
        "_hd": 406,
        "all": 422
      },
      "real": {
        "BTC": {
          "id": 394
        },
        "DOG": {
          "id": 395
        },
        "ETH": {
          "id": 396
        },
        "LTC": {
          "id": 398
        }
      },
      "demo": "/games/platipus/cinderella/397"
    },
    "platipus/fairyforest": {
      "title": "Fairy Forest",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 347,
        "_hd": 565,
        "all": 588
      },
      "real": {
        "BTC": {
          "id": 401
        },
        "DOG": {
          "id": 402
        },
        "ETH": {
          "id": 403
        },
        "LTC": {
          "id": 405
        }
      },
      "demo": "/games/platipus/fairyforest/404"
    },
    "platipus/powerofgods": {
      "title": "Power of Gods",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 787,
        "_hd": 980,
        "all": 1030
      },
      "real": {
        "BTC": {
          "id": 408
        },
        "DOG": {
          "id": 409
        },
        "ETH": {
          "id": 410
        },
        "LTC": {
          "id": 412
        }
      },
      "demo": "/games/platipus/powerofgods/411"
    },
    "platipus/lordofthesun": {
      "title": "Lord of the Sun",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 592,
        "jackpot": 34,
        "_hd": 803,
        "all": 844
      },
      "real": {
        "BTC": {
          "id": 415
        },
        "DOG": {
          "id": 416
        },
        "ETH": {
          "id": 417
        },
        "LTC": {
          "id": 419
        }
      },
      "demo": "/games/platipus/lordofthesun/418"
    },
    "platipus/webbyheroes": {
      "title": "Webby Heroes",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1048,
        "_hd": 1276,
        "all": 1332
      },
      "real": {
        "BTC": {
          "id": 422
        },
        "DOG": {
          "id": 423
        },
        "ETH": {
          "id": 424
        },
        "LTC": {
          "id": 426
        }
      },
      "demo": "/games/platipus/webbyheroes/425"
    },
    "platipus/RoyalLotus": {
      "title": "Royal Lotus",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 826,
        "jackpot": 49,
        "_hd": 1018,
        "all": 1069
      },
      "real": {
        "BTC": {
          "id": 429
        },
        "DOG": {
          "id": 430
        },
        "ETH": {
          "id": 431
        },
        "LTC": {
          "id": 433
        }
      },
      "demo": "/games/platipus/RoyalLotus/432"
    },
    "platipus/arabiantales": {
      "title": "Arabian Tales",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 74,
        "_hd": 159,
        "all": 163
      },
      "real": {
        "BTC": {
          "id": 436
        },
        "DOG": {
          "id": 437
        },
        "ETH": {
          "id": 438
        },
        "LTC": {
          "id": 440
        }
      },
      "demo": "/games/platipus/arabiantales/439"
    },
    "platipus/wildjustice": {
      "title": "Wild Justice",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 299,
        "slots": 1067,
        "jackpot": 66,
        "_hd": 1292,
        "all": 1350
      },
      "real": {
        "BTC": {
          "id": 443
        },
        "DOG": {
          "id": 444
        },
        "ETH": {
          "id": 445
        },
        "LTC": {
          "id": 447
        }
      },
      "demo": "/games/platipus/wildjustice/446"
    },
    "platipus/thousandonespins": {
      "title": "1001 Spins",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 345,
        "slots": 11,
        "jackpot": 0,
        "_hd": 104,
        "all": 104
      },
      "real": {
        "BTC": {
          "id": 450
        },
        "DOG": {
          "id": 451
        },
        "ETH": {
          "id": 452
        },
        "LTC": {
          "id": 454
        }
      },
      "demo": "/games/platipus/thousandonespins/453"
    },
    "platipus/azteccoins": {
      "title": "Aztec Coins",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 87,
        "jackpot": 6,
        "_hd": 173,
        "all": 178
      },
      "real": {
        "BTC": {
          "id": 457
        },
        "DOG": {
          "id": 458
        },
        "ETH": {
          "id": 459
        },
        "LTC": {
          "id": 461
        }
      },
      "demo": "/games/platipus/azteccoins/460"
    },
    "platipus/magicalmirror": {
      "title": "Magical Mirror",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 645,
        "_hd": 845,
        "all": 893
      },
      "real": {
        "BTC": {
          "id": 464
        },
        "DOG": {
          "id": 465
        },
        "ETH": {
          "id": 466
        },
        "LTC": {
          "id": 468
        }
      },
      "demo": "/games/platipus/magicalmirror/467"
    },
    "platipus/fruitysevens": {
      "title": "Fruity Sevens",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 401,
        "_hd": 628,
        "all": 654
      },
      "real": {
        "BTC": {
          "id": 471
        },
        "DOG": {
          "id": 472
        },
        "ETH": {
          "id": 473
        },
        "LTC": {
          "id": 475
        }
      },
      "demo": "/games/platipus/fruitysevens/474"
    },
    "platipus/mightofzeus": {
      "title": "Might of Zeus",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 676,
        "jackpot": 38,
        "_hd": 873,
        "all": 922
      },
      "real": {
        "BTC": {
          "id": 478
        },
        "DOG": {
          "id": 479
        },
        "ETH": {
          "id": 480
        },
        "LTC": {
          "id": 482
        }
      },
      "demo": "/games/platipus/mightofzeus/481"
    },
    "platipus/wildspin": {
      "title": "Wild Spin",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1075,
        "jackpot": 67,
        "_hd": 1298,
        "all": 1358
      },
      "real": {
        "BTC": {
          "id": 485
        },
        "DOG": {
          "id": 486
        },
        "ETH": {
          "id": 487
        },
        "LTC": {
          "id": 489
        }
      },
      "demo": "/games/platipus/wildspin/488"
    },
    "platipus/theancientfour": {
      "title": "The Ancient Four",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 282,
        "slots": 956,
        "_hd": 1187,
        "all": 1240
      },
      "real": {
        "BTC": {
          "id": 492
        },
        "DOG": {
          "id": 493
        },
        "ETH": {
          "id": 494
        },
        "LTC": {
          "id": 496
        }
      },
      "demo": "/games/platipus/theancientfour/495"
    },
    "platipus/caishensgifts": {
      "title": "Caishen's Gifts",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 179,
        "_hd": 365,
        "all": 379
      },
      "real": {
        "BTC": {
          "id": 499
        },
        "DOG": {
          "id": 500
        },
        "ETH": {
          "id": 501
        },
        "LTC": {
          "id": 503
        }
      },
      "demo": "/games/platipus/caishensgifts/502"
    },
    "platipus/crazyjelly": {
      "title": "Crazy Jelly",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 246,
        "_hd": 477,
        "all": 493
      },
      "real": {
        "BTC": {
          "id": 506
        },
        "DOG": {
          "id": 507
        },
        "ETH": {
          "id": 508
        },
        "LTC": {
          "id": 510
        }
      },
      "demo": "/games/platipus/crazyjelly/509"
    },
    "platipus/princessofbirds": {
      "title": "Princess of Birds",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 793,
        "_hd": 986,
        "all": 1036
      },
      "real": {
        "BTC": {
          "id": 513
        },
        "DOG": {
          "id": 514
        },
        "ETH": {
          "id": 515
        },
        "LTC": {
          "id": 517
        }
      },
      "demo": "/games/platipus/princessofbirds/516"
    },
    "platipus/crocoman": {
      "title": "Crocoman",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 249,
        "_hd": 481,
        "all": 497
      },
      "real": {
        "BTC": {
          "id": 520
        },
        "DOG": {
          "id": 521
        },
        "ETH": {
          "id": 522
        },
        "LTC": {
          "id": 524
        }
      },
      "demo": "/games/platipus/crocoman/523"
    },
    "platipus/luckycat": {
      "title": "Lucky Cat",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 603,
        "jackpot": 35,
        "_hd": 811,
        "all": 854
      },
      "real": {
        "BTC": {
          "id": 527
        },
        "DOG": {
          "id": 528
        },
        "ETH": {
          "id": 529
        },
        "LTC": {
          "id": 531
        }
      },
      "demo": "/games/platipus/luckycat/530"
    },
    "platipus/bookofegypt": {
      "title": "Book of Egypt",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 129,
        "slots": 142,
        "_hd": 331,
        "all": 345
      },
      "real": {
        "BTC": {
          "id": 534
        },
        "DOG": {
          "id": 535
        },
        "ETH": {
          "id": 536
        },
        "LTC": {
          "id": 538
        }
      },
      "demo": "/games/platipus/bookofegypt/537"
    },
    "platipus/neonclassic": {
      "title": "Neon Classic",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 713,
        "_hd": 906,
        "all": 955
      },
      "real": {
        "BTC": {
          "id": 541
        },
        "DOG": {
          "id": 542
        },
        "ETH": {
          "id": 543
        },
        "LTC": {
          "id": 545
        }
      },
      "demo": "/games/platipus/neonclassic/544"
    },
    "platipus/crystalsevens": {
      "title": "Crystal Sevens",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 254,
        "_hd": 485,
        "all": 501
      },
      "real": {
        "BTC": {
          "id": 548
        },
        "DOG": {
          "id": 549
        },
        "ETH": {
          "id": 550
        },
        "LTC": {
          "id": 552
        }
      },
      "demo": "/games/platipus/crystalsevens/551"
    },
    "platipus/greatocean": {
      "title": "Great Ocean",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 443,
        "_hd": 666,
        "all": 696
      },
      "real": {
        "BTC": {
          "id": 555
        },
        "DOG": {
          "id": 556
        },
        "ETH": {
          "id": 557
        },
        "LTC": {
          "id": 559
        }
      },
      "demo": "/games/platipus/greatocean/558"
    },
    "platipus/guisesofdracula": {
      "title": "Guises of Dracula",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 451,
        "jackpot": 25,
        "_hd": 674,
        "all": 704
      },
      "real": {
        "BTC": {
          "id": 562
        },
        "DOG": {
          "id": 563
        },
        "ETH": {
          "id": 564
        },
        "LTC": {
          "id": 566
        }
      },
      "demo": "/games/platipus/guisesofdracula/565"
    },
    "platipus/tripledragon": {
      "title": "Triple Dragon",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1013,
        "_hd": 1242,
        "all": 1295
      },
      "real": {
        "BTC": {
          "id": 569
        },
        "DOG": {
          "id": 570
        },
        "ETH": {
          "id": 571
        },
        "LTC": {
          "id": 573
        }
      },
      "demo": "/games/platipus/tripledragon/572"
    },
    "platipus/bamboogrove": {
      "title": "Bamboo Grove",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 98,
        "jackpot": 7,
        "_hd": 188,
        "all": 194
      },
      "real": {
        "BTC": {
          "id": 576
        },
        "DOG": {
          "id": 577
        },
        "ETH": {
          "id": 578
        },
        "LTC": {
          "id": 580
        }
      },
      "demo": "/games/platipus/bamboogrove/579"
    },
    "platipus/jewelblast": {
      "title": "Jewel Bang",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 520,
        "_hd": 736,
        "all": 774
      },
      "real": {
        "BTC": {
          "id": 583
        },
        "DOG": {
          "id": 584
        },
        "ETH": {
          "id": 585
        },
        "LTC": {
          "id": 587
        }
      },
      "demo": "/games/platipus/jewelblast/586"
    },
    "platipus/dynastywarriors": {
      "title": "Dynasty Warriors",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 323,
        "jackpot": 23,
        "_hd": 545,
        "all": 567
      },
      "real": {
        "BTC": {
          "id": 590
        },
        "DOG": {
          "id": 591
        },
        "ETH": {
          "id": 592
        },
        "LTC": {
          "id": 594
        }
      },
      "demo": "/games/platipus/dynastywarriors/593"
    },
    "platipus/chinesetigers": {
      "title": "Chinese Tigers",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 218,
        "jackpot": 15,
        "_hd": 402,
        "all": 418
      },
      "real": {
        "BTC": {
          "id": 597
        },
        "DOG": {
          "id": 598
        },
        "ETH": {
          "id": 599
        },
        "LTC": {
          "id": 601
        }
      },
      "demo": "/games/platipus/chinesetigers/600"
    },
    "platipus/santasbag": {
      "title": "Santa's Bag",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 844,
        "jackpot": 50,
        "_hd": 1049,
        "all": 1101
      },
      "real": {
        "BTC": {
          "id": 604
        },
        "DOG": {
          "id": 605
        },
        "ETH": {
          "id": 606
        },
        "LTC": {
          "id": 608
        }
      },
      "demo": "/games/platipus/santasbag/607"
    },
    "platipus/pharaohsempire": {
      "title": "Pharaoh's Empire",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 755,
        "_hd": 951,
        "all": 1001
      },
      "real": {
        "BTC": {
          "id": 611
        },
        "DOG": {
          "id": 612
        },
        "ETH": {
          "id": 613
        },
        "LTC": {
          "id": 615
        }
      },
      "demo": "/games/platipus/pharaohsempire/614"
    },
    "platipus/luckydolphin": {
      "title": "Lucky Dolphin",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 608,
        "_hd": 814,
        "all": 858
      },
      "real": {
        "BTC": {
          "id": 618
        },
        "DOG": {
          "id": 619
        },
        "ETH": {
          "id": 620
        },
        "LTC": {
          "id": 622
        }
      },
      "demo": "/games/platipus/luckydolphin/621"
    },
    "platipus/dajidali": {
      "title": "Da Ji Da Li",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 260,
        "jackpot": 21,
        "_hd": 490,
        "all": 507
      },
      "real": {
        "BTC": {
          "id": 625
        },
        "DOG": {
          "id": 626
        },
        "ETH": {
          "id": 627
        },
        "LTC": {
          "id": 629
        }
      },
      "demo": "/games/platipus/dajidali/628"
    },
    "platipus/jackpotlab": {
      "title": "Jackpot Lab",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 514,
        "jackpot": 30,
        "_hd": 730,
        "all": 768
      },
      "real": {
        "BTC": {
          "id": 632
        },
        "DOG": {
          "id": 633
        },
        "ETH": {
          "id": 634
        },
        "LTC": {
          "id": 636
        }
      },
      "demo": "/games/platipus/jackpotlab/635"
    },
    "platipus/jadevalley": {
      "title": "Jade Valley",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 517,
        "jackpot": 31,
        "_hd": 732,
        "all": 770
      },
      "real": {
        "BTC": {
          "id": 639
        },
        "DOG": {
          "id": 640
        },
        "ETH": {
          "id": 641
        },
        "LTC": {
          "id": 643
        }
      },
      "demo": "/games/platipus/jadevalley/642"
    },
    "platipus/luckymoney": {
      "title": "Lucky Money",
      "provider": "platipus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 625,
        "_hd": 831,
        "all": 875
      },
      "real": {
        "BTC": {
          "id": 646
        },
        "DOG": {
          "id": 647
        },
        "ETH": {
          "id": 648
        },
        "LTC": {
          "id": 650
        }
      },
      "demo": "/games/platipus/luckymoney/649"
    },
    "habanero/SGPuckerUpPrince": {
      "title": "Pucker Up Prince",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 796,
        "_hd": 989,
        "all": 1039
      },
      "real": {
        "BTC": {
          "id": 653
        },
        "DOG": {
          "id": 654
        },
        "ETH": {
          "id": 655
        },
        "LTC": {
          "id": 657
        }
      },
      "demo": "/games/habanero/SGPuckerUpPrince/656"
    },
    "habanero/SGColossalGems": {
      "title": "Colossal Gems",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 233,
        "_hd": 463,
        "all": 479
      },
      "real": {
        "BTC": {
          "id": 660
        },
        "DOG": {
          "id": 661
        },
        "ETH": {
          "id": 662
        },
        "LTC": {
          "id": 664
        }
      },
      "demo": "/games/habanero/SGColossalGems/663"
    },
    "habanero/SGWildTrucks": {
      "title": "Wild Trucks",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 80,
        "slots": 1077,
        "_hd": 1299,
        "all": 1360
      },
      "real": {
        "BTC": {
          "id": 667
        },
        "DOG": {
          "id": 668
        },
        "ETH": {
          "id": 669
        },
        "LTC": {
          "id": 671
        }
      },
      "demo": "/games/habanero/SGWildTrucks/670"
    },
    "habanero/SGMarvelousFurlongs": {
      "title": "Marvelous Furlongs",
      "provider": "habanero",
      "collections": {
        "novelty": 40,
        "popularity": 229,
        "slots": 654,
        "jackpot": 37,
        "_hd": 852,
        "all": 900
      },
      "real": {
        "BTC": {
          "id": 674
        },
        "DOG": {
          "id": 675
        },
        "ETH": {
          "id": 676
        },
        "LTC": {
          "id": 678
        }
      },
      "demo": "/games/habanero/SGMarvelousFurlongs/677"
    },
    "habanero/SGRuffledUp": {
      "title": "Ruffled Up",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 281,
        "slots": 832,
        "_hd": 1023,
        "all": 1075
      },
      "real": {
        "BTC": {
          "id": 681
        },
        "DOG": {
          "id": 682
        },
        "ETH": {
          "id": 683
        },
        "LTC": {
          "id": 685
        }
      },
      "demo": "/games/habanero/SGRuffledUp/684"
    },
    "habanero/SGTheKoiGate": {
      "title": "The Koi Gate",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 177,
        "slots": 978,
        "_hd": 1209,
        "all": 1262
      },
      "real": {
        "BTC": {
          "id": 688
        },
        "DOG": {
          "id": 689
        },
        "ETH": {
          "id": 690
        },
        "LTC": {
          "id": 692
        }
      },
      "demo": "/games/habanero/SGTheKoiGate/691"
    },
    "habanero/SGKnockoutFootballRush": {
      "title": "Knockout Football Rush",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 368,
        "slots": 562,
        "accumulating": 10,
        "_hd": 771,
        "all": 810
      },
      "real": {
        "BTC": {
          "id": 695
        },
        "DOG": {
          "id": 696
        },
        "ETH": {
          "id": 697
        },
        "LTC": {
          "id": 699
        }
      },
      "demo": "/games/habanero/SGKnockoutFootballRush/698"
    },
    "habanero/SGPandaPanda": {
      "title": "Panda Panda",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 322,
        "slots": 738,
        "_hd": 935,
        "all": 984
      },
      "real": {
        "BTC": {
          "id": 702
        },
        "DOG": {
          "id": 703
        },
        "ETH": {
          "id": 704
        },
        "LTC": {
          "id": 706
        }
      },
      "demo": "/games/habanero/SGPandaPanda/705"
    },
    "habanero/SGJellyfishFlow": {
      "title": "Jellyfish Flow",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 518,
        "accumulating": 7,
        "_hd": 734,
        "all": 772
      },
      "real": {
        "BTC": {
          "id": 709
        },
        "DOG": {
          "id": 710
        },
        "ETH": {
          "id": 711
        },
        "LTC": {
          "id": 713
        }
      },
      "demo": "/games/habanero/SGJellyfishFlow/712"
    },
    "habanero/SGLuckyLucky": {
      "title": "Lucky Lucky",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 624,
        "_hd": 830,
        "all": 874
      },
      "real": {
        "BTC": {
          "id": 716
        },
        "DOG": {
          "id": 717
        },
        "ETH": {
          "id": 718
        },
        "LTC": {
          "id": 720
        }
      },
      "demo": "/games/habanero/SGLuckyLucky/719"
    },
    "habanero/SGScruffyScallywags": {
      "title": "Scruffy Scallywags",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 242,
        "slots": 857,
        "_hd": 1060,
        "all": 1113
      },
      "real": {
        "BTC": {
          "id": 723
        },
        "DOG": {
          "id": 724
        },
        "ETH": {
          "id": 725
        },
        "LTC": {
          "id": 727
        }
      },
      "demo": "/games/habanero/SGScruffyScallywags/726"
    },
    "habanero/SGPumpkinPatch": {
      "title": "Pumpkin Patch",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 797,
        "accumulating": 17,
        "_hd": 990,
        "all": 1040
      },
      "real": {
        "BTC": {
          "id": 730
        },
        "DOG": {
          "id": 731
        },
        "ETH": {
          "id": 732
        },
        "LTC": {
          "id": 734
        }
      },
      "demo": "/games/habanero/SGPumpkinPatch/733"
    },
    "habanero/SG5LuckyLions": {
      "title": "5 Lucky Lions",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 74,
        "slots": 31,
        "_hd": 124,
        "all": 124
      },
      "real": {
        "BTC": {
          "id": 737
        },
        "DOG": {
          "id": 738
        },
        "ETH": {
          "id": 739
        },
        "LTC": {
          "id": 741
        }
      },
      "demo": "/games/habanero/SG5LuckyLions/740"
    },
    "habanero/SGFaCaiShenDeluxe": {
      "title": "Fa Cai Shen Deluxe",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 93,
        "slots": 346,
        "_hd": 564,
        "all": 587
      },
      "real": {
        "BTC": {
          "id": 744
        },
        "DOG": {
          "id": 745
        },
        "ETH": {
          "id": 746
        },
        "LTC": {
          "id": 748
        }
      },
      "demo": "/games/habanero/SGFaCaiShenDeluxe/747"
    },
    "habanero/SGCashosaurus": {
      "title": "Cashosaurus",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 268,
        "slots": 195,
        "_hd": 380,
        "all": 395
      },
      "real": {
        "BTC": {
          "id": 751
        },
        "DOG": {
          "id": 752
        },
        "ETH": {
          "id": 753
        },
        "LTC": {
          "id": 755
        }
      },
      "demo": "/games/habanero/SGCashosaurus/754"
    },
    "habanero/SGEgyptianDreamsDeluxe": {
      "title": "Egyptian Dreams Deluxe",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 325,
        "accumulating": 5,
        "_hd": 547,
        "all": 569
      },
      "real": {
        "BTC": {
          "id": 758
        },
        "DOG": {
          "id": 759
        },
        "ETH": {
          "id": 760
        },
        "LTC": {
          "id": 762
        }
      },
      "demo": "/games/habanero/SGEgyptianDreamsDeluxe/761"
    },
    "habanero/SGSantasVillage": {
      "title": "Santa's Village",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 162,
        "slots": 847,
        "accumulating": 19,
        "_hd": 1051,
        "all": 1103
      },
      "real": {
        "BTC": {
          "id": 765
        },
        "DOG": {
          "id": 766
        },
        "ETH": {
          "id": 767
        },
        "LTC": {
          "id": 769
        }
      },
      "demo": "/games/habanero/SGSantasVillage/768"
    },
    "habanero/SGDiscoFunk": {
      "title": "Disco Funk",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 352,
        "slots": 291,
        "_hd": 517,
        "all": 537
      },
      "real": {
        "BTC": {
          "id": 772
        },
        "DOG": {
          "id": 773
        },
        "ETH": {
          "id": 774
        },
        "LTC": {
          "id": 776
        }
      },
      "demo": "/games/habanero/SGDiscoFunk/775"
    },
    "habanero/SGWaysOfFortune": {
      "title": "Ways of Fortune",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1045,
        "_hd": 1273,
        "all": 1329
      },
      "real": {
        "BTC": {
          "id": 779
        },
        "DOG": {
          "id": 780
        },
        "ETH": {
          "id": 781
        },
        "LTC": {
          "id": 783
        }
      },
      "demo": "/games/habanero/SGWaysOfFortune/782"
    },
    "habanero/SGOrbsOfAtlantis": {
      "title": "Orbs Of Atlantis",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 79,
        "slots": 734,
        "jackpot": 43,
        "_hd": 931,
        "all": 980,
        "bonusbuy": 50
      },
      "real": {
        "BTC": {
          "id": 786
        },
        "DOG": {
          "id": 787
        },
        "ETH": {
          "id": 788
        },
        "LTC": {
          "id": 790
        }
      },
      "demo": "/games/habanero/SGOrbsOfAtlantis/789"
    },
    "habanero/SGTabernaDeLosMuertosUltra": {
      "title": "Taberna De Los Muertos Ultra",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 77,
        "slots": 949,
        "jackpot": 58,
        "_hd": 1181,
        "all": 1234
      },
      "real": {
        "BTC": {
          "id": 793
        },
        "DOG": {
          "id": 794
        },
        "ETH": {
          "id": 795
        },
        "LTC": {
          "id": 797
        }
      },
      "demo": "/games/habanero/SGTabernaDeLosMuertosUltra/796"
    },
    "habanero/SGDragonsThrone": {
      "title": "Dragon's Throne",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 317,
        "_hd": 541,
        "all": 561
      },
      "real": {
        "BTC": {
          "id": 800
        },
        "DOG": {
          "id": 801
        },
        "ETH": {
          "id": 802
        },
        "LTC": {
          "id": 804
        }
      },
      "demo": "/games/habanero/SGDragonsThrone/803"
    },
    "habanero/SGCandyTower": {
      "title": "Candy Tower",
      "provider": "habanero",
      "collections": {
        "novelty": 53,
        "popularity": 398,
        "slots": 185,
        "_hd": 370,
        "all": 384
      },
      "real": {
        "BTC": {
          "id": 807
        },
        "DOG": {
          "id": 808
        },
        "ETH": {
          "id": 809
        },
        "LTC": {
          "id": 811
        }
      },
      "demo": "/games/habanero/SGCandyTower/810"
    },
    "habanero/SGNaughtySanta": {
      "title": "Naughty Santa",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 710,
        "_hd": 904,
        "all": 953
      },
      "real": {
        "BTC": {
          "id": 814
        },
        "DOG": {
          "id": 815
        },
        "ETH": {
          "id": 816
        },
        "LTC": {
          "id": 818
        }
      },
      "demo": "/games/habanero/SGNaughtySanta/817"
    },
    "habanero/SGTabernaDeLosMuertos": {
      "title": "Taberna De Los Muertos",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 335,
        "slots": 948,
        "jackpot": 57,
        "_hd": 1180,
        "all": 1233
      },
      "real": {
        "BTC": {
          "id": 821
        },
        "DOG": {
          "id": 822
        },
        "ETH": {
          "id": 823
        },
        "LTC": {
          "id": 825
        }
      },
      "demo": "/games/habanero/SGTabernaDeLosMuertos/824"
    },
    "habanero/SGCarnivalCash": {
      "title": "Carnival Cash",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 188,
        "_hd": 373,
        "all": 387
      },
      "real": {
        "BTC": {
          "id": 828
        },
        "DOG": {
          "id": 829
        },
        "ETH": {
          "id": 830
        },
        "LTC": {
          "id": 832
        }
      },
      "demo": "/games/habanero/SGCarnivalCash/831"
    },
    "habanero/SGPoolShark": {
      "title": "Pool Shark",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 314,
        "slots": 781,
        "_hd": 974,
        "all": 1024
      },
      "real": {
        "BTC": {
          "id": 835
        },
        "DOG": {
          "id": 836
        },
        "ETH": {
          "id": 837
        },
        "LTC": {
          "id": 839
        }
      },
      "demo": "/games/habanero/SGPoolShark/838"
    },
    "habanero/SGLoonyBlox": {
      "title": "Loony Blox",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 591,
        "_hd": 802,
        "all": 843
      },
      "real": {
        "BTC": {
          "id": 842
        },
        "DOG": {
          "id": 843
        },
        "ETH": {
          "id": 844
        },
        "LTC": {
          "id": 846
        }
      },
      "demo": "/games/habanero/SGLoonyBlox/845"
    },
    "habanero/SGTechnoTumble": {
      "title": "Techno Tumble",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 951,
        "jackpot": 59,
        "_hd": 1183,
        "all": 1236
      },
      "real": {
        "BTC": {
          "id": 849
        },
        "DOG": {
          "id": 850
        },
        "ETH": {
          "id": 851
        },
        "LTC": {
          "id": 853
        }
      },
      "demo": "/games/habanero/SGTechnoTumble/852"
    },
    "habanero/SGHappiestChristmasTree": {
      "title": "Happiest Christmas Tree",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 456,
        "_hd": 679,
        "all": 709
      },
      "real": {
        "BTC": {
          "id": 856
        },
        "DOG": {
          "id": 857
        },
        "ETH": {
          "id": 858
        },
        "LTC": {
          "id": 860
        }
      },
      "demo": "/games/habanero/SGHappiestChristmasTree/859"
    },
    "habanero/SGChristmasGiftRush": {
      "title": "Christmas Gift Rush",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 103,
        "slots": 221,
        "jackpot": 16,
        "_hd": 404,
        "all": 420,
        "bonusbuy": 49
      },
      "real": {
        "BTC": {
          "id": 863
        },
        "DOG": {
          "id": 864
        },
        "ETH": {
          "id": 865
        },
        "LTC": {
          "id": 867
        }
      },
      "demo": "/games/habanero/SGChristmasGiftRush/866"
    },
    "habanero/SGFireRooster": {
      "title": "Fire Rooster",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 359,
        "_hd": 577,
        "all": 601
      },
      "real": {
        "BTC": {
          "id": 870
        },
        "DOG": {
          "id": 871
        },
        "ETH": {
          "id": 872
        },
        "LTC": {
          "id": 874
        }
      },
      "demo": "/games/habanero/SGFireRooster/873"
    },
    "habanero/SGTotemTowers": {
      "title": "Totem Towers",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1004,
        "_hd": 1233,
        "all": 1286
      },
      "real": {
        "BTC": {
          "id": 877
        },
        "DOG": {
          "id": 878
        },
        "ETH": {
          "id": 879
        },
        "LTC": {
          "id": 881
        }
      },
      "demo": "/games/habanero/SGTotemTowers/880"
    },
    "habanero/SGQueenOfQueens1024": {
      "title": "Queen of Queens II",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 365,
        "slots": 802,
        "_hd": 995,
        "all": 1045
      },
      "real": {
        "BTC": {
          "id": 884
        },
        "DOG": {
          "id": 885
        },
        "ETH": {
          "id": 886
        },
        "LTC": {
          "id": 888
        }
      },
      "demo": "/games/habanero/SGQueenOfQueens1024/887"
    },
    "habanero/SGCashReef": {
      "title": "Cash Reef",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 194,
        "_hd": 378,
        "all": 393
      },
      "real": {
        "BTC": {
          "id": 891
        },
        "DOG": {
          "id": 892
        },
        "ETH": {
          "id": 893
        },
        "LTC": {
          "id": 895
        }
      },
      "demo": "/games/habanero/SGCashReef/894"
    },
    "habanero/SGKnockoutFootball": {
      "title": "Knockout Football",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 283,
        "slots": 561,
        "accumulating": 9,
        "_hd": 770,
        "all": 809
      },
      "real": {
        "BTC": {
          "id": 898
        },
        "DOG": {
          "id": 899
        },
        "ETH": {
          "id": 900
        },
        "LTC": {
          "id": 902
        }
      },
      "demo": "/games/habanero/SGKnockoutFootball/901"
    },
    "habanero/SGTowerOfPizza": {
      "title": "Tower Of Pizza",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1008,
        "_hd": 1237,
        "all": 1290
      },
      "real": {
        "BTC": {
          "id": 905
        },
        "DOG": {
          "id": 906
        },
        "ETH": {
          "id": 907
        },
        "LTC": {
          "id": 909
        }
      },
      "demo": "/games/habanero/SGTowerOfPizza/908"
    },
    "habanero/SGZeus": {
      "title": "Zeus",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 290,
        "slots": 1101,
        "_hd": 1319,
        "all": 1381
      },
      "real": {
        "BTC": {
          "id": 912
        },
        "DOG": {
          "id": 913
        },
        "ETH": {
          "id": 914
        },
        "LTC": {
          "id": 916
        }
      },
      "demo": "/games/habanero/SGZeus/915"
    },
    "habanero/SGSuperStrike": {
      "title": "Super Strike",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 376,
        "slots": 936,
        "_hd": 1168,
        "all": 1221
      },
      "real": {
        "BTC": {
          "id": 919
        },
        "DOG": {
          "id": 920
        },
        "ETH": {
          "id": 921
        },
        "LTC": {
          "id": 923
        }
      },
      "demo": "/games/habanero/SGSuperStrike/922"
    },
    "habanero/SGFourDivineBeasts": {
      "title": "Four Divine Beasts",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 239,
        "slots": 378,
        "_hd": 603,
        "all": 629
      },
      "real": {
        "BTC": {
          "id": 926
        },
        "DOG": {
          "id": 927
        },
        "ETH": {
          "id": 928
        },
        "LTC": {
          "id": 930
        }
      },
      "demo": "/games/habanero/SGFourDivineBeasts/929"
    },
    "habanero/SGHotHotHalloween": {
      "title": "Hot Hot Halloween",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 492,
        "_hd": 709,
        "all": 743
      },
      "real": {
        "BTC": {
          "id": 933
        },
        "DOG": {
          "id": 934
        },
        "ETH": {
          "id": 935
        },
        "LTC": {
          "id": 937
        }
      },
      "demo": "/games/habanero/SGHotHotHalloween/936"
    },
    "habanero/SGKanesInferno": {
      "title": "Kane's Inferno",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 550,
        "_hd": 764,
        "all": 802
      },
      "real": {
        "BTC": {
          "id": 940
        },
        "DOG": {
          "id": 941
        },
        "ETH": {
          "id": 942
        },
        "LTC": {
          "id": 944
        }
      },
      "demo": "/games/habanero/SGKanesInferno/943"
    },
    "habanero/SGWickedWitch": {
      "title": "Wicked Witch",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 334,
        "slots": 1053,
        "_hd": 1281,
        "all": 1337
      },
      "real": {
        "BTC": {
          "id": 947
        },
        "DOG": {
          "id": 948
        },
        "ETH": {
          "id": 949
        },
        "LTC": {
          "id": 951
        }
      },
      "demo": "/games/habanero/SGWickedWitch/950"
    },
    "habanero/SGFaCaiShen": {
      "title": "Fa Cai Shen",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 345,
        "_hd": 563,
        "all": 586
      },
      "real": {
        "BTC": {
          "id": 954
        },
        "DOG": {
          "id": 955
        },
        "ETH": {
          "id": 956
        },
        "LTC": {
          "id": 958
        }
      },
      "demo": "/games/habanero/SGFaCaiShen/957"
    },
    "habanero/SGPresto": {
      "title": "Presto!",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 108,
        "slots": 790,
        "accumulating": 15,
        "_hd": 983,
        "all": 1033
      },
      "real": {
        "BTC": {
          "id": 961
        },
        "DOG": {
          "id": 962
        },
        "ETH": {
          "id": 963
        },
        "LTC": {
          "id": 965
        }
      },
      "demo": "/games/habanero/SGPresto/964"
    },
    "habanero/SGGoldenUnicorn": {
      "title": "Golden Unicorn",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 437,
        "_hd": 659,
        "all": 688
      },
      "real": {
        "BTC": {
          "id": 968
        },
        "DOG": {
          "id": 969
        },
        "ETH": {
          "id": 970
        },
        "LTC": {
          "id": 972
        }
      },
      "demo": "/games/habanero/SGGoldenUnicorn/971"
    },
    "habanero/SGTreasureDiver": {
      "title": "Treasure Diver",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 232,
        "slots": 1009,
        "_hd": 1238,
        "all": 1291
      },
      "real": {
        "BTC": {
          "id": 975
        },
        "DOG": {
          "id": 976
        },
        "ETH": {
          "id": 977
        },
        "LTC": {
          "id": 979
        }
      },
      "demo": "/games/habanero/SGTreasureDiver/978"
    },
    "habanero/SGScopa": {
      "title": "Scopa",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 854,
        "jackpot": 51,
        "_hd": 1057,
        "all": 1110
      },
      "real": {
        "BTC": {
          "id": 982
        },
        "DOG": {
          "id": 983
        },
        "ETH": {
          "id": 984
        },
        "LTC": {
          "id": 986
        }
      },
      "demo": "/games/habanero/SGScopa/985"
    },
    "habanero/SGMagicOak": {
      "title": "Magic Oak",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 642,
        "accumulating": 13,
        "_hd": 844,
        "all": 891
      },
      "real": {
        "BTC": {
          "id": 989
        },
        "DOG": {
          "id": 990
        },
        "ETH": {
          "id": 991
        },
        "LTC": {
          "id": 993
        }
      },
      "demo": "/games/habanero/SGMagicOak/992"
    },
    "habanero/SGGalacticCash": {
      "title": "Galactic Cash",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 372,
        "slots": 403,
        "_hd": 630,
        "all": 656
      },
      "real": {
        "BTC": {
          "id": 996
        },
        "DOG": {
          "id": 997
        },
        "ETH": {
          "id": 998
        },
        "LTC": {
          "id": 1000
        }
      },
      "demo": "/games/habanero/SGGalacticCash/999"
    },
    "habanero/SGRomanEmpire": {
      "title": "Roman Empire",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 820,
        "_hd": 1011,
        "all": 1062
      },
      "real": {
        "BTC": {
          "id": 1003
        },
        "DOG": {
          "id": 1004
        },
        "ETH": {
          "id": 1005
        },
        "LTC": {
          "id": 1007
        }
      },
      "demo": "/games/habanero/SGRomanEmpire/1006"
    },
    "habanero/SGMysticFortuneDeluxe": {
      "title": "Mystic Fortune Deluxe",
      "provider": "habanero",
      "collections": {
        "novelty": 16,
        "popularity": 398,
        "slots": 708,
        "jackpot": 41,
        "_hd": 902,
        "all": 951
      },
      "real": {
        "BTC": {
          "id": 1010
        },
        "DOG": {
          "id": 1011
        },
        "ETH": {
          "id": 1012
        },
        "LTC": {
          "id": 1014
        }
      },
      "demo": "/games/habanero/SGMysticFortuneDeluxe/1013"
    },
    "habanero/SGGangsters": {
      "title": "Gangsters",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 313,
        "slots": 405,
        "_hd": 632,
        "all": 658
      },
      "real": {
        "BTC": {
          "id": 1017
        },
        "DOG": {
          "id": 1018
        },
        "ETH": {
          "id": 1019
        },
        "LTC": {
          "id": 1021
        }
      },
      "demo": "/games/habanero/SGGangsters/1020"
    },
    "habanero/SGJungleRumble": {
      "title": "Jungle Rumble",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 547,
        "_hd": 761,
        "all": 799
      },
      "real": {
        "BTC": {
          "id": 1024
        },
        "DOG": {
          "id": 1025
        },
        "ETH": {
          "id": 1026
        },
        "LTC": {
          "id": 1028
        }
      },
      "demo": "/games/habanero/SGJungleRumble/1027"
    },
    "habanero/SGJump": {
      "title": "Jump!",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 302,
        "slots": 544,
        "_hd": 759,
        "all": 797
      },
      "real": {
        "BTC": {
          "id": 1031
        },
        "DOG": {
          "id": 1032
        },
        "ETH": {
          "id": 1033
        },
        "LTC": {
          "id": 1035
        }
      },
      "demo": "/games/habanero/SGJump/1034"
    },
    "habanero/SGMummyMoney": {
      "title": "Mummy Money",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 703,
        "_hd": 897,
        "all": 946
      },
      "real": {
        "BTC": {
          "id": 1038
        },
        "DOG": {
          "id": 1039
        },
        "ETH": {
          "id": 1040
        },
        "LTC": {
          "id": 1042
        }
      },
      "demo": "/games/habanero/SGMummyMoney/1041"
    },
    "habanero/SGDragonsRealm": {
      "title": "Dragon's Realm",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 316,
        "_hd": 540,
        "all": 560
      },
      "real": {
        "BTC": {
          "id": 1045
        },
        "DOG": {
          "id": 1046
        },
        "ETH": {
          "id": 1047
        },
        "LTC": {
          "id": 1049
        }
      },
      "demo": "/games/habanero/SGDragonsRealm/1048"
    },
    "habanero/SGMrBling": {
      "title": "Mr Bling",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 383,
        "slots": 702,
        "_hd": 896,
        "all": 945
      },
      "real": {
        "BTC": {
          "id": 1052
        },
        "DOG": {
          "id": 1053
        },
        "ETH": {
          "id": 1054
        },
        "LTC": {
          "id": 1056
        }
      },
      "demo": "/games/habanero/SGMrBling/1055"
    },
    "habanero/SGCoyoteCrash": {
      "title": "Coyote Crash",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 243,
        "_hd": 473,
        "all": 489
      },
      "real": {
        "BTC": {
          "id": 1059
        },
        "DOG": {
          "id": 1060
        },
        "ETH": {
          "id": 1061
        },
        "LTC": {
          "id": 1063
        }
      },
      "demo": "/games/habanero/SGCoyoteCrash/1062"
    },
    "habanero/SGCalaverasExplosivas": {
      "title": "Calaveras Explosivas",
      "provider": "habanero",
      "collections": {
        "novelty": 26,
        "popularity": 398,
        "slots": 182,
        "_hd": 368,
        "all": 382
      },
      "real": {
        "BTC": {
          "id": 1066
        },
        "DOG": {
          "id": 1067
        },
        "ETH": {
          "id": 1068
        },
        "LTC": {
          "id": 1070
        }
      },
      "demo": "/games/habanero/SGCalaverasExplosivas/1069"
    },
    "habanero/SG5Mariachis": {
      "title": "5 Mariachis",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 32,
        "_hd": 125,
        "all": 125
      },
      "real": {
        "BTC": {
          "id": 1073
        },
        "DOG": {
          "id": 1074
        },
        "ETH": {
          "id": 1075
        },
        "LTC": {
          "id": 1077
        }
      },
      "demo": "/games/habanero/SG5Mariachis/1076"
    },
    "habanero/SGWizardsWantWar": {
      "title": "Wizards Want War",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1089,
        "_hd": 1310,
        "all": 1371
      },
      "real": {
        "BTC": {
          "id": 1080
        },
        "DOG": {
          "id": 1081
        },
        "ETH": {
          "id": 1082
        },
        "LTC": {
          "id": 1084
        }
      },
      "demo": "/games/habanero/SGWizardsWantWar/1083"
    },
    "habanero/SGBirdOfThunder": {
      "title": "Bird of Thunder",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 121,
        "_hd": 204,
        "all": 215
      },
      "real": {
        "BTC": {
          "id": 1087
        },
        "DOG": {
          "id": 1088
        },
        "ETH": {
          "id": 1089
        },
        "LTC": {
          "id": 1091
        }
      },
      "demo": "/games/habanero/SGBirdOfThunder/1090"
    },
    "habanero/SGHotHotFruit": {
      "title": "Hot Hot Fruit",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 267,
        "slots": 491,
        "_hd": 708,
        "all": 742
      },
      "real": {
        "BTC": {
          "id": 1094
        },
        "DOG": {
          "id": 1095
        },
        "ETH": {
          "id": 1096
        },
        "LTC": {
          "id": 1098
        }
      },
      "demo": "/games/habanero/SGHotHotFruit/1097"
    },
    "habanero/SGReturnToTheFeature": {
      "title": "Return to the Feature",
      "provider": "habanero",
      "collections": {
        "novelty": 64,
        "popularity": 16,
        "slots": 810,
        "_hd": 1001,
        "all": 1052,
        "bonusbuy": 51
      },
      "real": {
        "BTC": {
          "id": 1101
        },
        "DOG": {
          "id": 1102
        },
        "ETH": {
          "id": 1103
        },
        "LTC": {
          "id": 1105
        }
      },
      "demo": "/games/habanero/SGReturnToTheFeature/1104"
    },
    "habanero/SGShaolinFortunes243": {
      "title": "Shaolin Fortunes",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 187,
        "slots": 863,
        "_hd": 1066,
        "all": 1119
      },
      "real": {
        "BTC": {
          "id": 1108
        },
        "DOG": {
          "id": 1109
        },
        "ETH": {
          "id": 1110
        },
        "LTC": {
          "id": 1112
        }
      },
      "demo": "/games/habanero/SGShaolinFortunes243/1111"
    },
    "habanero/SGFenghuang": {
      "title": "Fenghuang",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 219,
        "slots": 353,
        "all": 595
      },
      "real": {
        "BTC": {
          "id": 1115
        },
        "DOG": {
          "id": 1116
        },
        "ETH": {
          "id": 1117
        },
        "LTC": {
          "id": 1119
        }
      },
      "demo": "/games/habanero/SGFenghuang/1118"
    },
    "habanero/SGNuwa": {
      "title": "Nuwa",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 727,
        "_hd": 924,
        "all": 973
      },
      "real": {
        "BTC": {
          "id": 1122
        },
        "DOG": {
          "id": 1123
        },
        "ETH": {
          "id": 1124
        },
        "LTC": {
          "id": 1126
        }
      },
      "demo": "/games/habanero/SGNuwa/1125"
    },
    "habanero/SGFlyingHigh": {
      "title": "Flying High",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 371,
        "_hd": 598,
        "all": 623
      },
      "real": {
        "BTC": {
          "id": 1129
        },
        "DOG": {
          "id": 1130
        },
        "ETH": {
          "id": 1131
        },
        "LTC": {
          "id": 1133
        }
      },
      "demo": "/games/habanero/SGFlyingHigh/1132"
    },
    "habanero/SGTheDeadEscape": {
      "title": "The Dead Escape",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 962,
        "_hd": 1193,
        "all": 1246
      },
      "real": {
        "BTC": {
          "id": 1136
        },
        "DOG": {
          "id": 1137
        },
        "ETH": {
          "id": 1138
        },
        "LTC": {
          "id": 1140
        }
      },
      "demo": "/games/habanero/SGTheDeadEscape/1139"
    },
    "habanero/SGRollingRoger": {
      "title": "Rolling Roger",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 819,
        "_hd": 1010,
        "all": 1061
      },
      "real": {
        "BTC": {
          "id": 1143
        },
        "DOG": {
          "id": 1144
        },
        "ETH": {
          "id": 1145
        },
        "LTC": {
          "id": 1147
        }
      },
      "demo": "/games/habanero/SGRollingRoger/1146"
    },
    "habanero/SG12Zodiacs": {
      "title": "12 Zodiacs",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 14,
        "_hd": 107,
        "all": 107
      },
      "real": {
        "BTC": {
          "id": 1150
        },
        "DOG": {
          "id": 1151
        },
        "ETH": {
          "id": 1152
        },
        "LTC": {
          "id": 1154
        }
      },
      "demo": "/games/habanero/SG12Zodiacs/1153"
    },
    "habanero/SGMonsterMashCash": {
      "title": "Monster Mash Cash",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 694,
        "_hd": 889,
        "all": 938
      },
      "real": {
        "BTC": {
          "id": 1157
        },
        "DOG": {
          "id": 1158
        },
        "ETH": {
          "id": 1159
        },
        "LTC": {
          "id": 1161
        }
      },
      "demo": "/games/habanero/SGMonsterMashCash/1160"
    },
    "habanero/SGOceansCall": {
      "title": "Ocean's Call",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 729,
        "_hd": 926,
        "all": 975
      },
      "real": {
        "BTC": {
          "id": 1164
        },
        "DOG": {
          "id": 1165
        },
        "ETH": {
          "id": 1166
        },
        "LTC": {
          "id": 1168
        }
      },
      "demo": "/games/habanero/SGOceansCall/1167"
    },
    "habanero/SGVikingsPlunder": {
      "title": "Viking's Plunder",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1039,
        "_hd": 1267,
        "all": 1323
      },
      "real": {
        "BTC": {
          "id": 1171
        },
        "DOG": {
          "id": 1172
        },
        "ETH": {
          "id": 1173
        },
        "LTC": {
          "id": 1175
        }
      },
      "demo": "/games/habanero/SGVikingsPlunder/1174"
    },
    "habanero/SGLittleGreenMoney": {
      "title": "Little Green Money",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 588,
        "_hd": 797,
        "all": 838
      },
      "real": {
        "BTC": {
          "id": 1178
        },
        "DOG": {
          "id": 1179
        },
        "ETH": {
          "id": 1180
        },
        "LTC": {
          "id": 1182
        }
      },
      "demo": "/games/habanero/SGLittleGreenMoney/1181"
    },
    "habanero/SGSOS": {
      "title": "S.O.S!",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 834,
        "_hd": 1027,
        "all": 1079
      },
      "real": {
        "BTC": {
          "id": 1185
        },
        "DOG": {
          "id": 1186
        },
        "ETH": {
          "id": 1187
        },
        "LTC": {
          "id": 1189
        }
      },
      "demo": "/games/habanero/SGSOS/1188"
    },
    "habanero/SGFortuneDogs": {
      "title": "Fortune Dogs",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 374,
        "_hd": 601,
        "all": 627
      },
      "real": {
        "BTC": {
          "id": 1192
        },
        "DOG": {
          "id": 1193
        },
        "ETH": {
          "id": 1194
        },
        "LTC": {
          "id": 1196
        }
      },
      "demo": "/games/habanero/SGFortuneDogs/1195"
    },
    "habanero/SGBikiniIsland": {
      "title": "Bikini Island",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 118,
        "_hd": 203,
        "all": 212
      },
      "real": {
        "BTC": {
          "id": 1199
        },
        "DOG": {
          "id": 1200
        },
        "ETH": {
          "id": 1201
        },
        "LTC": {
          "id": 1203
        }
      },
      "demo": "/games/habanero/SGBikiniIsland/1202"
    },
    "habanero/SGHappyApe": {
      "title": "Happy Ape",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 457,
        "jackpot": 27,
        "_hd": 680,
        "all": 710
      },
      "real": {
        "BTC": {
          "id": 1206
        },
        "DOG": {
          "id": 1207
        },
        "ETH": {
          "id": 1208
        },
        "LTC": {
          "id": 1210
        }
      },
      "demo": "/games/habanero/SGHappyApe/1209"
    },
    "habanero/SGJugglenaut": {
      "title": "Jugglenaut",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 539,
        "_hd": 754,
        "all": 792
      },
      "real": {
        "BTC": {
          "id": 1213
        },
        "DOG": {
          "id": 1214
        },
        "ETH": {
          "id": 1215
        },
        "LTC": {
          "id": 1217
        }
      },
      "demo": "/games/habanero/SGJugglenaut/1216"
    },
    "habanero/SGHeySushi": {
      "title": "Hey Sushi",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 468,
        "_hd": 689,
        "all": 719
      },
      "real": {
        "BTC": {
          "id": 1220
        },
        "DOG": {
          "id": 1221
        },
        "ETH": {
          "id": 1222
        },
        "LTC": {
          "id": 1224
        }
      },
      "demo": "/games/habanero/SGHeySushi/1223"
    },
    "habanero/SGBeforeTimeRunsOut": {
      "title": "Before Time Runs Out",
      "provider": "habanero",
      "collections": {
        "novelty": 78,
        "popularity": 398,
        "slots": 109,
        "jackpot": 9,
        "_hd": 197,
        "all": 203
      },
      "real": {
        "BTC": {
          "id": 1227
        },
        "DOG": {
          "id": 1228
        },
        "ETH": {
          "id": 1229
        },
        "LTC": {
          "id": 1231
        }
      },
      "demo": "/games/habanero/SGBeforeTimeRunsOut/1230"
    },
    "habanero/SGMysticFortune": {
      "title": "Mystic Fortune",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 707,
        "_hd": 901,
        "all": 950
      },
      "real": {
        "BTC": {
          "id": 1234
        },
        "DOG": {
          "id": 1235
        },
        "ETH": {
          "id": 1236
        },
        "LTC": {
          "id": 1238
        }
      },
      "demo": "/games/habanero/SGMysticFortune/1237"
    },
    "habanero/SGCakeValley": {
      "title": "Cake Valley",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 181,
        "_hd": 367,
        "all": 381
      },
      "real": {
        "BTC": {
          "id": 1241
        },
        "DOG": {
          "id": 1242
        },
        "ETH": {
          "id": 1243
        },
        "LTC": {
          "id": 1245
        }
      },
      "demo": "/games/habanero/SGCakeValley/1244"
    },
    "habanero/SGWeirdScience": {
      "title": "Weird Science",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1049,
        "_hd": 1277,
        "all": 1333
      },
      "real": {
        "BTC": {
          "id": 1248
        },
        "DOG": {
          "id": 1249
        },
        "ETH": {
          "id": 1250
        },
        "LTC": {
          "id": 1252
        }
      },
      "demo": "/games/habanero/SGWeirdScience/1251"
    },
    "habanero/SGLondonHunter": {
      "title": "London Hunter",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 590,
        "accumulating": 12,
        "_hd": 800,
        "all": 841
      },
      "real": {
        "BTC": {
          "id": 1255
        },
        "DOG": {
          "id": 1256
        },
        "ETH": {
          "id": 1257
        },
        "LTC": {
          "id": 1259
        }
      },
      "demo": "/games/habanero/SGLondonHunter/1258"
    },
    "habanero/SGTheDragonCastle": {
      "title": "Dragon Castle",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 301,
        "_hd": 527,
        "all": 547
      },
      "real": {
        "BTC": {
          "id": 1262
        },
        "DOG": {
          "id": 1263
        },
        "ETH": {
          "id": 1264
        },
        "LTC": {
          "id": 1266
        }
      },
      "demo": "/games/habanero/SGTheDragonCastle/1265"
    },
    "habanero/SGGoldRush": {
      "title": "Gold Rush",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 420,
        "_hd": 645,
        "all": 672
      },
      "real": {
        "BTC": {
          "id": 1269
        },
        "DOG": {
          "id": 1270
        },
        "ETH": {
          "id": 1271
        },
        "LTC": {
          "id": 1273
        }
      },
      "demo": "/games/habanero/SGGoldRush/1272"
    },
    "habanero/SGMountMazuma": {
      "title": "Mount Mazuma",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 73,
        "slots": 701,
        "_hd": 895,
        "all": 944
      },
      "real": {
        "BTC": {
          "id": 1276
        },
        "DOG": {
          "id": 1277
        },
        "ETH": {
          "id": 1278
        },
        "LTC": {
          "id": 1280
        }
      },
      "demo": "/games/habanero/SGMountMazuma/1279"
    },
    "habanero/SGArcticWonders": {
      "title": "Arctic Wonders",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 79,
        "_hd": 165,
        "all": 169
      },
      "real": {
        "BTC": {
          "id": 1283
        },
        "DOG": {
          "id": 1284
        },
        "ETH": {
          "id": 1285
        },
        "LTC": {
          "id": 1287
        }
      },
      "demo": "/games/habanero/SGArcticWonders/1286"
    },
    "habanero/SGWealthInn": {
      "title": "Wealth Inn",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1046,
        "_hd": 1274,
        "all": 1330
      },
      "real": {
        "BTC": {
          "id": 1290
        },
        "DOG": {
          "id": 1291
        },
        "ETH": {
          "id": 1292
        },
        "LTC": {
          "id": 1294
        }
      },
      "demo": "/games/habanero/SGWealthInn/1293"
    },
    "habanero/SGLuckyFortuneCat": {
      "title": "Lucky Fortune Cat",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 614,
        "_hd": 820,
        "all": 864
      },
      "real": {
        "BTC": {
          "id": 1297
        },
        "DOG": {
          "id": 1298
        },
        "ETH": {
          "id": 1299
        },
        "LTC": {
          "id": 1301
        }
      },
      "demo": "/games/habanero/SGLuckyFortuneCat/1300"
    },
    "habanero/SGPamperMe": {
      "title": "Pamper Me",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 736,
        "_hd": 933,
        "all": 982
      },
      "real": {
        "BTC": {
          "id": 1304
        },
        "DOG": {
          "id": 1305
        },
        "ETH": {
          "id": 1306
        },
        "LTC": {
          "id": 1308
        }
      },
      "demo": "/games/habanero/SGPamperMe/1307"
    },
    "habanero/SGBuggyBonus": {
      "title": "Buggy Bonus",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 174,
        "_hd": 361,
        "all": 375
      },
      "real": {
        "BTC": {
          "id": 1311
        },
        "DOG": {
          "id": 1312
        },
        "ETH": {
          "id": 1313
        },
        "LTC": {
          "id": 1315
        }
      },
      "demo": "/games/habanero/SGBuggyBonus/1314"
    },
    "habanero/SGSuperTwister": {
      "title": "Super Twister",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 317,
        "slots": 937,
        "_hd": 1169,
        "all": 1222
      },
      "real": {
        "BTC": {
          "id": 1318
        },
        "DOG": {
          "id": 1319
        },
        "ETH": {
          "id": 1320
        },
        "LTC": {
          "id": 1322
        }
      },
      "demo": "/games/habanero/SGSuperTwister/1321"
    },
    "habanero/SGIndianCashCatcher": {
      "title": "Indian Cash Catcher",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 512,
        "_hd": 726,
        "all": 764
      },
      "real": {
        "BTC": {
          "id": 1325
        },
        "DOG": {
          "id": 1326
        },
        "ETH": {
          "id": 1327
        },
        "LTC": {
          "id": 1329
        }
      },
      "demo": "/games/habanero/SGIndianCashCatcher/1328"
    },
    "habanero/SGAllForOne": {
      "title": "All For One",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 279,
        "slots": 61,
        "_hd": 148,
        "all": 150
      },
      "real": {
        "BTC": {
          "id": 1332
        },
        "DOG": {
          "id": 1333
        },
        "ETH": {
          "id": 1334
        },
        "LTC": {
          "id": 1336
        }
      },
      "demo": "/games/habanero/SGAllForOne/1335"
    },
    "habanero/SGSparta": {
      "title": "Sparta",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 893,
        "_hd": 1096,
        "all": 1149
      },
      "real": {
        "BTC": {
          "id": 1339
        },
        "DOG": {
          "id": 1340
        },
        "ETH": {
          "id": 1341
        },
        "LTC": {
          "id": 1343
        }
      },
      "demo": "/games/habanero/SGSparta/1342"
    },
    "habanero/SGSpaceFortune": {
      "title": "Space Fortune",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 253,
        "slots": 892,
        "_hd": 1095,
        "all": 1148
      },
      "real": {
        "BTC": {
          "id": 1346
        },
        "DOG": {
          "id": 1347
        },
        "ETH": {
          "id": 1348
        },
        "LTC": {
          "id": 1350
        }
      },
      "demo": "/games/habanero/SGSpaceFortune/1349"
    },
    "habanero/SGTheBigDeal": {
      "title": "The Big Deal",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 957,
        "_hd": 1188,
        "all": 1241
      },
      "real": {
        "BTC": {
          "id": 1353
        },
        "DOG": {
          "id": 1354
        },
        "ETH": {
          "id": 1355
        },
        "LTC": {
          "id": 1357
        }
      },
      "demo": "/games/habanero/SGTheBigDeal/1356"
    },
    "habanero/SGBombsAway": {
      "title": "Bombs Away",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 132,
        "_hd": 324,
        "all": 336
      },
      "real": {
        "BTC": {
          "id": 1360
        },
        "DOG": {
          "id": 1361
        },
        "ETH": {
          "id": 1362
        },
        "LTC": {
          "id": 1364
        }
      },
      "demo": "/games/habanero/SGBombsAway/1363"
    },
    "habanero/SGArcaneElements": {
      "title": "Arcane Elements",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 77,
        "_hd": 163,
        "all": 167
      },
      "real": {
        "BTC": {
          "id": 1367
        },
        "DOG": {
          "id": 1368
        },
        "ETH": {
          "id": 1369
        },
        "LTC": {
          "id": 1371
        }
      },
      "demo": "/games/habanero/SGArcaneElements/1370"
    },
    "habanero/SGBarnstormerBucks": {
      "title": "Barnstormer Bucks",
      "provider": "habanero",
      "collections": {
        "novelty": 0,
        "popularity": 275,
        "slots": 101,
        "_hd": 191,
        "all": 197
      },
      "real": {
        "BTC": {
          "id": 1374
        },
        "DOG": {
          "id": 1375
        },
        "ETH": {
          "id": 1376
        },
        "LTC": {
          "id": 1378
        }
      },
      "demo": "/games/habanero/SGBarnstormerBucks/1377"
    },
    "tomhorn/DragonRiches": {
      "title": "Dragon Riches",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 308,
        "_hd": 532,
        "all": 552
      },
      "real": {
        "BTC": {
          "id": 1381
        },
        "DOG": {
          "id": 1382
        },
        "ETH": {
          "id": 1383
        }
      },
      "demo": "/games/tomhorn/DragonRiches/1384"
    },
    "tomhorn/SizableWin": {
      "title": "Sizable Win",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 877,
        "_hd": 1081,
        "all": 1134
      },
      "real": {
        "BTC": {
          "id": 1386
        },
        "DOG": {
          "id": 1387
        },
        "ETH": {
          "id": 1388
        }
      },
      "demo": "/games/tomhorn/SizableWin/1389"
    },
    "tomhorn/BlackbeardsQuest": {
      "title": "Blackbeard's Quest",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 124,
        "_hd": 207,
        "all": 218
      },
      "real": {
        "BTC": {
          "id": 1391
        },
        "DOG": {
          "id": 1392
        },
        "ETH": {
          "id": 1393
        }
      },
      "demo": "/games/tomhorn/BlackbeardsQuest/1394"
    },
    "tomhorn/FrozenQueen": {
      "title": "Frozen Queen",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 386,
        "_hd": 613,
        "all": 639
      },
      "real": {
        "BTC": {
          "id": 1396
        },
        "DOG": {
          "id": 1397
        },
        "ETH": {
          "id": 1398
        }
      },
      "demo": "/games/tomhorn/FrozenQueen/1399"
    },
    "tomhorn/WildWeather": {
      "title": "Wild Weather",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1080,
        "_hd": 1302,
        "all": 1363
      },
      "real": {
        "BTC": {
          "id": 1401
        },
        "DOG": {
          "id": 1402
        },
        "ETH": {
          "id": 1403
        }
      },
      "demo": "/games/tomhorn/WildWeather/1404"
    },
    "tomhorn/Spinball": {
      "title": "Spinball",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 900,
        "_hd": 1134,
        "all": 1187
      },
      "real": {
        "BTC": {
          "id": 1406
        },
        "DOG": {
          "id": 1407
        },
        "ETH": {
          "id": 1408
        }
      },
      "demo": "/games/tomhorn/Spinball/1409"
    },
    "tomhorn/GeishasFan": {
      "title": "Geisha's Fan",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 407,
        "_hd": 634,
        "all": 660
      },
      "real": {
        "BTC": {
          "id": 1411
        },
        "DOG": {
          "id": 1412
        },
        "ETH": {
          "id": 1413
        }
      },
      "demo": "/games/tomhorn/GeishasFan/1414"
    },
    "tomhorn/FlamingFruit": {
      "title": "Flaming Fruit",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 367,
        "_hd": 594,
        "all": 619
      },
      "real": {
        "BTC": {
          "id": 1416
        },
        "DOG": {
          "id": 1417
        },
        "ETH": {
          "id": 1418
        }
      },
      "demo": "/games/tomhorn/FlamingFruit/1419"
    },
    "tomhorn/243CrystalFruits": {
      "title": "243 Crystal Fruits",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 17,
        "_hd": 111,
        "all": 111
      },
      "real": {
        "BTC": {
          "id": 1421
        },
        "DOG": {
          "id": 1422
        },
        "ETH": {
          "id": 1423
        }
      },
      "demo": "/games/tomhorn/243CrystalFruits/1424"
    },
    "tomhorn/WolfSierra": {
      "title": "Wolf Sierra",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1094,
        "_hd": 1312,
        "all": 1374
      },
      "real": {
        "BTC": {
          "id": 1426
        },
        "DOG": {
          "id": 1427
        },
        "ETH": {
          "id": 1428
        }
      },
      "demo": "/games/tomhorn/WolfSierra/1429"
    },
    "tomhorn/ThronesofPersia": {
      "title": "Thrones of Persia",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 998,
        "_hd": 1229,
        "all": 1282
      },
      "real": {
        "BTC": {
          "id": 1431
        },
        "DOG": {
          "id": 1432
        },
        "ETH": {
          "id": 1433
        }
      },
      "demo": "/games/tomhorn/ThronesofPersia/1434"
    },
    "tomhorn/243CrystalFruitsReversed": {
      "title": "243 Crystal Fruits Reversed",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 18,
        "_hd": 112,
        "all": 112
      },
      "real": {
        "BTC": {
          "id": 1436
        },
        "DOG": {
          "id": 1437
        },
        "ETH": {
          "id": 1438
        }
      },
      "demo": "/games/tomhorn/243CrystalFruitsReversed/1439"
    },
    "tomhorn/FengFu": {
      "title": "Feng Fu",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 351,
        "_hd": 570,
        "all": 593
      },
      "real": {
        "BTC": {
          "id": 1441
        },
        "DOG": {
          "id": 1442
        },
        "ETH": {
          "id": 1443
        }
      },
      "demo": "/games/tomhorn/FengFu/1444"
    },
    "tomhorn/DragonEgg": {
      "title": "Dragon Egg",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 302,
        "_hd": 528,
        "all": 548
      },
      "real": {
        "BTC": {
          "id": 1446
        },
        "DOG": {
          "id": 1447
        },
        "ETH": {
          "id": 1448
        }
      },
      "demo": "/games/tomhorn/DragonEgg/1449"
    },
    "tomhorn/PandasRun": {
      "title": "Pandas Run",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 740,
        "_hd": 937,
        "all": 986
      },
      "real": {
        "BTC": {
          "id": 1451
        },
        "DOG": {
          "id": 1452
        },
        "ETH": {
          "id": 1453
        }
      },
      "demo": "/games/tomhorn/PandasRun/1454"
    },
    "tomhorn/BlackbeardsQuestMiniGame": {
      "title": "Blackbeard's Quest Mini Game",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 125,
        "_hd": 208,
        "all": 219
      },
      "real": {
        "BTC": {
          "id": 1456
        },
        "DOG": {
          "id": 1457
        },
        "ETH": {
          "id": 1458
        }
      },
      "demo": "/games/tomhorn/BlackbeardsQuestMiniGame/1459"
    },
    "tomhorn/BeastieBux": {
      "title": "Beastie Bux",
      "provider": "tomhorn",
      "collections": {
        "novelty": 36,
        "popularity": 398,
        "slots": 105,
        "_hd": 193,
        "all": 199
      },
      "real": {
        "BTC": {
          "id": 1461
        },
        "DOG": {
          "id": 1462
        },
        "ETH": {
          "id": 1463
        }
      },
      "demo": "/games/tomhorn/BeastieBux/1464"
    },
    "tomhorn/SweetCrush": {
      "title": "Sweet Crush",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 942,
        "_hd": 1174,
        "all": 1227
      },
      "real": {
        "BTC": {
          "id": 1466
        },
        "DOG": {
          "id": 1467
        },
        "ETH": {
          "id": 1468
        }
      },
      "demo": "/games/tomhorn/SweetCrush/1469"
    },
    "tomhorn/BookOfSpells": {
      "title": "Book Of Spells",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 136,
        "_hd": 326,
        "all": 340
      },
      "real": {
        "BTC": {
          "id": 1471
        },
        "DOG": {
          "id": 1472
        },
        "ETH": {
          "id": 1473
        }
      },
      "demo": "/games/tomhorn/BookOfSpells/1474"
    },
    "tomhorn/TripleJoker": {
      "title": "Triple Joker",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1015,
        "_hd": 1244,
        "all": 1297
      },
      "real": {
        "BTC": {
          "id": 1476
        },
        "DOG": {
          "id": 1477
        },
        "ETH": {
          "id": 1478
        }
      },
      "demo": "/games/tomhorn/TripleJoker/1479"
    },
    "tomhorn/DiamondHill": {
      "title": "Diamond Hill",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 282,
        "_hd": 510,
        "all": 528
      },
      "real": {
        "BTC": {
          "id": 1481
        },
        "DOG": {
          "id": 1482
        },
        "ETH": {
          "id": 1483
        }
      },
      "demo": "/games/tomhorn/DiamondHill/1484"
    },
    "tomhorn/LaTomatina": {
      "title": "La Tomatina",
      "provider": "tomhorn",
      "collections": {
        "novelty": 52,
        "popularity": 398,
        "slots": 568,
        "_hd": 776,
        "all": 816
      },
      "real": {
        "BTC": {
          "id": 1486
        },
        "DOG": {
          "id": 1487
        },
        "ETH": {
          "id": 1488
        }
      },
      "demo": "/games/tomhorn/LaTomatina/1489"
    },
    "tomhorn/FireandHot": {
      "title": "Fire and Hot",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 361,
        "_hd": 579,
        "all": 603
      },
      "real": {
        "BTC": {
          "id": 1491
        },
        "DOG": {
          "id": 1492
        },
        "ETH": {
          "id": 1493
        }
      },
      "demo": "/games/tomhorn/FireandHot/1494"
    },
    "tomhorn/JokerReelz": {
      "title": "Joker Reelz",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 534,
        "_hd": 749,
        "all": 787
      },
      "real": {
        "BTC": {
          "id": 1496
        },
        "DOG": {
          "id": 1497
        },
        "ETH": {
          "id": 1498
        }
      },
      "demo": "/games/tomhorn/JokerReelz/1499"
    },
    "tomhorn/TheSecretofBa": {
      "title": "The Secret of Ba",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 988,
        "_hd": 1219,
        "all": 1272
      },
      "real": {
        "BTC": {
          "id": 1501
        },
        "DOG": {
          "id": 1502
        },
        "ETH": {
          "id": 1503
        }
      },
      "demo": "/games/tomhorn/TheSecretofBa/1504"
    },
    "tomhorn/TheCup": {
      "title": "The Cup",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 961,
        "_hd": 1192,
        "all": 1245
      },
      "real": {
        "BTC": {
          "id": 1506
        },
        "DOG": {
          "id": 1507
        },
        "ETH": {
          "id": 1508
        }
      },
      "demo": "/games/tomhorn/TheCup/1509"
    },
    "tomhorn/Sherlock": {
      "title": "Sherlock. A Scandal in Bohemia",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 867,
        "_hd": 1070,
        "all": 1123
      },
      "real": {
        "BTC": {
          "id": 1511
        },
        "DOG": {
          "id": 1512
        },
        "ETH": {
          "id": 1513
        }
      },
      "demo": "/games/tomhorn/Sherlock/1514"
    },
    "tomhorn/MonsterMadness": {
      "title": "Monster Madness",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 693,
        "_hd": 888,
        "all": 937
      },
      "real": {
        "BTC": {
          "id": 1516
        },
        "DOG": {
          "id": 1517
        },
        "ETH": {
          "id": 1518
        }
      },
      "demo": "/games/tomhorn/MonsterMadness/1519"
    },
    "tomhorn/WheelofLuck1": {
      "title": "Wheel of Luck",
      "provider": "tomhorn",
      "collections": {
        "novelty": 89,
        "popularity": 398,
        "slots": 1051,
        "_hd": 1279,
        "all": 1335
      },
      "real": {
        "BTC": {
          "id": 1521
        },
        "DOG": {
          "id": 1522
        },
        "ETH": {
          "id": 1523
        }
      },
      "demo": "/games/tomhorn/WheelofLuck1/1524"
    },
    "tomhorn/GoldX": {
      "title": "Gold X",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 424,
        "_hd": 649,
        "all": 676
      },
      "real": {
        "BTC": {
          "id": 1526
        },
        "DOG": {
          "id": 1527
        },
        "ETH": {
          "id": 1528
        }
      },
      "demo": "/games/tomhorn/GoldX/1529"
    },
    "tomhorn/DonJuansPeppers": {
      "title": "Don Juan's Peppers",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 296,
        "_hd": 521,
        "all": 541
      },
      "real": {
        "BTC": {
          "id": 1531
        },
        "DOG": {
          "id": 1532
        },
        "ETH": {
          "id": 1533
        }
      },
      "demo": "/games/tomhorn/DonJuansPeppers/1534"
    },
    "tomhorn/ShaolinsTiger": {
      "title": "Shaolin's Tiger",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 864,
        "_hd": 1067,
        "all": 1120
      },
      "real": {
        "BTC": {
          "id": 1536
        },
        "DOG": {
          "id": 1537
        },
        "ETH": {
          "id": 1538
        }
      },
      "demo": "/games/tomhorn/ShaolinsTiger/1539"
    },
    "tomhorn/BlackMummy": {
      "title": "Black Mummy",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 123,
        "_hd": 206,
        "all": 217
      },
      "real": {
        "BTC": {
          "id": 1541
        },
        "DOG": {
          "id": 1542
        },
        "ETH": {
          "id": 1543
        }
      },
      "demo": "/games/tomhorn/BlackMummy/1544"
    },
    "tomhorn/SavannahKing": {
      "title": "Savannah King",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 852,
        "_hd": 1056,
        "all": 1108
      },
      "real": {
        "BTC": {
          "id": 1546
        },
        "DOG": {
          "id": 1547
        },
        "ETH": {
          "id": 1548
        }
      },
      "demo": "/games/tomhorn/SavannahKing/1549"
    },
    "tomhorn/HotBlizzard": {
      "title": "Hot Blizzard",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 478,
        "_hd": 698,
        "all": 730
      },
      "real": {
        "BTC": {
          "id": 1551
        },
        "DOG": {
          "id": 1552
        },
        "ETH": {
          "id": 1553
        }
      },
      "demo": "/games/tomhorn/HotBlizzard/1554"
    },
    "tomhorn/KongoBongo": {
      "title": "Kongo Bongo",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 563,
        "_hd": 772,
        "all": 811
      },
      "real": {
        "BTC": {
          "id": 1556
        },
        "DOG": {
          "id": 1557
        },
        "ETH": {
          "id": 1558
        }
      },
      "demo": "/games/tomhorn/KongoBongo/1559"
    },
    "tomhorn/Monkey27": {
      "title": "Monkey 27",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 687,
        "_hd": 882,
        "all": 931
      },
      "real": {
        "BTC": {
          "id": 1561
        },
        "DOG": {
          "id": 1562
        },
        "ETH": {
          "id": 1563
        }
      },
      "demo": "/games/tomhorn/Monkey27/1564"
    },
    "tomhorn/SkyBarons": {
      "title": "Sky Barons",
      "provider": "tomhorn",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 878,
        "_hd": 1082,
        "all": 1135
      },
      "real": {
        "BTC": {
          "id": 1566
        },
        "DOG": {
          "id": 1567
        },
        "ETH": {
          "id": 1568
        }
      },
      "demo": "/games/tomhorn/SkyBarons/1569"
    },
    "tomhorn/81FrutasGrandes": {
      "title": "81 Frutas Grandes",
      "provider": "tomhorn",
      "collections": {
        "novelty": 60,
        "popularity": 398,
        "slots": 40,
        "_hd": 133,
        "all": 133
      },
      "real": {
        "BTC": {
          "id": 1571
        },
        "DOG": {
          "id": 1572
        },
        "ETH": {
          "id": 1573
        }
      },
      "demo": "/games/tomhorn/81FrutasGrandes/1574"
    },
    "belatra/88DragonsTreasure": {
      "title": "88 Dragons Bounty",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 41,
        "jackpot": 5,
        "_hd": 134,
        "all": 134
      },
      "real": {
        "BTC": {
          "id": 1576,
          "jackpot": 561500000
        },
        "DOG": {
          "id": 1577,
          "jackpot": 131268128534106
        },
        "ETH": {
          "id": 1578,
          "jackpot": 75999495725
        },
        "LTC": {
          "id": 1580,
          "jackpot": 170034521512
        }
      },
      "demo": "/games/belatra/88DragonsTreasure/1579"
    },
    "belatra/GoldenBucks": {
      "title": "Golden Bucks",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 427,
        "_hd": 651,
        "all": 679
      },
      "real": {
        "BTC": {
          "id": 1583
        },
        "DOG": {
          "id": 1584
        },
        "ETH": {
          "id": 1585
        },
        "LTC": {
          "id": 1587
        }
      },
      "demo": "/games/belatra/GoldenBucks/1586"
    },
    "belatra/LocalPub": {
      "title": "Local Pub",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 589,
        "_hd": 799,
        "all": 840
      },
      "real": {
        "BTC": {
          "id": 1590
        },
        "DOG": {
          "id": 1591
        },
        "ETH": {
          "id": 1592
        },
        "LTC": {
          "id": 1594
        }
      },
      "demo": "/games/belatra/LocalPub/1593"
    },
    "belatra/TheSmartRabbit": {
      "title": "The Smart Rabbit",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 989,
        "_hd": 1220,
        "all": 1273
      },
      "real": {
        "BTC": {
          "id": 1597
        },
        "DOG": {
          "id": 1598
        },
        "ETH": {
          "id": 1599
        },
        "LTC": {
          "id": 1601
        }
      },
      "demo": "/games/belatra/TheSmartRabbit/1600"
    },
    "belatra/PrehistoricStory": {
      "title": "Prehistoric Story",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 88,
        "slots": 789,
        "jackpot": 45,
        "_hd": 982,
        "all": 1032,
        "bonusbuy": 101
      },
      "real": {
        "BTC": {
          "id": 1604,
          "jackpot": 66004207
        },
        "DOG": {
          "id": 1605,
          "jackpot": 15430541495705
        },
        "ETH": {
          "id": 1606,
          "jackpot": 8933725082
        },
        "LTC": {
          "id": 1608,
          "jackpot": 19987523012
        }
      },
      "demo": "/games/belatra/PrehistoricStory/1607"
    },
    "belatra/HungryCaterpillars": {
      "title": "Caterpillars",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 201,
        "_hd": 386,
        "all": 402
      },
      "real": {
        "BTC": {
          "id": 1611
        },
        "DOG": {
          "id": 1612
        },
        "ETH": {
          "id": 1613
        },
        "LTC": {
          "id": 1615
        }
      },
      "demo": "/games/belatra/HungryCaterpillars/1614"
    },
    "belatra/ChristmasJackpot": {
      "title": "Christmas Jackpot",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 222,
        "jackpot": 17,
        "_hd": 405,
        "all": 421
      },
      "real": {
        "BTC": {
          "id": 1618
        },
        "DOG": {
          "id": 1619
        },
        "ETH": {
          "id": 1620
        },
        "LTC": {
          "id": 1622
        }
      },
      "demo": "/games/belatra/ChristmasJackpot/1621"
    },
    "belatra/ShogunsFortune": {
      "title": "Shogun's Fortune",
      "provider": "belatra",
      "collections": {
        "novelty": 56,
        "popularity": 42,
        "slots": 869,
        "jackpot": 52,
        "_hd": 1072,
        "all": 1125,
        "bonusbuy": 102
      },
      "real": {
        "BTC": {
          "id": 1625
        },
        "DOG": {
          "id": 1626
        },
        "ETH": {
          "id": 1627
        },
        "LTC": {
          "id": 1629
        }
      },
      "demo": "/games/belatra/ShogunsFortune/1628"
    },
    "belatra/HighwayStars": {
      "title": "Highway Stars",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 252,
        "slots": 469,
        "_hd": 690,
        "all": 720
      },
      "real": {
        "BTC": {
          "id": 1632
        },
        "DOG": {
          "id": 1633
        },
        "ETH": {
          "id": 1634
        },
        "LTC": {
          "id": 1636
        }
      },
      "demo": "/games/belatra/HighwayStars/1635"
    },
    "belatra/TheNightRacing": {
      "title": "The Night Racing",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 120,
        "slots": 985,
        "_hd": 1216,
        "all": 1269,
        "bonusbuy": 103
      },
      "real": {
        "BTC": {
          "id": 1639,
          "jackpot": 50000218
        },
        "DOG": {
          "id": 1640,
          "jackpot": 11689109702237
        },
        "ETH": {
          "id": 1641,
          "jackpot": 6767571479
        },
        "LTC": {
          "id": 1643,
          "jackpot": 15141163337
        }
      },
      "demo": "/games/belatra/TheNightRacing/1642"
    },
    "belatra/7DaysTheSpanishArmada": {
      "title": "7 Days The Spanish Armada",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 163,
        "slots": 36,
        "_hd": 129,
        "all": 129
      },
      "real": {
        "BTC": {
          "id": 1646
        },
        "DOG": {
          "id": 1647
        },
        "ETH": {
          "id": 1648
        },
        "LTC": {
          "id": 1650
        }
      },
      "demo": "/games/belatra/7DaysTheSpanishArmada/1649"
    },
    "belatra/WinShot": {
      "title": "Win Shot",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1085,
        "_hd": 1306,
        "all": 1367
      },
      "real": {
        "BTC": {
          "id": 1653
        },
        "DOG": {
          "id": 1654
        },
        "ETH": {
          "id": 1655
        },
        "LTC": {
          "id": 1657
        }
      },
      "demo": "/games/belatra/WinShot/1656"
    },
    "belatra/buybonusNewYork": {
      "title": "New York",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 44,
        "slots": 716,
        "_hd": 910,
        "all": 959,
        "bonusbuy": 100
      },
      "real": {
        "BTC": {
          "id": 1660
        },
        "DOG": {
          "id": 1661
        },
        "ETH": {
          "id": 1662
        },
        "LTC": {
          "id": 1664
        }
      },
      "demo": "/games/belatra/buybonusNewYork/1663"
    },
    "belatra/LavishJoker": {
      "title": "Lavish Joker",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 575,
        "jackpot": 32,
        "_hd": 781,
        "all": 822
      },
      "real": {
        "BTC": {
          "id": 1667
        },
        "DOG": {
          "id": 1668
        },
        "ETH": {
          "id": 1669
        },
        "LTC": {
          "id": 1671
        }
      },
      "demo": "/games/belatra/LavishJoker/1670"
    },
    "belatra/AnEscapeFromAlcatraz": {
      "title": "Escape from Alcatraz",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 125,
        "slots": 338,
        "_hd": 558,
        "all": 580
      },
      "real": {
        "BTC": {
          "id": 1674
        },
        "DOG": {
          "id": 1675
        },
        "ETH": {
          "id": 1676
        },
        "LTC": {
          "id": 1678
        }
      },
      "demo": "/games/belatra/AnEscapeFromAlcatraz/1677"
    },
    "belatra/ZombieTown": {
      "title": "Zombie Town",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 49,
        "slots": 1102,
        "_hd": 1320,
        "all": 1382,
        "bonusbuy": 104
      },
      "real": {
        "BTC": {
          "id": 1681
        },
        "DOG": {
          "id": 1682
        },
        "ETH": {
          "id": 1683
        },
        "LTC": {
          "id": 1685
        }
      },
      "demo": "/games/belatra/ZombieTown/1684"
    },
    "belatra/SpanishArmada": {
      "title": "The Spanish Armada",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 990,
        "_hd": 1221,
        "all": 1274
      },
      "real": {
        "BTC": {
          "id": 1688
        },
        "DOG": {
          "id": 1689
        },
        "ETH": {
          "id": 1690
        },
        "LTC": {
          "id": 1692
        }
      },
      "demo": "/games/belatra/SpanishArmada/1691"
    },
    "belatra/BlueBeard": {
      "title": "Blue Beard",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 129,
        "_hd": 322,
        "all": 333
      },
      "real": {
        "BTC": {
          "id": 1695
        },
        "DOG": {
          "id": 1696
        },
        "ETH": {
          "id": 1697
        },
        "LTC": {
          "id": 1699
        }
      },
      "demo": "/games/belatra/BlueBeard/1698"
    },
    "belatra/MasterOfGold": {
      "title": "Master Of Gold",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 76,
        "slots": 657,
        "_hd": 855,
        "all": 903,
        "bonusbuy": 97
      },
      "real": {
        "BTC": {
          "id": 1702,
          "jackpot": 281253320
        },
        "DOG": {
          "id": 1703,
          "jackpot": 65751731229697
        },
        "ETH": {
          "id": 1704,
          "jackpot": 38067872775
        },
        "LTC": {
          "id": 1706,
          "jackpot": 85169677383
        }
      },
      "demo": "/games/belatra/MasterOfGold/1705"
    },
    "belatra/MWA": {
      "title": "MWA",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 67,
        "slots": 633,
        "_hd": 838,
        "all": 883,
        "bonusbuy": 96
      },
      "real": {
        "BTC": {
          "id": 1709
        },
        "DOG": {
          "id": 1710
        },
        "ETH": {
          "id": 1711
        },
        "LTC": {
          "id": 1713
        }
      },
      "demo": "/games/belatra/MWA/1712"
    },
    "belatra/LuckyDrinkOld": {
      "title": "Lucky Drink",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 69,
        "slots": 611,
        "_hd": 817,
        "all": 861
      },
      "real": {
        "BTC": {
          "id": 1716
        },
        "DOG": {
          "id": 1717
        },
        "ETH": {
          "id": 1718
        },
        "LTC": {
          "id": 1720
        }
      },
      "demo": "/games/belatra/LuckyDrinkOld/1719"
    },
    "belatra/TheWildlife": {
      "title": "The Wildlife",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 992,
        "_hd": 1223,
        "all": 1276
      },
      "real": {
        "BTC": {
          "id": 1723
        },
        "DOG": {
          "id": 1724
        },
        "ETH": {
          "id": 1725
        },
        "LTC": {
          "id": 1727
        }
      },
      "demo": "/games/belatra/TheWildlife/1726"
    },
    "belatra/CrazyNuts": {
      "title": "Crazy Nuts",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 247,
        "_hd": 478,
        "all": 494
      },
      "real": {
        "BTC": {
          "id": 1730
        },
        "DOG": {
          "id": 1731
        },
        "ETH": {
          "id": 1732
        },
        "LTC": {
          "id": 1734
        }
      },
      "demo": "/games/belatra/CrazyNuts/1733"
    },
    "belatra/FrogCreek": {
      "title": "Frog Creek",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 277,
        "slots": 385,
        "_hd": 612,
        "all": 638
      },
      "real": {
        "BTC": {
          "id": 1737
        },
        "DOG": {
          "id": 1738
        },
        "ETH": {
          "id": 1739
        },
        "LTC": {
          "id": 1741
        }
      },
      "demo": "/games/belatra/FrogCreek/1740"
    },
    "belatra/AfricaGoldII": {
      "title": "Africa Gold II",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 58,
        "slots": 55,
        "_hd": 145,
        "all": 147,
        "bonusbuy": 91
      },
      "real": {
        "BTC": {
          "id": 1744
        },
        "DOG": {
          "id": 1745
        },
        "ETH": {
          "id": 1746
        },
        "LTC": {
          "id": 1748
        }
      },
      "demo": "/games/belatra/AfricaGoldII/1747"
    },
    "belatra/AfricaGold": {
      "title": "Africa Gold",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 54,
        "_hd": 144,
        "all": 146
      },
      "real": {
        "BTC": {
          "id": 1751
        },
        "DOG": {
          "id": 1752
        },
        "ETH": {
          "id": 1753
        },
        "LTC": {
          "id": 1755
        }
      },
      "demo": "/games/belatra/AfricaGold/1754"
    },
    "belatra/TheWildlife2": {
      "title": "The Wildlife 2",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 993,
        "_hd": 1224,
        "all": 1277
      },
      "real": {
        "BTC": {
          "id": 1758
        },
        "DOG": {
          "id": 1759
        },
        "ETH": {
          "id": 1760
        },
        "LTC": {
          "id": 1762
        }
      },
      "demo": "/games/belatra/TheWildlife2/1761"
    },
    "belatra/GhostWalks": {
      "title": "The Ghost Walks",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 970,
        "_hd": 1201,
        "all": 1254
      },
      "real": {
        "BTC": {
          "id": 1765
        },
        "DOG": {
          "id": 1766
        },
        "ETH": {
          "id": 1767
        },
        "LTC": {
          "id": 1769
        }
      },
      "demo": "/games/belatra/GhostWalks/1768"
    },
    "belatra/VenetianRain": {
      "title": "Venetian Rain",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1035,
        "_hd": 1263,
        "all": 1319
      },
      "real": {
        "BTC": {
          "id": 1772
        },
        "DOG": {
          "id": 1773
        },
        "ETH": {
          "id": 1774
        },
        "LTC": {
          "id": 1776
        }
      },
      "demo": "/games/belatra/VenetianRain/1775"
    },
    "belatra/TheGolden88": {
      "title": "88 Golden 88",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 43,
        "_hd": 136,
        "all": 136
      },
      "real": {
        "BTC": {
          "id": 1779
        },
        "DOG": {
          "id": 1780
        },
        "ETH": {
          "id": 1781
        },
        "LTC": {
          "id": 1783
        }
      },
      "demo": "/games/belatra/TheGolden88/1782"
    },
    "belatra/Chicagobangbang": {
      "title": "Chicago, bang, bang!",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 89,
        "slots": 208,
        "jackpot": 13,
        "_hd": 393,
        "all": 409,
        "bonusbuy": 93
      },
      "real": {
        "BTC": {
          "id": 1786
        },
        "DOG": {
          "id": 1787
        },
        "ETH": {
          "id": 1788
        },
        "LTC": {
          "id": 1790
        }
      },
      "demo": "/games/belatra/Chicagobangbang/1789"
    },
    "belatra/LoveMagic": {
      "title": "Love Magic",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 27,
        "slots": 595,
        "_hd": 806,
        "all": 847
      },
      "real": {
        "BTC": {
          "id": 1793
        },
        "DOG": {
          "id": 1794
        },
        "ETH": {
          "id": 1795
        },
        "LTC": {
          "id": 1797
        }
      },
      "demo": "/games/belatra/LoveMagic/1796"
    },
    "belatra/PersianNights": {
      "title": "Persian Nights 2",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 754,
        "_hd": 950,
        "all": 1000
      },
      "real": {
        "BTC": {
          "id": 1800
        },
        "DOG": {
          "id": 1801
        },
        "ETH": {
          "id": 1802
        },
        "LTC": {
          "id": 1804
        }
      },
      "demo": "/games/belatra/PersianNights/1803"
    },
    "belatra/PiggyBank": {
      "title": "Piggy Bank",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 172,
        "slots": 759,
        "_hd": 954,
        "all": 1004
      },
      "real": {
        "BTC": {
          "id": 1807
        },
        "DOG": {
          "id": 1808
        },
        "ETH": {
          "id": 1809
        },
        "LTC": {
          "id": 1811
        }
      },
      "demo": "/games/belatra/PiggyBank/1810"
    },
    "belatra/500JuicyFruits": {
      "title": "500 Juicy Fruits",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 33,
        "jackpot": 3,
        "_hd": 126,
        "all": 126
      },
      "real": {
        "BTC": {
          "id": 1814
        },
        "DOG": {
          "id": 1815
        },
        "ETH": {
          "id": 1816
        },
        "LTC": {
          "id": 1818
        }
      },
      "demo": "/games/belatra/500JuicyFruits/1817"
    },
    "belatra/SuperSevensHappyWheel": {
      "title": "Super Sevens Happy Wheel",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 935,
        "_hd": 1166,
        "all": 1219
      },
      "real": {
        "BTC": {
          "id": 1821
        },
        "DOG": {
          "id": 1822
        },
        "ETH": {
          "id": 1823
        },
        "LTC": {
          "id": 1825
        }
      },
      "demo": "/games/belatra/SuperSevensHappyWheel/1824"
    },
    "belatra/MayanBookMultiChoice": {
      "title": "Mayan Book Multi Choice",
      "provider": "belatra",
      "collections": {
        "novelty": 71,
        "popularity": 9,
        "slots": 661,
        "_hd": 859,
        "all": 907,
        "bonusbuy": 98
      },
      "real": {
        "BTC": {
          "id": 1828
        },
        "DOG": {
          "id": 1829
        },
        "ETH": {
          "id": 1830
        },
        "LTC": {
          "id": 1832
        }
      },
      "demo": "/games/belatra/MayanBookMultiChoice/1831"
    },
    "belatra/NeonBar": {
      "title": "Neon Bar",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 712,
        "_hd": 905,
        "all": 954
      },
      "real": {
        "BTC": {
          "id": 1835
        },
        "DOG": {
          "id": 1836
        },
        "ETH": {
          "id": 1837
        },
        "LTC": {
          "id": 1839
        }
      },
      "demo": "/games/belatra/NeonBar/1838"
    },
    "belatra/FortuneCraft": {
      "title": "Fortune Craft",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 135,
        "slots": 373,
        "jackpot": 24,
        "_hd": 600,
        "all": 626,
        "bonusbuy": 95
      },
      "real": {
        "BTC": {
          "id": 1842
        },
        "DOG": {
          "id": 1843
        },
        "ETH": {
          "id": 1844
        },
        "LTC": {
          "id": 1846
        }
      },
      "demo": "/games/belatra/FortuneCraft/1845"
    },
    "belatra/Carousel": {
      "title": "Carousel",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 189,
        "_hd": 374,
        "all": 388
      },
      "real": {
        "BTC": {
          "id": 1849
        },
        "DOG": {
          "id": 1850
        },
        "ETH": {
          "id": 1851
        },
        "LTC": {
          "id": 1853
        }
      },
      "demo": "/games/belatra/Carousel/1852"
    },
    "belatra/IcyFruits": {
      "title": "Icy Fruits",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 511,
        "jackpot": 29,
        "_hd": 724,
        "all": 762
      },
      "real": {
        "BTC": {
          "id": 1856
        },
        "DOG": {
          "id": 1857
        },
        "ETH": {
          "id": 1858
        },
        "LTC": {
          "id": 1860
        }
      },
      "demo": "/games/belatra/IcyFruits/1859"
    },
    "belatra/7DaysAnotherland": {
      "title": "7 Days Anotherland",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 35,
        "_hd": 128,
        "all": 128
      },
      "real": {
        "BTC": {
          "id": 1863
        },
        "DOG": {
          "id": 1864
        },
        "ETH": {
          "id": 1865
        },
        "LTC": {
          "id": 1867
        }
      },
      "demo": "/games/belatra/7DaysAnotherland/1866"
    },
    "belatra/JingleBells": {
      "title": "Jingle Bells",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 522,
        "_hd": 738,
        "all": 776
      },
      "real": {
        "BTC": {
          "id": 1870
        },
        "DOG": {
          "id": 1871
        },
        "ETH": {
          "id": 1872
        },
        "LTC": {
          "id": 1874
        }
      },
      "demo": "/games/belatra/JingleBells/1873"
    },
    "belatra/PrincessOfSwamp": {
      "title": "Princess Of Swamp",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 791,
        "_hd": 984,
        "all": 1034
      },
      "real": {
        "BTC": {
          "id": 1877
        },
        "DOG": {
          "id": 1878
        },
        "ETH": {
          "id": 1879
        },
        "LTC": {
          "id": 1881
        }
      },
      "demo": "/games/belatra/PrincessOfSwamp/1880"
    },
    "belatra/SuperSevens": {
      "title": "Super Sevens",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 934,
        "_hd": 1165,
        "all": 1218
      },
      "real": {
        "BTC": {
          "id": 1884
        },
        "DOG": {
          "id": 1885
        },
        "ETH": {
          "id": 1886
        },
        "LTC": {
          "id": 1888
        }
      },
      "demo": "/games/belatra/SuperSevens/1887"
    },
    "belatra/GoldenLemonDeluxe": {
      "title": "Golden Lemon Deluxe",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 433,
        "_hd": 655,
        "all": 684
      },
      "real": {
        "BTC": {
          "id": 1891
        },
        "DOG": {
          "id": 1892
        },
        "ETH": {
          "id": 1893
        },
        "LTC": {
          "id": 1895
        }
      },
      "demo": "/games/belatra/GoldenLemonDeluxe/1894"
    },
    "belatra/BondedWarehouse": {
      "title": "Customs Storage",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 259,
        "_hd": 489,
        "all": 506
      },
      "real": {
        "BTC": {
          "id": 1898
        },
        "DOG": {
          "id": 1899
        },
        "ETH": {
          "id": 1900
        },
        "LTC": {
          "id": 1902
        }
      },
      "demo": "/games/belatra/BondedWarehouse/1901"
    },
    "belatra/OceanBed": {
      "title": "Ocean Bed",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 728,
        "_hd": 925,
        "all": 974
      },
      "real": {
        "BTC": {
          "id": 1905
        },
        "DOG": {
          "id": 1906
        },
        "ETH": {
          "id": 1907
        },
        "LTC": {
          "id": 1909
        }
      },
      "demo": "/games/belatra/OceanBed/1908"
    },
    "belatra/20SuperStars": {
      "title": "20 Super Stars",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 16,
        "jackpot": 1,
        "_hd": 110,
        "all": 110
      },
      "real": {
        "BTC": {
          "id": 1912,
          "jackpot": 181250000
        },
        "DOG": {
          "id": 1913,
          "jackpot": 42372837572227
        },
        "ETH": {
          "id": 1914,
          "jackpot": 24532339447
        },
        "LTC": {
          "id": 1916,
          "jackpot": 54886477335
        }
      },
      "demo": "/games/belatra/20SuperStars/1915"
    },
    "belatra/BeautyBeast": {
      "title": "Beauty and the Beast",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 108,
        "_hd": 196,
        "all": 202
      },
      "real": {
        "BTC": {
          "id": 1919
        },
        "DOG": {
          "id": 1920
        },
        "ETH": {
          "id": 1921
        },
        "LTC": {
          "id": 1923
        }
      },
      "demo": "/games/belatra/BeautyBeast/1922"
    },
    "belatra/LuckyBankRobbers": {
      "title": "Bank Robbers",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 100,
        "jackpot": 8,
        "_hd": 190,
        "all": 196
      },
      "real": {
        "BTC": {
          "id": 1926
        },
        "DOG": {
          "id": 1927
        },
        "ETH": {
          "id": 1928
        },
        "LTC": {
          "id": 1930
        }
      },
      "demo": "/games/belatra/LuckyBankRobbers/1929"
    },
    "belatra/MayaMystery": {
      "title": "Maya Mystery",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 660,
        "_hd": 858,
        "all": 906
      },
      "real": {
        "BTC": {
          "id": 1933
        },
        "DOG": {
          "id": 1934
        },
        "ETH": {
          "id": 1935
        },
        "LTC": {
          "id": 1937
        }
      },
      "demo": "/games/belatra/MayaMystery/1936"
    },
    "belatra/TheMoneymania": {
      "title": "The Moneymania",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 984,
        "jackpot": 64,
        "_hd": 1215,
        "all": 1268
      },
      "real": {
        "BTC": {
          "id": 1940
        },
        "DOG": {
          "id": 1941
        },
        "ETH": {
          "id": 1942
        },
        "LTC": {
          "id": 1944
        }
      },
      "demo": "/games/belatra/TheMoneymania/1943"
    },
    "belatra/MonkeyJackpot": {
      "title": "Monkey Jackpot",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 688,
        "jackpot": 39,
        "_hd": 883,
        "all": 932
      },
      "real": {
        "BTC": {
          "id": 1947
        },
        "DOG": {
          "id": 1948
        },
        "ETH": {
          "id": 1949
        },
        "LTC": {
          "id": 1951
        }
      },
      "demo": "/games/belatra/MonkeyJackpot/1950"
    },
    "belatra/JMonsters": {
      "title": "J. Monsters",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 513,
        "_hd": 729,
        "all": 767
      },
      "real": {
        "BTC": {
          "id": 1954
        },
        "DOG": {
          "id": 1955
        },
        "ETH": {
          "id": 1956
        },
        "LTC": {
          "id": 1958
        }
      },
      "demo": "/games/belatra/JMonsters/1957"
    },
    "belatra/DraculaRiches": {
      "title": "Dracula Riches",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 299,
        "_hd": 525,
        "all": 545
      },
      "real": {
        "BTC": {
          "id": 1961
        },
        "DOG": {
          "id": 1962
        },
        "ETH": {
          "id": 1963
        },
        "LTC": {
          "id": 1965
        }
      },
      "demo": "/games/belatra/DraculaRiches/1964"
    },
    "belatra/MarswoodParty": {
      "title": "Marswood Party 2",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 653,
        "_hd": 851,
        "all": 899
      },
      "real": {
        "BTC": {
          "id": 1968
        },
        "DOG": {
          "id": 1969
        },
        "ETH": {
          "id": 1970
        },
        "LTC": {
          "id": 1972
        }
      },
      "demo": "/games/belatra/MarswoodParty/1971"
    },
    "belatra/NewYearMonkeyJackpot": {
      "title": "New Year Monkey Jackpot",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 715,
        "jackpot": 42,
        "_hd": 909,
        "all": 958,
        "bonusbuy": 99
      },
      "real": {
        "BTC": {
          "id": 1975,
          "jackpot": 104375000
        },
        "DOG": {
          "id": 1976,
          "jackpot": 24400909912281
        },
        "ETH": {
          "id": 1977,
          "jackpot": 14127243749
        },
        "LTC": {
          "id": 1979,
          "jackpot": 31607040394
        }
      },
      "demo": "/games/belatra/NewYearMonkeyJackpot/1978"
    },
    "belatra/Sevens": {
      "title": "Sevens",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 862,
        "_hd": 1065,
        "all": 1118
      },
      "real": {
        "BTC": {
          "id": 1982
        },
        "DOG": {
          "id": 1983
        },
        "ETH": {
          "id": 1984
        },
        "LTC": {
          "id": 1986
        }
      },
      "demo": "/games/belatra/Sevens/1985"
    },
    "belatra/LazyMonkey": {
      "title": "Lazy Monkey",
      "provider": "belatra",
      "collections": {
        "novelty": 111,
        "popularity": 398,
        "slots": 576,
        "_hd": 782,
        "all": 823
      },
      "real": {
        "BTC": {
          "id": 1989
        },
        "DOG": {
          "id": 1990
        },
        "ETH": {
          "id": 1991
        },
        "LTC": {
          "id": 1993
        }
      },
      "demo": "/games/belatra/LazyMonkey/1992"
    },
    "belatra/DoubleCrazyNuts": {
      "title": "Double Crazy Nuts",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 297,
        "_hd": 523,
        "all": 543
      },
      "real": {
        "BTC": {
          "id": 1996
        },
        "DOG": {
          "id": 1997
        },
        "ETH": {
          "id": 1998
        },
        "LTC": {
          "id": 2000
        }
      },
      "demo": "/games/belatra/DoubleCrazyNuts/1999"
    },
    "belatra/FruitMix": {
      "title": "Mix Fruits",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 682,
        "_hd": 879,
        "all": 928
      },
      "real": {
        "BTC": {
          "id": 2003
        },
        "DOG": {
          "id": 2004
        },
        "ETH": {
          "id": 2005
        },
        "LTC": {
          "id": 2007
        }
      },
      "demo": "/games/belatra/FruitMix/2006"
    },
    "belatra/HalloweenJackpot": {
      "title": "Halloween Jackpot",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 455,
        "jackpot": 26,
        "_hd": 678,
        "all": 708
      },
      "real": {
        "BTC": {
          "id": 2010
        },
        "DOG": {
          "id": 2011
        },
        "ETH": {
          "id": 2012
        },
        "LTC": {
          "id": 2014
        }
      },
      "demo": "/games/belatra/HalloweenJackpot/2013"
    },
    "belatra/BookofDoom": {
      "title": "Book of Doom",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 22,
        "slots": 141,
        "_hd": 330,
        "all": 344,
        "bonusbuy": 92
      },
      "real": {
        "BTC": {
          "id": 2017
        },
        "DOG": {
          "id": 2018
        },
        "ETH": {
          "id": 2019
        },
        "LTC": {
          "id": 2021
        }
      },
      "demo": "/games/belatra/BookofDoom/2020"
    },
    "belatra/GreenGrocery": {
      "title": "Green Grocery",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 276,
        "slots": 449,
        "_hd": 672,
        "all": 702
      },
      "real": {
        "BTC": {
          "id": 2024
        },
        "DOG": {
          "id": 2025
        },
        "ETH": {
          "id": 2026
        },
        "LTC": {
          "id": 2028
        }
      },
      "demo": "/games/belatra/GreenGrocery/2027"
    },
    "belatra/NeptunesKingdom": {
      "title": "Neptune's Kingdom",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 714,
        "_hd": 907,
        "all": 956
      },
      "real": {
        "BTC": {
          "id": 2031
        },
        "DOG": {
          "id": 2032
        },
        "ETH": {
          "id": 2033
        },
        "LTC": {
          "id": 2035
        }
      },
      "demo": "/games/belatra/NeptunesKingdom/2034"
    },
    "belatra/buyBonusofMaya": {
      "title": "#buyBonus of Maya",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 82,
        "slots": 2,
        "_hd": 95,
        "all": 95,
        "bonusbuy": 60
      },
      "real": {
        "BTC": {
          "id": 2038
        },
        "DOG": {
          "id": 2039
        },
        "ETH": {
          "id": 2040
        },
        "LTC": {
          "id": 2042
        }
      },
      "demo": "/games/belatra/buyBonusofMaya/2041"
    },
    "belatra/GoldenLemon": {
      "title": "Golden Lemon",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 432,
        "_hd": 654,
        "all": 683
      },
      "real": {
        "BTC": {
          "id": 2045
        },
        "DOG": {
          "id": 2046
        },
        "ETH": {
          "id": 2047
        },
        "LTC": {
          "id": 2049
        }
      },
      "demo": "/games/belatra/GoldenLemon/2048"
    },
    "belatra/Action!": {
      "title": "Action!",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 109,
        "slots": 51,
        "_hd": 142,
        "all": 143,
        "bonusbuy": 90
      },
      "real": {
        "BTC": {
          "id": 2052
        },
        "DOG": {
          "id": 2053
        },
        "ETH": {
          "id": 2054
        },
        "LTC": {
          "id": 2056
        }
      },
      "demo": "/games/belatra/Action!/2055"
    },
    "belatra/SevenFruits": {
      "title": "Seven Fruits",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 861,
        "_hd": 1064,
        "all": 1117
      },
      "real": {
        "BTC": {
          "id": 2059
        },
        "DOG": {
          "id": 2060
        },
        "ETH": {
          "id": 2061
        },
        "LTC": {
          "id": 2063
        }
      },
      "demo": "/games/belatra/SevenFruits/2062"
    },
    "belatra/TheElusiveGonzales": {
      "title": "Elusive Gonzales",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 330,
        "_hd": 551,
        "all": 573
      },
      "real": {
        "BTC": {
          "id": 2066
        },
        "DOG": {
          "id": 2067
        },
        "ETH": {
          "id": 2068
        },
        "LTC": {
          "id": 2070
        }
      },
      "demo": "/games/belatra/TheElusiveGonzales/2069"
    },
    "belatra/Halloween": {
      "title": "Halloween",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 454,
        "_hd": 677,
        "all": 707
      },
      "real": {
        "BTC": {
          "id": 2073
        },
        "DOG": {
          "id": 2074
        },
        "ETH": {
          "id": 2075
        },
        "LTC": {
          "id": 2077
        }
      },
      "demo": "/games/belatra/Halloween/2076"
    },
    "belatra/SeadogsStory": {
      "title": "Seadogs Story",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 858,
        "_hd": 1061,
        "all": 1114
      },
      "real": {
        "BTC": {
          "id": 2080
        },
        "DOG": {
          "id": 2081
        },
        "ETH": {
          "id": 2082
        },
        "LTC": {
          "id": 2084
        }
      },
      "demo": "/games/belatra/SeadogsStory/2083"
    },
    "belatra/CrystalsDigger": {
      "title": "Crystals Digger",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 137,
        "slots": 255,
        "jackpot": 20,
        "accumulating": 3,
        "all": 502,
        "bonusbuy": 94
      },
      "real": {
        "BTC": {
          "id": 2087
        },
        "DOG": {
          "id": 2088
        },
        "ETH": {
          "id": 2089
        },
        "LTC": {
          "id": 2091
        }
      },
      "demo": "/games/belatra/CrystalsDigger/2090"
    },
    "belatra/Jewels": {
      "title": "Jewels",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 521,
        "_hd": 737,
        "all": 775
      },
      "real": {
        "BTC": {
          "id": 2094
        },
        "DOG": {
          "id": 2095
        },
        "ETH": {
          "id": 2096
        },
        "LTC": {
          "id": 2098
        }
      },
      "demo": "/games/belatra/Jewels/2097"
    },
    "belatra/LuckyDrink": {
      "title": "Lucky Drink in Egypt",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 61,
        "slots": 612,
        "_hd": 818,
        "all": 862
      },
      "real": {
        "BTC": {
          "id": 2101
        },
        "DOG": {
          "id": 2102
        },
        "ETH": {
          "id": 2103
        },
        "LTC": {
          "id": 2105
        }
      },
      "demo": "/games/belatra/LuckyDrink/2104"
    },
    "belatra/Anotherland": {
      "title": "Anotherland",
      "provider": "belatra",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 71,
        "_hd": 157,
        "all": 161
      },
      "real": {
        "BTC": {
          "id": 2108
        },
        "DOG": {
          "id": 2109
        },
        "ETH": {
          "id": 2110
        },
        "LTC": {
          "id": 2112
        }
      },
      "demo": "/games/belatra/Anotherland/2111"
    },
    "nucleus/SharkSpin": {
      "title": "Shark Spin",
      "provider": "nucleus",
      "collections": {
        "novelty": 21,
        "popularity": 37,
        "slots": 866,
        "_hd": 1069,
        "all": 1122
      },
      "real": {
        "BTC": {
          "id": 2115
        },
        "LTC": {
          "id": 2116
        },
        "ETH": {
          "id": 2117
        }
      },
      "demo": "/games/nucleus/SharkSpin/2118"
    },
    "nucleus/SalsaPoppers": {
      "title": "Salsa Poppers",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 370,
        "slots": 840,
        "_hd": 1045,
        "all": 1097,
        "bonusbuy": 43
      },
      "real": {
        "BTC": {
          "id": 2120
        },
        "LTC": {
          "id": 2121
        },
        "ETH": {
          "id": 2122
        }
      },
      "demo": "/games/nucleus/SalsaPoppers/2123"
    },
    "nucleus/KrakenDeepWins": {
      "title": "Kraken Deep Wins",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 168,
        "slots": 564,
        "_hd": 773,
        "all": 812
      },
      "real": {
        "BTC": {
          "id": 2125
        },
        "LTC": {
          "id": 2126
        },
        "ETH": {
          "id": 2127
        }
      },
      "demo": "/games/nucleus/KrakenDeepWins/2128"
    },
    "nucleus/30180": {
      "title": "Hyper Galactic",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 179,
        "slots": 509,
        "_hd": 722,
        "all": 760
      },
      "real": {
        "BTC": {
          "id": 2135
        },
        "LTC": {
          "id": 2136
        },
        "ETH": {
          "id": 2137
        }
      },
      "demo": "/games/nucleus/30180/2138"
    },
    "nucleus/30060": {
      "title": "The Moguls",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 982,
        "jackpot": 62,
        "_hd": 1213,
        "all": 1266
      },
      "real": {
        "BTC": {
          "id": 2140
        },
        "LTC": {
          "id": 2141
        },
        "ETH": {
          "id": 2142
        }
      },
      "demo": "/games/nucleus/30060/2143"
    },
    "nucleus/30192": {
      "title": "high Noon",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1103,
        "_hd": 1321,
        "all": 1383
      },
      "real": {
        "BTC": {
          "id": 2150
        },
        "LTC": {
          "id": 2151
        },
        "ETH": {
          "id": 2152
        }
      },
      "demo": "/games/nucleus/30192/2153"
    },
    "nucleus/30380": {
      "title": "Cardinal Dragons",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 187,
        "jackpot": 12,
        "_hd": 371,
        "all": 385,
        "bonusbuy": 41
      },
      "real": {
        "BTC": {
          "id": 2155
        },
        "LTC": {
          "id": 2156
        },
        "ETH": {
          "id": 2157
        }
      },
      "demo": "/games/nucleus/30380/2158"
    },
    "nucleus/30160": {
      "title": "Spin to Ride",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 898,
        "jackpot": 53,
        "_hd": 1132,
        "all": 1185
      },
      "real": {
        "BTC": {
          "id": 2160
        },
        "LTC": {
          "id": 2161
        },
        "ETH": {
          "id": 2162
        }
      },
      "demo": "/games/nucleus/30160/2163"
    },
    "nucleus/30061": {
      "title": "The Critters",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 959,
        "_hd": 1190,
        "all": 1243
      },
      "real": {
        "BTC": {
          "id": 2170
        },
        "LTC": {
          "id": 2171
        },
        "ETH": {
          "id": 2172
        }
      },
      "demo": "/games/nucleus/30061/2173"
    },
    "nucleus/30072": {
      "title": "The Family JP",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 965,
        "jackpot": 60,
        "_hd": 1196,
        "all": 1249
      },
      "real": {
        "BTC": {
          "id": 2175
        },
        "LTC": {
          "id": 2176
        },
        "ETH": {
          "id": 2177
        }
      },
      "demo": "/games/nucleus/30072/2178"
    },
    "nucleus/30062": {
      "title": "Wild Adventures",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1055,
        "_hd": 1282,
        "all": 1339
      },
      "real": {
        "BTC": {
          "id": 2195
        },
        "LTC": {
          "id": 2196
        },
        "ETH": {
          "id": 2197
        }
      },
      "demo": "/games/nucleus/30062/2198"
    },
    "nucleus/30184": {
      "title": "Super Crystals",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 358,
        "slots": 930,
        "jackpot": 55,
        "_hd": 1162,
        "all": 1215
      },
      "real": {
        "BTC": {
          "id": 2210
        },
        "LTC": {
          "id": 2211
        },
        "ETH": {
          "id": 2212
        }
      },
      "demo": "/games/nucleus/30184/2213"
    },
    "nucleus/30394": {
      "title": "Joker Gemferno",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 531,
        "_hd": 746,
        "all": 784
      },
      "real": {
        "BTC": {
          "id": 2220
        },
        "LTC": {
          "id": 2221
        },
        "ETH": {
          "id": 2222
        }
      },
      "demo": "/games/nucleus/30394/2223"
    },
    "nucleus/30031": {
      "title": "Totem Tumble",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1005,
        "_hd": 1234,
        "all": 1287
      },
      "real": {
        "BTC": {
          "id": 2225
        },
        "LTC": {
          "id": 2226
        },
        "ETH": {
          "id": 2227
        }
      },
      "demo": "/games/nucleus/30031/2228"
    },
    "nucleus/30042": {
      "title": "Super 7s",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 925,
        "_hd": 1157,
        "all": 1210
      },
      "real": {
        "BTC": {
          "id": 2230
        },
        "LTC": {
          "id": 2231
        },
        "ETH": {
          "id": 2232
        }
      },
      "demo": "/games/nucleus/30042/2233"
    },
    "nucleus/30361": {
      "title": "Sweet Treats 2",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 945,
        "_hd": 1177,
        "all": 1230
      },
      "real": {
        "BTC": {
          "id": 2250
        },
        "LTC": {
          "id": 2251
        },
        "ETH": {
          "id": 2252
        }
      },
      "demo": "/games/nucleus/30361/2253"
    },
    "nucleus/30142": {
      "title": "The Job",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 975,
        "_hd": 1206,
        "all": 1259
      },
      "real": {
        "BTC": {
          "id": 2260
        },
        "LTC": {
          "id": 2261
        },
        "ETH": {
          "id": 2262
        }
      },
      "demo": "/games/nucleus/30142/2263"
    },
    "nucleus/30395": {
      "title": "Glorious Gems",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 414,
        "_hd": 640,
        "all": 667
      },
      "real": {
        "BTC": {
          "id": 2265
        },
        "LTC": {
          "id": 2266
        },
        "ETH": {
          "id": 2267
        }
      },
      "demo": "/games/nucleus/30395/2268"
    },
    "nucleus/30054": {
      "title": "Arabian Wishes",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 75,
        "_hd": 160,
        "all": 164
      },
      "real": {
        "BTC": {
          "id": 2275
        },
        "LTC": {
          "id": 2276
        },
        "ETH": {
          "id": 2277
        }
      },
      "demo": "/games/nucleus/30054/2278"
    },
    "nucleus/DiamondStrip": {
      "title": "Diamond Strip",
      "provider": "nucleus",
      "collections": {
        "novelty": 77,
        "popularity": 398,
        "slots": 286,
        "_hd": 513,
        "all": 532
      },
      "real": {
        "BTC": {
          "id": 2280
        },
        "LTC": {
          "id": 2281
        },
        "ETH": {
          "id": 2282
        }
      },
      "demo": "/games/nucleus/DiamondStrip/2283"
    },
    "nucleus/30373": {
      "title": "Scroll of Horus",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 164,
        "slots": 856,
        "_hd": 1059,
        "all": 1112,
        "bonusbuy": 44
      },
      "real": {
        "BTC": {
          "id": 2290
        },
        "LTC": {
          "id": 2291
        },
        "ETH": {
          "id": 2292
        }
      },
      "demo": "/games/nucleus/30373/2293"
    },
    "nucleus/30385": {
      "title": "Runes Of Odin",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 833,
        "_hd": 1026,
        "all": 1078
      },
      "real": {
        "BTC": {
          "id": 2295
        },
        "LTC": {
          "id": 2296
        },
        "ETH": {
          "id": 2297
        }
      },
      "demo": "/games/nucleus/30385/2298"
    },
    "nucleus/30396": {
      "title": "Wild Cherry Blast",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 91,
        "slots": 1060,
        "accumulating": 24,
        "_hd": 1287,
        "all": 1344,
        "bonusbuy": 47
      },
      "real": {
        "BTC": {
          "id": 2300
        },
        "LTC": {
          "id": 2301
        },
        "ETH": {
          "id": 2302
        }
      },
      "demo": "/games/nucleus/30396/2303"
    },
    "nucleus/30341": {
      "title": "Sleight of Hand",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 879,
        "_hd": 1083,
        "all": 1136
      },
      "real": {
        "BTC": {
          "id": 2310
        },
        "LTC": {
          "id": 2311
        },
        "ETH": {
          "id": 2312
        }
      },
      "demo": "/games/nucleus/30341/2313"
    },
    "nucleus/30231": {
      "title": "Freaky Frankenstein",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 379,
        "_hd": 604,
        "all": 630
      },
      "real": {
        "BTC": {
          "id": 2315
        },
        "LTC": {
          "id": 2316
        },
        "ETH": {
          "id": 2317
        }
      },
      "demo": "/games/nucleus/30231/2318"
    },
    "nucleus/30000": {
      "title": "Sweet Treats",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 943,
        "_hd": 1175,
        "all": 1228
      },
      "real": {
        "BTC": {
          "id": 2320
        },
        "LTC": {
          "id": 2321
        },
        "ETH": {
          "id": 2322
        }
      },
      "demo": "/games/nucleus/30000/2323"
    },
    "nucleus/30374": {
      "title": "Reels of Treasure",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 807,
        "jackpot": 46,
        "_hd": 998,
        "all": 1049
      },
      "real": {
        "BTC": {
          "id": 2325
        },
        "LTC": {
          "id": 2326
        },
        "ETH": {
          "id": 2327
        }
      },
      "demo": "/games/nucleus/30374/2328"
    },
    "nucleus/30397": {
      "title": "Jingle Slots",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 524,
        "_hd": 740,
        "all": 778
      },
      "real": {
        "BTC": {
          "id": 2330
        },
        "LTC": {
          "id": 2331
        },
        "ETH": {
          "id": 2332
        }
      },
      "demo": "/games/nucleus/30397/2333"
    },
    "nucleus/30298": {
      "title": "Merlin's Elements",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 667,
        "_hd": 865,
        "all": 913
      },
      "real": {
        "BTC": {
          "id": 2335
        },
        "LTC": {
          "id": 2336
        },
        "ETH": {
          "id": 2337
        }
      },
      "demo": "/games/nucleus/30298/2338"
    },
    "nucleus/30188": {
      "title": "Geppetto's Toy Shop",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 411,
        "_hd": 637,
        "all": 664
      },
      "real": {
        "BTC": {
          "id": 2340
        },
        "LTC": {
          "id": 2341
        },
        "ETH": {
          "id": 2342
        }
      },
      "demo": "/games/nucleus/30188/2343"
    },
    "nucleus/30353": {
      "title": "Ruby Jade",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 829,
        "_hd": 1020,
        "all": 1072
      },
      "real": {
        "BTC": {
          "id": 2355
        },
        "LTC": {
          "id": 2356
        },
        "ETH": {
          "id": 2357
        }
      },
      "demo": "/games/nucleus/30353/2358"
    },
    "nucleus/30012": {
      "title": "There's Gold Yonder",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 994,
        "_hd": 1225,
        "all": 1278
      },
      "real": {
        "BTC": {
          "id": 2365
        },
        "LTC": {
          "id": 2366
        },
        "ETH": {
          "id": 2367
        }
      },
      "demo": "/games/nucleus/30012/2368"
    },
    "nucleus/30398": {
      "title": "Bottled Wishes",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 164,
        "_hd": 352,
        "all": 366
      },
      "real": {
        "BTC": {
          "id": 2375
        },
        "LTC": {
          "id": 2376
        },
        "ETH": {
          "id": 2377
        }
      },
      "demo": "/games/nucleus/30398/2378"
    },
    "nucleus/30156": {
      "title": "Seer's Crystal",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 321,
        "slots": 859,
        "_hd": 1062,
        "all": 1115
      },
      "real": {
        "BTC": {
          "id": 2380
        },
        "LTC": {
          "id": 2381
        },
        "ETH": {
          "id": 2382
        }
      },
      "demo": "/games/nucleus/30156/2383"
    },
    "nucleus/30365": {
      "title": "Sands of Egypt",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 841,
        "_hd": 1046,
        "all": 1098
      },
      "real": {
        "BTC": {
          "id": 2405
        },
        "LTC": {
          "id": 2406
        },
        "ETH": {
          "id": 2407
        }
      },
      "demo": "/games/nucleus/30365/2408"
    },
    "nucleus/30013": {
      "title": "Matinee",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 658,
        "_hd": 856,
        "all": 904
      },
      "real": {
        "BTC": {
          "id": 2410
        },
        "LTC": {
          "id": 2411
        },
        "ETH": {
          "id": 2412
        }
      },
      "demo": "/games/nucleus/30013/2413"
    },
    "nucleus/30376": {
      "title": "Jumbo Jester",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 542,
        "_hd": 757,
        "all": 795
      },
      "real": {
        "BTC": {
          "id": 2415
        },
        "LTC": {
          "id": 2416
        },
        "ETH": {
          "id": 2417
        }
      },
      "demo": "/games/nucleus/30376/2418"
    },
    "nucleus/30399": {
      "title": "Mystic Rift",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 709,
        "_hd": 903,
        "all": 952
      },
      "real": {
        "BTC": {
          "id": 2425
        },
        "LTC": {
          "id": 2426
        },
        "ETH": {
          "id": 2427
        }
      },
      "demo": "/games/nucleus/30399/2428"
    },
    "nucleus/30102": {
      "title": "Fruit Serenity",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 392,
        "_hd": 619,
        "all": 645
      },
      "real": {
        "BTC": {
          "id": 2435
        },
        "LTC": {
          "id": 2436
        },
        "ETH": {
          "id": 2437
        }
      },
      "demo": "/games/nucleus/30102/2438"
    },
    "nucleus/30014": {
      "title": "Sashimi Dreams",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 848,
        "_hd": 1052,
        "all": 1104
      },
      "real": {
        "BTC": {
          "id": 2445
        },
        "LTC": {
          "id": 2446
        },
        "ETH": {
          "id": 2447
        }
      },
      "demo": "/games/nucleus/30014/2448"
    },
    "nucleus/30400": {
      "title": "A Time to Win",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 49,
        "_hd": 141,
        "all": 141
      },
      "real": {
        "BTC": {
          "id": 2455
        },
        "LTC": {
          "id": 2456
        },
        "ETH": {
          "id": 2457
        }
      },
      "demo": "/games/nucleus/30400/2458"
    },
    "nucleus/PeakRiches": {
      "title": "Peak Riches",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 747,
        "_hd": 943,
        "all": 993
      },
      "real": {
        "BTC": {
          "id": 2460
        },
        "LTC": {
          "id": 2461
        },
        "ETH": {
          "id": 2462
        }
      },
      "demo": "/games/nucleus/PeakRiches/2463"
    },
    "nucleus/30103": {
      "title": "Mermaid's Treasure",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 669,
        "_hd": 867,
        "all": 915
      },
      "real": {
        "BTC": {
          "id": 2465
        },
        "LTC": {
          "id": 2466
        },
        "ETH": {
          "id": 2467
        }
      },
      "demo": "/games/nucleus/30103/2468"
    },
    "nucleus/30345": {
      "title": "Moon Bitten",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 697,
        "_hd": 892,
        "all": 941
      },
      "real": {
        "BTC": {
          "id": 2470
        },
        "LTC": {
          "id": 2471
        },
        "ETH": {
          "id": 2472
        }
      },
      "demo": "/games/nucleus/30345/2473"
    },
    "nucleus/30004": {
      "title": "Firecrackers",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 363,
        "_hd": 580,
        "all": 605
      },
      "real": {
        "BTC": {
          "id": 2475
        },
        "LTC": {
          "id": 2476
        },
        "ETH": {
          "id": 2477
        }
      },
      "demo": "/games/nucleus/30004/2478"
    },
    "nucleus/30401": {
      "title": "No Limit Bandit",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 723,
        "_hd": 920,
        "all": 969
      },
      "real": {
        "BTC": {
          "id": 2485
        },
        "LTC": {
          "id": 2486
        },
        "ETH": {
          "id": 2487
        }
      },
      "demo": "/games/nucleus/30401/2488"
    },
    "nucleus/30302": {
      "title": "Kitty Cutie",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 558,
        "_hd": 768,
        "all": 807
      },
      "real": {
        "BTC": {
          "id": 2490
        },
        "LTC": {
          "id": 2491
        },
        "ETH": {
          "id": 2492
        }
      },
      "demo": "/games/nucleus/30302/2493"
    },
    "nucleus/30313": {
      "title": "The Family Part II",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 967,
        "_hd": 1198,
        "all": 1251
      },
      "real": {
        "BTC": {
          "id": 2495
        },
        "LTC": {
          "id": 2496
        },
        "ETH": {
          "id": 2497
        }
      },
      "demo": "/games/nucleus/30313/2498"
    },
    "nucleus/30357": {
      "title": "Soaring Wind",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 888,
        "_hd": 1091,
        "all": 1144
      },
      "real": {
        "BTC": {
          "id": 2505
        },
        "LTC": {
          "id": 2506
        },
        "ETH": {
          "id": 2507
        }
      },
      "demo": "/games/nucleus/30357/2508"
    },
    "nucleus/30402": {
      "title": "Totems Of Fortune",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1007,
        "_hd": 1236,
        "all": 1289
      },
      "real": {
        "BTC": {
          "id": 2520
        },
        "LTC": {
          "id": 2521
        },
        "ETH": {
          "id": 2522
        }
      },
      "demo": "/games/nucleus/30402/2523"
    },
    "nucleus/TropicalSplash": {
      "title": "Tropical Splash",
      "provider": "nucleus",
      "collections": {
        "novelty": 42,
        "popularity": 398,
        "slots": 1018,
        "_hd": 1247,
        "all": 1300
      },
      "real": {
        "BTC": {
          "id": 2525
        },
        "LTC": {
          "id": 2526
        },
        "ETH": {
          "id": 2527
        }
      },
      "demo": "/games/nucleus/TropicalSplash/2528"
    },
    "nucleus/30138": {
      "title": "The Mad Genius",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 979,
        "_hd": 1210,
        "all": 1263
      },
      "real": {
        "BTC": {
          "id": 2545
        },
        "LTC": {
          "id": 2546
        },
        "ETH": {
          "id": 2547
        }
      },
      "demo": "/games/nucleus/30138/2548"
    },
    "nucleus/30403": {
      "title": "Fruity Way",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 402,
        "_hd": 629,
        "all": 655
      },
      "real": {
        "BTC": {
          "id": 2550
        },
        "LTC": {
          "id": 2551
        },
        "ETH": {
          "id": 2552
        }
      },
      "demo": "/games/nucleus/30403/2553"
    },
    "nucleus/30414": {
      "title": "Goals of Glory",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 416,
        "_hd": 642,
        "all": 669
      },
      "real": {
        "BTC": {
          "id": 2555
        },
        "LTC": {
          "id": 2556
        },
        "ETH": {
          "id": 2557
        }
      },
      "demo": "/games/nucleus/30414/2558"
    },
    "nucleus/30337": {
      "title": "Blades of the Abyss",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 126,
        "_hd": 319,
        "all": 330
      },
      "real": {
        "BTC": {
          "id": 2560
        },
        "LTC": {
          "id": 2561
        },
        "ETH": {
          "id": 2562
        }
      },
      "demo": "/games/nucleus/30337/2563"
    },
    "nucleus/30227": {
      "title": "12 Animals",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 12,
        "_hd": 105,
        "all": 105
      },
      "real": {
        "BTC": {
          "id": 2570
        },
        "LTC": {
          "id": 2571
        },
        "ETH": {
          "id": 2572
        }
      },
      "demo": "/games/nucleus/30227/2573"
    },
    "nucleus/30117": {
      "title": "Coco Bongo",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 229,
        "jackpot": 18,
        "_hd": 459,
        "all": 475
      },
      "real": {
        "BTC": {
          "id": 2575
        },
        "LTC": {
          "id": 2576
        },
        "ETH": {
          "id": 2577
        }
      },
      "demo": "/games/nucleus/30117/2578"
    },
    "nucleus/30404": {
      "title": "The Golden Games",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 971,
        "_hd": 1202,
        "all": 1255,
        "bonusbuy": 46
      },
      "real": {
        "BTC": {
          "id": 2585
        },
        "LTC": {
          "id": 2586
        },
        "ETH": {
          "id": 2587
        }
      },
      "demo": "/games/nucleus/30404/2588"
    },
    "nucleus/30217": {
      "title": "The Party Guy",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 986,
        "_hd": 1217,
        "all": 1270
      },
      "real": {
        "BTC": {
          "id": 2590
        },
        "LTC": {
          "id": 2591
        },
        "ETH": {
          "id": 2592
        }
      },
      "demo": "/games/nucleus/30217/2593"
    },
    "nucleus/30349": {
      "title": "Savanna Safari",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 850,
        "_hd": 1054,
        "all": 1106
      },
      "real": {
        "BTC": {
          "id": 2605
        },
        "LTC": {
          "id": 2606
        },
        "ETH": {
          "id": 2607
        }
      },
      "demo": "/games/nucleus/30349/2608"
    },
    "nucleus/30008": {
      "title": "Rollin' Trolls",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 817,
        "jackpot": 47,
        "_hd": 1008,
        "all": 1059
      },
      "real": {
        "BTC": {
          "id": 2615
        },
        "LTC": {
          "id": 2616
        },
        "ETH": {
          "id": 2617
        }
      },
      "demo": "/games/nucleus/30008/2618"
    },
    "nucleus/DragonWatch": {
      "title": "Dragon Watch",
      "provider": "nucleus",
      "collections": {
        "novelty": 65,
        "popularity": 398,
        "slots": 310,
        "_hd": 535,
        "all": 555
      },
      "real": {
        "BTC": {
          "id": 2620
        },
        "LTC": {
          "id": 2621
        },
        "ETH": {
          "id": 2622
        }
      },
      "demo": "/games/nucleus/DragonWatch/2623"
    },
    "nucleus/30405": {
      "title": "Spooktacular Spins",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 905,
        "_hd": 1139,
        "all": 1192
      },
      "real": {
        "BTC": {
          "id": 2625
        },
        "LTC": {
          "id": 2626
        },
        "ETH": {
          "id": 2627
        }
      },
      "demo": "/games/nucleus/30405/2628"
    },
    "nucleus/30317": {
      "title": "Catch & Release",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 199,
        "_hd": 384,
        "all": 400
      },
      "real": {
        "BTC": {
          "id": 2630
        },
        "LTC": {
          "id": 2631
        },
        "ETH": {
          "id": 2632
        }
      },
      "demo": "/games/nucleus/30317/2633"
    },
    "nucleus/30207": {
      "title": "Vegas Road Trip",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1030,
        "_hd": 1259,
        "all": 1315
      },
      "real": {
        "BTC": {
          "id": 2635
        },
        "LTC": {
          "id": 2636
        },
        "ETH": {
          "id": 2637
        }
      },
      "demo": "/games/nucleus/30207/2638"
    },
    "nucleus/TheGoldenInn": {
      "title": "The Golden Inn",
      "provider": "nucleus",
      "collections": {
        "novelty": 90,
        "popularity": 398,
        "slots": 972,
        "_hd": 1203,
        "all": 1256
      },
      "real": {
        "BTC": {
          "id": 2650
        },
        "LTC": {
          "id": 2651
        },
        "ETH": {
          "id": 2652
        }
      },
      "demo": "/games/nucleus/TheGoldenInn/2653"
    },
    "nucleus/30329": {
      "title": "Lucky Clovers",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 604,
        "_hd": 812,
        "all": 855
      },
      "real": {
        "BTC": {
          "id": 2665
        },
        "LTC": {
          "id": 2666
        },
        "ETH": {
          "id": 2667
        }
      },
      "demo": "/games/nucleus/30329/2668"
    },
    "nucleus/SpiritoftheNile": {
      "title": "Spirit of the Nile",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 904,
        "_hd": 1138,
        "all": 1191
      },
      "real": {
        "BTC": {
          "id": 2670
        },
        "LTC": {
          "id": 2671
        },
        "ETH": {
          "id": 2672
        }
      },
      "demo": "/games/nucleus/SpiritoftheNile/2673"
    },
    "nucleus/AllReelDrive": {
      "title": "All Reel Drive",
      "provider": "nucleus",
      "collections": {
        "novelty": 101,
        "popularity": 398,
        "slots": 62,
        "_hd": 149,
        "all": 151
      },
      "real": {
        "BTC": {
          "id": 2675
        },
        "LTC": {
          "id": 2676
        },
        "ETH": {
          "id": 2677
        }
      },
      "demo": "/games/nucleus/AllReelDrive/2678"
    },
    "nucleus/30407": {
      "title": "Grand Luxe",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 440,
        "_hd": 664,
        "all": 693
      },
      "real": {
        "BTC": {
          "id": 2680
        },
        "LTC": {
          "id": 2681
        },
        "ETH": {
          "id": 2682
        }
      },
      "demo": "/games/nucleus/30407/2683"
    },
    "nucleus/30408": {
      "title": "Ho Ho Cash",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 470,
        "_hd": 693,
        "all": 723,
        "bonusbuy": 42
      },
      "real": {
        "BTC": {
          "id": 2685
        },
        "LTC": {
          "id": 2686
        },
        "ETH": {
          "id": 2687
        }
      },
      "demo": "/games/nucleus/30408/2688"
    },
    "nucleus/30309": {
      "title": "Sisters of Luck",
      "provider": "nucleus",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 875,
        "_hd": 1079,
        "all": 1132
      },
      "real": {
        "BTC": {
          "id": 2690
        },
        "LTC": {
          "id": 2691
        },
        "ETH": {
          "id": 2692
        }
      },
      "demo": "/games/nucleus/30309/2693"
    },
    "nucleus/TheForbiddenTomb": {
      "title": "The Forbidden Tomb",
      "provider": "nucleus",
      "collections": {
        "novelty": 27,
        "popularity": 398,
        "slots": 969,
        "_hd": 1200,
        "all": 1253,
        "bonusbuy": 45
      },
      "real": {
        "BTC": {
          "id": 2695
        },
        "LTC": {
          "id": 2696
        },
        "ETH": {
          "id": 2697
        }
      },
      "demo": "/games/nucleus/TheForbiddenTomb/2698"
    },
    "truelab/BookofTruth": {
      "title": "Book of Truth",
      "provider": "truelab",
      "collections": {
        "novelty": 32,
        "popularity": 301,
        "slots": 153,
        "_hd": 341,
        "all": 355
      },
      "real": {
        "BTC": {
          "id": 2700
        },
        "DOG": {
          "id": 2701
        },
        "ETH": {
          "id": 2702
        },
        "LTC": {
          "id": 2704
        }
      },
      "demo": "/games/truelab/BookofTruth/2703"
    },
    "truelab/DayandNight": {
      "title": "Day and Night",
      "provider": "truelab",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 267,
        "_hd": 494,
        "all": 511
      },
      "real": {
        "BTC": {
          "id": 2707
        },
        "DOG": {
          "id": 2708
        },
        "ETH": {
          "id": 2709
        },
        "LTC": {
          "id": 2711
        }
      },
      "demo": "/games/truelab/DayandNight/2710"
    },
    "truelab/MiningFactory": {
      "title": "Mining Factory",
      "provider": "truelab",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 680,
        "_hd": 877,
        "all": 926
      },
      "real": {
        "BTC": {
          "id": 2714
        },
        "DOG": {
          "id": 2715
        },
        "ETH": {
          "id": 2716
        },
        "LTC": {
          "id": 2718
        }
      },
      "demo": "/games/truelab/MiningFactory/2717"
    },
    "truelab/RobbyIllusionist": {
      "title": "Robby the Illusionist",
      "provider": "truelab",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 816,
        "_hd": 1007,
        "all": 1058
      },
      "real": {
        "BTC": {
          "id": 2721
        },
        "DOG": {
          "id": 2722
        },
        "ETH": {
          "id": 2723
        },
        "LTC": {
          "id": 2725
        }
      },
      "demo": "/games/truelab/RobbyIllusionist/2724"
    },
    "truelab/StartupValley": {
      "title": "Startup Valley",
      "provider": "truelab",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 909,
        "_hd": 1142,
        "all": 1195
      },
      "real": {
        "BTC": {
          "id": 2728
        },
        "DOG": {
          "id": 2729
        },
        "ETH": {
          "id": 2730
        },
        "LTC": {
          "id": 2732
        }
      },
      "demo": "/games/truelab/StartupValley/2731"
    },
    "truelab/Sunstike": {
      "title": "Sunstrike",
      "provider": "truelab",
      "collections": {
        "novelty": 0,
        "popularity": 342,
        "slots": 924,
        "_hd": 1155,
        "all": 1208
      },
      "real": {
        "BTC": {
          "id": 2735
        },
        "DOG": {
          "id": 2736
        },
        "ETH": {
          "id": 2737
        },
        "LTC": {
          "id": 2739
        }
      },
      "demo": "/games/truelab/Sunstike/2738"
    },
    "truelab/VictoriaWild1": {
      "title": "Victoria Wild",
      "provider": "truelab",
      "collections": {
        "novelty": 61,
        "popularity": 398,
        "slots": 1036,
        "accumulating": 23,
        "_hd": 1264,
        "all": 1320
      },
      "real": {
        "BTC": {
          "id": 2742
        },
        "DOG": {
          "id": 2743
        },
        "ETH": {
          "id": 2744
        },
        "LTC": {
          "id": 2746
        }
      },
      "demo": "/games/truelab/VictoriaWild1/2745"
    },
    "truelab/VictoriaWildDeluxe": {
      "title": "Victoria Wild Deluxe",
      "provider": "truelab",
      "collections": {
        "novelty": 23,
        "popularity": 161,
        "slots": 1037,
        "_hd": 1265,
        "all": 1321
      },
      "real": {
        "BTC": {
          "id": 2749
        },
        "DOG": {
          "id": 2750
        },
        "ETH": {
          "id": 2751
        },
        "LTC": {
          "id": 2753
        }
      },
      "demo": "/games/truelab/VictoriaWildDeluxe/2752"
    },
    "mancala/WickedHeart": {
      "title": "Wicked Heart",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 386,
        "slots": 1052,
        "_hd": 1280,
        "all": 1336
      },
      "real": {
        "BTC": {
          "id": 2756
        },
        "DOG": {
          "id": 2757
        },
        "ETH": {
          "id": 2758
        },
        "LTC": {
          "id": 2760
        }
      },
      "demo": "/games/mancala/WickedHeart/2759"
    },
    "mancala/PowerOfGuns": {
      "title": "Power Of Guns",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 785,
        "_hd": 978,
        "all": 1028
      },
      "real": {
        "BTC": {
          "id": 2763
        },
        "DOG": {
          "id": 2764
        },
        "ETH": {
          "id": 2765
        },
        "LTC": {
          "id": 2767
        }
      },
      "demo": "/games/mancala/PowerOfGuns/2766"
    },
    "mancala/MancalaQuest": {
      "title": "Mancala Quest",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 326,
        "slots": 650,
        "_hd": 850,
        "all": 898
      },
      "real": {
        "BTC": {
          "id": 2770
        },
        "DOG": {
          "id": 2771
        },
        "ETH": {
          "id": 2772
        },
        "LTC": {
          "id": 2774
        }
      },
      "demo": "/games/mancala/MancalaQuest/2773"
    },
    "mancala/HugeCatch": {
      "title": "Huge Catch",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 158,
        "slots": 506,
        "_hd": 719,
        "all": 757
      },
      "real": {
        "BTC": {
          "id": 2777
        },
        "DOG": {
          "id": 2778
        },
        "ETH": {
          "id": 2779
        },
        "LTC": {
          "id": 2781
        }
      },
      "demo": "/games/mancala/HugeCatch/2780"
    },
    "mancala/VoodooSpells": {
      "title": "Voodoo Spells",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 266,
        "slots": 1043,
        "_hd": 1271,
        "all": 1327
      },
      "real": {
        "BTC": {
          "id": 2784
        },
        "DOG": {
          "id": 2785
        },
        "ETH": {
          "id": 2786
        },
        "LTC": {
          "id": 2788
        }
      },
      "demo": "/games/mancala/VoodooSpells/2787"
    },
    "mancala/OpenTomb": {
      "title": "Open Tomb",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 153,
        "slots": 733,
        "_hd": 930,
        "all": 979
      },
      "real": {
        "BTC": {
          "id": 2791
        },
        "DOG": {
          "id": 2792
        },
        "ETH": {
          "id": 2793
        },
        "LTC": {
          "id": 2795
        }
      },
      "demo": "/games/mancala/OpenTomb/2794"
    },
    "mancala/MonsterThieves": {
      "title": "Monster Thieves",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 319,
        "slots": 696,
        "_hd": 891,
        "all": 940
      },
      "real": {
        "BTC": {
          "id": 2798
        },
        "DOG": {
          "id": 2799
        },
        "ETH": {
          "id": 2800
        },
        "LTC": {
          "id": 2802
        }
      },
      "demo": "/games/mancala/MonsterThieves/2801"
    },
    "mancala/ZeroDay": {
      "title": "Zero Day",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 318,
        "slots": 1100,
        "_hd": 1318,
        "all": 1380
      },
      "real": {
        "BTC": {
          "id": 2805
        },
        "DOG": {
          "id": 2806
        },
        "ETH": {
          "id": 2807
        },
        "LTC": {
          "id": 2809
        }
      },
      "demo": "/games/mancala/ZeroDay/2808"
    },
    "mancala/ClubGarage": {
      "title": "Club Garage",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 228,
        "_hd": 458,
        "all": 474
      },
      "real": {
        "BTC": {
          "id": 2812
        },
        "DOG": {
          "id": 2813
        },
        "ETH": {
          "id": 2814
        },
        "LTC": {
          "id": 2816
        }
      },
      "demo": "/games/mancala/ClubGarage/2815"
    },
    "mancala/CastleRock": {
      "title": "Castle Rock",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 198,
        "_hd": 383,
        "all": 399
      },
      "real": {
        "BTC": {
          "id": 2819
        },
        "DOG": {
          "id": 2820
        },
        "ETH": {
          "id": 2821
        },
        "LTC": {
          "id": 2823
        }
      },
      "demo": "/games/mancala/CastleRock/2822"
    },
    "mancala/EraofVikings": {
      "title": "Era of Vikings",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 387,
        "slots": 337,
        "_hd": 557,
        "all": 579
      },
      "real": {
        "BTC": {
          "id": 2826
        },
        "DOG": {
          "id": 2827
        },
        "ETH": {
          "id": 2828
        },
        "LTC": {
          "id": 2830
        }
      },
      "demo": "/games/mancala/EraofVikings/2829"
    },
    "mancala/BrazilCarnival": {
      "title": "Brazil Carnival",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 166,
        "_hd": 354,
        "all": 368
      },
      "real": {
        "BTC": {
          "id": 2833
        },
        "DOG": {
          "id": 2834
        },
        "ETH": {
          "id": 2835
        },
        "LTC": {
          "id": 2837
        }
      },
      "demo": "/games/mancala/BrazilCarnival/2836"
    },
    "mancala/CherryBombs": {
      "title": "Cherry Bombs",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 205,
        "_hd": 390,
        "all": 406
      },
      "real": {
        "BTC": {
          "id": 2840
        },
        "DOG": {
          "id": 2841
        },
        "ETH": {
          "id": 2842
        },
        "LTC": {
          "id": 2844
        }
      },
      "demo": "/games/mancala/CherryBombs/2843"
    },
    "mancala/HouseOfGhosts": {
      "title": "House of Ghosts",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 504,
        "_hd": 717,
        "all": 755
      },
      "real": {
        "BTC": {
          "id": 2847
        },
        "DOG": {
          "id": 2848
        },
        "ETH": {
          "id": 2849
        },
        "LTC": {
          "id": 2851
        }
      },
      "demo": "/games/mancala/HouseOfGhosts/2850"
    },
    "mancala/MortalBlow": {
      "title": "Mortal Blow",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 700,
        "_hd": 894,
        "all": 943
      },
      "real": {
        "BTC": {
          "id": 2854
        },
        "DOG": {
          "id": 2855
        },
        "ETH": {
          "id": 2856
        },
        "LTC": {
          "id": 2858
        }
      },
      "demo": "/games/mancala/MortalBlow/2857"
    },
    "mancala/SakuraQuest": {
      "title": "Sakura Quest",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 392,
        "slots": 838,
        "_hd": 1031,
        "all": 1083
      },
      "real": {
        "BTC": {
          "id": 2861
        },
        "DOG": {
          "id": 2862
        },
        "ETH": {
          "id": 2863
        },
        "LTC": {
          "id": 2865
        }
      },
      "demo": "/games/mancala/SakuraQuest/2864"
    },
    "mancala/Adventures": {
      "title": "Adventures",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 53,
        "_hd": 143,
        "all": 145
      },
      "real": {
        "BTC": {
          "id": 2868
        },
        "DOG": {
          "id": 2869
        },
        "ETH": {
          "id": 2870
        },
        "LTC": {
          "id": 2872
        }
      },
      "demo": "/games/mancala/Adventures/2871"
    },
    "mancala/Green&Greedy": {
      "title": "Green&Greedy",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 450,
        "_hd": 673,
        "all": 703
      },
      "real": {
        "BTC": {
          "id": 2875
        },
        "DOG": {
          "id": 2876
        },
        "ETH": {
          "id": 2877
        },
        "LTC": {
          "id": 2879
        }
      },
      "demo": "/games/mancala/Green&Greedy/2878"
    },
    "mancala/Sherwoodshero": {
      "title": "Sherwood's hero",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 868,
        "_hd": 1071,
        "all": 1124
      },
      "real": {
        "BTC": {
          "id": 2882
        },
        "DOG": {
          "id": 2883
        },
        "ETH": {
          "id": 2884
        },
        "LTC": {
          "id": 2886
        }
      },
      "demo": "/games/mancala/Sherwoodshero/2885"
    },
    "mancala/BloodRomance": {
      "title": "Blood Romance",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 218,
        "slots": 128,
        "_hd": 321,
        "all": 332
      },
      "real": {
        "BTC": {
          "id": 2889
        },
        "DOG": {
          "id": 2890
        },
        "ETH": {
          "id": 2891
        },
        "LTC": {
          "id": 2893
        }
      },
      "demo": "/games/mancala/BloodRomance/2892"
    },
    "mancala/PirateCave": {
      "title": "Pirate Cave",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 770,
        "_hd": 963,
        "all": 1013
      },
      "real": {
        "BTC": {
          "id": 2896
        },
        "DOG": {
          "id": 2897
        },
        "ETH": {
          "id": 2898
        },
        "LTC": {
          "id": 2900
        }
      },
      "demo": "/games/mancala/PirateCave/2899"
    },
    "mancala/SnowAntarctic": {
      "title": "Snow Antarctic",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 885,
        "_hd": 1088,
        "all": 1141
      },
      "real": {
        "BTC": {
          "id": 2903
        },
        "DOG": {
          "id": 2904
        },
        "ETH": {
          "id": 2905
        },
        "LTC": {
          "id": 2907
        }
      },
      "demo": "/games/mancala/SnowAntarctic/2906"
    },
    "mancala/Camping": {
      "title": "Camping",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 184,
        "_hd": 369,
        "all": 383
      },
      "real": {
        "BTC": {
          "id": 2910
        },
        "DOG": {
          "id": 2911
        },
        "ETH": {
          "id": 2912
        },
        "LTC": {
          "id": 2914
        }
      },
      "demo": "/games/mancala/Camping/2913"
    },
    "mancala/MagicCrystal": {
      "title": "Magic Crystal",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 636,
        "_hd": 841,
        "all": 886
      },
      "real": {
        "BTC": {
          "id": 2917
        },
        "DOG": {
          "id": 2918
        },
        "ETH": {
          "id": 2919
        },
        "LTC": {
          "id": 2921
        }
      },
      "demo": "/games/mancala/MagicCrystal/2920"
    },
    "mancala/Starwins": {
      "title": "Starwins",
      "provider": "mancala",
      "collections": {
        "novelty": 87,
        "popularity": 398,
        "slots": 910,
        "_hd": 1143,
        "all": 1196
      },
      "real": {
        "BTC": {
          "id": 2924
        },
        "DOG": {
          "id": 2925
        },
        "ETH": {
          "id": 2926
        },
        "LTC": {
          "id": 2928
        }
      },
      "demo": "/games/mancala/Starwins/2927"
    },
    "mancala/Casinonight": {
      "title": "#Casinonight",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 81,
        "slots": 1,
        "_hd": 94,
        "all": 94
      },
      "real": {
        "BTC": {
          "id": 2931
        },
        "DOG": {
          "id": 2932
        },
        "ETH": {
          "id": 2933
        },
        "LTC": {
          "id": 2935
        }
      },
      "demo": "/games/mancala/Casinonight/2934"
    },
    "mancala/NocheOscura": {
      "title": "Noche Oscura",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 724,
        "_hd": 921,
        "all": 970
      },
      "real": {
        "BTC": {
          "id": 2938
        },
        "DOG": {
          "id": 2939
        },
        "ETH": {
          "id": 2940
        },
        "LTC": {
          "id": 2942
        }
      },
      "demo": "/games/mancala/NocheOscura/2941"
    },
    "mancala/KingsAndDragons": {
      "title": "Kings And Dragons",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 555,
        "_hd": 766,
        "all": 804
      },
      "real": {
        "BTC": {
          "id": 2945
        },
        "DOG": {
          "id": 2946
        },
        "ETH": {
          "id": 2947
        },
        "LTC": {
          "id": 2949
        }
      },
      "demo": "/games/mancala/KingsAndDragons/2948"
    },
    "mancala/CocoTiki": {
      "title": "Coco Tiki",
      "provider": "mancala",
      "collections": {
        "novelty": 97,
        "popularity": 148,
        "slots": 231,
        "_hd": 461,
        "all": 477
      },
      "real": {
        "BTC": {
          "id": 2952
        },
        "DOG": {
          "id": 2953
        },
        "ETH": {
          "id": 2954
        },
        "LTC": {
          "id": 2956
        }
      },
      "demo": "/games/mancala/CocoTiki/2955"
    },
    "mancala/CopperDragon": {
      "title": "Copper Dragon",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 240,
        "_hd": 470,
        "all": 486
      },
      "real": {
        "BTC": {
          "id": 2959
        },
        "DOG": {
          "id": 2960
        },
        "ETH": {
          "id": 2961
        },
        "LTC": {
          "id": 2963
        }
      },
      "demo": "/games/mancala/CopperDragon/2962"
    },
    "mancala/CosmoCats": {
      "title": "Cosmo Cats",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 241,
        "_hd": 471,
        "all": 487
      },
      "real": {
        "BTC": {
          "id": 2966
        },
        "DOG": {
          "id": 2967
        },
        "ETH": {
          "id": 2968
        },
        "LTC": {
          "id": 2970
        }
      },
      "demo": "/games/mancala/CosmoCats/2969"
    },
    "mancala/RageofZeus": {
      "title": "Rage of Zeus",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 356,
        "slots": 803,
        "_hd": 996,
        "all": 1046
      },
      "real": {
        "BTC": {
          "id": 2973
        },
        "DOG": {
          "id": 2974
        },
        "ETH": {
          "id": 2975
        },
        "LTC": {
          "id": 2977
        }
      },
      "demo": "/games/mancala/RageofZeus/2976"
    },
    "mancala/PortalMaster": {
      "title": "Portal Master",
      "provider": "mancala",
      "collections": {
        "novelty": 67,
        "popularity": 398,
        "slots": 782,
        "_hd": 975,
        "all": 1025
      },
      "real": {
        "BTC": {
          "id": 2980
        },
        "DOG": {
          "id": 2981
        },
        "ETH": {
          "id": 2982
        },
        "LTC": {
          "id": 2984
        }
      },
      "demo": "/games/mancala/PortalMaster/2983"
    },
    "mancala/CrystalMine": {
      "title": "Crystal Mine",
      "provider": "mancala",
      "collections": {
        "novelty": 34,
        "popularity": 398,
        "slots": 252,
        "_hd": 484,
        "all": 500
      },
      "real": {
        "BTC": {
          "id": 2987
        },
        "DOG": {
          "id": 2988
        },
        "ETH": {
          "id": 2989
        },
        "LTC": {
          "id": 2991
        }
      },
      "demo": "/games/mancala/CrystalMine/2990"
    },
    "mancala/ChineseForest": {
      "title": "Chinese Forest",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 216,
        "_hd": 400,
        "all": 416
      },
      "real": {
        "BTC": {
          "id": 2994
        },
        "DOG": {
          "id": 2995
        },
        "ETH": {
          "id": 2996
        },
        "LTC": {
          "id": 2998
        }
      },
      "demo": "/games/mancala/ChineseForest/2997"
    },
    "mancala/GunsnHeat": {
      "title": "Guns'n Heat",
      "provider": "mancala",
      "collections": {
        "novelty": 0,
        "popularity": 303,
        "slots": 452,
        "_hd": 675,
        "all": 705
      },
      "real": {
        "BTC": {
          "id": 3001
        },
        "DOG": {
          "id": 3002
        },
        "ETH": {
          "id": 3003
        },
        "LTC": {
          "id": 3005
        }
      },
      "demo": "/games/mancala/GunsnHeat/3004"
    },
    "booming/BookOfTombs": {
      "title": "Book of Tombs",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 152,
        "slots": 152,
        "_hd": 340,
        "all": 354
      },
      "real": {
        "BTC": {
          "id": 3008
        },
        "DOG": {
          "id": 3009
        },
        "ETH": {
          "id": 3010
        },
        "LTC": {
          "id": 3012
        }
      },
      "demo": "/games/booming/BookOfTombs/3011"
    },
    "booming/Classico": {
      "title": "Classico",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 225,
        "_hd": 456,
        "all": 472
      },
      "real": {
        "BTC": {
          "id": 3015
        },
        "DOG": {
          "id": 3016
        },
        "ETH": {
          "id": 3017
        },
        "LTC": {
          "id": 3019
        }
      },
      "demo": "/games/booming/Classico/3018"
    },
    "booming/LedgendofQuYuan": {
      "title": "Legend of Qu Yuan",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 578,
        "_hd": 784,
        "all": 825
      },
      "real": {
        "BTC": {
          "id": 3022
        },
        "DOG": {
          "id": 3023
        },
        "ETH": {
          "id": 3024
        },
        "LTC": {
          "id": 3026
        }
      },
      "demo": "/games/booming/LedgendofQuYuan/3025"
    },
    "booming/CrazyBananas": {
      "title": "Crazy Bananas",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 244,
        "_hd": 475,
        "all": 491
      },
      "real": {
        "BTC": {
          "id": 3029
        },
        "DOG": {
          "id": 3030
        },
        "ETH": {
          "id": 3031
        },
        "LTC": {
          "id": 3033
        }
      },
      "demo": "/games/booming/CrazyBananas/3032"
    },
    "booming/VIPFilthyRiches": {
      "title": "VIP Filthy Riches",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1023,
        "_hd": 1252,
        "all": 1307
      },
      "real": {
        "BTC": {
          "id": 3036
        },
        "DOG": {
          "id": 3037
        },
        "ETH": {
          "id": 3038
        },
        "LTC": {
          "id": 3040
        }
      },
      "demo": "/games/booming/VIPFilthyRiches/3039"
    },
    "booming/RudolfsRide": {
      "title": "Rudolph's Ride",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 831,
        "_hd": 1022,
        "all": 1074
      },
      "real": {
        "BTC": {
          "id": 3043
        },
        "DOG": {
          "id": 3044
        },
        "ETH": {
          "id": 3045
        },
        "LTC": {
          "id": 3047
        }
      },
      "demo": "/games/booming/RudolfsRide/3046"
    },
    "booming/GoldenLuckyPigs": {
      "title": "Golden Lucky Pigs",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 434,
        "_hd": 656,
        "all": 685
      },
      "real": {
        "BTC": {
          "id": 3050
        },
        "DOG": {
          "id": 3051
        },
        "ETH": {
          "id": 3052
        },
        "LTC": {
          "id": 3054
        }
      },
      "demo": "/games/booming/GoldenLuckyPigs/3053"
    },
    "booming/Wombaroo": {
      "title": "Wombaroo",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 192,
        "slots": 1095,
        "accumulating": 25,
        "_hd": 1313,
        "all": 1375
      },
      "real": {
        "BTC": {
          "id": 3057
        },
        "DOG": {
          "id": 3058
        },
        "ETH": {
          "id": 3059
        },
        "LTC": {
          "id": 3061
        }
      },
      "demo": "/games/booming/Wombaroo/3060"
    },
    "booming/ShowMaster": {
      "title": "Show Master",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 870,
        "_hd": 1073,
        "all": 1126
      },
      "real": {
        "BTC": {
          "id": 3064
        },
        "DOG": {
          "id": 3065
        },
        "ETH": {
          "id": 3066
        },
        "LTC": {
          "id": 3068
        }
      },
      "demo": "/games/booming/ShowMaster/3067"
    },
    "booming/ChicagoNights": {
      "title": "Chicago Nights",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 207,
        "_hd": 392,
        "all": 408
      },
      "real": {
        "BTC": {
          "id": 3071
        },
        "DOG": {
          "id": 3072
        },
        "ETH": {
          "id": 3073
        },
        "LTC": {
          "id": 3075
        }
      },
      "demo": "/games/booming/ChicagoNights/3074"
    },
    "booming/GoldenProfits": {
      "title": "Golden Profits",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 435,
        "_hd": 657,
        "all": 686
      },
      "real": {
        "BTC": {
          "id": 3078
        },
        "DOG": {
          "id": 3079
        },
        "ETH": {
          "id": 3080
        },
        "LTC": {
          "id": 3082
        }
      },
      "demo": "/games/booming/GoldenProfits/3081"
    },
    "booming/DolphinsLuckTwo": {
      "title": "Dolphin's Luck 2",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 293,
        "_hd": 518,
        "all": 538
      },
      "real": {
        "BTC": {
          "id": 3085
        },
        "DOG": {
          "id": 3086
        },
        "ETH": {
          "id": 3087
        },
        "LTC": {
          "id": 3089
        }
      },
      "demo": "/games/booming/DolphinsLuckTwo/3088"
    },
    "booming/MonsterMunchies": {
      "title": "Monster Munchies",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 695,
        "_hd": 890,
        "all": 939
      },
      "real": {
        "BTC": {
          "id": 3092
        },
        "DOG": {
          "id": 3093
        },
        "ETH": {
          "id": 3094
        },
        "LTC": {
          "id": 3096
        }
      },
      "demo": "/games/booming/MonsterMunchies/3095"
    },
    "booming/SuperBoom": {
      "title": "Super Boom",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 928,
        "_hd": 1160,
        "all": 1213
      },
      "real": {
        "BTC": {
          "id": 3099
        },
        "DOG": {
          "id": 3100
        },
        "ETH": {
          "id": 3101
        },
        "LTC": {
          "id": 3103
        }
      },
      "demo": "/games/booming/SuperBoom/3102"
    },
    "booming/GoldHunter": {
      "title": "Gold Hunter",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 418,
        "_hd": 644,
        "all": 671
      },
      "real": {
        "BTC": {
          "id": 3106
        },
        "DOG": {
          "id": 3107
        },
        "ETH": {
          "id": 3108
        },
        "LTC": {
          "id": 3110
        }
      },
      "demo": "/games/booming/GoldHunter/3109"
    },
    "booming/ParisNights": {
      "title": "Paris Nights",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 742,
        "_hd": 939,
        "all": 988
      },
      "real": {
        "BTC": {
          "id": 3113
        },
        "DOG": {
          "id": 3114
        },
        "ETH": {
          "id": 3115
        },
        "LTC": {
          "id": 3117
        }
      },
      "demo": "/games/booming/ParisNights/3116"
    },
    "booming/OhCatrina": {
      "title": "Oh Catrina!",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 731,
        "_hd": 928,
        "all": 977
      },
      "real": {
        "BTC": {
          "id": 3120
        },
        "DOG": {
          "id": 3121
        },
        "ETH": {
          "id": 3122
        },
        "LTC": {
          "id": 3124
        }
      },
      "demo": "/games/booming/OhCatrina/3123"
    },
    "booming/Wunderfest": {
      "title": "Wunderfest",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1096,
        "_hd": 1314,
        "all": 1376
      },
      "real": {
        "BTC": {
          "id": 3127
        },
        "DOG": {
          "id": 3128
        },
        "ETH": {
          "id": 3129
        },
        "LTC": {
          "id": 3131
        }
      },
      "demo": "/games/booming/Wunderfest/3130"
    },
    "booming/AsiaWins": {
      "title": "Asia Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 82,
        "_hd": 167,
        "all": 172
      },
      "real": {
        "BTC": {
          "id": 3134
        },
        "DOG": {
          "id": 3135
        },
        "ETH": {
          "id": 3136
        },
        "LTC": {
          "id": 3138
        }
      },
      "demo": "/games/booming/AsiaWins/3137"
    },
    "booming/LavaLoca": {
      "title": "Lava Loca",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 574,
        "_hd": 780,
        "all": 821
      },
      "real": {
        "BTC": {
          "id": 3141
        },
        "DOG": {
          "id": 3142
        },
        "ETH": {
          "id": 3143
        },
        "LTC": {
          "id": 3145
        }
      },
      "demo": "/games/booming/LavaLoca/3144"
    },
    "booming/WildCherries": {
      "title": "Wild Cherries",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1059,
        "_hd": 1286,
        "all": 1343
      },
      "real": {
        "BTC": {
          "id": 3148
        },
        "DOG": {
          "id": 3149
        },
        "ETH": {
          "id": 3150
        },
        "LTC": {
          "id": 3152
        }
      },
      "demo": "/games/booming/WildCherries/3151"
    },
    "booming/DragonsChest": {
      "title": "Dragon's Chest",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 313,
        "_hd": 537,
        "all": 557
      },
      "real": {
        "BTC": {
          "id": 3155
        },
        "DOG": {
          "id": 3156
        },
        "ETH": {
          "id": 3157
        },
        "LTC": {
          "id": 3159
        }
      },
      "demo": "/games/booming/DragonsChest/3158"
    },
    "booming/Hooked": {
      "title": "Hooked",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 473,
        "_hd": 695,
        "all": 725
      },
      "real": {
        "BTC": {
          "id": 3162
        },
        "DOG": {
          "id": 3163
        },
        "ETH": {
          "id": 3164
        },
        "LTC": {
          "id": 3166
        }
      },
      "demo": "/games/booming/Hooked/3165"
    },
    "booming/JingleJingle": {
      "title": "Jingle Jingle",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 523,
        "_hd": 739,
        "all": 777
      },
      "real": {
        "BTC": {
          "id": 3169
        },
        "DOG": {
          "id": 3170
        },
        "ETH": {
          "id": 3171
        },
        "LTC": {
          "id": 3173
        }
      },
      "demo": "/games/booming/JingleJingle/3172"
    },
    "booming/HarvestFest": {
      "title": "Harvest Fest",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 459,
        "_hd": 682,
        "all": 712
      },
      "real": {
        "BTC": {
          "id": 3183
        },
        "DOG": {
          "id": 3184
        },
        "ETH": {
          "id": 3185
        },
        "LTC": {
          "id": 3187
        }
      },
      "demo": "/games/booming/HarvestFest/3186"
    },
    "booming/SantasKiss": {
      "title": "Santa's Kiss",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 846,
        "_hd": 1050,
        "all": 1102
      },
      "real": {
        "BTC": {
          "id": 3190
        },
        "DOG": {
          "id": 3191
        },
        "ETH": {
          "id": 3192
        },
        "LTC": {
          "id": 3194
        }
      },
      "demo": "/games/booming/SantasKiss/3193"
    },
    "booming/WildDiamond7x": {
      "title": "Wild Diamond 7x",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1061,
        "_hd": 1288,
        "all": 1345
      },
      "real": {
        "BTC": {
          "id": 3197
        },
        "DOG": {
          "id": 3198
        },
        "ETH": {
          "id": 3199
        },
        "LTC": {
          "id": 3201
        }
      },
      "demo": "/games/booming/WildDiamond7x/3200"
    },
    "booming/GreekLegends": {
      "title": "Greek Legends",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 448,
        "_hd": 671,
        "all": 701
      },
      "real": {
        "BTC": {
          "id": 3204
        },
        "DOG": {
          "id": 3205
        },
        "ETH": {
          "id": 3206
        },
        "LTC": {
          "id": 3208
        }
      },
      "demo": "/games/booming/GreekLegends/3207"
    },
    "booming/CubaCaliente": {
      "title": "Cuba Caliente",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 256,
        "_hd": 486,
        "all": 503
      },
      "real": {
        "BTC": {
          "id": 3211
        },
        "DOG": {
          "id": 3212
        },
        "ETH": {
          "id": 3213
        },
        "LTC": {
          "id": 3215
        }
      },
      "demo": "/games/booming/CubaCaliente/3214"
    },
    "booming/SharkMeet": {
      "title": "Shark Meet",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 865,
        "_hd": 1068,
        "all": 1121
      },
      "real": {
        "BTC": {
          "id": 3218
        },
        "DOG": {
          "id": 3219
        },
        "ETH": {
          "id": 3220
        },
        "LTC": {
          "id": 3222
        }
      },
      "demo": "/games/booming/SharkMeet/3221"
    },
    "booming/LeprechaunsLuckyBarrel": {
      "title": "Leprechaun's Lucky Barrel",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 584,
        "_hd": 790,
        "all": 831
      },
      "real": {
        "BTC": {
          "id": 3225
        },
        "DOG": {
          "id": 3226
        },
        "ETH": {
          "id": 3227
        },
        "LTC": {
          "id": 3229
        }
      },
      "demo": "/games/booming/LeprechaunsLuckyBarrel/3228"
    },
    "booming/SugarSkulls": {
      "title": "Sugar Skulls",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 920,
        "_hd": 1152,
        "all": 1205
      },
      "real": {
        "BTC": {
          "id": 3232
        },
        "DOG": {
          "id": 3233
        },
        "ETH": {
          "id": 3234
        },
        "LTC": {
          "id": 3236
        }
      },
      "demo": "/games/booming/SugarSkulls/3235"
    },
    "booming/CheekyMonkeys": {
      "title": "Cheeky Monkeys",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 202,
        "_hd": 387,
        "all": 403
      },
      "real": {
        "BTC": {
          "id": 3239
        },
        "DOG": {
          "id": 3240
        },
        "ETH": {
          "id": 3241
        },
        "LTC": {
          "id": 3243
        }
      },
      "demo": "/games/booming/CheekyMonkeys/3242"
    },
    "booming/WizardingWins": {
      "title": "Wizarding Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1088,
        "_hd": 1309,
        "all": 1370
      },
      "real": {
        "BTC": {
          "id": 3246
        },
        "DOG": {
          "id": 3247
        },
        "ETH": {
          "id": 3248
        },
        "LTC": {
          "id": 3250
        }
      },
      "demo": "/games/booming/WizardingWins/3249"
    },
    "booming/PirateBooty": {
      "title": "Pirate Booty",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 769,
        "_hd": 962,
        "all": 1012
      },
      "real": {
        "BTC": {
          "id": 3253
        },
        "DOG": {
          "id": 3254
        },
        "ETH": {
          "id": 3255
        },
        "LTC": {
          "id": 3257
        }
      },
      "demo": "/games/booming/PirateBooty/3256"
    },
    "booming/GoldenGirls": {
      "title": "Golden Girls",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 430,
        "_hd": 652,
        "all": 681
      },
      "real": {
        "BTC": {
          "id": 3260
        },
        "DOG": {
          "id": 3261
        },
        "ETH": {
          "id": 3262
        },
        "LTC": {
          "id": 3264
        }
      },
      "demo": "/games/booming/GoldenGirls/3263"
    },
    "booming/ColossalVikings": {
      "title": "Colossal Vikings",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 234,
        "_hd": 464,
        "all": 480
      },
      "real": {
        "BTC": {
          "id": 3267
        },
        "DOG": {
          "id": 3268
        },
        "ETH": {
          "id": 3269
        },
        "LTC": {
          "id": 3271
        }
      },
      "demo": "/games/booming/ColossalVikings/3270"
    },
    "booming/DesertDrag": {
      "title": "Desert Drag",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 277,
        "_hd": 505,
        "all": 522
      },
      "real": {
        "BTC": {
          "id": 3274
        },
        "DOG": {
          "id": 3275
        },
        "ETH": {
          "id": 3276
        },
        "LTC": {
          "id": 3278
        }
      },
      "demo": "/games/booming/DesertDrag/3277"
    },
    "booming/Revolution": {
      "title": "Revolution",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 247,
        "slots": 811,
        "_hd": 1002,
        "all": 1053
      },
      "real": {
        "BTC": {
          "id": 3281
        },
        "DOG": {
          "id": 3282
        },
        "ETH": {
          "id": 3283
        },
        "LTC": {
          "id": 3285
        }
      },
      "demo": "/games/booming/Revolution/3284"
    },
    "booming/LuckyScarabs": {
      "title": "Lucky Scarabs",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 630,
        "_hd": 836,
        "all": 880
      },
      "real": {
        "BTC": {
          "id": 3288
        },
        "DOG": {
          "id": 3289
        },
        "ETH": {
          "id": 3290
        },
        "LTC": {
          "id": 3292
        }
      },
      "demo": "/games/booming/LuckyScarabs/3291"
    },
    "booming/TikiWins": {
      "title": "Tiki Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1003,
        "_hd": 1232,
        "all": 1285
      },
      "real": {
        "BTC": {
          "id": 3295
        },
        "DOG": {
          "id": 3296
        },
        "ETH": {
          "id": 3297
        },
        "LTC": {
          "id": 3299
        }
      },
      "demo": "/games/booming/TikiWins/3298"
    },
    "booming/JokersWild": {
      "title": "Joker's Wild",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 536,
        "_hd": 751,
        "all": 789
      },
      "real": {
        "BTC": {
          "id": 3302
        },
        "DOG": {
          "id": 3303
        },
        "ETH": {
          "id": 3304
        },
        "LTC": {
          "id": 3306
        }
      },
      "demo": "/games/booming/JokersWild/3305"
    },
    "booming/GangsterGamblers": {
      "title": "Gangster Gamblers",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 404,
        "_hd": 631,
        "all": 657
      },
      "real": {
        "BTC": {
          "id": 3309
        },
        "DOG": {
          "id": 3310
        },
        "ETH": {
          "id": 3311
        },
        "LTC": {
          "id": 3313
        }
      },
      "demo": "/games/booming/GangsterGamblers/3312"
    },
    "booming/MajesticSafari": {
      "title": "Majestic Safari",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 649,
        "_hd": 849,
        "all": 897
      },
      "real": {
        "BTC": {
          "id": 3316
        },
        "DOG": {
          "id": 3317
        },
        "ETH": {
          "id": 3318
        },
        "LTC": {
          "id": 3320
        }
      },
      "demo": "/games/booming/MajesticSafari/3319"
    },
    "booming/JestersJoy": {
      "title": "Jesters Joy",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 519,
        "_hd": 735,
        "all": 773
      },
      "real": {
        "BTC": {
          "id": 3323
        },
        "DOG": {
          "id": 3324
        },
        "ETH": {
          "id": 3325
        },
        "LTC": {
          "id": 3327
        }
      },
      "demo": "/games/booming/JestersJoy/3326"
    },
    "booming/WinnersCup": {
      "title": "Winners Cup",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1086,
        "_hd": 1307,
        "all": 1368
      },
      "real": {
        "BTC": {
          "id": 3330
        },
        "DOG": {
          "id": 3331
        },
        "ETH": {
          "id": 3332
        },
        "LTC": {
          "id": 3334
        }
      },
      "demo": "/games/booming/WinnersCup/3333"
    },
    "booming/DevilsHeat": {
      "title": "Devil's Heat",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 279,
        "_hd": 508,
        "all": 525
      },
      "real": {
        "BTC": {
          "id": 3337
        },
        "DOG": {
          "id": 3338
        },
        "ETH": {
          "id": 3339
        },
        "LTC": {
          "id": 3341
        }
      },
      "demo": "/games/booming/DevilsHeat/3340"
    },
    "booming/MexicoWins": {
      "title": "Mexico Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 674,
        "_hd": 871,
        "all": 920
      },
      "real": {
        "BTC": {
          "id": 3344
        },
        "DOG": {
          "id": 3345
        },
        "ETH": {
          "id": 3346
        },
        "LTC": {
          "id": 3348
        }
      },
      "demo": "/games/booming/MexicoWins/3347"
    },
    "booming/BoomingSevenDeluxe": {
      "title": "Booming Seven Deluxe",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 162,
        "_hd": 350,
        "all": 364
      },
      "real": {
        "BTC": {
          "id": 3351
        },
        "DOG": {
          "id": 3352
        },
        "ETH": {
          "id": 3353
        },
        "LTC": {
          "id": 3355
        }
      },
      "demo": "/games/booming/BoomingSevenDeluxe/3354"
    },
    "booming/ArabianSpins": {
      "title": "Arabian Spins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 46,
        "slots": 73,
        "_hd": 158,
        "all": 162
      },
      "real": {
        "BTC": {
          "id": 3358
        },
        "DOG": {
          "id": 3359
        },
        "ETH": {
          "id": 3360
        },
        "LTC": {
          "id": 3362
        }
      },
      "demo": "/games/booming/ArabianSpins/3361"
    },
    "booming/WildOcean": {
      "title": "Wild Ocean",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1068,
        "_hd": 1293,
        "all": 1351
      },
      "real": {
        "BTC": {
          "id": 3365
        },
        "DOG": {
          "id": 3366
        },
        "ETH": {
          "id": 3367
        },
        "LTC": {
          "id": 3369
        }
      },
      "demo": "/games/booming/WildOcean/3368"
    },
    "booming/BurningClassics": {
      "title": "Burning Classics",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 176,
        "_hd": 363,
        "all": 377
      },
      "real": {
        "BTC": {
          "id": 3372
        },
        "DOG": {
          "id": 3373
        },
        "ETH": {
          "id": 3374
        },
        "LTC": {
          "id": 3376
        }
      },
      "demo": "/games/booming/BurningClassics/3375"
    },
    "booming/DangerZone": {
      "title": "Danger Zone",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 265,
        "_hd": 493,
        "all": 510
      },
      "real": {
        "BTC": {
          "id": 3379
        },
        "DOG": {
          "id": 3380
        },
        "ETH": {
          "id": 3381
        },
        "LTC": {
          "id": 3383
        }
      },
      "demo": "/games/booming/DangerZone/3382"
    },
    "booming/BuffaloHoldandWin": {
      "title": "Buffalo Hold and Win",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 169,
        "_hd": 356,
        "all": 370
      },
      "real": {
        "BTC": {
          "id": 3386
        },
        "DOG": {
          "id": 3387
        },
        "ETH": {
          "id": 3388
        },
        "LTC": {
          "id": 3390
        }
      },
      "demo": "/games/booming/BuffaloHoldandWin/3389"
    },
    "booming/HowlingWolves": {
      "title": "Howling Wolves",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 505,
        "_hd": 718,
        "all": 756
      },
      "real": {
        "BTC": {
          "id": 3393
        },
        "DOG": {
          "id": 3394
        },
        "ETH": {
          "id": 3395
        },
        "LTC": {
          "id": 3397
        }
      },
      "demo": "/games/booming/HowlingWolves/3396"
    },
    "booming/HorrorHouse": {
      "title": "Horror House",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 474,
        "_hd": 696,
        "all": 726
      },
      "real": {
        "BTC": {
          "id": 3407
        },
        "DOG": {
          "id": 3408
        },
        "ETH": {
          "id": 3409
        },
        "LTC": {
          "id": 3411
        }
      },
      "demo": "/games/booming/HorrorHouse/3410"
    },
    "booming/Spinosaurus": {
      "title": "Spinosaurus",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 902,
        "_hd": 1136,
        "all": 1189
      },
      "real": {
        "BTC": {
          "id": 3414
        },
        "DOG": {
          "id": 3415
        },
        "ETH": {
          "id": 3416
        },
        "LTC": {
          "id": 3418
        }
      },
      "demo": "/games/booming/Spinosaurus/3417"
    },
    "booming/WildWildVegas": {
      "title": "Wild Wild Vegas",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1084,
        "_hd": 1305,
        "all": 1366
      },
      "real": {
        "BTC": {
          "id": 3421
        },
        "DOG": {
          "id": 3422
        },
        "ETH": {
          "id": 3423
        },
        "LTC": {
          "id": 3425
        }
      },
      "demo": "/games/booming/WildWildVegas/3424"
    },
    "booming/BangBang": {
      "title": "Bang Bang",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 99,
        "_hd": 189,
        "all": 195
      },
      "real": {
        "BTC": {
          "id": 3428
        },
        "DOG": {
          "id": 3429
        },
        "ETH": {
          "id": 3430
        },
        "LTC": {
          "id": 3432
        }
      },
      "demo": "/games/booming/BangBang/3431"
    },
    "booming/GladiatorArena": {
      "title": "Gladiator Arena",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 413,
        "_hd": 639,
        "all": 666
      },
      "real": {
        "BTC": {
          "id": 3435
        },
        "DOG": {
          "id": 3436
        },
        "ETH": {
          "id": 3437
        },
        "LTC": {
          "id": 3439
        }
      },
      "demo": "/games/booming/GladiatorArena/3438"
    },
    "booming/BoomingGold": {
      "title": "Booming Gold",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 160,
        "_hd": 348,
        "all": 362
      },
      "real": {
        "BTC": {
          "id": 3442
        },
        "DOG": {
          "id": 3443
        },
        "ETH": {
          "id": 3444
        },
        "LTC": {
          "id": 3446
        }
      },
      "demo": "/games/booming/BoomingGold/3445"
    },
    "booming/BoomingBars": {
      "title": "Booming Bars",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 159,
        "_hd": 347,
        "all": 361
      },
      "real": {
        "BTC": {
          "id": 3449
        },
        "DOG": {
          "id": 3450
        },
        "ETH": {
          "id": 3451
        },
        "LTC": {
          "id": 3453
        }
      },
      "demo": "/games/booming/BoomingBars/3452"
    },
    "booming/CrystalClassics": {
      "title": "Crystal Classics",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 250,
        "_hd": 482,
        "all": 498
      },
      "real": {
        "BTC": {
          "id": 3456
        },
        "DOG": {
          "id": 3457
        },
        "ETH": {
          "id": 3458
        },
        "LTC": {
          "id": 3460
        }
      },
      "demo": "/games/booming/CrystalClassics/3459"
    },
    "booming/BigAppleWins": {
      "title": "Big Apple Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 114,
        "_hd": 200,
        "all": 208
      },
      "real": {
        "BTC": {
          "id": 3463
        },
        "DOG": {
          "id": 3464
        },
        "ETH": {
          "id": 3465
        },
        "LTC": {
          "id": 3467
        }
      },
      "demo": "/games/booming/BigAppleWins/3466"
    },
    "booming/MerrySpinning": {
      "title": "Merry Spinning",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 673,
        "_hd": 870,
        "all": 919
      },
      "real": {
        "BTC": {
          "id": 3470
        },
        "DOG": {
          "id": 3471
        },
        "ETH": {
          "id": 3472
        },
        "LTC": {
          "id": 3474
        }
      },
      "demo": "/games/booming/MerrySpinning/3473"
    },
    "booming/TheKingPanda": {
      "title": "The King Panda",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 977,
        "_hd": 1208,
        "all": 1261
      },
      "real": {
        "BTC": {
          "id": 3477
        },
        "DOG": {
          "id": 3478
        },
        "ETH": {
          "id": 3479
        },
        "LTC": {
          "id": 3481
        }
      },
      "demo": "/games/booming/TheKingPanda/3480"
    },
    "booming/AstroPandas": {
      "title": "Astro Pandas",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 369,
        "slots": 83,
        "_hd": 168,
        "all": 173
      },
      "real": {
        "BTC": {
          "id": 3484
        },
        "DOG": {
          "id": 3485
        },
        "ETH": {
          "id": 3486
        },
        "LTC": {
          "id": 3488
        }
      },
      "demo": "/games/booming/AstroPandas/3487"
    },
    "booming/WildEnergy": {
      "title": "Wild Energy",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1064,
        "_hd": 1289,
        "all": 1347
      },
      "real": {
        "BTC": {
          "id": 3491
        },
        "DOG": {
          "id": 3492
        },
        "ETH": {
          "id": 3493
        },
        "LTC": {
          "id": 3495
        }
      },
      "demo": "/games/booming/WildEnergy/3494"
    },
    "booming/CherryBombDeluxe": {
      "title": "Cherry Bomb Deluxe",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 204,
        "_hd": 389,
        "all": 405
      },
      "real": {
        "BTC": {
          "id": 3498
        },
        "DOG": {
          "id": 3499
        },
        "ETH": {
          "id": 3500
        },
        "LTC": {
          "id": 3502
        }
      },
      "demo": "/games/booming/CherryBombDeluxe/3501"
    },
    "booming/FengShuiKitties": {
      "title": "Feng Shui Kitties",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 352,
        "_hd": 571,
        "all": 594
      },
      "real": {
        "BTC": {
          "id": 3505
        },
        "DOG": {
          "id": 3506
        },
        "ETH": {
          "id": 3507
        },
        "LTC": {
          "id": 3509
        }
      },
      "demo": "/games/booming/FengShuiKitties/3508"
    },
    "booming/BacheloretteParty": {
      "title": "Bachelorette Party",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 97,
        "_hd": 187,
        "all": 193
      },
      "real": {
        "BTC": {
          "id": 3512
        },
        "DOG": {
          "id": 3513
        },
        "ETH": {
          "id": 3514
        },
        "LTC": {
          "id": 3516
        }
      },
      "demo": "/games/booming/BacheloretteParty/3515"
    },
    "booming/BoomerangBonanza": {
      "title": "Boomerang Bonanza",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 157,
        "_hd": 345,
        "all": 359
      },
      "real": {
        "BTC": {
          "id": 3519
        },
        "DOG": {
          "id": 3520
        },
        "ETH": {
          "id": 3521
        },
        "LTC": {
          "id": 3523
        }
      },
      "demo": "/games/booming/BoomerangBonanza/3522"
    },
    "booming/DoublinGold": {
      "title": "Doublin Gold",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 298,
        "_hd": 524,
        "all": 544
      },
      "real": {
        "BTC": {
          "id": 3526
        },
        "DOG": {
          "id": 3527
        },
        "ETH": {
          "id": 3528
        },
        "LTC": {
          "id": 3530
        }
      },
      "demo": "/games/booming/DoublinGold/3529"
    },
    "booming/WildJester": {
      "title": "Wild Jester",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1066,
        "_hd": 1291,
        "all": 1349
      },
      "real": {
        "BTC": {
          "id": 3533
        },
        "DOG": {
          "id": 3534
        },
        "ETH": {
          "id": 3535
        },
        "LTC": {
          "id": 3537
        }
      },
      "demo": "/games/booming/WildJester/3536"
    },
    "booming/VegasVIPGold": {
      "title": "Vegas VIP Gold",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1032,
        "_hd": 1261,
        "all": 1317
      },
      "real": {
        "BTC": {
          "id": 3540
        },
        "DOG": {
          "id": 3541
        },
        "ETH": {
          "id": 3542
        },
        "LTC": {
          "id": 3544
        }
      },
      "demo": "/games/booming/VegasVIPGold/3543"
    },
    "booming/ExoticFruitDeluxe": {
      "title": "Exotic Fruit Deluxe",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 340,
        "_hd": 560,
        "all": 582
      },
      "real": {
        "BTC": {
          "id": 3547
        },
        "DOG": {
          "id": 3548
        },
        "ETH": {
          "id": 3549
        },
        "LTC": {
          "id": 3551
        }
      },
      "demo": "/games/booming/ExoticFruitDeluxe/3550"
    },
    "booming/SphinxFortune": {
      "title": "Sphinx Fortune",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 896,
        "_hd": 1130,
        "all": 1183
      },
      "real": {
        "BTC": {
          "id": 3554
        },
        "DOG": {
          "id": 3555
        },
        "ETH": {
          "id": 3556
        },
        "LTC": {
          "id": 3558
        }
      },
      "demo": "/games/booming/SphinxFortune/3557"
    },
    "booming/Goal": {
      "title": "Goal!!!",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 415,
        "_hd": 641,
        "all": 668
      },
      "real": {
        "BTC": {
          "id": 3561
        },
        "DOG": {
          "id": 3562
        },
        "ETH": {
          "id": 3563
        },
        "LTC": {
          "id": 3565
        }
      },
      "demo": "/games/booming/Goal/3564"
    },
    "booming/SnailRace": {
      "title": "Snail Race",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 883,
        "_hd": 1086,
        "all": 1139
      },
      "real": {
        "BTC": {
          "id": 3568
        },
        "DOG": {
          "id": 3569
        },
        "ETH": {
          "id": 3570
        },
        "LTC": {
          "id": 3572
        }
      },
      "demo": "/games/booming/SnailRace/3571"
    },
    "booming/Romeo": {
      "title": "Romeo",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 821,
        "_hd": 1012,
        "all": 1063
      },
      "real": {
        "BTC": {
          "id": 3575
        },
        "DOG": {
          "id": 3576
        },
        "ETH": {
          "id": 3577
        },
        "LTC": {
          "id": 3579
        }
      },
      "demo": "/games/booming/Romeo/3578"
    },
    "booming/GoldVein": {
      "title": "Gold Vein",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 423,
        "_hd": 648,
        "all": 675
      },
      "real": {
        "BTC": {
          "id": 3582
        },
        "DOG": {
          "id": 3583
        },
        "ETH": {
          "id": 3584
        },
        "LTC": {
          "id": 3586
        }
      },
      "demo": "/games/booming/GoldVein/3585"
    },
    "booming/LaRomantica": {
      "title": "La Romantica",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 567,
        "_hd": 775,
        "all": 815
      },
      "real": {
        "BTC": {
          "id": 3589
        },
        "DOG": {
          "id": 3590
        },
        "ETH": {
          "id": 3591
        },
        "LTC": {
          "id": 3593
        }
      },
      "demo": "/games/booming/LaRomantica/3592"
    },
    "booming/CashPig": {
      "title": "Cash Pig",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 113,
        "slots": 193,
        "_hd": 377,
        "all": 392
      },
      "real": {
        "BTC": {
          "id": 3596
        },
        "DOG": {
          "id": 3597
        },
        "ETH": {
          "id": 3598
        },
        "LTC": {
          "id": 3600
        }
      },
      "demo": "/games/booming/CashPig/3599"
    },
    "booming/DiscoBar7s": {
      "title": "Disco Bar 7s",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 290,
        "_hd": 516,
        "all": 536
      },
      "real": {
        "BTC": {
          "id": 3610
        },
        "DOG": {
          "id": 3611
        },
        "ETH": {
          "id": 3612
        },
        "LTC": {
          "id": 3614
        }
      },
      "demo": "/games/booming/DiscoBar7s/3613"
    },
    "booming/ShowmetheMummy": {
      "title": "Show me the Mummy",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 871,
        "_hd": 1074,
        "all": 1127
      },
      "real": {
        "BTC": {
          "id": 3617
        },
        "DOG": {
          "id": 3618
        },
        "ETH": {
          "id": 3619
        },
        "LTC": {
          "id": 3621
        }
      },
      "demo": "/games/booming/ShowmetheMummy/3620"
    },
    "booming/FreezingClassics": {
      "title": "Freezing Classics",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 382,
        "_hd": 608,
        "all": 634
      },
      "real": {
        "BTC": {
          "id": 3624
        },
        "DOG": {
          "id": 3625
        },
        "ETH": {
          "id": 3626
        },
        "LTC": {
          "id": 3628
        }
      },
      "demo": "/games/booming/FreezingClassics/3627"
    },
    "booming/BoomingSeven": {
      "title": "Booming Seven",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 161,
        "_hd": 349,
        "all": 363
      },
      "real": {
        "BTC": {
          "id": 3631
        },
        "DOG": {
          "id": 3632
        },
        "ETH": {
          "id": 3633
        },
        "LTC": {
          "id": 3635
        }
      },
      "demo": "/games/booming/BoomingSeven/3634"
    },
    "booming/MiamiNights": {
      "title": "Miami Nights",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 675,
        "_hd": 872,
        "all": 921
      },
      "real": {
        "BTC": {
          "id": 3638
        },
        "DOG": {
          "id": 3639
        },
        "ETH": {
          "id": 3640
        },
        "LTC": {
          "id": 3642
        }
      },
      "demo": "/games/booming/MiamiNights/3641"
    },
    "booming/BoomingBananas": {
      "title": "Booming Bananas",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 158,
        "_hd": 346,
        "all": 360
      },
      "real": {
        "BTC": {
          "id": 3645
        },
        "DOG": {
          "id": 3646
        },
        "ETH": {
          "id": 3647
        },
        "LTC": {
          "id": 3649
        }
      },
      "demo": "/games/booming/BoomingBananas/3648"
    },
    "booming/ColdCash": {
      "title": "Cold Cash",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 232,
        "_hd": 462,
        "all": 478
      },
      "real": {
        "BTC": {
          "id": 3652
        },
        "DOG": {
          "id": 3653
        },
        "ETH": {
          "id": 3654
        },
        "LTC": {
          "id": 3656
        }
      },
      "demo": "/games/booming/ColdCash/3655"
    },
    "booming/SurfinReels": {
      "title": "Surfin' Reels",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 938,
        "_hd": 1170,
        "all": 1223
      },
      "real": {
        "BTC": {
          "id": 3659
        },
        "DOG": {
          "id": 3660
        },
        "ETH": {
          "id": 3661
        },
        "LTC": {
          "id": 3663
        }
      },
      "demo": "/games/booming/SurfinReels/3662"
    },
    "booming/RoyalWins": {
      "title": "Royal Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 828,
        "_hd": 1019,
        "all": 1071
      },
      "real": {
        "BTC": {
          "id": 3666
        },
        "DOG": {
          "id": 3667
        },
        "ETH": {
          "id": 3668
        },
        "LTC": {
          "id": 3670
        }
      },
      "demo": "/games/booming/RoyalWins/3669"
    },
    "booming/WildPride": {
      "title": "Wild Pride",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 249,
        "slots": 1071,
        "_hd": 1296,
        "all": 1354
      },
      "real": {
        "BTC": {
          "id": 3673
        },
        "DOG": {
          "id": 3674
        },
        "ETH": {
          "id": 3675
        },
        "LTC": {
          "id": 3677
        }
      },
      "demo": "/games/booming/WildPride/3676"
    },
    "booming/ValleyofPharaohs": {
      "title": "Valley of Pharaohs",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1025,
        "_hd": 1255,
        "all": 1310
      },
      "real": {
        "BTC": {
          "id": 3680
        },
        "DOG": {
          "id": 3681
        },
        "ETH": {
          "id": 3682
        },
        "LTC": {
          "id": 3684
        }
      },
      "demo": "/games/booming/ValleyofPharaohs/3683"
    },
    "booming/WunderfestDeluxe": {
      "title": "Wunderfest Deluxe",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1097,
        "_hd": 1315,
        "all": 1377
      },
      "real": {
        "BTC": {
          "id": 3687
        },
        "DOG": {
          "id": 3688
        },
        "ETH": {
          "id": 3689
        },
        "LTC": {
          "id": 3691
        }
      },
      "demo": "/games/booming/WunderfestDeluxe/3690"
    },
    "booming/Tailgating": {
      "title": "Tailgating",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 950,
        "_hd": 1182,
        "all": 1235
      },
      "real": {
        "BTC": {
          "id": 3694
        },
        "DOG": {
          "id": 3695
        },
        "ETH": {
          "id": 3696
        },
        "LTC": {
          "id": 3698
        }
      },
      "demo": "/games/booming/Tailgating/3697"
    },
    "booming/DiamondRiches": {
      "title": "Diamond Riches",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 284,
        "_hd": 511,
        "all": 530
      },
      "real": {
        "BTC": {
          "id": 3701
        },
        "DOG": {
          "id": 3702
        },
        "ETH": {
          "id": 3703
        },
        "LTC": {
          "id": 3705
        }
      },
      "demo": "/games/booming/DiamondRiches/3704"
    },
    "booming/BabyBloomers": {
      "title": "Baby Bloomers",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 96,
        "_hd": 181,
        "all": 187
      },
      "real": {
        "BTC": {
          "id": 3708
        },
        "DOG": {
          "id": 3709
        },
        "ETH": {
          "id": 3710
        },
        "LTC": {
          "id": 3712
        }
      },
      "demo": "/games/booming/BabyBloomers/3711"
    },
    "booming/Gunspinner": {
      "title": "Gunspinner",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 453,
        "_hd": 676,
        "all": 706
      },
      "real": {
        "BTC": {
          "id": 3715
        },
        "DOG": {
          "id": 3716
        },
        "ETH": {
          "id": 3717
        },
        "LTC": {
          "id": 3719
        }
      },
      "demo": "/games/booming/Gunspinner/3718"
    },
    "booming/BarnyardTwister": {
      "title": "Barnyard Twister",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 102,
        "_hd": 192,
        "all": 198
      },
      "real": {
        "BTC": {
          "id": 3722
        },
        "DOG": {
          "id": 3723
        },
        "ETH": {
          "id": 3724
        },
        "LTC": {
          "id": 3726
        }
      },
      "demo": "/games/booming/BarnyardTwister/3725"
    },
    "booming/Octoberfest": {
      "title": "Octoberfest",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 730,
        "_hd": 927,
        "all": 976
      },
      "real": {
        "BTC": {
          "id": 3729
        },
        "DOG": {
          "id": 3730
        },
        "ETH": {
          "id": 3731
        },
        "LTC": {
          "id": 3733
        }
      },
      "demo": "/games/booming/Octoberfest/3732"
    },
    "booming/FreemasonsFortune": {
      "title": "Freemason's Fortune",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 381,
        "_hd": 607,
        "all": 633
      },
      "real": {
        "BTC": {
          "id": 3736
        },
        "DOG": {
          "id": 3737
        },
        "ETH": {
          "id": 3738
        },
        "LTC": {
          "id": 3740
        }
      },
      "demo": "/games/booming/FreemasonsFortune/3739"
    },
    "booming/GenieWishes": {
      "title": "Genie Wishes",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 410,
        "_hd": 636,
        "all": 663
      },
      "real": {
        "BTC": {
          "id": 3743
        },
        "DOG": {
          "id": 3744
        },
        "ETH": {
          "id": 3745
        },
        "LTC": {
          "id": 3747
        }
      },
      "demo": "/games/booming/GenieWishes/3746"
    },
    "booming/WitchesWildBrew": {
      "title": "Witches Wild Brew",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1087,
        "_hd": 1308,
        "all": 1369
      },
      "real": {
        "BTC": {
          "id": 3750
        },
        "DOG": {
          "id": 3751
        },
        "ETH": {
          "id": 3752
        },
        "LTC": {
          "id": 3754
        }
      },
      "demo": "/games/booming/WitchesWildBrew/3753"
    },
    "booming/CherryBomb": {
      "title": "Cherry Bomb",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 203,
        "_hd": 388,
        "all": 404
      },
      "real": {
        "BTC": {
          "id": 3757
        },
        "DOG": {
          "id": 3758
        },
        "ETH": {
          "id": 3759
        },
        "LTC": {
          "id": 3761
        }
      },
      "demo": "/games/booming/CherryBomb/3760"
    },
    "booming/VegasWins": {
      "title": "Vegas Wins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1033,
        "_hd": 1262,
        "all": 1318
      },
      "real": {
        "BTC": {
          "id": 3764
        },
        "DOG": {
          "id": 3765
        },
        "ETH": {
          "id": 3766
        },
        "LTC": {
          "id": 3768
        }
      },
      "demo": "/games/booming/VegasWins/3767"
    },
    "booming/AztecPalace": {
      "title": "Aztec Palace",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 92,
        "_hd": 178,
        "all": 183
      },
      "real": {
        "BTC": {
          "id": 3771
        },
        "DOG": {
          "id": 3772
        },
        "ETH": {
          "id": 3773
        },
        "LTC": {
          "id": 3775
        }
      },
      "demo": "/games/booming/AztecPalace/3774"
    },
    "booming/LotusLove": {
      "title": "Lotus Love",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 594,
        "_hd": 805,
        "all": 846
      },
      "real": {
        "BTC": {
          "id": 3778
        },
        "DOG": {
          "id": 3779
        },
        "ETH": {
          "id": 3780
        },
        "LTC": {
          "id": 3782
        }
      },
      "demo": "/games/booming/LotusLove/3781"
    },
    "booming/ExoticFruit": {
      "title": "Exotic Fruit",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 339,
        "_hd": 559,
        "all": 581
      },
      "real": {
        "BTC": {
          "id": 3785
        },
        "DOG": {
          "id": 3786
        },
        "ETH": {
          "id": 3787
        },
        "LTC": {
          "id": 3789
        }
      },
      "demo": "/games/booming/ExoticFruit/3788"
    },
    "booming/StellarSpins": {
      "title": "Stellar Spins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 912,
        "_hd": 1145,
        "all": 1198
      },
      "real": {
        "BTC": {
          "id": 3792
        },
        "DOG": {
          "id": 3793
        },
        "ETH": {
          "id": 3794
        },
        "LTC": {
          "id": 3796
        }
      },
      "demo": "/games/booming/StellarSpins/3795"
    },
    "booming/Boomshakalaka": {
      "title": "Boomshakalaka",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 163,
        "_hd": 351,
        "all": 365
      },
      "real": {
        "BTC": {
          "id": 3799
        },
        "DOG": {
          "id": 3800
        },
        "ETH": {
          "id": 3801
        },
        "LTC": {
          "id": 3803
        }
      },
      "demo": "/games/booming/Boomshakalaka/3802"
    },
    "spinomenal/FruitsCollection40Lines": {
      "title": "Fruits Collection – 40 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 50,
        "popularity": 203,
        "slots": 396,
        "_hd": 623,
        "all": 649
      },
      "real": {
        "BTC": {
          "id": 3820
        },
        "DOG": {
          "id": 3821
        },
        "ETH": {
          "id": 3822
        },
        "LTC": {
          "id": 3824
        }
      },
      "demo": "/games/spinomenal/FruitsCollection40Lines/3823"
    },
    "spinomenal/GoldenDynasty": {
      "title": "Golden Dynasty",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 375,
        "slots": 429,
        "all": 680
      },
      "real": {
        "BTC": {
          "id": 3827
        },
        "DOG": {
          "id": 3828
        },
        "ETH": {
          "id": 3829
        },
        "LTC": {
          "id": 3831
        }
      },
      "demo": "/games/spinomenal/GoldenDynasty/3830"
    },
    "spinomenal/ColossusFruitsEasterEdition": {
      "title": "Colossus Fruits Easter Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 236,
        "_hd": 466,
        "all": 482,
        "bonusbuy": 9
      },
      "real": {
        "BTC": {
          "id": 3834
        },
        "DOG": {
          "id": 3835
        },
        "ETH": {
          "id": 3836
        },
        "LTC": {
          "id": 3838
        }
      },
      "demo": "/games/spinomenal/ColossusFruitsEasterEdition/3837"
    },
    "spinomenal/NightsOfEgyptExpandedEdition": {
      "title": "Nights Of Egypt - Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 35,
        "slots": 720,
        "_hd": 913,
        "all": 962,
        "bonusbuy": 18
      },
      "real": {
        "BTC": {
          "id": 3841
        },
        "DOG": {
          "id": 3842
        },
        "ETH": {
          "id": 3843
        },
        "LTC": {
          "id": 3845
        }
      },
      "demo": "/games/spinomenal/NightsOfEgyptExpandedEdition/3844"
    },
    "spinomenal/SirensTreasuresII15LinesSeries": {
      "title": "Siren's Treasures II 15 Lines Series",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 873,
        "_hd": 1077,
        "all": 1130
      },
      "real": {
        "BTC": {
          "id": 3848
        },
        "DOG": {
          "id": 3849
        },
        "ETH": {
          "id": 3850
        },
        "LTC": {
          "id": 3852
        }
      },
      "demo": "/games/spinomenal/SirensTreasuresII15LinesSeries/3851"
    },
    "spinomenal/1stOfMay": {
      "title": "1st Of May",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 209,
        "slots": 15,
        "_hd": 108,
        "all": 108
      },
      "real": {
        "BTC": {
          "id": 3855
        },
        "DOG": {
          "id": 3856
        },
        "ETH": {
          "id": 3857
        },
        "LTC": {
          "id": 3859
        }
      },
      "demo": "/games/spinomenal/1stOfMay/3858"
    },
    "spinomenal/BuffaloRampage": {
      "title": "Buffalo Rampage",
      "provider": "spinomenal",
      "collections": {
        "novelty": 88,
        "popularity": 398,
        "slots": 172,
        "_hd": 359,
        "all": 373,
        "bonusbuy": 7
      },
      "real": {
        "BTC": {
          "id": 3862
        },
        "DOG": {
          "id": 3863
        },
        "ETH": {
          "id": 3864
        },
        "LTC": {
          "id": 3866
        }
      },
      "demo": "/games/spinomenal/BuffaloRampage/3865"
    },
    "spinomenal/LotusKingdom": {
      "title": "Lotus Kingdom",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 593,
        "_hd": 804,
        "all": 845
      },
      "real": {
        "BTC": {
          "id": 3869
        },
        "DOG": {
          "id": 3870
        },
        "ETH": {
          "id": 3871
        },
        "LTC": {
          "id": 3873
        }
      },
      "demo": "/games/spinomenal/LotusKingdom/3872"
    },
    "spinomenal/LilithsPassion15Lines": {
      "title": "Lilith's Passion 15 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 587,
        "_hd": 796,
        "all": 837
      },
      "real": {
        "BTC": {
          "id": 3883
        },
        "DOG": {
          "id": 3884
        },
        "ETH": {
          "id": 3885
        },
        "LTC": {
          "id": 3887
        }
      },
      "demo": "/games/spinomenal/LilithsPassion15Lines/3886"
    },
    "spinomenal/DemiGodsIVChristmasEdition": {
      "title": "Demi Gods IV Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 276,
        "_hd": 504,
        "all": 521
      },
      "real": {
        "BTC": {
          "id": 3890
        },
        "DOG": {
          "id": 3891
        },
        "ETH": {
          "id": 3892
        },
        "LTC": {
          "id": 3894
        }
      },
      "demo": "/games/spinomenal/DemiGodsIVChristmasEdition/3893"
    },
    "spinomenal/BookOfTribesReloaded": {
      "title": "Book Of Tribes Reloaded",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 50,
        "slots": 137,
        "accumulating": 1,
        "_hd": 327,
        "all": 341,
        "bonusbuy": 3
      },
      "real": {
        "BTC": {
          "id": 3897
        },
        "DOG": {
          "id": 3898
        },
        "ETH": {
          "id": 3899
        },
        "LTC": {
          "id": 3901
        }
      },
      "demo": "/games/spinomenal/BookOfTribesReloaded/3900"
    },
    "spinomenal/DemiGodsIII15LinesSeries": {
      "title": "Demi Gods III 15 Lines Series",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 274,
        "_hd": 502,
        "all": 519
      },
      "real": {
        "BTC": {
          "id": 3904
        },
        "DOG": {
          "id": 3905
        },
        "ETH": {
          "id": 3906
        },
        "LTC": {
          "id": 3908
        }
      },
      "demo": "/games/spinomenal/DemiGodsIII15LinesSeries/3907"
    },
    "spinomenal/APiratesQuest": {
      "title": "A Pirate's Quest",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 48,
        "_hd": 140,
        "all": 140
      },
      "real": {
        "BTC": {
          "id": 3911
        },
        "DOG": {
          "id": 3912
        },
        "ETH": {
          "id": 3913
        },
        "LTC": {
          "id": 3915
        }
      },
      "demo": "/games/spinomenal/APiratesQuest/3914"
    },
    "spinomenal/MajesticKingChristmasEdition": {
      "title": "Majestic King - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 647,
        "_hd": 847,
        "all": 895
      },
      "real": {
        "BTC": {
          "id": 3918
        },
        "DOG": {
          "id": 3919
        },
        "ETH": {
          "id": 3920
        },
        "LTC": {
          "id": 3922
        }
      },
      "demo": "/games/spinomenal/MajesticKingChristmasEdition/3921"
    },
    "spinomenal/ArcticAdventures": {
      "title": "Arctic Adventures",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 78,
        "_hd": 164,
        "all": 168
      },
      "real": {
        "BTC": {
          "id": 3925
        },
        "DOG": {
          "id": 3926
        },
        "ETH": {
          "id": 3927
        },
        "LTC": {
          "id": 3929
        }
      },
      "demo": "/games/spinomenal/ArcticAdventures/3928"
    },
    "spinomenal/40LuckyFruits": {
      "title": "40 Lucky Fruits",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 336,
        "slots": 26,
        "_hd": 119,
        "all": 119
      },
      "real": {
        "BTC": {
          "id": 3932
        },
        "DOG": {
          "id": 3933
        },
        "ETH": {
          "id": 3934
        },
        "LTC": {
          "id": 3936
        }
      },
      "demo": "/games/spinomenal/40LuckyFruits/3935"
    },
    "spinomenal/EgyptianEclipse": {
      "title": "Egyptian Eclipse",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 326,
        "_hd": 548,
        "all": 570
      },
      "real": {
        "BTC": {
          "id": 3939
        },
        "DOG": {
          "id": 3940
        },
        "ETH": {
          "id": 3941
        },
        "LTC": {
          "id": 3943
        }
      },
      "demo": "/games/spinomenal/EgyptianEclipse/3942"
    },
    "spinomenal/LemurDoesVegas": {
      "title": "Lemur Does Vegas",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 579,
        "accumulating": 11,
        "_hd": 785,
        "all": 826
      },
      "real": {
        "BTC": {
          "id": 3946
        },
        "DOG": {
          "id": 3947
        },
        "ETH": {
          "id": 3948
        },
        "LTC": {
          "id": 3950
        }
      },
      "demo": "/games/spinomenal/LemurDoesVegas/3949"
    },
    "spinomenal/DemiGodsIV": {
      "title": "Demi Gods IV",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 293,
        "slots": 275,
        "_hd": 503,
        "all": 520
      },
      "real": {
        "BTC": {
          "id": 3960
        },
        "DOG": {
          "id": 3961
        },
        "ETH": {
          "id": 3962
        },
        "LTC": {
          "id": 3964
        }
      },
      "demo": "/games/spinomenal/DemiGodsIV/3963"
    },
    "spinomenal/FruitsonIce": {
      "title": "Fruits on Ice",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 400,
        "_hd": 627,
        "all": 653
      },
      "real": {
        "BTC": {
          "id": 3967
        },
        "DOG": {
          "id": 3968
        },
        "ETH": {
          "id": 3969
        },
        "LTC": {
          "id": 3971
        }
      },
      "demo": "/games/spinomenal/FruitsonIce/3970"
    },
    "spinomenal/StoryOfTheSamurai10Lines": {
      "title": "Story of the Samurai – 10 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 22,
        "popularity": 398,
        "slots": 917,
        "_hd": 1149,
        "all": 1202,
        "bonusbuy": 27
      },
      "real": {
        "BTC": {
          "id": 3974
        },
        "DOG": {
          "id": 3975
        },
        "ETH": {
          "id": 3976
        },
        "LTC": {
          "id": 3978
        }
      },
      "demo": "/games/spinomenal/StoryOfTheSamurai10Lines/3977"
    },
    "spinomenal/NightsOfFortune": {
      "title": "Nights Of Fortune",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 721,
        "_hd": 914,
        "all": 963
      },
      "real": {
        "BTC": {
          "id": 3995
        },
        "DOG": {
          "id": 3996
        },
        "ETH": {
          "id": 3997
        },
        "LTC": {
          "id": 3999
        }
      },
      "demo": "/games/spinomenal/NightsOfFortune/3998"
    },
    "spinomenal/KitsunesScrollsExpandedEdition": {
      "title": "Kitsune's Scrolls Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 344,
        "slots": 557,
        "_hd": 767,
        "all": 806,
        "bonusbuy": 15
      },
      "real": {
        "BTC": {
          "id": 4002
        },
        "DOG": {
          "id": 4003
        },
        "ETH": {
          "id": 4004
        },
        "LTC": {
          "id": 4006
        }
      },
      "demo": "/games/spinomenal/KitsunesScrollsExpandedEdition/4005"
    },
    "spinomenal/SnowingLuck": {
      "title": "Snowing Luck",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 886,
        "_hd": 1089,
        "all": 1142
      },
      "real": {
        "BTC": {
          "id": 4016
        },
        "DOG": {
          "id": 4017
        },
        "ETH": {
          "id": 4018
        },
        "LTC": {
          "id": 4020
        }
      },
      "demo": "/games/spinomenal/SnowingLuck/4019"
    },
    "spinomenal/VikingsAndGods215LinesEdition": {
      "title": "Vikings And Gods 2 15 Lines Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1041,
        "_hd": 1269,
        "all": 1325
      },
      "real": {
        "BTC": {
          "id": 4023
        },
        "DOG": {
          "id": 4024
        },
        "ETH": {
          "id": 4025
        },
        "LTC": {
          "id": 4027
        }
      },
      "demo": "/games/spinomenal/VikingsAndGods215LinesEdition/4026"
    },
    "spinomenal/Snegurochka": {
      "title": "Snegurochka",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 274,
        "slots": 884,
        "_hd": 1087,
        "all": 1140
      },
      "real": {
        "BTC": {
          "id": 4030
        },
        "DOG": {
          "id": 4031
        },
        "ETH": {
          "id": 4032
        },
        "LTC": {
          "id": 4034
        }
      },
      "demo": "/games/spinomenal/Snegurochka/4033"
    },
    "spinomenal/DemiGodsIIExpandedEdition": {
      "title": "Demi Gods II-Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 273,
        "_hd": 501,
        "all": 518
      },
      "real": {
        "BTC": {
          "id": 4044
        },
        "DOG": {
          "id": 4045
        },
        "ETH": {
          "id": 4046
        },
        "LTC": {
          "id": 4048
        }
      },
      "demo": "/games/spinomenal/DemiGodsIIExpandedEdition/4047"
    },
    "spinomenal/AztecSpell10Lines": {
      "title": "Aztec Spell - 10 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 94,
        "_hd": 179,
        "all": 185,
        "bonusbuy": 2
      },
      "real": {
        "BTC": {
          "id": 4065
        },
        "DOG": {
          "id": 4066
        },
        "ETH": {
          "id": 4067
        },
        "LTC": {
          "id": 4069
        }
      },
      "demo": "/games/spinomenal/AztecSpell10Lines/4068"
    },
    "spinomenal/StoryOfHerculesExpandedEdition": {
      "title": "Story Of Hercules - Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 915,
        "_hd": 1147,
        "all": 1200,
        "bonusbuy": 25
      },
      "real": {
        "BTC": {
          "id": 4072
        },
        "DOG": {
          "id": 4073
        },
        "ETH": {
          "id": 4074
        },
        "LTC": {
          "id": 4076
        }
      },
      "demo": "/games/spinomenal/StoryOfHerculesExpandedEdition/4075"
    },
    "spinomenal/SnowingLuckCE": {
      "title": "Snowing Luck - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 887,
        "_hd": 1090,
        "all": 1143
      },
      "real": {
        "BTC": {
          "id": 4093
        },
        "DOG": {
          "id": 4094
        },
        "ETH": {
          "id": 4095
        },
        "LTC": {
          "id": 4097
        }
      },
      "demo": "/games/spinomenal/SnowingLuckCE/4096"
    },
    "spinomenal/CupidStrike2": {
      "title": "Cupid Strike 2",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 257,
        "accumulating": 4,
        "_hd": 487,
        "all": 504
      },
      "real": {
        "BTC": {
          "id": 4114
        },
        "DOG": {
          "id": 4115
        },
        "ETH": {
          "id": 4116
        },
        "LTC": {
          "id": 4118
        }
      },
      "demo": "/games/spinomenal/CupidStrike2/4117"
    },
    "spinomenal/BookofXmas": {
      "title": "Book of Xmas",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 191,
        "slots": 155,
        "_hd": 343,
        "all": 357,
        "bonusbuy": 5
      },
      "real": {
        "BTC": {
          "id": 4128
        },
        "DOG": {
          "id": 4129
        },
        "ETH": {
          "id": 4130
        },
        "LTC": {
          "id": 4132
        }
      },
      "demo": "/games/spinomenal/BookofXmas/4131"
    },
    "spinomenal/LemurDoesVegasEasterEdition": {
      "title": "Lemur Does Vegas Easter Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 580,
        "_hd": 786,
        "all": 827
      },
      "real": {
        "BTC": {
          "id": 4142
        },
        "DOG": {
          "id": 4143
        },
        "ETH": {
          "id": 4144
        },
        "LTC": {
          "id": 4146
        }
      },
      "demo": "/games/spinomenal/LemurDoesVegasEasterEdition/4145"
    },
    "spinomenal/ColossusFruitsChristmasEdition": {
      "title": "Colossus Fruits - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 235,
        "_hd": 465,
        "all": 481,
        "bonusbuy": 8
      },
      "real": {
        "BTC": {
          "id": 4149
        },
        "DOG": {
          "id": 4150
        },
        "ETH": {
          "id": 4151
        },
        "LTC": {
          "id": 4153
        }
      },
      "demo": "/games/spinomenal/ColossusFruitsChristmasEdition/4152"
    },
    "spinomenal/YearoftheRat": {
      "title": "Year of the Rat",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1098,
        "_hd": 1316,
        "all": 1378
      },
      "real": {
        "BTC": {
          "id": 4156
        },
        "DOG": {
          "id": 4157
        },
        "ETH": {
          "id": 4158
        },
        "LTC": {
          "id": 4160
        }
      },
      "demo": "/games/spinomenal/YearoftheRat/4159"
    },
    "spinomenal/NightsOfMagicExpandedEdition": {
      "title": "Nights Of Magic Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 722,
        "_hd": 915,
        "all": 964,
        "bonusbuy": 19
      },
      "real": {
        "BTC": {
          "id": 4170
        },
        "DOG": {
          "id": 4171
        },
        "ETH": {
          "id": 4172
        },
        "LTC": {
          "id": 4174
        }
      },
      "demo": "/games/spinomenal/NightsOfMagicExpandedEdition/4173"
    },
    "spinomenal/SirensTreasures": {
      "title": "Siren's Treasures",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 872,
        "_hd": 1076,
        "all": 1129
      },
      "real": {
        "BTC": {
          "id": 4177
        },
        "DOG": {
          "id": 4178
        },
        "ETH": {
          "id": 4179
        },
        "LTC": {
          "id": 4181
        }
      },
      "demo": "/games/spinomenal/SirensTreasures/4180"
    },
    "spinomenal/ChildhoodSweetsChristmasEdition": {
      "title": "Childhood Sweets Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 211,
        "_hd": 396,
        "all": 412
      },
      "real": {
        "BTC": {
          "id": 4198
        },
        "DOG": {
          "id": 4199
        },
        "ETH": {
          "id": 4200
        },
        "LTC": {
          "id": 4202
        }
      },
      "demo": "/games/spinomenal/ChildhoodSweetsChristmasEdition/4201"
    },
    "spinomenal/AgeofPirates15Lines": {
      "title": "Age of Pirates - 15 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 25,
        "popularity": 364,
        "slots": 58,
        "_hd": 146,
        "all": 148,
        "bonusbuy": 1
      },
      "real": {
        "BTC": {
          "id": 4212
        },
        "DOG": {
          "id": 4213
        },
        "ETH": {
          "id": 4214
        },
        "LTC": {
          "id": 4216
        }
      },
      "demo": "/games/spinomenal/AgeofPirates15Lines/4215"
    },
    "spinomenal/MinesOfGold": {
      "title": "Mines Of Gold",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 271,
        "slots": 679,
        "accumulating": 14,
        "_hd": 876,
        "all": 925
      },
      "real": {
        "BTC": {
          "id": 4219
        },
        "DOG": {
          "id": 4220
        },
        "ETH": {
          "id": 4221
        },
        "LTC": {
          "id": 4223
        }
      },
      "demo": "/games/spinomenal/MinesOfGold/4222"
    },
    "spinomenal/BookoftheDivineReloaded": {
      "title": "Book of the Divine. Reloaded",
      "provider": "spinomenal",
      "collections": {
        "novelty": 46,
        "popularity": 398,
        "slots": 156,
        "_hd": 344,
        "all": 358,
        "bonusbuy": 6
      },
      "real": {
        "BTC": {
          "id": 4226
        },
        "DOG": {
          "id": 4227
        },
        "ETH": {
          "id": 4228
        },
        "LTC": {
          "id": 4230
        }
      },
      "demo": "/games/spinomenal/BookoftheDivineReloaded/4229"
    },
    "spinomenal/SweetWin": {
      "title": "Sweet Win",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 388,
        "slots": 947,
        "_hd": 1179,
        "all": 1232
      },
      "real": {
        "BTC": {
          "id": 4233
        },
        "DOG": {
          "id": 4234
        },
        "ETH": {
          "id": 4235
        },
        "LTC": {
          "id": 4237
        }
      },
      "demo": "/games/spinomenal/SweetWin/4236"
    },
    "spinomenal/EasterSpin": {
      "title": "Easter Spin",
      "provider": "spinomenal",
      "collections": {
        "novelty": 76,
        "popularity": 398,
        "slots": 324,
        "_hd": 546,
        "all": 568
      },
      "real": {
        "BTC": {
          "id": 4247
        },
        "DOG": {
          "id": 4248
        },
        "ETH": {
          "id": 4249
        },
        "LTC": {
          "id": 4251
        }
      },
      "demo": "/games/spinomenal/EasterSpin/4250"
    },
    "spinomenal/PoseidonsRising15Lines": {
      "title": "Poseidon's Rising - 15 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 35,
        "popularity": 398,
        "slots": 783,
        "_hd": 976,
        "all": 1026,
        "bonusbuy": 23
      },
      "real": {
        "BTC": {
          "id": 4254
        },
        "DOG": {
          "id": 4255
        },
        "ETH": {
          "id": 4256
        },
        "LTC": {
          "id": 4258
        }
      },
      "demo": "/games/spinomenal/PoseidonsRising15Lines/4257"
    },
    "spinomenal/SirensTreasures15LinesEdition": {
      "title": "Sirens Treasures 15 Lines Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 874,
        "_hd": 1078,
        "all": 1131,
        "bonusbuy": 24
      },
      "real": {
        "BTC": {
          "id": 4268
        },
        "DOG": {
          "id": 4269
        },
        "ETH": {
          "id": 4270
        },
        "LTC": {
          "id": 4272
        }
      },
      "demo": "/games/spinomenal/SirensTreasures15LinesEdition/4271"
    },
    "spinomenal/88LuckyFortunes": {
      "title": "88 Lucky Fortunes",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 45,
        "_hd": 138,
        "all": 138
      },
      "real": {
        "BTC": {
          "id": 4275
        },
        "DOG": {
          "id": 4276
        },
        "ETH": {
          "id": 4277
        },
        "LTC": {
          "id": 4279
        }
      },
      "demo": "/games/spinomenal/88LuckyFortunes/4278"
    },
    "spinomenal/ChildhoodSweets": {
      "title": "Childhood Sweets",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 210,
        "_hd": 395,
        "all": 411
      },
      "real": {
        "BTC": {
          "id": 4296
        },
        "DOG": {
          "id": 4297
        },
        "ETH": {
          "id": 4298
        },
        "LTC": {
          "id": 4300
        }
      },
      "demo": "/games/spinomenal/ChildhoodSweets/4299"
    },
    "spinomenal/AbundanceSpell": {
      "title": "Abundance Spell",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 50,
        "all": 142
      },
      "real": {
        "BTC": {
          "id": 4310
        },
        "DOG": {
          "id": 4311
        },
        "ETH": {
          "id": 4312
        },
        "LTC": {
          "id": 4314
        }
      },
      "demo": "/games/spinomenal/AbundanceSpell/4313"
    },
    "spinomenal/StoryOfEgypt": {
      "title": "Story Of Egypt",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 914,
        "_hd": 1146,
        "all": 1199
      },
      "real": {
        "BTC": {
          "id": 4317
        },
        "DOG": {
          "id": 4318
        },
        "ETH": {
          "id": 4319
        },
        "LTC": {
          "id": 4321
        }
      },
      "demo": "/games/spinomenal/StoryOfEgypt/4320"
    },
    "spinomenal/1ReelEgypt": {
      "title": "1 Reel Egypt",
      "provider": "spinomenal",
      "collections": {
        "novelty": 20,
        "popularity": 398,
        "slots": 3,
        "_hd": 96,
        "all": 96
      },
      "real": {
        "BTC": {
          "id": 4324
        },
        "DOG": {
          "id": 4325
        },
        "ETH": {
          "id": 4326
        },
        "LTC": {
          "id": 4328
        }
      },
      "demo": "/games/spinomenal/1ReelEgypt/4327"
    },
    "spinomenal/Kupala": {
      "title": "Kupala",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 565,
        "_hd": 774,
        "all": 813
      },
      "real": {
        "BTC": {
          "id": 4331
        },
        "DOG": {
          "id": 4332
        },
        "ETH": {
          "id": 4333
        },
        "LTC": {
          "id": 4335
        }
      },
      "demo": "/games/spinomenal/Kupala/4334"
    },
    "spinomenal/TigersCharms": {
      "title": "Tiger's Charms",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1001,
        "_hd": 1230,
        "all": 1283,
        "bonusbuy": 28
      },
      "real": {
        "BTC": {
          "id": 4338
        },
        "DOG": {
          "id": 4339
        },
        "ETH": {
          "id": 4340
        },
        "LTC": {
          "id": 4342
        }
      },
      "demo": "/games/spinomenal/TigersCharms/4341"
    },
    "spinomenal/NovaGems": {
      "title": "Nova Gems",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 726,
        "_hd": 923,
        "all": 972,
        "bonusbuy": 20
      },
      "real": {
        "BTC": {
          "id": 4345
        },
        "DOG": {
          "id": 4346
        },
        "ETH": {
          "id": 4347
        },
        "LTC": {
          "id": 4349
        }
      },
      "demo": "/games/spinomenal/NovaGems/4348"
    },
    "spinomenal/JokerMadnessChristmasEdition": {
      "title": "Joker Madness Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 533,
        "_hd": 748,
        "all": 786
      },
      "real": {
        "BTC": {
          "id": 4352
        },
        "DOG": {
          "id": 4353
        },
        "ETH": {
          "id": 4354
        },
        "LTC": {
          "id": 4356
        }
      },
      "demo": "/games/spinomenal/JokerMadnessChristmasEdition/4355"
    },
    "spinomenal/DragonsCharms": {
      "title": "Dragon's Charms",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 312,
        "_hd": 536,
        "all": 556,
        "bonusbuy": 12
      },
      "real": {
        "BTC": {
          "id": 4366
        },
        "DOG": {
          "id": 4367
        },
        "ETH": {
          "id": 4368
        },
        "LTC": {
          "id": 4370
        }
      },
      "demo": "/games/spinomenal/DragonsCharms/4369"
    },
    "spinomenal/PennyFruitsEasterEdition": {
      "title": "Penny Fruits Easter Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 752,
        "_hd": 948,
        "all": 998
      },
      "real": {
        "BTC": {
          "id": 4380
        },
        "DOG": {
          "id": 4381
        },
        "ETH": {
          "id": 4382
        },
        "LTC": {
          "id": 4384
        }
      },
      "demo": "/games/spinomenal/PennyFruitsEasterEdition/4383"
    },
    "spinomenal/LilithsPassion": {
      "title": "Lilith's Passion",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 585,
        "_hd": 794,
        "all": 835
      },
      "real": {
        "BTC": {
          "id": 4387
        },
        "DOG": {
          "id": 4388
        },
        "ETH": {
          "id": 4389
        },
        "LTC": {
          "id": 4391
        }
      },
      "demo": "/games/spinomenal/LilithsPassion/4390"
    },
    "spinomenal/DemiGodsII15LinesSeries": {
      "title": "Demi Gods II 15 Lines Series",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 272,
        "_hd": 500,
        "all": 517
      },
      "real": {
        "BTC": {
          "id": 4394
        },
        "DOG": {
          "id": 4395
        },
        "ETH": {
          "id": 4396
        },
        "LTC": {
          "id": 4398
        }
      },
      "demo": "/games/spinomenal/DemiGodsII15LinesSeries/4397"
    },
    "spinomenal/ColossusKingdom": {
      "title": "Colossus Kingdom",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 237,
        "_hd": 467,
        "all": 483
      },
      "real": {
        "BTC": {
          "id": 4401
        },
        "DOG": {
          "id": 4402
        },
        "ETH": {
          "id": 4403
        },
        "LTC": {
          "id": 4405
        }
      },
      "demo": "/games/spinomenal/ColossusKingdom/4404"
    },
    "spinomenal/PatricksPick": {
      "title": "Patrick's Pick",
      "provider": "spinomenal",
      "collections": {
        "novelty": 84,
        "popularity": 398,
        "slots": 746,
        "_hd": 942,
        "all": 992
      },
      "real": {
        "BTC": {
          "id": 4408
        },
        "DOG": {
          "id": 4409
        },
        "ETH": {
          "id": 4410
        },
        "LTC": {
          "id": 4412
        }
      },
      "demo": "/games/spinomenal/PatricksPick/4411"
    },
    "spinomenal/FruitsDeluxeEasterEdition": {
      "title": "Fruits Deluxe Easter Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 399,
        "_hd": 626,
        "all": 652
      },
      "real": {
        "BTC": {
          "id": 4415
        },
        "DOG": {
          "id": 4416
        },
        "ETH": {
          "id": 4417
        },
        "LTC": {
          "id": 4419
        }
      },
      "demo": "/games/spinomenal/FruitsDeluxeEasterEdition/4418"
    },
    "spinomenal/88FortuneCats": {
      "title": "88 Fortune Cats",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 214,
        "slots": 42,
        "_hd": 135,
        "all": 135
      },
      "real": {
        "BTC": {
          "id": 4422
        },
        "DOG": {
          "id": 4423
        },
        "ETH": {
          "id": 4424
        },
        "LTC": {
          "id": 4426
        }
      },
      "demo": "/games/spinomenal/88FortuneCats/4425"
    },
    "spinomenal/FruitsDeluxeChristmasEdition": {
      "title": "Fruits Deluxe Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 398,
        "_hd": 625,
        "all": 651
      },
      "real": {
        "BTC": {
          "id": 4429
        },
        "DOG": {
          "id": 4430
        },
        "ETH": {
          "id": 4431
        },
        "LTC": {
          "id": 4433
        }
      },
      "demo": "/games/spinomenal/FruitsDeluxeChristmasEdition/4432"
    },
    "spinomenal/PennyFruitsChristmasEdition": {
      "title": "Penny Fruits Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 751,
        "_hd": 947,
        "all": 997
      },
      "real": {
        "BTC": {
          "id": 4443
        },
        "DOG": {
          "id": 4444
        },
        "ETH": {
          "id": 4445
        },
        "LTC": {
          "id": 4447
        }
      },
      "demo": "/games/spinomenal/PennyFruitsChristmasEdition/4446"
    },
    "spinomenal/StoryOfHercules": {
      "title": "Story Of Hercules- 15 Lines Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 916,
        "_hd": 1148,
        "all": 1201,
        "bonusbuy": 26
      },
      "real": {
        "BTC": {
          "id": 4450
        },
        "DOG": {
          "id": 4451
        },
        "ETH": {
          "id": 4452
        },
        "LTC": {
          "id": 4454
        }
      },
      "demo": "/games/spinomenal/StoryOfHercules/4453"
    },
    "spinomenal/WildOx": {
      "title": "Wild Ox",
      "provider": "spinomenal",
      "collections": {
        "novelty": 109,
        "popularity": 398,
        "slots": 1069,
        "_hd": 1294,
        "all": 1352
      },
      "real": {
        "BTC": {
          "id": 4457
        },
        "DOG": {
          "id": 4458
        },
        "ETH": {
          "id": 4459
        },
        "LTC": {
          "id": 4461
        }
      },
      "demo": "/games/spinomenal/WildOx/4460"
    },
    "spinomenal/SpinningLights": {
      "title": "Spinning Lights",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 901,
        "_hd": 1135,
        "all": 1188
      },
      "real": {
        "BTC": {
          "id": 4464
        },
        "DOG": {
          "id": 4465
        },
        "ETH": {
          "id": 4466
        },
        "LTC": {
          "id": 4468
        }
      },
      "demo": "/games/spinomenal/SpinningLights/4467"
    },
    "spinomenal/OriginsOfLilithExpandedEdition": {
      "title": "Origins Of Lilith - Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 735,
        "_hd": 932,
        "all": 981,
        "bonusbuy": 21
      },
      "real": {
        "BTC": {
          "id": 4478
        },
        "DOG": {
          "id": 4479
        },
        "ETH": {
          "id": 4480
        },
        "LTC": {
          "id": 4482
        }
      },
      "demo": "/games/spinomenal/OriginsOfLilithExpandedEdition/4481"
    },
    "spinomenal/VikingsGodsII": {
      "title": "Vikings & Gods II",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1040,
        "_hd": 1268,
        "all": 1324
      },
      "real": {
        "BTC": {
          "id": 4499
        },
        "DOG": {
          "id": 4500
        },
        "ETH": {
          "id": 4501
        },
        "LTC": {
          "id": 4503
        }
      },
      "demo": "/games/spinomenal/VikingsGodsII/4502"
    },
    "spinomenal/LilithsPassionCE": {
      "title": "Lilith's Passion - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 586,
        "_hd": 795,
        "all": 836
      },
      "real": {
        "BTC": {
          "id": 4513
        },
        "DOG": {
          "id": 4514
        },
        "ETH": {
          "id": 4515
        },
        "LTC": {
          "id": 4517
        }
      },
      "demo": "/games/spinomenal/LilithsPassionCE/4516"
    },
    "spinomenal/LuckyMrPatrick": {
      "title": "Lucky Mr. Patrick",
      "provider": "spinomenal",
      "collections": {
        "novelty": 86,
        "popularity": 398,
        "slots": 626,
        "_hd": 832,
        "all": 876,
        "bonusbuy": 16
      },
      "real": {
        "BTC": {
          "id": 4520
        },
        "DOG": {
          "id": 4521
        },
        "ETH": {
          "id": 4522
        },
        "LTC": {
          "id": 4524
        }
      },
      "demo": "/games/spinomenal/LuckyMrPatrick/4523"
    },
    "spinomenal/HuntingTreasures": {
      "title": "Hunting Treasures",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 507,
        "_hd": 720,
        "all": 758
      },
      "real": {
        "BTC": {
          "id": 4541
        },
        "DOG": {
          "id": 4542
        },
        "ETH": {
          "id": 4543
        },
        "LTC": {
          "id": 4545
        }
      },
      "demo": "/games/spinomenal/HuntingTreasures/4544"
    },
    "spinomenal/DemiGodsIICE": {
      "title": "Demi Gods II - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 271,
        "_hd": 499,
        "all": 516,
        "bonusbuy": 11
      },
      "real": {
        "BTC": {
          "id": 4548
        },
        "DOG": {
          "id": 4549
        },
        "ETH": {
          "id": 4550
        },
        "LTC": {
          "id": 4552
        }
      },
      "demo": "/games/spinomenal/DemiGodsIICE/4551"
    },
    "spinomenal/ParrotsRock": {
      "title": "Parrots Rock",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 743,
        "_hd": 940,
        "all": 989
      },
      "real": {
        "BTC": {
          "id": 4555
        },
        "DOG": {
          "id": 4556
        },
        "ETH": {
          "id": 4557
        },
        "LTC": {
          "id": 4559
        }
      },
      "demo": "/games/spinomenal/ParrotsRock/4558"
    },
    "spinomenal/SummerSplash": {
      "title": "Summer Splash",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 922,
        "accumulating": 21,
        "_hd": 1153,
        "all": 1206
      },
      "real": {
        "BTC": {
          "id": 4562
        },
        "DOG": {
          "id": 4563
        },
        "ETH": {
          "id": 4564
        },
        "LTC": {
          "id": 4566
        }
      },
      "demo": "/games/spinomenal/SummerSplash/4565"
    },
    "spinomenal/BookofChampionsReloaded": {
      "title": "Book of Champions Reloaded",
      "provider": "spinomenal",
      "collections": {
        "novelty": 37,
        "popularity": 398,
        "slots": 140,
        "_hd": 329,
        "all": 343,
        "bonusbuy": 4
      },
      "real": {
        "BTC": {
          "id": 4576
        },
        "DOG": {
          "id": 4577
        },
        "ETH": {
          "id": 4578
        },
        "LTC": {
          "id": 4580
        }
      },
      "demo": "/games/spinomenal/BookofChampionsReloaded/4579"
    },
    "spinomenal/FruitsDeluxe": {
      "title": "Fruits Deluxe",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 397,
        "_hd": 624,
        "all": 650
      },
      "real": {
        "BTC": {
          "id": 4583
        },
        "DOG": {
          "id": 4584
        },
        "ETH": {
          "id": 4585
        },
        "LTC": {
          "id": 4587
        }
      },
      "demo": "/games/spinomenal/FruitsDeluxe/4586"
    },
    "spinomenal/4LuckyPinUps": {
      "title": "4 Lucky Pin-Ups",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 170,
        "slots": 24,
        "_hd": 118,
        "all": 118
      },
      "real": {
        "BTC": {
          "id": 4590
        },
        "DOG": {
          "id": 4591
        },
        "ETH": {
          "id": 4592
        },
        "LTC": {
          "id": 4594
        }
      },
      "demo": "/games/spinomenal/4LuckyPinUps/4593"
    },
    "spinomenal/HuntingTreasuresCE": {
      "title": "Hunting Treasures - Christmas Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 508,
        "_hd": 721,
        "all": 759
      },
      "real": {
        "BTC": {
          "id": 4597
        },
        "DOG": {
          "id": 4598
        },
        "ETH": {
          "id": 4599
        },
        "LTC": {
          "id": 4601
        }
      },
      "demo": "/games/spinomenal/HuntingTreasuresCE/4600"
    },
    "spinomenal/PennyFruits": {
      "title": "Penny Fruits",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 750,
        "_hd": 946,
        "all": 996
      },
      "real": {
        "BTC": {
          "id": 4604
        },
        "DOG": {
          "id": 4605
        },
        "ETH": {
          "id": 4606
        },
        "LTC": {
          "id": 4608
        }
      },
      "demo": "/games/spinomenal/PennyFruits/4607"
    },
    "spinomenal/FruitsCollection20Lines": {
      "title": "Fruits Collection – 20 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 49,
        "popularity": 398,
        "slots": 394,
        "_hd": 621,
        "all": 647
      },
      "real": {
        "BTC": {
          "id": 4618
        },
        "DOG": {
          "id": 4619
        },
        "ETH": {
          "id": 4620
        },
        "LTC": {
          "id": 4622
        }
      },
      "demo": "/games/spinomenal/FruitsCollection20Lines/4621"
    },
    "spinomenal/88LuckyCharms": {
      "title": "88 Lucky Charms",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 44,
        "_hd": 137,
        "all": 137
      },
      "real": {
        "BTC": {
          "id": 4625
        },
        "DOG": {
          "id": 4626
        },
        "ETH": {
          "id": 4627
        },
        "LTC": {
          "id": 4629
        }
      },
      "demo": "/games/spinomenal/88LuckyCharms/4628"
    },
    "spinomenal/BookOfRebirthReloaded": {
      "title": "Book Of Rebirth Reloaded",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 135,
        "_hd": 325,
        "all": 339
      },
      "real": {
        "BTC": {
          "id": 4632
        },
        "DOG": {
          "id": 4633
        },
        "ETH": {
          "id": 4634
        },
        "LTC": {
          "id": 4636
        }
      },
      "demo": "/games/spinomenal/BookOfRebirthReloaded/4635"
    },
    "spinomenal/ValentinesFortune": {
      "title": "Valentine's Fortune",
      "provider": "spinomenal",
      "collections": {
        "novelty": 100,
        "popularity": 398,
        "slots": 1024,
        "_hd": 1254,
        "all": 1309,
        "bonusbuy": 29
      },
      "real": {
        "BTC": {
          "id": 4639
        },
        "DOG": {
          "id": 4640
        },
        "ETH": {
          "id": 4641
        },
        "LTC": {
          "id": 4643
        }
      },
      "demo": "/games/spinomenal/ValentinesFortune/4642"
    },
    "spinomenal/MajesticKingExpandedEdition": {
      "title": "Majestic King - Expanded Edition",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 248,
        "slots": 648,
        "_hd": 848,
        "all": 896,
        "bonusbuy": 17
      },
      "real": {
        "BTC": {
          "id": 4646
        },
        "DOG": {
          "id": 4647
        },
        "ETH": {
          "id": 4648
        },
        "LTC": {
          "id": 4650
        }
      },
      "demo": "/games/spinomenal/MajesticKingExpandedEdition/4649"
    },
    "spinomenal/Spinoween": {
      "title": "Spinoween",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 903,
        "_hd": 1137,
        "all": 1190
      },
      "real": {
        "BTC": {
          "id": 4660
        },
        "DOG": {
          "id": 4661
        },
        "ETH": {
          "id": 4662
        },
        "LTC": {
          "id": 4664
        }
      },
      "demo": "/games/spinomenal/Spinoween/4663"
    },
    "spinomenal/EgyptianRebirthII10Line": {
      "title": "Egyptian Rebirth II - 10 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 73,
        "popularity": 224,
        "slots": 328,
        "_hd": 550,
        "all": 572,
        "bonusbuy": 13
      },
      "real": {
        "BTC": {
          "id": 4667
        },
        "DOG": {
          "id": 4668
        },
        "ETH": {
          "id": 4669
        },
        "LTC": {
          "id": 4671
        }
      },
      "demo": "/games/spinomenal/EgyptianRebirthII10Line/4670"
    },
    "spinomenal/DedMoroz": {
      "title": "Ded Moroz",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 309,
        "slots": 269,
        "_hd": 497,
        "all": 514,
        "bonusbuy": 10
      },
      "real": {
        "BTC": {
          "id": 4674
        },
        "DOG": {
          "id": 4675
        },
        "ETH": {
          "id": 4676
        },
        "LTC": {
          "id": 4678
        }
      },
      "demo": "/games/spinomenal/DedMoroz/4677"
    },
    "spinomenal/GoddessOfLotus10Lines": {
      "title": "Goddess Of Lotus- 10 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 417,
        "_hd": 643,
        "all": 670,
        "bonusbuy": 14
      },
      "real": {
        "BTC": {
          "id": 4688
        },
        "DOG": {
          "id": 4689
        },
        "ETH": {
          "id": 4690
        },
        "LTC": {
          "id": 4692
        }
      },
      "demo": "/games/spinomenal/GoddessOfLotus10Lines/4691"
    },
    "spinomenal/FruitsCollection30Lines": {
      "title": "Fruits Collection – 30 Lines",
      "provider": "spinomenal",
      "collections": {
        "novelty": 48,
        "popularity": 398,
        "slots": 395,
        "_hd": 622,
        "all": 648
      },
      "real": {
        "BTC": {
          "id": 4709
        },
        "DOG": {
          "id": 4710
        },
        "ETH": {
          "id": 4711
        },
        "LTC": {
          "id": 4713
        }
      },
      "demo": "/games/spinomenal/FruitsCollection30Lines/4712"
    },
    "pragmaticexternal/AztecGems": {
      "title": "Aztec Gems",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 89,
        "_hd": 175,
        "all": 180
      },
      "real": {
        "BTC": {
          "id": 4722
        },
        "ETH": {
          "id": 4723
        },
        "LTC": {
          "id": 4725
        }
      },
      "demo": "/games/pragmaticexternal/AztecGems/4724"
    },
    "pragmaticexternal/JohnHunterandtheTomboftheScarabQueen": {
      "title": "John Hunter and the Tomb of the Scarab Queen",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 216,
        "slots": 530,
        "_hd": 745,
        "all": 783
      },
      "real": {
        "BTC": {
          "id": 4726
        },
        "ETH": {
          "id": 4727
        },
        "LTC": {
          "id": 4729
        }
      },
      "demo": "/games/pragmaticexternal/JohnHunterandtheTomboftheScarabQueen/4728"
    },
    "pragmaticexternal/ReturnOftheDead1": {
      "title": "Return of the Dead",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 246,
        "slots": 809,
        "_hd": 1000,
        "all": 1051
      },
      "real": {
        "BTC": {
          "id": 4730
        },
        "ETH": {
          "id": 4731
        },
        "LTC": {
          "id": 4733
        }
      },
      "demo": "/games/pragmaticexternal/ReturnOftheDead1/4732"
    },
    "pragmaticexternal/ThreeGenieWishes": {
      "title": "3 Genie Wishes",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 331,
        "slots": 19,
        "_hd": 113,
        "all": 113
      },
      "real": {
        "BTC": {
          "id": 4734
        },
        "ETH": {
          "id": 4735
        },
        "LTC": {
          "id": 4737
        }
      },
      "demo": "/games/pragmaticexternal/ThreeGenieWishes/4736"
    },
    "pragmaticexternal/MysteriousEgypt": {
      "title": "Mysterious Egypt",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 110,
        "popularity": 134,
        "slots": 706,
        "_hd": 900,
        "all": 949,
        "bonusbuy": 77
      },
      "real": {
        "BTC": {
          "id": 4738
        },
        "ETH": {
          "id": 4739
        },
        "LTC": {
          "id": 4741
        }
      },
      "demo": "/games/pragmaticexternal/MysteriousEgypt/4740"
    },
    "pragmaticexternal/AncientEgypt": {
      "title": "Ancient Egypt",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 68,
        "_hd": 155,
        "all": 159
      },
      "real": {
        "BTC": {
          "id": 4742
        },
        "ETH": {
          "id": 4743
        },
        "LTC": {
          "id": 4745
        }
      },
      "demo": "/games/pragmaticexternal/AncientEgypt/4744"
    },
    "pragmaticexternal/TheHandOfMidas": {
      "title": "The Hand of Midas",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 96,
        "popularity": 45,
        "slots": 974,
        "_hd": 1205,
        "all": 1258,
        "bonusbuy": 87
      },
      "real": {
        "BTC": {
          "id": 4746
        },
        "ETH": {
          "id": 4747
        },
        "LTC": {
          "id": 4749
        }
      },
      "demo": "/games/pragmaticexternal/TheHandOfMidas/4748"
    },
    "pragmaticexternal/VegasMagic": {
      "title": "Vegas Magic",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 354,
        "slots": 1028,
        "_hd": 1257,
        "all": 1313
      },
      "real": {
        "BTC": {
          "id": 4750
        },
        "ETH": {
          "id": 4751
        },
        "LTC": {
          "id": 4753
        }
      },
      "demo": "/games/pragmaticexternal/VegasMagic/4752"
    },
    "pragmaticexternal/ThreeKindoms": {
      "title": "3 Kingdoms - Battle of Red Cliffs",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 295,
        "slots": 20,
        "_hd": 114,
        "all": 114
      },
      "real": {
        "BTC": {
          "id": 4754
        },
        "ETH": {
          "id": 4755
        },
        "LTC": {
          "id": 4757
        }
      },
      "demo": "/games/pragmaticexternal/ThreeKindoms/4756"
    },
    "pragmaticexternal/TheAmazingMoneyMachine1": {
      "title": "The Amazing Money Machine",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 59,
        "popularity": 330,
        "slots": 955,
        "_hd": 1186,
        "all": 1239
      },
      "real": {
        "BTC": {
          "id": 4758
        },
        "ETH": {
          "id": 4759
        },
        "LTC": {
          "id": 4761
        }
      },
      "demo": "/games/pragmaticexternal/TheAmazingMoneyMachine1/4760"
    },
    "pragmaticexternal/StarzMegaways": {
      "title": "Starz Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 200,
        "slots": 911,
        "_hd": 1144,
        "all": 1197
      },
      "real": {
        "BTC": {
          "id": 4762
        },
        "ETH": {
          "id": 4763
        },
        "LTC": {
          "id": 4765
        }
      },
      "demo": "/games/pragmaticexternal/StarzMegaways/4764"
    },
    "pragmaticexternal/ReleasetheKraken": {
      "title": "Release the Kraken",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 51,
        "slots": 808,
        "_hd": 999,
        "all": 1050,
        "bonusbuy": 80
      },
      "real": {
        "BTC": {
          "id": 4766
        },
        "ETH": {
          "id": 4767
        },
        "LTC": {
          "id": 4769
        }
      },
      "demo": "/games/pragmaticexternal/ReleasetheKraken/4768"
    },
    "pragmaticexternal/ExtraJuicy": {
      "title": "Extra Juicy",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 147,
        "slots": 342,
        "_hd": 561,
        "all": 583
      },
      "real": {
        "BTC": {
          "id": 4770
        },
        "ETH": {
          "id": 4771
        },
        "LTC": {
          "id": 4773
        }
      },
      "demo": "/games/pragmaticexternal/ExtraJuicy/4772"
    },
    "pragmaticexternal/DragonTiger1": {
      "title": "Dragon Tiger",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 309,
        "_hd": 534,
        "all": 554
      },
      "real": {
        "BTC": {
          "id": 4774
        },
        "ETH": {
          "id": 4775
        },
        "LTC": {
          "id": 4777
        }
      },
      "demo": "/games/pragmaticexternal/DragonTiger1/4776"
    },
    "pragmaticexternal/VoodooMagic": {
      "title": "Voodoo Magic",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 113,
        "popularity": 110,
        "slots": 1042,
        "_hd": 1270,
        "all": 1326
      },
      "real": {
        "BTC": {
          "id": 4778
        },
        "ETH": {
          "id": 4779
        },
        "LTC": {
          "id": 4781
        }
      },
      "demo": "/games/pragmaticexternal/VoodooMagic/4780"
    },
    "pragmaticexternal/SweetBonanza": {
      "title": "Sweet Bonanza",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 8,
        "slots": 940,
        "_hd": 1172,
        "all": 1225,
        "bonusbuy": 83
      },
      "real": {
        "BTC": {
          "id": 4782
        },
        "ETH": {
          "id": 4783
        },
        "LTC": {
          "id": 4785
        }
      },
      "demo": "/games/pragmaticexternal/SweetBonanza/4784"
    },
    "pragmaticexternal/JourneytotheWest": {
      "title": "Journey to the West",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 538,
        "_hd": 753,
        "all": 791
      },
      "real": {
        "BTC": {
          "id": 4786
        },
        "ETH": {
          "id": 4787
        },
        "LTC": {
          "id": 4789
        }
      },
      "demo": "/games/pragmaticexternal/JourneytotheWest/4788"
    },
    "pragmaticexternal/FruitParty1": {
      "title": "Fruit Party",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 36,
        "slots": 389,
        "_hd": 616,
        "all": 642,
        "bonusbuy": 70
      },
      "real": {
        "BTC": {
          "id": 4790
        },
        "ETH": {
          "id": 4791
        },
        "LTC": {
          "id": 4793
        }
      },
      "demo": "/games/pragmaticexternal/FruitParty1/4792"
    },
    "pragmaticexternal/GoldenBeauty": {
      "title": "Golden Beauty",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 306,
        "slots": 425,
        "accumulating": 6,
        "_hd": 650,
        "all": 677
      },
      "real": {
        "BTC": {
          "id": 4794
        },
        "ETH": {
          "id": 4795
        },
        "LTC": {
          "id": 4797
        }
      },
      "demo": "/games/pragmaticexternal/GoldenBeauty/4796"
    },
    "pragmaticexternal/MoneyMouse": {
      "title": "Money Mouse",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 359,
        "slots": 686,
        "_hd": 881,
        "all": 930
      },
      "real": {
        "BTC": {
          "id": 4798
        },
        "ETH": {
          "id": 4799
        },
        "LTC": {
          "id": 4801
        }
      },
      "demo": "/games/pragmaticexternal/MoneyMouse/4800"
    },
    "pragmaticexternal/HotFiesta1": {
      "title": "Hot Fiesta",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 66,
        "popularity": 4,
        "slots": 483,
        "_hd": 701,
        "all": 735,
        "bonusbuy": 74
      },
      "real": {
        "BTC": {
          "id": 4802
        },
        "ETH": {
          "id": 4803
        },
        "LTC": {
          "id": 4805
        }
      },
      "demo": "/games/pragmaticexternal/HotFiesta1/4804"
    },
    "pragmaticexternal/TheDogHouseMegaways1": {
      "title": "The Dog House Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 17,
        "slots": 964,
        "_hd": 1195,
        "all": 1248,
        "bonusbuy": 86
      },
      "real": {
        "BTC": {
          "id": 4806
        },
        "ETH": {
          "id": 4807
        },
        "LTC": {
          "id": 4809
        }
      },
      "demo": "/games/pragmaticexternal/TheDogHouseMegaways1/4808"
    },
    "pragmaticexternal/WildGladiators": {
      "title": "Wild Gladiators",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 324,
        "slots": 1065,
        "_hd": 1290,
        "all": 1348
      },
      "real": {
        "BTC": {
          "id": 4810
        },
        "ETH": {
          "id": 4811
        },
        "LTC": {
          "id": 4813
        }
      },
      "demo": "/games/pragmaticexternal/WildGladiators/4812"
    },
    "pragmaticexternal/FairytaleFortune": {
      "title": "Fairytale Fortune",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 328,
        "slots": 348,
        "_hd": 566,
        "all": 589
      },
      "real": {
        "BTC": {
          "id": 4814
        },
        "ETH": {
          "id": 4815
        },
        "LTC": {
          "id": 4817
        }
      },
      "demo": "/games/pragmaticexternal/FairytaleFortune/4816"
    },
    "pragmaticexternal/FruitParty2": {
      "title": "Fruit Party 2",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 24,
        "popularity": 176,
        "slots": 390,
        "_hd": 617,
        "all": 643,
        "bonusbuy": 71
      },
      "real": {
        "BTC": {
          "id": 4818
        },
        "ETH": {
          "id": 4819
        },
        "LTC": {
          "id": 4821
        }
      },
      "demo": "/games/pragmaticexternal/FruitParty2/4820"
    },
    "pragmaticexternal/PandaFortune21": {
      "title": "Panda Fortune 2",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 51,
        "popularity": 292,
        "slots": 737,
        "_hd": 934,
        "all": 983
      },
      "real": {
        "BTC": {
          "id": 4822
        },
        "ETH": {
          "id": 4823
        },
        "LTC": {
          "id": 4825
        }
      },
      "demo": "/games/pragmaticexternal/PandaFortune21/4824"
    },
    "pragmaticexternal/JokerKing1": {
      "title": "Joker King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 94,
        "popularity": 347,
        "slots": 532,
        "_hd": 747,
        "all": 785
      },
      "real": {
        "BTC": {
          "id": 4826
        },
        "ETH": {
          "id": 4827
        },
        "LTC": {
          "id": 4829
        }
      },
      "demo": "/games/pragmaticexternal/JokerKing1/4828"
    },
    "pragmaticexternal/PirateGoldDeluxe1": {
      "title": "Pirate Gold Deluxe",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 217,
        "slots": 772,
        "_hd": 965,
        "all": 1015,
        "bonusbuy": 78
      },
      "real": {
        "BTC": {
          "id": 4830
        },
        "ETH": {
          "id": 4831
        },
        "LTC": {
          "id": 4833
        }
      },
      "demo": "/games/pragmaticexternal/PirateGoldDeluxe1/4832"
    },
    "pragmaticexternal/PandaFortune": {
      "title": "Panda's Fortune",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 327,
        "slots": 739,
        "_hd": 936,
        "all": 985
      },
      "real": {
        "BTC": {
          "id": 4834
        },
        "ETH": {
          "id": 4835
        },
        "LTC": {
          "id": 4837
        }
      },
      "demo": "/games/pragmaticexternal/PandaFortune/4836"
    },
    "pragmaticexternal/QueenOfGold": {
      "title": "Queen of Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 801,
        "accumulating": 18,
        "_hd": 994,
        "all": 1044
      },
      "real": {
        "BTC": {
          "id": 4838
        },
        "ETH": {
          "id": 4839
        },
        "LTC": {
          "id": 4841
        }
      },
      "demo": "/games/pragmaticexternal/QueenOfGold/4840"
    },
    "pragmaticexternal/7Piggies": {
      "title": "7 Piggies",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 38,
        "_hd": 131,
        "all": 131
      },
      "real": {
        "BTC": {
          "id": 4842
        },
        "ETH": {
          "id": 4843
        },
        "LTC": {
          "id": 4845
        }
      },
      "demo": "/games/pragmaticexternal/7Piggies/4844"
    },
    "pragmaticexternal/GreatRhino": {
      "title": "Great Rhino",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 444,
        "_hd": 667,
        "all": 697
      },
      "real": {
        "BTC": {
          "id": 4846
        },
        "ETH": {
          "id": 4847
        },
        "LTC": {
          "id": 4849
        }
      },
      "demo": "/games/pragmaticexternal/GreatRhino/4848"
    },
    "pragmaticexternal/888Dragons": {
      "title": "888 Dragons",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 396,
        "slots": 47,
        "_hd": 139,
        "all": 139
      },
      "real": {
        "BTC": {
          "id": 4850
        },
        "ETH": {
          "id": 4851
        },
        "LTC": {
          "id": 4853
        }
      },
      "demo": "/games/pragmaticexternal/888Dragons/4852"
    },
    "pragmaticexternal/TripleDragons": {
      "title": "Triple Dragons",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1014,
        "_hd": 1243,
        "all": 1296
      },
      "real": {
        "BTC": {
          "id": 4854
        },
        "ETH": {
          "id": 4855
        },
        "LTC": {
          "id": 4857
        }
      },
      "demo": "/games/pragmaticexternal/TripleDragons/4856"
    },
    "pragmaticexternal/FireStrike": {
      "title": "Fire Strike",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 360,
        "_hd": 578,
        "all": 602
      },
      "real": {
        "BTC": {
          "id": 4858
        },
        "ETH": {
          "id": 4859
        },
        "LTC": {
          "id": 4861
        }
      },
      "demo": "/games/pragmaticexternal/FireStrike/4860"
    },
    "pragmaticexternal/JohnHunterandtheAztecTreasure": {
      "title": "John Hunter and the Aztec Treasure",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 213,
        "slots": 526,
        "_hd": 741,
        "all": 779
      },
      "real": {
        "BTC": {
          "id": 4862
        },
        "ETH": {
          "id": 4863
        },
        "LTC": {
          "id": 4865
        }
      },
      "demo": "/games/pragmaticexternal/JohnHunterandtheAztecTreasure/4864"
    },
    "pragmaticexternal/Beowulf": {
      "title": "Beowulf",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 113,
        "_hd": 199,
        "all": 207
      },
      "real": {
        "BTC": {
          "id": 4866
        },
        "ETH": {
          "id": 4867
        },
        "LTC": {
          "id": 4869
        }
      },
      "demo": "/games/pragmaticexternal/Beowulf/4868"
    },
    "pragmaticexternal/PyramidKing1": {
      "title": "Pyramid King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 377,
        "slots": 798,
        "_hd": 992,
        "all": 1042
      },
      "real": {
        "BTC": {
          "id": 4870
        },
        "ETH": {
          "id": 4871
        },
        "LTC": {
          "id": 4873
        }
      },
      "demo": "/games/pragmaticexternal/PyramidKing1/4872"
    },
    "pragmaticexternal/ChickenDrop": {
      "title": "Chicken Drop",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 96,
        "slots": 209,
        "_hd": 394,
        "all": 410,
        "bonusbuy": 64
      },
      "real": {
        "BTC": {
          "id": 4874
        },
        "ETH": {
          "id": 4875
        },
        "LTC": {
          "id": 4877
        }
      },
      "demo": "/games/pragmaticexternal/ChickenDrop/4876"
    },
    "pragmaticexternal/CaishensGold": {
      "title": "Caishen's Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 180,
        "jackpot": 11,
        "_hd": 366,
        "all": 380
      },
      "real": {
        "BTC": {
          "id": 4878
        },
        "ETH": {
          "id": 4879
        },
        "LTC": {
          "id": 4881
        }
      },
      "demo": "/games/pragmaticexternal/CaishensGold/4880"
    },
    "pragmaticexternal/JohnHunterAndtheMayanGods": {
      "title": "John Hunter and the Mayan Gods",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 193,
        "slots": 528,
        "_hd": 743,
        "all": 781
      },
      "real": {
        "BTC": {
          "id": 4882
        },
        "ETH": {
          "id": 4883
        },
        "LTC": {
          "id": 4885
        }
      },
      "demo": "/games/pragmaticexternal/JohnHunterAndtheMayanGods/4884"
    },
    "pragmaticexternal/DragonKingdomEyesOfFire1": {
      "title": "Dragon Kingdom - Eyes of Fire",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 99,
        "popularity": 389,
        "slots": 306,
        "_hd": 531,
        "all": 551
      },
      "real": {
        "BTC": {
          "id": 4886
        },
        "ETH": {
          "id": 4887
        },
        "LTC": {
          "id": 4889
        }
      },
      "demo": "/games/pragmaticexternal/DragonKingdomEyesOfFire1/4888"
    },
    "pragmaticexternal/ChilliHeatMegaways": {
      "title": "Chilli Heat Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 17,
        "popularity": 221,
        "slots": 215,
        "_hd": 399,
        "all": 415,
        "bonusbuy": 65
      },
      "real": {
        "BTC": {
          "id": 4890
        },
        "ETH": {
          "id": 4891
        },
        "LTC": {
          "id": 4893
        }
      },
      "demo": "/games/pragmaticexternal/ChilliHeatMegaways/4892"
    },
    "pragmaticexternal/VegasNights": {
      "title": "Vegas Nights",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 273,
        "slots": 1029,
        "_hd": 1258,
        "all": 1314
      },
      "real": {
        "BTC": {
          "id": 4894
        },
        "ETH": {
          "id": 4895
        },
        "LTC": {
          "id": 4897
        }
      },
      "demo": "/games/pragmaticexternal/VegasNights/4896"
    },
    "pragmaticexternal/WildBooster1": {
      "title": "Wild Booster",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 72,
        "popularity": 398,
        "slots": 1058,
        "_hd": 1285,
        "all": 1342,
        "bonusbuy": 88
      },
      "real": {
        "BTC": {
          "id": 4898
        },
        "ETH": {
          "id": 4899
        },
        "LTC": {
          "id": 4901
        }
      },
      "demo": "/games/pragmaticexternal/WildBooster1/4900"
    },
    "pragmaticexternal/JungleGorilla1": {
      "title": "Jungle Gorilla",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 220,
        "slots": 546,
        "accumulating": 8,
        "_hd": 760,
        "all": 798
      },
      "real": {
        "BTC": {
          "id": 4902
        },
        "ETH": {
          "id": 4903
        },
        "LTC": {
          "id": 4905
        }
      },
      "demo": "/games/pragmaticexternal/JungleGorilla1/4904"
    },
    "pragmaticexternal/DiamondStrike": {
      "title": "Diamond Strike",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 285,
        "_hd": 512,
        "all": 531
      },
      "real": {
        "BTC": {
          "id": 4906
        },
        "ETH": {
          "id": 4907
        },
        "LTC": {
          "id": 4909
        }
      },
      "demo": "/games/pragmaticexternal/DiamondStrike/4908"
    },
    "pragmaticexternal/TheWildMachine": {
      "title": "The Wild Machine",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 204,
        "slots": 991,
        "_hd": 1222,
        "all": 1275
      },
      "real": {
        "BTC": {
          "id": 4910
        },
        "ETH": {
          "id": 4911
        },
        "LTC": {
          "id": 4913
        }
      },
      "demo": "/games/pragmaticexternal/TheWildMachine/4912"
    },
    "pragmaticexternal/LeprechaunCarol": {
      "title": "Leprechaun Carol",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 305,
        "slots": 581,
        "_hd": 787,
        "all": 828
      },
      "real": {
        "BTC": {
          "id": 4914
        },
        "ETH": {
          "id": 4915
        },
        "LTC": {
          "id": 4917
        }
      },
      "demo": "/games/pragmaticexternal/LeprechaunCarol/4916"
    },
    "pragmaticexternal/SweetBonanzaXmas": {
      "title": "Sweet Bonanza Xmas",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 55,
        "slots": 941,
        "_hd": 1173,
        "all": 1226,
        "bonusbuy": 84
      },
      "real": {
        "BTC": {
          "id": 4918
        },
        "ETH": {
          "id": 4919
        },
        "LTC": {
          "id": 4921
        }
      },
      "demo": "/games/pragmaticexternal/SweetBonanzaXmas/4920"
    },
    "pragmaticexternal/PantherQueen": {
      "title": "Panther Queen",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 741,
        "_hd": 938,
        "all": 987
      },
      "real": {
        "BTC": {
          "id": 4922
        },
        "ETH": {
          "id": 4923
        },
        "LTC": {
          "id": 4925
        }
      },
      "demo": "/games/pragmaticexternal/PantherQueen/4924"
    },
    "pragmaticexternal/BroncoSpirit": {
      "title": "Bronco Spirit",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 378,
        "slots": 167,
        "accumulating": 2,
        "_hd": 355,
        "all": 369
      },
      "real": {
        "BTC": {
          "id": 4926
        },
        "ETH": {
          "id": 4927
        },
        "LTC": {
          "id": 4929
        }
      },
      "demo": "/games/pragmaticexternal/BroncoSpirit/4928"
    },
    "pragmaticexternal/PixieWings": {
      "title": "Pixie Wings",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 288,
        "slots": 774,
        "_hd": 967,
        "all": 1017
      },
      "real": {
        "BTC": {
          "id": 4930
        },
        "ETH": {
          "id": 4931
        },
        "LTC": {
          "id": 4933
        }
      },
      "demo": "/games/pragmaticexternal/PixieWings/4932"
    },
    "pragmaticexternal/EgyptianFortunes": {
      "title": "Egyptian Fortunes",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 327,
        "_hd": 549,
        "all": 571
      },
      "real": {
        "BTC": {
          "id": 4934
        },
        "ETH": {
          "id": 4935
        },
        "LTC": {
          "id": 4937
        }
      },
      "demo": "/games/pragmaticexternal/EgyptianFortunes/4936"
    },
    "pragmaticexternal/UltraHoldandSpin": {
      "title": "Ultra Hold and Spin",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1021,
        "_hd": 1251,
        "all": 1305
      },
      "real": {
        "BTC": {
          "id": 4938
        },
        "ETH": {
          "id": 4939
        },
        "LTC": {
          "id": 4941
        }
      },
      "demo": "/games/pragmaticexternal/UltraHoldandSpin/4940"
    },
    "pragmaticexternal/GoldTrain": {
      "title": "Gold Train",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 422,
        "_hd": 647,
        "all": 674
      },
      "real": {
        "BTC": {
          "id": 4942
        },
        "ETH": {
          "id": 4943
        },
        "LTC": {
          "id": 4945
        }
      },
      "demo": "/games/pragmaticexternal/GoldTrain/4944"
    },
    "pragmaticexternal/TemujinTreasures": {
      "title": "Temujin Treasures",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 83,
        "popularity": 140,
        "slots": 952,
        "_hd": 1184,
        "all": 1237,
        "bonusbuy": 85
      },
      "real": {
        "BTC": {
          "id": 4946
        },
        "ETH": {
          "id": 4947
        },
        "LTC": {
          "id": 4949
        }
      },
      "demo": "/games/pragmaticexternal/TemujinTreasures/4948"
    },
    "pragmaticexternal/BuffaloKing": {
      "title": "Buffalo King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 348,
        "slots": 170,
        "_hd": 357,
        "all": 371
      },
      "real": {
        "BTC": {
          "id": 4950
        },
        "ETH": {
          "id": 4951
        },
        "LTC": {
          "id": 4953
        }
      },
      "demo": "/games/pragmaticexternal/BuffaloKing/4952"
    },
    "pragmaticexternal/HerculesSonZeus": {
      "title": "Hercules Son of Zeus",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 391,
        "slots": 466,
        "_hd": 687,
        "all": 717
      },
      "real": {
        "BTC": {
          "id": 4954
        },
        "ETH": {
          "id": 4955
        },
        "LTC": {
          "id": 4957
        }
      },
      "demo": "/games/pragmaticexternal/HerculesSonZeus/4956"
    },
    "pragmaticexternal/BookofKingdoms1": {
      "title": "Book of Kingdoms",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 124,
        "slots": 146,
        "_hd": 335,
        "all": 349
      },
      "real": {
        "BTC": {
          "id": 4958
        },
        "ETH": {
          "id": 4959
        },
        "LTC": {
          "id": 4961
        }
      },
      "demo": "/games/pragmaticexternal/BookofKingdoms1/4960"
    },
    "pragmaticexternal/BookofVikings": {
      "title": "Book of Vikings",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 28,
        "popularity": 287,
        "slots": 154,
        "_hd": 342,
        "all": 356,
        "bonusbuy": 62
      },
      "real": {
        "BTC": {
          "id": 4962
        },
        "ETH": {
          "id": 4963
        },
        "LTC": {
          "id": 4965
        }
      },
      "demo": "/games/pragmaticexternal/BookofVikings/4964"
    },
    "pragmaticexternal/MadameDestiny": {
      "title": "Madame Destiny",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 238,
        "slots": 634,
        "_hd": 839,
        "all": 884
      },
      "real": {
        "BTC": {
          "id": 4966
        },
        "ETH": {
          "id": 4967
        },
        "LTC": {
          "id": 4969
        }
      },
      "demo": "/games/pragmaticexternal/MadameDestiny/4968"
    },
    "pragmaticexternal/PowerofThorMegaways": {
      "title": "Power of Thor Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 75,
        "popularity": 65,
        "slots": 788,
        "_hd": 981,
        "all": 1031,
        "bonusbuy": 79
      },
      "real": {
        "BTC": {
          "id": 4970
        },
        "ETH": {
          "id": 4971
        },
        "LTC": {
          "id": 4973
        }
      },
      "demo": "/games/pragmaticexternal/PowerofThorMegaways/4972"
    },
    "pragmaticexternal/LuckyGraceandCharm": {
      "title": "Lucky Grace and Charm",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 31,
        "popularity": 151,
        "slots": 615,
        "_hd": 821,
        "all": 865
      },
      "real": {
        "BTC": {
          "id": 4974
        },
        "ETH": {
          "id": 4975
        },
        "LTC": {
          "id": 4977
        }
      },
      "demo": "/games/pragmaticexternal/LuckyGraceandCharm/4976"
    },
    "pragmaticexternal/JokersJewels": {
      "title": "Joker's Jewels",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 535,
        "_hd": 750,
        "all": 788
      },
      "real": {
        "BTC": {
          "id": 4978
        },
        "ETH": {
          "id": 4979
        },
        "LTC": {
          "id": 4981
        }
      },
      "demo": "/games/pragmaticexternal/JokersJewels/4980"
    },
    "pragmaticexternal/SpartanKing": {
      "title": "Spartan King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 340,
        "slots": 894,
        "_hd": 1097,
        "all": 1150
      },
      "real": {
        "BTC": {
          "id": 4982
        },
        "ETH": {
          "id": 4983
        },
        "LTC": {
          "id": 4985
        }
      },
      "demo": "/games/pragmaticexternal/SpartanKing/4984"
    },
    "pragmaticexternal/MagicCrystals": {
      "title": "Magic Crystals",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 637,
        "_hd": 842,
        "all": 887
      },
      "real": {
        "BTC": {
          "id": 4986
        },
        "ETH": {
          "id": 4987
        },
        "LTC": {
          "id": 4989
        }
      },
      "demo": "/games/pragmaticexternal/MagicCrystals/4988"
    },
    "pragmaticexternal/EightDragons": {
      "title": "8 Dragons",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 39,
        "_hd": 132,
        "all": 132
      },
      "real": {
        "BTC": {
          "id": 4990
        },
        "ETH": {
          "id": 4991
        },
        "LTC": {
          "id": 4993
        }
      },
      "demo": "/games/pragmaticexternal/EightDragons/4992"
    },
    "pragmaticexternal/PeakyBlinders": {
      "title": "Peaky Blinders",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 748,
        "_hd": 944,
        "all": 994
      },
      "real": {
        "BTC": {
          "id": 4994
        },
        "ETH": {
          "id": 4995
        },
        "LTC": {
          "id": 4997
        }
      },
      "demo": "/games/pragmaticexternal/PeakyBlinders/4996"
    },
    "pragmaticexternal/EyeOfTheStorm1": {
      "title": "Eye of the Storm",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 98,
        "popularity": 174,
        "slots": 344,
        "_hd": 562,
        "all": 585
      },
      "real": {
        "BTC": {
          "id": 4998
        },
        "ETH": {
          "id": 4999
        },
        "LTC": {
          "id": 5001
        }
      },
      "demo": "/games/pragmaticexternal/EyeOfTheStorm1/5000"
    },
    "pragmaticexternal/CurseoftheWerewolfMegaways": {
      "title": "Curse of the Werewolf Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 84,
        "slots": 258,
        "_hd": 488,
        "all": 505,
        "bonusbuy": 67
      },
      "real": {
        "BTC": {
          "id": 5002
        },
        "ETH": {
          "id": 5003
        },
        "LTC": {
          "id": 5005
        }
      },
      "demo": "/games/pragmaticexternal/CurseoftheWerewolfMegaways/5004"
    },
    "pragmaticexternal/ThreeStarFortune": {
      "title": "Three Star Fortune",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 997,
        "_hd": 1228,
        "all": 1281
      },
      "real": {
        "BTC": {
          "id": 5006
        },
        "ETH": {
          "id": 5007
        },
        "LTC": {
          "id": 5009
        }
      },
      "demo": "/games/pragmaticexternal/ThreeStarFortune/5008"
    },
    "pragmaticexternal/WolfGold": {
      "title": "Wolf Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 394,
        "slots": 1090,
        "_hd": 1311,
        "all": 1372
      },
      "real": {
        "BTC": {
          "id": 5010
        },
        "ETH": {
          "id": 5011
        },
        "LTC": {
          "id": 5013
        }
      },
      "demo": "/games/pragmaticexternal/WolfGold/5012"
    },
    "pragmaticexternal/ChristmasCarolMegaways1": {
      "title": "Christmas Carol Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 122,
        "slots": 220,
        "_hd": 403,
        "all": 419,
        "bonusbuy": 66
      },
      "real": {
        "BTC": {
          "id": 5014
        },
        "ETH": {
          "id": 5015
        },
        "LTC": {
          "id": 5017
        }
      },
      "demo": "/games/pragmaticexternal/ChristmasCarolMegaways1/5016"
    },
    "pragmaticexternal/TripleTigers": {
      "title": "Triple Tigers",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1017,
        "_hd": 1246,
        "all": 1299
      },
      "real": {
        "BTC": {
          "id": 5018
        },
        "ETH": {
          "id": 5019
        },
        "LTC": {
          "id": 5021
        }
      },
      "demo": "/games/pragmaticexternal/TripleTigers/5020"
    },
    "pragmaticexternal/VampiresvsWolves": {
      "title": "Vampires vs Wolves",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 296,
        "slots": 1027,
        "_hd": 1256,
        "all": 1312
      },
      "real": {
        "BTC": {
          "id": 5022
        },
        "ETH": {
          "id": 5023
        },
        "LTC": {
          "id": 5025
        }
      },
      "demo": "/games/pragmaticexternal/VampiresvsWolves/5024"
    },
    "pragmaticexternal/MadameDestinyMegaways1": {
      "title": "Madame Destiny Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 102,
        "popularity": 86,
        "slots": 635,
        "_hd": 840,
        "all": 885,
        "bonusbuy": 55
      },
      "real": {
        "BTC": {
          "id": 5026
        },
        "ETH": {
          "id": 5027
        },
        "LTC": {
          "id": 5029
        }
      },
      "demo": "/games/pragmaticexternal/MadameDestinyMegaways1/5028"
    },
    "pragmaticexternal/Santa": {
      "title": "Santa",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 363,
        "slots": 843,
        "_hd": 1048,
        "all": 1100
      },
      "real": {
        "BTC": {
          "id": 5030
        },
        "ETH": {
          "id": 5031
        },
        "LTC": {
          "id": 5033
        }
      },
      "demo": "/games/pragmaticexternal/Santa/5032"
    },
    "pragmaticexternal/BuffaloKingMegaways1": {
      "title": "Buffalo King Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 62,
        "popularity": 98,
        "slots": 171,
        "_hd": 358,
        "all": 372,
        "bonusbuy": 63
      },
      "real": {
        "BTC": {
          "id": 5034
        },
        "ETH": {
          "id": 5035
        },
        "LTC": {
          "id": 5037
        }
      },
      "demo": "/games/pragmaticexternal/BuffaloKingMegaways1/5036"
    },
    "pragmaticexternal/MagicJourney": {
      "title": "Magic Journey",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 641,
        "_hd": 843,
        "all": 890
      },
      "real": {
        "BTC": {
          "id": 5038
        },
        "ETH": {
          "id": 5039
        },
        "LTC": {
          "id": 5041
        }
      },
      "demo": "/games/pragmaticexternal/MagicJourney/5040"
    },
    "pragmaticexternal/HotSafari": {
      "title": "Hot Safari",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 494,
        "_hd": 710,
        "all": 745
      },
      "real": {
        "BTC": {
          "id": 5042
        },
        "ETH": {
          "id": 5043
        },
        "LTC": {
          "id": 5045
        }
      },
      "demo": "/games/pragmaticexternal/HotSafari/5044"
    },
    "pragmaticexternal/DanceParty": {
      "title": "Dance Party",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 226,
        "slots": 263,
        "_hd": 492,
        "all": 509
      },
      "real": {
        "BTC": {
          "id": 5046
        },
        "ETH": {
          "id": 5047
        },
        "LTC": {
          "id": 5049
        }
      },
      "demo": "/games/pragmaticexternal/DanceParty/5048"
    },
    "pragmaticexternal/SevenMonkeys": {
      "title": "7 Monkeys",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 37,
        "_hd": 130,
        "all": 130
      },
      "real": {
        "BTC": {
          "id": 5050
        },
        "ETH": {
          "id": 5051
        },
        "LTC": {
          "id": 5053
        }
      },
      "demo": "/games/pragmaticexternal/SevenMonkeys/5052"
    },
    "pragmaticexternal/HottoBurnHoldandSpin1": {
      "title": "Hot to Burn Hold and Spin",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 500,
        "_hd": 713,
        "all": 751
      },
      "real": {
        "BTC": {
          "id": 5054
        },
        "ETH": {
          "id": 5055
        },
        "LTC": {
          "id": 5057
        }
      },
      "demo": "/games/pragmaticexternal/HottoBurnHoldandSpin1/5056"
    },
    "pragmaticexternal/TreasureHorse": {
      "title": "Treasure Horse",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1010,
        "_hd": 1239,
        "all": 1292
      },
      "real": {
        "BTC": {
          "id": 5058
        },
        "ETH": {
          "id": 5059
        },
        "LTC": {
          "id": 5061
        }
      },
      "demo": "/games/pragmaticexternal/TreasureHorse/5060"
    },
    "pragmaticexternal/StreetRace": {
      "title": "Street Racer",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 918,
        "_hd": 1150,
        "all": 1203
      },
      "real": {
        "BTC": {
          "id": 5062
        },
        "ETH": {
          "id": 5063
        },
        "LTC": {
          "id": 5065
        }
      },
      "demo": "/games/pragmaticexternal/StreetRace/5064"
    },
    "pragmaticexternal/SugarRush": {
      "title": "Sugar Rush",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 919,
        "_hd": 1151,
        "all": 1204
      },
      "real": {
        "BTC": {
          "id": 5066
        },
        "ETH": {
          "id": 5067
        },
        "LTC": {
          "id": 5069
        }
      },
      "demo": "/games/pragmaticexternal/SugarRush/5068"
    },
    "pragmaticexternal/CongoCash1": {
      "title": "Congo Cash",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 106,
        "popularity": 353,
        "slots": 238,
        "_hd": 468,
        "all": 484
      },
      "real": {
        "BTC": {
          "id": 5070
        },
        "ETH": {
          "id": 5071
        },
        "LTC": {
          "id": 5073
        }
      },
      "demo": "/games/pragmaticexternal/CongoCash1/5072"
    },
    "pragmaticexternal/JohnHunterandtheBookofTut": {
      "title": "John Hunter and the Book of Tut",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 119,
        "slots": 527,
        "_hd": 742,
        "all": 780,
        "bonusbuy": 75
      },
      "real": {
        "BTC": {
          "id": 5074
        },
        "ETH": {
          "id": 5075
        },
        "LTC": {
          "id": 5077
        }
      },
      "demo": "/games/pragmaticexternal/JohnHunterandtheBookofTut/5076"
    },
    "pragmaticexternal/MonkeyWarrior": {
      "title": "Monkey Warrior",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 691,
        "jackpot": 40,
        "_hd": 885,
        "all": 934
      },
      "real": {
        "BTC": {
          "id": 5078
        },
        "ETH": {
          "id": 5079
        },
        "LTC": {
          "id": 5081
        }
      },
      "demo": "/games/pragmaticexternal/MonkeyWarrior/5080"
    },
    "pragmaticexternal/WildSpells": {
      "title": "Wild Spells",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1074,
        "_hd": 1297,
        "all": 1357
      },
      "real": {
        "BTC": {
          "id": 5082
        },
        "ETH": {
          "id": 5083
        },
        "LTC": {
          "id": 5085
        }
      },
      "demo": "/games/pragmaticexternal/WildSpells/5084"
    },
    "pragmaticexternal/LuckyLightning1": {
      "title": "Lucky Lightning",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 622,
        "_hd": 828,
        "all": 872
      },
      "real": {
        "BTC": {
          "id": 5086
        },
        "ETH": {
          "id": 5087
        },
        "LTC": {
          "id": 5089
        }
      },
      "demo": "/games/pragmaticexternal/LuckyLightning1/5088"
    },
    "pragmaticexternal/TheMagicCauldronEnchantedBrew1": {
      "title": "The Magic Cauldron - Enchanted Brew",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 54,
        "popularity": 398,
        "slots": 981,
        "_hd": 1212,
        "all": 1265
      },
      "real": {
        "BTC": {
          "id": 5090
        },
        "ETH": {
          "id": 5091
        },
        "LTC": {
          "id": 5093
        }
      },
      "demo": "/games/pragmaticexternal/TheMagicCauldronEnchantedBrew1/5092"
    },
    "pragmaticexternal/LuckyNewYear": {
      "title": "Lucky New Year",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 627,
        "_hd": 833,
        "all": 877
      },
      "real": {
        "BTC": {
          "id": 5094
        },
        "ETH": {
          "id": 5095
        },
        "LTC": {
          "id": 5097
        }
      },
      "demo": "/games/pragmaticexternal/LuckyNewYear/5096"
    },
    "pragmaticexternal/AncientEgyptClassic": {
      "title": "Ancient Egypt Classic",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 69,
        "_hd": 156,
        "all": 160
      },
      "real": {
        "BTC": {
          "id": 5098
        },
        "ETH": {
          "id": 5099
        },
        "LTC": {
          "id": 5101
        }
      },
      "demo": "/games/pragmaticexternal/AncientEgyptClassic/5100"
    },
    "pragmaticexternal/ChilliHeat": {
      "title": "Chilli Heat",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 214,
        "_hd": 398,
        "all": 414
      },
      "real": {
        "BTC": {
          "id": 5102
        },
        "ETH": {
          "id": 5103
        },
        "LTC": {
          "id": 5105
        }
      },
      "demo": "/games/pragmaticexternal/ChilliHeat/5104"
    },
    "pragmaticexternal/CashElevator1": {
      "title": "Cash Elevator",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 366,
        "slots": 192,
        "_hd": 376,
        "all": 391
      },
      "real": {
        "BTC": {
          "id": 5106
        },
        "ETH": {
          "id": 5107
        },
        "LTC": {
          "id": 5109
        }
      },
      "demo": "/games/pragmaticexternal/CashElevator1/5108"
    },
    "pragmaticexternal/BigBassBonanza": {
      "title": "Big Bass Bonanza",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 62,
        "slots": 115,
        "_hd": 201,
        "all": 209
      },
      "real": {
        "BTC": {
          "id": 5110
        },
        "ETH": {
          "id": 5111
        },
        "LTC": {
          "id": 5113
        }
      },
      "demo": "/games/pragmaticexternal/BigBassBonanza/5112"
    },
    "pragmaticexternal/Fire88": {
      "title": "Fire 88",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 356,
        "_hd": 574,
        "all": 598
      },
      "real": {
        "BTC": {
          "id": 5114
        },
        "ETH": {
          "id": 5115
        },
        "LTC": {
          "id": 5117
        }
      },
      "demo": "/games/pragmaticexternal/Fire88/5116"
    },
    "pragmaticexternal/DragonHotHoldandSpin1": {
      "title": "Dragon Hot Hold and Spin",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 45,
        "popularity": 202,
        "slots": 303,
        "_hd": 529,
        "all": 549
      },
      "real": {
        "BTC": {
          "id": 5118
        },
        "ETH": {
          "id": 5119
        },
        "LTC": {
          "id": 5121
        }
      },
      "demo": "/games/pragmaticexternal/DragonHotHoldandSpin1/5120"
    },
    "pragmaticexternal/MasterJoker": {
      "title": "Master Joker",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 393,
        "slots": 656,
        "_hd": 854,
        "all": 902
      },
      "real": {
        "BTC": {
          "id": 5122
        },
        "ETH": {
          "id": 5123
        },
        "LTC": {
          "id": 5125
        }
      },
      "demo": "/games/pragmaticexternal/MasterJoker/5124"
    },
    "pragmaticexternal/EmptytheBank1": {
      "title": "Empty the Bank",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 38,
        "popularity": 105,
        "slots": 334,
        "_hd": 554,
        "all": 576,
        "bonusbuy": 53
      },
      "real": {
        "BTC": {
          "id": 5126
        },
        "ETH": {
          "id": 5127
        },
        "LTC": {
          "id": 5129
        }
      },
      "demo": "/games/pragmaticexternal/EmptytheBank1/5128"
    },
    "pragmaticexternal/MustangGold": {
      "title": "Mustang Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 289,
        "slots": 704,
        "_hd": 898,
        "all": 947
      },
      "real": {
        "BTC": {
          "id": 5130
        },
        "ETH": {
          "id": 5131
        },
        "LTC": {
          "id": 5133
        }
      },
      "demo": "/games/pragmaticexternal/MustangGold/5132"
    },
    "pragmaticexternal/SafariKing": {
      "title": "Safari King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 836,
        "_hd": 1029,
        "all": 1081
      },
      "real": {
        "BTC": {
          "id": 5134
        },
        "ETH": {
          "id": 5135
        },
        "LTC": {
          "id": 5137
        }
      },
      "demo": "/games/pragmaticexternal/SafariKing/5136"
    },
    "pragmaticexternal/5LionsDance": {
      "title": "5 Lions Dance",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 397,
        "slots": 28,
        "_hd": 121,
        "all": 121
      },
      "real": {
        "BTC": {
          "id": 5138
        },
        "ETH": {
          "id": 5139
        },
        "LTC": {
          "id": 5141
        }
      },
      "demo": "/games/pragmaticexternal/5LionsDance/5140"
    },
    "pragmaticexternal/SuperJoker": {
      "title": "Super Joker",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 933,
        "_hd": 1164,
        "all": 1217
      },
      "real": {
        "BTC": {
          "id": 5142
        },
        "ETH": {
          "id": 5143
        },
        "LTC": {
          "id": 5145
        }
      },
      "demo": "/games/pragmaticexternal/SuperJoker/5144"
    },
    "pragmaticexternal/LuckyDragons": {
      "title": "Lucky Dragons",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 610,
        "_hd": 816,
        "all": 860
      },
      "real": {
        "BTC": {
          "id": 5146
        },
        "ETH": {
          "id": 5147
        },
        "LTC": {
          "id": 5149
        }
      },
      "demo": "/games/pragmaticexternal/LuckyDragons/5148"
    },
    "pragmaticexternal/HotChilli": {
      "title": "Hot Chilli",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 479,
        "_hd": 699,
        "all": 731
      },
      "real": {
        "BTC": {
          "id": 5150
        },
        "ETH": {
          "id": 5151
        },
        "LTC": {
          "id": 5153
        }
      },
      "demo": "/games/pragmaticexternal/HotChilli/5152"
    },
    "pragmaticexternal/DwarvenGoldDeluxe": {
      "title": "Dwarven Gold Deluxe",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 321,
        "_hd": 544,
        "all": 566
      },
      "real": {
        "BTC": {
          "id": 5154
        },
        "ETH": {
          "id": 5155
        },
        "LTC": {
          "id": 5157
        }
      },
      "demo": "/games/pragmaticexternal/DwarvenGoldDeluxe/5156"
    },
    "pragmaticexternal/GoldRush": {
      "title": "Gold Rush",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 333,
        "slots": 421,
        "_hd": 646,
        "all": 673
      },
      "real": {
        "BTC": {
          "id": 5158
        },
        "ETH": {
          "id": 5159
        },
        "LTC": {
          "id": 5161
        }
      },
      "demo": "/games/pragmaticexternal/GoldRush/5160"
    },
    "pragmaticexternal/GatesOfOlympus1": {
      "title": "Gates of Olympus",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 92,
        "popularity": 31,
        "slots": 406,
        "_hd": 633,
        "all": 659,
        "bonusbuy": 72
      },
      "real": {
        "BTC": {
          "id": 5162
        },
        "ETH": {
          "id": 5163
        },
        "LTC": {
          "id": 5165
        }
      },
      "demo": "/games/pragmaticexternal/GatesOfOlympus1/5164"
    },
    "pragmaticexternal/TheChampions": {
      "title": "The Champions",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 958,
        "accumulating": 22,
        "_hd": 1189,
        "all": 1242
      },
      "real": {
        "BTC": {
          "id": 5166
        },
        "ETH": {
          "id": 5167
        },
        "LTC": {
          "id": 5169
        }
      },
      "demo": "/games/pragmaticexternal/TheChampions/5168"
    },
    "pragmaticexternal/JuicyFruits": {
      "title": "Juicy Fruits",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 79,
        "popularity": 63,
        "slots": 540,
        "_hd": 755,
        "all": 793,
        "bonusbuy": 76
      },
      "real": {
        "BTC": {
          "id": 5170
        },
        "ETH": {
          "id": 5171
        },
        "LTC": {
          "id": 5173
        }
      },
      "demo": "/games/pragmaticexternal/JuicyFruits/5172"
    },
    "pragmaticexternal/WildWestGold": {
      "title": "Wild West Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 33,
        "slots": 1081,
        "_hd": 1303,
        "all": 1364,
        "bonusbuy": 89
      },
      "real": {
        "BTC": {
          "id": 5174
        },
        "ETH": {
          "id": 5175
        },
        "LTC": {
          "id": 5177
        }
      },
      "demo": "/games/pragmaticexternal/WildWestGold/5176"
    },
    "pragmaticexternal/PirateGold": {
      "title": "Pirate Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 771,
        "_hd": 964,
        "all": 1014
      },
      "real": {
        "BTC": {
          "id": 5178
        },
        "ETH": {
          "id": 5179
        },
        "LTC": {
          "id": 5181
        }
      },
      "demo": "/games/pragmaticexternal/PirateGold/5180"
    },
    "pragmaticexternal/Hottoburn1": {
      "title": "Hot to burn",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 501,
        "_hd": 714,
        "all": 752
      },
      "real": {
        "BTC": {
          "id": 5182
        },
        "ETH": {
          "id": 5183
        },
        "LTC": {
          "id": 5185
        }
      },
      "demo": "/games/pragmaticexternal/Hottoburn1/5184"
    },
    "pragmaticexternal/MonkeyMadness": {
      "title": "Monkey Madness",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 689,
        "_hd": 884,
        "all": 933
      },
      "real": {
        "BTC": {
          "id": 5186
        },
        "ETH": {
          "id": 5187
        },
        "LTC": {
          "id": 5189
        }
      },
      "demo": "/games/pragmaticexternal/MonkeyMadness/5188"
    },
    "pragmaticexternal/TheDogHouse": {
      "title": "The Dog House",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 47,
        "slots": 963,
        "_hd": 1194,
        "all": 1247
      },
      "real": {
        "BTC": {
          "id": 5190
        },
        "ETH": {
          "id": 5191
        },
        "LTC": {
          "id": 5193
        }
      },
      "demo": "/games/pragmaticexternal/TheDogHouse/5192"
    },
    "pragmaticexternal/EmeraldKingRainbowRoad": {
      "title": "Emerald King Rainbow Road",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 108,
        "popularity": 316,
        "slots": 332,
        "_hd": 553,
        "all": 575
      },
      "real": {
        "BTC": {
          "id": 5194
        },
        "ETH": {
          "id": 5195
        },
        "LTC": {
          "id": 5197
        }
      },
      "demo": "/games/pragmaticexternal/EmeraldKingRainbowRoad/5196"
    },
    "pragmaticexternal/AztecBonanza": {
      "title": "Aztec Bonanza",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 86,
        "_hd": 172,
        "all": 177
      },
      "real": {
        "BTC": {
          "id": 5198
        },
        "ETH": {
          "id": 5199
        },
        "LTC": {
          "id": 5201
        }
      },
      "demo": "/games/pragmaticexternal/AztecBonanza/5200"
    },
    "pragmaticexternal/HeartofRio1": {
      "title": "Heart Of Rio",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 47,
        "popularity": 312,
        "slots": 464,
        "_hd": 685,
        "all": 715
      },
      "real": {
        "BTC": {
          "id": 5202
        },
        "ETH": {
          "id": 5203
        },
        "LTC": {
          "id": 5205
        }
      },
      "demo": "/games/pragmaticexternal/HeartofRio1/5204"
    },
    "pragmaticexternal/AztecGemsDeluxe1": {
      "title": "Aztec Gems Deluxe",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 90,
        "_hd": 176,
        "all": 181
      },
      "real": {
        "BTC": {
          "id": 5206
        },
        "ETH": {
          "id": 5207
        },
        "LTC": {
          "id": 5209
        }
      },
      "demo": "/games/pragmaticexternal/AztecGemsDeluxe1/5208"
    },
    "pragmaticexternal/CaishensCash": {
      "title": "Caishen's Cash",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 178,
        "jackpot": 10,
        "_hd": 364,
        "all": 378
      },
      "real": {
        "BTC": {
          "id": 5210
        },
        "ETH": {
          "id": 5211
        },
        "LTC": {
          "id": 5213
        }
      },
      "demo": "/games/pragmaticexternal/CaishensCash/5212"
    },
    "pragmaticexternal/Super7s": {
      "title": "Super 7s",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 380,
        "slots": 927,
        "_hd": 1159,
        "all": 1212
      },
      "real": {
        "BTC": {
          "id": 5214
        },
        "ETH": {
          "id": 5215
        },
        "LTC": {
          "id": 5217
        }
      },
      "demo": "/games/pragmaticexternal/Super7s/5216"
    },
    "pragmaticexternal/PekingLuck": {
      "title": "Peking Luck",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 240,
        "slots": 749,
        "_hd": 945,
        "all": 995
      },
      "real": {
        "BTC": {
          "id": 5218
        },
        "ETH": {
          "id": 5219
        },
        "LTC": {
          "id": 5221
        }
      },
      "demo": "/games/pragmaticexternal/PekingLuck/5220"
    },
    "pragmaticexternal/StarBounty": {
      "title": "Star Bounty",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 906,
        "_hd": 1140,
        "all": 1193,
        "bonusbuy": 82
      },
      "real": {
        "BTC": {
          "id": 5222
        },
        "ETH": {
          "id": 5223
        },
        "LTC": {
          "id": 5225
        }
      },
      "demo": "/games/pragmaticexternal/StarBounty/5224"
    },
    "pragmaticexternal/GreatRhinoMegaways": {
      "title": "Great Rhino Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 136,
        "slots": 446,
        "_hd": 669,
        "all": 699
      },
      "real": {
        "BTC": {
          "id": 5226
        },
        "ETH": {
          "id": 5227
        },
        "LTC": {
          "id": 5229
        }
      },
      "demo": "/games/pragmaticexternal/GreatRhinoMegaways/5228"
    },
    "pragmaticexternal/GreekGods": {
      "title": "Greek Gods",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 332,
        "slots": 447,
        "_hd": 670,
        "all": 700
      },
      "real": {
        "BTC": {
          "id": 5230
        },
        "ETH": {
          "id": 5231
        },
        "LTC": {
          "id": 5233
        }
      },
      "demo": "/games/pragmaticexternal/GreekGods/5232"
    },
    "pragmaticexternal/MasterChensFortune": {
      "title": "Master Chen's Fortune",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 655,
        "_hd": 853,
        "all": 901
      },
      "real": {
        "BTC": {
          "id": 5234
        },
        "ETH": {
          "id": 5235
        },
        "LTC": {
          "id": 5237
        }
      },
      "demo": "/games/pragmaticexternal/MasterChensFortune/5236"
    },
    "pragmaticexternal/HerculesandPegasus": {
      "title": "Hercules and Pegasus",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 467,
        "_hd": 688,
        "all": 718
      },
      "real": {
        "BTC": {
          "id": 5238
        },
        "ETH": {
          "id": 5239
        },
        "LTC": {
          "id": 5241
        }
      },
      "demo": "/games/pragmaticexternal/HerculesandPegasus/5240"
    },
    "pragmaticexternal/Asgard": {
      "title": "Asgard",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 349,
        "slots": 81,
        "_hd": 166,
        "all": 171
      },
      "real": {
        "BTC": {
          "id": 5242
        },
        "ETH": {
          "id": 5243
        },
        "LTC": {
          "id": 5245
        }
      },
      "demo": "/games/pragmaticexternal/Asgard/5244"
    },
    "pragmaticexternal/TripleJokers": {
      "title": "Triple Jokers",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1016,
        "_hd": 1245,
        "all": 1298
      },
      "real": {
        "BTC": {
          "id": 5246
        },
        "ETH": {
          "id": 5247
        },
        "LTC": {
          "id": 5249
        }
      },
      "demo": "/games/pragmaticexternal/TripleJokers/5248"
    },
    "pragmaticexternal/GreatRhinoDeluxe": {
      "title": "Great Rhino Deluxe",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 445,
        "_hd": 668,
        "all": 698
      },
      "real": {
        "BTC": {
          "id": 5250
        },
        "ETH": {
          "id": 5251
        },
        "LTC": {
          "id": 5253
        }
      },
      "demo": "/games/pragmaticexternal/GreatRhinoDeluxe/5252"
    },
    "pragmaticexternal/DragonKingdom": {
      "title": "Dragon Kingdom",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 305,
        "_hd": 530,
        "all": 550
      },
      "real": {
        "BTC": {
          "id": 5254
        },
        "ETH": {
          "id": 5255
        },
        "LTC": {
          "id": 5257
        }
      },
      "demo": "/games/pragmaticexternal/DragonKingdom/5256"
    },
    "pragmaticexternal/FloatingDragon1": {
      "title": "Floating Dragon",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 69,
        "popularity": 52,
        "slots": 369,
        "_hd": 596,
        "all": 621
      },
      "real": {
        "BTC": {
          "id": 5258
        },
        "ETH": {
          "id": 5259
        },
        "LTC": {
          "id": 5261
        }
      },
      "demo": "/games/pragmaticexternal/FloatingDragon1/5260"
    },
    "pragmaticexternal/Mysterious": {
      "title": "Mysterious",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 705,
        "_hd": 899,
        "all": 948
      },
      "real": {
        "BTC": {
          "id": 5262
        },
        "ETH": {
          "id": 5263
        },
        "LTC": {
          "id": 5265
        }
      },
      "demo": "/games/pragmaticexternal/Mysterious/5264"
    },
    "pragmaticexternal/DaVincisTreasure": {
      "title": "Da Vinci's Treasure",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 225,
        "slots": 261,
        "_hd": 491,
        "all": 508
      },
      "real": {
        "BTC": {
          "id": 5266
        },
        "ETH": {
          "id": 5267
        },
        "LTC": {
          "id": 5269
        }
      },
      "demo": "/games/pragmaticexternal/DaVincisTreasure/5268"
    },
    "pragmaticexternal/WildWildRiches": {
      "title": "Wild Wild Riches",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 395,
        "slots": 1083,
        "_hd": 1304,
        "all": 1365
      },
      "real": {
        "BTC": {
          "id": 5270
        },
        "ETH": {
          "id": 5271
        },
        "LTC": {
          "id": 5273
        }
      },
      "demo": "/games/pragmaticexternal/WildWildRiches/5272"
    },
    "pragmaticexternal/MightyKong": {
      "title": "Mighty Kong",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 325,
        "slots": 678,
        "_hd": 875,
        "all": 924
      },
      "real": {
        "BTC": {
          "id": 5274
        },
        "ETH": {
          "id": 5275
        },
        "LTC": {
          "id": 5277
        }
      },
      "demo": "/games/pragmaticexternal/MightyKong/5276"
    },
    "pragmaticexternal/DragoJewelsofFortune": {
      "title": "Drago - Jewels of Fortune",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 157,
        "slots": 300,
        "_hd": 526,
        "all": 546,
        "bonusbuy": 69
      },
      "real": {
        "BTC": {
          "id": 5278
        },
        "ETH": {
          "id": 5279
        },
        "LTC": {
          "id": 5281
        }
      },
      "demo": "/games/pragmaticexternal/DragoJewelsofFortune/5280"
    },
    "pragmaticexternal/TreeofRiches": {
      "title": "Tree of Riches",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1012,
        "_hd": 1241,
        "all": 1294
      },
      "real": {
        "BTC": {
          "id": 5282
        },
        "ETH": {
          "id": 5283
        },
        "LTC": {
          "id": 5285
        }
      },
      "demo": "/games/pragmaticexternal/TreeofRiches/5284"
    },
    "pragmaticexternal/RiseofGizaPowerNudge": {
      "title": "Rise of Giza PowerNudge",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 19,
        "popularity": 294,
        "slots": 815,
        "_hd": 1006,
        "all": 1057,
        "bonusbuy": 81
      },
      "real": {
        "BTC": {
          "id": 5286
        },
        "ETH": {
          "id": 5287
        },
        "LTC": {
          "id": 5289
        }
      },
      "demo": "/games/pragmaticexternal/RiseofGizaPowerNudge/5288"
    },
    "pragmaticexternal/QueenOfAtlantis": {
      "title": "Queen of Atlantis",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 800,
        "_hd": 993,
        "all": 1043
      },
      "real": {
        "BTC": {
          "id": 5290
        },
        "ETH": {
          "id": 5291
        },
        "LTC": {
          "id": 5293
        }
      },
      "demo": "/games/pragmaticexternal/QueenOfAtlantis/5292"
    },
    "pragmaticexternal/PhoenixForge1": {
      "title": "Phoenix Forge",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 58,
        "popularity": 398,
        "slots": 757,
        "_hd": 953,
        "all": 1003
      },
      "real": {
        "BTC": {
          "id": 5294
        },
        "ETH": {
          "id": 5295
        },
        "LTC": {
          "id": 5297
        }
      },
      "demo": "/games/pragmaticexternal/PhoenixForge1/5296"
    },
    "pragmaticexternal/5LionsMegaways1": {
      "title": "5 Lions Megaways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 41,
        "popularity": 343,
        "slots": 30,
        "_hd": 123,
        "all": 123,
        "bonusbuy": 61
      },
      "real": {
        "BTC": {
          "id": 5298
        },
        "ETH": {
          "id": 5299
        },
        "LTC": {
          "id": 5301
        }
      },
      "demo": "/games/pragmaticexternal/5LionsMegaways1/5300"
    },
    "pragmaticexternal/Cowboysgold1": {
      "title": "Cowboys Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 323,
        "slots": 242,
        "_hd": 472,
        "all": 488
      },
      "real": {
        "BTC": {
          "id": 5302
        },
        "ETH": {
          "id": 5303
        },
        "LTC": {
          "id": 5305
        }
      },
      "demo": "/games/pragmaticexternal/Cowboysgold1/5304"
    },
    "pragmaticexternal/WildWalker": {
      "title": "Wild Walker",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 194,
        "slots": 1079,
        "_hd": 1301,
        "all": 1362
      },
      "real": {
        "BTC": {
          "id": 5306
        },
        "ETH": {
          "id": 5307
        },
        "LTC": {
          "id": 5309
        }
      },
      "demo": "/games/pragmaticexternal/WildWalker/5308"
    },
    "pragmaticexternal/LeprechaunSong": {
      "title": "Leprechaun Song",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 582,
        "_hd": 788,
        "all": 829
      },
      "real": {
        "BTC": {
          "id": 5310
        },
        "ETH": {
          "id": 5311
        },
        "LTC": {
          "id": 5313
        }
      },
      "demo": "/games/pragmaticexternal/LeprechaunSong/5312"
    },
    "pragmaticexternal/GemsBonanza1": {
      "title": "Gems Bonanza",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 78,
        "slots": 409,
        "_hd": 635,
        "all": 662,
        "bonusbuy": 73
      },
      "real": {
        "BTC": {
          "id": 5314
        },
        "ETH": {
          "id": 5315
        },
        "LTC": {
          "id": 5317
        }
      },
      "demo": "/games/pragmaticexternal/GemsBonanza1/5316"
    },
    "pragmaticexternal/TheGreatChickenEscape": {
      "title": "The Great Chicken Escape",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 362,
        "slots": 973,
        "_hd": 1204,
        "all": 1257
      },
      "real": {
        "BTC": {
          "id": 5318
        },
        "ETH": {
          "id": 5319
        },
        "LTC": {
          "id": 5321
        }
      },
      "demo": "/games/pragmaticexternal/TheGreatChickenEscape/5320"
    },
    "pragmaticexternal/JadeButterfly": {
      "title": "Jade Butterfly",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 515,
        "_hd": 731,
        "all": 769
      },
      "real": {
        "BTC": {
          "id": 5322
        },
        "ETH": {
          "id": 5323
        },
        "LTC": {
          "id": 5325
        }
      },
      "demo": "/games/pragmaticexternal/JadeButterfly/5324"
    },
    "pragmaticexternal/HoneyHoneyHoney": {
      "title": "Honey Honey Honey",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 379,
        "slots": 472,
        "_hd": 694,
        "all": 724
      },
      "real": {
        "BTC": {
          "id": 5326
        },
        "ETH": {
          "id": 5327
        },
        "LTC": {
          "id": 5329
        }
      },
      "demo": "/games/pragmaticexternal/HoneyHoneyHoney/5328"
    },
    "pragmaticexternal/EmeraldKing": {
      "title": "Emerald King",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 385,
        "slots": 331,
        "_hd": 552,
        "all": 574
      },
      "real": {
        "BTC": {
          "id": 5330
        },
        "ETH": {
          "id": 5331
        },
        "LTC": {
          "id": 5333
        }
      },
      "demo": "/games/pragmaticexternal/EmeraldKing/5332"
    },
    "pragmaticexternal/UltraBurn": {
      "title": "Ultra Burn",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1020,
        "_hd": 1250,
        "all": 1304
      },
      "real": {
        "BTC": {
          "id": 5334
        },
        "ETH": {
          "id": 5335
        },
        "LTC": {
          "id": 5337
        }
      },
      "demo": "/games/pragmaticexternal/UltraBurn/5336"
    },
    "pragmaticexternal/5LionsGold": {
      "title": "5 Lions Gold",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 29,
        "jackpot": 2,
        "_hd": 122,
        "all": 122
      },
      "real": {
        "BTC": {
          "id": 5338
        },
        "ETH": {
          "id": 5339
        },
        "LTC": {
          "id": 5341
        }
      },
      "demo": "/games/pragmaticexternal/5LionsGold/5340"
    },
    "pragmaticexternal/LadyGodiva": {
      "title": "Lady Godiva",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 571,
        "_hd": 779,
        "all": 819
      },
      "real": {
        "BTC": {
          "id": 5342
        },
        "ETH": {
          "id": 5343
        },
        "LTC": {
          "id": 5345
        }
      },
      "demo": "/games/pragmaticexternal/LadyGodiva/5344"
    },
    "pragmaticexternal/JurassicGiants": {
      "title": "Jurassic Giants",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 384,
        "slots": 549,
        "_hd": 763,
        "all": 801
      },
      "real": {
        "BTC": {
          "id": 5346
        },
        "ETH": {
          "id": 5347
        },
        "LTC": {
          "id": 5349
        }
      },
      "demo": "/games/pragmaticexternal/JurassicGiants/5348"
    },
    "pragmaticexternal/WildPixies": {
      "title": "Wild Pixies",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1070,
        "_hd": 1295,
        "all": 1353
      },
      "real": {
        "BTC": {
          "id": 5350
        },
        "ETH": {
          "id": 5351
        },
        "LTC": {
          "id": 5353
        }
      },
      "demo": "/games/pragmaticexternal/WildPixies/5352"
    },
    "pragmaticexternal/FishinReels": {
      "title": "Fishin' Reels",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 85,
        "popularity": 398,
        "slots": 365,
        "_hd": 593,
        "all": 618
      },
      "real": {
        "BTC": {
          "id": 5354
        },
        "ETH": {
          "id": 5355
        },
        "LTC": {
          "id": 5357
        }
      },
      "demo": "/games/pragmaticexternal/FishinReels/5356"
    },
    "pragmaticexternal/5Lions": {
      "title": "5 Lions",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 27,
        "_hd": 120,
        "all": 120
      },
      "real": {
        "BTC": {
          "id": 5358
        },
        "ETH": {
          "id": 5359
        },
        "LTC": {
          "id": 5361
        }
      },
      "demo": "/games/pragmaticexternal/5Lions/5360"
    },
    "pragmaticexternal/AladdinandtheSorcerer": {
      "title": "Aladdin and the Sorcerer",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 59,
        "_hd": 147,
        "all": 149
      },
      "real": {
        "BTC": {
          "id": 5362
        },
        "ETH": {
          "id": 5363
        },
        "LTC": {
          "id": 5365
        }
      },
      "demo": "/games/pragmaticexternal/AladdinandtheSorcerer/5364"
    },
    "pragmaticexternal/FruitRainbow": {
      "title": "Fruit Rainbow",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 391,
        "_hd": 618,
        "all": 644
      },
      "real": {
        "BTC": {
          "id": 5366
        },
        "ETH": {
          "id": 5367
        },
        "LTC": {
          "id": 5369
        }
      },
      "demo": "/games/pragmaticexternal/FruitRainbow/5368"
    },
    "evolution/salon_private_blackjack_three": {
      "title": "Salon Prive Blackjack C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 196,
        "live": 234,
        "_hd": 1040,
        "blackjack": 165,
        "all": 1092
      },
      "real": {
        "BTC": {
          "id": 5371
        },
        "ETH": {
          "id": 5372
        },
        "LTC": {
          "id": 5373
        },
        "XRP": {
          "id": 5374
        }
      }
    },
    "evolution/party_bj": {
      "title": "Blackjack Party",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 68,
        "live": 74,
        "_hd": 271,
        "blackjack": 62,
        "all": 282
      },
      "real": {
        "BTC": {
          "id": 5376
        },
        "ETH": {
          "id": 5377
        },
        "LTC": {
          "id": 5378
        },
        "XRP": {
          "id": 5379
        }
      }
    },
    "evolution/salon_private_baccarat": {
      "title": "Salon Prive Baccarat A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 189,
        "live": 227,
        "_hd": 1033,
        "baccarat": 11,
        "all": 1085
      },
      "real": {
        "BTC": {
          "id": 5381
        },
        "ETH": {
          "id": 5382
        },
        "LTC": {
          "id": 5383
        },
        "XRP": {
          "id": 5384
        }
      }
    },
    "evolution/fortune_vip": {
      "title": "Blackjack Fortune VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 66,
        "live": 72,
        "_hd": 269,
        "blackjack": 60,
        "all": 280
      },
      "real": {
        "BTC": {
          "id": 5386
        },
        "ETH": {
          "id": 5387
        },
        "LTC": {
          "id": 5388
        },
        "XRP": {
          "id": 5389
        }
      }
    },
    "evolution/blackjack_classic2": {
      "title": "Classic Speed Blackjack 7",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 245,
        "card": 164,
        "live": 172,
        "_hd": 453,
        "blackjack": 156,
        "all": 469
      },
      "real": {
        "BTC": {
          "id": 5391
        },
        "ETH": {
          "id": 5392
        },
        "LTC": {
          "id": 5393
        },
        "XRP": {
          "id": 5394
        }
      }
    },
    "evolution/classic_speed_blackjack_50": {
      "title": "Classic Speed Blackjack 50",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 162,
        "live": 170,
        "_hd": 451,
        "blackjack": 154,
        "all": 467
      },
      "real": {
        "BTC": {
          "id": 5396
        },
        "ETH": {
          "id": 5397
        },
        "LTC": {
          "id": 5398
        },
        "XRP": {
          "id": 5399
        }
      }
    },
    "evolution/blackjack_vip_b": {
      "title": "Blackjack VIP B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 91,
        "live": 97,
        "_hd": 294,
        "blackjack": 85,
        "all": 305
      },
      "real": {
        "BTC": {
          "id": 5401
        },
        "ETH": {
          "id": 5402
        },
        "LTC": {
          "id": 5403
        },
        "XRP": {
          "id": 5404
        }
      }
    },
    "evolution/blackjack_vip_10": {
      "title": "Blackjack VIP 10",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 78,
        "live": 84,
        "_hd": 281,
        "blackjack": 72,
        "all": 292
      },
      "real": {
        "BTC": {
          "id": 5406
        },
        "ETH": {
          "id": 5407
        },
        "LTC": {
          "id": 5408
        },
        "XRP": {
          "id": 5409
        }
      }
    },
    "evolution/blackjack_a": {
      "title": "Blackjack A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 7,
        "live": 13,
        "_hd": 210,
        "blackjack": 1,
        "all": 221
      },
      "real": {
        "BTC": {
          "id": 5411
        },
        "ETH": {
          "id": 5412
        },
        "LTC": {
          "id": 5413
        },
        "XRP": {
          "id": 5414
        }
      }
    },
    "evolution/blackjack_vip_c": {
      "title": "Blackjack VIP C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 93,
        "live": 99,
        "_hd": 296,
        "blackjack": 87,
        "all": 307
      },
      "real": {
        "BTC": {
          "id": 5416
        },
        "ETH": {
          "id": 5417
        },
        "LTC": {
          "id": 5418
        },
        "XRP": {
          "id": 5419
        }
      }
    },
    "evolution/roulette_fp_rng": {
      "title": "First Person Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 193,
        "roulette": 10,
        "_hd": 591,
        "all": 616
      },
      "real": {
        "BTC": {
          "id": 5421
        },
        "ETH": {
          "id": 5422
        },
        "LTC": {
          "id": 5423
        },
        "XRP": {
          "id": 5424
        }
      }
    },
    "evolution/blackjack_vip_11": {
      "title": "Blackjack VIP 11",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 79,
        "live": 85,
        "_hd": 282,
        "blackjack": 73,
        "all": 293
      },
      "real": {
        "BTC": {
          "id": 5426
        },
        "ETH": {
          "id": 5427
        },
        "LTC": {
          "id": 5428
        },
        "XRP": {
          "id": 5429
        }
      }
    },
    "evolution/classic_speed_blackjack_30": {
      "title": "Classic Speed Blackjack 30",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 140,
        "live": 148,
        "_hd": 429,
        "blackjack": 132,
        "all": 445
      },
      "real": {
        "BTC": {
          "id": 5431
        },
        "ETH": {
          "id": 5432
        },
        "LTC": {
          "id": 5433
        },
        "XRP": {
          "id": 5434
        }
      }
    },
    "evolution/classic_speed_blackjack_41": {
      "title": "Classic Speed Blackjack 41",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 152,
        "live": 160,
        "_hd": 441,
        "blackjack": 144,
        "all": 457
      },
      "real": {
        "BTC": {
          "id": 5436
        },
        "ETH": {
          "id": 5437
        },
        "LTC": {
          "id": 5438
        },
        "XRP": {
          "id": 5439
        }
      }
    },
    "evolution/blackjack_b": {
      "title": "Blackjack B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 8,
        "live": 14,
        "_hd": 211,
        "blackjack": 2,
        "all": 222
      },
      "real": {
        "BTC": {
          "id": 5441
        },
        "ETH": {
          "id": 5442
        },
        "LTC": {
          "id": 5443
        },
        "XRP": {
          "id": 5444
        }
      }
    },
    "evolution/blackjack_vip_d": {
      "title": "Blackjack VIP D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 94,
        "live": 100,
        "_hd": 297,
        "blackjack": 88,
        "all": 308
      },
      "real": {
        "BTC": {
          "id": 5446
        },
        "ETH": {
          "id": 5447
        },
        "LTC": {
          "id": 5448
        },
        "XRP": {
          "id": 5449
        }
      }
    },
    "evolution/two_hand_casino_oldem": {
      "title": "2 Hand Casino Hold'em",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 0,
        "live": 0,
        "poker": 2,
        "_hd": 109,
        "all": 109
      },
      "real": {
        "BTC": {
          "id": 5451
        },
        "ETH": {
          "id": 5452
        },
        "LTC": {
          "id": 5453
        },
        "XRP": {
          "id": 5454
        }
      }
    },
    "evolution/salon_private_blackjackd": {
      "title": "Salon Prive Blackjack D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 197,
        "live": 235,
        "_hd": 1041,
        "blackjack": 166,
        "all": 1093
      },
      "real": {
        "BTC": {
          "id": 5456
        },
        "ETH": {
          "id": 5457
        },
        "LTC": {
          "id": 5458
        },
        "XRP": {
          "id": 5459
        }
      }
    },
    "evolution/japanese_roulette": {
      "title": "Japanese Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 149,
        "live": 206,
        "roulette": 17,
        "_hd": 733,
        "all": 771
      },
      "real": {
        "BTC": {
          "id": 5461
        },
        "ETH": {
          "id": 5462
        },
        "LTC": {
          "id": 5463
        },
        "XRP": {
          "id": 5464
        }
      }
    },
    "evolution/auto_roulette_vip": {
      "title": "Auto-Roulette VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 6,
        "roulette": 5,
        "_hd": 171,
        "all": 176
      },
      "real": {
        "BTC": {
          "id": 5466
        },
        "ETH": {
          "id": 5467
        },
        "LTC": {
          "id": 5468
        },
        "XRP": {
          "id": 5469
        }
      }
    },
    "evolution/blackjack_vip_12": {
      "title": "Blackjack VIP 12",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 80,
        "live": 86,
        "_hd": 283,
        "blackjack": 74,
        "all": 294
      },
      "real": {
        "BTC": {
          "id": 5471
        },
        "ETH": {
          "id": 5472
        },
        "LTC": {
          "id": 5473
        },
        "XRP": {
          "id": 5474
        }
      }
    },
    "evolution/classic_speed_blackjack_20": {
      "title": "Classic Speed Blackjack 20",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 215,
        "card": 129,
        "live": 137,
        "_hd": 418,
        "blackjack": 121,
        "all": 434
      },
      "real": {
        "BTC": {
          "id": 5476
        },
        "ETH": {
          "id": 5477
        },
        "LTC": {
          "id": 5478
        },
        "XRP": {
          "id": 5479
        }
      }
    },
    "evolution/classic_speed_blackjack_31": {
      "title": "Classic Speed Blackjack 31",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 141,
        "live": 149,
        "_hd": 430,
        "blackjack": 133,
        "all": 446
      },
      "real": {
        "BTC": {
          "id": 5481
        },
        "ETH": {
          "id": 5482
        },
        "LTC": {
          "id": 5483
        },
        "XRP": {
          "id": 5484
        }
      }
    },
    "evolution/classic_speed_blackjack_42": {
      "title": "Classic Speed Blackjack 42",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 153,
        "live": 161,
        "_hd": 442,
        "blackjack": 145,
        "all": 458
      },
      "real": {
        "BTC": {
          "id": 5486
        },
        "ETH": {
          "id": 5487
        },
        "LTC": {
          "id": 5488
        },
        "XRP": {
          "id": 5489
        }
      }
    },
    "evolution/blackjack_c": {
      "title": "Blackjack C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 9,
        "live": 15,
        "_hd": 212,
        "blackjack": 3,
        "all": 223
      },
      "real": {
        "BTC": {
          "id": 5491
        },
        "ETH": {
          "id": 5492
        },
        "LTC": {
          "id": 5493
        },
        "XRP": {
          "id": 5494
        }
      }
    },
    "evolution/blackjack_vip_e": {
      "title": "Blackjack VIP E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 95,
        "live": 101,
        "_hd": 298,
        "blackjack": 89,
        "all": 309
      },
      "real": {
        "BTC": {
          "id": 5496
        },
        "ETH": {
          "id": 5497
        },
        "LTC": {
          "id": 5498
        },
        "XRP": {
          "id": 5499
        }
      }
    },
    "evolution/salon_private_blackjacke": {
      "title": "Salon Prive Blackjack E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 198,
        "live": 236,
        "_hd": 1042,
        "blackjack": 167,
        "all": 1094
      },
      "real": {
        "BTC": {
          "id": 5501
        },
        "ETH": {
          "id": 5502
        },
        "LTC": {
          "id": 5503
        },
        "XRP": {
          "id": 5504
        }
      }
    },
    "evolution/baccarat_a": {
      "title": "Baccarat A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 284,
        "card": 1,
        "live": 7,
        "_hd": 182,
        "baccarat": 0,
        "all": 188
      },
      "real": {
        "BTC": {
          "id": 5511
        },
        "ETH": {
          "id": 5512
        },
        "LTC": {
          "id": 5513
        },
        "XRP": {
          "id": 5514
        }
      }
    },
    "evolution/bjclassic70": {
      "title": "Blackjack Classic 70",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 60,
        "live": 66,
        "_hd": 263,
        "blackjack": 54,
        "all": 274
      },
      "real": {
        "BTC": {
          "id": 5516
        },
        "ETH": {
          "id": 5517
        },
        "LTC": {
          "id": 5518
        },
        "XRP": {
          "id": 5519
        }
      }
    },
    "evolution/classic_speed_blackjack_21": {
      "title": "Classic Speed Blackjack 21",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 254,
        "card": 130,
        "live": 138,
        "_hd": 419,
        "blackjack": 122,
        "all": 435
      },
      "real": {
        "BTC": {
          "id": 5526
        },
        "ETH": {
          "id": 5527
        },
        "LTC": {
          "id": 5528
        },
        "XRP": {
          "id": 5529
        }
      }
    },
    "evolution/classic_speed_blackjack_43": {
      "title": "Classic Speed Blackjack 43",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 154,
        "live": 162,
        "_hd": 443,
        "blackjack": 146,
        "all": 459
      },
      "real": {
        "BTC": {
          "id": 5531
        },
        "ETH": {
          "id": 5532
        },
        "LTC": {
          "id": 5533
        },
        "XRP": {
          "id": 5534
        }
      }
    },
    "evolution/blackjack_d": {
      "title": "Speed Blackjack D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 217,
        "live": 258,
        "_hd": 1116,
        "blackjack": 169,
        "all": 1169
      },
      "real": {
        "BTC": {
          "id": 5536
        },
        "ETH": {
          "id": 5537
        },
        "LTC": {
          "id": 5538
        },
        "XRP": {
          "id": 5539
        }
      }
    },
    "evolution/salon_private_blackjackf": {
      "title": "Salon Prive Blackjack F",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 199,
        "live": 237,
        "_hd": 1043,
        "blackjack": 168,
        "all": 1095
      },
      "real": {
        "BTC": {
          "id": 5546
        },
        "ETH": {
          "id": 5547
        },
        "LTC": {
          "id": 5548
        },
        "XRP": {
          "id": 5549
        }
      }
    },
    "evolution/freebet_blackjack": {
      "title": "Free Bet Blackjack",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 263,
        "card": 177,
        "live": 197,
        "_hd": 606,
        "blackjack": 160,
        "all": 632
      },
      "real": {
        "BTC": {
          "id": 5551
        },
        "ETH": {
          "id": 5552
        },
        "LTC": {
          "id": 5553
        },
        "XRP": {
          "id": 5554
        }
      }
    },
    "evolution/baccarat_squeeze": {
      "title": "Baccarat Squeeze",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 20,
        "card": 5,
        "live": 11,
        "_hd": 186,
        "baccarat": 4,
        "all": 192
      },
      "real": {
        "BTC": {
          "id": 5556
        },
        "ETH": {
          "id": 5557
        },
        "LTC": {
          "id": 5558
        },
        "XRP": {
          "id": 5559
        }
      }
    },
    "evolution/auto_roulette": {
      "title": "Auto-Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 4,
        "roulette": 3,
        "_hd": 169,
        "all": 174
      },
      "real": {
        "BTC": {
          "id": 5561
        },
        "ETH": {
          "id": 5562
        },
        "LTC": {
          "id": 5563
        },
        "XRP": {
          "id": 5564
        }
      }
    },
    "evolution/silver1": {
      "title": "Blackjack Silver A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 70,
        "live": 76,
        "_hd": 273,
        "blackjack": 64,
        "all": 284
      },
      "real": {
        "BTC": {
          "id": 5566
        },
        "ETH": {
          "id": 5567
        },
        "LTC": {
          "id": 5568
        },
        "XRP": {
          "id": 5569
        }
      }
    },
    "evolution/bjclassic60": {
      "title": "Blackjack Classic 60",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 50,
        "live": 56,
        "_hd": 253,
        "blackjack": 44,
        "all": 264
      },
      "real": {
        "BTC": {
          "id": 5571
        },
        "ETH": {
          "id": 5572
        },
        "LTC": {
          "id": 5573
        },
        "XRP": {
          "id": 5574
        }
      }
    },
    "evolution/baccarat_b": {
      "title": "Baccarat B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 269,
        "card": 2,
        "live": 8,
        "_hd": 183,
        "baccarat": 1,
        "all": 189
      },
      "real": {
        "BTC": {
          "id": 5576
        },
        "ETH": {
          "id": 5577
        },
        "LTC": {
          "id": 5578
        },
        "XRP": {
          "id": 5579
        }
      }
    },
    "evolution/bjclassic71": {
      "title": "Blackjack Classic 71",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 61,
        "live": 67,
        "_hd": 264,
        "blackjack": 55,
        "all": 275
      },
      "real": {
        "BTC": {
          "id": 5581
        },
        "ETH": {
          "id": 5582
        },
        "LTC": {
          "id": 5583
        },
        "XRP": {
          "id": 5584
        }
      }
    },
    "evolution/flemishroulette": {
      "title": "Flemish Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 195,
        "roulette": 11,
        "_hd": 595,
        "all": 620
      },
      "real": {
        "BTC": {
          "id": 5586
        },
        "ETH": {
          "id": 5587
        },
        "LTC": {
          "id": 5588
        },
        "XRP": {
          "id": 5589
        }
      }
    },
    "evolution/classic_speed_blackjack_22": {
      "title": "Classic Speed Blackjack 22",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 131,
        "live": 139,
        "_hd": 420,
        "blackjack": 123,
        "all": 436
      },
      "real": {
        "BTC": {
          "id": 5591
        },
        "ETH": {
          "id": 5592
        },
        "LTC": {
          "id": 5593
        },
        "XRP": {
          "id": 5594
        }
      }
    },
    "evolution/classic_speed_blackjack_44": {
      "title": "Classic Speed Blackjack 44",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 155,
        "live": 163,
        "_hd": 444,
        "blackjack": 147,
        "all": 460
      },
      "real": {
        "BTC": {
          "id": 5596
        },
        "ETH": {
          "id": 5597
        },
        "LTC": {
          "id": 5598
        },
        "XRP": {
          "id": 5599
        }
      }
    },
    "evolution/blackjack_e": {
      "title": "Speed Blackjack E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 218,
        "live": 259,
        "_hd": 1117,
        "blackjack": 170,
        "all": 1170
      },
      "real": {
        "BTC": {
          "id": 5601
        },
        "ETH": {
          "id": 5602
        },
        "LTC": {
          "id": 5603
        },
        "XRP": {
          "id": 5604
        }
      }
    },
    "evolution/french_roulette_gold": {
      "title": "French Roulette Gold",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 198,
        "roulette": 12,
        "_hd": 609,
        "all": 635
      },
      "real": {
        "BTC": {
          "id": 5606
        },
        "ETH": {
          "id": 5607
        },
        "LTC": {
          "id": 5608
        },
        "XRP": {
          "id": 5609
        }
      }
    },
    "evolution/blackjack_vip_g": {
      "title": "Blackjack VIP G",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 97,
        "live": 103,
        "_hd": 300,
        "blackjack": 91,
        "all": 311
      },
      "real": {
        "BTC": {
          "id": 5611
        },
        "ETH": {
          "id": 5612
        },
        "LTC": {
          "id": 5613
        },
        "XRP": {
          "id": 5614
        }
      }
    },
    "evolution/silver2": {
      "title": "Blackjack Silver B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 71,
        "live": 77,
        "_hd": 274,
        "blackjack": 65,
        "all": 285
      },
      "real": {
        "BTC": {
          "id": 5616
        },
        "ETH": {
          "id": 5617
        },
        "LTC": {
          "id": 5618
        },
        "XRP": {
          "id": 5619
        }
      }
    },
    "evolution/bjclassic50": {
      "title": "Blackjack Classic 50",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 40,
        "live": 46,
        "_hd": 243,
        "blackjack": 34,
        "all": 254
      },
      "real": {
        "BTC": {
          "id": 5621
        },
        "ETH": {
          "id": 5622
        },
        "LTC": {
          "id": 5623
        },
        "XRP": {
          "id": 5624
        }
      }
    },
    "evolution/bjclassic61": {
      "title": "Blackjack Classic 61",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 173,
        "card": 51,
        "live": 57,
        "_hd": 254,
        "blackjack": 45,
        "all": 265
      },
      "real": {
        "BTC": {
          "id": 5626
        },
        "ETH": {
          "id": 5627
        },
        "LTC": {
          "id": 5628
        },
        "XRP": {
          "id": 5629
        }
      }
    },
    "evolution/baccarat_c": {
      "title": "Baccarat C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 53,
        "card": 3,
        "live": 9,
        "_hd": 184,
        "baccarat": 2,
        "all": 190
      },
      "real": {
        "BTC": {
          "id": 5631
        },
        "ETH": {
          "id": 5632
        },
        "LTC": {
          "id": 5633
        },
        "XRP": {
          "id": 5634
        }
      }
    },
    "evolution/bjclassic72": {
      "title": "Blackjack Classic 72",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 62,
        "live": 68,
        "_hd": 265,
        "blackjack": 56,
        "all": 276
      },
      "real": {
        "BTC": {
          "id": 5636
        },
        "ETH": {
          "id": 5637
        },
        "LTC": {
          "id": 5638
        },
        "XRP": {
          "id": 5639
        }
      }
    },
    "evolution/ClassicSpeedBlackjack40": {
      "title": "Classic Speed Blackjack 40",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 151,
        "live": 159,
        "_hd": 440,
        "blackjack": 143,
        "all": 456
      },
      "real": {
        "BTC": {
          "id": 5641
        },
        "ETH": {
          "id": 5642
        },
        "LTC": {
          "id": 5643
        },
        "XRP": {
          "id": 5644
        }
      }
    },
    "evolution/sidebetcity": {
      "title": "Side Bet City",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 239,
        "poker": 6,
        "game-shows": 13,
        "_hd": 1075,
        "all": 1128
      },
      "real": {
        "BTC": {
          "id": 5646
        },
        "ETH": {
          "id": 5647
        },
        "LTC": {
          "id": 5648
        },
        "XRP": {
          "id": 5649
        }
      }
    },
    "evolution/classic_speed_blackjack_23": {
      "title": "Classic Speed Blackjack 23",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 132,
        "live": 140,
        "_hd": 421,
        "blackjack": 124,
        "all": 437
      },
      "real": {
        "BTC": {
          "id": 5651
        },
        "ETH": {
          "id": 5652
        },
        "LTC": {
          "id": 5653
        },
        "XRP": {
          "id": 5654
        }
      }
    },
    "evolution/classic_speed_blackjack_34": {
      "title": "Classic Speed Blackjack 34",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 144,
        "live": 152,
        "_hd": 433,
        "blackjack": 136,
        "all": 449
      },
      "real": {
        "BTC": {
          "id": 5656
        },
        "ETH": {
          "id": 5657
        },
        "LTC": {
          "id": 5658
        },
        "XRP": {
          "id": 5659
        }
      }
    },
    "evolution/blackjack_classic8": {
      "title": "Blackjack Classic 8",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 54,
        "card": 63,
        "live": 69,
        "_hd": 266,
        "blackjack": 57,
        "all": 277
      },
      "real": {
        "BTC": {
          "id": 5661
        },
        "ETH": {
          "id": 5662
        },
        "LTC": {
          "id": 5663
        },
        "XRP": {
          "id": 5664
        }
      }
    },
    "evolution/classic_speed_blackjack_45": {
      "title": "Classic Speed Blackjack 45",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 156,
        "live": 164,
        "_hd": 445,
        "blackjack": 148,
        "all": 461
      },
      "real": {
        "BTC": {
          "id": 5666
        },
        "ETH": {
          "id": 5667
        },
        "LTC": {
          "id": 5668
        },
        "XRP": {
          "id": 5669
        }
      }
    },
    "evolution/blackjack_f": {
      "title": "Blackjack VIP X",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 113,
        "live": 119,
        "_hd": 316,
        "blackjack": 107,
        "all": 327
      },
      "real": {
        "BTC": {
          "id": 5671
        },
        "ETH": {
          "id": 5672
        },
        "LTC": {
          "id": 5673
        },
        "XRP": {
          "id": 5674
        }
      }
    },
    "evolution/bjclassic1": {
      "title": "Classic Speed Blackjack 1",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 119,
        "live": 127,
        "_hd": 408,
        "blackjack": 111,
        "all": 424
      },
      "real": {
        "BTC": {
          "id": 5676
        },
        "ETH": {
          "id": 5677
        },
        "LTC": {
          "id": 5678
        },
        "XRP": {
          "id": 5679
        }
      }
    },
    "evolution/blackjack_vip_h": {
      "title": "Blackjack VIP H",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 99,
        "live": 105,
        "_hd": 302,
        "blackjack": 93,
        "all": 313
      },
      "real": {
        "BTC": {
          "id": 5681
        },
        "ETH": {
          "id": 5682
        },
        "LTC": {
          "id": 5683
        },
        "XRP": {
          "id": 5684
        }
      }
    },
    "evolution/moneywheel_rng": {
      "title": "First Person Dream Catcher",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 367,
        "live": 188,
        "lottery": 4,
        "game-shows": 3,
        "_hd": 586,
        "all": 611
      },
      "real": {
        "BTC": {
          "id": 5686
        },
        "ETH": {
          "id": 5687
        },
        "LTC": {
          "id": 5688
        },
        "XRP": {
          "id": 5689
        }
      }
    },
    "evolution/silver3": {
      "title": "Blackjack Silver C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 72,
        "live": 78,
        "_hd": 275,
        "blackjack": 66,
        "all": 286
      },
      "real": {
        "BTC": {
          "id": 5691
        },
        "ETH": {
          "id": 5692
        },
        "LTC": {
          "id": 5693
        },
        "XRP": {
          "id": 5694
        }
      }
    },
    "evolution/bjclassic40": {
      "title": "Classic Speed Blackjack 32",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 142,
        "live": 150,
        "_hd": 431,
        "blackjack": 134,
        "all": 447
      },
      "real": {
        "BTC": {
          "id": 5696
        },
        "ETH": {
          "id": 5697
        },
        "LTC": {
          "id": 5698
        },
        "XRP": {
          "id": 5699
        }
      }
    },
    "evolution/bjclassic51": {
      "title": "Blackjack Classic 51",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 41,
        "live": 47,
        "_hd": 244,
        "blackjack": 35,
        "all": 255
      },
      "real": {
        "BTC": {
          "id": 5701
        },
        "ETH": {
          "id": 5702
        },
        "LTC": {
          "id": 5703
        },
        "XRP": {
          "id": 5704
        }
      }
    },
    "evolution/bjclassic62": {
      "title": "Blackjack Classic 62",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 52,
        "live": 58,
        "_hd": 255,
        "blackjack": 46,
        "all": 266
      },
      "real": {
        "BTC": {
          "id": 5706
        },
        "ETH": {
          "id": 5707
        },
        "LTC": {
          "id": 5708
        },
        "XRP": {
          "id": 5709
        }
      }
    },
    "evolution/classic_speed_blackjack_35": {
      "title": "Classic Speed Blackjack 35",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 145,
        "live": 153,
        "_hd": 434,
        "blackjack": 137,
        "all": 450
      },
      "real": {
        "BTC": {
          "id": 5711
        },
        "ETH": {
          "id": 5712
        },
        "LTC": {
          "id": 5713
        },
        "XRP": {
          "id": 5714
        }
      }
    },
    "evolution/blackjack_classic9": {
      "title": "Blackjack Classic 9",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 329,
        "card": 64,
        "live": 70,
        "_hd": 267,
        "blackjack": 58,
        "all": 278
      },
      "real": {
        "BTC": {
          "id": 5716
        },
        "ETH": {
          "id": 5717
        },
        "LTC": {
          "id": 5718
        },
        "XRP": {
          "id": 5719
        }
      }
    },
    "evolution/classic_speed_blackjack_46": {
      "title": "Classic Speed Blackjack 46",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 157,
        "live": 165,
        "_hd": 446,
        "blackjack": 149,
        "all": 462
      },
      "real": {
        "BTC": {
          "id": 5721
        },
        "ETH": {
          "id": 5722
        },
        "LTC": {
          "id": 5723
        },
        "XRP": {
          "id": 5724
        }
      }
    },
    "evolution/blackjack_g": {
      "title": "Speed Blackjack G",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 219,
        "live": 260,
        "_hd": 1118,
        "blackjack": 171,
        "all": 1171
      },
      "real": {
        "BTC": {
          "id": 5726
        },
        "ETH": {
          "id": 5727
        },
        "LTC": {
          "id": 5728
        },
        "XRP": {
          "id": 5729
        }
      }
    },
    "evolution/speed_baccarata": {
      "title": "Speed Baccarat A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 68,
        "card": 200,
        "live": 241,
        "_hd": 1099,
        "baccarat": 16,
        "all": 1152
      },
      "real": {
        "BTC": {
          "id": 5731
        },
        "ETH": {
          "id": 5732
        },
        "LTC": {
          "id": 5733
        },
        "XRP": {
          "id": 5734
        }
      }
    },
    "evolution/bjclassic2": {
      "title": "Classic Speed Blackjack 2",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 128,
        "live": 136,
        "_hd": 417,
        "blackjack": 120,
        "all": 433
      },
      "real": {
        "BTC": {
          "id": 5736
        },
        "ETH": {
          "id": 5737
        },
        "LTC": {
          "id": 5738
        },
        "XRP": {
          "id": 5739
        }
      }
    },
    "evolution/salon_private_blackjack_one": {
      "title": "Salon Prive Blackjack A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 15,
        "card": 194,
        "live": 232,
        "_hd": 1038,
        "blackjack": 163,
        "all": 1090
      },
      "real": {
        "BTC": {
          "id": 5741
        },
        "ETH": {
          "id": 5742
        },
        "LTC": {
          "id": 5743
        },
        "XRP": {
          "id": 5744
        }
      }
    },
    "evolution/bjclassic30": {
      "title": "Blackjack Classic 30",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 23,
        "live": 29,
        "_hd": 226,
        "blackjack": 17,
        "all": 237
      },
      "real": {
        "BTC": {
          "id": 5746
        },
        "ETH": {
          "id": 5747
        },
        "LTC": {
          "id": 5748
        },
        "XRP": {
          "id": 5749
        }
      }
    },
    "evolution/silver4": {
      "title": "Blackjack Silver D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 73,
        "live": 79,
        "_hd": 276,
        "blackjack": 67,
        "all": 287
      },
      "real": {
        "BTC": {
          "id": 5751
        },
        "ETH": {
          "id": 5752
        },
        "LTC": {
          "id": 5753
        },
        "XRP": {
          "id": 5754
        }
      }
    },
    "evolution/bjclassic41": {
      "title": "Blackjack Classic 41",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 31,
        "live": 37,
        "_hd": 234,
        "blackjack": 25,
        "all": 245
      },
      "real": {
        "BTC": {
          "id": 5756
        },
        "ETH": {
          "id": 5757
        },
        "LTC": {
          "id": 5758
        },
        "XRP": {
          "id": 5759
        }
      }
    },
    "evolution/bjclassic52": {
      "title": "Blackjack Classic 52",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 42,
        "live": 48,
        "_hd": 245,
        "blackjack": 36,
        "all": 256
      },
      "real": {
        "BTC": {
          "id": 5761
        },
        "ETH": {
          "id": 5762
        },
        "LTC": {
          "id": 5763
        },
        "XRP": {
          "id": 5764
        }
      }
    },
    "evolution/bjclassic63": {
      "title": "Blackjack Classic 63",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 53,
        "live": 59,
        "_hd": 256,
        "blackjack": 47,
        "all": 267
      },
      "real": {
        "BTC": {
          "id": 5766
        },
        "ETH": {
          "id": 5767
        },
        "LTC": {
          "id": 5768
        },
        "XRP": {
          "id": 5769
        }
      }
    },
    "evolution/classic_speed_blackjack_25": {
      "title": "Classic Speed Blackjack 25",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 134,
        "live": 142,
        "_hd": 423,
        "blackjack": 126,
        "all": 439
      },
      "real": {
        "BTC": {
          "id": 5771
        },
        "ETH": {
          "id": 5772
        },
        "LTC": {
          "id": 5773
        },
        "XRP": {
          "id": 5774
        }
      }
    },
    "evolution/classic_speed_blackjack_36": {
      "title": "Classic Speed Blackjack 36",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 146,
        "live": 154,
        "_hd": 435,
        "blackjack": 138,
        "all": 451
      },
      "real": {
        "BTC": {
          "id": 5776
        },
        "ETH": {
          "id": 5777
        },
        "LTC": {
          "id": 5778
        },
        "XRP": {
          "id": 5779
        }
      }
    },
    "evolution/classic_speed_blackjack_47": {
      "title": "Classic Speed Blackjack 47",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 250,
        "card": 158,
        "live": 166,
        "_hd": 447,
        "blackjack": 150,
        "all": 463
      },
      "real": {
        "BTC": {
          "id": 5781
        },
        "ETH": {
          "id": 5782
        },
        "LTC": {
          "id": 5783
        },
        "XRP": {
          "id": 5784
        }
      }
    },
    "evolution/lightning_roulette": {
      "title": "Lightning Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 3,
        "live": 209,
        "roulette": 18,
        "game-shows": 10,
        "_hd": 793,
        "all": 834
      },
      "real": {
        "BTC": {
          "id": 5786
        },
        "ETH": {
          "id": 5787
        },
        "LTC": {
          "id": 5788
        },
        "XRP": {
          "id": 5789
        }
      }
    },
    "evolution/arabic_roulette": {
      "title": "Arabic Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 3,
        "roulette": 2,
        "_hd": 162,
        "all": 166
      },
      "real": {
        "BTC": {
          "id": 5791
        },
        "ETH": {
          "id": 5792
        },
        "LTC": {
          "id": 5793
        },
        "XRP": {
          "id": 5794
        }
      }
    },
    "evolution/blackjack_h": {
      "title": "Speed Blackjack H",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 220,
        "live": 261,
        "_hd": 1119,
        "blackjack": 172,
        "all": 1172
      },
      "real": {
        "BTC": {
          "id": 5796
        },
        "ETH": {
          "id": 5797
        },
        "LTC": {
          "id": 5798
        },
        "XRP": {
          "id": 5799
        }
      }
    },
    "evolution/speed_baccaratb": {
      "title": "Speed Baccarat B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 34,
        "card": 201,
        "live": 242,
        "_hd": 1100,
        "baccarat": 17,
        "all": 1153
      },
      "real": {
        "BTC": {
          "id": 5801
        },
        "ETH": {
          "id": 5802
        },
        "LTC": {
          "id": 5803
        },
        "XRP": {
          "id": 5804
        }
      }
    },
    "evolution/bjclassic3": {
      "title": "Blackjack Classic 3",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 22,
        "live": 28,
        "_hd": 225,
        "blackjack": 16,
        "all": 236
      },
      "real": {
        "BTC": {
          "id": 5806
        },
        "ETH": {
          "id": 5807
        },
        "LTC": {
          "id": 5808
        },
        "XRP": {
          "id": 5809
        }
      }
    },
    "evolution/blackjack_vip_j": {
      "title": "Blackjack VIP J",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 101,
        "live": 107,
        "_hd": 304,
        "blackjack": 95,
        "all": 315
      },
      "real": {
        "BTC": {
          "id": 5811
        },
        "ETH": {
          "id": 5812
        },
        "LTC": {
          "id": 5813
        },
        "XRP": {
          "id": 5814
        }
      }
    },
    "evolution/stud_poker": {
      "title": "Caribbean Stud Poker",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 255,
        "card": 116,
        "live": 122,
        "poker": 0,
        "_hd": 372,
        "all": 386
      },
      "real": {
        "BTC": {
          "id": 5816
        },
        "ETH": {
          "id": 5817
        },
        "LTC": {
          "id": 5818
        },
        "XRP": {
          "id": 5819
        }
      }
    },
    "evolution/platinum_vip": {
      "title": "Blackjack Platinum VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 106,
        "card": 69,
        "live": 75,
        "_hd": 272,
        "blackjack": 63,
        "all": 283
      },
      "real": {
        "BTC": {
          "id": 5821
        },
        "ETH": {
          "id": 5822
        },
        "LTC": {
          "id": 5823
        },
        "XRP": {
          "id": 5824
        }
      }
    },
    "evolution/bjclassic20": {
      "title": "Blackjack Classic 20",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 235,
        "card": 12,
        "live": 18,
        "_hd": 215,
        "blackjack": 6,
        "all": 226
      },
      "real": {
        "BTC": {
          "id": 5826
        },
        "ETH": {
          "id": 5827
        },
        "LTC": {
          "id": 5828
        },
        "XRP": {
          "id": 5829
        }
      }
    },
    "evolution/bjclassic31": {
      "title": "Blackjack Classic 31",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 24,
        "live": 30,
        "_hd": 227,
        "blackjack": 18,
        "all": 238
      },
      "real": {
        "BTC": {
          "id": 5831
        },
        "ETH": {
          "id": 5832
        },
        "LTC": {
          "id": 5833
        },
        "XRP": {
          "id": 5834
        }
      }
    },
    "evolution/silver5": {
      "title": "Blackjack Silver E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 74,
        "live": 80,
        "_hd": 277,
        "blackjack": 68,
        "all": 288
      },
      "real": {
        "BTC": {
          "id": 5836
        },
        "ETH": {
          "id": 5837
        },
        "LTC": {
          "id": 5838
        },
        "XRP": {
          "id": 5839
        }
      }
    },
    "evolution/bjclassic42": {
      "title": "Blackjack Classic 42",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 32,
        "live": 38,
        "_hd": 235,
        "blackjack": 26,
        "all": 246
      },
      "real": {
        "BTC": {
          "id": 5841
        },
        "ETH": {
          "id": 5842
        },
        "LTC": {
          "id": 5843
        },
        "XRP": {
          "id": 5844
        }
      }
    },
    "evolution/bjclassic53": {
      "title": "Blackjack Classic 53",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 43,
        "live": 49,
        "_hd": 246,
        "blackjack": 37,
        "all": 257
      },
      "real": {
        "BTC": {
          "id": 5846
        },
        "ETH": {
          "id": 5847
        },
        "LTC": {
          "id": 5848
        },
        "XRP": {
          "id": 5849
        }
      }
    },
    "evolution/bjclassic64": {
      "title": "Blackjack Classic 64",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 54,
        "live": 60,
        "_hd": 257,
        "blackjack": 48,
        "all": 268
      },
      "real": {
        "BTC": {
          "id": 5851
        },
        "ETH": {
          "id": 5852
        },
        "LTC": {
          "id": 5853
        },
        "XRP": {
          "id": 5854
        }
      }
    },
    "evolution/speed_blackjack_a": {
      "title": "Speed VIP Blackjack A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 104,
        "card": 226,
        "live": 268,
        "_hd": 1126,
        "blackjack": 178,
        "all": 1179
      },
      "real": {
        "BTC": {
          "id": 5856
        },
        "ETH": {
          "id": 5857
        },
        "LTC": {
          "id": 5858
        },
        "XRP": {
          "id": 5859
        }
      }
    },
    "evolution/classic_speed_blackjack_26": {
      "title": "Classic Speed Blackjack 26",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 201,
        "card": 135,
        "live": 143,
        "_hd": 424,
        "blackjack": 127,
        "all": 440
      },
      "real": {
        "BTC": {
          "id": 5861
        },
        "ETH": {
          "id": 5862
        },
        "LTC": {
          "id": 5863
        },
        "XRP": {
          "id": 5864
        }
      }
    },
    "evolution/classic_speed_blackjack_37": {
      "title": "Classic Speed Blackjack 37",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 147,
        "live": 155,
        "_hd": 436,
        "blackjack": 139,
        "all": 452
      },
      "real": {
        "BTC": {
          "id": 5866
        },
        "ETH": {
          "id": 5867
        },
        "LTC": {
          "id": 5868
        },
        "XRP": {
          "id": 5869
        }
      }
    },
    "evolution/classic_speed_blackjack_48": {
      "title": "Classic Speed Blackjack 48",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 159,
        "live": 167,
        "_hd": 448,
        "blackjack": 151,
        "all": 464
      },
      "real": {
        "BTC": {
          "id": 5871
        },
        "ETH": {
          "id": 5872
        },
        "LTC": {
          "id": 5873
        },
        "XRP": {
          "id": 5874
        }
      }
    },
    "evolution/blackjack_i": {
      "title": "Speed Blackjack I",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 221,
        "live": 262,
        "_hd": 1120,
        "blackjack": 173,
        "all": 1173
      },
      "real": {
        "BTC": {
          "id": 5876
        },
        "ETH": {
          "id": 5877
        },
        "LTC": {
          "id": 5878
        },
        "XRP": {
          "id": 5879
        }
      }
    },
    "evolution/speed_baccaratc": {
      "title": "Speed Baccarat C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 26,
        "card": 202,
        "live": 243,
        "_hd": 1101,
        "baccarat": 18,
        "all": 1154
      },
      "real": {
        "BTC": {
          "id": 5881
        },
        "ETH": {
          "id": 5882
        },
        "LTC": {
          "id": 5883
        },
        "XRP": {
          "id": 5884
        }
      }
    },
    "evolution/norsk_roulette": {
      "title": "Norsk Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 219,
        "roulette": 21,
        "_hd": 922,
        "all": 971
      },
      "real": {
        "BTC": {
          "id": 5886
        },
        "ETH": {
          "id": 5887
        },
        "LTC": {
          "id": 5888
        },
        "XRP": {
          "id": 5889
        }
      }
    },
    "evolution/blackjack_vip_k": {
      "title": "Blackjack VIP K",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 102,
        "live": 108,
        "_hd": 305,
        "blackjack": 96,
        "all": 316
      },
      "real": {
        "BTC": {
          "id": 5891
        },
        "ETH": {
          "id": 5892
        },
        "LTC": {
          "id": 5893
        },
        "XRP": {
          "id": 5894
        }
      }
    },
    "evolution/three_card_poker": {
      "title": "Three Card Poker",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 371,
        "card": 231,
        "live": 276,
        "poker": 1,
        "_hd": 1227,
        "all": 1280
      },
      "real": {
        "BTC": {
          "id": 5896
        },
        "ETH": {
          "id": 5897
        },
        "LTC": {
          "id": 5898
        },
        "XRP": {
          "id": 5899
        }
      }
    },
    "evolution/bjclassic10": {
      "title": "Classic Speed Blackjack 10",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 190,
        "card": 120,
        "live": 128,
        "_hd": 409,
        "blackjack": 112,
        "all": 425
      },
      "real": {
        "BTC": {
          "id": 5901
        },
        "ETH": {
          "id": 5902
        },
        "LTC": {
          "id": 5903
        },
        "XRP": {
          "id": 5904
        }
      }
    },
    "evolution/bjclassic21": {
      "title": "Blackjack Classic 21",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 13,
        "live": 19,
        "_hd": 216,
        "blackjack": 7,
        "all": 227
      },
      "real": {
        "BTC": {
          "id": 5906
        },
        "ETH": {
          "id": 5907
        },
        "LTC": {
          "id": 5908
        },
        "XRP": {
          "id": 5909
        }
      }
    },
    "evolution/bjclassic32": {
      "title": "Blackjack Classic 32",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 25,
        "live": 31,
        "_hd": 228,
        "blackjack": 19,
        "all": 239
      },
      "real": {
        "BTC": {
          "id": 5911
        },
        "ETH": {
          "id": 5912
        },
        "LTC": {
          "id": 5913
        },
        "XRP": {
          "id": 5914
        }
      }
    },
    "evolution/silver6": {
      "title": "Blackjack Silver F",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 75,
        "live": 81,
        "_hd": 278,
        "blackjack": 69,
        "all": 289
      },
      "real": {
        "BTC": {
          "id": 5916
        },
        "ETH": {
          "id": 5917
        },
        "LTC": {
          "id": 5918
        },
        "XRP": {
          "id": 5919
        }
      }
    },
    "evolution/bjclassic43": {
      "title": "Blackjack Classic 43",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 33,
        "live": 39,
        "_hd": 236,
        "blackjack": 27,
        "all": 247
      },
      "real": {
        "BTC": {
          "id": 5921
        },
        "ETH": {
          "id": 5922
        },
        "LTC": {
          "id": 5923
        },
        "XRP": {
          "id": 5924
        }
      }
    },
    "evolution/bjclassic54": {
      "title": "Blackjack Classic 54",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 44,
        "live": 50,
        "_hd": 247,
        "blackjack": 38,
        "all": 258
      },
      "real": {
        "BTC": {
          "id": 5926
        },
        "ETH": {
          "id": 5927
        },
        "LTC": {
          "id": 5928
        },
        "XRP": {
          "id": 5929
        }
      }
    },
    "evolution/bjclassic65": {
      "title": "Blackjack Classic 65",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 55,
        "live": 61,
        "_hd": 258,
        "blackjack": 49,
        "all": 269
      },
      "real": {
        "BTC": {
          "id": 5931
        },
        "ETH": {
          "id": 5932
        },
        "LTC": {
          "id": 5933
        },
        "XRP": {
          "id": 5934
        }
      }
    },
    "evolution/hippodrome_casino": {
      "title": "Hippodrome Casino Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 201,
        "roulette": 13,
        "_hd": 691,
        "all": 721
      },
      "real": {
        "BTC": {
          "id": 5936
        },
        "ETH": {
          "id": 5937
        },
        "LTC": {
          "id": 5938
        },
        "XRP": {
          "id": 5939
        }
      }
    },
    "evolution/speed_blackjack_b": {
      "title": "Speed VIP Blackjack B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 227,
        "live": 269,
        "_hd": 1127,
        "blackjack": 179,
        "all": 1180
      },
      "real": {
        "BTC": {
          "id": 5941
        },
        "ETH": {
          "id": 5942
        },
        "LTC": {
          "id": 5943
        },
        "XRP": {
          "id": 5944
        }
      }
    },
    "evolution/classic_speed_blackjack_27": {
      "title": "Classic Speed Blackjack 27",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 260,
        "card": 136,
        "live": 144,
        "_hd": 425,
        "blackjack": 128,
        "all": 441
      },
      "real": {
        "BTC": {
          "id": 5946
        },
        "ETH": {
          "id": 5947
        },
        "LTC": {
          "id": 5948
        },
        "XRP": {
          "id": 5949
        }
      }
    },
    "evolution/classic_speed_blackjack_38": {
      "title": "Classic Speed Blackjack 38",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 148,
        "live": 156,
        "_hd": 437,
        "blackjack": 140,
        "all": 453
      },
      "real": {
        "BTC": {
          "id": 5951
        },
        "ETH": {
          "id": 5952
        },
        "LTC": {
          "id": 5953
        },
        "XRP": {
          "id": 5954
        }
      }
    },
    "evolution/classic_speed_blackjack_49": {
      "title": "Classic Speed Blackjack 49",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 160,
        "live": 168,
        "_hd": 449,
        "blackjack": 152,
        "all": 465
      },
      "real": {
        "BTC": {
          "id": 5956
        },
        "ETH": {
          "id": 5957
        },
        "LTC": {
          "id": 5958
        },
        "XRP": {
          "id": 5959
        }
      }
    },
    "evolution/blackjack_j": {
      "title": "Speed Blackjack J",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 222,
        "live": 263,
        "_hd": 1121,
        "blackjack": 174,
        "all": 1174
      },
      "real": {
        "BTC": {
          "id": 5961
        },
        "ETH": {
          "id": 5962
        },
        "LTC": {
          "id": 5963
        },
        "XRP": {
          "id": 5964
        }
      }
    },
    "evolution/speed_baccaratd": {
      "title": "Speed Baccarat D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 116,
        "card": 203,
        "live": 244,
        "_hd": 1102,
        "baccarat": 19,
        "all": 1155
      },
      "real": {
        "BTC": {
          "id": 5966
        },
        "ETH": {
          "id": 5967
        },
        "LTC": {
          "id": 5968
        },
        "XRP": {
          "id": 5969
        }
      }
    },
    "evolution/blackjack_vip_l": {
      "title": "Blackjack VIP L",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 103,
        "live": 109,
        "_hd": 306,
        "blackjack": 97,
        "all": 317
      },
      "real": {
        "BTC": {
          "id": 5971
        },
        "ETH": {
          "id": 5972
        },
        "LTC": {
          "id": 5973
        },
        "XRP": {
          "id": 5974
        }
      }
    },
    "evolution/blackjack_rng": {
      "title": "First Person Blackjack",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 171,
        "live": 185,
        "_hd": 583,
        "blackjack": 159,
        "all": 608
      },
      "real": {
        "BTC": {
          "id": 5976
        },
        "ETH": {
          "id": 5977
        },
        "LTC": {
          "id": 5978
        },
        "XRP": {
          "id": 5979
        }
      }
    },
    "evolution/grand_vip": {
      "title": "Blackjack Grand VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 67,
        "live": 73,
        "_hd": 270,
        "blackjack": 61,
        "all": 281
      },
      "real": {
        "BTC": {
          "id": 5981
        },
        "ETH": {
          "id": 5982
        },
        "LTC": {
          "id": 5983
        },
        "XRP": {
          "id": 5984
        }
      }
    },
    "evolution/baccarat_controlled": {
      "title": "Baccarat Controlled Squeeze",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 4,
        "live": 10,
        "_hd": 185,
        "baccarat": 3,
        "all": 191
      },
      "real": {
        "BTC": {
          "id": 5986
        },
        "ETH": {
          "id": 5987
        },
        "LTC": {
          "id": 5988
        },
        "XRP": {
          "id": 5989
        }
      }
    },
    "evolution/bjclassic11": {
      "title": "Classic Speed Blackjack 11",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 121,
        "live": 129,
        "_hd": 410,
        "blackjack": 113,
        "all": 426
      },
      "real": {
        "BTC": {
          "id": 5991
        },
        "ETH": {
          "id": 5992
        },
        "LTC": {
          "id": 5993
        },
        "XRP": {
          "id": 5994
        }
      }
    },
    "evolution/bjclassic22": {
      "title": "Blackjack Classic 22",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 14,
        "live": 20,
        "_hd": 217,
        "blackjack": 8,
        "all": 228
      },
      "real": {
        "BTC": {
          "id": 5996
        },
        "ETH": {
          "id": 5997
        },
        "LTC": {
          "id": 5998
        },
        "XRP": {
          "id": 5999
        }
      }
    },
    "evolution/bjclassic33": {
      "title": "Classic Speed Blackjack 33",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 143,
        "live": 151,
        "_hd": 432,
        "blackjack": 135,
        "all": 448
      },
      "real": {
        "BTC": {
          "id": 6001
        },
        "ETH": {
          "id": 6002
        },
        "LTC": {
          "id": 6003
        },
        "XRP": {
          "id": 6004
        }
      }
    },
    "evolution/speed_roulette": {
      "title": "Speed Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 338,
        "live": 267,
        "roulette": 29,
        "_hd": 1125,
        "all": 1178
      },
      "real": {
        "BTC": {
          "id": 6006
        },
        "ETH": {
          "id": 6007
        },
        "LTC": {
          "id": 6008
        },
        "XRP": {
          "id": 6009
        }
      }
    },
    "evolution/silver7": {
      "title": "Blackjack Silver G",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 76,
        "live": 82,
        "_hd": 279,
        "blackjack": 70,
        "all": 290
      },
      "real": {
        "BTC": {
          "id": 6011
        },
        "ETH": {
          "id": 6012
        },
        "LTC": {
          "id": 6013
        },
        "XRP": {
          "id": 6014
        }
      }
    },
    "evolution/bjclassic44": {
      "title": "Blackjack Classic 44",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 34,
        "live": 40,
        "_hd": 237,
        "blackjack": 28,
        "all": 248
      },
      "real": {
        "BTC": {
          "id": 6016
        },
        "ETH": {
          "id": 6017
        },
        "LTC": {
          "id": 6018
        },
        "XRP": {
          "id": 6019
        }
      }
    },
    "evolution/bjclassic55": {
      "title": "Blackjack Classic 55",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 45,
        "live": 51,
        "_hd": 248,
        "blackjack": 39,
        "all": 259
      },
      "real": {
        "BTC": {
          "id": 6021
        },
        "ETH": {
          "id": 6022
        },
        "LTC": {
          "id": 6023
        },
        "XRP": {
          "id": 6024
        }
      }
    },
    "evolution/bjclassic66": {
      "title": "Blackjack Classic 66",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 56,
        "live": 62,
        "_hd": 259,
        "blackjack": 50,
        "all": 270
      },
      "real": {
        "BTC": {
          "id": 6026
        },
        "ETH": {
          "id": 6027
        },
        "LTC": {
          "id": 6028
        },
        "XRP": {
          "id": 6029
        }
      }
    },
    "evolution/speed_blackjack_c": {
      "title": "Speed VIP Blackjack C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 228,
        "live": 270,
        "_hd": 1128,
        "blackjack": 180,
        "all": 1181
      },
      "real": {
        "BTC": {
          "id": 6031
        },
        "ETH": {
          "id": 6032
        },
        "LTC": {
          "id": 6033
        },
        "XRP": {
          "id": 6034
        }
      }
    },
    "evolution/classic_speed_blackjack_28": {
      "title": "Classic Speed Blackjack 28",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 137,
        "live": 145,
        "_hd": 426,
        "blackjack": 129,
        "all": 442
      },
      "real": {
        "BTC": {
          "id": 6036
        },
        "ETH": {
          "id": 6037
        },
        "LTC": {
          "id": 6038
        },
        "XRP": {
          "id": 6039
        }
      }
    },
    "evolution/classic_speed_blackjack_39": {
      "title": "Classic Speed Blackjack 39",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 149,
        "live": 157,
        "_hd": 438,
        "blackjack": 141,
        "all": 454
      },
      "real": {
        "BTC": {
          "id": 6041
        },
        "ETH": {
          "id": 6042
        },
        "LTC": {
          "id": 6043
        },
        "XRP": {
          "id": 6044
        }
      }
    },
    "evolution/blackjack_k": {
      "title": "Blackjack VIP F",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 96,
        "live": 102,
        "_hd": 299,
        "blackjack": 90,
        "all": 310
      },
      "real": {
        "BTC": {
          "id": 6046
        },
        "ETH": {
          "id": 6047
        },
        "LTC": {
          "id": 6048
        },
        "XRP": {
          "id": 6049
        }
      }
    },
    "evolution/speed_baccarate": {
      "title": "Speed Baccarat E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 72,
        "card": 204,
        "live": 245,
        "_hd": 1103,
        "baccarat": 20,
        "all": 1156
      },
      "real": {
        "BTC": {
          "id": 6051
        },
        "ETH": {
          "id": 6052
        },
        "LTC": {
          "id": 6053
        },
        "XRP": {
          "id": 6054
        }
      }
    },
    "evolution/blackjack_vip_m": {
      "title": "Blackjack VIP M",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 104,
        "live": 110,
        "_hd": 307,
        "blackjack": 98,
        "all": 318
      },
      "real": {
        "BTC": {
          "id": 6061
        },
        "ETH": {
          "id": 6062
        },
        "LTC": {
          "id": 6063
        },
        "XRP": {
          "id": 6064
        }
      }
    },
    "evolution/bjclassic12": {
      "title": "Classic Speed Blackjack 12",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 300,
        "card": 122,
        "live": 130,
        "_hd": 411,
        "blackjack": 114,
        "all": 427
      },
      "real": {
        "BTC": {
          "id": 6066
        },
        "ETH": {
          "id": 6067
        },
        "LTC": {
          "id": 6068
        },
        "XRP": {
          "id": 6069
        }
      }
    },
    "evolution/deutsches_roulette": {
      "title": "Deutsches Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 360,
        "live": 178,
        "roulette": 7,
        "_hd": 507,
        "all": 524
      },
      "real": {
        "BTC": {
          "id": 6071
        },
        "ETH": {
          "id": 6072
        },
        "LTC": {
          "id": 6073
        },
        "XRP": {
          "id": 6074
        }
      }
    },
    "evolution/bjclassic23": {
      "title": "Blackjack Classic 23",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 15,
        "live": 21,
        "_hd": 218,
        "blackjack": 9,
        "all": 229
      },
      "real": {
        "BTC": {
          "id": 6076
        },
        "ETH": {
          "id": 6077
        },
        "LTC": {
          "id": 6078
        },
        "XRP": {
          "id": 6079
        }
      }
    },
    "evolution/ruleta_envivo": {
      "title": "Ruleta En Vivo",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 225,
        "roulette": 25,
        "_hd": 1024,
        "all": 1076
      },
      "real": {
        "BTC": {
          "id": 6081
        },
        "ETH": {
          "id": 6082
        },
        "LTC": {
          "id": 6083
        },
        "XRP": {
          "id": 6084
        }
      }
    },
    "evolution/bjclassic34": {
      "title": "Classic Speed Blackjack 24",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 212,
        "card": 133,
        "live": 141,
        "_hd": 422,
        "blackjack": 125,
        "all": 438
      },
      "real": {
        "BTC": {
          "id": 6086
        },
        "ETH": {
          "id": 6087
        },
        "LTC": {
          "id": 6088
        },
        "XRP": {
          "id": 6089
        }
      }
    },
    "evolution/texas_holdem_bonus": {
      "title": "Texas Hold'em Bonus",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 183,
        "live": 275,
        "poker": 4,
        "_hd": 1185,
        "all": 1238
      },
      "real": {
        "BTC": {
          "id": 6091
        },
        "ETH": {
          "id": 6092
        },
        "LTC": {
          "id": 6093
        },
        "XRP": {
          "id": 6094
        }
      }
    },
    "evolution/bjclassic45": {
      "title": "Blackjack Classic 45",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 35,
        "live": 41,
        "_hd": 238,
        "blackjack": 29,
        "all": 249
      },
      "real": {
        "BTC": {
          "id": 6096
        },
        "ETH": {
          "id": 6097
        },
        "LTC": {
          "id": 6098
        },
        "XRP": {
          "id": 6099
        }
      }
    },
    "evolution/bjclassic56": {
      "title": "Blackjack Classic 56",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 46,
        "live": 52,
        "_hd": 249,
        "blackjack": 40,
        "all": 260
      },
      "real": {
        "BTC": {
          "id": 6101
        },
        "ETH": {
          "id": 6102
        },
        "LTC": {
          "id": 6103
        },
        "XRP": {
          "id": 6104
        }
      }
    },
    "evolution/bjclassic67": {
      "title": "Blackjack Classic 67",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 57,
        "live": 63,
        "_hd": 260,
        "blackjack": 51,
        "all": 271
      },
      "real": {
        "BTC": {
          "id": 6106
        },
        "ETH": {
          "id": 6107
        },
        "LTC": {
          "id": 6108
        },
        "XRP": {
          "id": 6109
        }
      }
    },
    "evolution/speed_blackjack_d": {
      "title": "Speed VIP Blackjack D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 229,
        "live": 271,
        "_hd": 1129,
        "blackjack": 181,
        "all": 1182
      },
      "real": {
        "BTC": {
          "id": 6111
        },
        "ETH": {
          "id": 6112
        },
        "LTC": {
          "id": 6113
        },
        "XRP": {
          "id": 6114
        }
      }
    },
    "evolution/classic_speed_blackjack_29": {
      "title": "Classic Speed Blackjack 29",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 138,
        "live": 146,
        "_hd": 427,
        "blackjack": 130,
        "all": 443
      },
      "real": {
        "BTC": {
          "id": 6116
        },
        "ETH": {
          "id": 6117
        },
        "LTC": {
          "id": 6118
        },
        "XRP": {
          "id": 6119
        }
      }
    },
    "evolution/blackjack_l": {
      "title": "Blackjack VIP U",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 111,
        "live": 117,
        "_hd": 314,
        "blackjack": 105,
        "all": 325
      },
      "real": {
        "BTC": {
          "id": 6121
        },
        "ETH": {
          "id": 6122
        },
        "LTC": {
          "id": 6123
        },
        "XRP": {
          "id": 6124
        }
      }
    },
    "evolution/speed_baccaratf": {
      "title": "Speed Baccarat F",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 346,
        "card": 205,
        "live": 246,
        "_hd": 1104,
        "baccarat": 21,
        "all": 1157
      },
      "real": {
        "BTC": {
          "id": 6126
        },
        "ETH": {
          "id": 6127
        },
        "LTC": {
          "id": 6128
        },
        "XRP": {
          "id": 6129
        }
      }
    },
    "evolution/bjclassic7": {
      "title": "Classic Blackjack 7",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 118,
        "live": 126,
        "_hd": 407,
        "blackjack": 110,
        "all": 423
      },
      "real": {
        "BTC": {
          "id": 6131
        },
        "ETH": {
          "id": 6132
        },
        "LTC": {
          "id": 6133
        },
        "XRP": {
          "id": 6134
        }
      }
    },
    "evolution/bjclassic13": {
      "title": "Classic Speed Blackjack 13",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 160,
        "card": 123,
        "live": 131,
        "_hd": 412,
        "blackjack": 115,
        "all": 428
      },
      "real": {
        "BTC": {
          "id": 6136
        },
        "ETH": {
          "id": 6137
        },
        "LTC": {
          "id": 6138
        },
        "XRP": {
          "id": 6139
        }
      }
    },
    "evolution/bjclassic24": {
      "title": "Blackjack Classic 24",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 261,
        "card": 16,
        "live": 22,
        "_hd": 219,
        "blackjack": 10,
        "all": 230
      },
      "real": {
        "BTC": {
          "id": 6141
        },
        "ETH": {
          "id": 6142
        },
        "LTC": {
          "id": 6143
        },
        "XRP": {
          "id": 6144
        }
      }
    },
    "evolution/bjclassic35": {
      "title": "Blackjack Classic 35",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 26,
        "live": 32,
        "_hd": 229,
        "blackjack": 20,
        "all": 240
      },
      "real": {
        "BTC": {
          "id": 6146
        },
        "ETH": {
          "id": 6147
        },
        "LTC": {
          "id": 6148
        },
        "XRP": {
          "id": 6149
        }
      }
    },
    "evolution/bjclassic46": {
      "title": "Blackjack Classic 46",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 36,
        "live": 42,
        "_hd": 239,
        "blackjack": 30,
        "all": 250
      },
      "real": {
        "BTC": {
          "id": 6151
        },
        "ETH": {
          "id": 6152
        },
        "LTC": {
          "id": 6153
        },
        "XRP": {
          "id": 6154
        }
      }
    },
    "evolution/bjclassic57": {
      "title": "Blackjack Classic 57",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 47,
        "live": 53,
        "_hd": 250,
        "blackjack": 41,
        "all": 261
      },
      "real": {
        "BTC": {
          "id": 6156
        },
        "ETH": {
          "id": 6157
        },
        "LTC": {
          "id": 6158
        },
        "XRP": {
          "id": 6159
        }
      }
    },
    "evolution/bjclassic68": {
      "title": "Blackjack Classic 68",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 256,
        "card": 58,
        "live": 64,
        "_hd": 261,
        "blackjack": 52,
        "all": 272
      },
      "real": {
        "BTC": {
          "id": 6161
        },
        "ETH": {
          "id": 6162
        },
        "LTC": {
          "id": 6163
        },
        "XRP": {
          "id": 6164
        }
      }
    },
    "evolution/dream_catcher": {
      "title": "Dream Catcher",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 24,
        "live": 182,
        "lottery": 3,
        "game-shows": 2,
        "_hd": 543,
        "all": 565
      },
      "real": {
        "BTC": {
          "id": 6166
        },
        "ETH": {
          "id": 6167
        },
        "LTC": {
          "id": 6168
        },
        "XRP": {
          "id": 6169
        }
      }
    },
    "evolution/speed_auto_roulette": {
      "title": "Speed Auto Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 56,
        "live": 240,
        "roulette": 28,
        "_hd": 1098,
        "all": 1151
      },
      "real": {
        "BTC": {
          "id": 6171
        },
        "ETH": {
          "id": 6172
        },
        "LTC": {
          "id": 6173
        },
        "XRP": {
          "id": 6174
        }
      }
    },
    "evolution/speed_baccaratg": {
      "title": "Speed Baccarat G",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 285,
        "card": 206,
        "live": 247,
        "_hd": 1105,
        "baccarat": 22,
        "all": 1158
      },
      "real": {
        "BTC": {
          "id": 6176
        },
        "ETH": {
          "id": 6177
        },
        "LTC": {
          "id": 6178
        },
        "XRP": {
          "id": 6179
        }
      }
    },
    "evolution/blackjack_vip_o": {
      "title": "Blackjack VIP O",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 105,
        "live": 111,
        "_hd": 308,
        "blackjack": 99,
        "all": 319
      },
      "real": {
        "BTC": {
          "id": 6181
        },
        "ETH": {
          "id": 6182
        },
        "LTC": {
          "id": 6183
        },
        "XRP": {
          "id": 6184
        }
      }
    },
    "evolution/suomalainen_roulette": {
      "title": "Suomalainen Ruletti",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 272,
        "roulette": 30,
        "_hd": 1156,
        "all": 1209
      },
      "real": {
        "BTC": {
          "id": 6186
        },
        "ETH": {
          "id": 6187
        },
        "LTC": {
          "id": 6188
        },
        "XRP": {
          "id": 6189
        }
      }
    },
    "evolution/double_ball": {
      "title": "Double Ball Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 180,
        "roulette": 8,
        "_hd": 522,
        "all": 542
      },
      "real": {
        "BTC": {
          "id": 6191
        },
        "ETH": {
          "id": 6192
        },
        "LTC": {
          "id": 6193
        },
        "XRP": {
          "id": 6194
        }
      }
    },
    "evolution/salon_private_blackjack_two": {
      "title": "Salon Prive Blackjack B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 57,
        "card": 195,
        "live": 233,
        "_hd": 1039,
        "blackjack": 164,
        "all": 1091
      },
      "real": {
        "BTC": {
          "id": 6196
        },
        "ETH": {
          "id": 6197
        },
        "LTC": {
          "id": 6198
        },
        "XRP": {
          "id": 6199
        }
      }
    },
    "evolution/bjclassic14": {
      "title": "Classic Speed Blackjack 14",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 259,
        "card": 124,
        "live": 132,
        "_hd": 413,
        "blackjack": 116,
        "all": 429
      },
      "real": {
        "BTC": {
          "id": 6201
        },
        "ETH": {
          "id": 6202
        },
        "LTC": {
          "id": 6203
        },
        "XRP": {
          "id": 6204
        }
      }
    },
    "evolution/bjclassic25": {
      "title": "Blackjack Classic 25",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 17,
        "live": 23,
        "_hd": 220,
        "blackjack": 11,
        "all": 231
      },
      "real": {
        "BTC": {
          "id": 6206
        },
        "ETH": {
          "id": 6207
        },
        "LTC": {
          "id": 6208
        },
        "XRP": {
          "id": 6209
        }
      }
    },
    "evolution/bjclassic36": {
      "title": "Blackjack Classic 36",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 27,
        "live": 33,
        "_hd": 230,
        "blackjack": 21,
        "all": 241
      },
      "real": {
        "BTC": {
          "id": 6211
        },
        "ETH": {
          "id": 6212
        },
        "LTC": {
          "id": 6213
        },
        "XRP": {
          "id": 6214
        }
      }
    },
    "evolution/bjclassic47": {
      "title": "Blackjack Classic 47",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 37,
        "live": 43,
        "_hd": 240,
        "blackjack": 31,
        "all": 251
      },
      "real": {
        "BTC": {
          "id": 6216
        },
        "ETH": {
          "id": 6217
        },
        "LTC": {
          "id": 6218
        },
        "XRP": {
          "id": 6219
        }
      }
    },
    "evolution/nocomm_speed_baccarat": {
      "title": "No Comm Speed Baccarat A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 141,
        "card": 183,
        "live": 215,
        "_hd": 916,
        "baccarat": 7,
        "all": 965
      },
      "real": {
        "BTC": {
          "id": 6221
        },
        "ETH": {
          "id": 6222
        },
        "LTC": {
          "id": 6223
        },
        "XRP": {
          "id": 6224
        }
      }
    },
    "evolution/bjclassic58": {
      "title": "Blackjack Classic 58",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 48,
        "live": 54,
        "_hd": 251,
        "blackjack": 42,
        "all": 262
      },
      "real": {
        "BTC": {
          "id": 6226
        },
        "ETH": {
          "id": 6227
        },
        "LTC": {
          "id": 6228
        },
        "XRP": {
          "id": 6229
        }
      }
    },
    "evolution/bjclassic69": {
      "title": "Blackjack Classic 69",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 59,
        "live": 65,
        "_hd": 262,
        "blackjack": 53,
        "all": 273
      },
      "real": {
        "BTC": {
          "id": 6231
        },
        "ETH": {
          "id": 6232
        },
        "LTC": {
          "id": 6233
        },
        "XRP": {
          "id": 6234
        }
      }
    },
    "evolution/monopoly": {
      "title": "Monopoly",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 10,
        "live": 213,
        "lottery": 7,
        "game-shows": 12,
        "_hd": 887,
        "all": 936
      },
      "real": {
        "BTC": {
          "id": 6236
        },
        "ETH": {
          "id": 6237
        },
        "LTC": {
          "id": 6238
        },
        "XRP": {
          "id": 6239
        }
      }
    },
    "evolution/classic_speed_blackjack_3": {
      "title": "Classic Speed Blackjack 3",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 139,
        "live": 147,
        "_hd": 428,
        "blackjack": 131,
        "all": 444
      },
      "real": {
        "BTC": {
          "id": 6241
        },
        "ETH": {
          "id": 6242
        },
        "LTC": {
          "id": 6243
        },
        "XRP": {
          "id": 6244
        }
      }
    },
    "evolution/ClassicSpeedBlackjack8": {
      "title": "Classic Speed Blackjack 8",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 123,
        "card": 165,
        "live": 173,
        "_hd": 454,
        "blackjack": 157,
        "all": 470
      },
      "real": {
        "BTC": {
          "id": 6246
        },
        "ETH": {
          "id": 6247
        },
        "LTC": {
          "id": 6248
        },
        "XRP": {
          "id": 6249
        }
      }
    },
    "evolution/speed_baccarath": {
      "title": "Speed Baccarat H",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 320,
        "card": 207,
        "live": 248,
        "_hd": 1106,
        "baccarat": 23,
        "all": 1159
      },
      "real": {
        "BTC": {
          "id": 6251
        },
        "ETH": {
          "id": 6252
        },
        "LTC": {
          "id": 6253
        },
        "XRP": {
          "id": 6254
        }
      }
    },
    "evolution/blackjack_vip_p": {
      "title": "Blackjack VIP P",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 106,
        "live": 112,
        "_hd": 309,
        "blackjack": 100,
        "all": 320
      },
      "real": {
        "BTC": {
          "id": 6256
        },
        "ETH": {
          "id": 6257
        },
        "LTC": {
          "id": 6258
        },
        "XRP": {
          "id": 6259
        }
      }
    },
    "evolution/bjclassic15": {
      "title": "Classic Speed Blackjack 15",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 205,
        "card": 125,
        "live": 133,
        "_hd": 414,
        "blackjack": 117,
        "all": 430
      },
      "real": {
        "BTC": {
          "id": 6261
        },
        "ETH": {
          "id": 6262
        },
        "LTC": {
          "id": 6263
        },
        "XRP": {
          "id": 6264
        }
      }
    },
    "evolution/bjclassic26": {
      "title": "Blackjack Classic 26",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 18,
        "live": 24,
        "_hd": 221,
        "blackjack": 12,
        "all": 232
      },
      "real": {
        "BTC": {
          "id": 6266
        },
        "ETH": {
          "id": 6267
        },
        "LTC": {
          "id": 6268
        },
        "XRP": {
          "id": 6269
        }
      }
    },
    "evolution/bjclassic37": {
      "title": "Blackjack Classic 37",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 28,
        "live": 34,
        "_hd": 231,
        "blackjack": 22,
        "all": 242
      },
      "real": {
        "BTC": {
          "id": 6271
        },
        "ETH": {
          "id": 6272
        },
        "LTC": {
          "id": 6273
        },
        "XRP": {
          "id": 6274
        }
      }
    },
    "evolution/bjclassic48": {
      "title": "Blackjack Classic 48",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 38,
        "live": 44,
        "_hd": 241,
        "blackjack": 32,
        "all": 252
      },
      "real": {
        "BTC": {
          "id": 6276
        },
        "ETH": {
          "id": 6277
        },
        "LTC": {
          "id": 6278
        },
        "XRP": {
          "id": 6279
        }
      }
    },
    "evolution/bjclassic59": {
      "title": "Blackjack Classic 59",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 291,
        "card": 49,
        "live": 55,
        "_hd": 252,
        "blackjack": 43,
        "all": 263
      },
      "real": {
        "BTC": {
          "id": 6281
        },
        "ETH": {
          "id": 6282
        },
        "LTC": {
          "id": 6283
        },
        "XRP": {
          "id": 6284
        }
      }
    },
    "evolution/speed_baccarati": {
      "title": "Speed Baccarat I",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 265,
        "card": 208,
        "live": 249,
        "_hd": 1107,
        "baccarat": 24,
        "all": 1160
      },
      "real": {
        "BTC": {
          "id": 6286
        },
        "ETH": {
          "id": 6287
        },
        "LTC": {
          "id": 6288
        },
        "XRP": {
          "id": 6289
        }
      }
    },
    "evolution/blackjack_vip_1": {
      "title": "Blackjack VIP 1",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 77,
        "live": 83,
        "_hd": 280,
        "blackjack": 71,
        "all": 291
      },
      "real": {
        "BTC": {
          "id": 6291
        },
        "ETH": {
          "id": 6292
        },
        "LTC": {
          "id": 6293
        },
        "XRP": {
          "id": 6294
        }
      }
    },
    "evolution/blackjack_vip_q": {
      "title": "Blackjack VIP Q",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 38,
        "card": 107,
        "live": 113,
        "_hd": 310,
        "blackjack": 101,
        "all": 321
      },
      "real": {
        "BTC": {
          "id": 6296
        },
        "ETH": {
          "id": 6297
        },
        "LTC": {
          "id": 6298
        },
        "XRP": {
          "id": 6299
        }
      }
    },
    "evolution/svensk_roulette": {
      "title": "Svensk Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 274,
        "roulette": 31,
        "_hd": 1171,
        "all": 1224
      },
      "real": {
        "BTC": {
          "id": 6301
        },
        "ETH": {
          "id": 6302
        },
        "LTC": {
          "id": 6303
        },
        "XRP": {
          "id": 6304
        }
      }
    },
    "evolution/bjclassic16": {
      "title": "Classic Speed Blackjack 16",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 126,
        "live": 134,
        "_hd": 415,
        "blackjack": 118,
        "all": 431
      },
      "real": {
        "BTC": {
          "id": 6306
        },
        "ETH": {
          "id": 6307
        },
        "LTC": {
          "id": 6308
        },
        "XRP": {
          "id": 6309
        }
      }
    },
    "evolution/bjclassic27": {
      "title": "Blackjack Classic 27",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 297,
        "card": 19,
        "live": 25,
        "_hd": 222,
        "blackjack": 13,
        "all": 233
      },
      "real": {
        "BTC": {
          "id": 6311
        },
        "ETH": {
          "id": 6312
        },
        "LTC": {
          "id": 6313
        },
        "XRP": {
          "id": 6314
        }
      }
    },
    "evolution/bjclassic38": {
      "title": "Blackjack Classic 38",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 29,
        "live": 35,
        "_hd": 232,
        "blackjack": 23,
        "all": 243
      },
      "real": {
        "BTC": {
          "id": 6316
        },
        "ETH": {
          "id": 6317
        },
        "LTC": {
          "id": 6318
        },
        "XRP": {
          "id": 6319
        }
      }
    },
    "evolution/bjclassic49": {
      "title": "Blackjack Classic 49",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 39,
        "live": 45,
        "_hd": 242,
        "blackjack": 33,
        "all": 253
      },
      "real": {
        "BTC": {
          "id": 6321
        },
        "ETH": {
          "id": 6322
        },
        "LTC": {
          "id": 6323
        },
        "XRP": {
          "id": 6324
        }
      }
    },
    "evolution/megaball": {
      "title": "Mega Ball",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 7,
        "live": 212,
        "lottery": 6,
        "game-shows": 11,
        "_hd": 862,
        "all": 910
      },
      "real": {
        "BTC": {
          "id": 6326
        },
        "ETH": {
          "id": 6327
        },
        "LTC": {
          "id": 6328
        },
        "XRP": {
          "id": 6329
        }
      }
    },
    "evolution/classic_speed_blackjack_5": {
      "title": "Classic Speed Blackjack 5",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 199,
        "card": 161,
        "live": 169,
        "_hd": 450,
        "blackjack": 153,
        "all": 466
      },
      "real": {
        "BTC": {
          "id": 6331
        },
        "ETH": {
          "id": 6332
        },
        "LTC": {
          "id": 6333
        },
        "XRP": {
          "id": 6334
        }
      }
    },
    "evolution/speed_baccaratj": {
      "title": "Speed Baccarat J",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 12,
        "card": 209,
        "live": 250,
        "_hd": 1108,
        "baccarat": 25,
        "all": 1161
      },
      "real": {
        "BTC": {
          "id": 6336
        },
        "ETH": {
          "id": 6337
        },
        "LTC": {
          "id": 6338
        },
        "XRP": {
          "id": 6339
        }
      }
    },
    "evolution/blackjack_vip_2": {
      "title": "Blackjack VIP 2",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 81,
        "live": 87,
        "_hd": 284,
        "blackjack": 75,
        "all": 295
      },
      "real": {
        "BTC": {
          "id": 6341
        },
        "ETH": {
          "id": 6342
        },
        "LTC": {
          "id": 6343
        },
        "XRP": {
          "id": 6344
        }
      }
    },
    "evolution/blackjack_vip_r": {
      "title": "Blackjack VIP R",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 108,
        "live": 114,
        "_hd": 311,
        "blackjack": 102,
        "all": 322
      },
      "real": {
        "BTC": {
          "id": 6346
        },
        "ETH": {
          "id": 6347
        },
        "LTC": {
          "id": 6348
        },
        "XRP": {
          "id": 6349
        }
      }
    },
    "evolution/bjclassic17": {
      "title": "Blackjack Classic 17",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 188,
        "card": 10,
        "live": 16,
        "_hd": 213,
        "blackjack": 4,
        "all": 224
      },
      "real": {
        "BTC": {
          "id": 6351
        },
        "ETH": {
          "id": 6352
        },
        "LTC": {
          "id": 6353
        },
        "XRP": {
          "id": 6354
        }
      }
    },
    "evolution/salon_prive_baccarat_c": {
      "title": "Salon Prive Baccarat C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 191,
        "live": 229,
        "_hd": 1035,
        "baccarat": 13,
        "all": 1087
      },
      "real": {
        "BTC": {
          "id": 6356
        },
        "ETH": {
          "id": 6357
        },
        "LTC": {
          "id": 6358
        },
        "XRP": {
          "id": 6359
        }
      }
    },
    "evolution/bjclassic28": {
      "title": "Blackjack Classic 28",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 20,
        "live": 26,
        "_hd": 223,
        "blackjack": 14,
        "all": 234
      },
      "real": {
        "BTC": {
          "id": 6361
        },
        "ETH": {
          "id": 6362
        },
        "LTC": {
          "id": 6363
        },
        "XRP": {
          "id": 6364
        }
      }
    },
    "evolution/bjclassic39": {
      "title": "Blackjack Classic 39",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 197,
        "card": 30,
        "live": 36,
        "_hd": 233,
        "blackjack": 24,
        "all": 244
      },
      "real": {
        "BTC": {
          "id": 6366
        },
        "ETH": {
          "id": 6367
        },
        "LTC": {
          "id": 6368
        },
        "XRP": {
          "id": 6369
        }
      }
    },
    "evolution/netherland_roulette": {
      "title": "Netherland Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 214,
        "roulette": 20,
        "_hd": 908,
        "all": 957
      },
      "real": {
        "BTC": {
          "id": 6371
        },
        "ETH": {
          "id": 6372
        },
        "LTC": {
          "id": 6373
        },
        "XRP": {
          "id": 6374
        }
      }
    },
    "evolution/classic_speed_blackjack_6": {
      "title": "Classic Speed Blackjack 6",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 163,
        "live": 171,
        "_hd": 452,
        "blackjack": 155,
        "all": 468
      },
      "real": {
        "BTC": {
          "id": 6376
        },
        "ETH": {
          "id": 6377
        },
        "LTC": {
          "id": 6378
        },
        "XRP": {
          "id": 6379
        }
      }
    },
    "evolution/speed_baccaratk": {
      "title": "Speed Baccarat K",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 244,
        "card": 210,
        "live": 251,
        "_hd": 1109,
        "baccarat": 26,
        "all": 1162
      },
      "real": {
        "BTC": {
          "id": 6381
        },
        "ETH": {
          "id": 6382
        },
        "LTC": {
          "id": 6383
        },
        "XRP": {
          "id": 6384
        }
      }
    },
    "evolution/blackjack_vip_3": {
      "title": "Blackjack VIP 3",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 82,
        "live": 88,
        "_hd": 285,
        "blackjack": 76,
        "all": 296
      },
      "real": {
        "BTC": {
          "id": 6386
        },
        "ETH": {
          "id": 6387
        },
        "LTC": {
          "id": 6388
        },
        "XRP": {
          "id": 6389
        }
      }
    },
    "evolution/blackjack_vip_s": {
      "title": "Blackjack VIP S",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 109,
        "live": 115,
        "_hd": 312,
        "blackjack": 103,
        "all": 323
      },
      "real": {
        "BTC": {
          "id": 6391
        },
        "ETH": {
          "id": 6392
        },
        "LTC": {
          "id": 6393
        },
        "XRP": {
          "id": 6394
        }
      }
    },
    "evolution/rng-megaball": {
      "title": "First Person Mega Ball",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 192,
        "lottery": 5,
        "game-shows": 5,
        "_hd": 590,
        "all": 615
      },
      "real": {
        "BTC": {
          "id": 6396
        },
        "ETH": {
          "id": 6397
        },
        "LTC": {
          "id": 6398
        },
        "XRP": {
          "id": 6399
        }
      }
    },
    "evolution/dragon_tiger": {
      "title": "Dragon Tiger",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 168,
        "live": 181,
        "_hd": 533,
        "all": 553
      },
      "real": {
        "BTC": {
          "id": 6401
        },
        "ETH": {
          "id": 6402
        },
        "LTC": {
          "id": 6403
        },
        "XRP": {
          "id": 6404
        }
      }
    },
    "evolution/bjclassic18": {
      "title": "Blackjack Classic 18",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 11,
        "live": 17,
        "_hd": 214,
        "blackjack": 5,
        "all": 225
      },
      "real": {
        "BTC": {
          "id": 6406
        },
        "ETH": {
          "id": 6407
        },
        "LTC": {
          "id": 6408
        },
        "XRP": {
          "id": 6409
        }
      }
    },
    "evolution/salon_prive_baccarat_d": {
      "title": "Salon Prive Baccarat D",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 192,
        "live": 230,
        "_hd": 1036,
        "baccarat": 14,
        "all": 1088
      },
      "real": {
        "BTC": {
          "id": 6411
        },
        "ETH": {
          "id": 6412
        },
        "LTC": {
          "id": 6413
        },
        "XRP": {
          "id": 6414
        }
      }
    },
    "evolution/bjclassic29": {
      "title": "Blackjack Classic 29",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 298,
        "card": 21,
        "live": 27,
        "_hd": 224,
        "blackjack": 15,
        "all": 235
      },
      "real": {
        "BTC": {
          "id": 6416
        },
        "ETH": {
          "id": 6417
        },
        "LTC": {
          "id": 6418
        },
        "XRP": {
          "id": 6419
        }
      }
    },
    "evolution/blackjack_diamond_vip": {
      "title": "Blackjack Diamond VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 41,
        "card": 65,
        "live": 71,
        "_hd": 268,
        "blackjack": 59,
        "all": 279
      },
      "real": {
        "BTC": {
          "id": 6421
        },
        "ETH": {
          "id": 6422
        },
        "LTC": {
          "id": 6423
        },
        "XRP": {
          "id": 6424
        }
      }
    },
    "evolution/blackjack_vip_beta": {
      "title": "Blackjack VIP Beta",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 92,
        "live": 98,
        "_hd": 295,
        "blackjack": 86,
        "all": 306
      },
      "real": {
        "BTC": {
          "id": 6426
        },
        "ETH": {
          "id": 6427
        },
        "LTC": {
          "id": 6428
        },
        "XRP": {
          "id": 6429
        }
      }
    },
    "evolution/infinite_blackjack": {
      "title": "Infinite Blackjack",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 167,
        "card": 180,
        "live": 204,
        "_hd": 727,
        "blackjack": 161,
        "all": 765
      },
      "real": {
        "BTC": {
          "id": 6431
        },
        "ETH": {
          "id": 6432
        },
        "LTC": {
          "id": 6433
        },
        "XRP": {
          "id": 6434
        }
      }
    },
    "evolution/speed_baccaratl": {
      "title": "Speed Baccarat L",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 186,
        "card": 211,
        "live": 252,
        "_hd": 1110,
        "baccarat": 27,
        "all": 1163
      },
      "real": {
        "BTC": {
          "id": 6436
        },
        "ETH": {
          "id": 6437
        },
        "LTC": {
          "id": 6438
        },
        "XRP": {
          "id": 6439
        }
      }
    },
    "evolution/blackjack_vip_4": {
      "title": "Blackjack VIP 4",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 83,
        "live": 89,
        "_hd": 286,
        "blackjack": 77,
        "all": 297
      },
      "real": {
        "BTC": {
          "id": 6441
        },
        "ETH": {
          "id": 6442
        },
        "LTC": {
          "id": 6443
        },
        "XRP": {
          "id": 6444
        }
      }
    },
    "evolution/casino_holdem": {
      "title": "Casino Hold'em",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 2,
        "card": 117,
        "live": 124,
        "poker": 3,
        "_hd": 381,
        "all": 396
      },
      "real": {
        "BTC": {
          "id": 6446
        },
        "ETH": {
          "id": 6447
        },
        "LTC": {
          "id": 6448
        },
        "XRP": {
          "id": 6449
        }
      }
    },
    "evolution/lightningdice": {
      "title": "Lightning Dice",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 112,
        "casual": 0,
        "live": 208,
        "game-shows": 9,
        "_hd": 792,
        "all": 833
      },
      "real": {
        "BTC": {
          "id": 6451
        },
        "ETH": {
          "id": 6452
        },
        "LTC": {
          "id": 6453
        },
        "XRP": {
          "id": 6454
        }
      }
    },
    "evolution/blackjack_vip_t": {
      "title": "Blackjack VIP T",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 110,
        "live": 116,
        "_hd": 313,
        "blackjack": 104,
        "all": 324
      },
      "real": {
        "BTC": {
          "id": 6456
        },
        "ETH": {
          "id": 6457
        },
        "LTC": {
          "id": 6458
        },
        "XRP": {
          "id": 6459
        }
      }
    },
    "evolution/roulette": {
      "title": "Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 222,
        "roulette": 22,
        "_hd": 1013,
        "all": 1064
      },
      "real": {
        "BTC": {
          "id": 6461
        },
        "ETH": {
          "id": 6462
        },
        "LTC": {
          "id": 6463
        },
        "XRP": {
          "id": 6464
        }
      }
    },
    "evolution/salon_private_baccarat_2": {
      "title": "Salon Prive Baccarat B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 190,
        "live": 228,
        "_hd": 1034,
        "baccarat": 12,
        "all": 1086
      },
      "real": {
        "BTC": {
          "id": 6466
        },
        "ETH": {
          "id": 6467
        },
        "LTC": {
          "id": 6468
        },
        "XRP": {
          "id": 6469
        }
      }
    },
    "evolution/diamond_vip": {
      "title": "Diamond VIP",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 167,
        "live": 179,
        "_hd": 514,
        "all": 533
      },
      "real": {
        "BTC": {
          "id": 6471
        },
        "ETH": {
          "id": 6472
        },
        "LTC": {
          "id": 6473
        },
        "XRP": {
          "id": 6474
        }
      }
    },
    "evolution/americanroulette": {
      "title": "American Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 1,
        "roulette": 0,
        "_hd": 153,
        "all": 157
      },
      "real": {
        "BTC": {
          "id": 6476
        },
        "ETH": {
          "id": 6477
        },
        "LTC": {
          "id": 6478
        },
        "XRP": {
          "id": 6479
        }
      }
    },
    "evolution/bjclassic19": {
      "title": "Classic Speed Blackjack 19",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 97,
        "card": 127,
        "live": 135,
        "_hd": 416,
        "blackjack": 119,
        "all": 432
      },
      "real": {
        "BTC": {
          "id": 6481
        },
        "ETH": {
          "id": 6482
        },
        "LTC": {
          "id": 6483
        },
        "XRP": {
          "id": 6484
        }
      }
    },
    "evolution/salon_prive_baccarat_e": {
      "title": "Salon Prive Baccarat E",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 193,
        "live": 231,
        "_hd": 1037,
        "baccarat": 15,
        "all": 1089
      },
      "real": {
        "BTC": {
          "id": 6486
        },
        "ETH": {
          "id": 6487
        },
        "LTC": {
          "id": 6488
        },
        "XRP": {
          "id": 6489
        }
      }
    },
    "evolution/auto_la_partage": {
      "title": "Auto-Roulette La Partage",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 5,
        "roulette": 4,
        "_hd": 170,
        "all": 175
      },
      "real": {
        "BTC": {
          "id": 6491
        },
        "ETH": {
          "id": 6492
        },
        "LTC": {
          "id": 6493
        },
        "XRP": {
          "id": 6494
        }
      }
    },
    "evolution/speed_baccaratm": {
      "title": "Speed Baccarat M",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 154,
        "card": 212,
        "live": 253,
        "_hd": 1111,
        "baccarat": 28,
        "all": 1164
      },
      "real": {
        "BTC": {
          "id": 6496
        },
        "ETH": {
          "id": 6497
        },
        "LTC": {
          "id": 6498
        },
        "XRP": {
          "id": 6499
        }
      }
    },
    "evolution/blackjack_vip_5": {
      "title": "Blackjack VIP 5",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 84,
        "live": 90,
        "_hd": 287,
        "blackjack": 78,
        "all": 298
      },
      "real": {
        "BTC": {
          "id": 6501
        },
        "ETH": {
          "id": 6502
        },
        "LTC": {
          "id": 6503
        },
        "XRP": {
          "id": 6504
        }
      }
    },
    "evolution/nocomm_speed_baccaratb": {
      "title": "No Comm Speed Baccarat B",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 308,
        "card": 184,
        "live": 216,
        "_hd": 917,
        "baccarat": 8,
        "all": 966
      },
      "real": {
        "BTC": {
          "id": 6506
        },
        "ETH": {
          "id": 6507
        },
        "LTC": {
          "id": 6508
        },
        "XRP": {
          "id": 6509
        }
      }
    },
    "evolution/classic_speed_blackjack_9": {
      "title": "Classic Speed Blackjack 9",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 166,
        "live": 174,
        "_hd": 455,
        "blackjack": 158,
        "all": 471
      },
      "real": {
        "BTC": {
          "id": 6511
        },
        "ETH": {
          "id": 6512
        },
        "LTC": {
          "id": 6513
        },
        "XRP": {
          "id": 6514
        }
      }
    },
    "evolution/speed_baccaratn": {
      "title": "Speed Baccarat N",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 43,
        "card": 213,
        "live": 254,
        "_hd": 1112,
        "baccarat": 29,
        "all": 1165
      },
      "real": {
        "BTC": {
          "id": 6516
        },
        "ETH": {
          "id": 6517
        },
        "LTC": {
          "id": 6518
        },
        "XRP": {
          "id": 6519
        }
      }
    },
    "evolution/blackjack_vip_6": {
      "title": "Blackjack VIP 6",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 85,
        "live": 91,
        "_hd": 288,
        "blackjack": 79,
        "all": 299
      },
      "real": {
        "BTC": {
          "id": 6521
        },
        "ETH": {
          "id": 6522
        },
        "LTC": {
          "id": 6523
        },
        "XRP": {
          "id": 6524
        }
      }
    },
    "evolution/rng-craps": {
      "title": "First Person Craps",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 186,
        "craps": 1,
        "_hd": 584,
        "all": 609
      },
      "real": {
        "BTC": {
          "id": 6526
        },
        "ETH": {
          "id": 6527
        },
        "LTC": {
          "id": 6528
        },
        "XRP": {
          "id": 6529
        }
      }
    },
    "evolution/blackjack_vip_v": {
      "title": "Blackjack VIP V",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 112,
        "live": 118,
        "_hd": 315,
        "blackjack": 106,
        "all": 326
      },
      "real": {
        "BTC": {
          "id": 6531
        },
        "ETH": {
          "id": 6532
        },
        "LTC": {
          "id": 6533
        },
        "XRP": {
          "id": 6534
        }
      }
    },
    "evolution/nocomm_speed_baccaratc": {
      "title": "No Comm Speed Baccarat C",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 236,
        "card": 185,
        "live": 217,
        "_hd": 918,
        "baccarat": 9,
        "all": 967
      },
      "real": {
        "BTC": {
          "id": 6536
        },
        "ETH": {
          "id": 6537
        },
        "LTC": {
          "id": 6538
        },
        "XRP": {
          "id": 6539
        }
      }
    },
    "evolution/roulette_direct": {
      "title": "Roulette Live",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 107,
        "live": 224,
        "roulette": 24,
        "_hd": 1015,
        "all": 1066
      },
      "real": {
        "BTC": {
          "id": 6541
        },
        "ETH": {
          "id": 6542
        },
        "LTC": {
          "id": 6543
        },
        "XRP": {
          "id": 6544
        }
      }
    },
    "evolution/vip_roulette": {
      "title": "VIP Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 279,
        "roulette": 33,
        "_hd": 1253,
        "all": 1308
      },
      "real": {
        "BTC": {
          "id": 6546
        },
        "ETH": {
          "id": 6547
        },
        "LTC": {
          "id": 6548
        },
        "XRP": {
          "id": 6549
        }
      }
    },
    "evolution/speed_baccarato": {
      "title": "Speed Baccarat O",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 315,
        "card": 214,
        "live": 255,
        "_hd": 1113,
        "baccarat": 30,
        "all": 1166
      },
      "real": {
        "BTC": {
          "id": 6551
        },
        "ETH": {
          "id": 6552
        },
        "LTC": {
          "id": 6553
        },
        "XRP": {
          "id": 6554
        }
      }
    },
    "evolution/blackjack_vip_7": {
      "title": "Blackjack VIP 7",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 86,
        "live": 92,
        "_hd": 289,
        "blackjack": 80,
        "all": 300
      },
      "real": {
        "BTC": {
          "id": 6556
        },
        "ETH": {
          "id": 6557
        },
        "LTC": {
          "id": 6558
        },
        "XRP": {
          "id": 6559
        }
      }
    },
    "evolution/BlackjacVIPGamma": {
      "title": "Blackjack VIP Gamma",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 98,
        "live": 104,
        "_hd": 301,
        "blackjack": 92,
        "all": 312
      },
      "real": {
        "BTC": {
          "id": 6561
        },
        "ETH": {
          "id": 6562
        },
        "LTC": {
          "id": 6563
        },
        "XRP": {
          "id": 6564
        }
      }
    },
    "evolution/instantroulette": {
      "title": "Instant Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 99,
        "live": 205,
        "roulette": 16,
        "_hd": 728,
        "all": 766
      },
      "real": {
        "BTC": {
          "id": 6566
        },
        "ETH": {
          "id": 6567
        },
        "LTC": {
          "id": 6568
        },
        "XRP": {
          "id": 6569
        }
      }
    },
    "evolution/craps": {
      "title": "Craps",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 196,
        "live": 175,
        "craps": 0,
        "_hd": 474,
        "all": 490
      },
      "real": {
        "BTC": {
          "id": 6571
        },
        "ETH": {
          "id": 6572
        },
        "LTC": {
          "id": 6573
        },
        "XRP": {
          "id": 6574
        }
      }
    },
    "evolution/ultimate_holdem": {
      "title": "Ultimate Texas Hold'em",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 232,
        "live": 278,
        "poker": 5,
        "_hd": 1249,
        "all": 1303
      },
      "real": {
        "BTC": {
          "id": 6576
        },
        "ETH": {
          "id": 6577
        },
        "LTC": {
          "id": 6578
        },
        "XRP": {
          "id": 6579
        }
      }
    },
    "evolution/speed_baccaratp": {
      "title": "Speed Baccarat P",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 156,
        "card": 215,
        "live": 256,
        "_hd": 1114,
        "baccarat": 31,
        "all": 1167
      },
      "real": {
        "BTC": {
          "id": 6581
        },
        "ETH": {
          "id": 6582
        },
        "LTC": {
          "id": 6583
        },
        "XRP": {
          "id": 6584
        }
      }
    },
    "evolution/blackjack_vip_8": {
      "title": "Blackjack VIP 8",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 87,
        "live": 93,
        "_hd": 290,
        "blackjack": 81,
        "all": 301
      },
      "real": {
        "BTC": {
          "id": 6586
        },
        "ETH": {
          "id": 6587
        },
        "LTC": {
          "id": 6588
        },
        "XRP": {
          "id": 6589
        }
      }
    },
    "evolution/lightning_baccarat": {
      "title": "Lightning Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 181,
        "live": 207,
        "game-shows": 8,
        "_hd": 791,
        "baccarat": 6,
        "all": 832
      },
      "real": {
        "BTC": {
          "id": 6591
        },
        "ETH": {
          "id": 6592
        },
        "LTC": {
          "id": 6593
        },
        "XRP": {
          "id": 6594
        }
      }
    },
    "evolution/immersive_roulette": {
      "title": "Immersive Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 175,
        "live": 203,
        "roulette": 15,
        "_hd": 725,
        "all": 763
      },
      "real": {
        "BTC": {
          "id": 6596
        },
        "ETH": {
          "id": 6597
        },
        "LTC": {
          "id": 6598
        },
        "XRP": {
          "id": 6599
        }
      }
    },
    "evolution/super_sicbo": {
      "title": "Super Sic Bo",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 230,
        "live": 273,
        "_hd": 1167,
        "all": 1220
      },
      "real": {
        "BTC": {
          "id": 6601
        },
        "ETH": {
          "id": 6602
        },
        "LTC": {
          "id": 6603
        },
        "XRP": {
          "id": 6604
        }
      }
    },
    "evolution/speed_baccaratq": {
      "title": "Speed Baccarat Q",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 337,
        "card": 216,
        "live": 257,
        "_hd": 1115,
        "baccarat": 32,
        "all": 1168
      },
      "real": {
        "BTC": {
          "id": 6606
        },
        "ETH": {
          "id": 6607
        },
        "LTC": {
          "id": 6608
        },
        "XRP": {
          "id": 6609
        }
      }
    },
    "evolution/blackjack_vip_9": {
      "title": "Blackjack VIP 9",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 88,
        "live": 94,
        "_hd": 291,
        "blackjack": 82,
        "all": 302
      },
      "real": {
        "BTC": {
          "id": 6611
        },
        "ETH": {
          "id": 6612
        },
        "LTC": {
          "id": 6613
        },
        "XRP": {
          "id": 6614
        }
      }
    },
    "evolution/hippodrome_grand": {
      "title": "Hippodrome Grand Casino",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 373,
        "live": 202,
        "roulette": 14,
        "_hd": 692,
        "all": 722
      },
      "real": {
        "BTC": {
          "id": 6616
        },
        "ETH": {
          "id": 6617
        },
        "LTC": {
          "id": 6618
        },
        "XRP": {
          "id": 6619
        }
      }
    },
    "evolution/top_games": {
      "title": "Lobby",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 182,
        "live": 210,
        "_hd": 798,
        "all": 839
      },
      "real": {
        "BTC": {
          "id": 6621
        },
        "ETH": {
          "id": 6622
        },
        "LTC": {
          "id": 6623
        },
        "XRP": {
          "id": 6624
        }
      }
    },
    "evolution/dealnodeal": {
      "title": "Deal or No Deal",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 132,
        "live": 177,
        "lottery": 2,
        "_hd": 496,
        "all": 513
      },
      "real": {
        "BTC": {
          "id": 6626
        },
        "ETH": {
          "id": 6627
        },
        "LTC": {
          "id": 6628
        },
        "XRP": {
          "id": 6629
        }
      }
    },
    "evolution/powerblackjack": {
      "title": "Power BlackJack",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 206,
        "card": 187,
        "live": 220,
        "_hd": 977,
        "blackjack": 162,
        "all": 1027
      },
      "real": {
        "BTC": {
          "id": 6631
        },
        "ETH": {
          "id": 6632
        },
        "LTC": {
          "id": 6633
        },
        "XRP": {
          "id": 6634
        }
      }
    },
    "evolution/turkce_roulette": {
      "title": "Turkce Rulet",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 277,
        "roulette": 32,
        "_hd": 1248,
        "all": 1301
      },
      "real": {
        "BTC": {
          "id": 6636
        },
        "ETH": {
          "id": 6637
        },
        "LTC": {
          "id": 6638
        },
        "XRP": {
          "id": 6639
        }
      }
    },
    "evolution/blackjack_vip_z": {
      "title": "Blackjack VIP Z",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 114,
        "live": 120,
        "_hd": 317,
        "blackjack": 108,
        "all": 328
      },
      "real": {
        "BTC": {
          "id": 6641
        },
        "ETH": {
          "id": 6642
        },
        "LTC": {
          "id": 6643
        },
        "XRP": {
          "id": 6644
        }
      }
    },
    "evolution/salon_private_roulette_one": {
      "title": "Salon Prive Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 238,
        "roulette": 27,
        "_hd": 1044,
        "all": 1096
      },
      "real": {
        "BTC": {
          "id": 6646
        },
        "ETH": {
          "id": 6647
        },
        "LTC": {
          "id": 6648
        },
        "XRP": {
          "id": 6649
        }
      }
    },
    "evolution/top_card": {
      "title": "Football Studio",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 223,
        "card": 176,
        "live": 196,
        "game-shows": 6,
        "_hd": 599,
        "all": 624
      },
      "real": {
        "BTC": {
          "id": 6651
        },
        "ETH": {
          "id": 6652
        },
        "LTC": {
          "id": 6653
        },
        "XRP": {
          "id": 6654
        }
      }
    },
    "evolution/GonzosTreasureHunt": {
      "title": "Gonzo's Treasure Hunt",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 237,
        "card": 179,
        "live": 200,
        "game-shows": 7,
        "_hd": 661,
        "all": 690
      },
      "real": {
        "BTC": {
          "id": 6661
        },
        "ETH": {
          "id": 6662
        },
        "LTC": {
          "id": 6663
        },
        "XRP": {
          "id": 6664
        }
      }
    },
    "evolution/punto_banko": {
      "title": "Punto Banco",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 188,
        "live": 221,
        "_hd": 991,
        "all": 1041
      },
      "real": {
        "BTC": {
          "id": 6666
        },
        "ETH": {
          "id": 6667
        },
        "LTC": {
          "id": 6668
        },
        "XRP": {
          "id": 6669
        }
      }
    },
    "evolution/french_roulette": {
      "title": "Roulette Francophone",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 223,
        "roulette": 23,
        "_hd": 1014,
        "all": 1065
      },
      "real": {
        "BTC": {
          "id": 6671
        },
        "ETH": {
          "id": 6672
        },
        "LTC": {
          "id": 6673
        },
        "XRP": {
          "id": 6674
        }
      }
    },
    "evolution/casino_malta": {
      "title": "Casino Malta Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 125,
        "roulette": 6,
        "_hd": 382,
        "all": 397
      },
      "real": {
        "BTC": {
          "id": 6676
        },
        "ETH": {
          "id": 6677
        },
        "LTC": {
          "id": 6678
        },
        "XRP": {
          "id": 6679
        }
      }
    },
    "evolution/blackjack_white_1": {
      "title": "Speed Blackjack K",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 223,
        "live": 264,
        "_hd": 1122,
        "blackjack": 175,
        "all": 1175
      },
      "real": {
        "BTC": {
          "id": 6681
        },
        "ETH": {
          "id": 6682
        },
        "LTC": {
          "id": 6683
        },
        "XRP": {
          "id": 6684
        }
      }
    },
    "evolution/blackjack_white_2": {
      "title": "Speed Blackjack L",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 224,
        "live": 265,
        "_hd": 1123,
        "blackjack": 176,
        "all": 1176
      },
      "real": {
        "BTC": {
          "id": 6686
        },
        "ETH": {
          "id": 6687
        },
        "LTC": {
          "id": 6688
        },
        "XRP": {
          "id": 6689
        }
      }
    },
    "evolution/blackjack_vip_alpha": {
      "title": "Blackjack VIP Alpha",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 90,
        "live": 96,
        "_hd": 293,
        "blackjack": 84,
        "all": 304
      },
      "real": {
        "BTC": {
          "id": 6691
        },
        "ETH": {
          "id": 6692
        },
        "LTC": {
          "id": 6693
        },
        "XRP": {
          "id": 6694
        }
      }
    },
    "evolution/london_roulette": {
      "title": "London Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 211,
        "roulette": 19,
        "_hd": 801,
        "all": 842
      },
      "real": {
        "BTC": {
          "id": 6696
        },
        "ETH": {
          "id": 6697
        },
        "LTC": {
          "id": 6698
        },
        "XRP": {
          "id": 6699
        }
      }
    },
    "evolution/blackjack_white_3": {
      "title": "Speed Blackjack M",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 225,
        "live": 266,
        "_hd": 1124,
        "blackjack": 177,
        "all": 1177
      },
      "real": {
        "BTC": {
          "id": 6701
        },
        "ETH": {
          "id": 6702
        },
        "LTC": {
          "id": 6703
        },
        "XRP": {
          "id": 6704
        }
      }
    },
    "evolution/blackjack_vip": {
      "title": "Blackjack VIP I",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 100,
        "live": 106,
        "_hd": 303,
        "blackjack": 94,
        "all": 314
      },
      "real": {
        "BTC": {
          "id": 6706
        },
        "ETH": {
          "id": 6707
        },
        "LTC": {
          "id": 6708
        },
        "XRP": {
          "id": 6709
        }
      }
    },
    "evolution/russian_roulette": {
      "title": "Ruletka Live",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 146,
        "live": 226,
        "roulette": 26,
        "_hd": 1025,
        "all": 1077
      },
      "real": {
        "BTC": {
          "id": 6711
        },
        "ETH": {
          "id": 6712
        },
        "LTC": {
          "id": 6713
        },
        "XRP": {
          "id": 6714
        }
      }
    },
    "evolution/super_six": {
      "title": "No Commission Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 355,
        "card": 186,
        "live": 218,
        "_hd": 919,
        "baccarat": 10,
        "all": 968
      },
      "real": {
        "BTC": {
          "id": 6716
        },
        "ETH": {
          "id": 6717
        },
        "LTC": {
          "id": 6718
        },
        "XRP": {
          "id": 6719
        }
      }
    },
    "evolution/crazytime": {
      "title": "Crazy Time",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 1,
        "live": 176,
        "lottery": 1,
        "game-shows": 1,
        "_hd": 480,
        "all": 496
      },
      "real": {
        "BTC": {
          "id": 6721
        },
        "ETH": {
          "id": 6722
        },
        "LTC": {
          "id": 6723
        },
        "XRP": {
          "id": 6724
        }
      }
    },
    "evolution/blackjack_classic1": {
      "title": "Classic Speed Blackjack 4",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 150,
        "live": 158,
        "_hd": 439,
        "blackjack": 142,
        "all": 455
      },
      "real": {
        "BTC": {
          "id": 6726
        },
        "ETH": {
          "id": 6727
        },
        "LTC": {
          "id": 6728
        },
        "XRP": {
          "id": 6729
        }
      }
    },
    "evolution/blackjack": {
      "title": "Blackjack",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 6,
        "live": 12,
        "_hd": 209,
        "blackjack": 0,
        "all": 220
      },
      "real": {
        "BTC": {
          "id": 6731
        },
        "ETH": {
          "id": 6732
        },
        "LTC": {
          "id": 6733
        },
        "XRP": {
          "id": 6734
        }
      }
    },
    "evolution/roulette_rng": {
      "title": "First Person Lightning Roulette",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "live": 191,
        "roulette": 9,
        "game-shows": 4,
        "_hd": 589,
        "all": 614
      },
      "real": {
        "BTC": {
          "id": 6736
        },
        "ETH": {
          "id": 6737
        },
        "LTC": {
          "id": 6738
        },
        "XRP": {
          "id": 6739
        }
      }
    },
    "evolution/blackjack_vip_a": {
      "title": "Blackjack VIP A",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 89,
        "live": 95,
        "_hd": 292,
        "blackjack": 83,
        "all": 303
      },
      "real": {
        "BTC": {
          "id": 6741
        },
        "ETH": {
          "id": 6742
        },
        "LTC": {
          "id": 6743
        },
        "XRP": {
          "id": 6744
        }
      }
    },
    "amatic/BookofFruits": {
      "title": "Book of Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 310,
        "slots": 143,
        "_hd": 332,
        "all": 346
      },
      "real": {
        "BTC": {
          "id": 6745
        },
        "DOG": {
          "id": 6746
        },
        "ETH": {
          "id": 6747
        },
        "LTC": {
          "id": 6749
        }
      },
      "demo": "/games/amatic/BookofFruits/6748"
    },
    "amatic/WildRespin": {
      "title": "Wild Respin",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 138,
        "slots": 1072,
        "all": 1355
      },
      "real": {
        "BTC": {
          "id": 6751
        },
        "DOG": {
          "id": 6752
        },
        "ETH": {
          "id": 6753
        },
        "LTC": {
          "id": 6755
        }
      },
      "demo": "/games/amatic/WildRespin/6754"
    },
    "amatic/GemStar": {
      "title": "Gem Star",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 341,
        "slots": 408,
        "all": 661
      },
      "real": {
        "BTC": {
          "id": 6757
        },
        "DOG": {
          "id": 6758
        },
        "ETH": {
          "id": 6759
        },
        "LTC": {
          "id": 6761
        }
      },
      "demo": "/games/amatic/GemStar/6760"
    },
    "amatic/BookOfFortune": {
      "title": "Book Of Fortune",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 23,
        "slots": 134,
        "all": 338
      },
      "real": {
        "BTC": {
          "id": 6763
        },
        "DOG": {
          "id": 6764
        },
        "ETH": {
          "id": 6765
        },
        "LTC": {
          "id": 6767
        }
      },
      "demo": "/games/amatic/BookOfFortune/6766"
    },
    "amatic/DragonsMystery": {
      "title": "Dragon's Mystery",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 231,
        "slots": 315,
        "_hd": 539,
        "all": 559
      },
      "real": {
        "BTC": {
          "id": 6769
        },
        "DOG": {
          "id": 6770
        },
        "ETH": {
          "id": 6771
        },
        "LTC": {
          "id": 6773
        }
      },
      "demo": "/games/amatic/DragonsMystery/6772"
    },
    "amatic/LovelyLadyDeluxe": {
      "title": "Lovely Lady Deluxe",
      "provider": "amatic",
      "collections": {
        "novelty": 95,
        "popularity": 19,
        "slots": 598,
        "_hd": 808,
        "all": 850
      },
      "real": {
        "BTC": {
          "id": 6775
        },
        "DOG": {
          "id": 6776
        },
        "ETH": {
          "id": 6777
        },
        "LTC": {
          "id": 6779
        }
      },
      "demo": "/games/amatic/LovelyLadyDeluxe/6778"
    },
    "amatic/Casinova": {
      "title": "Casinova",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 208,
        "slots": 196,
        "all": 398
      },
      "real": {
        "BTC": {
          "id": 6781
        },
        "DOG": {
          "id": 6782
        },
        "ETH": {
          "id": 6783
        },
        "LTC": {
          "id": 6785
        }
      },
      "demo": "/games/amatic/Casinova/6784"
    },
    "amatic/PharaohsGold20": {
      "title": "Pharaohs Gold 20",
      "provider": "amatic",
      "collections": {
        "novelty": 9,
        "popularity": 398,
        "slots": 756,
        "_hd": 952,
        "all": 1002
      },
      "real": {
        "BTC": {
          "id": 6787
        },
        "DOG": {
          "id": 6788
        },
        "ETH": {
          "id": 6789
        },
        "LTC": {
          "id": 6791
        }
      },
      "demo": "/games/amatic/PharaohsGold20/6790"
    },
    "amatic/HotFruitsDeluxe": {
      "title": "Hot Fruits Deluxe",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 490,
        "_hd": 707,
        "all": 741
      },
      "real": {
        "BTC": {
          "id": 6793
        },
        "DOG": {
          "id": 6794
        },
        "ETH": {
          "id": 6795
        },
        "LTC": {
          "id": 6797
        }
      },
      "demo": "/games/amatic/HotFruitsDeluxe/6796"
    },
    "amatic/FlyingDutchman": {
      "title": "Flying Dutchman",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 370,
        "_hd": 597,
        "all": 622
      },
      "real": {
        "BTC": {
          "id": 6799
        },
        "DOG": {
          "id": 6800
        },
        "ETH": {
          "id": 6801
        },
        "LTC": {
          "id": 6803
        }
      },
      "demo": "/games/amatic/FlyingDutchman/6802"
    },
    "amatic/CasanovasLadies": {
      "title": "Casanovas Ladies",
      "provider": "amatic",
      "collections": {
        "novelty": 103,
        "popularity": 398,
        "slots": 191,
        "_hd": 375,
        "all": 390
      },
      "real": {
        "BTC": {
          "id": 6805
        },
        "DOG": {
          "id": 6806
        },
        "ETH": {
          "id": 6807
        },
        "LTC": {
          "id": 6809
        }
      },
      "demo": "/games/amatic/CasanovasLadies/6808"
    },
    "amatic/UltraSeven": {
      "title": "Ultra Seven",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1022,
        "all": 1306
      },
      "real": {
        "BTC": {
          "id": 6811
        },
        "DOG": {
          "id": 6812
        },
        "ETH": {
          "id": 6813
        },
        "LTC": {
          "id": 6815
        }
      },
      "demo": "/games/amatic/UltraSeven/6814"
    },
    "amatic/HotNeon": {
      "title": "Hot Neon",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 493,
        "all": 744
      },
      "real": {
        "BTC": {
          "id": 6817
        },
        "DOG": {
          "id": 6818
        },
        "ETH": {
          "id": 6819
        },
        "LTC": {
          "id": 6821
        }
      },
      "demo": "/games/amatic/HotNeon/6820"
    },
    "amatic/AllwaysFruits": {
      "title": "Allways Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 64,
        "all": 153
      },
      "real": {
        "BTC": {
          "id": 6823
        },
        "DOG": {
          "id": 6824
        },
        "ETH": {
          "id": 6825
        },
        "LTC": {
          "id": 6827
        }
      },
      "demo": "/games/amatic/AllwaysFruits/6826"
    },
    "amatic/BlueDolphin": {
      "title": "Blue Dolphin",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 142,
        "slots": 130,
        "all": 334
      },
      "real": {
        "BTC": {
          "id": 6829
        },
        "DOG": {
          "id": 6830
        },
        "ETH": {
          "id": 6831
        },
        "LTC": {
          "id": 6833
        }
      },
      "demo": "/games/amatic/BlueDolphin/6832"
    },
    "amatic/LuckyZodiac": {
      "title": "Lucky Zodiac",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 29,
        "slots": 632,
        "all": 882
      },
      "real": {
        "BTC": {
          "id": 6835
        },
        "DOG": {
          "id": 6836
        },
        "ETH": {
          "id": 6837
        },
        "LTC": {
          "id": 6839
        }
      },
      "demo": "/games/amatic/LuckyZodiac/6838"
    },
    "amatic/GrandCasanova": {
      "title": "Grand Casanova",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 28,
        "slots": 438,
        "_hd": 662,
        "all": 691
      },
      "real": {
        "BTC": {
          "id": 6841
        },
        "DOG": {
          "id": 6842
        },
        "ETH": {
          "id": 6843
        },
        "LTC": {
          "id": 6845
        }
      },
      "demo": "/games/amatic/GrandCasanova/6844"
    },
    "amatic/BellsOnFire": {
      "title": "Bells On Fire",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 350,
        "slots": 110,
        "all": 204
      },
      "real": {
        "BTC": {
          "id": 6847
        },
        "DOG": {
          "id": 6848
        },
        "ETH": {
          "id": 6849
        },
        "LTC": {
          "id": 6851
        }
      },
      "demo": "/games/amatic/BellsOnFire/6850"
    },
    "amatic/HotChoiceDeluxe": {
      "title": "Hot Choice Deluxe",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 481,
        "_hd": 700,
        "all": 733
      },
      "real": {
        "BTC": {
          "id": 6853
        },
        "DOG": {
          "id": 6854
        },
        "ETH": {
          "id": 6855
        },
        "LTC": {
          "id": 6857
        }
      },
      "demo": "/games/amatic/HotChoiceDeluxe/6856"
    },
    "amatic/MagicIdol": {
      "title": "Magic Idol",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 128,
        "slots": 640,
        "all": 889
      },
      "real": {
        "BTC": {
          "id": 6859
        },
        "DOG": {
          "id": 6860
        },
        "ETH": {
          "id": 6861
        },
        "LTC": {
          "id": 6863
        }
      },
      "demo": "/games/amatic/MagicIdol/6862"
    },
    "amatic/LuckyJoker100": {
      "title": "Lucky Joker 100",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 617,
        "_hd": 823,
        "all": 867
      },
      "real": {
        "BTC": {
          "id": 6865
        },
        "DOG": {
          "id": 6866
        },
        "ETH": {
          "id": 6867
        },
        "LTC": {
          "id": 6869
        }
      },
      "demo": "/games/amatic/LuckyJoker100/6868"
    },
    "amatic/BeautyWarrior": {
      "title": "Beauty Warrior",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 107,
        "_hd": 195,
        "all": 201
      },
      "real": {
        "BTC": {
          "id": 6871
        },
        "DOG": {
          "id": 6872
        },
        "ETH": {
          "id": 6873
        },
        "LTC": {
          "id": 6875
        }
      },
      "demo": "/games/amatic/BeautyWarrior/6874"
    },
    "amatic/Hot81": {
      "title": "Hot 81",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 351,
        "slots": 477,
        "all": 729
      },
      "real": {
        "BTC": {
          "id": 6877
        },
        "DOG": {
          "id": 6878
        },
        "ETH": {
          "id": 6879
        },
        "LTC": {
          "id": 6881
        }
      },
      "demo": "/games/amatic/Hot81/6880"
    },
    "amatic/HotFruits100": {
      "title": "Hot Fruits 100",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 486,
        "_hd": 703,
        "all": 737
      },
      "real": {
        "BTC": {
          "id": 6883
        },
        "DOG": {
          "id": 6884
        },
        "ETH": {
          "id": 6885
        },
        "LTC": {
          "id": 6887
        }
      },
      "demo": "/games/amatic/HotFruits100/6886"
    },
    "amatic/Vampires": {
      "title": "Vampires",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 286,
        "slots": 1026,
        "all": 1311
      },
      "real": {
        "BTC": {
          "id": 6889
        },
        "DOG": {
          "id": 6890
        },
        "ETH": {
          "id": 6891
        },
        "LTC": {
          "id": 6893
        }
      },
      "demo": "/games/amatic/Vampires/6892"
    },
    "amatic/DiamondMonkey": {
      "title": "Diamond Monkey",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 283,
        "all": 529
      },
      "real": {
        "BTC": {
          "id": 6895
        },
        "DOG": {
          "id": 6896
        },
        "ETH": {
          "id": 6897
        },
        "LTC": {
          "id": 6899
        }
      },
      "demo": "/games/amatic/DiamondMonkey/6898"
    },
    "amatic/SakuraFruits": {
      "title": "Sakura Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 837,
        "_hd": 1030,
        "all": 1082
      },
      "real": {
        "BTC": {
          "id": 6901
        },
        "DOG": {
          "id": 6902
        },
        "ETH": {
          "id": 6903
        },
        "LTC": {
          "id": 6905
        }
      },
      "demo": "/games/amatic/SakuraFruits/6904"
    },
    "amatic/HotFruits40": {
      "title": "Hot Fruits 40",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 489,
        "_hd": 706,
        "all": 740
      },
      "real": {
        "BTC": {
          "id": 6907
        },
        "DOG": {
          "id": 6908
        },
        "ETH": {
          "id": 6909
        },
        "LTC": {
          "id": 6911
        }
      },
      "demo": "/games/amatic/HotFruits40/6910"
    },
    "amatic/DragonsPearl": {
      "title": "Dragons Pearl",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 320,
        "all": 564
      },
      "real": {
        "BTC": {
          "id": 6913
        },
        "DOG": {
          "id": 6914
        },
        "ETH": {
          "id": 6915
        },
        "LTC": {
          "id": 6917
        }
      },
      "demo": "/games/amatic/DragonsPearl/6916"
    },
    "amatic/FieryFruits": {
      "title": "Fiery Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 70,
        "popularity": 398,
        "slots": 354,
        "_hd": 572,
        "all": 596
      },
      "real": {
        "BTC": {
          "id": 6919
        },
        "DOG": {
          "id": 6920
        },
        "ETH": {
          "id": 6921
        },
        "LTC": {
          "id": 6923
        }
      },
      "demo": "/games/amatic/FieryFruits/6922"
    },
    "amatic/WildVolcano": {
      "title": "Wild Volcano",
      "provider": "amatic",
      "collections": {
        "novelty": 43,
        "popularity": 398,
        "slots": 1078,
        "_hd": 1300,
        "all": 1361
      },
      "real": {
        "BTC": {
          "id": 6925
        },
        "DOG": {
          "id": 6926
        },
        "ETH": {
          "id": 6927
        },
        "LTC": {
          "id": 6929
        }
      },
      "demo": "/games/amatic/WildVolcano/6928"
    },
    "amatic/DiaMuertos": {
      "title": "Dia Muertos",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 280,
        "_hd": 509,
        "all": 526
      },
      "real": {
        "BTC": {
          "id": 6931
        },
        "DOG": {
          "id": 6932
        },
        "ETH": {
          "id": 6933
        },
        "LTC": {
          "id": 6935
        }
      },
      "demo": "/games/amatic/DiaMuertos/6934"
    },
    "amatic/LadyJoker": {
      "title": "Lady Joker",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 572,
        "all": 820
      },
      "real": {
        "BTC": {
          "id": 6937
        },
        "DOG": {
          "id": 6938
        },
        "ETH": {
          "id": 6939
        },
        "LTC": {
          "id": 6941
        }
      },
      "demo": "/games/amatic/LadyJoker/6940"
    },
    "amatic/AllwaysHotFruits": {
      "title": "Allways Hot Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 65,
        "_hd": 151,
        "all": 154
      },
      "real": {
        "BTC": {
          "id": 6943
        },
        "DOG": {
          "id": 6944
        },
        "ETH": {
          "id": 6945
        },
        "LTC": {
          "id": 6947
        }
      },
      "demo": "/games/amatic/AllwaysHotFruits/6946"
    },
    "amatic/EnchantedCleopatra": {
      "title": "Enchanted Cleopatra",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 264,
        "slots": 335,
        "_hd": 555,
        "all": 577
      },
      "real": {
        "BTC": {
          "id": 6949
        },
        "DOG": {
          "id": 6950
        },
        "ETH": {
          "id": 6951
        },
        "LTC": {
          "id": 6953
        }
      },
      "demo": "/games/amatic/EnchantedCleopatra/6952"
    },
    "amatic/AztecSecret": {
      "title": "Aztec Secret",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 25,
        "slots": 93,
        "all": 184
      },
      "real": {
        "BTC": {
          "id": 6955
        },
        "DOG": {
          "id": 6956
        },
        "ETH": {
          "id": 6957
        },
        "LTC": {
          "id": 6959
        }
      },
      "demo": "/games/amatic/AztecSecret/6958"
    },
    "amatic/Hot40": {
      "title": "Hot 40",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 475,
        "_hd": 697,
        "all": 727
      },
      "real": {
        "BTC": {
          "id": 6961
        },
        "DOG": {
          "id": 6962
        },
        "ETH": {
          "id": 6963
        },
        "LTC": {
          "id": 6965
        }
      },
      "demo": "/games/amatic/Hot40/6964"
    },
    "amatic/LadyFruits20": {
      "title": "Lady Fruits 20",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 100,
        "slots": 569,
        "_hd": 777,
        "all": 817
      },
      "real": {
        "BTC": {
          "id": 6967
        },
        "DOG": {
          "id": 6968
        },
        "ETH": {
          "id": 6969
        },
        "LTC": {
          "id": 6971
        }
      },
      "demo": "/games/amatic/LadyFruits20/6970"
    },
    "amatic/LuckyJoker40": {
      "title": "Lucky Joker 40",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 619,
        "_hd": 825,
        "all": 869
      },
      "real": {
        "BTC": {
          "id": 6973
        },
        "DOG": {
          "id": 6974
        },
        "ETH": {
          "id": 6975
        },
        "LTC": {
          "id": 6977
        }
      },
      "demo": "/games/amatic/LuckyJoker40/6976"
    },
    "amatic/GoldenJoker": {
      "title": "Golden Joker",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 431,
        "_hd": 653,
        "all": 682
      },
      "real": {
        "BTC": {
          "id": 6979
        },
        "DOG": {
          "id": 6980
        },
        "ETH": {
          "id": 6981
        },
        "LTC": {
          "id": 6983
        }
      },
      "demo": "/games/amatic/GoldenJoker/6982"
    },
    "amatic/BellsonFireHot": {
      "title": "Bells on Fire Hot",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 112,
        "_hd": 198,
        "all": 206
      },
      "real": {
        "BTC": {
          "id": 6985
        },
        "DOG": {
          "id": 6986
        },
        "ETH": {
          "id": 6987
        },
        "LTC": {
          "id": 6989
        }
      },
      "demo": "/games/amatic/BellsonFireHot/6988"
    },
    "amatic/MagicForest": {
      "title": "Magic Forest",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 222,
        "slots": 639,
        "all": 888
      },
      "real": {
        "BTC": {
          "id": 6991
        },
        "DOG": {
          "id": 6992
        },
        "ETH": {
          "id": 6993
        },
        "LTC": {
          "id": 6995
        }
      },
      "demo": "/games/amatic/MagicForest/6994"
    },
    "amatic/BookofQueen": {
      "title": "Book of Queen",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 184,
        "slots": 151,
        "_hd": 339,
        "all": 353
      },
      "real": {
        "BTC": {
          "id": 6997
        },
        "DOG": {
          "id": 6998
        },
        "ETH": {
          "id": 6999
        },
        "LTC": {
          "id": 7001
        }
      },
      "demo": "/games/amatic/BookofQueen/7000"
    },
    "amatic/LuckyJoker5": {
      "title": "Lucky Joker 5",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 620,
        "_hd": 826,
        "all": 870
      },
      "real": {
        "BTC": {
          "id": 7003
        },
        "DOG": {
          "id": 7004
        },
        "ETH": {
          "id": 7005
        },
        "LTC": {
          "id": 7007
        }
      },
      "demo": "/games/amatic/LuckyJoker5/7006"
    },
    "amatic/LuckyBells": {
      "title": "Lucky Bells",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 601,
        "all": 852
      },
      "real": {
        "BTC": {
          "id": 7009
        },
        "DOG": {
          "id": 7010
        },
        "ETH": {
          "id": 7011
        },
        "LTC": {
          "id": 7013
        }
      },
      "demo": "/games/amatic/LuckyBells/7012"
    },
    "amatic/HotFruits20": {
      "title": "Hot Fruits 20",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 487,
        "_hd": 704,
        "all": 738
      },
      "real": {
        "BTC": {
          "id": 7015
        },
        "DOG": {
          "id": 7016
        },
        "ETH": {
          "id": 7017
        },
        "LTC": {
          "id": 7019
        }
      },
      "demo": "/games/amatic/HotFruits20/7018"
    },
    "amatic/ArisingPhoenix": {
      "title": "Arising Phoenix",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 60,
        "slots": 80,
        "all": 170
      },
      "real": {
        "BTC": {
          "id": 7021
        },
        "DOG": {
          "id": 7022
        },
        "ETH": {
          "id": 7023
        },
        "LTC": {
          "id": 7025
        }
      },
      "demo": "/games/amatic/ArisingPhoenix/7024"
    },
    "amatic/HotScatterDeluxe": {
      "title": "Hot Scatter Deluxe",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 496,
        "_hd": 711,
        "all": 747
      },
      "real": {
        "BTC": {
          "id": 7027
        },
        "DOG": {
          "id": 7028
        },
        "ETH": {
          "id": 7029
        },
        "LTC": {
          "id": 7031
        }
      },
      "demo": "/games/amatic/HotScatterDeluxe/7030"
    },
    "amatic/CoolDiamondsII": {
      "title": "Cool Diamonds II",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 239,
        "_hd": 469,
        "all": 485
      },
      "real": {
        "BTC": {
          "id": 7033
        },
        "DOG": {
          "id": 7034
        },
        "ETH": {
          "id": 7035
        },
        "LTC": {
          "id": 7037
        }
      },
      "demo": "/games/amatic/CoolDiamondsII/7036"
    },
    "amatic/HotFruits10": {
      "title": "Hot Fruits 10",
      "provider": "amatic",
      "collections": {
        "novelty": 33,
        "popularity": 398,
        "slots": 485,
        "_hd": 702,
        "all": 736
      },
      "real": {
        "BTC": {
          "id": 7039
        },
        "DOG": {
          "id": 7040
        },
        "ETH": {
          "id": 7041
        },
        "LTC": {
          "id": 7043
        }
      },
      "demo": "/games/amatic/HotFruits10/7042"
    },
    "amatic/GrandFruits": {
      "title": "Grand Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 439,
        "_hd": 663,
        "all": 692
      },
      "real": {
        "BTC": {
          "id": 7045
        },
        "DOG": {
          "id": 7046
        },
        "ETH": {
          "id": 7047
        },
        "LTC": {
          "id": 7049
        }
      },
      "demo": "/games/amatic/GrandFruits/7048"
    },
    "amatic/LuckyJoker20": {
      "title": "Lucky Joker 20",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 618,
        "_hd": 824,
        "all": 868
      },
      "real": {
        "BTC": {
          "id": 7051
        },
        "DOG": {
          "id": 7052
        },
        "ETH": {
          "id": 7053
        },
        "LTC": {
          "id": 7055
        }
      },
      "demo": "/games/amatic/LuckyJoker20/7054"
    },
    "amatic/HotDiamonds": {
      "title": "Hot Diamonds",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 482,
        "all": 734
      },
      "real": {
        "BTC": {
          "id": 7057
        },
        "DOG": {
          "id": 7058
        },
        "ETH": {
          "id": 7059
        },
        "LTC": {
          "id": 7061
        }
      },
      "demo": "/games/amatic/HotDiamonds/7060"
    },
    "amatic/Hot7": {
      "title": "Hot 7",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 476,
        "all": 728
      },
      "real": {
        "BTC": {
          "id": 7063
        },
        "DOG": {
          "id": 7064
        },
        "ETH": {
          "id": 7065
        },
        "LTC": {
          "id": 7067
        }
      },
      "demo": "/games/amatic/Hot7/7066"
    },
    "amatic/MermaidsGold": {
      "title": "Mermaids Gold",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 671,
        "_hd": 869,
        "all": 917
      },
      "real": {
        "BTC": {
          "id": 7069
        },
        "DOG": {
          "id": 7070
        },
        "ETH": {
          "id": 7071
        },
        "LTC": {
          "id": 7073
        }
      },
      "demo": "/games/amatic/MermaidsGold/7072"
    },
    "amatic/FireAndIce": {
      "title": "Fire and Ice",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 362,
        "all": 604
      },
      "real": {
        "BTC": {
          "id": 7075
        },
        "DOG": {
          "id": 7076
        },
        "ETH": {
          "id": 7077
        },
        "LTC": {
          "id": 7079
        }
      },
      "demo": "/games/amatic/FireAndIce/7078"
    },
    "amatic/Billyonaire": {
      "title": "Billyonaire",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 257,
        "slots": 120,
        "all": 214
      },
      "real": {
        "BTC": {
          "id": 7081
        },
        "DOG": {
          "id": 7082
        },
        "ETH": {
          "id": 7083
        },
        "LTC": {
          "id": 7085
        }
      },
      "demo": "/games/amatic/Billyonaire/7084"
    },
    "amatic/luckyjoker10": {
      "title": "Lucky Joker 10",
      "provider": "amatic",
      "collections": {
        "novelty": 3,
        "popularity": 398,
        "slots": 616,
        "_hd": 822,
        "all": 866
      },
      "real": {
        "BTC": {
          "id": 7087
        },
        "DOG": {
          "id": 7088
        },
        "ETH": {
          "id": 7089
        },
        "LTC": {
          "id": 7091
        }
      },
      "demo": "/games/amatic/luckyjoker10/7090"
    },
    "amatic/DragonsKingdom": {
      "title": "Dragons Kingdom",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 319,
        "all": 563
      },
      "real": {
        "BTC": {
          "id": 7093
        },
        "DOG": {
          "id": 7094
        },
        "ETH": {
          "id": 7095
        },
        "LTC": {
          "id": 7097
        }
      },
      "demo": "/games/amatic/DragonsKingdom/7096"
    },
    "amatic/Wild7": {
      "title": "Wild 7",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1054,
        "all": 1338
      },
      "real": {
        "BTC": {
          "id": 7099
        },
        "DOG": {
          "id": 7100
        },
        "ETH": {
          "id": 7101
        },
        "LTC": {
          "id": 7103
        }
      },
      "demo": "/games/amatic/Wild7/7102"
    },
    "amatic/aztecemerald": {
      "title": "Aztec Emerald",
      "provider": "amatic",
      "collections": {
        "novelty": 6,
        "popularity": 90,
        "slots": 88,
        "accumulating": 0,
        "_hd": 174,
        "all": 179
      },
      "real": {
        "BTC": {
          "id": 7105
        },
        "DOG": {
          "id": 7106
        },
        "ETH": {
          "id": 7107
        },
        "LTC": {
          "id": 7109
        }
      },
      "demo": "/games/amatic/aztecemerald/7108"
    },
    "amatic/HotChoice": {
      "title": "Hot Choice",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 480,
        "all": 732
      },
      "real": {
        "BTC": {
          "id": 7111
        },
        "DOG": {
          "id": 7112
        },
        "ETH": {
          "id": 7113
        },
        "LTC": {
          "id": 7115
        }
      },
      "demo": "/games/amatic/HotChoice/7114"
    },
    "amatic/GrandX": {
      "title": "GrandX",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 442,
        "_hd": 665,
        "all": 695
      },
      "real": {
        "BTC": {
          "id": 7117
        },
        "DOG": {
          "id": 7118
        },
        "ETH": {
          "id": 7119
        },
        "LTC": {
          "id": 7121
        }
      },
      "demo": "/games/amatic/GrandX/7120"
    },
    "amatic/BookofFruitsHalloween": {
      "title": "Book of Fruits Halloween",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 145,
        "_hd": 334,
        "all": 348
      },
      "real": {
        "BTC": {
          "id": 7123
        },
        "DOG": {
          "id": 7124
        },
        "ETH": {
          "id": 7125
        },
        "LTC": {
          "id": 7127
        }
      },
      "demo": "/games/amatic/BookofFruitsHalloween/7126"
    },
    "amatic/PrincessofPearls": {
      "title": "Princess of Pearls",
      "provider": "amatic",
      "collections": {
        "novelty": 63,
        "popularity": 398,
        "slots": 794,
        "accumulating": 16,
        "_hd": 987,
        "all": 1037
      },
      "real": {
        "BTC": {
          "id": 7129
        },
        "DOG": {
          "id": 7130
        },
        "ETH": {
          "id": 7131
        },
        "LTC": {
          "id": 7133
        }
      },
      "demo": "/games/amatic/PrincessofPearls/7132"
    },
    "amatic/AllWaysJoker": {
      "title": "All Ways Joker",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 63,
        "_hd": 150,
        "all": 152
      },
      "real": {
        "BTC": {
          "id": 7135
        },
        "DOG": {
          "id": 7136
        },
        "ETH": {
          "id": 7137
        },
        "LTC": {
          "id": 7139
        }
      },
      "demo": "/games/amatic/AllWaysJoker/7138"
    },
    "amatic/DragonsGift": {
      "title": "Dragons Gift",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 318,
        "_hd": 542,
        "all": 562
      },
      "real": {
        "BTC": {
          "id": 7141
        },
        "DOG": {
          "id": 7142
        },
        "ETH": {
          "id": 7143
        },
        "LTC": {
          "id": 7145
        }
      },
      "demo": "/games/amatic/DragonsGift/7144"
    },
    "amatic/LadyFruits40Easter": {
      "title": "Lady Fruits 40 Easter",
      "provider": "amatic",
      "collections": {
        "novelty": 82,
        "popularity": 398,
        "slots": 570,
        "_hd": 778,
        "all": 818
      },
      "real": {
        "BTC": {
          "id": 7147
        },
        "DOG": {
          "id": 7148
        },
        "ETH": {
          "id": 7149
        },
        "LTC": {
          "id": 7151
        }
      },
      "demo": "/games/amatic/LadyFruits40Easter/7150"
    },
    "amatic/HotFruits27": {
      "title": "Hot Fruits 27",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 488,
        "_hd": 705,
        "all": 739
      },
      "real": {
        "BTC": {
          "id": 7153
        },
        "DOG": {
          "id": 7154
        },
        "ETH": {
          "id": 7155
        },
        "LTC": {
          "id": 7157
        }
      },
      "demo": "/games/amatic/HotFruits27/7156"
    },
    "amatic/DiamondCats": {
      "title": "Diamond Cats",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 307,
        "slots": 281,
        "all": 527
      },
      "real": {
        "BTC": {
          "id": 7159
        },
        "DOG": {
          "id": 7160
        },
        "ETH": {
          "id": 7161
        },
        "LTC": {
          "id": 7163
        }
      },
      "demo": "/games/amatic/DiamondCats/7162"
    },
    "amatic/TweetyBirds": {
      "title": "Tweety Birds",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1019,
        "all": 1302
      },
      "real": {
        "BTC": {
          "id": 7165
        },
        "DOG": {
          "id": 7166
        },
        "ETH": {
          "id": 7167
        },
        "LTC": {
          "id": 7169
        }
      },
      "demo": "/games/amatic/TweetyBirds/7168"
    },
    "amatic/LovelyLadyXMas": {
      "title": "Lovely Lady X-Mas",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 599,
        "_hd": 809,
        "all": 851
      },
      "real": {
        "BTC": {
          "id": 7171
        },
        "DOG": {
          "id": 7172
        },
        "ETH": {
          "id": 7173
        },
        "LTC": {
          "id": 7175
        }
      },
      "demo": "/games/amatic/LovelyLadyXMas/7174"
    },
    "amatic/KingofDwarves": {
      "title": "King of Dwarves",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 553,
        "_hd": 765,
        "all": 803
      },
      "real": {
        "BTC": {
          "id": 7177
        },
        "DOG": {
          "id": 7178
        },
        "ETH": {
          "id": 7179
        },
        "LTC": {
          "id": 7181
        }
      },
      "demo": "/games/amatic/KingofDwarves/7180"
    },
    "amatic/ChineseSpider": {
      "title": "Chinese Spider",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 217,
        "_hd": 401,
        "all": 417
      },
      "real": {
        "BTC": {
          "id": 7183
        },
        "DOG": {
          "id": 7184
        },
        "ETH": {
          "id": 7185
        },
        "LTC": {
          "id": 7187
        }
      },
      "demo": "/games/amatic/ChineseSpider/7186"
    },
    "amatic/HotScatter": {
      "title": "Hot Scatter",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 495,
        "all": 746
      },
      "real": {
        "BTC": {
          "id": 7189
        },
        "DOG": {
          "id": 7190
        },
        "ETH": {
          "id": 7191
        },
        "LTC": {
          "id": 7193
        }
      },
      "demo": "/games/amatic/HotScatter/7192"
    },
    "amatic/CrazyBee": {
      "title": "Crazy Bee",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 198,
        "slots": 245,
        "_hd": 476,
        "all": 492
      },
      "real": {
        "BTC": {
          "id": 7195
        },
        "DOG": {
          "id": 7196
        },
        "ETH": {
          "id": 7197
        },
        "LTC": {
          "id": 7199
        }
      },
      "demo": "/games/amatic/CrazyBee/7198"
    },
    "amatic/ScarabTreasure": {
      "title": "Scarab Treasure",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 853,
        "accumulating": 20,
        "all": 1109
      },
      "real": {
        "BTC": {
          "id": 7201
        },
        "DOG": {
          "id": 7202
        },
        "ETH": {
          "id": 7203
        },
        "LTC": {
          "id": 7205
        }
      },
      "demo": "/games/amatic/ScarabTreasure/7204"
    },
    "amatic/RoyalUnicorn": {
      "title": "Royal Unicorn",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 145,
        "slots": 827,
        "all": 1070
      },
      "real": {
        "BTC": {
          "id": 7207
        },
        "DOG": {
          "id": 7208
        },
        "ETH": {
          "id": 7209
        },
        "LTC": {
          "id": 7211
        }
      },
      "demo": "/games/amatic/RoyalUnicorn/7210"
    },
    "amatic/MegaShark": {
      "title": "Mega Shark",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 666,
        "_hd": 864,
        "all": 912
      },
      "real": {
        "BTC": {
          "id": 7213
        },
        "DOG": {
          "id": 7214
        },
        "ETH": {
          "id": 7215
        },
        "LTC": {
          "id": 7217
        }
      },
      "demo": "/games/amatic/MegaShark/7216"
    },
    "amatic/PartyTime": {
      "title": "Party Time",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 745,
        "all": 991
      },
      "real": {
        "BTC": {
          "id": 7219
        },
        "DOG": {
          "id": 7220
        },
        "ETH": {
          "id": 7221
        },
        "LTC": {
          "id": 7223
        }
      },
      "demo": "/games/amatic/PartyTime/7222"
    },
    "amatic/PartyNight": {
      "title": "Party Night",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 304,
        "slots": 744,
        "_hd": 941,
        "all": 990
      },
      "real": {
        "BTC": {
          "id": 7225
        },
        "DOG": {
          "id": 7226
        },
        "ETH": {
          "id": 7227
        },
        "LTC": {
          "id": 7229
        }
      },
      "demo": "/games/amatic/PartyNight/7228"
    },
    "amatic/FireQueen": {
      "title": "Fire Queen",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 358,
        "_hd": 576,
        "all": 600
      },
      "real": {
        "BTC": {
          "id": 7231
        },
        "DOG": {
          "id": 7232
        },
        "ETH": {
          "id": 7233
        },
        "LTC": {
          "id": 7235
        }
      },
      "demo": "/games/amatic/FireQueen/7234"
    },
    "amatic/GoldenBook": {
      "title": "Golden Book",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 85,
        "slots": 426,
        "all": 678
      },
      "real": {
        "BTC": {
          "id": 7237
        },
        "DOG": {
          "id": 7238
        },
        "ETH": {
          "id": 7239
        },
        "LTC": {
          "id": 7241
        }
      },
      "demo": "/games/amatic/GoldenBook/7240"
    },
    "amatic/WolfMoon": {
      "title": "Wolf Moon",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 101,
        "slots": 1092,
        "all": 1373
      },
      "real": {
        "BTC": {
          "id": 7243
        },
        "DOG": {
          "id": 7244
        },
        "ETH": {
          "id": 7245
        },
        "LTC": {
          "id": 7247
        }
      },
      "demo": "/games/amatic/WolfMoon/7246"
    },
    "amatic/BillysGame": {
      "title": "Billy's Game",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 119,
        "all": 213
      },
      "real": {
        "BTC": {
          "id": 7249
        },
        "DOG": {
          "id": 7250
        },
        "ETH": {
          "id": 7251
        },
        "LTC": {
          "id": 7253
        }
      },
      "demo": "/games/amatic/BillysGame/7252"
    },
    "amatic/LuckyEgypt": {
      "title": "Lucky Egypt",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 613,
        "jackpot": 36,
        "_hd": 819,
        "all": 863
      },
      "real": {
        "BTC": {
          "id": 7255
        },
        "DOG": {
          "id": 7256
        },
        "ETH": {
          "id": 7257
        },
        "LTC": {
          "id": 7259
        }
      },
      "demo": "/games/amatic/LuckyEgypt/7258"
    },
    "amatic/BookofAztecSelect": {
      "title": "Book of Aztec Select",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 39,
        "slots": 139,
        "_hd": 328,
        "all": 342
      },
      "real": {
        "BTC": {
          "id": 7261
        },
        "DOG": {
          "id": 7262
        },
        "ETH": {
          "id": 7263
        },
        "LTC": {
          "id": 7265
        }
      },
      "demo": "/games/amatic/BookofAztecSelect/7264"
    },
    "amatic/GrandTiger": {
      "title": "Grand Tiger",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 441,
        "all": 694
      },
      "real": {
        "BTC": {
          "id": 7267
        },
        "DOG": {
          "id": 7268
        },
        "ETH": {
          "id": 7269
        },
        "LTC": {
          "id": 7271
        }
      },
      "demo": "/games/amatic/GrandTiger/7270"
    },
    "amatic/CrystalFruits": {
      "title": "Crystal Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 251,
        "_hd": 483,
        "all": 499
      },
      "real": {
        "BTC": {
          "id": 7273
        },
        "DOG": {
          "id": 7274
        },
        "ETH": {
          "id": 7275
        },
        "LTC": {
          "id": 7277
        }
      },
      "demo": "/games/amatic/CrystalFruits/7276"
    },
    "amatic/RedChilli": {
      "title": "Red Chilli",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 805,
        "all": 1047
      },
      "real": {
        "BTC": {
          "id": 7279
        },
        "DOG": {
          "id": 7280
        },
        "ETH": {
          "id": 7281
        },
        "LTC": {
          "id": 7283
        }
      },
      "demo": "/games/amatic/RedChilli/7282"
    },
    "amatic/HotSoccer": {
      "title": "Hot Soccer",
      "provider": "amatic",
      "collections": {
        "novelty": 55,
        "popularity": 398,
        "slots": 497,
        "_hd": 712,
        "all": 748
      },
      "real": {
        "BTC": {
          "id": 7285
        },
        "DOG": {
          "id": 7286
        },
        "ETH": {
          "id": 7287
        },
        "LTC": {
          "id": 7289
        }
      },
      "demo": "/games/amatic/HotSoccer/7288"
    },
    "amatic/PlentyDragons": {
      "title": "Plenty Dragons",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 777,
        "_hd": 970,
        "all": 1020
      },
      "real": {
        "BTC": {
          "id": 7291
        },
        "DOG": {
          "id": 7292
        },
        "ETH": {
          "id": 7293
        },
        "LTC": {
          "id": 7295
        }
      },
      "demo": "/games/amatic/PlentyDragons/7294"
    },
    "amatic/DiamondsOnFire": {
      "title": "Diamonds On Fire",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 287,
        "all": 534
      },
      "real": {
        "BTC": {
          "id": 7297
        },
        "DOG": {
          "id": 7298
        },
        "ETH": {
          "id": 7299
        },
        "LTC": {
          "id": 7301
        }
      },
      "demo": "/games/amatic/DiamondsOnFire/7300"
    },
    "amatic/EyeOfRa": {
      "title": "Eye Of Ra",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 262,
        "slots": 343,
        "all": 584
      },
      "real": {
        "BTC": {
          "id": 7303
        },
        "DOG": {
          "id": 7304
        },
        "ETH": {
          "id": 7305
        },
        "LTC": {
          "id": 7307
        }
      },
      "demo": "/games/amatic/EyeOfRa/7306"
    },
    "amatic/FortunasFruits": {
      "title": "Fortunas Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 131,
        "slots": 372,
        "all": 625
      },
      "real": {
        "BTC": {
          "id": 7309
        },
        "DOG": {
          "id": 7310
        },
        "ETH": {
          "id": 7311
        },
        "LTC": {
          "id": 7313
        }
      },
      "demo": "/games/amatic/FortunasFruits/7312"
    },
    "amatic/NicerDice100": {
      "title": "Nicer Dice 100",
      "provider": "amatic",
      "collections": {
        "novelty": 112,
        "popularity": 398,
        "slots": 717,
        "_hd": 911,
        "all": 960
      },
      "real": {
        "BTC": {
          "id": 7315
        },
        "DOG": {
          "id": 7316
        },
        "ETH": {
          "id": 7317
        },
        "LTC": {
          "id": 7319
        }
      },
      "demo": "/games/amatic/NicerDice100/7318"
    },
    "amatic/WildStars": {
      "title": "Wild Stars",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1076,
        "all": 1359
      },
      "real": {
        "BTC": {
          "id": 7321
        },
        "DOG": {
          "id": 7322
        },
        "ETH": {
          "id": 7323
        },
        "LTC": {
          "id": 7325
        }
      },
      "demo": "/games/amatic/WildStars/7324"
    },
    "amatic/SuperCats": {
      "title": "Super Cats",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 929,
        "_hd": 1161,
        "all": 1214
      },
      "real": {
        "BTC": {
          "id": 7327
        },
        "DOG": {
          "id": 7328
        },
        "ETH": {
          "id": 7329
        },
        "LTC": {
          "id": 7331
        }
      },
      "demo": "/games/amatic/SuperCats/7330"
    },
    "amatic/NicerDice40": {
      "title": "Nicer Dice 40",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 718,
        "_hd": 912,
        "all": 961
      },
      "real": {
        "BTC": {
          "id": 7333
        },
        "DOG": {
          "id": 7334
        },
        "ETH": {
          "id": 7335
        },
        "LTC": {
          "id": 7337
        }
      },
      "demo": "/games/amatic/NicerDice40/7336"
    },
    "amatic/Oktoberfest": {
      "title": "Oktoberfest",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 732,
        "_hd": 929,
        "all": 978
      },
      "real": {
        "BTC": {
          "id": 7339
        },
        "DOG": {
          "id": 7340
        },
        "ETH": {
          "id": 7341
        },
        "LTC": {
          "id": 7343
        }
      },
      "demo": "/games/amatic/Oktoberfest/7342"
    },
    "amatic/AllwaysWin": {
      "title": "Allways Win",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 66,
        "all": 155
      },
      "real": {
        "BTC": {
          "id": 7345
        },
        "DOG": {
          "id": 7346
        },
        "ETH": {
          "id": 7347
        },
        "LTC": {
          "id": 7349
        }
      },
      "demo": "/games/amatic/AllwaysWin/7348"
    },
    "amatic/FruitBox": {
      "title": "Fruit Box",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 387,
        "_hd": 614,
        "all": 640
      },
      "real": {
        "BTC": {
          "id": 7351
        },
        "DOG": {
          "id": 7352
        },
        "ETH": {
          "id": 7353
        },
        "LTC": {
          "id": 7355
        }
      },
      "demo": "/games/amatic/FruitBox/7354"
    },
    "amatic/luckydouble": {
      "title": "Lucky Double",
      "provider": "amatic",
      "collections": {
        "novelty": 15,
        "popularity": 398,
        "slots": 609,
        "_hd": 815,
        "all": 859
      },
      "real": {
        "BTC": {
          "id": 7357
        },
        "DOG": {
          "id": 7358
        },
        "ETH": {
          "id": 7359
        },
        "LTC": {
          "id": 7361
        }
      },
      "demo": "/games/amatic/luckydouble/7360"
    },
    "amatic/GoldenQuest": {
      "title": "Golden Quest",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 436,
        "_hd": 658,
        "all": 687
      },
      "real": {
        "BTC": {
          "id": 7363
        },
        "DOG": {
          "id": 7364
        },
        "ETH": {
          "id": 7365
        },
        "LTC": {
          "id": 7367
        }
      },
      "demo": "/games/amatic/GoldenQuest/7366"
    },
    "amatic/LuckyCoin": {
      "title": "Lucky Coin",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 171,
        "slots": 606,
        "all": 857
      },
      "real": {
        "BTC": {
          "id": 7369
        },
        "DOG": {
          "id": 7370
        },
        "ETH": {
          "id": 7371
        },
        "LTC": {
          "id": 7373
        }
      },
      "demo": "/games/amatic/LuckyCoin/7372"
    },
    "amatic/MagicOwl": {
      "title": "Magic Owl",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 643,
        "all": 892
      },
      "real": {
        "BTC": {
          "id": 7375
        },
        "DOG": {
          "id": 7376
        },
        "ETH": {
          "id": 7377
        },
        "LTC": {
          "id": 7379
        }
      },
      "demo": "/games/amatic/MagicOwl/7378"
    },
    "amatic/BookOfAztec": {
      "title": "Book Of Aztec",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 18,
        "slots": 133,
        "all": 337
      },
      "real": {
        "BTC": {
          "id": 7381
        },
        "DOG": {
          "id": 7382
        },
        "ETH": {
          "id": 7383
        },
        "LTC": {
          "id": 7385
        }
      },
      "demo": "/games/amatic/BookOfAztec/7384"
    },
    "amatic/BeautyFairy": {
      "title": "Beauty Fairy",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 106,
        "_hd": 194,
        "all": 200
      },
      "real": {
        "BTC": {
          "id": 7387
        },
        "DOG": {
          "id": 7388
        },
        "ETH": {
          "id": 7389
        },
        "LTC": {
          "id": 7391
        }
      },
      "demo": "/games/amatic/BeautyFairy/7390"
    },
    "amatic/BookofPharao": {
      "title": "Book of Pharao",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 6,
        "slots": 149,
        "_hd": 337,
        "all": 351
      },
      "real": {
        "BTC": {
          "id": 7393
        },
        "DOG": {
          "id": 7394
        },
        "ETH": {
          "id": 7395
        },
        "LTC": {
          "id": 7397
        }
      },
      "demo": "/games/amatic/BookofPharao/7396"
    },
    "amatic/Harlequeen": {
      "title": "Harlequeen",
      "provider": "amatic",
      "collections": {
        "novelty": 39,
        "popularity": 150,
        "slots": 458,
        "_hd": 681,
        "all": 711
      },
      "real": {
        "BTC": {
          "id": 7399
        },
        "DOG": {
          "id": 7400
        },
        "ETH": {
          "id": 7401
        },
        "LTC": {
          "id": 7403
        }
      },
      "demo": "/games/amatic/Harlequeen/7402"
    },
    "amatic/Casanova": {
      "title": "Casanova",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 144,
        "slots": 190,
        "all": 389
      },
      "real": {
        "BTC": {
          "id": 7405
        },
        "DOG": {
          "id": 7406
        },
        "ETH": {
          "id": 7407
        },
        "LTC": {
          "id": 7409
        }
      },
      "demo": "/games/amatic/Casanova/7408"
    },
    "amatic/HottestFruits40": {
      "title": "Hottest Fruits 40",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 503,
        "_hd": 716,
        "all": 754
      },
      "real": {
        "BTC": {
          "id": 7411
        },
        "DOG": {
          "id": 7412
        },
        "ETH": {
          "id": 7413
        },
        "LTC": {
          "id": 7415
        }
      },
      "demo": "/games/amatic/HottestFruits40/7414"
    },
    "amatic/BellsOnFireRombo": {
      "title": "Bells On Fire Rombo",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 111,
        "all": 205
      },
      "real": {
        "BTC": {
          "id": 7417
        },
        "DOG": {
          "id": 7418
        },
        "ETH": {
          "id": 7419
        },
        "LTC": {
          "id": 7421
        }
      },
      "demo": "/games/amatic/BellsOnFireRombo/7420"
    },
    "amatic/BurningBells40": {
      "title": "Burning Bells 40",
      "provider": "amatic",
      "collections": {
        "novelty": 12,
        "popularity": 398,
        "slots": 175,
        "_hd": 362,
        "all": 376
      },
      "real": {
        "BTC": {
          "id": 7423
        },
        "DOG": {
          "id": 7424
        },
        "ETH": {
          "id": 7425
        },
        "LTC": {
          "id": 7427
        }
      },
      "demo": "/games/amatic/BurningBells40/7426"
    },
    "amatic/WildShark": {
      "title": "Wild Shark",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 11,
        "slots": 1073,
        "all": 1356
      },
      "real": {
        "BTC": {
          "id": 7429
        },
        "DOG": {
          "id": 7430
        },
        "ETH": {
          "id": 7431
        },
        "LTC": {
          "id": 7433
        }
      },
      "demo": "/games/amatic/WildShark/7432"
    },
    "amatic/BigPanda": {
      "title": "Big Panda",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 117,
        "all": 211
      },
      "real": {
        "BTC": {
          "id": 7435
        },
        "DOG": {
          "id": 7436
        },
        "ETH": {
          "id": 7437
        },
        "LTC": {
          "id": 7439
        }
      },
      "demo": "/games/amatic/BigPanda/7438"
    },
    "amatic/LuckyLittleDevil": {
      "title": "Lucky Little Devil",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 143,
        "slots": 623,
        "_hd": 829,
        "all": 873
      },
      "real": {
        "BTC": {
          "id": 7441
        },
        "DOG": {
          "id": 7442
        },
        "ETH": {
          "id": 7443
        },
        "LTC": {
          "id": 7445
        }
      },
      "demo": "/games/amatic/LuckyLittleDevil/7444"
    },
    "amatic/HottestFruits20": {
      "title": "Hottest Fruits 20",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 502,
        "_hd": 715,
        "all": 753
      },
      "real": {
        "BTC": {
          "id": 7447
        },
        "DOG": {
          "id": 7448
        },
        "ETH": {
          "id": 7449
        },
        "LTC": {
          "id": 7451
        }
      },
      "demo": "/games/amatic/HottestFruits20/7450"
    },
    "amatic/LaGranAventura": {
      "title": "La Gran Aventura",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 270,
        "slots": 566,
        "all": 814
      },
      "real": {
        "BTC": {
          "id": 7453
        },
        "DOG": {
          "id": 7454
        },
        "ETH": {
          "id": 7455
        },
        "LTC": {
          "id": 7457
        }
      },
      "demo": "/games/amatic/LaGranAventura/7456"
    },
    "amatic/KingsCrown": {
      "title": "Kings Crown",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 556,
        "all": 805
      },
      "real": {
        "BTC": {
          "id": 7459
        },
        "DOG": {
          "id": 7460
        },
        "ETH": {
          "id": 7461
        },
        "LTC": {
          "id": 7463
        }
      },
      "demo": "/games/amatic/KingsCrown/7462"
    },
    "amatic/LuckyRespin": {
      "title": "Lucky Respin",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 629,
        "_hd": 835,
        "all": 879
      },
      "real": {
        "BTC": {
          "id": 7465
        },
        "DOG": {
          "id": 7466
        },
        "ETH": {
          "id": 7467
        },
        "LTC": {
          "id": 7469
        }
      },
      "demo": "/games/amatic/LuckyRespin/7468"
    },
    "amatic/FortuneGirl": {
      "title": "Fortune Girl",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 375,
        "_hd": 602,
        "all": 628
      },
      "real": {
        "BTC": {
          "id": 7471
        },
        "DOG": {
          "id": 7472
        },
        "ETH": {
          "id": 7473
        },
        "LTC": {
          "id": 7475
        }
      },
      "demo": "/games/amatic/FortuneGirl/7474"
    },
    "amatic/LadyLuck": {
      "title": "Lovely Lady",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 30,
        "slots": 597,
        "all": 849
      },
      "real": {
        "BTC": {
          "id": 7477
        },
        "DOG": {
          "id": 7478
        },
        "ETH": {
          "id": 7479
        },
        "LTC": {
          "id": 7481
        }
      },
      "demo": "/games/amatic/LadyLuck/7480"
    },
    "amatic/HotTwenty": {
      "title": "Hot Twenty",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 499,
        "all": 750
      },
      "real": {
        "BTC": {
          "id": 7483
        },
        "DOG": {
          "id": 7484
        },
        "ETH": {
          "id": 7485
        },
        "LTC": {
          "id": 7487
        }
      },
      "demo": "/games/amatic/HotTwenty/7486"
    },
    "amatic/BookofLords": {
      "title": "Book of Lords",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 185,
        "slots": 147,
        "_hd": 336,
        "all": 350
      },
      "real": {
        "BTC": {
          "id": 7489
        },
        "DOG": {
          "id": 7490
        },
        "ETH": {
          "id": 7491
        },
        "LTC": {
          "id": 7493
        }
      },
      "demo": "/games/amatic/BookofLords/7492"
    },
    "amatic/Admiral": {
      "title": "Admiral Nelson",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 83,
        "slots": 52,
        "all": 144
      },
      "real": {
        "BTC": {
          "id": 7495
        },
        "DOG": {
          "id": 7496
        },
        "ETH": {
          "id": 7497
        },
        "LTC": {
          "id": 7499
        }
      },
      "demo": "/games/amatic/Admiral/7498"
    },
    "amatic/FruitExpress": {
      "title": "Fruit Express",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 388,
        "_hd": 615,
        "all": 641
      },
      "real": {
        "BTC": {
          "id": 7501
        },
        "DOG": {
          "id": 7502
        },
        "ETH": {
          "id": 7503
        },
        "LTC": {
          "id": 7505
        }
      },
      "demo": "/games/amatic/FruitExpress/7504"
    },
    "amatic/HotStar": {
      "title": "Hot Star",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 498,
        "all": 749
      },
      "real": {
        "BTC": {
          "id": 7507
        },
        "DOG": {
          "id": 7508
        },
        "ETH": {
          "id": 7509
        },
        "LTC": {
          "id": 7511
        }
      },
      "demo": "/games/amatic/HotStar/7510"
    },
    "amatic/WildDragon": {
      "title": "Wild Dragon",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1063,
        "all": 1346
      },
      "real": {
        "BTC": {
          "id": 7513
        },
        "DOG": {
          "id": 7514
        },
        "ETH": {
          "id": 7515
        },
        "LTC": {
          "id": 7517
        }
      },
      "demo": "/games/amatic/WildDragon/7516"
    },
    "amatic/TikiMadness100": {
      "title": "Tiki Madness 100",
      "provider": "amatic",
      "collections": {
        "novelty": 91,
        "popularity": 398,
        "slots": 1002,
        "_hd": 1231,
        "all": 1284
      },
      "real": {
        "BTC": {
          "id": 7519
        },
        "DOG": {
          "id": 7520
        },
        "ETH": {
          "id": 7521
        },
        "LTC": {
          "id": 7523
        }
      },
      "demo": "/games/amatic/TikiMadness100/7522"
    },
    "amatic/MerryFruits": {
      "title": "Merry Fruits",
      "provider": "amatic",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 672,
        "all": 918
      },
      "real": {
        "BTC": {
          "id": 7525
        },
        "DOG": {
          "id": 7526
        },
        "ETH": {
          "id": 7527
        },
        "LTC": {
          "id": 7529
        }
      },
      "demo": "/games/amatic/MerryFruits/7528"
    },
    "amatic/BuffaloThunderstacks": {
      "title": "Buffalo Thunderstacks",
      "provider": "amatic",
      "collections": {
        "novelty": 80,
        "popularity": 398,
        "slots": 173,
        "_hd": 360,
        "all": 374
      },
      "real": {
        "BTC": {
          "id": 7531
        },
        "DOG": {
          "id": 7532
        },
        "ETH": {
          "id": 7533
        },
        "LTC": {
          "id": 7535
        }
      },
      "demo": "/games/amatic/BuffaloThunderstacks/7534"
    },
    "amatic/BookofFruits10": {
      "title": "Book of Fruits 10",
      "provider": "amatic",
      "collections": {
        "novelty": 57,
        "popularity": 398,
        "slots": 144,
        "_hd": 333,
        "all": 347
      },
      "real": {
        "BTC": {
          "id": 7537
        },
        "DOG": {
          "id": 7538
        },
        "ETH": {
          "id": 7539
        },
        "LTC": {
          "id": 7541
        }
      },
      "demo": "/games/amatic/BookofFruits10/7540"
    },
    "gameart/BattleforAtlantis": {
      "title": "Battle for Atlantis",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 121,
        "slots": 103,
        "_hd": 9,
        "all": 9
      },
      "real": {
        "BTC": {
          "id": 7543
        },
        "DOG": {
          "id": 7544
        },
        "ETH": {
          "id": 7545
        },
        "LTC": {
          "id": 7547
        }
      },
      "demo": "/games/gameart/BattleforAtlantis/7546"
    },
    "gameart/ChineseZodiac": {
      "title": "Chinese Zodiac",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 219,
        "_hd": 19,
        "all": 19
      },
      "real": {
        "BTC": {
          "id": 7550
        },
        "DOG": {
          "id": 7551
        },
        "ETH": {
          "id": 7552
        },
        "LTC": {
          "id": 7554
        }
      },
      "demo": "/games/gameart/ChineseZodiac/7553"
    },
    "gameart/JoanofArc": {
      "title": "Joan of Arc",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 127,
        "slots": 525,
        "_hd": 46,
        "all": 46
      },
      "real": {
        "BTC": {
          "id": 7557
        },
        "DOG": {
          "id": 7558
        },
        "ETH": {
          "id": 7559
        },
        "LTC": {
          "id": 7561
        }
      },
      "demo": "/games/gameart/JoanofArc/7560"
    },
    "gameart/AfricanSunset": {
      "title": "African Sunset",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 56,
        "_hd": 2,
        "all": 2
      },
      "real": {
        "BTC": {
          "id": 7571
        },
        "DOG": {
          "id": 7572
        },
        "ETH": {
          "id": 7573
        },
        "LTC": {
          "id": 7575
        }
      },
      "demo": "/games/gameart/AfricanSunset/7574"
    },
    "gameart/ApocalypseQuest": {
      "title": "Apocalypse Quest",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 234,
        "slots": 72,
        "_hd": 6,
        "all": 6
      },
      "real": {
        "BTC": {
          "id": 7578
        },
        "DOG": {
          "id": 7579
        },
        "ETH": {
          "id": 7580
        },
        "LTC": {
          "id": 7582
        }
      },
      "demo": "/games/gameart/ApocalypseQuest/7581"
    },
    "gameart/SlotofMoney": {
      "title": "Slot of Money",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 881,
        "_hd": 76,
        "all": 76
      },
      "real": {
        "BTC": {
          "id": 7585
        },
        "DOG": {
          "id": 7586
        },
        "ETH": {
          "id": 7587
        },
        "LTC": {
          "id": 7589
        }
      },
      "demo": "/games/gameart/SlotofMoney/7588"
    },
    "gameart/FortunePanda": {
      "title": "Fortune Panda",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 377,
        "_hd": 38,
        "all": 38
      },
      "real": {
        "BTC": {
          "id": 7592
        },
        "DOG": {
          "id": 7593
        },
        "ETH": {
          "id": 7594
        },
        "LTC": {
          "id": 7596
        }
      },
      "demo": "/games/gameart/FortunePanda/7595"
    },
    "gameart/RoyalGems": {
      "title": "Royal Gems",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 87,
        "slots": 825,
        "_hd": 74,
        "all": 74
      },
      "real": {
        "BTC": {
          "id": 7599
        },
        "DOG": {
          "id": 7600
        },
        "ETH": {
          "id": 7601
        },
        "LTC": {
          "id": 7603
        }
      },
      "demo": "/games/gameart/RoyalGems/7602"
    },
    "gameart/LuckyCoins": {
      "title": "Lucky Coins",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 390,
        "slots": 607,
        "_hd": 54,
        "all": 54
      },
      "real": {
        "BTC": {
          "id": 7606
        },
        "DOG": {
          "id": 7607
        },
        "ETH": {
          "id": 7608
        },
        "LTC": {
          "id": 7610
        }
      },
      "demo": "/games/gameart/LuckyCoins/7609"
    },
    "gameart/DancingLion": {
      "title": "Dancing Lion",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 361,
        "slots": 264,
        "_hd": 24,
        "all": 24
      },
      "real": {
        "BTC": {
          "id": 7613
        },
        "DOG": {
          "id": 7614
        },
        "ETH": {
          "id": 7615
        },
        "LTC": {
          "id": 7617
        }
      },
      "demo": "/games/gameart/DancingLion/7616"
    },
    "gameart/KingOfWealth": {
      "title": "King Of Wealth",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 243,
        "slots": 552,
        "_hd": 49,
        "all": 49
      },
      "real": {
        "BTC": {
          "id": 7620
        },
        "DOG": {
          "id": 7621
        },
        "ETH": {
          "id": 7622
        },
        "LTC": {
          "id": 7624
        }
      },
      "demo": "/games/gameart/KingOfWealth/7623"
    },
    "gameart/LadyLuck": {
      "title": "Lady Luck",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 182,
        "slots": 573,
        "_hd": 52,
        "all": 52
      },
      "real": {
        "BTC": {
          "id": 7627
        },
        "DOG": {
          "id": 7628
        },
        "ETH": {
          "id": 7629
        },
        "LTC": {
          "id": 7631
        }
      },
      "demo": "/games/gameart/LadyLuck/7630"
    },
    "gameart/DolphinsDream": {
      "title": "Dolphin's Dream",
      "provider": "gameart",
      "collections": {
        "novelty": 68,
        "popularity": 59,
        "slots": 292,
        "_hd": 27,
        "all": 27,
        "bonusbuy": 30
      },
      "real": {
        "BTC": {
          "id": 7634
        },
        "DOG": {
          "id": 7635
        },
        "ETH": {
          "id": 7636
        },
        "LTC": {
          "id": 7638
        }
      },
      "demo": "/games/gameart/DolphinsDream/7637"
    },
    "gameart/GoldenDragon": {
      "title": "Golden Dragon",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 428,
        "_hd": 40,
        "all": 40
      },
      "real": {
        "BTC": {
          "id": 7641
        },
        "DOG": {
          "id": 7642
        },
        "ETH": {
          "id": 7643
        },
        "LTC": {
          "id": 7645
        }
      },
      "demo": "/games/gameart/GoldenDragon/7644"
    },
    "gameart/MegaBunnyHyperways": {
      "title": "Mega Bunny Hyperways",
      "provider": "gameart",
      "collections": {
        "novelty": 81,
        "popularity": 102,
        "slots": 664,
        "_hd": 59,
        "all": 59,
        "bonusbuy": 37
      },
      "real": {
        "BTC": {
          "id": 7648
        },
        "DOG": {
          "id": 7649
        },
        "ETH": {
          "id": 7650
        },
        "LTC": {
          "id": 7652
        }
      },
      "demo": "/games/gameart/MegaBunnyHyperways/7651"
    },
    "gameart/SantasFarm": {
      "title": "Santa's Farm",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 845,
        "_hd": 75,
        "all": 75
      },
      "real": {
        "BTC": {
          "id": 7655
        },
        "DOG": {
          "id": 7656
        },
        "ETH": {
          "id": 7657
        },
        "LTC": {
          "id": 7659
        }
      },
      "demo": "/games/gameart/SantasFarm/7658"
    },
    "gameart/WildWildQuest": {
      "title": "Wild Wild Quest",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1082,
        "jackpot": 68,
        "_hd": 90,
        "all": 90
      },
      "real": {
        "BTC": {
          "id": 7662
        },
        "DOG": {
          "id": 7663
        },
        "ETH": {
          "id": 7664
        },
        "LTC": {
          "id": 7666
        }
      },
      "demo": "/games/gameart/WildWildQuest/7665"
    },
    "gameart/MaradonaHyperWays": {
      "title": "Maradona HyperWays™",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 651,
        "_hd": 57,
        "all": 57
      },
      "real": {
        "BTC": {
          "id": 7669
        },
        "DOG": {
          "id": 7670
        },
        "ETH": {
          "id": 7671
        },
        "LTC": {
          "id": 7673
        }
      },
      "demo": "/games/gameart/MaradonaHyperWays/7672"
    },
    "gameart/DragonLady": {
      "title": "Dragon Lady",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 227,
        "slots": 307,
        "_hd": 29,
        "all": 29
      },
      "real": {
        "BTC": {
          "id": 7676
        },
        "DOG": {
          "id": 7677
        },
        "ETH": {
          "id": 7678
        },
        "LTC": {
          "id": 7680
        }
      },
      "demo": "/games/gameart/DragonLady/7679"
    },
    "gameart/Caligula": {
      "title": "Caligula",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 183,
        "_hd": 15,
        "all": 15
      },
      "real": {
        "BTC": {
          "id": 7683
        },
        "DOG": {
          "id": 7684
        },
        "ETH": {
          "id": 7685
        },
        "LTC": {
          "id": 7687
        }
      },
      "demo": "/games/gameart/Caligula/7686"
    },
    "gameart/SuperHeatedSevens": {
      "title": "Super Heated Sevens",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 932,
        "_hd": 81,
        "all": 81
      },
      "real": {
        "BTC": {
          "id": 7690
        },
        "DOG": {
          "id": 7691
        },
        "ETH": {
          "id": 7692
        },
        "LTC": {
          "id": 7694
        }
      },
      "demo": "/games/gameart/SuperHeatedSevens/7693"
    },
    "gameart/WolfQuest": {
      "title": "Wolf Quest",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1093,
        "_hd": 92,
        "all": 92
      },
      "real": {
        "BTC": {
          "id": 7697
        },
        "DOG": {
          "id": 7698
        },
        "ETH": {
          "id": 7699
        },
        "LTC": {
          "id": 7701
        }
      },
      "demo": "/games/gameart/WolfQuest/7700"
    },
    "gameart/ThreeKings": {
      "title": "Three Kings",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 996,
        "_hd": 85,
        "all": 85
      },
      "real": {
        "BTC": {
          "id": 7704
        },
        "DOG": {
          "id": 7705
        },
        "ETH": {
          "id": 7706
        },
        "LTC": {
          "id": 7708
        }
      },
      "demo": "/games/gameart/ThreeKings/7707"
    },
    "gameart/PiggyBjornMuspelheimsTreasure": {
      "title": "Piggy Bjorn - Muspelheim's Treasure",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 760,
        "_hd": 68,
        "all": 68,
        "bonusbuy": 31
      },
      "real": {
        "BTC": {
          "id": 7718
        },
        "DOG": {
          "id": 7719
        },
        "ETH": {
          "id": 7720
        },
        "LTC": {
          "id": 7722
        }
      },
      "demo": "/games/gameart/PiggyBjornMuspelheimsTreasure/7721"
    },
    "gameart/KingofMonkeys2": {
      "title": "King of Monkeys 2",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 554,
        "_hd": 50,
        "all": 50
      },
      "real": {
        "BTC": {
          "id": 7725
        },
        "DOG": {
          "id": 7726
        },
        "ETH": {
          "id": 7727
        },
        "LTC": {
          "id": 7729
        }
      },
      "demo": "/games/gameart/KingofMonkeys2/7728"
    },
    "gameart/KingOfMonkeys": {
      "title": "King Of Monkeys",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 551,
        "_hd": 48,
        "all": 48
      },
      "real": {
        "BTC": {
          "id": 7732
        },
        "DOG": {
          "id": 7733
        },
        "ETH": {
          "id": 7734
        },
        "LTC": {
          "id": 7736
        }
      },
      "demo": "/games/gameart/KingOfMonkeys/7735"
    },
    "gameart/DawnofOlympus": {
      "title": "Dawn of Olympus",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 266,
        "_hd": 25,
        "all": 25,
        "bonusbuy": 34
      },
      "real": {
        "BTC": {
          "id": 7739
        },
        "DOG": {
          "id": 7740
        },
        "ETH": {
          "id": 7741
        },
        "LTC": {
          "id": 7743
        }
      },
      "demo": "/games/gameart/DawnofOlympus/7742"
    },
    "gameart/HawaiianChristmas": {
      "title": "Hawaiian Christmas",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 461,
        "_hd": 41,
        "all": 41
      },
      "real": {
        "BTC": {
          "id": 7746
        },
        "DOG": {
          "id": 7747
        },
        "ETH": {
          "id": 7748
        },
        "LTC": {
          "id": 7750
        }
      },
      "demo": "/games/gameart/HawaiianChristmas/7749"
    },
    "gameart/BurningFlame": {
      "title": "Burning Flame",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 177,
        "_hd": 14,
        "all": 14
      },
      "real": {
        "BTC": {
          "id": 7753
        },
        "DOG": {
          "id": 7754
        },
        "ETH": {
          "id": 7755
        },
        "LTC": {
          "id": 7757
        }
      },
      "demo": "/games/gameart/BurningFlame/7756"
    },
    "gameart/NefertitisNile": {
      "title": "Nefertiti's Nile",
      "provider": "gameart",
      "collections": {
        "novelty": 104,
        "popularity": 398,
        "slots": 711,
        "_hd": 64,
        "all": 64
      },
      "real": {
        "BTC": {
          "id": 7760
        },
        "DOG": {
          "id": 7761
        },
        "ETH": {
          "id": 7762
        },
        "LTC": {
          "id": 7764
        }
      },
      "demo": "/games/gameart/NefertitisNile/7763"
    },
    "gameart/ChiliQuest": {
      "title": "Chili Quest",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 212,
        "_hd": 18,
        "all": 18,
        "bonusbuy": 33
      },
      "real": {
        "BTC": {
          "id": 7767
        },
        "DOG": {
          "id": 7768
        },
        "ETH": {
          "id": 7769
        },
        "LTC": {
          "id": 7771
        }
      },
      "demo": "/games/gameart/ChiliQuest/7770"
    },
    "gameart/AliBabasRiches": {
      "title": "Ali Baba's Riches",
      "provider": "gameart",
      "collections": {
        "novelty": 93,
        "popularity": 398,
        "slots": 60,
        "_hd": 4,
        "all": 4
      },
      "real": {
        "BTC": {
          "id": 7774
        },
        "DOG": {
          "id": 7775
        },
        "ETH": {
          "id": 7776
        },
        "LTC": {
          "id": 7778
        }
      },
      "demo": "/games/gameart/AliBabasRiches/7777"
    },
    "gameart/CaptainCandy": {
      "title": "Captain Candy",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 186,
        "_hd": 16,
        "all": 16
      },
      "real": {
        "BTC": {
          "id": 7781
        },
        "DOG": {
          "id": 7782
        },
        "ETH": {
          "id": 7783
        },
        "LTC": {
          "id": 7785
        }
      },
      "demo": "/games/gameart/CaptainCandy/7784"
    },
    "gameart/WildDolphin": {
      "title": "Wild Dolphin",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 280,
        "slots": 1062,
        "_hd": 89,
        "all": 89
      },
      "real": {
        "BTC": {
          "id": 7788
        },
        "DOG": {
          "id": 7789
        },
        "ETH": {
          "id": 7790
        },
        "LTC": {
          "id": 7792
        }
      },
      "demo": "/games/gameart/WildDolphin/7791"
    },
    "gameart/NightatKTV": {
      "title": "Night at KTV",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 719,
        "_hd": 65,
        "all": 65
      },
      "real": {
        "BTC": {
          "id": 7795
        },
        "DOG": {
          "id": 7796
        },
        "ETH": {
          "id": 7797
        },
        "LTC": {
          "id": 7799
        }
      },
      "demo": "/games/gameart/NightatKTV/7798"
    },
    "gameart/PiggyHolmes": {
      "title": "Piggy Holmes",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 115,
        "slots": 761,
        "_hd": 69,
        "all": 69
      },
      "real": {
        "BTC": {
          "id": 7802
        },
        "DOG": {
          "id": 7803
        },
        "ETH": {
          "id": 7804
        },
        "LTC": {
          "id": 7806
        }
      },
      "demo": "/games/gameart/PiggyHolmes/7805"
    },
    "gameart/MoneyFarm": {
      "title": "Money Farm",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 94,
        "slots": 683,
        "_hd": 60,
        "all": 60
      },
      "real": {
        "BTC": {
          "id": 7809
        },
        "DOG": {
          "id": 7810
        },
        "ETH": {
          "id": 7811
        },
        "LTC": {
          "id": 7813
        }
      },
      "demo": "/games/gameart/MoneyFarm/7812"
    },
    "gameart/AzrabahWishes": {
      "title": "Azrabah Wishes",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 85,
        "_hd": 8,
        "all": 8
      },
      "real": {
        "BTC": {
          "id": 7816
        },
        "DOG": {
          "id": 7817
        },
        "ETH": {
          "id": 7818
        },
        "LTC": {
          "id": 7820
        }
      },
      "demo": "/games/gameart/AzrabahWishes/7819"
    },
    "gameart/StarCash": {
      "title": "Star Cash",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 907,
        "_hd": 78,
        "all": 78
      },
      "real": {
        "BTC": {
          "id": 7823
        },
        "DOG": {
          "id": 7824
        },
        "ETH": {
          "id": 7825
        },
        "LTC": {
          "id": 7827
        }
      },
      "demo": "/games/gameart/StarCash/7826"
    },
    "gameart/Tesla": {
      "title": "Tesla",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 40,
        "slots": 953,
        "_hd": 83,
        "all": 83
      },
      "real": {
        "BTC": {
          "id": 7837
        },
        "DOG": {
          "id": 7838
        },
        "ETH": {
          "id": 7839
        },
        "LTC": {
          "id": 7841
        }
      },
      "demo": "/games/gameart/Tesla/7840"
    },
    "gameart/PowerDragon": {
      "title": "Power Dragon",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 784,
        "_hd": 70,
        "all": 70
      },
      "real": {
        "BTC": {
          "id": 7851
        },
        "DOG": {
          "id": 7852
        },
        "ETH": {
          "id": 7853
        },
        "LTC": {
          "id": 7855
        }
      },
      "demo": "/games/gameart/PowerDragon/7854"
    },
    "gameart/GoldOfRa": {
      "title": "Gold Of Ra",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 233,
        "slots": 419,
        "_hd": 39,
        "all": 39
      },
      "real": {
        "BTC": {
          "id": 7858
        },
        "DOG": {
          "id": 7859
        },
        "ETH": {
          "id": 7860
        },
        "LTC": {
          "id": 7862
        }
      },
      "demo": "/games/gameart/GoldOfRa/7861"
    },
    "gameart/PhoenixPrincess": {
      "title": "Phoenix Princess",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 758,
        "_hd": 67,
        "all": 67
      },
      "real": {
        "BTC": {
          "id": 7865
        },
        "DOG": {
          "id": 7866
        },
        "ETH": {
          "id": 7867
        },
        "LTC": {
          "id": 7869
        }
      },
      "demo": "/games/gameart/PhoenixPrincess/7868"
    },
    "gameart/TigerHeart": {
      "title": "Tiger Heart",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 165,
        "slots": 1000,
        "_hd": 87,
        "all": 87,
        "bonusbuy": 40
      },
      "real": {
        "BTC": {
          "id": 7872
        },
        "DOG": {
          "id": 7873
        },
        "ETH": {
          "id": 7874
        },
        "LTC": {
          "id": 7876
        }
      },
      "demo": "/games/gameart/TigerHeart/7875"
    },
    "gameart/JadeTreasure": {
      "title": "Jade Treasure",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 516,
        "_hd": 45,
        "all": 45
      },
      "real": {
        "BTC": {
          "id": 7879
        },
        "DOG": {
          "id": 7880
        },
        "ETH": {
          "id": 7881
        },
        "LTC": {
          "id": 7883
        }
      },
      "demo": "/games/gameart/JadeTreasure/7882"
    },
    "gameart/AncientGong": {
      "title": "Ancient Gong",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 272,
        "slots": 70,
        "_hd": 5,
        "all": 5
      },
      "real": {
        "BTC": {
          "id": 7886
        },
        "DOG": {
          "id": 7887
        },
        "ETH": {
          "id": 7888
        },
        "LTC": {
          "id": 7890
        }
      },
      "demo": "/games/gameart/AncientGong/7889"
    },
    "gameart/BookOziris": {
      "title": "Book of Oziris",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 148,
        "_hd": 12,
        "all": 12
      },
      "real": {
        "BTC": {
          "id": 7893
        },
        "DOG": {
          "id": 7894
        },
        "ETH": {
          "id": 7895
        },
        "LTC": {
          "id": 7897
        }
      },
      "demo": "/games/gameart/BookOziris/7896"
    },
    "gameart/DaVinciCodex": {
      "title": "DaVinci Codex",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 133,
        "slots": 262,
        "_hd": 23,
        "all": 23
      },
      "real": {
        "BTC": {
          "id": 7900
        },
        "DOG": {
          "id": 7901
        },
        "ETH": {
          "id": 7902
        },
        "LTC": {
          "id": 7904
        }
      },
      "demo": "/games/gameart/DaVinciCodex/7903"
    },
    "gameart/4Symbols": {
      "title": "4 Symbols",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 25,
        "_hd": 0,
        "all": 0
      },
      "real": {
        "BTC": {
          "id": 7907
        },
        "DOG": {
          "id": 7908
        },
        "ETH": {
          "id": 7909
        },
        "LTC": {
          "id": 7911
        }
      },
      "demo": "/games/gameart/4Symbols/7910"
    },
    "gameart/SushiYatta": {
      "title": "Sushi Yatta",
      "provider": "gameart",
      "collections": {
        "novelty": 30,
        "popularity": 398,
        "slots": 939,
        "_hd": 82,
        "all": 82
      },
      "real": {
        "BTC": {
          "id": 7914
        },
        "DOG": {
          "id": 7915
        },
        "ETH": {
          "id": 7916
        },
        "LTC": {
          "id": 7918
        }
      },
      "demo": "/games/gameart/SushiYatta/7917"
    },
    "gameart/EmperorsWealth": {
      "title": "Emperors Wealth",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 333,
        "_hd": 33,
        "all": 33
      },
      "real": {
        "BTC": {
          "id": 7921
        },
        "DOG": {
          "id": 7922
        },
        "ETH": {
          "id": 7923
        },
        "LTC": {
          "id": 7925
        }
      },
      "demo": "/games/gameart/EmperorsWealth/7924"
    },
    "gameart/MoreCash": {
      "title": "More Cash",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 699,
        "_hd": 63,
        "all": 63
      },
      "real": {
        "BTC": {
          "id": 7928
        },
        "DOG": {
          "id": 7929
        },
        "ETH": {
          "id": 7930
        },
        "LTC": {
          "id": 7932
        }
      },
      "demo": "/games/gameart/MoreCash/7931"
    },
    "gameart/AtlantisWorld": {
      "title": "Atlantis World",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 84,
        "_hd": 7,
        "all": 7
      },
      "real": {
        "BTC": {
          "id": 7935
        },
        "DOG": {
          "id": 7936
        },
        "ETH": {
          "id": 7937
        },
        "LTC": {
          "id": 7939
        }
      },
      "demo": "/games/gameart/AtlantisWorld/7938"
    },
    "gameart/StormingFlame": {
      "title": "Storming Flame",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 913,
        "_hd": 79,
        "all": 79
      },
      "real": {
        "BTC": {
          "id": 7942
        },
        "DOG": {
          "id": 7943
        },
        "ETH": {
          "id": 7944
        },
        "LTC": {
          "id": 7946
        }
      },
      "demo": "/games/gameart/StormingFlame/7945"
    },
    "gameart/AfricanSunset2": {
      "title": "African Sunset 2",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 57,
        "_hd": 3,
        "all": 3,
        "bonusbuy": 32
      },
      "real": {
        "BTC": {
          "id": 7949
        },
        "DOG": {
          "id": 7950
        },
        "ETH": {
          "id": 7951
        },
        "LTC": {
          "id": 7953
        }
      },
      "demo": "/games/gameart/AfricanSunset2/7952"
    },
    "gameart/ElToreo": {
      "title": "El Toreo",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 329,
        "_hd": 32,
        "all": 32
      },
      "real": {
        "BTC": {
          "id": 7956
        },
        "DOG": {
          "id": 7957
        },
        "ETH": {
          "id": 7958
        },
        "LTC": {
          "id": 7960
        }
      },
      "demo": "/games/gameart/ElToreo/7959"
    },
    "gameart/FlamingReels": {
      "title": "Flaming Reels",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 368,
        "_hd": 36,
        "all": 36
      },
      "real": {
        "BTC": {
          "id": 7963
        },
        "DOG": {
          "id": 7964
        },
        "ETH": {
          "id": 7965
        },
        "LTC": {
          "id": 7967
        }
      },
      "demo": "/games/gameart/FlamingReels/7966"
    },
    "gameart/BattleforCosmos": {
      "title": "Battle for Cosmos",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 104,
        "_hd": 10,
        "all": 10
      },
      "real": {
        "BTC": {
          "id": 7970
        },
        "DOG": {
          "id": 7971
        },
        "ETH": {
          "id": 7972
        },
        "LTC": {
          "id": 7974
        }
      },
      "demo": "/games/gameart/BattleforCosmos/7973"
    },
    "gameart/CrystalMystery": {
      "title": "Crystal Mystery",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 21,
        "slots": 253,
        "_hd": 22,
        "all": 22
      },
      "real": {
        "BTC": {
          "id": 7977
        },
        "DOG": {
          "id": 7978
        },
        "ETH": {
          "id": 7979
        },
        "LTC": {
          "id": 7981
        }
      },
      "demo": "/games/gameart/CrystalMystery/7980"
    },
    "gameart/SpartansLegacy": {
      "title": "Spartans Legacy",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 32,
        "slots": 895,
        "_hd": 77,
        "all": 77
      },
      "real": {
        "BTC": {
          "id": 7984
        },
        "DOG": {
          "id": 7985
        },
        "ETH": {
          "id": 7986
        },
        "LTC": {
          "id": 7988
        }
      },
      "demo": "/games/gameart/SpartansLegacy/7987"
    },
    "gameart/LuckyBabies": {
      "title": "Lucky Babies",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 600,
        "_hd": 53,
        "all": 53
      },
      "real": {
        "BTC": {
          "id": 7991
        },
        "DOG": {
          "id": 7992
        },
        "ETH": {
          "id": 7993
        },
        "LTC": {
          "id": 7995
        }
      },
      "demo": "/games/gameart/LuckyBabies/7994"
    },
    "gameart/88Riches": {
      "title": "88 Riches",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 46,
        "_hd": 1,
        "all": 1
      },
      "real": {
        "BTC": {
          "id": 7998
        },
        "DOG": {
          "id": 7999
        },
        "ETH": {
          "id": 8000
        },
        "LTC": {
          "id": 8002
        }
      },
      "demo": "/games/gameart/88Riches/8001"
    },
    "gameart/DragonKing": {
      "title": "Dragon King",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 304,
        "_hd": 28,
        "all": 28
      },
      "real": {
        "BTC": {
          "id": 8005
        },
        "DOG": {
          "id": 8006
        },
        "ETH": {
          "id": 8007
        },
        "LTC": {
          "id": 8009
        }
      },
      "demo": "/games/gameart/DragonKing/8008"
    },
    "gameart/DragonWhisperer": {
      "title": "Dragon Whisperer",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 311,
        "_hd": 30,
        "all": 30
      },
      "real": {
        "BTC": {
          "id": 8012
        },
        "DOG": {
          "id": 8013
        },
        "ETH": {
          "id": 8014
        },
        "LTC": {
          "id": 8016
        }
      },
      "demo": "/games/gameart/DragonWhisperer/8015"
    },
    "gameart/MagicUnicorn": {
      "title": "Magic Unicorn",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 644,
        "_hd": 56,
        "all": 56
      },
      "real": {
        "BTC": {
          "id": 8019
        },
        "DOG": {
          "id": 8020
        },
        "ETH": {
          "id": 8021
        },
        "LTC": {
          "id": 8023
        }
      },
      "demo": "/games/gameart/MagicUnicorn/8022"
    },
    "gameart/BubbleFruits": {
      "title": "Bubble Fruits",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 168,
        "_hd": 13,
        "all": 13
      },
      "real": {
        "BTC": {
          "id": 8026
        },
        "DOG": {
          "id": 8027
        },
        "ETH": {
          "id": 8028
        },
        "LTC": {
          "id": 8030
        }
      },
      "demo": "/games/gameart/BubbleFruits/8029"
    },
    "gameart/ThunderBird": {
      "title": "Thunder Bird",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 48,
        "slots": 999,
        "_hd": 86,
        "all": 86,
        "bonusbuy": 39
      },
      "real": {
        "BTC": {
          "id": 8033
        },
        "DOG": {
          "id": 8034
        },
        "ETH": {
          "id": 8035
        },
        "LTC": {
          "id": 8037
        }
      },
      "demo": "/games/gameart/ThunderBird/8036"
    },
    "gameart/MariachiFiesta": {
      "title": "Mariachi Fiesta",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 652,
        "_hd": 58,
        "all": 58
      },
      "real": {
        "BTC": {
          "id": 8040
        },
        "DOG": {
          "id": 8041
        },
        "ETH": {
          "id": 8042
        },
        "LTC": {
          "id": 8044
        }
      },
      "demo": "/games/gameart/MariachiFiesta/8043"
    },
    "gameart/Cleopatra": {
      "title": "Cleopatra Jewels",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 227,
        "_hd": 21,
        "all": 21
      },
      "real": {
        "BTC": {
          "id": 8047
        },
        "DOG": {
          "id": 8048
        },
        "ETH": {
          "id": 8049
        },
        "LTC": {
          "id": 8051
        }
      },
      "demo": "/games/gameart/Cleopatra/8050"
    },
    "gameart/MagicDragon": {
      "title": "Magic Dragon",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 71,
        "slots": 638,
        "_hd": 55,
        "all": 55,
        "bonusbuy": 36
      },
      "real": {
        "BTC": {
          "id": 8054
        },
        "DOG": {
          "id": 8055
        },
        "ETH": {
          "id": 8056
        },
        "LTC": {
          "id": 8058
        }
      },
      "demo": "/games/gameart/MagicDragon/8057"
    },
    "gameart/HawaiianFruits": {
      "title": "Hawaiian Fruits",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 462,
        "_hd": 42,
        "all": 42
      },
      "real": {
        "BTC": {
          "id": 8061
        },
        "DOG": {
          "id": 8062
        },
        "ETH": {
          "id": 8063
        },
        "LTC": {
          "id": 8065
        }
      },
      "demo": "/games/gameart/HawaiianFruits/8064"
    },
    "gameart/Hollywoof": {
      "title": "Hollywoof",
      "provider": "gameart",
      "collections": {
        "novelty": 11,
        "popularity": 398,
        "slots": 471,
        "_hd": 43,
        "all": 43,
        "bonusbuy": 35
      },
      "real": {
        "BTC": {
          "id": 8068
        },
        "DOG": {
          "id": 8069
        },
        "ETH": {
          "id": 8070
        },
        "LTC": {
          "id": 8072
        }
      },
      "demo": "/games/gameart/Hollywoof/8071"
    },
    "gameart/BookofAlchemy": {
      "title": "Book of Alchemy",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 138,
        "_hd": 11,
        "all": 11
      },
      "real": {
        "BTC": {
          "id": 8075
        },
        "DOG": {
          "id": 8076
        },
        "ETH": {
          "id": 8077
        },
        "LTC": {
          "id": 8079
        }
      },
      "demo": "/games/gameart/BookofAlchemy/8078"
    },
    "gameart/JumpinPot": {
      "title": "Jumpin Pot",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 545,
        "_hd": 47,
        "all": 47
      },
      "real": {
        "BTC": {
          "id": 8082
        },
        "DOG": {
          "id": 8083
        },
        "ETH": {
          "id": 8084
        },
        "LTC": {
          "id": 8086
        }
      },
      "demo": "/games/gameart/JumpinPot/8085"
    },
    "gameart/KittyTwins": {
      "title": "Kitty Twins",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 560,
        "_hd": 51,
        "all": 51
      },
      "real": {
        "BTC": {
          "id": 8089
        },
        "DOG": {
          "id": 8090
        },
        "ETH": {
          "id": 8091
        },
        "LTC": {
          "id": 8093
        }
      },
      "demo": "/games/gameart/KittyTwins/8092"
    },
    "gameart/NornsFate": {
      "title": "Norn's Fate",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 725,
        "_hd": 66,
        "all": 66
      },
      "real": {
        "BTC": {
          "id": 8096
        },
        "DOG": {
          "id": 8097
        },
        "ETH": {
          "id": 8098
        },
        "LTC": {
          "id": 8100
        }
      },
      "demo": "/games/gameart/NornsFate/8099"
    },
    "gameart/CastleBlood": {
      "title": "Castle Blood",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 197,
        "_hd": 17,
        "all": 17
      },
      "real": {
        "BTC": {
          "id": 8103
        },
        "DOG": {
          "id": 8104
        },
        "ETH": {
          "id": 8105
        },
        "LTC": {
          "id": 8107
        }
      },
      "demo": "/games/gameart/CastleBlood/8106"
    },
    "gameart/FiveStarLuxury": {
      "title": "Five Star Luxury",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 366,
        "_hd": 35,
        "all": 35
      },
      "real": {
        "BTC": {
          "id": 8110
        },
        "DOG": {
          "id": 8111
        },
        "ETH": {
          "id": 8112
        },
        "LTC": {
          "id": 8114
        }
      },
      "demo": "/games/gameart/FiveStarLuxury/8113"
    },
    "gameart/RamsesTreasure": {
      "title": "Ramses Treasure",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 804,
        "_hd": 72,
        "all": 72
      },
      "real": {
        "BTC": {
          "id": 8117
        },
        "DOG": {
          "id": 8118
        },
        "ETH": {
          "id": 8119
        },
        "LTC": {
          "id": 8121
        }
      },
      "demo": "/games/gameart/RamsesTreasure/8120"
    },
    "gameart/Venetia": {
      "title": "Venetia",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1034,
        "_hd": 88,
        "all": 88
      },
      "real": {
        "BTC": {
          "id": 8124
        },
        "DOG": {
          "id": 8125
        },
        "ETH": {
          "id": 8126
        },
        "LTC": {
          "id": 8128
        }
      },
      "demo": "/games/gameart/Venetia/8127"
    },
    "gameart/QueenofTheSeas": {
      "title": "Queen Of The Seas",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 251,
        "slots": 799,
        "_hd": 71,
        "all": 71
      },
      "real": {
        "BTC": {
          "id": 8131
        },
        "DOG": {
          "id": 8132
        },
        "ETH": {
          "id": 8133
        },
        "LTC": {
          "id": 8135
        }
      },
      "demo": "/games/gameart/QueenofTheSeas/8134"
    },
    "gameart/ExplosiveReels": {
      "title": "Explosive Reels",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 341,
        "_hd": 34,
        "all": 34
      },
      "real": {
        "BTC": {
          "id": 8138
        },
        "DOG": {
          "id": 8139
        },
        "ETH": {
          "id": 8140
        },
        "LTC": {
          "id": 8142
        }
      },
      "demo": "/games/gameart/ExplosiveReels/8141"
    },
    "gameart/DynamiteFruits": {
      "title": "Dynamite Fruits",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 322,
        "_hd": 31,
        "all": 31
      },
      "real": {
        "BTC": {
          "id": 8145
        },
        "DOG": {
          "id": 8146
        },
        "ETH": {
          "id": 8147
        },
        "LTC": {
          "id": 8149
        }
      },
      "demo": "/games/gameart/DynamiteFruits/8148"
    },
    "gameart/TexasRangersReward": {
      "title": "Texas Rangers Reward",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 954,
        "_hd": 84,
        "all": 84
      },
      "real": {
        "BTC": {
          "id": 8152
        },
        "DOG": {
          "id": 8153
        },
        "ETH": {
          "id": 8154
        },
        "LTC": {
          "id": 8156
        }
      },
      "demo": "/games/gameart/TexasRangersReward/8155"
    },
    "gameart/SummerJam": {
      "title": "Summer Jam",
      "provider": "gameart",
      "collections": {
        "novelty": 18,
        "popularity": 95,
        "slots": 921,
        "_hd": 80,
        "all": 80,
        "bonusbuy": 38
      },
      "real": {
        "BTC": {
          "id": 8159
        },
        "DOG": {
          "id": 8160
        },
        "ETH": {
          "id": 8161
        },
        "LTC": {
          "id": 8163
        }
      },
      "demo": "/games/gameart/SummerJam/8162"
    },
    "gameart/MonkeyPirates": {
      "title": "Monkey Pirates",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 690,
        "_hd": 62,
        "all": 62
      },
      "real": {
        "BTC": {
          "id": 8166
        },
        "DOG": {
          "id": 8167
        },
        "ETH": {
          "id": 8168
        },
        "LTC": {
          "id": 8170
        }
      },
      "demo": "/games/gameart/MonkeyPirates/8169"
    },
    "gameart/CircusofHorror": {
      "title": "Circus of Horror",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 224,
        "_hd": 20,
        "all": 20
      },
      "real": {
        "BTC": {
          "id": 8173
        },
        "DOG": {
          "id": 8174
        },
        "ETH": {
          "id": 8175
        },
        "LTC": {
          "id": 8177
        }
      },
      "demo": "/games/gameart/CircusofHorror/8176"
    },
    "gameart/MoneyFarmTwo": {
      "title": "Money Farm 2",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 159,
        "slots": 684,
        "_hd": 61,
        "all": 61
      },
      "real": {
        "BTC": {
          "id": 8180
        },
        "DOG": {
          "id": 8181
        },
        "ETH": {
          "id": 8182
        },
        "LTC": {
          "id": 8184
        }
      },
      "demo": "/games/gameart/MoneyFarmTwo/8183"
    },
    "gameart/FortuneLions": {
      "title": "Fortune Lions",
      "provider": "gameart",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 376,
        "_hd": 37,
        "all": 37
      },
      "real": {
        "BTC": {
          "id": 8187
        },
        "DOG": {
          "id": 8188
        },
        "ETH": {
          "id": 8189
        },
        "LTC": {
          "id": 8191
        }
      },
      "demo": "/games/gameart/FortuneLions/8190"
    },
    "evolution/rngdragontiger": {
      "title": "First Person Dragon Tiger",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 172,
        "live": 187,
        "_hd": 585,
        "all": 610
      },
      "real": {
        "BTC": {
          "id": 8194
        },
        "ETH": {
          "id": 8195
        },
        "LTC": {
          "id": 8196
        },
        "XRP": {
          "id": 8197
        }
      }
    },
    "evolution/FirstPersonLightningBaccarat": {
      "title": "First Person Lightning Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 174,
        "live": 190,
        "_hd": 588,
        "all": 613
      },
      "real": {
        "BTC": {
          "id": 8198
        },
        "ETH": {
          "id": 8199
        },
        "LTC": {
          "id": 8200
        },
        "XRP": {
          "id": 8201
        }
      }
    },
    "evolution/rngbaccarat": {
      "title": "First Person Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 170,
        "live": 184,
        "_hd": 582,
        "baccarat": 5,
        "all": 607
      },
      "real": {
        "BTC": {
          "id": 8206
        },
        "ETH": {
          "id": 8207
        },
        "LTC": {
          "id": 8208
        },
        "XRP": {
          "id": 8209
        }
      }
    },
    "evolution/cashorcrash": {
      "title": "Cash or Crash",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 13,
        "live": 123,
        "lottery": 0,
        "game-shows": 0,
        "_hd": 379,
        "all": 394
      },
      "real": {
        "BTC": {
          "id": 8210
        },
        "ETH": {
          "id": 8211
        },
        "LTC": {
          "id": 8212
        },
        "XRP": {
          "id": 8213
        }
      }
    },
    "evolution/fan_tan": {
      "title": "Fan Tan",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 169,
        "card": 169,
        "live": 183,
        "_hd": 567,
        "all": 590
      },
      "real": {
        "BTC": {
          "id": 8214
        },
        "ETH": {
          "id": 8215
        },
        "LTC": {
          "id": 8216
        },
        "XRP": {
          "id": 8217
        }
      }
    },
    "evolution/GoldenWealthBaccarat": {
      "title": "Golden Wealth Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 5,
        "popularity": 75,
        "card": 178,
        "live": 199,
        "_hd": 660,
        "all": 689
      },
      "real": {
        "BTC": {
          "id": 8218
        },
        "ETH": {
          "id": 8219
        },
        "LTC": {
          "id": 8220
        },
        "XRP": {
          "id": 8221
        }
      }
    },
    "evolution/rngtopcard": {
      "title": "First Person Top Card",
      "provider": "evolution",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "card": 175,
        "live": 194,
        "_hd": 592,
        "all": 617
      },
      "real": {
        "BTC": {
          "id": 8222
        },
        "ETH": {
          "id": 8223
        },
        "LTC": {
          "id": 8224
        },
        "XRP": {
          "id": 8225
        }
      }
    },
    "evolution/FirstPersonGoldenWealthBaccarat": {
      "title": "First Person Golden Wealth Baccarat",
      "provider": "evolution",
      "collections": {
        "novelty": 4,
        "popularity": 398,
        "card": 173,
        "live": 189,
        "_hd": 587,
        "all": 612
      },
      "real": {
        "BTC": {
          "id": 8226
        },
        "ETH": {
          "id": 8227
        },
        "LTC": {
          "id": 8228
        },
        "XRP": {
          "id": 8229
        }
      }
    },
    "pragmaticexternal/DayofDead": {
      "title": "Day of Dead",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 278,
        "slots": 268,
        "_hd": 495,
        "all": 512,
        "bonusbuy": 52
      },
      "real": {
        "BTC": {
          "id": 8230
        },
        "ETH": {
          "id": 8231
        },
        "LTC": {
          "id": 8233
        }
      },
      "demo": "/games/pragmaticexternal/DayofDead/8232"
    },
    "pragmaticexternal/JohnHunterandtheQuestforBermudaRiches": {
      "title": "John Hunter and the Quest for Bermuda Riches",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 2,
        "popularity": 155,
        "slots": 529,
        "_hd": 744,
        "all": 782,
        "bonusbuy": 54
      },
      "real": {
        "BTC": {
          "id": 8234
        },
        "ETH": {
          "id": 8235
        },
        "LTC": {
          "id": 8237
        }
      },
      "demo": "/games/pragmaticexternal/JohnHunterandtheQuestforBermudaRiches/8236"
    },
    "pragmaticexternal/StarlightPrincess": {
      "title": "Starlight Princess",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 10,
        "popularity": 139,
        "slots": 908,
        "_hd": 1141,
        "all": 1194,
        "bonusbuy": 56
      },
      "real": {
        "BTC": {
          "id": 8238
        },
        "ETH": {
          "id": 8239
        },
        "LTC": {
          "id": 8241
        }
      },
      "demo": "/games/pragmaticexternal/StarlightPrincess/8240"
    },
    "pragmaticexternal/TreasureWild": {
      "title": "Treasure Wild",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 8,
        "popularity": 241,
        "slots": 1011,
        "_hd": 1240,
        "all": 1293,
        "bonusbuy": 57
      },
      "real": {
        "BTC": {
          "id": 8242
        },
        "ETH": {
          "id": 8243
        },
        "LTC": {
          "id": 8245
        }
      },
      "demo": "/games/pragmaticexternal/TreasureWild/8244"
    },
    "pragmaticexternal/YumYumPowerways": {
      "title": "Yum Yum Powerways",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 14,
        "popularity": 228,
        "slots": 1099,
        "_hd": 1317,
        "all": 1379,
        "bonusbuy": 58
      },
      "real": {
        "BTC": {
          "id": 8246
        },
        "ETH": {
          "id": 8247
        },
        "LTC": {
          "id": 8249
        }
      },
      "demo": "/games/pragmaticexternal/YumYumPowerways/8248"
    },
    "booming/MoneyMoose": {
      "title": "Money Moose",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 685,
        "_hd": 880,
        "all": 929
      },
      "real": {
        "BTC": {
          "id": 8250
        },
        "DOG": {
          "id": 8251
        },
        "ETH": {
          "id": 8252
        },
        "LTC": {
          "id": 8254
        }
      },
      "demo": "/games/booming/MoneyMoose/8253"
    },
    "booming/WildBonusReSpins": {
      "title": "Wild Bonus Re-Spins",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 1057,
        "_hd": 1284,
        "all": 1341
      },
      "real": {
        "BTC": {
          "id": 8255
        },
        "DOG": {
          "id": 8256
        },
        "ETH": {
          "id": 8257
        },
        "LTC": {
          "id": 8259
        }
      },
      "demo": "/games/booming/WildBonusReSpins/8258"
    },
    "booming/RedHotVolcano": {
      "title": "Red Hot Volcano",
      "provider": "booming",
      "collections": {
        "novelty": 13,
        "popularity": 398,
        "slots": 806,
        "_hd": 997,
        "all": 1048
      },
      "real": {
        "BTC": {
          "id": 8260
        },
        "DOG": {
          "id": 8261
        },
        "ETH": {
          "id": 8262
        },
        "LTC": {
          "id": 8264
        }
      },
      "demo": "/games/booming/RedHotVolcano/8263"
    },
    "booming/RhinoHoldandWin": {
      "title": "Rhino Hold and Win",
      "provider": "booming",
      "collections": {
        "novelty": 7,
        "popularity": 398,
        "slots": 812,
        "_hd": 1003,
        "all": 1054
      },
      "real": {
        "BTC": {
          "id": 8265
        },
        "DOG": {
          "id": 8266
        },
        "ETH": {
          "id": 8267
        },
        "LTC": {
          "id": 8269
        }
      },
      "demo": "/games/booming/RhinoHoldandWin/8268"
    },
    "booming/MightyGorilla": {
      "title": "Mighty Gorilla",
      "provider": "booming",
      "collections": {
        "novelty": 0,
        "popularity": 398,
        "slots": 677,
        "_hd": 874,
        "all": 923
      },
      "real": {
        "BTC": {
          "id": 8270
        },
        "DOG": {
          "id": 8271
        },
        "ETH": {
          "id": 8272
        },
        "LTC": {
          "id": 8274
        }
      },
      "demo": "/games/booming/MightyGorilla/8273"
    },
    "pragmaticexternal/BigJuan": {
      "title": "Big Juan",
      "provider": "pragmaticplay",
      "collections": {
        "novelty": 0,
        "popularity": 311,
        "slots": 116,
        "new": 0,
        "_hd": 202,
        "all": 210,
        "bonusbuy": 0
      },
      "real": {
        "BTC": {
          "id": 8275
        },
        "ETH": {
          "id": 8276
        },
        "LTC": {
          "id": 8278
        }
      },
      "demo": "/games/pragmaticexternal/BigJuan/8277"
    }
  },
  gameNamesArray: []
}
export default function gamesReducer(state = initialState, action){
    
  switch(action.type){
    case GAMES:{
      return {
        ...state,
        games: state.games
      };
    }
    case GAMENAMES:{
      return {
        ...state,
        gameNamesArray: Object.keys(state.games)
      };
    }
    default: return state;
  }
  }