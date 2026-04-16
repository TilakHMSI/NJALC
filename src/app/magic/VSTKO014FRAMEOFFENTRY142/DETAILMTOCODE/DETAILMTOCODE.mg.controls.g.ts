import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DETAILMTOCODE = "DETAILMTOCODE",
        Table1 = "Table1",
        Column2 = "Column2",
        PR31_AFOFF_DATE = "PR31_AFOFF_DATE",
        Column3 = "Column3",
        PRD031FRAME_OFF_PR31_FRAME_QTY = "PRD031FRAME_OFF_PR31_FRAME_QTY",
        Column4 = "Column4",
        PRD031FRAME_OFF_PR31_MTO_CODE = "PRD031FRAME_OFF_PR31_MTO_CODE",
        Column5 = "Column5",
        PR31_COLOR_CODE = "PR31_COLOR_CODE",
        PR31_COLOR_CODEINSIDE = "PR31_COLOR_CODEINSIDE",
        Column6 = "Column6",
        PRD031FRAME_OFF_PR31_MTO_NAME = "PRD031FRAME_OFF_PR31_MTO_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PR31_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR31_AFOFF_DATE);
    }

    get PRD031FRAME_OFF_PR31_FRAME_QTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD031FRAME_OFF_PR31_FRAME_QTY);
    }

    get PRD031FRAME_OFF_PR31_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD031FRAME_OFF_PR31_MTO_CODE);
    }

    get PR31_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR31_COLOR_CODE);
    }

    get PR31_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR31_COLOR_CODEINSIDE);
    }

    get PRD031FRAME_OFF_PR31_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD031FRAME_OFF_PR31_MTO_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}