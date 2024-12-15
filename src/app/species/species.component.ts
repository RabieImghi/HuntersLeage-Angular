import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-species',
  standalone: false,
  templateUrl: './species.component.html',
})
export class SpeciesComponent implements OnInit {
  speciesList: any[] = []; // Array to store species data
  apiUrl = 'http://localhost:443/api/species/list'; // API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSpeciesList();
  }

  getSpeciesList(): void {
    const token = localStorage.getItem('tokenHuntersLeage'); // Fetch token if necessary
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any>(this.apiUrl, { headers }).subscribe({
      next: (response) => {
        this.speciesList = response.content; // Assuming 'content' contains the species list
        console.log('Species List Fetched:', this.speciesList);
      },
      error: (error) => {
        console.error('Error fetching species list:', error);
      },
    });
  }
}
