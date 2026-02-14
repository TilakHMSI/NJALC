import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD002_MAITENANCE = "PRD002_MAITENANCE",
        Table1 = "Table1",
        Column2 = "Column2",
        S2_COLOR_CODE = "S2_COLOR_CODE",
        S2_COLOR_CODEINSIDE = "S2_COLOR_CODEINSIDE",
        Column3 = "Column3",
        S2_SALES_MTOC_CODE = "S2_SALES_MTOC_CODE",
        Column4 = "Column4",
        S2_START_DATE = "S2_START_DATE",
        Column5 = "Column5",
        S2_ABOLITION_DATE = "S2_ABOLITION_DATE",
        Column6 = "Column6",
        COLOR_DRAWING_NO = "COLOR_DRAWING_NO",
        Column7 = "Column7",
        S2_POS_CODE = "S2_POS_CODE",
        CancelRowEditing="CancelRowEditing",
        EnterRowEditing="EnterRowEditing",
        SaveRowEditing="SaveRowEditing",
        Column15="Column15"

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
        'Column15',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S2_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_COLOR_CODE);
    }

    get S2_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_COLOR_CODEINSIDE);
    }

    get S2_SALES_MTOC_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_SALES_MTOC_CODE);
    }

    get S2_START_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_START_DATE);
    }

    get S2_ABOLITION_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_ABOLITION_DATE);
    }

    get COLOR_DRAWING_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.COLOR_DRAWING_NO);
    }

    get S2_POS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S2_POS_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}