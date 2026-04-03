import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DispatchUnlockWithRepairIn = "DispatchUnlockWithRepairIn",
        Label1 = "Label1",
        Label4 = "Label4",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label5 = "Label5",
        v_FilterOption = "v_FilterOption",
        Edit6 = "Edit6",
        b_ApplyFilter = "b_ApplyFilter",
        Label7 = "Label7",
        Label8 = "Label8",
        v_FilterEndDate = "v_FilterEndDate",
        v_FilterEndFromDate_0001 = "v_FilterEndFromDate_0001",
        DispatchReleaseBatch_VIEW = "DispatchReleaseBatch_VIEW",
        Group14 = "Group14",
        Label15 = "Label15",
        v_BatchStartDate_0001 = "v_BatchStartDate_0001",
        v_BatchStartTime_0001 = "v_BatchStartTime_0001",
        Label18 = "Label18",
        v_BatchEndDate_0001 = "v_BatchEndDate_0001",
        v_BatchEndTime_0001 = "v_BatchEndTime_0001",
        SaveBatch = "SaveBatch",
        btnexit="btnexit"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get v_FilterOption(): FormControl {
        return this.fg.controls[MgControlName.v_FilterOption] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get v_FilterEndDate(): FormControl {
        return this.fg.controls[MgControlName.v_FilterEndDate] as FormControl;
    }

    get v_FilterEndFromDate_0001(): FormControl {
        return this.fg.controls[MgControlName.v_FilterEndFromDate_0001] as FormControl;
    }

    get v_BatchStartDate_0001(): FormControl {
        return this.fg.controls[MgControlName.v_BatchStartDate_0001] as FormControl;
    }

    get v_BatchStartTime_0001(): FormControl {
        return this.fg.controls[MgControlName.v_BatchStartTime_0001] as FormControl;
    }

    get v_BatchEndDate_0001(): FormControl {
        return this.fg.controls[MgControlName.v_BatchEndDate_0001] as FormControl;
    }

    get v_BatchEndTime_0001(): FormControl {
        return this.fg.controls[MgControlName.v_BatchEndTime_0001] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}