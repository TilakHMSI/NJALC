import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CONFIRM = "CONFIRM",
        Group1 = "Group1",
        V_ENGFRMTYPE_V = "V_ENGFRMTYPE_V",
        V_CHASSIS_NOFROM_V = "V_CHASSIS_NOFROM_V",
        Label4 = "Label4",
        V_CHASSIS_NOTO_V = "V_CHASSIS_NOTO_V",
        Group6 = "Group6",
        Table10 = "Table10",
        Column11 = "Column11",
        Label17 = "Label17",
        Label18 = "Label18",
        Column12 = "Column12",
        Label21 = "Label21",
        Column13 = "Column13",
        Column14 = "Column14",
        Label19 = "Label19",
        Column15 = "Column15",
        Column16 = "Column16",
        Label20 = "Label20",
        Label7 = "Label7",
        Label8 = "Label8",
        V_V_QTYCONFIRM = "V_V_QTYCONFIRM",
        btnOk = "btnOk",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
        'Column16',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_ENGFRMTYPE_V(): FormControl {
        return this.fg.controls[MgControlName.V_ENGFRMTYPE_V] as FormControl;
    }

    get V_CHASSIS_NOFROM_V(): FormControl {
        return this.fg.controls[MgControlName.V_CHASSIS_NOFROM_V] as FormControl;
    }

    get V_CHASSIS_NOTO_V(): FormControl {
        return this.fg.controls[MgControlName.V_CHASSIS_NOTO_V] as FormControl;
    }

    get V_V_QTYCONFIRM(): FormControl {
        return this.fg.controls[MgControlName.V_V_QTYCONFIRM] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}