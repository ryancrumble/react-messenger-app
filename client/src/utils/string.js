/**
 * @description shortens a string to a specified length
 * @param string: string
 * @returns string
 */
export const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
