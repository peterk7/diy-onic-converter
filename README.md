# diy-onic-converter
Coding challenge to make your own (DIY) “bionic reading converter.”

Start by reading the challenge instructions in [INTERVIEW.md](./INTERVIEW.md). When you are finished, you can edit this file to include any documentation for your work.

_or…_

**Sta**rt **b**y **read**ing **th**e **challen**ge **instructio**ns **i**n **[INTERVIEW.](./INTERVIEW.md)**[md](./INTERVIEW.md). **Whe**n **yo**u **ar**e **finish**ed, **yo**u **ca**n **edi**t **thi**s **fil**e **t**o **inclu**de **an**y **documentat**ion **fo**r **you**r **wor**k.

## Information

### Approach taken

1. When code is loaded, it creates two buttons on the page.
2. Clicking on "Convert to Bionic Reading" button will convert the text to bionic reading.
3. Clicking on "Revert Bionic Reading" button will revert the text to the original state.

Underlying code is in [public/diy-onic-converter.js](./public/diy-onic-converter.js).
The convertion is done by:

1. Extract all P tags from the container.
2. Extract text content from each P tag using a regex.
3. Run converter function on each text content.
  * It wraps first `n` characters of each word in bionic span.
4. Replace the original paragraph content with the converted text.

## Instructiuons
* A button was added for your convenience to run the converter.
* Alternatively, you can run the converter by calling `window.diyOnicConverter('body')` in the console.
  * Any selector can be given as an argument.

Additional parameters can be passed to the function to customize the way formatting is performed.
* `prefixLength` - Number of characters to wrap in bionic span.

### Dynamic on any website

* Copy content of [public/diy-onic-converter.js](./public/diy-onic-converter.js)
* Open browser console.
* Paste the content and hit enter.
* Run `window.createBionicConverterButtons()` in the console.
* Two buttons will be added to the page, in the top right corner.
* Click on "Convert to Bionic Reading" button to convert the text.
* Alternatively, run `window.diyOnicConverter('body')` in the console.

### Limitations

* Some text may be treated incorrectly (&nbsp; is considered as text and partially converted)
* Some websites may prevent running the code alltogether. In that case, try running it on a different website.

## Tested on

* https://edu.gcfglobal.org/en/basic-html/links-and-images-in-html/1/
  * Using `diyOnicConverter(".lesson-block.lesson")` command in console.
* https://en.wikipedia.org/wiki/JavaScript
  * Using `diyOnicConverter("body")` command in console.

### Open questions
* What to do with `&nbsp;`? Should we consider it as space or text?
  * If its considered as space, then what comes next will be Bionic.
  * If its considered as a text, then it may be partially bolded.
  * The given example has both use-cases and each is treated differently (unless its considered as a single character all together).
* What to do with existing `b` tags? Should we remove them?
  * In the example, it seems like they are removed.
* I am assuming we want to keep the original HTML structure including the tags.
  * For example, if a text is wrapped in an 'a' tag, we should keep it that way.
  * Should we apply Bionic on the attributes inside the 'a' tag? For example the `aria-labelledby`, `name`, `title` etc.
* Should we be able to run the converter multiple times on the same page/text?

## Checklist

### Bionic (Basic Requirements)
- [ ] Provide Github link to the forked repo
- [x] The function works as specified
  - [x] Invoke function with selector on provided static website
  - [x] Transform all text within p tags
- [x] Only needs to support a static prefix length (ie. the number of letters that are bolded)
- [x] The converted HTML and styles sufficiently resemble the conversion performed by https://bionic-reading.com
- [x] README.md provides accurate instructions on how to execute the function

### Bionic Plus (Above and Beyond)
- [x] Please make sure the basic requirements above are working before attempting these bonus features
- [x] The function works when dynamically added to real-world websites (copy-paste into console, invoke function with selector, see results on the current website)
  - [x] README.md states that this is possible and provides accurate instructions for doing so in addition to a list of sites it was tested on
- [x] The function includes one or more additional capabilities that goes beyond the basic bionic reading conversion. Including, but not limited to:
  - [x] Handles inline HTML tags (<span>, <a>, <em>, etc) while maintaining block level tags
  - [x] Preserves links and images
  - [ ] Apply to entire page instead of only p tags
  - [x] Allows options to be passed to the function to customize the way formatting is performed
- [ ] README.md describes the limitations of this implementation (provide sample websites that demonstrate these limitations, if possible)
- [x] Big flex: an in-page user interface that allows the user to convert/toggle the page interactively
  - [x] User interface only for this repository.