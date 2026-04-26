const MENU_DATA = {
  foods: {
    label: "Alimentos",
    eyebrow: "Menú Casa Checo",
    title: "Alimentos",
    description:
      "Una carta pensada para desayunar, comer y disfrutar con calma.",
    sections: [
      {
        id: "desayunos-dulces",
        title: "Desayunos · Dulces",
        items: [
          {
            name: "Croissant Checo",
            description:
              "Barnizado con café, relleno de sutil crema dulce de queso mascarpone, espolvoreado con cocoa y azúcar glass.",
            price: "$160",
          },
          { name: "Waffles", price: "$145" },
          { name: "Hot Cakes", price: "$145" },
          { name: "Pan dulce", price: "$38" },
          {
            name: "Bowl de fruta con yogurt y granola",
            meta: "3240 gr.",
            description:
              "Mix de fruta de temporada acompañado de yogurt griego natural, granola y un toque de miel.",
            price: "$140",
          },
          {
            name: "Bowl de fruta de temporada",
            meta: "100 gr.",
            price: "$70",
          },
        ],
      },
      {
        id: "desayunos-salados",
        title: "Desayunos · Salados",
        items: [
          {
            name: "Omelet de Salmón y Queso de Cabra",
            description:
              "Relleno de queso, cubierto con láminas de salmón ahumado y salsa blanca de cítricos y romero. Acompañado de ensalada de arúgula, espinaca baby y nuez.",
            price: "$290",
          },
          {
            name: "Huevos Tradición",
            description:
              "Dos huevos estrellados sobre tortilla azul, bañados en salsa morita con chicharrón, cubos de queso fresco, nopales y frijoles refritos.",
            price: "$150",
          },
          {
            name: "Los Favoritos",
            description:
              "Huevos revueltos con cubos de filete en salsa suave de chile de árbol, acompañados de chilaquiles de frijol con epazote.",
            price: "$155",
          },
        ],
      },
      {
        id: "chilaquiles",
        title: "Chilaquiles",
        items: [
          {
            name: "Con costilla de res",
            description: "En salsa borracha tatemada y queso asado ranchero.",
            price: "$210",
          },
          {
            name: "Suizos gratinados",
            description: "Con arrachera a la parrilla.",
            price: "$210",
          },
          {
            name: "Con mole oaxaqueño de la casa",
            description:
              "Con pechuga a la parrilla, crema, queso fresco y cebolla morada.",
            price: "$210",
          },
          {
            name: "Tradicionales",
            description:
              "En salsa verde o roja con huevos revueltos (2 pzas.) o pollo.",
            price: "$190",
          },
        ],
      },
      {
        id: "desayuno-ejecutivo",
        title: "Desayuno ejecutivo",
        special: true,
        price: "$150",
        included: ["Jugo", "Fruta", "Pan dulce", "Café", "Huevos al gusto"],
      },
      {
        id: "entradas",
        title: "Entradas",
        items: [
          {
            name: "Trilogía de taquitos crocantes de cochinita pibil",
            description: "Con salsa de habanero, frijol y cebollita xnipec.",
            price: "$165",
          },
          {
            name: "Enchiladas criollas",
            description: "Rellenas de pollo, bañadas en tres moles.",
            price: "$185",
          },
          {
            name: "Quesadillitas comaleras",
            meta: "4 pzas.",
            description:
              "Flor de calabaza con queso fresco; epazote con champiñones; queso con huitlacoche y quesillo con chapulines.",
            price: "$199",
          },
          {
            name: "Guacamole",
            description: "Con chicharrón de la casa.",
            price: "$190",
          },
          {
            name: "Taquitos de camarón",
            meta: "3 pzas.",
            description:
              "En tempura con salsa tártara, ensalada de col mixta y salsa macha.",
            price: "$215",
          },
          {
            name: "Tostada de pulpo",
            description: "Al ajillo con mayonesa de la casa.",
            price: "$210",
          },
        ],
      },
      {
        id: "ensaladas",
        title: "Ensaladas",
        items: [
          {
            name: "Espinaca",
            description:
              "Espinaca baby, champiñones, julianas de tortilla, nuez, polvo de chile guajillo, panela y aderezo de chile guajillo.",
            price: "$150",
          },
          {
            name: "Higo",
            description:
              "Jamón serrano, espinaca baby, arúgula, nuez caramelizada, queso azul y miel de abeja.",
            price: "$195",
          },
          {
            name: "Betabel",
            description:
              "Tira de betabel crujiente con suprema de mandarina y queso de cabra, con vinagreta balsámica.",
            price: "$170",
          },
          {
            name: "Ensalada César",
            meta: "120 gr de pollo",
            description:
              "Tradicional lechuga orejona, crotones, aderezo César, parmesano y pollo.",
            price: "$180",
          },
        ],
      },
      {
        id: "pastas-sopas",
        title: "Pastas y sopas",
        items: [
          {
            name: "Sopa de fettuccini con pollo",
            description: "Con calabaza y zanahoria.",
            price: "$120",
          },
          {
            name: "Consomé de verduras",
            price: "$110",
          },
          {
            name: "Fettuccini de la costa",
            description: "Con salsa pomodoro, selección de mariscos.",
            price: "$290",
          },
          {
            name: "Espagueti al curry",
            description:
              "Con pollo en salsa suave de curry amarillo y coco.",
            price: "$180",
          },
          {
            name: "Ravioles Checo",
            description:
              "Rellenos de espinaca y queso, en salsa napolitana con lajas de parmesano.",
            price: "$199",
          },
        ],
      },
      {
        id: "aves",
        title: "Aves",
        items: [
          {
            name: "Pechuga al grill",
            description:
              "Con salsa aromática de manzana y whisky, elote baby dulce y verduras asadas.",
            price: "$270",
          },
          {
            name: "Brochetas de pollo",
            description:
              "Barnizadas con pesto de cilantro criollo, acompañadas de espárragos al limón.",
            price: "$210",
          },
        ],
      },
      {
        id: "carnes",
        title: "Carnes",
        items: [
          {
            name: "Mar y tierra",
            description:
              "Filete mignon con camarones en salsa termidor, puré de papa y julianas de verduras.",
            price: "$350",
          },
          {
            name: "Rib Eye",
            meta: "250 g",
            description: "Con salsa arriera y cebollas caramelizadas.",
            price: "$320",
          },
          {
            name: "Smash burger de arrachera",
            meta: "140 g",
            description:
              "Con aderezo de la casa, mermelada de cebolla y queso gouda, acompañada de papas gajo al cajún.",
            price: "$310",
          },
          {
            name: "Hamburguesa tradicional",
            description:
              "De carne de res con queso, lechuga, jitomate y cebolla.",
            price: "$210",
          },
          {
            name: "Entrepán de pork belly",
            description:
              "Cocinado a fuego lento en salsa agridulce a base de Jack Daniel’s, mermelada de tocino al vino tinto, elote baby a las brasas y papas cajún.",
            price: "$285",
          },
        ],
      },
      {
        id: "brasas",
        title: "Brasas",
        items: [
          {
            name: "Tacos de tuétano",
            meta: "3 pzas.",
            description:
              "Aromatizados con especias, flameados con tequila blanco, chimichurri de cilantro y guacamole.",
            price: "$230",
          },
          {
            name: "Chamberete de res",
            description:
              "En mole negro oaxaqueño con frituras de camote y arroz blanco con queso fresco y epazote.",
            price: "$280",
          },
        ],
      },
      {
        id: "postres",
        title: "Postres",
        items: [
          {
            name: "Mousse de maracuyá y mango",
            description:
              "Con crumble de vainilla y coco, salsa de frambuesa.",
            price: "$180",
          },
          {
            name: "Selva Negra",
            description:
              "Pan de chocolate envinado, buttercream de queso y vainilla, compota de frutos rojos y ganache de chocolate amargo.",
            price: "$199",
          },
          {
            name: "Flan de naranja",
            description:
              "Con polvo de caramelo y salsa de dulce de leche.",
            price: "$150",
          },
          {
            name: "Panna cotta de limón",
            description:
              "Con coulis de frambuesa y limón caramelizado.",
            price: "$160",
          },
        ],
      },
      {
        id: "extras",
        title: "Extras",
        items: [
          { name: "Proteína", price: "$75" },
          { name: "Huevos", meta: "2 pz.", price: "$35" },
          { name: "Parmesano", price: "$30" },
        ],
      },
      {
        id: "menu-dia",
        title: "Menú del día",
        special: true,
        price: "$199",
        included: [
          "Ensalada del día",
          "Crema o sopa",
          "Plato fuerte",
          "Postre",
          "Medio L de agua del día",
        ],
      },
    ],
  },
  drinks: {
    label: "Bebidas",
    eyebrow: "Menú Casa Checo",
    title: "Bebidas",
    description:
      "Desde jugos y café hasta coctelería, vinos y destilados.",
    sections: [
      {
        id: "sin-alcohol",
        title: "Jugos y bebidas sin alcohol",
        items: [
          {
            name: "Jugos naturales",
            meta: "300 ml",
            description: "Naranja / zanahoria / toronja / verde",
            price: "$60",
          },
          { name: "Refrescos familia Coca-Cola", price: "$45" },
          { name: "Agua mineral", price: "$45" },
          { name: "Agua de sabor", meta: "300 ml", price: "$45" },
          {
            name: "Limonada",
            meta: "300 ml",
            description: "Jugo de limón y agua mineral.",
            price: "$60",
          },
          {
            name: "Naranjada",
            meta: "300 ml",
            description: "Jugo de naranja, jarabe y agua mineral.",
            price: "$60",
          },
          {
            name: "Limonada con hierbabuena",
            meta: "300 ml",
            description: "Jugo de limón y agua mineral.",
            price: "$64",
          },
          {
            name: "Conga",
            meta: "350 ml",
            description:
              "Jugo de naranja, jugo de piña, jugo de toronja y granadina.",
            price: "$65",
          },
          {
            name: "Piñada",
            meta: "525 ml",
            description: "Crema de coco y jugo de piña.",
            price: "$100",
          },
          {
            name: "Esquimos",
            meta: "250 ml",
            description: "Chocolate / vainilla / fresa",
            price: "$70",
          },
          { name: "Té", meta: "300 ml", price: "$45" },
          { name: "Chocolate caliente", meta: "300 ml", price: "$45" },
        ],
      },
      {
        id: "cafe",
        title: "Café",
        items: [
          { name: "Espresso", price: "$35" },
          { name: "Cortado", price: "$40" },
          { name: "Doble", price: "$40" },
          { name: "Doble cortado", price: "$45" },
          { name: "Espresso americano", price: "$55" },
          { name: "Capuchino", price: "$65" },
          { name: "Latte", price: "$65" },
        ],
      },
      {
        id: "cerveza",
        title: "Cerveza",
        items: [
          { name: "Corona", price: "$45" },
          { name: "Victoria", price: "$45" },
          { name: "Pacífico", price: "$55" },
          { name: "Indio", price: "$55" },
          { name: "Negra Modelo", price: "$55" },
          { name: "Modelo Especial", price: "$55" },
          { name: "Bohemia Clara", price: "$55" },
          { name: "Bohemia Oscura", price: "$55" },
          { name: "XX Lager", price: "$55" },
          {
            name: "Tritón de cerveza Corona o Victoria",
            meta: "3 l.",
            price: "$250",
          },
          {
            name: "Vaso michelada",
            description: "Jugo de limón y escarchado con sal.",
            price: "$15",
          },
          {
            name: "Vaso cubana",
            description: "Con salsas negras.",
            price: "$15",
          },
          {
            name: "Vaso clamato para cerveza",
            meta: "250 ml",
            description: "Con salsas negras.",
            price: "$65",
          },
          {
            name: "Clamato preparado",
            description: "Limón y mezcla de salsas negras.",
            price: "$95",
          },
        ],
      },
      {
        id: "cocteleria",
        title: "Coctelería",
        items: [
          {
            name: "Margarita",
            meta: "270 ml",
            description: "Mango / tamarindo / limón",
            price: "$180",
          },
          {
            name: "Margarita Azulito",
            meta: "270 ml",
            description: "Mora azul, curazao y tequila.",
            price: "$185",
          },
          {
            name: "Sangría preparada",
            meta: "525 ml",
            description:
              "Vodka, agua mineral, limón, jarabe y vino tinto.",
            price: "$160",
          },
          {
            name: "Sangría natural",
            meta: "525 ml",
            description:
              "Agua mineral, limón, jarabe y vino tinto.",
            price: "$120",
          },
          {
            name: "Mojito",
            meta: "500 ml",
            description:
              "Clásico / frutos rojos / mora azul. Ron blanco, agua mineral, azúcar y hierbabuena.",
            price: "$160",
          },
          {
            name: "Piña colada",
            meta: "525 ml",
            description:
              "Ron blanco, crema de coco, leche evaporada y jugo de piña.",
            price: "$145",
          },
          {
            name: "Carajillo",
            meta: "300 ml",
            description: "Licor 43 y café espresso.",
            price: "$165",
          },
          {
            name: "Carajillo Baileys",
            meta: "300 ml",
            description: "Crema Baileys y café espresso.",
            price: "$170",
          },
          {
            name: "Mezcalita Viva",
            meta: "240 ml",
            description:
              "Mango / limón / tamarindo / jamaica / frutos rojos / maracuyá.",
            price: "$160",
          },
          {
            name: "Aperol Spritz",
            meta: "360 ml",
            description: "Aperol, prosecco y agua mineral.",
            price: "$190",
          },
          {
            name: "St. Germain Spritz",
            meta: "360 ml",
            description: "Aperol, licor St. Germain y agua mineral.",
            price: "$190",
          },
          {
            name: "Tinto de verano",
            meta: "525 ml",
            description: "Vino tinto y refresco de limón.",
            price: "$140",
          },
          {
            name: "Negroni",
            meta: "180 ml",
            description: "Vermut rojo, ginebra y Campari.",
            price: "$175",
          },
          {
            name: "Paloma",
            meta: "300 ml",
            description: "Tequila y limón en vaso escarchado con sal.",
            price: "$150",
          },
          {
            name: "Vodka tonic",
            meta: "300 ml",
            description: "Vodka, limón y agua mineral.",
            price: "$125",
          },
          {
            name: "Gin tonic",
            meta: "500 ml",
            description:
              "Pepino / frutos rojos / cítricos. Ginebra, agua tónica y rodaja de limón.",
            price: "$155",
          },
          {
            name: "Mimosa",
            meta: "150 ml",
            description: "Jugo de naranja con vino espumoso.",
            price: "$120",
          },
          {
            name: "Bull",
            meta: "500 ml",
            description:
              "Ron blanco, limón, agua mineral, cerveza y jarabe natural.",
            price: "$145",
          },
          {
            name: "Perla negra",
            meta: "180 ml",
            description: "Jägermeister y Red Bull.",
            price: "$160",
          },
          {
            name: "Shots",
            meta: "45 ml",
            description: "Mazapán / beso rosa / baby mango",
            price: "$80",
          },
          {
            name: "Shot del junior",
            meta: "45 ml",
            description: "Granadina, jugo de naranja y Jägermeister.",
            price: "$70",
          },
          { name: "Jarra de clericot", meta: "2 lts", price: "$650" },
          {
            name: "Servicio de clericot",
            description:
              "En la compra de una botella de vino a elección del cliente.",
            price: "$75",
          },
        ],
      },
      {
        id: "tequilas",
        title: "Tequilas",
        spirits: true,
        items: [
          {
            name: "Don Julio 70 Añejo Cristalino",
            meta: "700 ml",
            description: "Sabor suave.",
            bottlePrice: "$2500",
            servePrice: "$250",
          },
          {
            name: "Don Julio 70 Añejo Oscuro Especial Ceniza",
            meta: "700 ml",
            description: "Notas dulces.",
            bottlePrice: "$2700",
            servePrice: "$270",
          },
          {
            name: "Don Julio Reposado",
            meta: "700 ml",
            bottlePrice: "$1500",
            servePrice: "$150",
          },
          {
            name: "Don Julio Blanco",
            meta: "700 ml",
            bottlePrice: "$1500",
            servePrice: "$150",
          },
          {
            name: "Cuervo Tradicional Reposado",
            meta: "950 ml",
            bottlePrice: "$1200",
            servePrice: "$120",
          },
          {
            name: "Cuervo Tradicional Plata",
            meta: "950 ml",
            bottlePrice: "$1200",
            servePrice: "$120",
          },
          {
            name: "Cuervo 1800 Añejo",
            meta: "700 ml",
            bottlePrice: "$1900",
            servePrice: "$230",
          },
          {
            name: "Cuervo 1800 Añejo Cristalino",
            meta: "700 ml",
            bottlePrice: "$1700",
            servePrice: "$180",
          },
          {
            name: "Maestro Dobel Reposado",
            meta: "750 ml",
            bottlePrice: "$1700",
            servePrice: "$160",
          },
          {
            name: "Maestro Dobel Añejo",
            meta: "750 ml",
            bottlePrice: "$2300",
            servePrice: "$235",
          },
          {
            name: "Maestro Dobel Diamante",
            meta: "700 ml",
            bottlePrice: "$2300",
            servePrice: "$235",
          },
          {
            name: "7 Leguas Reposado",
            meta: "700 ml",
            bottlePrice: "$1800",
            servePrice: "$210",
          },
          {
            name: "7 Leguas Añejo",
            meta: "700 ml",
            bottlePrice: "$2800",
            servePrice: "$280",
          },
        ],
      },
      {
        id: "whisky",
        title: "Whisky",
        spirits: true,
        items: [
          {
            name: "Johnnie Walker Etiqueta Negra",
            meta: "700 ml",
            bottlePrice: "$2900",
            servePrice: "$170",
          },
          {
            name: "Johnnie Walker Red Label Blend",
            meta: "700 ml",
            bottlePrice: "$1200",
            servePrice: "$90",
          },
          {
            name: "Buchanan’s Deluxe Escocés Añejo 12 años",
            meta: "750 ml",
            bottlePrice: "$1300",
            servePrice: "$130",
          },
        ],
      },
      {
        id: "mezcal",
        title: "Mezcal",
        spirits: true,
        items: [
          {
            name: "400 Conejos Joven",
            meta: "700 ml",
            bottlePrice: "$1100",
            servePrice: "$90",
          },
          {
            name: "400 Conejos Añejo",
            meta: "700 ml",
            bottlePrice: "$1500",
            servePrice: "$140",
          },
          {
            name: "400 Conejos Reposado",
            meta: "700 ml",
            bottlePrice: "$1300",
            servePrice: "$95",
          },
          {
            name: "Mezcal Ojo de Tigre Joven",
            meta: "750 ml",
            bottlePrice: "$2900",
            servePrice: "$250",
          },
        ],
      },
      {
        id: "brandy",
        title: "Brandy",
        spirits: true,
        items: [
          {
            name: "Torres 10 Años",
            meta: "700 ml",
            bottlePrice: "$1100",
            servePrice: "$95",
          },
          {
            name: "Torres 5 Años",
            meta: "700 ml",
            bottlePrice: "$1300",
            servePrice: "$90",
          },
          {
            name: "Torres 20 Años",
            meta: "700 ml",
            bottlePrice: "$1900",
            servePrice: "$230",
          },
          {
            name: "Torres 15 Años",
            meta: "700 ml",
            bottlePrice: "$1300",
            servePrice: "$130",
          },
        ],
      },
      {
        id: "ron",
        title: "Ron",
        spirits: true,
        items: [
          {
            name: "Bacardí Blanco",
            meta: "980 ml",
            bottlePrice: "$1350",
            servePrice: "$120",
          },
          {
            name: "Flor de Caña 4 Años",
            meta: "750 ml",
            bottlePrice: "$1800",
            servePrice: "$210",
          },
          {
            name: "Flor de Caña Gran Reserva 7 Años",
            meta: "700 ml",
            bottlePrice: "$900",
            servePrice: "$90",
          },
          {
            name: "Ron Zacapa Centenario 23 Años",
            meta: "700 ml",
            bottlePrice: "$1300",
            servePrice: "$140",
          },
        ],
      },
      {
        id: "vodka",
        title: "Vodka",
        spirits: true,
        items: [
          {
            name: "Smirnoff",
            meta: "1000 ml",
            bottlePrice: "$2800",
            servePrice: "$290",
          },
          {
            name: "Stolichnaya",
            meta: "750 ml",
            bottlePrice: "$1350",
            servePrice: "$140",
          },
          {
            name: "Grey Goose",
            meta: "700 ml",
            bottlePrice: "$1500",
            servePrice: "$140",
          },
        ],
      },
      {
        id: "ginebra",
        title: "Ginebra",
        spirits: true,
        items: [
          {
            name: "Tanqueray",
            meta: "750 ml",
            bottlePrice: "$1600",
            servePrice: "$150",
          },
          {
            name: "Beefeater",
            meta: "750 ml",
            bottlePrice: "$1200",
            servePrice: "$120",
          },
          {
            name: "Bombay Sapphire",
            meta: "700 ml",
            bottlePrice: "$1400",
            servePrice: "$130",
          },
        ],
      },
      {
        id: "digestivos",
        title: "Digestivos",
        spirits: true,
        items: [
          {
            name: "Baileys Crema de Whisky",
            meta: "700 ml",
            bottlePrice: "$1400",
            servePrice: "$130",
          },
          {
            name: "Licor del 43",
            meta: "700 ml",
            bottlePrice: "$1400",
            servePrice: "$130",
          },
          {
            name: "Sambuca Vaccari Negro",
            meta: "700 ml",
            bottlePrice: "$1200",
            servePrice: "$99",
          },
          {
            name: "Licor Jägermeister",
            meta: "700 ml",
            bottlePrice: "$1150",
            servePrice: "$150",
          },
          {
            name: "Licor St. Germain",
            meta: "750 ml",
            bottlePrice: "$1700",
            servePrice: "$150",
          },
        ],
      },
      {
        id: "vinos-mesa",
        title: "Vinos de mesa",
        items: [
          { name: "Vino tinto Casa Madero 3V", meta: "750 ml", price: "$1950" },
          { name: "Vino tinto Esencial", meta: "750 ml", price: "$950" },
          { name: "Vino tinto Nebbiolo", meta: "750 ml", price: "$950" },
          { name: "Vino tinto Selección", meta: "750 ml", price: "$950" },
          { name: "Vino blanco Cordus", meta: "750 ml", price: "$950" },
          { name: "Vino rosado Cordus", meta: "750 ml", price: "$950" },
        ],
      },
    ],
  },
};

export default MENU_DATA;