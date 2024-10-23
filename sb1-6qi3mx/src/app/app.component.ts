import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span>FreshGuard</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/dashboard">Dashboard</button>
      <button mat-button routerLink="/features">Features</button>
      <button mat-button routerLink="/alerts">Alerts</button>
    </mat-toolbar>

    <router-outlet></router-outlet>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@freshguard.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#"><mat-icon>facebook</mat-icon></a>
              <a href="#"><mat-icon>twitter</mat-icon></a>
              <a href="#"><mat-icon>instagram</mat-icon></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 FreshGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }
    .social-links {
      display: flex;
      gap: 1rem;
    }
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  `]
})
export class AppComponent {
  title = 'FreshGuard';
}