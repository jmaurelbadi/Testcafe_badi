import { Selector } from 'testcafe';

// homepage

// https://documentation.platform-os.com/tutorials/qa/using-pom-testcafe

export default class Page {
  constructor() {
    this.registerButton = Selector('button').withText('Log in');
    this.logInButton = Selector('button').withText('Register')
    this.searchButton = Selector('input.TopBar__SearchBar_input');
    this.listerModeButton = Selector('h3').withText('Rent out a room');
    this.seekerModeButton = Selector('h3').withText('Find a room');
    this.featuredCities = Selector('article > a ');
    this.cookieConsentMessage = Selector('.CookieConsent__message');
    this.cookieText = 'We use cookies to give you the best experience on our website. By continuing to browse the site, you agree to our use of cookie. Learn more';
    this.searchNearby = Selector('.geosuggest__text.Nearby__text');
    this.cookieCloseIcon = Selector('.Button__img.CookieConsent__close');
    this.title = Selector('h1');

  }
}