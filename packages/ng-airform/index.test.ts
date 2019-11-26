// import { describe, beforeEach, inject, module, expect, createSpy, it } from 'jasmine'
import airform from './'

describe('Airform', () => {
  let $componentController

  beforeEach(module('ngAirform'))
  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_
  }))

  it('renders without crashing', function () {
    const bindings = { email: 'your@email.com' }
    const ctrl = $componentController('airform', null, bindings)
    expect(ctrl.email).toHaveBeenCalledWith('your@email.com')
  })
})
