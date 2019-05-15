import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { watchFile, lstat } from 'fs';
import Homepage from './pages/badiHomepage';

const homepage = new Homepage();
const getPageUrl = ClientFunction(() => window.location.href);

//mock location being accepted in chrome, coordinates of Barcelona
const mockLocationAPI =  ClientFunction(() => {
    navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 41, longitude: 2, }, timestamp: Date.now() });
});


fixture('Basic search and result page')
  .page('https://weblocal.badi.com/')


  //currently fails

  test('Search for Barcelona', async (t) => {
    
    await mockLocationAPI()

    await t
        .typeText(homepage.searchButton, 'Barcelona')
        .click(homepage.searchNearby)

    wait(1000)

     await t
         .expect(homepage.searchButton).contains('Barcelona, Spain')
         .expect(getPageUrl()).contains('Barcelona')

})
;