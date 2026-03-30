import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./List.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DSQLList_List',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './List.component.html'
})
export class List extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "List";
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
        return List.x;
    }
    Y() {
        return List.y;
    }
    Width(): string {
        return List.width;
    }
    Height(): string {
        return List.height;
    }
    IsCenteredToWindow() {
        return List.isCenteredToWindow;
    }
    FormName() {
        return List.formName;
    }
    ShowTitleBar() {
        return List.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return List.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return List.isResizable;
    }
    IsMovable() {
        return List.isMovable;
    }
}