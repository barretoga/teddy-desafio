import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies-register',
  templateUrl: './companies-register.component.html',
  styleUrls: ['./companies-register.component.css']
})
export class CompaniesRegisterComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private companiesService: CompaniesService,

  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      collaboratorsCount: [null, [Validators.required, Validators.min(1)]],
      isActive: [true, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.companyForm.valid) {
      const newCompany = this.companyForm.value;

      this.companiesService.createCompany(newCompany).subscribe({
        next: (response) => {
          const baseUrl = window.location.origin;
          window.location.href = `${baseUrl}/external-companies/list`;
        },
        error: (error) => {
          console.error('Erro ao criar empresa:', error);
        }
      });
    }
  }

  resetForm() {
    this.companyForm.reset({
      name: '',
      companyName: '',
      collaboratorsCount: null,
      isActive: true,
    });
  }
}
