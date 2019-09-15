import { Method } from "./types";
import { handleType } from "./handle-type";
import { handleError } from "./handle-error";

export const request = <T>(
  method: Method = "GET",
  baseUrl: string,
  url: string
): Promise<T> => {
  const uri = `${baseUrl}${url}`;

  const user = "AveDemid";
  const token = "1783c02002a2a594c03659ccaa4b97f23068e2d8";

  const creds = `${user}:${token}`;
  const auth = btoa(creds);

  const config = new Request(uri, {
    method,
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  return fetch(config)
    .then(handleError)
    .then(response => handleType<T>(response))
    .catch(error => {
      throw error;
    });
};
