import { ElementRef, HostListener, Directive } from '@angular/core';

const MIN_SIZE: number = 34;

/*
 * Original code by Steve Papa
 * http://stevepapa.com/angular2-autosize
 */
@Directive({
  selector: 'textarea[autosize]'
})
export class AutosizeDirective {
   @HostListener('input',['$event.target'])
   onInput(textArea: HTMLTextAreaElement): void {
     this.adjust();
   }
   constructor(public element: ElementRef) {
   }
   ngAfterContentChecked(): void {
     this.adjust();
   }
   adjust(): void {
     this.element.nativeElement.style.overflow = 'hidden';
     this.element.nativeElement.style.height = 'auto';
     if(this.element.nativeElement.scrollHeight < MIN_SIZE)
     {
       this.element.nativeElement.style.height = MIN_SIZE + "px";
     }
     else
     {
       this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
     }
   }
}
