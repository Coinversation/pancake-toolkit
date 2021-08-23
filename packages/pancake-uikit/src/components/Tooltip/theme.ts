import { darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.backgroundAlt,
  text: darkColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
  border: "",
};

export const dark: TooltipTheme = {
  background: darkColors.cardBorder,
  text: lightColors.text,
  boxShadow: "0px 4px 9px 1px rgba(9, 2, 18, 0.2);",
  border: `2px solid ${darkColors.primarySecondary}`,
};
