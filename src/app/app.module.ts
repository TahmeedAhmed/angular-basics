import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestParentComponent } from './Section2TheBasics/test-parent/test-parent.component';
import { TestChild1Component } from './Section2TheBasics/test-child1/test-child1.component';
import { TestChild2Component } from './Section2TheBasics/test-child2/test-child2.component';
import { InputTestComponent } from './Section2TheBasics/input-test/input-test.component';
import { Ass2Component } from './Section2TheBasics/Assignments/ass2/ass2.component';
import { NgifComponent } from './Section2TheBasics/ngif/ngif.component';
import { NgStyleComponent } from './Section2TheBasics/ng-style/ng-style.component';
import { Ass3Component } from './Section2TheBasics/Assignments/ass3/ass3.component';
import { NgForComponent } from './Section2TheBasics/ng-for/ng-for.component';
import { StudentComponent } from './Section2TheBasics/Models/student/student.component';
import { InputTest2Component } from './Section2TheBasics/input-test2/input-test2.component';
import { InputTest3Component } from './Section2TheBasics/input-test3/input-test3.component';
import { CustomPropertyBindingComponent } from './Section5Components&DataBinding/custom-property-binding/custom-property-binding.component';
import { Section5MainComponent } from './Section5Components&DataBinding/section5-main/section5-main.component';
import { CustomEventBindingComponent } from './Section5Components&DataBinding/custom-event-binding/custom-event-binding.component';
import { CustomEventBindingWithDataComponent } from './Section5Components&DataBinding/custom-event-binding-with-data/custom-event-binding-with-data.component';
import { LocalReferenceInTemplatesComponent } from './Section5Components&DataBinding/AccessingElements/local-reference-in-templates/local-reference-in-templates.component';
import { ViewChildComponent } from './Section5Components&DataBinding/AccessingElements/view-child/view-child.component';
import { NgContentComponent } from './Section5Components&DataBinding/ng-content/ng-content.component';
import { ContentChildComponent } from './Section5Components&DataBinding/AccessingElements/content-child/content-child.component';
import { Ass4Component } from './Section5Components&DataBinding/Assignments/ass4/ass4.component';
import { GameControlComponent } from './Section5Components&DataBinding/Assignments/ass4/game-control/game-control.component';
import { OddComponent } from './Section5Components&DataBinding/Assignments/ass4/odd/odd.component';
import { EvenComponent } from './Section5Components&DataBinding/Assignments/ass4/even/even.component';
import { Section7MainComponent } from './Section7Directives/section7-main/section7-main.component';
import { BasicHighlightDirective } from './Section7Directives/Directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './Section7Directives/Directives/better-highlight/better-highlight.directive';
import { BetterHighlightWithHostListenerDirective } from './Section7Directives/Directives/better-highlight-with-host-listener/better-highlight-with-host-listener.directive';
import { HostBindingDirective } from './Section7Directives/Directives/host-binding/host-binding.directive';
import { PropertyBindingDirectiveDirective } from './Section7Directives/Directives/property-binding-directive/property-binding-directive.directive';
import { NgSwitchComponent } from './Section2TheBasics/ng-switch/ng-switch.component';
import { Section9MainComponent } from './Section9Services&DependencyInjection/section9-main/section9-main.component';
import { UsingServiceExampleComponent } from './Section9Services&DependencyInjection/Services/using-service-example/using-service-example.component';
import { Ass5MainComponent } from './Section9Services&DependencyInjection/Assignments/ass5/ass5-main/ass5-main.component';
import { ActiveUsersComponent } from './Section9Services&DependencyInjection/Assignments/ass5/active-users/active-users.component';
import { InactiveUsersComponent } from './Section9Services&DependencyInjection/Assignments/ass5/inactive-users/inactive-users.component'
import { CounterService } from './Section9Services&DependencyInjection/Assignments/ass5/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    TestChild1Component,
    TestChild2Component,
    InputTestComponent,
    Ass2Component,
    NgifComponent,
    NgStyleComponent,
    Ass3Component,
    NgForComponent,
    StudentComponent,
    InputTest2Component,
    InputTest3Component,
    CustomPropertyBindingComponent,
    Section5MainComponent,
    CustomEventBindingComponent,
    CustomEventBindingWithDataComponent,
    LocalReferenceInTemplatesComponent,
    ViewChildComponent,
    NgContentComponent,
    ContentChildComponent,
    Ass4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Section7MainComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlightWithHostListenerDirective,
    HostBindingDirective,
    PropertyBindingDirectiveDirective,
    NgSwitchComponent,
    Section9MainComponent,
    UsingServiceExampleComponent,
    Ass5MainComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
