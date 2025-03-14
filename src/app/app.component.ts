import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('sidenavState', [
      state('open', style({ width: '250px' })),
      state('closed', style({ width: '0px' })),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'Prasanth';
  isSidenavOpen = true;
  sidenavClass = 'lg';
  text =
    "I'm a  <b style='color:brown;'> Fullstack Web Developer </b> building and managing the Front-end of  Websites and " +
    ' Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section .  <br> ' +
    'I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. <br> ' +
    " I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. ";
  @ViewChild('chatBox') chatBox!: ElementRef;
  @ViewChild('chatBtn') chatBtn!: ElementRef;
  @ViewChild('closeChat') closeChat!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef;
  @ViewChild('chatBody') chatBody!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  ngAfterViewInit() {
    if (this.chatBtn) {
      this.chatBtn.nativeElement.addEventListener('click', () => {
        if (this.chatBox) {
          this.chatBox.nativeElement.style.display = 'block';
        }
      });
    }

    if (this.closeChat) {
      this.closeChat.nativeElement.addEventListener('click', () => {
        if (this.chatBox) {
          this.chatBox.nativeElement.style.display = 'none';
        }
      });
    }

    if (this.sendBtn) {
      this.sendBtn.nativeElement.addEventListener('click', () => {
        const inputValue = this.chatInput?.nativeElement.value.trim();
        if (inputValue) {
          const messageElement = document.createElement('p');
          messageElement.textContent = inputValue;
          this.chatBody?.nativeElement.appendChild(messageElement);
          this.chatInput.nativeElement.value = ''; // Clear input after sending
        }
      });
    }
  }
  msgSend(){
    
  }
}
