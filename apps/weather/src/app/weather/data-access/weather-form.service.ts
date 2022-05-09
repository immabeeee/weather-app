import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export class WeatherSearchFormService {
    constructor(
        private formBuilder: FormBuilder,
    ) { }

    public createEmptyForm(): FormGroup {
        return this.formBuilder.group({
            city: this.formBuilder.control(null),
        });
    }

    public fillSearchForm(form: FormGroup, city: string | null): void {
        form.setValue({
            city
        })
    }
}
