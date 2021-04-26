/// <reference types="cypress" />

describe('Basic tests', () => {
    it('The webpage loads, at least', () => {
        cy.visit('https://codedamn.com')

        // syntax from mocha library
        cy.contains('Learn web development with mentorship, hands-on practice, and courses').should('exist')

        cy.get('div#root')

        cy.get('[data-testid = menutoggle]').click()

        cy.viewport(1280 , 720)

    })
    it('Start LEarning Free page looks good', () => {
        cy.visit('https://codedamn.com')


        cy.contains('Start Learning Free').click()

        cy.contains('Industry Level Skills').should('exist')

    })
})