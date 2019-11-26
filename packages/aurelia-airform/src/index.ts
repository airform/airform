import { FrameworkConfiguration } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal'

export function configure (config: FrameworkConfiguration) {
  config.globalResources([PLATFORM.moduleName('./elements/airform')])
}
