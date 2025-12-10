import { AbsComponent } from 'abs-component';

export class Test implements AbsComponent {
  constructor(public readonly node: HTMLElement) {}

  init(): void {
    console.log('[TEST CMP] init');
  }

  ready(): void {
    console.log('[TEST CMP] ready');
  }
}