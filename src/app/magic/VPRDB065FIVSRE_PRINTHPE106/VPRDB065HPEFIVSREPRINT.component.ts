import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB065HPEFIVSREPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB065FIVSRE_PRINTHPE106_VPRDB065HPEFIVSREPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB065HPEFIVSREPRINT.component.html'
})
export class VPRDB065HPEFIVSREPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB065HPEFIVSREPRINT";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB065HPEFIVSREPRINT.x;
    }
    Y() {
        return VPRDB065HPEFIVSREPRINT.y;
    }
    Width(): string {
        return VPRDB065HPEFIVSREPRINT.width;
    }
    Height(): string {
        return VPRDB065HPEFIVSREPRINT.height;
    }
    IsCenteredToWindow() {
        return VPRDB065HPEFIVSREPRINT.isCenteredToWindow;
    }
    FormName() {
        return VPRDB065HPEFIVSREPRINT.formName;
    }
    ShowTitleBar() {
        return VPRDB065HPEFIVSREPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB065HPEFIVSREPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB065HPEFIVSREPRINT.isResizable;
    }
    IsMovable() {
        return VPRDB065HPEFIVSREPRINT.isMovable;
    }
override ngOnInit(): void {
        super.ngOnInit();
        const group: FormGroup = this.screenFormGroup;
        (group.controls['vBlob64base'] as FormControl).registerOnChange(this.OnChange.bind(this));
      
      }

     OnChange() {
        if (
          this.mg.getValue('vBlob64base') !== undefined &&
          this.mg.getValue('vBlob64base') !== null
          
        ) {
          this.downloadblb2();
        
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
     
}