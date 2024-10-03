import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProjectComponent } from './allProject/allProject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from 'primeng/dragdrop';
import { ProjectComponent } from './allProject/project/project.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SpeedDialModule } from 'primeng/speeddial';
import { AddProjectComponent } from './addProject/addProject.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { EditorModule } from 'primeng/editor';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    DragDropModule,
    ProgressBarModule,
    AvatarModule,
    AvatarGroupModule,
    SpeedDialModule,
    RadioButtonModule,
    EditorModule,
  ],
  declarations: [
    AllProjectComponent,
    ProjectComponent,
    AddProjectComponent,
  ]
})
export class ProjectManagerModule { }
