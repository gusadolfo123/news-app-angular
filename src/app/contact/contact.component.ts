import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {}

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
}
