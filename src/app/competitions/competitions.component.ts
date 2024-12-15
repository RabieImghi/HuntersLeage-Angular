import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-competitions',
  standalone: false,
  
  templateUrl: './competitions.component.html'
})
export class CompetitionsComponent implements OnInit  {
  competitions: any[] = []; 
  apiUrl = 'http://localhost:443/api/competition/details';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCompetitions();
  }
  getCompetitions(): void {
    const token = localStorage.getItem('tokenHuntersLeage');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });  
    this.http.get<{ content: any[] }>(this.apiUrl, { headers }).subscribe({
      next: (data) => {
        this.competitions = data.content || [];
        console.log('Competitions fetched successfully:', this.competitions);
      },
      error: (error) => {
        console.error('Error fetching competitions:', error);
      },
    });
  }
  

}
