import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
import { Button } from "#shared/ui/Button/index";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CheckIcon,
  CancelIcon,
  BarIcon,
  CinemaIcon,
  RestaurantIcon,
  MusicIcon,
  TheaterIcon,
} from "#shared/ui/Icons/index";
import { Switch } from "#shared/ui/Switch/index";

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

          </div>
        </div>



        <p>проверка компонетов</p>
        <div class="isFlex mb16 gap8">
          ${Button({ text: "Да", iconSlot: CheckIcon(), extraClasses: ["btn--isGreenLightIcon"] })}
          ${Button({ text: "Нет", iconSlot: CancelIcon(), extraClasses: ["btn--isRedIcon"] })}
        </div>
        <div class="isFlex mb16 gap8">
          ${Switch({
            label: "Привет мир",
            extraInputAttrs: [
              { name: "name", value: "rememberMe" },
              { name: "form", value: "formAuth" },
            ],
          })}

          ${Switch({
            label: "Привет мир",
            extraClasses: ["switch--isRightLabel"],
            extraInputAttrs: [
              { name: "name", value: "rememberMe" },
              { name: "form", value: "formAuth" },
            ],
          })}
        </div>



<div style="max-width: 279px">
          ${CustomSelect({
            extraAttrs: [{ name: "id", value: "select-type-mark" }],
            cfg: {
              preset: "default",
              itemSelectText: "",
              searchEnabled: false,
              choices: [
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: true,
                  customProperties: {
                    icon: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: false,
                  customProperties: {
                    icon: MusicIcon({ iconColor: "var(--colorBlue)" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: false,
                  customProperties: {
                    icon: TheaterIcon({ iconColor: "var(--colorPurple)" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: false,
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "var(--colorGreen)" }),
                  },
                },
                {
                  value: "Бар",
                  label: "Бар",
                  selected: false,
                  customProperties: {
                    icon: BarIcon({ iconColor: "var(--colorRed)" }),
                  },
                },
              ],
            },
          })}
        </div>
        </main>

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
