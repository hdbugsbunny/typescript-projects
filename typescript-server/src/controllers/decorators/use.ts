import { RequestHandler } from "express";
import { MetadataKeys } from "../../utils/enums";
import { getMeta, setMeta } from "../../utils/reflectMetadata";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, _: PropertyDescriptor) {
    const middlewares =
      getMeta({ metadataKey: MetadataKeys.middleware, target, key }) || [];

    setMeta({
      metadataKey: MetadataKeys.middleware,
      metadataValue: [...middlewares, middleware],
      target,
      key,
    });
  };
}
