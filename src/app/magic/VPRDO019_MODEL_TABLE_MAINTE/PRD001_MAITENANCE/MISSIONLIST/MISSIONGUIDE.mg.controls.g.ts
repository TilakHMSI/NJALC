import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MISSIONGUIDE = "MISSIONGUIDE",
        Table1 = "Table1",
        Column2 = "Column2",
        PRD001_S1_MTO_CODE = "PRD001_S1_MTO_CODE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD001_S1_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}