import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectMTOCode = "SelectMTOCode",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        PRD001_S1_MTO_CODE = "PRD001_S1_MTO_CODE",
        Column4 = "Column4",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD001_S1_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_CODE);
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}