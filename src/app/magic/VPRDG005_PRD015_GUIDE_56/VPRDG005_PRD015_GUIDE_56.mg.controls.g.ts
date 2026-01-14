import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDG005_PRD015_GUIDE_56 = "VPRDG005_PRD015_GUIDE_56",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        V_P15_PS_CODE = "V_P15_PS_CODE",
        btnSelect = "btnSelect",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_P15_PS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_P15_PS_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}