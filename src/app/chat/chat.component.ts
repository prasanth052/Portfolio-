import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { log } from 'console';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit, OnDestroy {
  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    console.log('open');
  }
  isChatOpen = false;
  isChatbtnClose = true;
  inputmessage = '';
  messages: string[] = [];

  toggleChat() {
    this.isChatOpen = true;
    this.isChatbtnClose = false;
  }

  CloseChat() {
    this.isChatOpen = false;
    this.isChatbtnClose = true;
  }

  sendMessage() {
    const trimmed = this.inputmessage.trim();
    if (trimmed) {
      this.messages.push(trimmed);
      this.inputmessage = '';
      console.log(this.messages);
    }
  }
  ngOnDestroy() {}
  ErrorMsg: string = '';
  ErrorType: string = '';
  dialogRef!: MatDialogRef<DialogComponent>;
  opendialog() {
    this.dialog.open(DialogComponent, {
      disableClose: true,
      data: {
        Msg: this.ErrorMsg,
        Type: this.ErrorType,
      },
    });
  }
}
