import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODUCTINLINEPICKLIST = "PRODUCTINLINEPICKLIST",
        Table1 = "Table1",
        Column3 = "Column3",
        V_PRODLIND = "V_PRODLIND",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_PRODLIND(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_PRODLIND);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}