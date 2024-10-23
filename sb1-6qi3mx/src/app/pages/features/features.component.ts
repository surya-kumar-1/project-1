import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCardModule],
  template: `
    <div class="container">
      <h1 class="page-header">Natural Coating Education</h1>
      
      <mat-accordion>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Beeswax Coating</mat-panel-title>
          </mat-expansion-panel-header>
          <p>Beeswax creates a natural barrier that helps preserve fruits and vegetables by:</p>
          <ul>
            <li>Preventing moisture loss</li>
            <li>Reducing oxygen exposure</li>
            <li>Providing antimicrobial properties</li>
          </ul>
        </mat-expansion-panel>

        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Carnauba Wax</mat-panel-title>
          </mat-expansion-panel-header>
          <p>Derived from palm leaves, carnauba wax is excellent for:</p>
          <ul>
            <li>Creating a glossy protective coating</li>
            <li>Extending shelf life</li>
            <li>Maintaining freshness</li>
          </ul>
        </mat-expansion-panel>

        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Natural Oil Treatments</mat-panel-title>
          </mat-expansion-panel-header>
          <p>Various natural oils can be used to preserve food:</p>
          <ul>
            <li>Coconut oil for its antimicrobial properties</li>
            <li>Olive oil for moisture retention</li>
            <li>Almond oil for nutrient preservation</li>
          </ul>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [`
    mat-accordion {
      margin: 2rem 0;
    }
    mat-expansion-panel {
      margin-bottom: 1rem;
    }
    ul {
      margin: 1rem 0;
      padding-left: 2rem;
    }
  `]
})
export class FeaturesComponent {}