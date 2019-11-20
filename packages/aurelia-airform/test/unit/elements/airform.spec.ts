import { StageComponent, ComponentTester } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("airform element", () => {
  let component: ComponentTester<{ email: string }>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it("says hello world to airform", async () => {
    component = StageComponent.withResources("elements/airform").inView(
      '<airform email="abraao@mail.com">Hello world from me</airform>'
    );

    await component.create(bootstrap);

    const view = component.element;
    expect(view.textContent.trim()).toBe("Hello world from me");
    expect(view.getAttribute("email")).toContain("abraao@mail.com");
  });
});
