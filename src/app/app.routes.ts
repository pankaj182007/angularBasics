import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructrualDirectiveComponent } from './components/directives/structrual-directive/structrual-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [

    {path: "appDataBinding",component :DataBindingComponent},
    {path: "structrualDirective",component :StructrualDirectiveComponent},
    {path: "attributeDirective",component :AttributeDirectiveComponent},
    {path: "getApiCall",component :GetApiComponent},
    {path: "pipe",component :PipeComponent},
    {path: "templateForm",component:TemplateFormsComponent},
    {path: "reactiveForm",component:ReactiveFormComponent},
    {path: "getApiCall",component:GetApiComponent}


];
