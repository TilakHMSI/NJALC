import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    USENOTICEGUIDE = "USENOTICEGUIDE",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        PRD090USE_NOTICE_090_USE = "PRD090USE_NOTICE_090_USE",
        Column4 = "Column4",
        PRD090USE_NOTICE_090_NOTICE = "PRD090USE_NOTICE_090_NOTICE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD090USE_NOTICE_090_USE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD090USE_NOTICE_090_USE);
    }

    get PRD090USE_NOTICE_090_NOTICE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD090USE_NOTICE_090_NOTICE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}