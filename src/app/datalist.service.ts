  import { Injectable } from '@angular/core';
  import { Http, Response, Headers, RequestOptions} from '@angular/http';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/throw';

  @Injectable()
  export class DatalistService {

    public jwtToken: string;

    constructor(private http: Http) {
      // const theUser: any = JSON.parse(localStorage.getItem('currentUser'));
      // if (theUser) {
      //   this.jwtToken = theUser.token;
      // }
    }

    private handleError(error: Response) {
      console.error(error);
      return  Observable.throw(error.json().error || 'Server error');
    }

    getSku() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getSku`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getSkuDescription() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getSkuDescription`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getCurrency() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getCurrency`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getCountry() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getCountry`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getCommodity() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getCommodity`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getLabelType() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getLabelType`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getSource() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getSource`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getDestination() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getDestination`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getOrderSize() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getOrderSize`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getOrderStatus() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getOrderStatus`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getDeliveryAgent() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getDeliveryAgent`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getDeliveryMethod() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getDeliveryMethod`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getRejectedReasonCode() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getRejectedReasonCode`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getRejectedReasonDesc() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getRejectedReasonDesc`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getProductForm() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getProductForm`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    getProductFragrance() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.get(`http://localhost:5000/api/getProductFragrance`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }

    // ADDS TO ARRAY

    addSku(oSku) {
      console.log(oSku)
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addSku`, JSON.stringify(oSku), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addSkuDescription(oSkuDesc) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addSkuDescription`, JSON.stringify(oSkuDesc), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addCurrency(oCurrency) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addCurrency`, JSON.stringify(oCurrency), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addCountry(oCountry) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addCountry`, JSON.stringify(oCountry), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }

    addCommodity(oCommodity) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addCommodity`, JSON.stringify(oCommodity), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addLabelType(oLabel) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addLabelType`, JSON.stringify(oLabel), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addSource(oSource) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addSource`, JSON.stringify(oSource), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addDestination(oDestination) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addDestination`, JSON.stringify(oDestination), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addProductFragrance(oProdFrag) {
      console.log(oProdFrag)
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addProductFragrance`, JSON.stringify(oProdFrag), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addProductForm(oProdForm) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addProductForm`, JSON.stringify(oProdForm), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addOrderSize(oSize) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addOrderSize`, JSON.stringify(oSize), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addOrderStatus(oStatus) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addOrderStatus`, JSON.stringify(oStatus), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addDeliveryAgent(oDeliveryAgent) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addDeliveryAgent`, JSON.stringify(oDeliveryAgent), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addDeliveryMethod(oDeliveryMethod) {
      console.log("this is name= " + oDeliveryMethod.name)
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addDeliveryMethod`, JSON.stringify(oDeliveryMethod), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addRejectedReasonCode(oRejectCode) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addRejectedReasonCode`, JSON.stringify(oRejectCode), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }
    addRejectedReasonDesc(oRejectedDesc) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization', `${this.jwtToken}`);
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/addRejectedReasonDesc`, JSON.stringify(oRejectedDesc), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }

    // Removes datalist items

    removeSku(sku) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/removeSku`, JSON.stringify({"sku": sku}),  options)
        .map((response: Response) => response.json())
        .catch(this.handleError)
  }
    removeSkuDesc(skuDesc) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/removeSkuDesc`, JSON.stringify({"skuDesc": skuDesc}),  options)
        .map((response: Response) => response.json())
        .catch(this.handleError)
  }
    removeCurrency(currency) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:5000/api/removeCurrency`, JSON.stringify({"currency": currency}),  options)
        .map((response: Response) => response.json())
        .catch(this.handleError)
  }
    removeCountry(country, country_code) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
  
      return this.http.post(`http://localhost:5000/api/removeCountry`, JSON.stringify({"country": country, "country_code": country_code}),  options)
        .map((response: Response) => response.json())
        .catch(this.handleError)
  }
  removeCommodity(commodity) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeCommodity`, JSON.stringify({"commodity": commodity}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeLabelType(label_type) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeLabelType`, JSON.stringify({"label_type": label_type}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeSource(source) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeSource`, JSON.stringify({"source": source}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeDestination(destination) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeDestination`, JSON.stringify({"destination": destination}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeProductForm(product_form) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeProductForm`, JSON.stringify({"product_form": product_form}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeProductFragrance(product_fragrance) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeProductFragrance`, JSON.stringify({"product_fragrance": product_fragrance}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeOrderSize(order_size) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeOrderSize`, JSON.stringify({"order_size": order_size}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeOrderStatus(order_status) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeOrderStatus`, JSON.stringify({"order_status": order_status}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeDeliveryAgent(delivery_agent) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeDeliveryAgent`, JSON.stringify({"order_status": delivery_agent}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeDeliveryMethod(name, description) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeDeliveryMethod`, JSON.stringify({"name": name, "description": description}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeRejectedReasonCode(rejected_reason_code) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeRejectedReasonCode`, JSON.stringify({"rejected_reason_code": rejected_reason_code}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  removeRejectedReasonDesc(rejected_reason_desc) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/removeRejectedReasonDesc`, JSON.stringify({"rejected_reason_desc": rejected_reason_desc}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  // UPDATE FUNCTIONS



  updateSku(sku, newsku) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateSku`, JSON.stringify({"sku": sku, "newsku": newsku}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  updateSkuDesc(skuDesc, newskuDesc) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateSkuDesc`, JSON.stringify({"skuDesc": skuDesc, "newskuDesc": newskuDesc}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  updateCurrency(currency, newCurrency) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateCurrency`, JSON.stringify({"currency": currency, "newCurrency": newCurrency}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  updateCountry(country, country_code, formdata) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
  
    return this.http.post(`http://localhost:5000/api/updateCountry`, JSON.stringify({"country": country, "country_code": country_code, "newCountry": formdata.newCountry }),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateCommodity(commodity, newCommodity) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateCommodity`, JSON.stringify({"commodity": commodity, "newCommodity": newCommodity}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateLabelType(label_type, newLabelType) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateLabelType`, JSON.stringify({"label_type": label_type, "newLabelType": newLabelType}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateSource(source, newSource) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateSource`, JSON.stringify({"source": source, "newSource": newSource}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateDestination(destination, newDestination) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateDestination`, JSON.stringify({"destination": destination, "newDestination": newDestination}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateProductForm(product_form, newProductForm) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateProductForm`, JSON.stringify({"product_form": product_form, "newProductForm": newProductForm}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateProductFragrance(product_fragrance, newProductFragrance) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateProductFragrance`, JSON.stringify({"product_fragrance": product_fragrance, "newProductFragrance": newProductFragrance}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateOrderSize(order_size, newOrderSize) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateOrderSize`, JSON.stringify({"order_size": order_size, "newOrderSize": newOrderSize}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateOrderStatus(order_status, newOrderStatus) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateOrderStatus`, JSON.stringify({"order_status": order_status, "newOrderStatus": newOrderStatus}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateDeliveryAgent(delivery_agent, newDeliveryAgent) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateDeliveryAgent`, JSON.stringify({"delivery_agent": delivery_agent, "newDeliveryAgent": newDeliveryAgent}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateDeliveryMethod(name, description, formdata) {
    console.log(formdata.newName)
    console.log(formdata)
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateDeliveryMethod`, JSON.stringify({"name": name, "description": description, "newName": formdata.newName, "newDescription": formdata.newDescription}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateRejectReasonCode(reject_reason_code, newRejectedReasonCode) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateRejectReasonCode`, JSON.stringify({"reject_reason_code": reject_reason_code, "newRejectedReasonCode": newRejectedReasonCode}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }
  updateRejectReasonDesc(reject_reason_desc, newRejectedReasonDesc) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:5000/api/updateRejectReasonDesc`, JSON.stringify({"reject_reason_desc": reject_reason_desc, "newRejectedReasonDesc": newRejectedReasonDesc}),  options)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }



  }
