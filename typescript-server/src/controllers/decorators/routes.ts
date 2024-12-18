import { Methods } from "../../utils/enums";
import { routeBinder } from "../../utils/helperFunc";

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
