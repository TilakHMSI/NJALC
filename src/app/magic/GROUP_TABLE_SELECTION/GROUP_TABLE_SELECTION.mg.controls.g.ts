import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    GROUP_TABLE_SELECTION = "GROUP_TABLE_SELECTION",
        Table1 = "Table1",
        Column2 = "Column2",
        PR27_GROUP = "PR27_GROUP",
        Column3 = "Column3",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PR27_GROUP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP);
    }

    get PR27_GROUP_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}