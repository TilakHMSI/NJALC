import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ListoutModelCode = "ListoutModelCode",
        Table1 = "Table1",
        Column2 = "Column2",
        Temp__Model_Code_Model_Code = "Temp__Model_Code_Model_Code",
        btn_Close="btn_Close"
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Temp__Model_Code_Model_Code(): FormControl {
        return this.getTableChildFormControl(MgControlName.Temp__Model_Code_Model_Code);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}