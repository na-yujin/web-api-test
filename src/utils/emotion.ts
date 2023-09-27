import { css } from "@emotion/react";
import { camelCaseToKebabCase } from "@/utils/string";

export function getConditionalCss(
  cssKey: keyof CSSStyleDeclaration,
  value?: string | number | false,
  unit?: "px" | "%" | "em" | "rem",
) {
  if (value === void 0) {
    return;
  }

  return css`
    ${camelCaseToKebabCase(cssKey as string)}: ${value}${unit};
  `;
}
