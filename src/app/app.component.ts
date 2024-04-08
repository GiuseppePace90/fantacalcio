import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'appFantacalcio';
  message: string = "";

  constructor(private apiService: ApiService) { 

  };

  ngOnInit() {
    this.apiService.getMessage().subscribe({
      next: (data: any) => this.message = data.text,
      error: (e) => console.log("Si è verificato un errore: ", e)
    });    
  };
}
