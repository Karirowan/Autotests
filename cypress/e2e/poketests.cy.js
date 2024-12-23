describe('покупка аватара', function () {

    it('проверка авторизации', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('.auth__form > .auth__text').should('have.css', 'color', 'rgb(128, 128, 128)');

         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();

         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });

         cy.get('.credit').type('4003600000000014');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('0426');
         cy.get('.k_input_name').type('AAAA');
         cy.get('.pay-btn').click();

         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();

         cy.get('.payment__font-for-success').should('be.visible');
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__adv').should('be.visible');
         cy.get('.payment__adv').click();

     })
    })