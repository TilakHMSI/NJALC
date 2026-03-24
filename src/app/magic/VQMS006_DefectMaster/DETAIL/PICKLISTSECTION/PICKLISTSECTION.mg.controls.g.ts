import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PICKLISTSECTION = "PICKLISTSECTION",
        Table1 = "Table1",
        Column2 = "Column2",
        V_SUBCODE = "V_SUBCODE",
        Column3 = "Column3",
        V_DISC = "V_DISC",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_SUBCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_SUBCODE);
    }

    get V_DISC(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_DISC);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}