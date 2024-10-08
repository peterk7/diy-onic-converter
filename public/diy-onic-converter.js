const STATIC_CONVERTION_LENGTH = 3;
const DO_NOT_CONVERT_LIST = ["\n", ""];

/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  // console.log("Performing bionic reading conversion on:", container);

  const pTags = container.querySelectorAll("p");
  pTags.forEach((p) => {
    const text = p.innerHTML;

    // Replace only text without touching HTML tags.
    const htmlRegex = /<[^>]*>|&nbsp;/;
    const parts = text.split(htmlRegex);
    const convertedParts = parts.map((part, index) => {
      return convertToBionicReading(part);
    });
    // Join back the text into one paragraph.
    // TODO: This is loosing the original HTML tags and structure! Need to fix.
    const convertedText = convertedParts.join('');
    p.innerHTML = convertedText;
  });
};

// TODO: parse &nbsp; as text?
const convertToBionicReading = (text) => {
  // Extract tags
  const words = text.split(" ");
  const bionicText = words.map((word) => {
    if (DO_NOT_CONVERT_LIST.includes(word)) {
      return word;
    }
    // Wrap first 3 characters of each word in bionic span.
    // Even if the characters include whitespaces (ex. \n) we still wrap them in bionic span since they are not displayed.
    // TODO: Consider what to do with new line here ... should we wrap it in bionic?
    // TODO: Consider not using a class, and instead make it an inline style or use a <b> wrapper.
    return `<span class="bionic-word">${word.slice(0, STATIC_CONVERTION_LENGTH)}</span>${word.slice(STATIC_CONVERTION_LENGTH)}`;
  }).join(" ");
  return bionicText;
};


// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
