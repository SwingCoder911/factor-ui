export function getStrings(stringSet, field) {
  if (stringSet === null || !field) {
    return '';
  }
  if (!stringSet.hasOwnProperty(field)) {
    return '';
  }
  return stringSet[field];
}
