import { autoinject } from "aurelia-framework";

@autoinject
export class Usage {
  constructor(public element: Element) {}

  attached() {
    console.log(this.element);
  }
}
