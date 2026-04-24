import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMEZOOM = "FRAMEZOOM",
        Table1 = "Table1",
        Column2 = "Column2",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
        Column3 = "Column3",
        V_P05_MTO_NAME = "V_P05_MTO_NAME",
        Column4 = "Column4",
        V_P05_COLOR_CODE = "V_P05_COLOR_CODE",
        Column5 = "Column5",
        V_P05_AFOFF_DATE = "V_P05_AFOFF_DATE",
        Column6 = "Column6",
        V_P05_AFOFF_TIME = "V_P05_AFOFF_TIME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit7(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit7);
    }

    get Edit8(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit8);
    }

    get V_P05_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_P05_MTO_NAME);
    }

    get V_P05_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_P05_COLOR_CODE);
    }

    get V_P05_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_P05_AFOFF_DATE);
    }

    get V_P05_AFOFF_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_P05_AFOFF_TIME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}