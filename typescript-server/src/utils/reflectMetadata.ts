import "reflect-metadata";
import { Metadata } from "./interfaces";

export const setMeta = (metadata: Metadata) => {
  const { metadataKey, metadataValue, target, key } = metadata;
  Reflect.defineMetadata(metadataKey, metadataValue, target, key);
};

export const getMeta = (
  metadata: Pick<Metadata, "metadataKey" | "target" | "key">
) => {
  const { metadataKey, target, key } = metadata;
  return Reflect.getMetadata(metadataKey, target, key);
};
