export default async function formatDate(date: string) {
  const newDate = new Date(date);
  const months = [
    "Ιαν",
    "Φεβ",
    "Μάρ",
    "Απρ",
    "Μαΐ",
    "Ιούν",
    "Ιούλ",
    "Αύγ",
    "Σεπ",
    "Οκτ",
    "Νοέ",
    "Δεκ",
  ];
  const month = months[newDate.getMonth()];
  const year = newDate.getFullYear();
  const dateString = `${month} ${newDate.getDate()}, ${year}`;
  return dateString;
}
