import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { DatalistService } from './datalist.service';
import { SkuUpdateComponent } from './components/sku-update/sku-update.component';
import { SkuDescriptionUpdateComponent } from './components/sku-description-update/sku-description-update.component';
import { CurrencyUpdateComponent } from './components/currency-update/currency-update.component';
import { CountryUpdateComponent } from './components/country-update/country-update.component';
import { CommodityUpdateComponent } from './components/commodity-update/commodity-update.component';
import { LabelTypeUpdateComponent } from './components/label-type-update/label-type-update.component';
import { SourceUpdateComponent } from './components/source-update/source-update.component';
import { DestinationUpdateComponent } from './components/destination-update/destination-update.component';
import { ProductFormUpdateComponent } from './components/product-form-update/product-form-update.component';
import { ProductFragranceComponent } from './components/product-fragrance/product-fragrance.component';
import { OrderSizeComponent } from './components/order-size/order-size.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { DeliveryAgentComponent } from './components/delivery-agent/delivery-agent.component';
import { DeliveryMethodComponent } from './components/delivery-method/delivery-method.component';
import { RejectedReasonCodeComponent } from './components/rejected-reason-code/rejected-reason-code.component';
import { RejectedReasonDescriptionComponent } from './components/rejected-reason-description/rejected-reason-description.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        FormsModule,

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SkuUpdateComponent,
        SkuDescriptionUpdateComponent,
        CurrencyUpdateComponent,
        CountryUpdateComponent,
        CommodityUpdateComponent,
        LabelTypeUpdateComponent,
        SourceUpdateComponent,
        DestinationUpdateComponent,
        ProductFormUpdateComponent,
        ProductFragranceComponent,
        OrderSizeComponent,
        OrderStatusComponent,
        DeliveryAgentComponent,
        DeliveryMethodComponent,
        RejectedReasonCodeComponent,
        RejectedReasonDescriptionComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        DatalistService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: JwtInterceptor,
        //     multi: true
        // },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
