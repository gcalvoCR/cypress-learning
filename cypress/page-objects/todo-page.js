export class TodoPage{

    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText){
        cy.get('.new-todo').type(`${todoText}{enter}`)
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) .toggle`).click()
    }

    showOnlyCompletedTodos(){
        cy.contains('Completed').click()
    }

    showActiveTodos(){
        cy.contains('Active').click()
    }

    showAllTodos(){
        cy.contains('Active').click()
    }

    validateNumberOfTodosShown(expectedNum){
        cy.get('.todo-list li').should('have.length', expectedNum)
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
    }

}