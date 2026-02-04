import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODEL_PICKLIST = "MODEL_PICKLIST",
        Table1 = "Table1",
        Column2 = "Column2",
        S1_MTO_CODE = "S1_MTO_CODE",
        V_Select = "V_Select",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S1_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S1_MTO_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}