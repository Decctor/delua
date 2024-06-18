import dayjs from "dayjs";

export function formatDateAsLocale(date?: string, showHours = false) {
  if (!date) return null;
  if (showHours) return dayjs(date).add(3, "hour").format("DD/MM/YYYY HH:mm");
  return dayjs(date).add(3, "hour").format("DD/MM/YYYY");
}
export function formatDateInputChange(value: any) {
  if (isNaN(new Date(value).getMilliseconds())) return undefined;
  return new Date(value).toISOString();
}

export function formatToDateTime(date: string | null) {
  if (!date) return "";
  return dayjs(date).format("DD/MM/YYYY HH:mm");
}
export function formatNameAsInitials(name: string) {
  const splittedName = name.split(" ");
  const firstLetter = splittedName[0][0];
  var secondLetter;
  if (["DE", "DA", "DO", "DOS", "DAS"].includes(splittedName[1]))
    secondLetter = splittedName[2] ? splittedName[2][0] : "";
  else secondLetter = splittedName[1] ? splittedName[1][0] : "";
  return firstLetter + secondLetter;
}

export function formatDecimalPlaces(
  value: string | number,
  minPlaces: number = 0,
  maxPlaces: number = 2
) {
  return Number(value).toLocaleString("pt-br", {
    minimumFractionDigits: minPlaces,
    maximumFractionDigits: maxPlaces,
  });
}
export function formatToMoney(value: string | number, tag: string = "R$") {
  return `${tag} ${Number(value).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
