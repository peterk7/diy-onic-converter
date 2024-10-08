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

  /**
   * Converts selected tag to bionic reading format.
   */
  return (textContentContainerSelector, bionicReadingLength = 3) => {
    const container = document.querySelector(textContentContainerSelector);
    console.log(`Performing bionic reading conversion on selector: ${textContentContainerSelector}`);

    const pTags = container.querySelectorAll("p");
    pTags.forEach((p) => {
      const text = p.innerHTML;

      // Replace only text without touching HTML tags.
      const textContentRegex = /([^<>]+)(?=<|$)/g;
      const convertedText = text.replace(textContentRegex, (match) => convertToBionicReading(match, bionicReadingLength));
      p.innerHTML = convertedText;
    });
  };
})();

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
