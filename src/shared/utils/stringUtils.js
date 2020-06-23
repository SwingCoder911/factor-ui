export function getStrings(stringSet, field) {
  if (stringSet === null || !field) {
    return '';
  }
  if (stringSet[field] === undefined) {
    return '';
  }
  return stringSet[field];
}
