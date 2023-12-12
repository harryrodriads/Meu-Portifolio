const opnMenu = document.getElementById('navOpenMenu');
const clsMenu = document.getElementById('navCloseMenu');
const menuBtn = document.getElementById('menuToggle');

const menu = document.getElementById('nav');

const homeText = document.getElementById('homeText');
const aboutText = document.getElementById('aboutText');
const servicesText = document.getElementById('servicesText');
const portfolioText = document.getElementById('portfolioText');
const musicText = document.getElementById('musicText');
const contactText = document.getElementById('contactText');
const navText = [homeText, aboutText, servicesText, portfolioText, musicText, contactText];

const listHome = document.getElementById('listHome');
const listAbout = document.getElementById('listAbout');
const listServices = document.getElementById('listServices');
const listPortfolio = document.getElementById('listPortfolio');
const listMusic = document.getElementById('listMusic');
const listContact = document.getElementById('listContact');
const navListItems = [listHome, listAbout, listServices, listPortfolio, listMusic, listContact];

const navSocialList = document.getElementById('navSocialList');

const apple = document.getElementById('apple');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const linkedIn = document.getElementById('instagram');
const soundcloud = document.getElementById('soundcloud');
const spotify = document.getElementById('spotify');
const youtube = document.getElementById('youtube');
const social = [apple, facebook, instagram, linkedIn, soundcloud, spotify, youtube];

const navResume = document.getElementById('navResume');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const background = document.getElementById('background');
const content = [header, main, footer, background];

const home = document.getElementById('home');
const about = document. getElementById('about');
const services = document.getElementById('services');
const portfolio = document.getElementById('portfolio');
const music = document.getElementById('music');
const contact = document.getElementById('contact');
const contentSections = [home, about, services, portfolio, music, contact];

const aboutButton = document.getElementById('aboutLink');



//Open Menu Function
const menuOpen = () => {

    menu.classList.remove('menuShrink');
    menuBtn.classList.remove('wrapperGrow');

    menu.classList.add('menuGrow');

    navText.forEach(element => {

        element.classList.remove('shrink');
        element.classList.add('grow');

    });

    navSocialList.style.alignContent = 'flex-start';

    navListItems.forEach(element => {

        element.style.justifyContent = 'flex-start';

    });

    content.forEach(element => {

        element.classList.remove('focus');
        element.classList.add('blur');

    });

    menuBtn.style.width = "fit-content"
    menuBtn.style.margin = '0 0 8px 0';
    opnMenu.style.display = 'none';
    clsMenu.style.display = 'block';

    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = 'flex';
    
        });
        
    }, 125);

    setTimeout(function() {

        navText.forEach(element => {
           
            element.style.display = 'inline';
    
        });

        content.forEach(element => {

            element.style.filter = 'blur(5px)'
    
        });

        menu.style.maxWidth = '320px';

        navResume.style.display = 'flex';
        navResume.classList.remove('slideOutRight');
        navResume.classList.add('slideInRight');
        
    }, 495);

    menu.classList.remove('closed');

};


//Event Listeners To Open The Menu
opnMenu.addEventListener('click', menuOpen);

opnMenu.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        menuOpen();

    };

});





//Close Menu Function
const menuClose = () => {

    navResume.classList.remove('slideInRight');
    navResume.classList.add('slideOutRight');

    navText.forEach(element => {

        element.classList.remove('grow');
       
        element.classList.add('shrink');

    });

    setTimeout(function() {

        navText.forEach(element => {

            element.style.display = '';
    
        });

        menu.classList.remove('menuGrow');

        menu.classList.add('menuShrink');
        menuBtn.classList.add('wrapperGrow');

    content.forEach(element => {

        element.classList.remove('blur');
        element.classList.add('focus');

    });

        opnMenu.style.display = '';
        clsMenu.style.display = '';

        navResume.style.display = '';
        
    }, 195);

    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = '';
    
        });
        
    }, 455);


    setTimeout(function() {

        menuBtn.style.width = ""
        menuBtn.style.margin = '';
        menu.style.maxWidth = '';

        navListItems.forEach(element => {

            element.style.justifyContent = '';
    
        });
        
        content.forEach(element => {

            element.style.filter = ''
    
        });

        navSocialList.style.alignContent = '';
        
    }, 695);

    menu.classList.add('closed');

};

