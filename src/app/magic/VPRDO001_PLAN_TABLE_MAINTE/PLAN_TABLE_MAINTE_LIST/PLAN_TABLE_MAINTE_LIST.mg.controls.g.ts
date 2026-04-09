import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PLAN_TABLE_MAINTE_LIST = "PLAN_TABLE_MAINTE_LIST",
        btnadd = "btnadd",
        Table5 = "Table5",
        Column6 = "Column6",
        P15_PS_CODE = "P15_PS_CODE",
        Column7 = "Column7",
        P15_APPL_MODELTYPE = "P15_APPL_MODELTYPE",
        Column22 = "Column22",
        btnEdit = "btnEdit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
        'Column7',
        'Column22',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get P15_PS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P15_PS_CODE);
    }

    get P15_APPL_MODELTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P15_APPL_MODELTYPE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}