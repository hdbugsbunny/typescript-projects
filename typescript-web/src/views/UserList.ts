import { UserShow } from "./UserShow";
import { User, USERPROPS } from "./../models/User";
import { CollectionView } from "./CollectionView";

export class UserList extends CollectionView<User, USERPROPS> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
