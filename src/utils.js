import { format } from "date-fns";
import uniqid from "uniqid";

export function formatDate(date) {
  return format(date, "do LLL yyyy");
}

export function generateUniqId() {
  return uniqid("msg");
}
