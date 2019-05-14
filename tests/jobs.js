import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const getWindowLocation = ClientFunction(() => window.location);


// checkl all jobs page, title, number of jobs and jobs exists
const title = Selector('h1');
const tableRows = Selector ('tbody > tr');   
const addJobButton = Selector ('a.btn.btn-primary');
const firstJob = Selector ('tbody > tr').withText('Horse Whisperer');
const submitButton = Selector('button[type="submit"]');
const cancelButton = Selector('a.btn.btn-success')

   

fixture('Node Jobs')
  .page('http://localhost:3000');

test('All Jobs', async (t) => {
    // checkl new job button, title, number of jobs and jobs exists

    await t
        .expect(title.innerText).eql('All Jobs')
        .expect(tableRows.count).eql(3)
        .expect(addJobButton.innerText).eql('Add New Job')
        .expect(firstJob.exists).ok();

})

test('New job', async (t) => {
    // click add job button
    await t
        .click(addJobButton)
        .expect(title.innerText).eql('Add Job')
    
    //fill out form
    await t
    .typeText('input[name="title"]', 'Python Developer')
    .typeText('textarea[name="description"]', 'Write some Python')
    .typeText('input[name="company"]', 'Real Python')
    .typeText('input[name="email"]', 'michael@realpython.com')
    .click(submitButton)
  // check title, table rows, and new job exists
  await t
    .expect(title.innerText).eql('All Jobs')
    .expect(tableRows.count).eql(4)
    .expect(Selector('tbody > tr').withText('Python Developer').exists).ok();
})

test('User press cancel', async (t) =>{
    await t
        .click(addJobButton)
        .expect(title.innerText).eql('Add Job')

    // user clicks cancel
    await t
        .click(cancelButton)
        .expect(title.innerText).eql('All Jobs')


})

test('User does not enter data in all field', async (t) =>{
    await t
        .click(addJobButton)
        .expect(title.innerText).eql('Add Job')

    // user enter data in only 2 fields
    await t
    .typeText('input[name="title"]', 'QA tester')
    .typeText('textarea[name="description"]', 'I guess that/s me!')

    // user clicks submit button
    .click(submitButton)
    .expect(title.innerText).eql('All Jobs')

})

test('User enters incorrect email', async (t) =>{
    await t
        .click(addJobButton)
        .expect(title.innerText).eql('Add Job')

    // user enter data in only 2 fields
    await t
    .typeText('input[name="title"]', 'QA tester')
    .typeText('textarea[name="description"]', 'I guess that/s me!')
    .typeText('input[name="email"]', 'michael')

    // user clicks submit button and expect error message to appear
    .click(submitButton)
    .expect(title.innerText).eql('Add Job')


})

;

