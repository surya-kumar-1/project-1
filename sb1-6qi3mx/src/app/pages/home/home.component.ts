import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
  template: `
    <section class="hero-section">
      <div class="container">
        <h1>Welcome to FreshGuard</h1>
        <p class="hero-text">Keep your food fresh longer with smart tracking and natural preservation methods</p>
        <button mat-raised-button color="accent" routerLink="/dashboard">Get Started</button>
      </div>
    </section>

    <section class="features-section section">
      <div class="container">
        <h2>Why Choose FreshGuard?</h2>
        <div class="features-grid">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Smart Tracking</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Monitor the freshness of your produce in real-time
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-card-title>Natural Solutions</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Learn about natural preservation techniques
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-card-title>Smart Alerts</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Get notified before your food goes bad
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      text-align: center;
      padding: 6rem 0;
    }
    .hero-text {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    mat-card {
      height: 100%;
    }
  `]
})
export class HomeComponent {}