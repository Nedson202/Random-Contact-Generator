# Random-Contact-Generator
The Random phone number generator generates a list of unique 10,000 contacts. This generated list can optionally be sorted in ascending or descending order, and also validated for duplicates.

# Hosted API
https://qrandom-phone-generator.herokuapp.com/api/v1

# Requirements
* Node.js v10.x or higher
* yarn

## Installation

```bash
$ git clone https://github.com/nedson202/Random-Contact-Generator.git
$ cd Random-Contact-Generator
$ yarn
$ yarn start:dev               # Start the development environment
$ yarn start                   # Run the production build
$ yarn test                    # Run tests
```
You can access the API via http://localhost:4000/api/v1/

## Usage

| HTTP VERB | Description | Endpoints |
| --- | --- | --- |
| `GET` | Generate and download contacts | /api/v1/generator/numbers |
| `GET` | Retrieve the minimum and maximum values generated | /api/v1/generator/min-max |
| `GET` | Sort the download files in ascending or descending order | /api/v1/generator/order-contacts?order= |
| `GET` | Validate the generated contacts for duplicates | /api/v1/generator/validate-numbers |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please endeavour to update tests as appropriate.
