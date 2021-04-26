/// <reference types="cypress" />

describe('Basic tests', () => {

    beforeEach(() => {
        cy.viewport(1280 , 720)

        cy.visit('https://codedamn.com')

    })

    it('The webpage loads, at least', () => {
        // syntax from mocha library
        cy.contains('Learn web development with mentorship, hands-on practice, and courses').should('exist')

        cy.get('div#root')

        cy.get('[data-testid = menutoggle]').click()

        cy.viewport(1280 , 720)

    })
    it('Start LEarning Free page looks good', () => {

        cy.contains('Start Learning Free').click()

        cy.contains('Industry Level Skills').should('exist')

    })

    it('Verify Login page', () => {

        cy.contains('Sign In').should('exist')

        cy.contains('Sign In').click()

        cy.url().then(value => {
            cy.log('The current real URL is:', value)
        })

        cy.go('back')
    })

    it('Verify Register page', () => {
        cy.contains('Create Account').should('exist')

        cy.contains('Create Account').click()

    })

    it('Input values to the Register page', () => {

        cy.contains('Create Account').should('exist')

        cy.contains('Create Account').click()

        cy.contains('Name').should('exist')
        cy.contains('Username').should('exist')
        cy.contains('Email').should('exist')
        cy.contains('Password').should('exist')

        cy.get('[data-testid = name]').type('admin')
        cy.get('[data-testid = email]').type('admin@123.gmail.com')
        cy.get('[data-testid = password]').type('admin@123  ')

    })  
      it('Input values to the Register page', () => {

        cy.contains('Create Account').should('exist')

        // to pause the cypress running test not the browser
        // cy.pause()

        // // its gonna just freeze your js thread,, however this requires you to open your dev tools
        // cy.debug()

        // // for time out
        // cy.contains('Create Account' , {timeout : 10 * 1000 }).should('not.exist')

        //stoping the server with command and running another command
        // const fileName = Math.random()

        // cy.get('[data-testid=xterm]').type('{ctrl}{c}').type(`touchtestscript.${fileName}.js{enter}`)

        // cy.contains(`testscript.${fileName}.js`).should('exist')
    })
})