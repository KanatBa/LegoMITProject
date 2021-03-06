var ShopPage=function(){
    this.shopLink=element(by.linkText('SHOP'));
    this.alertWindow=$('.l-modal__content');
    this.alertConfirmation=$('.l-modal__content a');
    this.exclusivesLink=$('#main-bar-dropdown-exclusives a');
    this.viewAll=$('li:nth-child(1) > a > div.exclusives__link-item-icon');
    this.priceLink=$('.facet-navigation__list-type:nth-of-type(3) span legend');
    this.desiredRange=$('fieldset:nth-child(3) li:nth-child(3)  label  span');
    this.displayCheck=$$('.product-leaf__link-title .markup');
    this.addtoBag2=$('.overview__pickers .add-to-cart-button>span')
    this.searchButton=$('#query');
    this.desiredProduct=$$('.product-leaf__link-image').first();
    this.nextButton=$('.product-viewer__next-button');
    this.numOfClick=$$('#s7swatches .s7thumbcell');
    this.addToBag1=$('.overview__pickers .add-to-cart-button');
    this.errorMessage=element(by.cssContainingText('p','Sorry! No results found for'));
    this.shopButton=$('.main-bar__link-home');
    this.myBagButton=$('#util-bar-dropdown-cart');
    this.editCheckoutButton=$('.mini-cart__checkout-link');
    this.bagItems=$$('.cart-item h3');
    this.removeButton=$$('.cart-item__remove');
    this.checkoutButton=$('.checkout-layout__aside-upper .checkout-next__button')
}
module.exports=new ShopPage();