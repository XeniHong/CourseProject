import { Button } from "#shared/ui/Button/index";
import { DropDown } from "#shared/ui/DropDown/index";

import {
  CinemaIcon,
  BarIcon,
  NightClubIcon,
  RestaurantIcon,
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
        <h1>Welcome to the Home Page</h1>
      </header>
      <main>
        <p>Hello world! 12</p>
        ${Button({ text: "HI!" })}
              <br/>
        ${Switch({ label: "cinema", name: "cinema" })} 
        <br/>
        ${CinemaIcon()}  ${BarIcon()} ${TheaterIcon()} ${NightClubIcon()} ${RestaurantIcon()}
              <br/>
        ${DropDown({})} 
      </main>
    </body>
  </html>
`;

export default IndexPage;
