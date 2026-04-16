import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELGUIDE = "MODELGUIDE",
        Table1 = "Table1",
        Column2 = "Column2",
        PRD001_S1_MTO_CODE = "PRD001_S1_MTO_CODE",
        Column3 = "Column3",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Column4 = "Column4",
        PRD001_S1_PRODCLOSE_DATE = "PRD001_S1_PRODCLOSE_DATE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
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

    get PRD001_S1_PRODCLOSE_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_PRODCLOSE_DATE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}