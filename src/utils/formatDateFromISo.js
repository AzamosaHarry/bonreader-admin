export default function formatDateFromIso(
  isoString = "2024-09-17T20:49:47.421188+01:00"
) {
  // Parse the ISO string into a Date object
  const date = new Date(isoString);

  // Format the date into a more readable format (YYYY-MM-DD HH:MM:SS)
  const formattedDate =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");

  return formattedDate;
}
