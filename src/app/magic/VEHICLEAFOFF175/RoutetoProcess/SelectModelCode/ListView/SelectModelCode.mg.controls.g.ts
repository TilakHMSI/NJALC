import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectModelCode = "SelectModelCode",
        Table1 = "Table1",
        Column2 = "Column2",
        Temp__Model_Code_Model_Code = "Temp__Model_Code_Model_Code",
        Column3 = "Column3",
        Temp__Model_Code_Check = "Temp__Model_Code_Check",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Temp__Model_Code_Model_Code(): FormControl {
        return this.getTableChildFormControl(MgControlName.Temp__Model_Code_Model_Code);
    }

    get Temp__Model_Code_Check(): FormControl {
        return this.getTableChildFormControl(MgControlName.Temp__Model_Code_Check);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}