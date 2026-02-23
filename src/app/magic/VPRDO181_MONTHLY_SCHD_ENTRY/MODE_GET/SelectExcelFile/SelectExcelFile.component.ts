import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectExcelFile.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO181_MONTHLY_SCHD_ENTRY_MODE_GET_SelectExcelFile_SelectExcelFile',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SelectExcelFile.component.html'
})
export class SelectExcelFile extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;


    fileText: string | ArrayBuffer | undefined;

    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectExcelFile";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "850px";
    private static readonly height: string = "200px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SelectExcelFile.x;
    }
    Y() {
        return SelectExcelFile.y;
    }
    Width(): string {
        return SelectExcelFile.width;
    }
    Height(): string {
        return SelectExcelFile.height;
    }
    IsCenteredToWindow() {
        return SelectExcelFile.isCenteredToWindow;
    }
    FormName() {
        return SelectExcelFile.formName;
    }
    ShowTitleBar() {
        return SelectExcelFile.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectExcelFile.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectExcelFile.isResizable;
    }
    IsMovable() {
        return SelectExcelFile.isMovable;
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
    'application/vnd.ms-excel' // .xls
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
    this.mg.setValueToControl('Select_Excel_File', file.name);
  };
}
}