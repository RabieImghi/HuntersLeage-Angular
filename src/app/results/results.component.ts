import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {
  results: any[] = []; 
  apiUrl = 'http://localhost:443/api/participation/getMyResult';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    const token = localStorage.getItem('tokenHuntersLeage'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<any>(this.apiUrl, { headers }).subscribe({
      next: (data) => {
        this.results = data.competitions || [];
        console.log('Results fetched successfully:', this.results);
      },
      error: (error) => {
        console.error('Error fetching results:', error);
      }
    });
  }
}
