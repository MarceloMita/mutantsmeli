# Mutants application

This is a test repository with mutants exercise

## Requisites

To run this API on your machine is necessary to have `Node.js` and `MongoDb` installed.

### Install dependencies:

```
npm install
```

### Start server:

```
npm start
```

### Testing application

```
npm test
```

## Usage

### To create a dna entry

```
POST /mutant HTTP/1.1
Host: mutants-marcelomita450514.codeanyapp.com
Content-Type: application/json
Cache-Control: no-cache

{
	"dna":["AAACCCT","ACCAGTGC","AGTTATGT","ACAGAAGT","ACCGCCTT","CATCACTT", "AAGATCAT"]
}
```

Response:

If it is a mutant: `HTTP-200 OK`

Otherwise: `HTTP-403 Forbiden`

### To check stats

```
GET /stats HTTP/1.1
Host: mutants-marcelomita450514.codeanyapp.com
Cache-Control: no-cache
```

Response:

```json
{
    "count_mutant_dna": x,
    "count_human_dna": y,
    "ratio": z
}
```