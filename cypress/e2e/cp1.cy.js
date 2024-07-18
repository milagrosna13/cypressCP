import IndexPag from '../support/IndexPag';

describe('Validar cuotas en compra de equipo', function(){
  const movistarPage = new IndexPag();
  
  beforeEach('visito la pagina',function(){
    movistarPage.visit(); //entro a la pagina de movistar
   
  })
  it('busco el equipo A14', function() {
    movistarPage.clickSearchIcon();
    movistarPage.searchEnter('A14');
    movistarPage.getCurrentUrl().should('include', 'catalogsearch/result/?q=A14');//verifico url
    movistarPage.verifyItemInResults('A14'); 
    movistarPage.verifyCuotas('3 cuotas sin interes');
  });



})