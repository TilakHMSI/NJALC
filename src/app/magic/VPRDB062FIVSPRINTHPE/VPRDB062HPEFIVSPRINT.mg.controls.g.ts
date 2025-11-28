import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB062HPEFIVSPRINT = "VPRDB062HPEFIVSPRINT",
        Label1 = "Label1",
        Label3 = "Label3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Label5 = "Label5",
        X2_PLAN_CODE = "X2_PLAN_CODE",
        Label7 = "Label7",
        X2_PLAN_DATE = "X2_PLAN_DATE",
        Label9 = "Label9",
        X2_PLAN_SEQ = "X2_PLAN_SEQ",
        X2_PLAN_SEQ_SUFFIX = "X2_PLAN_SEQ_SUFFIX",
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

    get X2_PLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.X2_PLAN_CODE] as FormControl;
    }

    get X2_PLAN_DATE(): FormControl {
        return this.fg.controls[MgControlName.X2_PLAN_DATE] as FormControl;
    }

    get X2_PLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.X2_PLAN_SEQ] as FormControl;
    }

    get X2_PLAN_SEQ_SUFFIX(): FormControl {
        return this.fg.controls[MgControlName.X2_PLAN_SEQ_SUFFIX] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}