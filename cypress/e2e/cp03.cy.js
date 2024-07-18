import IndexPag from "../support/IndexPag";

describe('aplicar cuotas',function(){
  const movistarPage= new IndexPag();

  it('prueba cargando pagina y haciendo click a 3',function(){
    movistarPage.visit();
   cy.get('div.products ol > li').eq(2).click();
   cy.get('#open-installments-modal').click()//hago clcik para calcular cuotas
  })


})