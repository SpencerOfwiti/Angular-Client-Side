import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {
  @Input()
  id: string

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      this.togglePasswordVisibility();
    });
  }

  togglePasswordVisibility() {
    let password = document.getElementById(this.id);
    // @ts-ignore
    if (password.type === 'password') {
      // @ts-ignore
      password.type = 'text';
    } else {
      // @ts-ignore
      password.type = 'password';
    }
  }

}
