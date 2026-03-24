import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DispatchReleaseBatch_VIEW = "DispatchReleaseBatch_VIEW",
        Table1 = "Table1",
        Column2 = "Column2",
        FRAMENUMBER = "FRAMENUMBER",
        Column3 = "Column3",
        MODELCODE = "MODELCODE",
        Column4 = "Column4",
        MODELNAME = "MODELNAME",
        Column5 = "Column5",
        COLORCODE = "COLORCODE",
        Column6 = "Column6",
        REPAIRINUSERID = "REPAIRINUSERID",
        Column7 = "Column7",
        Edit16 = "Edit16",
        Column8 = "Column8",
        REPAIRINTIME = "REPAIRINTIME",
        Column9 = "Column9",
        b_Print = "b_Print",
        Column10 = "Column10",
        v_Approved = "v_Approved",
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
        'Column8',
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FRAMENUMBER(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAMENUMBER);
    }

    get MODELCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MODELCODE);
    }

    get MODELNAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.MODELNAME);
    }

    get COLORCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.COLORCODE);
    }

    get REPAIRINUSERID(): FormControl {
        return this.getTableChildFormControl(MgControlName.REPAIRINUSERID);
    }

    get Edit16(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit16);
    }

    get REPAIRINTIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.REPAIRINTIME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}