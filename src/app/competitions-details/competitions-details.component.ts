import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-competitions-details',
  standalone: false,
  templateUrl: './competitions-details.component.html',
})
export class CompetitionsDetailsComponent implements OnInit {
  competitionId: string = '';
  competitionDetails: any; 
  apiUrl = 'http://localhost:443/api/competition/details'; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.competitionId = params.get('id') || '';
      if (this.competitionId) {
        this.getCompetitionDetails(this.competitionId);
      }
    });
  }

  getCompetitionDetails(id: string): void {
    const token = localStorage.getItem('tokenHuntersLeage'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any>(`${this.apiUrl}/${id}`, { headers }).subscribe({
      next: (data) => {
        this.competitionDetails = data[0];
        console.log('Competition Details:', this.competitionDetails);
      },
      error: (error) => {
        console.error('Error fetching competition details:', error);
      },
    });
  }
}
