import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    BrowseDEFECTMASTER = "BrowseDEFECTMASTER",
        BtnAdd = "BtnAdd",
        Table1 = "Table1",
        Column2 = "Column2",
        DEFECTMASTER_MODELCODE = "DEFECTMASTER_MODELCODE",
        Column3 = "Column3",
        DEFECTCODE = "DEFECTCODE",
        Column4 = "Column4",
        DEFECTDESCRIPTION = "DEFECTDESCRIPTION",
        Column5 = "Column5",
        DEFECTCATEGORY = "DEFECTCATEGORY",
        Column6 = "Column6",
        DEFECTSECTION = "DEFECTSECTION",
        Column12 = "Column12",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get DEFECTMASTER_MODELCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_MODELCODE);
    }

    get DEFECTCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTCODE);
    }

    get DEFECTDESCRIPTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTDESCRIPTION);
    }

    get DEFECTCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTCATEGORY);
    }

    get DEFECTSECTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTSECTION);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}