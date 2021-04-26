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

    it.only('Verify Login page', () => {
        cy.visit('https://codedamn.com')

        cy.get('[data-testid = menutoggle]').click()

        cy.log('on menu')
        cy.contains('Login').should('exist')

        cy.contains('Login').click({force : true})

        cy.url().then(value => {
            cy.log('The current real URL is:', value)
        })

        cy.go('back')
    })

    // it.only('Verify Register page', () => {
    //     cy.visit('https://codedamn.com')

    //     cy.get('[data-testid = menutoggle]').click()

    //     cy.contains('Register').should('exist')

    //     cy.contains('Register').click({force : true})

    //     cy.go('back')

    // })
})