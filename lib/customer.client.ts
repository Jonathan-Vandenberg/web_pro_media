import { IncomingMessage, ServerResponse } from "http";

export function getCustomerId({
  req,
  res,
}: {
  req: IncomingMessage,
  res: ServerResponse;
}) {
  let customerId =  req.headers.customerid;
  return String(customerId);
}