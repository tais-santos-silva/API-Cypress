/// <reference types="cypress" />
import bookingData from '../support/login_commands'
import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email('tais.santos@TextDecoderStream.com.br');

describe('Login', () => {


    it('Login com sucesso', () => {
        cy.login("Admin", "admin123")
        .then((result) => {
            expect(result.status).to.equal(200);
            expect(result.body).to.not.be.empty;
        });

    })

    it('Login com username errado', () => {
        cy.login("usernamerrado", "admin123")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        });

    })

    it('Login com senha errada', () => {
        cy.login("usernamerrado", "admin123")
        .then((result) => {
           expect(result.status).equal(200);
           expect(result.body).to.not.be.empty;
           expect(result.body.reason).to.be.equal("Bad credentials");
        });

    })

    it('Login com username vazio', () => {
        cy.login("usernamerrado", "admin123")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        })
    })


    it('Login com senha vazia', () => {
        cy.login("usernamerrado", "admin123")
         .then((result) => {
            expect(result.status).equal(200);
            expect(result.body).to.not.be.empty;
            expect(result.body.reason).to.be.equal("Bad credentials");
        })

    })

})