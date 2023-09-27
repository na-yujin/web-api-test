export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function camelCaseToKebabCase(str: string) {
  return str.replaceAll(
    /[A-Z]/g,
    (letter: string) => `-${letter.toLowerCase()}`,
  );
}

export function padStart(value: any, length: number, target: string | number) {
  try {
    const targetString = value.toString();

    return targetString.padStart(length, target);
  } catch (e) {
    return value;
  }
}