const clickPageClose = () => {

    if (menu.style.maxWidth !== "") {

        menuClose();

    };

};

//Event Listeners To Close The Menu
clsMenu.addEventListener('click', menuClose);
header.addEventListener('click', clickPageClose);
main.addEventListener('click', clickPageClose);
footer.addEventListener('click', clickPageClose);

clsMenu.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        menuClose();

    };

});





// Function To Fade Out Any Section
const fadeOutSections = () => {

    contentSections.forEach(section => {

        section.classList.remove('fadeIn');
        section.classList.remove('fadeOut');

    });

    contentSections.forEach(section => {

        section.classList.add('fadeOut');

        setTimeout(function() {

            section.style.display = "none";

        }, 495);  

    });

};


//Function To Close The Menu Then Fade The Sections
const closeMenuFadeSections = () => {

    if (menu.style.maxWidth === '320px') {

        menuClose();

        setTimeout(function() {

            fadeOutSections();

        },700);

    } else {

        fadeOutSections();

    };

};





//Function To Open Home Section
const openHome = () => {

    if (home.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

    setTimeout(function() {
                    
        home.style.display = 'flex';
        home.classList.add('fadeIn');

    }, 1250);

    } else if (home.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            home.style.display = 'flex';
            home.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listeners For Home Section
listHome.addEventListener('click', openHome);

listHome.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openHome();

    };

});






//Function To Open About Section
const openAbout = () => {

    if (about.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            about.style.display = 'flex';
            about.classList.add('fadeIn');

        }, 1250);

    } else if (about.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            about.style.display = 'flex';
            about.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listeners For About Section
listAbout.addEventListener('click', openAbout);
listAbout.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openAbout();

    };

});

aboutButton.addEventListener('click', openAbout);
aboutButton.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openAbout();

    };

});





//Function To Open Services Section
const openServices = () => {

    if (services.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

    setTimeout(function() {
                    
        services.style.display = 'flex';
        services.classList.add('fadeIn');

    }, 1250);

    } else if (services.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            services.style.display = 'flex';
            services.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listener For Services Section
listServices.addEventListener('click', openServices);
listServices.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openServices();

    };

});





//Function To Open Portfolio Section
const openPortfolio = () => {

    if (portfolio.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

    setTimeout(function() {
                    
        portfolio.style.display = 'flex';
        portfolio.classList.add('fadeIn');

    }, 1250);

    } else if (portfolio.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            portfolio.style.display = 'flex';
            portfolio.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listener For Portfolio Section
listPortfolio.addEventListener('click', openPortfolio);
listPortfolio.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openPortfolio();

    };

});





//Function To Open Music Section
const openMusic = () => {

    if (music.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

    setTimeout(function() {
                    
        music.style.display = 'flex';
        music.classList.add('fadeIn');

    }, 1250);

    } else if (music.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            music.style.display = 'flex';
            music.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listener For Music Section
listMusic.addEventListener('click', openMusic);
listMusic.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openMusic();

    };

});






//Function To Open Contact Section
const openContact = () => {

    if (contact.style.display !== 'flex' && menu.style.maxWidth === '320px') {

        closeMenuFadeSections();

    setTimeout(function() {
                    
        contact.style.display = 'flex';
        contact.classList.add('fadeIn');

    }, 1250);

    } else if (contact.style.display !== 'flex') {

        closeMenuFadeSections();

        setTimeout(function() {
                        
            contact.style.display = 'flex';
            contact.classList.add('fadeIn');

        }, 550);

    };

};


//Event Listener For Contact Section
listContact.addEventListener('click', openContact);
listContact.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openContact();

    };

});

class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h3 class='success'>Mensagem enviada, obrigado!</h3>",
    error: "<h3 class='error'>Não foi possível enviar sua mensagem, tente novamente!</h3>",
  });
  formSubmit.init();



//Scrollbar

const body = document.body;
const scrollBar = document.getElementById('scrollBarInner');


window.addEventListener('scroll', function() {

    
    const scrollPercent = window.pageYOffset * (100 / (body.scrollHeight - window.innerHeight));
    scrollBar.style.height = scrollPercent + '%';

});

window.addEventListener('resize', function() {


    if (window.pageYOffset === 0) {

        scrollBar.style.height = '0%';

    }

    const scrollPercent = window.pageYOffset * (100 / (body.scrollHeight - window.innerHeight));
    scrollBar.style.height = scrollPercent + '%';

});