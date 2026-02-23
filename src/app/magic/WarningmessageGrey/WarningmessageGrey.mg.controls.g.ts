import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WarningmessageGrey = "WarningmessageGrey",
        Label1 = "Label1",
        pMESSAGE = "pMESSAGE",
        VButton = "VButton",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pMESSAGE(): FormControl {
        return this.fg.controls[MgControlName.pMESSAGE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}