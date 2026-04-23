import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    EVSM_LIST = "EVSM_LIST",
        btnAdd = "btnAdd",
        Table2 = "Table2",
        Column3 = "Column3",
        MODEL_CODE = "MODEL_CODE",
        Column4 = "Column4",
        BOM_CODE = "BOM_CODE",
        Column11 = "Column11",
        btnDelete = "btnDelete",
        btnEdit = "btnEdit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column11',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODEL_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MODEL_CODE);
    }

    get BOM_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.BOM_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}