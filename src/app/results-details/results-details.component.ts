import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-results-details',
  standalone: false,
  templateUrl: './results-details.component.html',
})
export class ResultsDetailsComponent implements OnInit {
  competitionId: string = '';
  hunts: any[] = []; 
  apiUrl = 'http://localhost:443/api/participation/getMyResult';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.competitionId = params.get('id') || '';
      if (this.competitionId) {
        this.fetchHuntDetails();
      }
    });
  }

  fetchHuntDetails(): void {
    const token = localStorage.getItem('tokenHuntersLeage'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any>(this.apiUrl, { headers }).subscribe({
      next: (data) => {
        // Find the competition matching the passed ID
        const competition = data.competitions.find(
          (comp: any) => comp.id === this.competitionId
        );

        // Assign the hunt details if competition exists
        this.hunts = competition ? competition.listHunt : [];
        console.log('Filtered Hunt Details:', this.hunts);
      },
      error: (error) => {
        console.error('Error fetching hunt details:', error);
      },
    });
  }
}
