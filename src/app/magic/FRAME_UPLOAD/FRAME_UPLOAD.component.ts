import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAME_UPLOAD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAME_UPLOAD_FRAME_UPLOAD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAME_UPLOAD.component.html'
})
export class FRAME_UPLOAD extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
     fileText: string | ArrayBuffer | undefined;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAME_UPLOAD";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return FRAME_UPLOAD.x;
    }
    Y() {
        return FRAME_UPLOAD.y;
    }
    Width(): string {
        return FRAME_UPLOAD.width;
    }
    Height(): string {
        return FRAME_UPLOAD.height;
    }
    IsCenteredToWindow() {
        return FRAME_UPLOAD.isCenteredToWindow;
    }
    FormName() {
        return FRAME_UPLOAD.formName;
    }
    ShowTitleBar() {
        return FRAME_UPLOAD.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAME_UPLOAD.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAME_UPLOAD.isResizable;
    }
    IsMovable() {
        return FRAME_UPLOAD.isMovable;
    }

       fileUpload(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  
  if (!file) {
    console.warn('No file selected');
    return;
  }
  
  // Optional: Validate Excel MIME types
  const excelTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.ms-excel', // .xls
    'text/csv' // .csv
  ];
  if (!excelTypes.includes(file.type)) {
    console.error('Please select a valid Excel file');
    return;
  }
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  
  reader.onload = () => {
    const fullDataUrl = reader.result as string;
    const commaIndex = fullDataUrl.indexOf(',');
    if (commaIndex === -1) {
      console.error('Invalid data URL');
      return;
    }
    
    const base64Data = fullDataUrl.slice(commaIndex + 1);
    this.mg.setValueToControl('vBlob64Format', base64Data);
    this.mg.setValueToControl('vFileName', file.name);
  };
        
}
}