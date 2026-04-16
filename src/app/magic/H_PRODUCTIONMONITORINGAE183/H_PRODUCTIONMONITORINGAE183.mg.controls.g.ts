import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    H_PRODUCTIONMONITORINGAE183 = "H_PRODUCTIONMONITORINGAE183",
        Label1 = "Label1",
        Label2 = "Label2",
        v_Date = "v_Date",
        Label4 = "Label4",
        v_ProdLine = "v_ProdLine",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Date(): FormControl {
        return this.fg.controls[MgControlName.v_Date] as FormControl;
    }

    get v_ProdLine(): FormControl {
        return this.fg.controls[MgControlName.v_ProdLine] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}