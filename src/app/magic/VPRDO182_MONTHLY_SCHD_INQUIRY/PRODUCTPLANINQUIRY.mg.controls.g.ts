import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODUCTPLANINQUIRY = "PRODUCTPLANINQUIRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label10 = "Label10",
        Label11 = "Label11",
        Label6 = "Label6",
        Label7 = "Label7",
        Label8 = "Label8",
        Label9 = "Label9",
        PLAN_CODE_V = "PLAN_CODE_V",
        PLAN_MONTH_YEAR = "PLAN_MONTH_YEAR",
        Label14 = "Label14",
        MODEL = "MODEL",
        TYPE = "TYPE",
        OPTION = "OPTION",
        COLOR_CODE = "COLOR_CODE",
        COLOR_CODEINSIDE = "COLOR_CODEINSIDE",
        SubTaskForm = "SubTaskForm",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_CODE_V] as FormControl;
    }

    get PLAN_MONTH_YEAR(): FormControl {
        return this.fg.controls[MgControlName.PLAN_MONTH_YEAR] as FormControl;
    }

    get MODEL(): FormControl {
        return this.fg.controls[MgControlName.MODEL] as FormControl;
    }

    get TYPE(): FormControl {
        return this.fg.controls[MgControlName.TYPE] as FormControl;
    }

    get OPTION(): FormControl {
        return this.fg.controls[MgControlName.OPTION] as FormControl;
    }

    get COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODE] as FormControl;
    }

    get COLOR_CODEINSIDE(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODEINSIDE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}