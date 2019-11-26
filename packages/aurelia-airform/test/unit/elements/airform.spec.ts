import { bootstrap } from 'aurelia-bootstrapper'
import { StageComponent, ComponentTester } from 'aurelia-testing'

describe('Airform', () => {
  let component: ComponentTester<{ email: string }>

  afterEach(() => {
    if (component) {
      component.dispose()
      component = null
    }
  })

  it('renders without crashing', async () => {
    component = StageComponent.withResources('elements/airform').inView(
      '<airform email="your@email.com"></airform>',
    )

    await component.create(bootstrap)

    const view = component.element
    expect(view.getAttribute('email')).toContain('your@email.com')
  })
})
