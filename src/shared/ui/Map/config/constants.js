import {
  BarIcon,
  CenterMapIcon,
  CinemaIcon,
  MusicIcon,
  RestaurantIcon,
  TheaterIcon,
} from "#shared/ui/Icons/index.js";

export const classNames = {
  ballonContent: "yandexMap__ballonContent",
  ballonLayout: "yandexMap__ballonLayout",
  mark: "yandexMap__mark",
  centerMarker: "yandexMap__centerMarker",
  showHint: "yandexMap__tooltip",
};

export const iconShapeCfg = {
  type: "Circle",
  coordinates: [0, 0],
  radius: 50,
};

export const iconsPresets = {
  bars: BarIcon({ iconColor: "var(--colorRed)" }),
  cinema: CinemaIcon({ iconColor: "var(--colorGreen)" }),
  theater: TheaterIcon({ iconColor: "var(--colorPurple)" }),
  restaurant: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
  club: MusicIcon({ iconColor: "var(--colorBlue)" }),
  centerMarker: CenterMapIcon({ iconColor: "var(--colorGray)" }),
};

export const yandexMapCustomEventNames = {
  markClicked: "yandexMap::markClicked",
};
