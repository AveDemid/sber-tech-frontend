import { Method } from "./types";
import { handleType } from "./handle-type";
import { handleError } from "./handle-error";

export const request = <T>(
  method: Method = "GET",
  baseUrl: string,
  url: string
): Promise<T> => {
  const uri = `${baseUrl}${url}`;

  const config = new Request(uri, {
    method
  });

  return fetch(config)
    .then(handleError)
    .then(response => handleType<T>(response))
    .catch(error => {
      throw error;
    });
};
