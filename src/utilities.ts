import { Session, HttpHeaders } from "./types";

export const request = async (
  http: any,
  endpoint: string,
  type: string,
  body?: Record<string, string>,
  session?: Session,
  headers?: HttpHeaders
) => {
  const response = await http.post(
    endpoint, 
    {
      ...body,
      method: "cli",
      xml: "1",
      imei: "cli",
      ...(session && { token: session.token })
    }, 
    {
      ...(session && {
        Cookie: `PHPSESSID=${encodeURIComponent(session.sessionid)};`,
        ...headers,
      })
    },
    {
      serializer: 'urlencoded',
      responseType: type
    }
  )
  return response;
};
