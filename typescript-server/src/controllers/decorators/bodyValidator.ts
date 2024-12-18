import { MetadataKeys } from "../../utils/enums";
import { setMeta } from "../../utils/reflectMetadata";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, _: PropertyDescriptor) {
    setMeta({
      metadataKey: MetadataKeys.validator,
      metadataValue: keys,
      target,
      key,
    });
  };
}
