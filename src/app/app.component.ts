import { Component } from '@angular/core';
import {ThreeSceneComponent} from './three-scene/three-scene.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProfessionalExperienceComponent} from './professional-experience/professional-experience.component';
import {ProjectsComponent} from './projects/projects.component';
import {EducationComponent} from './education/education.component';
import {AboutComponent} from './about/about.component';
import { CommonModule } from '@angular/common';
import { DisplayNameComponent } from "./display-name/display-name.component";
import { ContactComponent } from "./contact/contact.component";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  // imports:[ThreeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ThreeSceneComponent,
    NavbarComponent,
    ProfessionalExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    AboutComponent,
    CommonModule,
    DisplayNameComponent,
    ContactComponent,
  ],

  // This makes it a standalone component
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Ashbir Dhiman'); // Set the tab title
  }
  isThreeSceneLoaded = false;

  onThreeSceneLoaded(event: boolean) {
    this.isThreeSceneLoaded = event;
  }
}
