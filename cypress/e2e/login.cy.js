/// <reference types="cypress" />
import login_commands from '../support/login_commands'
import { faker } from '@faker-js/faker';


describe('Login', () => {

    it.only('Login com sucesso', () => {
        cy.login("Admin", "Admin123")
        .then((result) => {
            expect(result.status).to.equal(200);
            expect(result.body).to.not.be.empty;
        });

    })

    it.only('Login com username errado', () => {
        const usernameerrado  = faker.internet.email();
        cy.log(`Email errado: ${usernameerrado}`);
        console.log(`Email errado: ${usernameerrado}`);
        
        cy.login(faker.internet.email(), "Admin123")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        });

    })

    it.only('Login com senha errada', () => {
        const password  = faker.internet.password();
        cy.log(`Senha errada: ${password}`);
        console.log(`Senha errada: ${password}`);

        cy.login("Admin", faker.internet.password())
        .then((result) => {
           expect(result.status).equal(200);
           expect(result.body).to.not.be.empty;
           expect(result.body.reason).to.be.equal("Bad credentials");
        });

    })

    it('Login com username vazio', () => {
        cy.login("", "Admin123")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        })
    })


    it('Login com senha vazia', () => {
        cy.login("Admin", "")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        })

    })

})