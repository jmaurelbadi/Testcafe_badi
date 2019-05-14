import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { watchFile } from 'fs';
import Page from './pages/page-object';

const page = new Page();



const getPageUrl = ClientFunction(() => window.location.href);

//mock location being accepted in chrome, coordinates of Barcelona
const mockLocationAPI =  ClientFunction(() => {
    navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 41, longitude: 2, }, timestamp: Date.now() });
});



fixture('Badi Homepage')
  .page('https://weblocal.badi.com/')



test('Check homepage', async (t) => {

    // check homepage
    await t
        .expect(page.h1).eql('Find or rent a room, anywhere.')
        .expect(page.listerModeButton.innerText).eql('Rent out a room')
        .expect(page.seekerModeButton.innerText).eql('Find a room')
    
    // featured cities should be London, Barcelona, Madrid and Rome

})

test('Close cookie banner', async (t) =>{

        await t
            .expect(page.cookieConsentMessage.innerText).eql(page.cookieText)
            .click(page.cookieCloseIcon)
            .expect('body').notContains(page.cookieConsentMessage, 'Error: Cookie message is still present')
            
})

;

fixture('Badi-Search')
  .page('https://weblocal.badi.com/')


  //currently fails

  test('Search for Barcelona', async (t) => {
    
    await mockLocationAPI()

    await t
        .typeText(page.searchButton, 'Barcelona')
        .click(page.searchNearby)

    wait(1000)

     await t
         .expect(page.searchButton).contains('Barcelona, Spain')
         .expect(getPageUrl()).contains('Barcelona')

})

;