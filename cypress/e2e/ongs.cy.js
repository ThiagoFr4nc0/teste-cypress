/// <reference types="cypress" />


describe('site rockestz', () => {
     it('teste de pesquisa ', ()=> {
       cy.visit('https://rocketz.com.br/pc-gamer')

        cy.get('#search-input').click();
        cy.get('#search-input').type('prime');
        cy.wait(1000);
        cy.get('.product-image').click();
    })

    it('teste de configurar um pc', ()=> {
     cy.visit('https://rocketz.com.br/pc-gamer') 
     cy.get('.section-filter-holder > .icon').click();
     cy.wait(1000);
     cy.get('[href="/store/kits/prime"] > .kit').click();
     cy.wait(1000);
    //abrindo todos os componentes
     cy.get('#panel-heading-2 > .panel-title > a > .details > small > .fa').click();
     cy.wait(500);
     cy.get('#panel-heading-3 > .panel-title > a > .details > small > span').click();
     cy.wait(500);
     cy.get('#panel-heading-4 > .panel-title > a > .details > small > span').click();
     cy.wait(500);
     cy.get('#panel-heading-5 > .panel-title > a > .details > small > span').click();
     cy.wait(500);
     cy.get('#panel-heading-9 > .panel-title > a > .details > small > span').click();
     cy.wait(500);
     cy.get('#panel-heading-10 > .panel-title > a > .details > small > span').click();
     cy.wait(500);
     cy.get('#panel-heading-14 > .panel-title > a > .details > small > span').click();
     cy.wait(1000);
     //configurando um componete
     cy.get('#collapse-1 > .panel-body > .justify-content-center > .btn-material').click();
     cy.wait(500);
     cy.get('#product-exchange-modal-1 > .modal-dialog > .modal-content > .modal-body > .p-2 > .col-12 > .row > [data-brand="AMD"]').click();
     cy.wait(500);
     cy.get('[data-brand="Intel"]').click();
     cy.wait(500);
     cy.get('[data-product-id="3075"]').click();
     cy.wait(500);
     cy.get('#product-exchange-modal-1 > .modal-dialog > .modal-content > .modal-body > .btn-personalization > .col-4 > .row > .btn-material').click();
     cy.wait(500);
    })

   
   it('teste de login', ()=> {
  
        cy.visit('https://rocketz.com.br/pc-gamer')

        cy.get('.button-header > .btn-material').click();
        cy.wait(500);
        cy.get('#check-email-form > .input-group > input').type('testecypress@hotmail.com');
        cy.wait(500);
        cy.get('#check-email-form > .btn-material').click();
        cy.wait(500);
        cy.get(':nth-child(4) > #customer_password').type('JoaoTeste');
        cy.wait(500);
        cy.get('#new_customer > .btn-material').click();
        
     })
})
