type queryMark = ">" | ">=" | "<" | "<=" | ".." | "..*" | "*..";

export const queryDateBuilder = (query: queryMark, from: Date, to?: Date) => {
  const formatedFrom = from.toISOString().slice(0, 10);
  const formatedTo = to && to.toISOString().slice(0, 10);

  if (query === ">" || query === "<" || query === "<=" || query === ">=") {
    return query + formatedFrom;
  }

  if (query === ".." && to) {
    return formatedFrom + query + formatedTo;
  }

  if (query === "*..") {
    return query + formatedFrom;
  }

  if (query === "..*") {
    return formatedFrom + query;
  }
};
