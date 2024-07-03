# parsley 🌿

Parsley is an platform for creating parsing algorithms, using AI assistance. It is currently a work-in-progress, motivated by the challenges we're facing with [Finomics](https://finomics.app).

## Guiding Principles

Parsley should strive to employ best practices, as defined by the highest level of evidence available:

- Utilize widely accepted terminologies / ontologies
- Propose most commonly accepted formats (e.g. suggest .ical for events)
- Write using coding best-practices

Parsley is also based on the idea that we can use expensive code resources once, to minimize their use in subsequent calls. The money/energy for 10 minutes of a powerful LLM put to good use in the design phase, could save hours of developer time and significant compute resources if multiple documents are to be parsed.

## Design

Users should be able to upload examples of documents that they would like to parse (.pdf, .xlsx, etc.).

The AI will then ask questions to determine the business problem that the user is trying to solve. This includes:

- The desired output schema
- A sense for the variety of inputs to be seen

The AI will then attempt to generate an approximation of the distribution of input examples, based off of domain knowledge.

Finally, it will begin crafting a python library for reading this documentation. This should ideally be tailored to the user's experience level.

## Contributing

Please feel free to get in touch if you would like to get involved. I will respond to message to my LinkedIn account (listed on GitHub profile).

## Final notes

I know it would make more sense to call this 'parsely' or 'parse-ly'. I just like parsley.