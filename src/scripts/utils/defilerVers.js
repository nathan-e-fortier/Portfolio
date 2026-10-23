import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function defilerVers(cible) {
  const smoother = ScrollSmoother.get();

  if (smoother && ScrollTrigger.isTouch !== 1) {
    smoother.scrollTo(cible, true, 'top top');
    return;
  }

  const y = typeof cible === 'number' ? cible : smoother ? smoother.offset(cible, 'top top') : cible;
  gsap.to(window, { scrollTo: { y: y, autoKill: true }, duration: 0.9, ease: 'power2.inOut', overwrite: true });
}
