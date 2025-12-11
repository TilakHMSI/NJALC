import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PrintScreen.mg.controls.g";
import { MgDisplayedColumns } from "./PrintScreen.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PrintScreen_PrintScreen',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PrintScreen.component.html',
    styleUrl: './Print.component.css'
})
export class PrintScreen extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PrintScreen";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PrintScreen.x;
    }
    Y() {
        return PrintScreen.y;
    }
    Width(): string {
        return PrintScreen.width;
    }
    Height(): string {
        return PrintScreen.height;
    }
    IsCenteredToWindow() {
        return PrintScreen.isCenteredToWindow;
    }
    FormName() {
        return PrintScreen.formName;
    }
    ShowTitleBar() {
        return PrintScreen.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PrintScreen.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PrintScreen.isResizable;
    }
    IsMovable() {
        return PrintScreen.isMovable;
    }
    override displayedColumns = this.mgdp;

    override ngOnInit(): void {
        super.ngOnInit();
        const group: FormGroup = this.screenFormGroup;
        (group.controls['vBlobResponseBase64'] as FormControl).registerOnChange(this.OnChange.bind(this));
      }

     OnChange() {
        if (
          this.mg.getValue('vBlobResponseBase64') !== undefined &&
          this.mg.getValue('vBlobResponseBase64') !== null
        ) {
          this.downloadblb2();
        }
      }
      downloadblb2() {
        const base64 = this.mg.getValue('vBlobResponseBase64');
        if (base64 !== undefined || base64 !== null) {
          const byteCharacters = atob(base64);
          const byteNumbers = new Array(byteCharacters.length);
    
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
    
          const byteArray = new Uint8Array(byteNumbers);
          const binLb2 = new window.Blob([byteArray]);
          if (binLb2.size !== 0) {
            const downloadlink = document.createElement('a');
            const filename = this.mg.getValue(this.mgc.PrintDetails_FileName);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }

      
}