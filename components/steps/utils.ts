export function generateYearsArray(): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];

  for (let i = 0; i < 80; i++) {
    years.push(currentYear - i);
  }

  return years;
}
