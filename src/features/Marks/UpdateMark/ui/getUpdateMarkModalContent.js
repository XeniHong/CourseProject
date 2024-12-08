import { Button } from "#shared/ui/Button";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CinemaIcon,
  RestaurantIcon,
  MusicIcon,
  TheaterIcon,
  BarIcon,
  XIcon,
  SaveIcon,
} from "#shared/ui/Icons/index";

/**
 * Контент модалки обновления метки
 */
export const getUpdateMarkModalContent = ({
  markInfo,
  url,
  method = "post",
  iconColor = "var(--colorBlack)",
}) => {
  return `<div class="updateModalContent" >
  <form data-js-form=${JSON.stringify({ url, method, showModalAfterSuccess: "#modalSuccess", redirectUrlAfterSuccess: "/test.html", delayBeforeRedirect: 3000 })}>
  <div class="updateModalContent__header">
    <h2>Редактировать метку</h2>
    ${Button({
      iconSlot: XIcon(),
      extraClasses: ["btn--isSmall"],
      text: "",
      extraAttrs: [
        {
          name: "type",
          value: "submit",
        },
      ],
    })}
  </div>


    <h3>${markInfo.title}</h3>
    <p>${markInfo.address}</p>
    <div class="updateModalContent__elements">
      <div class="updateModalContent__element">
        <label>Комментарий пользователя</label>
        <input type="comment" value="${markInfo.comment}" name="comment"/>
      </div>

      <div class="updateModalContent__element">
        <label>Тип метки</label>
          <div class="updateModalContent__element--select">
          ${CustomSelect({
            extraAttrs: [
              {
                name: "data-js-update-mark-info-select-type",
                value: markInfo.id,
              },
              {
                name: "name",
                value: "typeMark",
              },
            ],
            cfg: {
              preset: "default",
              itemSelectText: "",
              searchEnabled: false,
              choices: [
                {
                  value: "Бar",
                  label: "Бар",
                  selected: markInfo.type === "bar",
                  customProperties: {
                    icon: BarIcon({ iconColor: "var(--colorRed)" }),
                  },
                },
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: markInfo.type === "restaurant",
                  customProperties: {
                    icon: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: markInfo.type === "club",
                  customProperties: {
                    icon: MusicIcon({ iconColor: "var(--colorBlue)" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: markInfo.type === "theater",
                  customProperties: {
                    icon: TheaterIcon({ iconColor: "var(--colorPurple)" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: markInfo.type === "cinema",
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "var(--colorGreen)" }),
                  },
                },
              ],
            },
          })}
          </div>
      </div>

      <div class="updateModalContent__element">
        <label>Фотографии</label>
        <div class="updateModalContent__element--image">
        </div>
      </div>

      <div class="updateModalContent__element">
        <label>Добавить фотографии</label>
        <div class="updateModalContent__element--add">
        </div>
      </div>
      <div class="updateModalContent__button">
      ${Button({
        text: "Сохранить",
        iconSlot: [SaveIcon()],
        extraAttrs: [
          {
            name: "type",
            value: "submit",
          },
        ],
      })}
        ${Button({
          text: "Отмена",
          extraClasses: ["btn--textIsRed"],
        })}
      </div>
    </div>
  </form>
  </div>`;
};
