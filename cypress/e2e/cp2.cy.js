import IndexPag from '../support/IndexPag';
import FiltrosP from '../support/FiltrosP';

describe('aplicar filtro de equipos', function(){

  const movistarPage = new IndexPag();
  const filtros = new FiltrosP();
  
  beforeEach(function() {
    movistarPage.visit();// Visitar la página de Movistar antes de cada prueba
    cy.viewport(768, 1024); 
  });

  it('Aplicar filtro de Memoria Interna 128GB y Precio entre $250.000 - $500.00', function() {
    filtros.clickFiltros();
    filtros.aplicarFiltroPrecio();
    filtros.clickFiltros();
    filtros.aplicarFiltroMemoriaInterna();
    cy.get('.total-products > p').should('be.visible').and('contain.text', 'equipos');
  });

})