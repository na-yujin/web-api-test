export function NewArray<L extends number, T>(
  length: L,
  fill: T | string = "",
) {
  return new Array(length).fill(fill) as T[];
}
