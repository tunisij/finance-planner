export abstract class BaseObject {
  id?: String;
  private _links?: any;

  protected constructor(id?: String) {
    this.id = id;
  }
}
