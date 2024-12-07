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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
];
