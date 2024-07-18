class FiltrosP{

    clickFiltros() {
        cy.get('.block-subtitle').click(); // Hago clic en el boton de fltros
      }
    
      aplicarFiltroPrecio() {
        cy.get('[data-value="250000_500000"] > a').click(); // Selecciono rango de precio entre $250mil y $500mil
      }
    
      aplicarFiltroMemoriaInterna() {
        cy.get('[data-value="802"] > a').click(); // Selecciono filtro de  128GB
      }

}
export default FiltrosP;