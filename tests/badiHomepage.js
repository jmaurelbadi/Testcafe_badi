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

let chars = 'abcdefghijklmnopqrstuvwxyz';
let fakeemail = chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@mailinator.com';
// print(chars);
// register user with simple email




fixture('Badi Homepage')
  .page('https://weblocal.badi.com/')



test('Check homepage', async (t) => {

    // check homepage
    await t
        .expect(homepage.title.innerText).eql('Find or rent a room, anywhere.')
        .expect(homepage.listerModeButton.innerText).eql('Rent out a room')
        .expect(homepage.seekerModeButton.innerText).eql('Find a room')
    
    // featured cities should be London, Barcelona, Madrid and Rome

})

test('Close cookie banner', async (t) =>{

        await t
            .expect(homepage.cookieConsentMessage.innerText).eql(homepage.cookieText)
            .click(homepage.cookieCloseIcon)
            .expect('body').notContains(homepage.cookieConsentMessage, 'Error: Cookie message is still present')
            
})

;

fixture.only('Register with email')
    .page('https://weblocal.badi.com/')

    test('Check register option', async (t) => {

        await t 
            .expect(homepage.logInButton.visible).ok()
            .click(homepage.logInButton)
            .expect(homepage.registerWithEmail.innerText).eql('Continue with Email')
            .expect(homepage.registerWithFacebook.innerText).eql('Continue with Facebook');


    })

    test('Register with email', async (t) => {
        await t
            .click(homepage.registerButton)
            .click(homepage.registerWithEmail)
            .typeText(homepage.emailInput, fakeemail)
            .typeText(homepage.passwordInput, 'Test1234', {speed: 0.1})
            .wait(500);

            
        await t
            .click(homepage.registerInPopUpButton);

        await t 
            .expect(homepage.GDPRPopUp).contains('Just to let you know...')


    })


;