import IndexPag from '../support/IndexPag';

describe('Validar cuotas en compra de equipo', function(){
  const movistarPage = new IndexPag();
  
  beforeEach('visito la pagina',function(){
    movistarPage.visit(); //entro a la pagina de movistar
   
  })
  it('busco el equipo flip', function() {
    movistarPage.clickSearchIcon();
    movistarPage.searchEnter('flip');
    movistarPage.getCurrentUrl().should('include', 'catalogsearch/result/?q=flip');//verifico url
    movistarPage.verifyItemInResults('flip'); 
    cy.get('#product-item-info_17752 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo', { timeout: 10000 }).should('be.visible').click();
    cy.get('#swatch_attribute_card', { timeout: 10000 }).should('be.visible').click();
    cy.get('div.field.qty > div.control.qty > label')
      .should('contain', '1'); //verifica que la cantidad sea 1
      

  });



})