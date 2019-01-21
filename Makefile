install:
	npm install

start:
	npx babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npx eslint .

update:
	npm install -g gendiff-glevanov
