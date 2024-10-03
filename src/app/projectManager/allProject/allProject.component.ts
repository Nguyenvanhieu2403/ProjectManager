import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-allProject',
  templateUrl: './allProject.component.html',
  styleUrls: ['./allProject.component.css']
})
export class AllProjectComponent implements OnInit {

  @Output() project: any;

  newProject: any[] = []; 
  runningProject: any[] = []; 
  onHoldProject: any[] = [];
  finishedProject: any[] = [];
  draggedProject: any; 

  constructor() { }

  ngOnInit() {
    this.newProject = [];
    this.runningProject = [];
    this.onHoldProject = [];
    this.finishedProject = [];
    this.draggedProject = null;
    this.initializeProducts();
  }

  initializeProducts() {
    this.newProject = [
      {
        id:'1', 
        name: 'Shopping Application',
        task: 22,
        type: [
          {
            typeId: 1,
            typeName: "Android"
          }
        ],
        description: "There are many variations of passages of Lorem Ipsum available, but suffered alteration in some form, by injected humour.",
        createDate: "Aug 25, 2021",
        leadTeam: "John Doe",
        priority: 2,
        deadLine: "Aug 25, 2021",
        comments: 14,
        bug: 10,
        teams: [
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png"},
        ],
        process: 85,
      },
      {
        id:'2', 
        name: 'Shopping Application',
        task: 22,
        type: [
          {
            typeId: 2,
            typeName: "Website"
          }
        ],
        description: "There are many variations of passages of Lorem Ipsum available, but suffered alteration in some form, by injected humour.",
        createDate: "Aug 25, 2021",
        leadTeam: "John Doe",
        priority: 3,
        deadLine: "Aug 25, 2021",
        comments: 14,
        bug: 10,
        teams: [
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png"},
        ],
        process: 90,
      },
      {
        id:'3', 
        name: 'Shopping Application',
        task: 22,
        type: [
          {
            typeId: 3,
            typeName: "Testing"
          }
        ],
        description: "There are many variations of passages of Lorem Ipsum available, but suffered alteration in some form, by injected humour.",
        createDate: "Aug 25, 2021",
        leadTeam: "John Doe",
        priority: 2,
        deadLine: "Aug 25, 2021",
        comments: 14,
        bug: 10,
        teams: [
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png"},
        ],
        process: 40,
      },
      {
        id:'4', 
        name: 'Shopping Application',
        task: 22,
        type: [
          {
            typeId: 4,
            typeName: "Iphone"
          }
        ],
        description: "There are many variations of passages of Lorem Ipsum available, but suffered alteration in some form, by injected humour.",
        createDate: "Aug 25, 2021",
        leadTeam: "John Doe",
        priority: 1,
        deadLine: "Aug 25, 2021",
        comments: 14,
        bug: 10,
        teams: [
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png"},
        ],
        process: 55,
      },
      {
        id:'5', 
        name: 'Shopping Application',
        task: 22,
        type: [
          {
            typeId: 3,
            typeName: "Testing"
          }
        ],
        description: "There are many variations of passages of Lorem Ipsum available, but suffered alteration in some form, by injected humour.",
        createDate: "Aug 25, 2021",
        leadTeam: "John Doe",
        priority: 1,
        deadLine: "Aug 25, 2021",
        comments: 14,
        bug: 10,
        teams: [
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"},
          {avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png"},
        ],
        process: 50,
      },
    ]
  }

  dragStart(project: any) {
    this.draggedProject = project; 
  }

  dragEnd() {
    this.draggedProject = null; 
  }

  drop(column: string, event: any) {
    event.preventDefault();
    
    this.removeProjectFromCurrentList(this.draggedProject);
    switch (column) {
      case 'new':
        this.newProject.push(this.draggedProject);
        break;
      case 'running':
        this.runningProject.push(this.draggedProject);
        break;
      case 'onHold':
        this.onHoldProject.push(this.draggedProject);
        break;
      case 'finished':
        this.finishedProject.push(this.draggedProject);
        break;
    }
    this.draggedProject = null;
  }

  private removeProjectFromCurrentList(project: any) {
    this.newProject = this.newProject.filter(p => p !== project);
    this.runningProject = this.runningProject.filter(p => p !== project);
    this.onHoldProject = this.onHoldProject.filter(p => p !== project);
    this.finishedProject = this.finishedProject.filter(p => p !== project);
  }
}
