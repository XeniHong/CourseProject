import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
import { Button } from "#shared/ui/Button/index";
// import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  // CheckIcon,
  // CancelIcon,
  // BarIcon,
  // CinemaIcon,
  // RestaurantIcon,
  // MusicIcon,
  // TheaterIcon,
  DirectIcon,
  RouteIcon,
  LocationIcon,
} from "#shared/ui/Icons/index";
// import { Switch } from "#shared/ui/Switch/index";

/**
 * Страница приложения
 * @return {string}
 */
const IndexPage = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <header>
        <h1>Yandex map</h1>
      </header>
      <main>

        ${PlaceSwitchGroup()}
        <div class="Map">
          <div id="map1" class="yandexMap" style="width: 1200px; height: 658px">

          </div>
          <div class="Map__Side">
             ${Button({ text: "Добавить метку", iconSlot: LocationIcon() })}
             ${Button({ text: "Построить маршрут", iconSlot: RouteIcon() })}
             ${Button({ text: "Мои маршруты", iconSlot: DirectIcon() })}
          </div>
        </div>

      <div style="display: none">
        <div id="modalSuccess">
            <p>Успешно!</p>
        </div>
        <div id="modalError">
          <p>Не успешно!</p>
        </div>
      </div>
    </body>
  </html>
`;

export default IndexPage;
