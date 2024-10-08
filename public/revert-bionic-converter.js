const revertBionicConverter = (() => {
  return () => {
    const container = document.querySelector('body');
    const bionicSpans = container.querySelectorAll('.bionic-text');

    bionicSpans.forEach(span => {
      const textContent = span.textContent;
      span.outerHTML = textContent;
    });
  };
})();

// Allow global access so that this can be executed from the console.
window.revertBionicConverter = revertBionicConverter;
