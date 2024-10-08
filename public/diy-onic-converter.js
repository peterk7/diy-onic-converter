const STATIC_CONVERTION_LENGTH = 3;
const DO_NOT_CONVERT_LIST = ["\n", ""];
const BOLD_STYLE = "font-weight: bold;";

/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log(`Performing bionic reading conversion on selector: ${textContentContainerSelector}`);

  const pTags = container.querySelectorAll("p");
  pTags.forEach((p) => {
    const text = p.innerHTML;

    // Replace only text without touching HTML tags.
    const textContentRegex = /([^<>]+)(?=<|$)/g;
    const convertedText = text.replace(textContentRegex, convertToBionicReading);
    p.innerHTML = convertedText;
  });
};

const convertToBionicReading = (text) => {
  // Extract tags
  const words = text.split(" ");
  const bionicText = words.map((word) => {
    if (DO_NOT_CONVERT_LIST.includes(word)) {
      return word;
    }
    // Wrap first 3 characters of each word in bionic span.
    // Even if the characters include whitespaces (ex. \n) we still wrap them in bionic span since they are not displayed.
    return `<span style="${BOLD_STYLE}">${word.slice(0, STATIC_CONVERTION_LENGTH)}</span>${word.slice(STATIC_CONVERTION_LENGTH)}`;
  }).join(" ");
  return bionicText;
};


// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
