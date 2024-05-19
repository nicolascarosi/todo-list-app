import dayjs from 'dayjs';

describe('create task', () => {
  const taskNumber = Math.floor(Math.random() * 100);

  before(() => {
    cy.clearLocalStorage();
    cy.visit('/login');
  });

  it('fill and submit login form', () => {
    cy.get('input[id="email"]').type('frontend.lilhorse@yopmail.com');
    cy.get('input[id="password').type('123456');
    cy.wait(500)
      .get('button')
      .contains(/log in/i)
      .click();
  });

  it('successfully log in and navigate to next page', () => {
    cy.url().should('contain', '/');
    cy.get('.home-page').should('exist');
  });

  it('navigate to "Tasks" page', () => {
    cy.get('nav .sidebar-items button')
      .contains(/tasks/i)
      .click()
      .then(() => {
        cy.url().should('contain', '/tasks');
        cy.get('.tasks-page').should('exist');
      });
  });

  it('click on "Add Task" button and open modal to create a task', () => {
    cy.get('.tasks-page > .section-title > button')
      .contains(/add task/i)
      .click()
      .then(() => {
        cy.get('.ant-modal-title')
          .contains(/create new task/i)
          .should('exist');
      });
  });

  it('fill form to create new task and submit', () => {
    cy.get('input[id="title"]').type(`Task cypress #${taskNumber}`);
    cy.get('textarea[id="description"]').type('Sample description');
    cy.get('input[id="categories"]')
      .click()
      .then(() => {
        cy.get(
          '.rc-virtual-list .rc-virtual-list-holder-inner > div[title="Task"]'
        ).click();
      });
    cy.get('label[for="categories"]').click();
    cy.wait(500)
      .get('input[id="due_date"]')
      .type(dayjs().format('YYYY-MM-DD'))
      .type('{enter}');
  });

  it('check if task was created', () => {
    cy.get('.task-card .task-card__title').contains(`#${taskNumber}`);
  });
});
