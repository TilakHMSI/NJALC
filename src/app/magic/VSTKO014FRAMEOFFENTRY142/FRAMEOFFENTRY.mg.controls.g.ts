import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMEOFFENTRY = "FRAMEOFFENTRY",
        V_LOCATE = "V_LOCATE",
        Label2 = "Label2",
        V_PGID = "V_PGID",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label8 = "Label8",
        DATE_FROM_VINQ = "DATE_FROM_VINQ",
        Label10 = "Label10",
        DATE_TO_VINQ = "DATE_TO_VINQ",
        EXEC_TYPE_VINQ = "EXEC_TYPE_VINQ",
        Label12 = "Label12",
        MTO_CODE_VINQ = "MTO_CODE_VINQ",
        Label14 = "Label14",
        COLOR_CODE_VINQ = "COLOR_CODE_VINQ",
        COLOR_CODEINSIDE_VINQ = "COLOR_CODEINSIDE_VINQ",
        Label19 = "Label19",
        Label27 = "Label27",
        Label28 = "Label28",
        Label29 = "Label29",
        Label30 = "Label30",
        Label31 = "Label31",
        ENTRY_DATE_VADD = "ENTRY_DATE_VADD",
        MTO_CODE_VADD = "MTO_CODE_VADD",
        COLOR_CODE_VADD = "COLOR_CODE_VADD",
        COLOR_CODEINSIDE_VADD = "COLOR_CODEINSIDE_VADD",
        FRAME_QTY_VADD = "FRAME_QTY_VADD",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        EXEC_MODE_V = "EXEC_MODE_V",
        Label39 = "Label39",
        DateMTOADD = "DateMTOADD",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE] as FormControl;
    }

    get V_PGID(): FormControl {
        return this.fg.controls[MgControlName.V_PGID] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get DATE_FROM_VINQ(): FormControl {
        return this.fg.controls[MgControlName.DATE_FROM_VINQ] as FormControl;
    }

    get DATE_TO_VINQ(): FormControl {
        return this.fg.controls[MgControlName.DATE_TO_VINQ] as FormControl;
    }

    get EXEC_TYPE_VINQ(): FormControl {
        return this.fg.controls[MgControlName.EXEC_TYPE_VINQ] as FormControl;
    }

    get MTO_CODE_VINQ(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE_VINQ] as FormControl;
    }

    get COLOR_CODE_VINQ(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODE_VINQ] as FormControl;
    }

    get COLOR_CODEINSIDE_VINQ(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODEINSIDE_VINQ] as FormControl;
    }

    get ENTRY_DATE_VADD(): FormControl {
        return this.fg.controls[MgControlName.ENTRY_DATE_VADD] as FormControl;
    }

    get MTO_CODE_VADD(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE_VADD] as FormControl;
    }

    get COLOR_CODE_VADD(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODE_VADD] as FormControl;
    }

    get COLOR_CODEINSIDE_VADD(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODEINSIDE_VADD] as FormControl;
    }

    get FRAME_QTY_VADD(): FormControl {
        return this.fg.controls[MgControlName.FRAME_QTY_VADD] as FormControl;
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.PRD001_S1_MTO_NAME] as FormControl;
    }

    get EXEC_MODE_V(): FormControl {
        return this.fg.controls[MgControlName.EXEC_MODE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}