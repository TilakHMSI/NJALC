import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB058ENGFRMBARCDLABEL = "VPRDB058ENGFRMBARCDLABEL",
        Label1 = "Label1",
        Label3 = "Label3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Label5 = "Label5",
        PLAN_CODE = "PLAN_CODE",
        Label7 = "Label7",
        PLAN_DATE = "PLAN_DATE",
        Label9 = "Label9",
        PLAN_SEQ = "PLAN_SEQ",
        PLAN_SEQ_SUFFIX = "PLAN_SEQ_SUFFIX",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get PLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.PLAN_CODE] as FormControl;
    }

    get PLAN_DATE(): FormControl {
        return this.fg.controls[MgControlName.PLAN_DATE] as FormControl;
    }

    get PLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ] as FormControl;
    }

    get PLAN_SEQ_SUFFIX(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ_SUFFIX] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}