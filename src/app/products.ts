export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Flowers in a Metal Vase',
    price: 799,
    description: 'Flowers in a Metal Vase',
    creator:''
  },
  {
    id: 2,
    name: 'A Girl with Flowers on the Grass',
    price: 699,
    description: 'A Girl with Flowers on the Grass.',
    creator: 'Maris'
  },
  {
    id: 3,
    name: 'Venus in Flower 01',
    price: 299,
    description: '',
    creator: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/