let btnLeft,
   btnRight,
   headingSection,
   textSection,
   compteur = 2;
   let resolution ={
       with : screen.width,
       height : screen.height};
       
   


headingSection = document.querySelector('.headingSection h1');
btnLeft = document.querySelector('.btnLeft');
btnRight = document.querySelector('.btnRight');
textSection = document.querySelector('.text p');
photo = document.querySelector('.imgSection');
body = document.querySelector('.body');
html = document.querySelector('.html');
// footer = document.querySelector('.footer');


body.style.width = resolution.width ;
if (body.style.width  < photo.style.width ){
   body.style.width  = photo.style.width
}

// footer.style.width = resolution.width ;
// html.style.width = resolution.width ;




let pageUn = {
   photo: '<img src="images/desktop-image-hero-1.jpg" alt="">',
   titre: 'Discover innovative ways to decorate',
   texte:      'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
};

let pageDeux = {
   photo: '<img src="images/desktop-image-hero-2.jpg" alt="">',
   titre: ' We are available all across the globe',
   texte:      'With stores all over the world, its easy for you to find furniture for your home or place of business.     Locally, we’re in most major cities throughout the country. Find the branch nearest you using our     store locator. Any questions? Dont hesitate to contact us today.',
};
let pageTrois = {
   photo: '<img src="images/desktop-image-hero-3.jpg" alt="">',
   titre: 'Manufactured with the best materials',
   texte:      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology     to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
};

function Changement() {
   if (compteur == 4) {
      compteur = 1;
      console.log(pageUn.titre);
   } else if (compteur == 0) {
      compteur = 3;
   } //compteur revien a 1 apres 3.
   console.log(compteur);

   if (compteur == 1) {
      headingSection.textContent = pageUn.titre;
      textSection.textContent = pageUn.texte;
      photo.innerHTML = pageUn.photo;
   } else if (compteur == 2) {
      headingSection.textContent = pageDeux.titre;
      textSection.textContent = pageDeux.texte;
      photo.innerHTML = pageDeux.photo;
   } else {
      headingSection.textContent = pageTrois.titre;
      textSection.textContent = pageTrois.texte;
      photo.innerHTML = pageTrois.photo;
   }
}

Changement();

btnRight.addEventListener('click', () => {
   compteur++;
   Changement();
});

btnLeft.addEventListener('click', () => {
   compteur--;
   Changement();
});
