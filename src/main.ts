import './main.scss';

import { AbsComponentManager } from 'abs-component';
import { absPolyfill } from 'abs-utilities';

import { Test } from './components/test/test.component';

absPolyfill();

export const absComponentManager = new AbsComponentManager({
  nodeAttributeSelector: 'cmp',
});

[
  Test,
].forEach(Component => {
  absComponentManager.registerComponent(
    Component.prototype.constructor.name,
    Component
  );
});

absComponentManager.initComponents();