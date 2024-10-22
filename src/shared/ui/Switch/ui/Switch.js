/**
 * Компонент свитч - кнопки
 * @return {string}
 */
export const Switch = ({ label = "", name = "", extraAttrs = [] } = {}) => {
  return `<label class="switch">
              <input type="checkbox" label="${label}" class="switch__input visuallyHidden" checked>
              <span class="switch__slider">
              <div class="switch__text">${name}</div>
              </span>
          </label>`;
};
