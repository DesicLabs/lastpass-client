import { xml2js } from "xml-js";
import { Session, HttpRequest, HttpMethod, HttpHeaders } from "./types";

export const request = async (
  endpoint: string,
  method: HttpMethod,
  type: string,
  body?: Record<string, string>,
  session?: Session,
  headers?: HttpHeaders
) => {
  const request: HttpRequest = { method, headers };
  if (body) {
    body = {
      ...body,
      method: "cli",
      xml: "1",
      imei: "cli",
      ...(session && { token: session.token })
    };
    const form = new FormData();
    Object.keys(body).map(key => {
      form.append(key, body[key]);
    });
    request.body = form;
  }
  request.headers = {
    ...(session && {
      Cookie: `PHPSESSID=${encodeURIComponent(session.sessionid)};`
    }),
    ...request.headers
  };
  const response = await fetch(endpoint, request);
  if (!response.ok) throw new Error("Error requesting data.");
  const xml = await response.text();
  return type === "js" ? xml2js(xml, { compact: true }) : xml;
};
