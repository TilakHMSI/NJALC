import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB015_LMONTHPRODRESULT77.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB015_LMONTHPRODRESULT77_VPRDB015_LMONTHPRODRESULT77',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB015_LMONTHPRODRESULT77.component.html'
})
export class VPRDB015_LMONTHPRODRESULT77 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB015_LMONTHPRODRESULT77";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "750px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB015_LMONTHPRODRESULT77.x;
    }
    Y() {
        return VPRDB015_LMONTHPRODRESULT77.y;
    }
    Width(): string {
        return VPRDB015_LMONTHPRODRESULT77.width;
    }
    Height(): string {
        return VPRDB015_LMONTHPRODRESULT77.height;
    }
    IsCenteredToWindow() {
        return VPRDB015_LMONTHPRODRESULT77.isCenteredToWindow;
    }
    FormName() {
        return VPRDB015_LMONTHPRODRESULT77.formName;
    }
    ShowTitleBar() {
        return VPRDB015_LMONTHPRODRESULT77.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB015_LMONTHPRODRESULT77.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB015_LMONTHPRODRESULT77.isResizable;
    }
    IsMovable() {
        return VPRDB015_LMONTHPRODRESULT77.isMovable;
    }
 override ngOnInit(): void {
        super.ngOnInit();
        const group: FormGroup = this.screenFormGroup;
        (group.controls['vBlob64base'] as FormControl).registerOnChange(this.OnChange.bind(this));
        (group.controls['vBlob64base1'] as FormControl).registerOnChange(this.OnChange.bind(this));
      }

     OnChange() {
        if (
          this.mg.getValue('vBlob64base') !== undefined &&
          this.mg.getValue('vBlob64base') !== null,
          this.mg.getValue('vBlob64base1') !== undefined &&
          this.mg.getValue('vBlob64base1') !== null
        ) {
          this.downloadblb2();
          this.downloadblb3();
        }
      }
      downloadblb2() {
        const base64 = this.mg.getValue('vBlob64base');
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
            const filename = this.mg.getValue(this.mgc.vFileName);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }
         downloadblb3() {
        const base64 = this.mg.getValue('vBlob64base1');
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
            const filename = this.mg.getValue(this.mgc.vFileName1);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }
}