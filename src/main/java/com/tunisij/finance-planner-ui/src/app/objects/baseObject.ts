export abstract class BaseObject {
  id?: String;
  date: Date;
  private _links?: any;

  protected constructor(date: any, id?: String) {
    if (typeof date === 'string') {
      this.date = new Date(date.replace(/-/g, '\/'));
    } else {
      this.date = date;
    }
    this.id = id;
  }
}
