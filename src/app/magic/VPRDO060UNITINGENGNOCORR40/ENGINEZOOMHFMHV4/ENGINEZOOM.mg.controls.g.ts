import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGINEZOOM = "ENGINEZOOM",
        Table1 = "Table1",
        Column2 = "Column2",
        V_ENGFRMTYPE = "V_ENGFRMTYPE",
        Column3 = "Column3",
        V_CHASSIS_NO = "V_CHASSIS_NO",
        Column4 = "Column4",
        V_MTO_NAME = "V_MTO_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_ENGFRMTYPE);
    }

    get V_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHASSIS_NO);
    }

    get V_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_MTO_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}