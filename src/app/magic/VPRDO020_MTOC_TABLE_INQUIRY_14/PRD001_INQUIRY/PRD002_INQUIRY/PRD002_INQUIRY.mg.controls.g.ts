import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD002_INQUIRY = "PRD002_INQUIRY",
        Table1 = "Table1",
        Column2 = "Column2",
        PRD002_S2_COLOR_CODE = "PRD002_S2_COLOR_CODE",
        PRD002_S2_COLOR_CODEINSIDE = "PRD002_S2_COLOR_CODEINSIDE",
        Column3 = "Column3",
        PRD002_S2_SALES_MTOC_CODE = "PRD002_S2_SALES_MTOC_CODE",
        Column4 = "Column4",
        PRD002_S2_START_DATE = "PRD002_S2_START_DATE",
        Column5 = "Column5",
        PRD002_S2_ABOLITION_DATE = "PRD002_S2_ABOLITION_DATE",
        Column6 = "Column6",
        PRD002_COLOR_DRAWING_NO = "PRD002_COLOR_DRAWING_NO",
        Column7 = "Column7",
        PRD002_S2_POS_CODE = "PRD002_S2_POS_CODE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD002_S2_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_COLOR_CODE);
    }

    get PRD002_S2_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_COLOR_CODEINSIDE);
    }

    get PRD002_S2_SALES_MTOC_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_SALES_MTOC_CODE);
    }

    get PRD002_S2_START_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_START_DATE);
    }

    get PRD002_S2_ABOLITION_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_ABOLITION_DATE);
    }

    get PRD002_COLOR_DRAWING_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_COLOR_DRAWING_NO);
    }

    get PRD002_S2_POS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_POS_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}