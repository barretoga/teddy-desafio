import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies-edit',
  templateUrl: './companies-edit.component.html',
  styleUrls: ['./companies-edit.component.css']
})
export class CompaniesEditComponent implements OnInit {
  companyForm: FormGroup;
  company: any | null = null;
  companyId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private companyService: CompaniesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      collaboratorsCount: ['', [Validators.required, Validators.min(1)]],
      isActive: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyId = id ? Number(id) : null;

    if (this.companyId) {
      this.companyService.getCompanyById(this.companyId).subscribe((company) => {
        this.company = company;
        this.companyForm.patchValue({
          name: company.name,
          companyName: company.companyName,
          collaboratorsCount: company.collaboratorsCount,
          isActive: company.isActive
        });
      });
    }
  }

  onSubmit(): void {
    if (this.companyForm.valid && this.companyId !== null) {
      const companyData = this.companyForm.value;

      this.companyService.updateCompany(this.companyId, companyData).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }

  resetForm(): void {
    if (this.company) {
      this.companyForm.patchValue({
        name: this.company.name,
        companyName: this.company.companyName,
        collaboratorsCount: this.company.collaboratorsCount,
        isActive: this.company.isActive
      });
    } else {
      this.companyForm.reset({
        isActive: true
      });
    }
  }
}
