import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB027_RRe_Printcard = "VPRDB027_RRe_Printcard",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        PLAN_CODE = "PLAN_CODE",
        Label5 = "Label5",
        PLAN_DATE = "PLAN_DATE",
        Label7 = "Label7",
        PLAN_SEQ = "PLAN_SEQ",
        PLAN_SEQ_SUFFIX = "PLAN_SEQ_SUFFIX",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

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