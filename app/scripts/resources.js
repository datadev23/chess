// all resources for the application
/* global window*/
const loadResources = () => '0 resources';
class Resources {
  load() {
    this.check = '';
    return `${loadResources()} loaded`;
  }
}

window.resources = Resources;
