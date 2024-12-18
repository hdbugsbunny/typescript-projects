import { Request, RequestHandler } from "express";

export interface Metadata {
  metadataKey: any;
  target: Object;
  key: string | symbol;
  metadataValue?: any;
}

export interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}
