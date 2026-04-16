import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELGUIDE = "MODELGUIDE",
        Table1 = "Table1",
        Column2 = "Column2",
        V_MTOCD = "V_MTOCD",
        Column3 = "Column3",
        V_MTONAM = "V_MTONAM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_MTOCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_MTOCD);
    }

    get V_MTONAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_MTONAM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}