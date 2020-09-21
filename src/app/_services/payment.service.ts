import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  InitiateAfricasTalkingMobileCheckout(amount: number, phone_number: string, product_name: string, metadata: any, provider_channel: string, payment_service_provider: string, payment_type: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/payments`,
      {
        amount: amount,
        phone_number: phone_number,
        product_name: product_name,
        currency_code: "KES",
        metadata: metadata,
        provider_channel: provider_channel,
        payment_service_provider: payment_service_provider,
        payment_type: payment_type
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  InitiateAfricasTalkingBusinessToConsumer(payment_type: string, amount: number, phone_number: string, product_name: string, payments_service_provider: string, metadata: any): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/payments`,
      {
        payment_type: payment_type,
        amount: amount,
        phone_number: phone_number,
        currency_code: "KES",
        product_name: product_name,
        payments_service_provider: payments_service_provider,
        metadata: metadata
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  InitiateAfricasTalkingBusinessToBusiness(amount: number, destination_account: string, destination_channel: string, payment_type: string, product_name: string, provider: string, payments_service_provider: string, transfer_type: string, metadata: any): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/payments`,
      {
        amount: amount,
        destination_account: destination_account,
        destination_channel: destination_channel,
        payment_type: payment_type,
        product_name: product_name,
        provider: provider,
        payments_service_provider: payments_service_provider,
        transfer_type: transfer_type,
        metadata: metadata
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  getWalletBalance(payments_service_provider: string): Observable<any> {
    const params = new HttpParams().set('payments_service_provider', payments_service_provider);
    return this.http.get<any>(
      `${environment.apiUrl}/wallet_balance`,
      { params }
    ).pipe(map(response => {
      return response;
    }));
  }
}
