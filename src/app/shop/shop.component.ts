import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  colorwhite1() {
    this.changeProductImage("product1", "../../assets/blanc.png");
  }

  colorred1() {
    this.changeProductImage("product1", "../../assets/rouge.png");
  }

  colorwhite2() {
    this.changeProductImage("product2", "../../assets/blanc.png");
  }

  colorred2() {
    this.changeProductImage("product2", "../../assets/rouge.png");
  }

  private changeProductImage(productId: string, imagePath: string) {
    const product = document.getElementById(productId) as HTMLImageElement | null;

    if (product) {
      product.src = imagePath;
    } else {
      console.error(`Element with ID '${productId}' not found.`);
    }
  }
}
