import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayTrackService {

  constructor() { }

  public confirmBill(order: boolean) {
    return new Promise<boolean>((resolve, reject) => {
      if (order) {
        setTimeout(() => {
          resolve(order);
          console.log("Shop đã duyệt đơn hàng")
        }, 2000);
        return;
      }
      reject("error")
      return;
    })
  }

  public waitForOderBill(confirm: boolean) {
    return new Promise<boolean>((resolve, reject) => {
      if (confirm) {
        setTimeout(() => {
          resolve(confirm)
          console.log("Shipper đang đi lấy hàng")
        }, 3000);
        return;
      }
      reject("Đơn hàng không được thông qua")
    })
  }

  public isBeingTrack(confirm: boolean) {
    return new Promise<string>((resolve, reject) => {
      if(confirm){
      let donhang = "1 cái áo nè"
      setTimeout(() => {
        resolve(donhang)
        console.log("Shipper đã lấy hàng và đang giao")
        return;
      }, 3000);
      }
    })
  }

  public received() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Nhận hàng")
        return;
      }, 1000);
    })
  }

  public payment() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Thanh toán");
        return;
      }, 3000);
    })
  }

  public async submit(x: boolean) {
    console.log("Chờ xác nhận đơn hàng từ shop")
    let confirm = await this.confirmBill(x);
    let bill = await this.waitForOderBill(confirm);
    let donhang = await this.isBeingTrack(bill)
    let thanhtoan = Promise.all([this.received(),this.payment])
    console.log(thanhtoan)
    console.log("Đã nhận hàng và thanh toán")
  }
}
