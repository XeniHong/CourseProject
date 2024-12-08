export const filerCfg = {
  inputs: {
    search: {
      value: null,
      isChecked: "null",
      isDisabled: "null",
    },
    bars: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    restaurant: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    club: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    theater: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    cinema: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
  },
};

export const listMarsMockResponse = {
  marks: [
    { id: "1", type: "bars", cords: [55.173901, 61.404403] },
    { id: "2", type: "restaurant", cords: [55.173799, 61.40214] },
    { id: "3", type: "club", cords: [55.173968, 61.397363] },
    { id: "4", type: "theater", cords: [55.171474, 61.399452] },
    { id: "5", type: "cinema", cords: [55.169626, 61.392044] },
    //новые метки
    { id: "6", type: "bars", cords: [55.171955, 61.397175] },
    { id: "7", type: "restaurant", cords: [55.173182, 61.397276] },
    { id: "8", type: "restaurant", cords: [55.176824, 61.396876] },
    { id: "9", type: "club", cords: [55.175014, 61.397533] },
    { id: "10", type: "cinema", cords: [55.171716, 61.398899] },
  ],
};

export const marksDetailMockResponse = [
  {
    id: "1",
    title: "Al Capone",
    type: "bars",
    address: {
      city: "Челябинск",
      house: "12a",
      street: "ул. Братьев Кашириных",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar2.png",
      "assets/marksDetail/bar3.png",
    ],
  },
  {
    id: "2",
    title: "Пароход",
    type: "restaurant",
    address: {
      city: "Челябинск 2",
      house: "10",
      street: "ул. Братьев Кашириных 2",
    },
    comment: "ресторант где подают все",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "3",
    title: "Edem Show Club",
    type: "club",
    address: {
      city: "Челябинск 2",
      house: "62 А",
      street: "ул.Кирова",
    },
    comment: "ночной клуб Эдем",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "4",
    title: "Зал органной и камерной музыки Родина",
    type: "theater",
    address: {
      city: "Челябинск 2",
      house: "78",
      street: "ул. Кирова",
    },
    comment:
      "Зал органной и камерной музыки «Родина» — это один из концертных залов Челябинской государственной филармонии, расположенный в центре города, у реки Миасс. Здание концертного зала включено в перечень выявленных объектов культурного наследия.",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "5",
    title: "Мягкий кинотеатр Мегаполис",
    type: "cinema",
    address: {
      city: "Челябинск 2",
      house: "51А",
      street: "Свердловский просп",
    },
    comment:
      "«Мягкий кинотеатр Мегаполис» — это место, где можно не только посмотреть фильмы, но и провести время с семьей или друзьями.",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "6",
    title: "Бар крыша",
    type: "bar",
    address: {
      city: "Челябинск 2",
      house: "54",
      street: "улица восьмого марта",
    },
    comment:
      "Кальян-бар «Крыша» — это место, где вы можете насладиться вкусным кальяном, а также вкусной едой и напитками.",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "7",
    title: "Чайхана Худжанд",
    type: "restaurant",
    address: {
      city: "Челябинск 2",
      house: "72",
      street: "улица Кирова",
    },
    comment: "быстрое питание",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "8",
    title: "Coffee Shiba",
    type: "restaurant",
    address: {
      city: "Челябинск 2",
      house: "97 В ",
      street: "Каслинская ул.",
    },
    comment:
      "Кофейня Coffee Shiba — это уютное место, где можно насладиться ароматным кофе и вкусными десертами, такими как пончики, вафли, пирожные и сэндвичи.",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "9",
    title: "клуб",
    type: "club",
    address: {
      city: "Челябинск 2",
      house: "99Б",
      street: "Каслинская улица",
    },
    comment: "Бар?",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
  {
    id: "10",
    title: "Кинотеатр",
    type: "cinema",
    address: {
      city: "Челябинск 2",
      house: "54",
      street: "улица восьмого марта",
    },
    comment: "кинотеатр",
    images: [
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar1.png",
      "assets/marksDetail/bar.png",
      "assets/marksDetail/bar.png",
    ],
  },
];
