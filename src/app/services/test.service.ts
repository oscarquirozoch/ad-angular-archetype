import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

type User = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string;
  password: string;
}

type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: User[]
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = '';
  private httpClient = inject(HttpClient);

  constructor(
  ) { }

  getSimpleValue(text: string): string {
    return text.toUpperCase();
  }

  getTests(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl);
  }

  getUsersProm(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.baseUrl)
    );
  }
}
