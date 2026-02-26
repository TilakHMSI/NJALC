import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Details = "Details",
        btnadd = "btnadd",
        Table1 = "Table1",
        Column2 = "Column2",
        EV_MODEL = "EV_MODEL",
        Column3 = "Column3",
        PCU_ACTIVE = "PCU_ACTIVE",
        Column4 = "Column4",
        IVI_ACTIVE = "IVI_ACTIVE",
        Column5 = "Column5",
        GPS_ACTIVE = "GPS_ACTIVE",
        Column6 = "Column6",
        SCU_ACTIVE = "SCU_ACTIVE",
        Column17 = "Column17",
        BATTERY_ACTIVE = "BATTERY_ACTIVE",
        Column19 = "Column19",
        CHARGER_ACTIVE = "CHARGER_ACTIVE",
        Column12 = "Column12",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column17',
        'Column19',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get EV_MODEL(): FormControl {
        return this.getTableChildFormControl(MgControlName.EV_MODEL);
    }

    get PCU_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCU_ACTIVE);
    }

    get IVI_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.IVI_ACTIVE);
    }

    get GPS_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.GPS_ACTIVE);
    }

    get SCU_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SCU_ACTIVE);
    }

    get BATTERY_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.BATTERY_ACTIVE);
    }

    get CHARGER_ACTIVE(): FormControl {
        return this.getTableChildFormControl(MgControlName.CHARGER_ACTIVE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}