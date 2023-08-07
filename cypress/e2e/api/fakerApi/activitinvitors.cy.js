import payloadPost from '../../../fixtures/api/fakerApi/payloadPost.json'
describe('Teste no endpoint activities', () => {
  
    context('Testes funcionais positivos', () => {
        it('Validar todas as atividades registradas', () => {

            cy.request({
                url: `${Cypress.env('fakerApi')}/Activities`,
                method: 'GET'
            }).should(res => {
                console.log(res)

                expect(res.status).to.equal(200)
                expect(res.body[0].id).to.equal(1)
            })
        });

        it.only('Cadastrando uma nova atividade', () => {
            cy.request({
                url: `${Cypress.env('fakerApi')}/Activities`,
                method: 'POST',
                body: payloadPost
            }).should(res => {
                expect(res.status).to.equal(200)
            })

        })
    })

    context('Testes funcionais positivos', () => {

    })
})