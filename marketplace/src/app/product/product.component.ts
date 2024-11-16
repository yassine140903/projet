import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductPageComponent {
  product = {
    name: 'Product Name',
    price: 88.67,
    sizes: [40, 42, 44],
    colors: ['Black', 'White'],
    description: 'Product description goes here...',
  };
  productImages = ['assets/img/Earth Tones and Musical Touches_ Elegant Clothing on Coat Racks.jpg',
    'assets/img/5M.jpg',
  ];
  mainImage = this.productImages[0];
  selectedSize = this.product.sizes[0];
  selectedColor = this.product.colors[0];
  suggestedProducts = [
    { name: 'Suggested Product 1', image: 'suggested1.jpg' },
    { name: 'Suggested Product 2', image: 'suggested2.jpg' }
  ];

  setMainImage(image: string) {
    this.mainImage = image;
  }

  BuyNow() {
    console.log('Product added to cart:', this.product.name);
  }

  currentImageIndex = 0;
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.productImages.length;
    this.mainImage = this.productImages[this.currentImageIndex];
  }
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.productImages.length) % this.productImages.length;
    this.mainImage = this.productImages[this.currentImageIndex];
  }
}
