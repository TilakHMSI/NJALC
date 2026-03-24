import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PICKLISTPASSRATIOTYPE = "PICKLISTPASSRATIOTYPE",
        Table1 = "Table1",
        Column2 = "Column2",
        PASS_DESCRIPTION = "PASS_DESCRIPTION",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PASS_DESCRIPTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.PASS_DESCRIPTION);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}