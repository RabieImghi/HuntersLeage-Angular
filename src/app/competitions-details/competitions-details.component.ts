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
  participationUrl = 'http://localhost:443/api/participation/create';


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


  registerForCompetition(): void {
    const token = localStorage.getItem('tokenHuntersLeage');
    const body = {
      competitionId: this.competitionDetails.id,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    this.http.post(this.participationUrl, body, { headers }).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('You have successfully registered for the competition!');
      },
      error: (error) => {
        console.error('Error during registration:', error);
        alert('Failed to register. Please try again later.');
      },
    });
  }
}
