import { Selector } from 'testcafe';

// homepage

// https://documentation.platform-os.com/tutorials/qa/using-pom-testcafe

export default class Homepage {
  constructor() {
    this.registerButton = Selector('button.Text__button').withText('Register');
    this.logInButton = Selector('button.Text__button').withText('Log in')
    this.searchButton = Selector('input.TopBar__SearchBar_input');
    this.listerModeButton = Selector('h3').withText('Rent out a room');
    this.seekerModeButton = Selector('h3').withText('Find a room');
    this.featuredCities = Selector('article > a ');
    this.cookieConsentMessage = Selector('.CookieConsent__message');
    this.cookieText = 'We use cookies to give you the best experience on our website. By continuing to browse the site, you agree to our use of cookie. Learn more';
    this.searchNearby = Selector('.geosuggest__text.Nearby__text');
    this.cookieCloseIcon = Selector('.Button__img.CookieConsent__close');
    this.title = Selector('h1');
    this.registerWithFacebook = Selector('button.AuthButton__facebook');
    this.registerWithEmail = Selector('button.AuthButton__email');
    this.emailInput = Selector('#username');
    this.passwordInput = Selector('#password');
    this.logInPopUpButton = Selector('button[name="sign_in"]');
    this.registerInPopUpButton = Selector('button[id="signUp"]')
    this.GDPRPopUp = Selector('.GDPR__modal')


  }
};
