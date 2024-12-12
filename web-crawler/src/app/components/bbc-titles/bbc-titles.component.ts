import { Component, OnInit } from '@angular/core';
import { BbcScraperService } from '../../services/bbc-scraper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bbc-titles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bbc-titles.component.html',
  styleUrls: ['./bbc-titles.component.css'],
})
export class BbcTitlesComponent implements OnInit {
  titlesAndDescriptions: { title: string; description: string }[] = [];

  constructor(private scraperService: BbcScraperService) {}

  ngOnInit(): void {
    this.scraperService.fetchTitlesAndDescriptions().subscribe(
      (data) => {
        // Remove duplicates by creating a Set of unique titles
        const uniqueTitles = new Set();
        this.titlesAndDescriptions = data.filter((item) => {
          if (uniqueTitles.has(item.title)) {
            return false;
          }
          uniqueTitles.add(item.title);
          return true;
        });
        console.log(this.titlesAndDescriptions); // For debugging
      },
      (error) => console.error('Error fetching data:', error)
    );
  }
}
