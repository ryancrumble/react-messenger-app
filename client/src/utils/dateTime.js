import { formatDistanceToNow, parseISO } from "date-fns";

/**
 * @description formats the date to render text of time distance from now
 * @param date: string
 * @returns string
 */
export const formatDateToText = (date) => {
  return formatDistanceToNow(parseISO(date), {
    addSuffix: true,
  });
};
