import * as gulp from 'gulp';
import {build} from 'aurelia-cli';

export default function clearCache() {
  return build.clearCache();
}
