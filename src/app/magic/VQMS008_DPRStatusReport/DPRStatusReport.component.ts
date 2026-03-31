import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DPRStatusReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS008_DPRStatusReport_DPRStatusReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DPRStatusReport.component.html'
})
export class DPRStatusReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DPRStatusReport";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DPRStatusReport.x;
    }
    Y() {
        return DPRStatusReport.y;
    }
    Width(): string {
        return DPRStatusReport.width;
    }
    Height(): string {
        return DPRStatusReport.height;
    }
    IsCenteredToWindow() {
        return DPRStatusReport.isCenteredToWindow;
    }
    FormName() {
        return DPRStatusReport.formName;
    }
    ShowTitleBar() {
        return DPRStatusReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DPRStatusReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DPRStatusReport.isResizable;
    }
    IsMovable() {
        return DPRStatusReport.isMovable;
    }
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