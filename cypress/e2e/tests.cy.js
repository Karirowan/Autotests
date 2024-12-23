describe('проверка авторизации', function () {

    it('проверка авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').click();

        cy.get('#mailForgot').type('aaa@yandex.ru');
        cy.get('#restoreEmailButton').click()
        
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('проверка с НЕверным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1111111111');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('проверка с НЕверным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikovvvvvvv.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('проверка валидации почты без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('проверка приведения к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 }) 




 //+Напиши автотест на проверку логики восстановления пароля:
//а) Нажать «Забыли пароль»
//б) Ввести любой имейл
//в) Проверка, что получили нужный текст и есть кнопка крестика

//+Напиши проверку на негативный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести НЕправильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//+Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//+Напиши проверку на негативный кейс валидации:
//а) Ввести логин без @
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что получаем текст с ошибкой

//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
//Важно: Разработчик допустил баг в этом месте и не реализовал пункт #2 из требований.
//Тест должен упасть — и это ок (то есть мы этим тестом поймали баг, который допустил разработчик)