import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructrualDirectiveComponent } from './components/directives/structrual-directive/structrual-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { GetApiComponent } from './components/get-api/get-api.component';

export const routes: Routes = [

    {path: "appDataBinding",component :DataBindingComponent},
    {path: "structrualDirective",component :StructrualDirectiveComponent},
    {path: "attributeDirective",component :AttributeDirectiveComponent},
    {path: "getApiCall",component :GetApiComponent}

];
