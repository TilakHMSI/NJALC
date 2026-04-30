import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOR_CM = "COLOR_CM",
        S2_COLOR_CODE = "S2_COLOR_CODE",
        S2_COLOR_CODEINSIDE = "S2_COLOR_CODEINSIDE",
        btnexit = "btnexit",
        S2_SALES_MTOC_CODE = "S2_SALES_MTOC_CODE",
        S2_START_DATE = "S2_START_DATE",
        S2_ABOLITION_DATE = "S2_ABOLITION_DATE",
        COLOR_DRAWING_NO = "COLOR_DRAWING_NO",
        S2_POS_CODE = "S2_POS_CODE",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S2_COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.S2_COLOR_CODE] as FormControl;
    }

    get S2_COLOR_CODEINSIDE(): FormControl {
        return this.fg.controls[MgControlName.S2_COLOR_CODEINSIDE] as FormControl;
    }

    get S2_SALES_MTOC_CODE(): FormControl {
        return this.fg.controls[MgControlName.S2_SALES_MTOC_CODE] as FormControl;
    }

    get S2_START_DATE(): FormControl {
        return this.fg.controls[MgControlName.S2_START_DATE] as FormControl;
    }

    get S2_ABOLITION_DATE(): FormControl {
        return this.fg.controls[MgControlName.S2_ABOLITION_DATE] as FormControl;
    }

    get COLOR_DRAWING_NO(): FormControl {
        return this.fg.controls[MgControlName.COLOR_DRAWING_NO] as FormControl;
    }

    get S2_POS_CODE(): FormControl {
        return this.fg.controls[MgControlName.S2_POS_CODE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}