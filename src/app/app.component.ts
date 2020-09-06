import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html'
})
export class AppComponent {
  title = 'portfolio';

  //experience latest
  recentExperienceHighlights1:string="Involved in various phases of Software Development Life Cycle (SDLC), including requirement gathering, modelling, analysis, prototyping, developing and testing."
  recentExperienceHighlights2:string="Improved the performance of SPA by ensuring that the components are highly modularized and time complexity of sorting algorithms is kept minimal.";
  recentExperienceHighlights3:string="Developed innovative animation/transition of the view components to facilitate seamless user experience.";
  priorExperienceHighlights1:string ="Developing the user interface strategy according to the business requirements. Performing client-side validations using JavaScript.";
  priorExperienceHighlights3:string=" Developed critical components of the application including Spring forms, Spring controllers, JSP views, business logic and data logic components which included Hibernate Entities, Spring-Hibernate DAO and Spring models by following MVC architecture.";
  priorExperienceHighlights2:string = "Implemented lazy loading in AngularJS and improved page loading time in the application by 30 seconds.";
  fresherExperienceHighlights1:string="Worked with senior developers to manage large, complex design projects for corporate clients.";
  fresherExperienceHighlights2:string="Root cause analysis of critical bugs in application and fixing them";
  fresherExperienceHighlights3:string="Undergone professional training on Core Java, Advanced Java, SQL and PLSQL at Infosys Mysore, India. Learnt JDBC/Prepared Statement and Hibernate ORM/HQL for performing CRUD operations, caching operations to database.";
  fresherExperienceHighlights4:string="Developed an application in which any user could login and order his/her product and this order would be saved and could be tracked for each user.";
}

