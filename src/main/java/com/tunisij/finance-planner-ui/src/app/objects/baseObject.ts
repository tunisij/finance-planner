export abstract class BaseObject {
  id?: String;
  _links?: any;

  private _date?: Date;

  get date() {
    return this._date;
  }

  set date(value: any) {
    if (typeof value === 'string') {
      this._date = new Date(value);
    } else {
      this._date = value;
    }
  }

  protected constructor() {}
}
