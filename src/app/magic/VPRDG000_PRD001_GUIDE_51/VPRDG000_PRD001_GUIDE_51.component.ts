import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDG000_PRD001_GUIDE_51.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG000_PRD001_GUIDE_51_VPRDG000_PRD001_GUIDE_51',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDG000_PRD001_GUIDE_51.component.html'
})
export class VPRDG000_PRD001_GUIDE_51 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDG000_PRD001_GUIDE_51";
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
        return VPRDG000_PRD001_GUIDE_51.x;
    }
    Y() {
        return VPRDG000_PRD001_GUIDE_51.y;
    }
    Width(): string {
        return VPRDG000_PRD001_GUIDE_51.width;
    }
    Height(): string {
        return VPRDG000_PRD001_GUIDE_51.height;
    }
    IsCenteredToWindow() {
        return VPRDG000_PRD001_GUIDE_51.isCenteredToWindow;
    }
    FormName() {
        return VPRDG000_PRD001_GUIDE_51.formName;
    }
    ShowTitleBar() {
        return VPRDG000_PRD001_GUIDE_51.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDG000_PRD001_GUIDE_51.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDG000_PRD001_GUIDE_51.isResizable;
    }
    IsMovable() {
        return VPRDG000_PRD001_GUIDE_51.isMovable;
    }
}