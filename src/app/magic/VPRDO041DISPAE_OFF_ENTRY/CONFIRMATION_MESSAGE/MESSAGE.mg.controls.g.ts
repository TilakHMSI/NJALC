import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MESSAGE = "MESSAGE",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label6 = "Label6",
        Label7 = "Label7",
        V_VEngine = "V_VEngine",
        Label8 = "Label8",
        Label9 = "Label9",
        PAT_MTO_V = "PAT_MTO_V",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VEngine(): FormControl {
        return this.fg.controls[MgControlName.V_VEngine] as FormControl;
    }

    get PAT_MTO_V(): FormControl {
        return this.fg.controls[MgControlName.PAT_MTO_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}