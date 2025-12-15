import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Message.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO042DISPAF_OFF_ENTRY_CONFIRMATIONMESSAGE_Message',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./MESSAGE.component.css'],
    templateUrl: './Message.component.html'
})
export class Message extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Message";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "595px";
    private static readonly height: string = "260px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return Message.x;
    }
    Y() {
        return Message.y;
    }
    Width(): string {
        return Message.width;
    }
    Height(): string {
        return Message.height;
    }
    IsCenteredToWindow() {
        return Message.isCenteredToWindow;
    }
    FormName() {
        return Message.formName;
    }
    ShowTitleBar() {
        return Message.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Message.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Message.isResizable;
    }
    IsMovable() {
        return Message.isMovable;
    }
}