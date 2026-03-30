import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    List = "List",
        Table1 = "Table1",
        Column9 = "Column9",
        V_EF_TYP = "V_EF_TYP",
        Column10 = "Column10",
        V_FST_NO = "V_FST_NO",
        Column11 = "Column11",
        V_VIN_TYP = "V_VIN_TYP",
        Column12 = "Column12",
        V_F_MARK = "V_F_MARK",
        Column13 = "Column13",
        V_STR_DAT = "V_STR_DAT",
        Column14 = "Column14",
        V_ABO_DAT = "V_ABO_DAT",
        Column15 = "Column15",
        V_GR = "V_GR",
        Column16 = "Column16",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column9',
        'Column10',
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
        'Column16',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_EF_TYP(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_EF_TYP);
    }

    get V_FST_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_FST_NO);
    }

    get V_VIN_TYP(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_VIN_TYP);
    }

    get V_F_MARK(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_F_MARK);
    }

    get V_STR_DAT(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_STR_DAT);
    }

    get V_ABO_DAT(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_ABO_DAT);
    }

    get V_GR(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_GR);
    }

    get PR27_GROUP_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}