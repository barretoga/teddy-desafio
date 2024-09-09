import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { DatePipe } from '@angular/common'; // Importar DatePipe

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [DatePipe], // Adicionar DatePipe aos providers
})
export class CompaniesComponent implements OnInit {
  empresas: any[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(
    private companiesService: CompaniesService,
    private datePipe: DatePipe
  ) {} // Injetar DatePipe

  ngOnInit(): void {
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
    this.currentPage = page;
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
}
