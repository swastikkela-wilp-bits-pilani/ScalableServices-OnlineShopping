import { Component, OnInit } from '@angular/core';
import { TreeNode, MessageService } from 'primeng/api';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-welcome-ui',
  templateUrl: './welcome-ui.component.html',
  styleUrls: ['./welcome-ui.component.css']
})
export class WelcomeUIComponent implements OnInit {
  data: TreeNode[];
  selectedNode: TreeNode;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.data = [{
      label: 'UI (Angular 7 + Prime NG)',
      expanded: true,
      data: ` Application User Interface is built using Angulat 7.x 
      and PrimeNG is used to make UI rich and responsive.`,
      children: [
        {
          label: 'Customer MicroService (Spring-Boot)',
          expanded: true,
          data: `Deployed on Tomcat, Customer module specific microservice is developed using SpringBoot, SpringData, Hibernate and Embedded H2 DataBase.`
        }, {
          label: 'Item MicroService (Spring-Boot)',
          expanded: true,
          data: `Deployed on Jersy, Item module specific microservice is developed using SpringBoot, SpringData, Hibernate and Embedded H2 DataBase.`
        }, {
          label: 'Sales Order MicroService (Spring-Boot)',
          expanded: true,
          data: `Deployed on Undertow, Sales Order module specific microservice is developed using SpringBoot, SpringData, Hibernate and Embedded H2 DataBase.`
        }
      ]
    }];
  }
  onNodeSelect(event) {
    this.messageService.add({severity: 'info', summary: event.node.label , detail: event.node.data, life: 10000});
}
}
