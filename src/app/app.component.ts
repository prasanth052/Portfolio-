import { animate,state,style,transition,trigger,} from '@angular/animations';
import {  AfterViewInit,Component,ElementRef, Inject, OnInit,PLATFORM_ID,ViewChild,} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

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
export class AppComponent implements AfterViewInit, OnInit {
  isBrowser: boolean;

  ngOnInit() {
    if (this.isBrowser) {
      this.profileImage = localStorage.getItem('profileImage');
    }
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private toastr: ToastrService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  title = 'Prasanth';
  isSidenavOpen = true;
  sidenavClass = 'lg';

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
        console.log(inputValue);

        if (inputValue) {
          const messageElement = document.createElement('p');
          console.log(messageElement);
          messageElement.textContent = inputValue;
          console.log(messageElement);
          this.chatBody?.nativeElement.appendChild(messageElement);
          this.chatInput.nativeElement.value = ''; // Clear input after sending
        }
      });
    }
  }
  profileImage: any;
  triggerFileInput(): void {
    if (this.isBrowser) {
      const fileInput = document.getElementById(
        'fileInput'
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.click();
      }
    }
  }
  fileError: string | null = null;
  onFileSelected(event: Event): void {
    if (this.isBrowser) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const allowedFormats = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
        ];

        if (!allowedFormats.includes(file.type)) {
          this.toastr.error(
            'Invalid file format. Please select a JPG, PNG, GIF, or WEBP image'
          );
          return;
        }

        this.fileError = null;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target?.result as string;
          localStorage.setItem('profileImage', this.profileImage);
        };
        reader.readAsDataURL(file);
      }
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
