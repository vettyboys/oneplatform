import {Component, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'layout-full-page');
  }

  ngOnDestroy(): void {
  }
}
