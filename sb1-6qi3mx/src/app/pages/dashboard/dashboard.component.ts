import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface FoodItem {
  name: string;
  freshness: number;
  expiryDate: Date;
  category: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatButtonModule, MatIconModule],
  template: `
    <div class="container">
      <h1 class="page-header">Food Freshness Dashboard</h1>
      
      <div class="dashboard-grid">
        <mat-card *ngFor="let item of foodItems">
          <mat-card-header>
            <mat-card-title>{{ item.name }}</mat-card-title>
            <mat-card-subtitle>{{ item.category }}</mat-card-subtitle>
          </mat-card-header>
          
          <mat-card-content>
            <p>Freshness Level:</p>
            <mat-progress-bar
              [color]="getFreshnessColor(item.freshness)"
              [mode]="'determinate'"
              [value]="item.freshness">
            </mat-progress-bar>
            
            <p class="expiry-date">
              Expires: {{ item.expiryDate | date }}
            </p>
          </mat-card-content>
          
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>edit</mat-icon> Update
            </button>
            <button mat-button color="warn">
              <mat-icon>delete</mat-icon> Remove
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      padding: 1rem 0;
    }
    .expiry-date {
      margin-top: 1rem;
      color: #666;
    }
    mat-card {
      margin-bottom: 1rem;
    }
  `]
})
export class DashboardComponent {
  foodItems: FoodItem[] = [
    {
      name: 'Apples',
      freshness: 85,
      expiryDate: new Date('2024-02-10'),
      category: 'Fruits'
    },
    {
      name: 'Lettuce',
      freshness: 60,
      expiryDate: new Date('2024-02-05'),
      category: 'Vegetables'
    },
    {
      name: 'Tomatoes',
      freshness: 75,
      expiryDate: new Date('2024-02-07'),
      category: 'Vegetables'
    }
  ];

  getFreshnessColor(freshness: number): string {
    return freshness > 70 ? 'primary' : freshness > 40 ? 'accent' : 'warn';
  }
}