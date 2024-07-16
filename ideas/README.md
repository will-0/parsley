# Ideas

## How would I design a 'generic' algorithm for parsing Excel documents?

Perhaps you could start by ideating some of the high-level structures of the document. For example, in the rota-parsing example, it notices that there are several different general structures that a rota would look like:

* Individual per column, date per row
* Date per column, individual per row
* Individual per sheet, week per row, day per column

Such structures can be hypothesized by the algorithm, based off of prior knowledge.

We can then dive into each individual scenario, and derive optimized approaches to parsing them:

* For instance one, try and determine which columns would correspond to a particular individual. Variants can be hypothesized through generation by the AI, based off previous knowledge.

### Algorithm implementation

It could then handle each of the edge cases in separate, independent threads, after specifying the output format for each one. Each step can involve data generation.

For example, when trying to format a set of columns using regex, it should propose a regex string, then create an example set of columns to review the output. We can optimize this with DSPy.