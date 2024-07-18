class IndexPag{

    visit(){
        cy.visit('https://tiendaonline.movistar.com.ar');
    }

    clickSearchIcon(){
        cy.get('#search_action').click();//doy click en la lupa para que me aparezca la barra de busqueda
    }

    searchEnter(item){
        cy.get('#search').type(`${item}{enter}`);//escribo en la barra de busqueda, aca hago el enter
    }

    verifyItemInResults(item) {
        cy.get('.base').contains(item);
    }
    verifyCuotas(cuotas) {
        cy.get('#product-item-info_14932 > .details > .MSI').contains(cuotas);
    }
    getCurrentUrl() {
        return cy.url();
      }
}
export default IndexPag;