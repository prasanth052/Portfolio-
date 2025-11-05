import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  ErrorMsg!: SafeHtml;
  Status: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {
    this.ErrorMsg = this.sanitizer.bypassSecurityTrustHtml(data.Msg);
    this.Status = data.Type === 'Information' ? true : false;
  }

  Yes() {
    this.Status = true;
    this.dialogRef.close(this.Status);
  }
  No() {
    this.Status = false;
    this.dialogRef.close(this.Status);
  }

  closeDialog(value: string): void {
    this.dialogRef.close(value);
  }
  isSelectingText: any;
  checkTextSelectionStart(event: MouseEvent) {
    const selection = window.getSelection();
    if (selection && selection.toString().length === 0) {
      this.isSelectingText = true;
    }
  }

  checkTextSelectionEnd(event: MouseEvent) {
    setTimeout(() => {
      const selection = window.getSelection();
      this.isSelectingText = selection && selection.toString().length > 0;
      // Reset drag-disabled after short delay
      setTimeout(() => (this.isSelectingText = false), 200);
    }, 0);
  }
}

