import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchStopReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DispatchStopReport_DispatchStopReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DispatchStopReport.component.html'
})
export class DispatchStopReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DispatchStopReport";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DispatchStopReport.x;
    }
    Y() {
        return DispatchStopReport.y;
    }
    Width(): string {
        return DispatchStopReport.width;
    }
    Height(): string {
        return DispatchStopReport.height;
    }
    IsCenteredToWindow() {
        return DispatchStopReport.isCenteredToWindow;
    }
    FormName() {
        return DispatchStopReport.formName;
    }
    ShowTitleBar() {
        return DispatchStopReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DispatchStopReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DispatchStopReport.isResizable;
    }
    IsMovable() {
        return DispatchStopReport.isMovable;
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
            const filename = this.mg.getValue(this.mgc.v_FileName);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }
}