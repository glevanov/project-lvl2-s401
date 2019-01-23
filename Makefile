install:
	npm install

start:
	npx babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npx eslint .

fix:
	npx eslint . --fix

update:
	npm install -g gendiff-glevanov

test:
	npm test --watchAll
