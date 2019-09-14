export const handleType = <T>(response: Response) => {
  const contentType = response.headers.get("Content-Type");

  if (contentType && contentType.includes("json")) {
    return response.json() as Promise<T>;
  }

  throw Error("Unexpected content-type");
};
