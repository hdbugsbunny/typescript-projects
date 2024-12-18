import { NextFunction, RequestHandler, Response } from "express";
import { MetadataKeys } from "./enums";
import { RequestBody, RouteHandlerDescriptor } from "./interfaces";
import { setMeta } from "./reflectMetadata";

export const requireAuth = (
  req: RequestBody,
  res: Response,
  next: NextFunction
): void => {
  if (req.session?.loggedIn) {
    next();
  } else {
    res
      .status(403)
      .send(`<div>You Must be Logged in to Access This Page!</div>`);
  }
};

export const logger = (
  req: RequestBody,
  _: Response,
  next: NextFunction
): void => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

export const routeBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, _: RouteHandlerDescriptor) => {
      setMeta({
        metadataKey: MetadataKeys.method,
        metadataValue: method,
        target,
        key,
      });
      setMeta({
        metadataKey: MetadataKeys.path,
        metadataValue: path,
        target,
        key,
      });
    };
  };
};

export const bodyValidators = (keys: string): RequestHandler => {
  return (req: RequestBody, res: Response, next: NextFunction) => {
    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing required field: ${key}`);
        return;
      }
    }
    next();
  };
};
