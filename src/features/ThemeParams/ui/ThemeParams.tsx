import { BASE_PARAMS, BASE_PARAMS_TYPE } from "../../../shared/model";

const ThemeParams = ({ thisNumberTheme }:{ thisNumberTheme: number }) => {

  let style = ``;

  const styleObj = BASE_PARAMS[thisNumberTheme];

  for (let key in styleObj) {
    style += `  --${key}: ${styleObj[key as keyof BASE_PARAMS_TYPE]}; \n`;
  }

  return (
    <style type="text/css">
      {':root { \n' + style + '}'}
    </style>
  );
}

export { ThemeParams };