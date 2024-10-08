# diy-onic-converter
Coding challenge to make your own (DIY) “bionic reading converter.”

Start by reading the challenge instructions in [INTERVIEW.md](./INTERVIEW.md). When you are finished, you can edit this file to include any documentation for your work.

_or…_

**Sta**rt **b**y **read**ing **th**e **challen**ge **instructio**ns **i**n **[INTERVIEW.](./INTERVIEW.md)**[md](./INTERVIEW.md). **Whe**n **yo**u **ar**e **finish**ed, **yo**u **ca**n **edi**t **thi**s **fil**e **t**o **inclu**de **an**y **documentat**ion **fo**r **you**r **wor**k.

## Information

### Approach taken

1. Extract all P tags from the container.
2. Extract text content from each P tag using a regex.
3. Run converter function on each text content.
5. Replace the original paragraph content with the converted text.

## Instructiuons
* A button was added for your convenience to run the converter.
* Alternatively, you can run the converter by calling `window.diyOnicConverter('body')` in the console.

### Limitations

* Some text may be treated incorrectly (&nbsp; is considered as text and partially converted)
* Cannot be run multiple times.
* No option to revert changes.

### Open questions
* What to do with &nbsp;? Should we consider it as space or text?
  * If its considered as space, then what comes next will be Bionic.
* What to do with existing B tags? Should we remove them?
  * In the example, it seems like they are removed.
* I am assuming we want to keep the original HTML structure including the tags.
  * For example, if a text is wrapped in an 'a' tag, we should keep it that way.
  * Should we apply Bionic on the attributes inside the 'a' tag? For example the `aria-labelledby`, `name`, `title` etc.
* Should we be able to run the converter multiple times on the same page/text?

