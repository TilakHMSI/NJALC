import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchReleaseBatch_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./DispatchReleaseBatch_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-DispatchReleaseBatch_DispatchReleaseBatch_VIEW_DispatchReleaseBatch_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DispatchRealease.component.css'],
    templateUrl: './DispatchReleaseBatch_VIEW.component.html'
})
export class DispatchReleaseBatch_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
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
            const filename = this.mg.getValue(this.mgc.vFilePDFName);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }
}