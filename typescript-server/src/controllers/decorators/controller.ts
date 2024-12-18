import { AppRouter } from "../../AppRouter";
import { MetadataKeys, Methods } from "../../utils/enums";
import { bodyValidators } from "../../utils/helperFunc";
import { getMeta } from "../../utils/reflectMetadata";

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const method: Methods = getMeta({
        metadataKey: MetadataKeys.method,
        target: target.prototype,
        key,
      });
      const path = getMeta({
        metadataKey: MetadataKeys.path,
        target: target.prototype,
        key,
      });
      const middlewares =
        getMeta({
          metadataKey: MetadataKeys.middleware,
          target: target.prototype,
          key,
        }) || [];
      const reqBodyProps =
        getMeta({
          metadataKey: MetadataKeys.validator,
          target: target.prototype,
          key,
        }) || [];
      const validators = bodyValidators(reqBodyProps);

      if (method && path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validators,
          routeHandler
        );
      }
    }
  };
}
