import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
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

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'sku', component: SkuUpdateComponent, canActivate: [AuthGuard] },
    { path: 'skuDesc', component: SkuDescriptionUpdateComponent, canActivate: [AuthGuard] },
    { path: 'currency', component: CurrencyUpdateComponent, canActivate: [AuthGuard] },
    { path: 'country', component: CountryUpdateComponent, canActivate: [AuthGuard] },
    { path: 'commodity', component: CommodityUpdateComponent, canActivate: [AuthGuard] },
    { path: 'label', component: LabelTypeUpdateComponent, canActivate: [AuthGuard] },
    { path: 'source', component: SourceUpdateComponent, canActivate: [AuthGuard] },
    { path: 'destination', component: DestinationUpdateComponent, canActivate: [AuthGuard] },
    { path: 'productForm', component: ProductFormUpdateComponent, canActivate: [AuthGuard] },
    { path: 'productFragrance', component: ProductFragranceComponent, canActivate: [AuthGuard] },
    { path: 'orderSize', component: OrderSizeComponent, canActivate: [AuthGuard] },
    { path: 'orderStatus', component: OrderStatusComponent, canActivate: [AuthGuard] },
    { path: 'deliveryAgent', component: DeliveryAgentComponent, canActivate: [AuthGuard] },
    { path: 'deliveryMethod', component: DeliveryMethodComponent, canActivate: [AuthGuard] },
    { path: 'rejectCode', component: RejectedReasonCodeComponent, canActivate: [AuthGuard] },
    { path: 'rejectDesc', component: RejectedReasonDescriptionComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
