import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB052ENGFRMBARCDLABEL = "VPRDB052ENGFRMBARCDLABEL",
        Label1 = "Label1",
        Label3 = "Label3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Label5 = "Label5",
        vX2_PLAN_CODE = "vX2_PLAN_CODE",
        Label7 = "Label7",
        vX2_PLAN_DATE = "vX2_PLAN_DATE",
        Label9 = "Label9",
        vX2_PLAN_SEQ = "vX2_PLAN_SEQ",
        vX2_PLAN_SEQ_SUFFIX = "vX2_PLAN_SEQ_SUFFIX",
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

    get vX2_PLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.vX2_PLAN_CODE] as FormControl;
    }

    get vX2_PLAN_DATE(): FormControl {
        return this.fg.controls[MgControlName.vX2_PLAN_DATE] as FormControl;
    }

    get vX2_PLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.vX2_PLAN_SEQ] as FormControl;
    }

    get vX2_PLAN_SEQ_SUFFIX(): FormControl {
        return this.fg.controls[MgControlName.vX2_PLAN_SEQ_SUFFIX] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}