import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VBOMG002_PRD010_GUIDE1_132 = "VBOMG002_PRD010_GUIDE1_132",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        SA_DATE = "SA_DATE",
        btnSelect = "btnSelect",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SA_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_DATE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}