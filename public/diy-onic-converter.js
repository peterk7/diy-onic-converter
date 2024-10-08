const diyOnicConverter = (() => {
  const DO_NOT_CONVERT_LIST = ["\n", ""];
  const BOLD_STYLE = "font-weight: bold;";

  /**
   * Converts text to bionic reading format.
   */
  const convertToBionicReading = (text, bionicReadingLength) => {
    // Extract tags
    const words = text.split(" ");
    const bionicText = words.map((word) => {
      if (DO_NOT_CONVERT_LIST.includes(word)) {
        return word;
      }
      // Wrap first 3 characters of each word in bionic span.
      // Even if the characters include whitespaces (ex. \n) we still wrap them in bionic span since they are not displayed.
      return `<span style="${BOLD_STYLE}" class="bionic-text">${word.slice(0, bionicReadingLength)}</span>${word.slice(bionicReadingLength)}`;
    }).join(" ");
    return bionicText;
  };

  const revertBionicReading = () => {
    const container = document.querySelector('body');
    const bionicSpans = container.querySelectorAll('.bionic-text');

    bionicSpans.forEach(span => {
      const textContent = span.textContent;
      span.outerHTML = textContent;
    });
  };

  /**
     * Creates a button to trigger the bionic reading conversion.
     */
  const BUTTON_STYLE = 'position: fixed; top: 10px; z-index: 9999; padding: 10px; color: white; border: none; cursor: pointer;';
  const CONVERT_BUTTON_STYLE = `${BUTTON_STYLE} right: 10px; background-color: #4CAF50;`;
  const REVERT_BUTTON_STYLE = `${BUTTON_STYLE} right: 200px; background-color: #f44336;`;

  const createBionicConverterButtons = () => {
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to Bionic Reading';
    convertButton.style.cssText = CONVERT_BUTTON_STYLE;
    convertButton.onclick = () => diyOnicConverter('body');
    document.body.appendChild(convertButton);

    const revertButton = document.createElement('button');
    revertButton.textContent = 'Revert Bionic Reading';
    revertButton.style.cssText = REVERT_BUTTON_STYLE;
    revertButton.onclick = revertBionicReading;
    document.body.appendChild(revertButton);
  };

  // Add buttons to the page when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    createBionicConverterButtons();
  });
  window.createBionicConverterButtons = createBionicConverterButtons;

  /**
   * Converts selected tag to bionic reading format.
   */
  return (textContentContainerSelector, bionicReadingLength = 3) => {
    // To prevent bionic not running properly a second time, revert the changes first.
    revertBionicReading();
    const container = document.querySelector(textContentContainerSelector);
    console.log(`Performing bionic reading conversion on selector: ${textContentContainerSelector}`);

    const pTags = container.querySelectorAll("p");
    pTags.forEach((p) => {
      const text = p.innerHTML;
      // Replace only text without touching HTML tags.
      // TODO: Add handling for special characters like &nbsp;
      const textContentRegex = /([^<>]+)(?=<|$)/g;
      const convertedText = text.replace(textContentRegex, (match) => convertToBionicReading(match, bionicReadingLength));
      p.innerHTML = convertedText;
    });
  };
})();

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
