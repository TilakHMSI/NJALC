import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB028_RRe_Printcard = "VPRDB028_RRe_Printcard",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        vPLAN_CODE = "vPLAN_CODE",
        Label5 = "Label5",
        vPLAN_DATE = "vPLAN_DATE",
        Label7 = "Label7",
        vPLAN_SEQ = "vPLAN_SEQ",
        vPLAN_SEQ_SUFFIX = "vPLAN_SEQ_SUFFIX",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vPLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.vPLAN_CODE] as FormControl;
    }

    get vPLAN_DATE(): FormControl {
        return this.fg.controls[MgControlName.vPLAN_DATE] as FormControl;
    }

    get vPLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.vPLAN_SEQ] as FormControl;
    }

    get vPLAN_SEQ_SUFFIX(): FormControl {
        return this.fg.controls[MgControlName.vPLAN_SEQ_SUFFIX] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}