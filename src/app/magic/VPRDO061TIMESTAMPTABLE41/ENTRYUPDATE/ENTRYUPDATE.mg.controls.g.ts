import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENTRYUPDATE = "ENTRYUPDATE",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label4 = "Label4",
        Label5 = "Label5",
        Table7 = "Table7",
        Column8 = "Column8",
        W64_OPE_TYPE = "W64_OPE_TYPE",
        Column9 = "Column9",
        W64_OPE_START_TIME = "W64_OPE_START_TIME",
        W64_OPE_START_TYPE = "W64_OPE_START_TYPE",
        Column10 = "Column10",
        VPRDO064_WORK_W64_OPE_END_TIME = "VPRDO064_WORK_W64_OPE_END_TIME",
        VPRDO064_WORK_W64_OPE_END_TYPE = "VPRDO064_WORK_W64_OPE_END_TYPE",
        Label6 = "Label6",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get W64_OPE_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W64_OPE_TYPE);
    }

    get W64_OPE_START_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.W64_OPE_START_TIME);
    }

    get W64_OPE_START_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W64_OPE_START_TYPE);
    }

    get VPRDO064_WORK_W64_OPE_END_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO064_WORK_W64_OPE_END_TIME);
    }

    get VPRDO064_WORK_W64_OPE_END_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO064_WORK_W64_OPE_END_TYPE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}