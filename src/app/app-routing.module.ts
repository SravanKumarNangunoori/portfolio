import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  { path: '', component: AboutComponent , data: {animation: 'About'}},
  { path: 'experience', component: ExperienceComponent, data: {animation: 'Experience'} },
  { path: 'skills', component: SkillsComponent, data: {animation: 'Skills'} },
  { path:'projects',component:ProjectsComponent, data: {animation: 'Projects'}},
  { path:'education',component:EducationComponent, data: {animation: 'Education'}},
  {path:'*',component:AboutComponent,data: {animation: 'About'}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
