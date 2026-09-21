import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    OdometerReadingEntry = "OdometerReadingEntry",
        Label1 = "Label1",
        btn_Close = "btn_Close",
        Label5 = "Label5",
        vFRAMENO = "vFRAMENO",
        Label2 = "Label2",
        Label3 = "Label3",
        Label4 = "Label4",
        Label6 = "Label6",
        Label7 = "Label7",
        vFRAME_SF = "vFRAME_SF",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vFRAMENO(): FormControl {
        return this.fg.controls[MgControlName.vFRAMENO] as FormControl;
    }

    get vFRAME_SF(): FormControl {
        return this.fg.controls[MgControlName.vFRAME_SF] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}