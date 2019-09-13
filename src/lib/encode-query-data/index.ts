export const encodeQueryData = (data: {
  [key: string]: string | number | undefined | null;
}) => {
  const ret = [];
  for (const d in data) {
    ret.push(`${d}=${data[d]}`);
  }
  return ret.join("&");
};
