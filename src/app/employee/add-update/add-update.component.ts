import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss'],
})
export class AddUpdateComponent implements OnInit {
  employee?: Employee;
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddUpdateComponent>,
    private fb: FormBuilder
  ) {
    // forma 1
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   position: new FormControl('', [Validators.required]),
    //   salary: new FormControl('', [Validators.required]),
    //   street: new FormControl('', [Validators.required]),
    //   number: new FormControl('', [Validators.required]),
    //   postalCode: new FormControl('', [Validators.required]),
    // });

    // forma 2
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {}

  save(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.onClose();
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
}
