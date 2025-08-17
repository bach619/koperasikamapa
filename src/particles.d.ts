interface ParticleDom {
  destroy: () => void;
}

declare global {
  interface Window {
    particlesJS: (tagId: string, params: any) => void;
    pJSDom: ParticleDom[];
  }
}
