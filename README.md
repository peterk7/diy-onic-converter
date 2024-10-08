# diy-onic-converter
Coding challenge to make your own (DIY) “bionic reading converter.”

Start by reading the challenge instructions in [INTERVIEW.md](./INTERVIEW.md). When you are finished, you can edit this file to include any documentation for your work.

_or…_

**Sta**rt **b**y **read**ing **th**e **challen**ge **instructio**ns **i**n **[INTERVIEW.](./INTERVIEW.md)**[md](./INTERVIEW.md). **Whe**n **yo**u **ar**e **finish**ed, **yo**u **ca**n **edi**t **thi**s **fil**e **t**o **inclu**de **an**y **documentat**ion **fo**r **you**r **wor**k.

## Information

### Approach taken

1. Extract all P tags from the container.
2. Extract text content from each P tag.
3. Replace only text by using a regex to split text from HTML tags.
4. Perform bionic reading conversion on the text sections.
5. Replace the original paragraph content with the converted text.

### Limitations

* Loosing the HTML tags and structure in the process
* Not easily reusable - needs css class and extra functions.
* Some text may be treated incorrectly (&nbsp; is considered as space)


