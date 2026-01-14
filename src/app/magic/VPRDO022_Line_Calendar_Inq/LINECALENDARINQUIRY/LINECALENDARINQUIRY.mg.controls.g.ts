import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LINECALENDARINQUIRY = "LINECALENDARINQUIRY",
        Table1 = "Table1",
        Column2 = "Column2",
        PRD010CALENDAR_TABLE_SA_DATE = "PRD010CALENDAR_TABLE_SA_DATE",
        Column3 = "Column3",
        SA_DAY_OF_THE_WEEK = "SA_DAY_OF_THE_WEEK",
        Column4 = "Column4",
        SA_OPERAITION_TYPE = "SA_OPERAITION_TYPE",
        Column5 = "Column5",
        SA_WEEK_NO = "SA_WEEK_NO",
        Column6 = "Column6",
        SA_PRODINDCATE = "SA_PRODINDCATE",
        SA_PRODINDDATE = "SA_PRODINDDATE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD010CALENDAR_TABLE_SA_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD010CALENDAR_TABLE_SA_DATE);
    }

    get SA_DAY_OF_THE_WEEK(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_DAY_OF_THE_WEEK);
    }

    get SA_OPERAITION_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_OPERAITION_TYPE);
    }

    get SA_WEEK_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_WEEK_NO);
    }

    get SA_PRODINDCATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_PRODINDCATE);
    }

    get SA_PRODINDDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_PRODINDDATE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}