import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  template: `
    <div class="container">
      <h1 class="page-header">Set Freshness Alerts</h1>

      <mat-card class="alert-form">
        <mat-card-header>
          <mat-card-title>Add New Alert</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form #alertForm="ngForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="fill">
              <mat-label>Food Item</mat-label>
              <input matInput [(ngModel)]="newAlert.itemName" name="itemName" required>
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Category</mat-label>
              <mat-select [(ngModel)]="newAlert.category" name="category" required>
                <mat-option value="fruits">Fruits</mat-option>
                <mat-option value="vegetables">Vegetables</mat-option>
                <mat-option value="dairy">Dairy</mat-option>
                <mat-option value="meat">Meat</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Expiration Date</mat-label>
              <input matInput [matDatepicker]="picker" [(ngModel)]="newAlert.expiryDate" name="expiryDate" required>
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="!alertForm.form.valid">
              Set Alert
            </button>
          </form>
        </mat-card-content>
      </mat-card>

      <h2 class="section-header">Active Alerts</h2>
      <div class="alerts-grid">
        <mat-card *ngFor="let alert of activeAlerts">
          <mat-card-header>
            <mat-card-title>{{ alert.itemName }}</mat-card-title>
            <mat-card-subtitle>{{ alert.category }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Expires: {{ alert.expiryDate | date }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="warn" (click)="removeAlert(alert)">Remove Alert</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .alert-form {
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .alerts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .section-header {
      margin: 2rem 0 1rem;
    }
  `]
})
export class AlertsComponent {
  newAlert = {
    itemName: '',
    category: '',
    expiryDate: null as Date | null
  };

  activeAlerts = [
    {
      itemName: 'Bananas',
      category: 'fruits',
      expiryDate: new Date('2024-02-05')
    },
    {
      itemName: 'Milk',
      category: 'dairy',
      expiryDate: new Date('2024-02-03')
    }
  ];

  constructor(private snackBar: MatSnackBar) {}

  onSubmit() {
    if (this.newAlert.expiryDate) {
      this.activeAlerts.push({...this.newAlert as any});
      this.snackBar.open('Alert set successfully!', 'Close', {
        duration: 3000
      });
      this.newAlert = {
        itemName: '',
        category: '',
        expiryDate: null
      };
    }
  }

  removeAlert(alert: any) {
    this.activeAlerts = this.activeAlerts.filter(a => a !== alert);
    this.snackBar.open('Alert removed', 'Close', {
      duration: 3000
    });
  }
}