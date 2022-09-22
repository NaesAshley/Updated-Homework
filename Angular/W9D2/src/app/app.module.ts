import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebsiteVisitorsComponent } from './website-visitors/website-visitors.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WebsiteVisitorsComponent,
    ReviewsComponent,
    AverageRatingComponent,
    SentimentAnalysisComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
