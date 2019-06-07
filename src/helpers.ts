import { xml2js } from "xml-js";
export const request = async (
  endpoint: string,
  method: string,
  body: any,
  headers: any,
  type: string,
  session: any
) => {
  let form: any;
  if (body) {
    form = new FormData();
    form.append("method", "cli");
    form.append("xml", "1");
    form.append("imei", "cli");
    session && form.append("token", session.token);
    Object.keys(body).map(key => {
      form.append(key, body[key]);
    });
  }
  headers = {
    ...(session && {
      Cookie: `PHPSESSID=${encodeURIComponent(session.sessionid)};`
    }),
    ...headers
  };
  const response = await fetch(endpoint, {
    method,
    ...(body && { body: form }),
    headers
  });
  if (!response.ok) {
    throw new Error("Error requesting data.");
  }
  const xml = await response.text();
  if (type === "js") {
    return xml2js(xml, { compact: true });
  }
  return xml;
};

export const ITERATIONS = "https://lastpass.com/iterations.php";
export const LOGIN = "https://lastpass.com/login.php";
export const VAULT = "https://lastpass.com/getaccts.php";
export const CREATE = "https://lastpass.com/show_website.php";
