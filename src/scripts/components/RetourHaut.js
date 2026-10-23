import defilerVers from '../utils/defilerVers';

export default class RetourHaut {
  constructor(element) {
    this.element = element;

    this.element.addEventListener('click', () => this.remonter());
    window.addEventListener('scroll', () => this.afficher(), { passive: true });
    this.afficher();
  }

  afficher() {
    const visible = window.scrollY > window.innerHeight * 0.6;
    this.element.classList.toggle('est-visible', visible);
  }

  remonter() {
    defilerVers(0);
  }
}
