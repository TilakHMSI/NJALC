import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PLSQLERROR = "PLSQLERROR",
        Label1 = "Label1",
        V_IDERROR_V = "V_IDERROR_V",
        Label3 = "Label3",
        V_O_ERR_CD_P = "V_O_ERR_CD_P",
        Label5 = "Label5",
        V_O_PG_ID_P = "V_O_PG_ID_P",
        Label7 = "Label7",
        V_O_SQL_NO_P = "V_O_SQL_NO_P",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_IDERROR_V(): FormControl {
        return this.fg.controls[MgControlName.V_IDERROR_V] as FormControl;
    }

    get V_O_ERR_CD_P(): FormControl {
        return this.fg.controls[MgControlName.V_O_ERR_CD_P] as FormControl;
    }

    get V_O_PG_ID_P(): FormControl {
        return this.fg.controls[MgControlName.V_O_PG_ID_P] as FormControl;
    }

    get V_O_SQL_NO_P(): FormControl {
        return this.fg.controls[MgControlName.V_O_SQL_NO_P] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}