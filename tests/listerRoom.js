import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import Page from './pages/page-object';

const page = new Page();



const searchBar = Selector('input[type="text"]');
const titleH1 = Selector('h1');
const listerModeButton = Selector('h3').withText('Rent out a room');
const seekerModeButton = Selector('h3').withText('Find a room');
const featuredCities = Selector('article > a ');
const cookieConsentMessage = Selector('.CookieConsent__message');
const cookieText = 'We use cookies to give you the best experience on our website. By continuing to browse the site, you agree to our use of cookie. Learn more';
const getPageUrl = ClientFunction(() => window.location.href);
const searchNearby = Selector('.geosuggest__text.Nearby__text');

fixture('Lister lists room')
  .page('https://weblocal.badi.com/')



test('Check homepage', async (t) => {

    // check homepage
    await t
        .expect(titleH1.innerText).eql('Find or rent a room, anywhere.')
        .expect(listerModeButton.innerText).eql('Rent out a room')
        .expect(seekerModeButton.innerText).eql('Find a room')
    
    // featured cities should be London, Barcelona, Madrid and Rome

})

test('Start lister mode', async (t) =>{

    const registerPopUp = Selector ('.popup__body');
    const usernameEmail = Selector ('#username');
    const passwordEmail = Selector ('#password');
    const signUp = Selector ('#signUp');
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let fakeemail = chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@mailinator.com';
    // print(chars);
    // register user with simple email

    await t
        .click('.ListerInfo__Button')
        .expect(getPageUrl()).contains('rent-room')
        .click('.RentRoomButton')
        //.expect(registerPopUp).contains('.AuthButton AuthButton__email');
        .click('.AuthButton__email')
        .typeText(usernameEmail, fakeemail)
        .typeText(passwordEmail, 'Test1234');

    await t
        .click(signUp)
        .click('.Button__green');
})