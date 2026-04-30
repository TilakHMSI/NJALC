import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB012_LAEAFRESULTLIST75 = "VPRDB012_LAEAFRESULTLIST75",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        OPT_DATE = "OPT_DATE",
        DATEMMYYYYY = "DATEMMYYYYY",
        DATEDDMMYYYY = "DATEDDMMYYYY",
        Edit3 = "Edit3",
        Edit5 = "Edit5",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get OPT_DATE(): FormControl {
        return this.fg.controls[MgControlName.OPT_DATE] as FormControl;
    }

    get DATEMMYYYYY(): FormControl {
        return this.fg.controls[MgControlName.DATEMMYYYYY] as FormControl;
    }

    get DATEDDMMYYYY(): FormControl {
        return this.fg.controls[MgControlName.DATEDDMMYYYY] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}