import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/external-companies`);
  }

  getCompanyById(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/external-companies/${companyId}`);
  }

  deleteCompany(companyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/external-companies/${companyId}`);
  }

  updateCompany(companyId: number, companyData: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/external-companies/${companyId}`, companyData);
  }

  createCompany(companyData: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/external-companies`, companyData);
  }
}
