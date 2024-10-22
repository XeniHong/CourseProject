/**
 * Компонент Drop down - выпадающий список
 * @return {string}
 */
export const DropDown = ({ masChoice = [] } = {}) => {
  return `<select class="dropDown drop-choice" data-choices name="choices-single-default">
     
    <option value="Bar">Бар</option>
    <option value="Restaurant">Ресторан</option>
    <option value="Theater">Театр</option>
    <option value="Cinema">Кино</option>
    <option value="NightClub">Ночной клуб</option>
</select>

<script>
const element = document.querySelector(".drop-choice");
const choices = new Choices(element);
</script>`;
};
