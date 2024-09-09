import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [DatePipe],
})
export class CompaniesComponent implements OnInit {
  empresas: any[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(
    private companiesService: CompaniesService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'], 10);
      this.currentPage = !isNaN(page) && page > 0 ? page : 1;
    });

    this.companiesService.getCompanies().subscribe((data) => {
      this.empresas = data;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.empresas.length / this.pageSize);
  }

  get paginatedCompanies(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.empresas.slice(start, start + this.pageSize);
  }

  handlePageChange(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }

  get canPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  formatDate(dateString: string): string | null {
    return this.datePipe.transform(dateString, 'dd/MM/yyyy HH:mm');
  }

  editCompany(companyId: number): void {
    this.router.navigate([`/edit/${companyId}`]);
  }

  deleteCompany(companyId: number): void {
    if (confirm('Tem certeza que deseja excluir esta empresa?')) {
      this.companiesService.deleteCompany(companyId).subscribe(() => {
        this.empresas = this.empresas.filter((company) => company.id !== companyId);
      });
    }
  }
}
