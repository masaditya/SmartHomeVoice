export const dapurPattern = /lampu.*dapur|dapur.*lampu/i;
export const terasPattern = /lampu.*teras|teras.*lampu/i;
export const kunciPattern = /kunci.*pintu|pintu.*kunci/i;
export const nyalaPattern = /nyala/i;
export const matiPattern = /mati/i;
export const bukaPattern = /\bbuka\b/;
export const tutupPattern = /\btutup\b/;

export const parseSnakeCase = (str: string) => {
  return str
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
