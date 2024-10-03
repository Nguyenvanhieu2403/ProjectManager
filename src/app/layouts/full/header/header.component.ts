import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, MaterialModule, MatButtonModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  flags = [
    {icon : '/assets/images/flag/icon-flag-vi.png', name: 'VietNam'},
    {icon : '/assets/images/flag/icon-flag-en.svg', name: 'English'},
    {icon : '/assets/images/flag/icon-flag-es.svg', name: 'Español'},
    {icon : '/assets/images/flag/icon-flag-fr.svg', name: 'Français'},
    {icon : '/assets/images/flag/icon-flag-de.svg', name: 'German'},
  ]

  flag: any = this.flags[0];

  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  constructor() {}

  changeLanguage(flag: any) {
    this.flag = flag;
  }
}
