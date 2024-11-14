import {
  BarIcon,
  CinemaIcon,
  MusicIcon,
  RestaurantIcon,
  TheaterIcon,
} from "#shared/ui/Icons/index.js";

export const iconsPresets = {
  ["1"]: BarIcon({ iconColor: "var(--colorRed)" }),
  ["2"]: CinemaIcon({ iconColor: "var(--colorGreen)" }),
  ["3"]: MusicIcon({ iconColor: "var(--colorBlue)" }),
  ["4"]: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
  ["5"]: TheaterIcon({ iconColor: "var(--colorPurple)" }),
};
