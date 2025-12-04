import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VQ_ONRESULT_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO065_VQON_ENTRY_VQ_ONRESULT_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VQ_ONRESULT_ENTRY.component.html'
})
export class VQ_ONRESULT_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VQ-ON RESULT ENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VQ_ONRESULT_ENTRY.x;
    }
    Y() {
        return VQ_ONRESULT_ENTRY.y;
    }
    Width(): string {
        return VQ_ONRESULT_ENTRY.width;
    }
    Height(): string {
        return VQ_ONRESULT_ENTRY.height;
    }
    IsCenteredToWindow() {
        return VQ_ONRESULT_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return VQ_ONRESULT_ENTRY.formName;
    }
    ShowTitleBar() {
        return VQ_ONRESULT_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VQ_ONRESULT_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VQ_ONRESULT_ENTRY.isResizable;
    }
    IsMovable() {
        return VQ_ONRESULT_ENTRY.isMovable;
    }
}