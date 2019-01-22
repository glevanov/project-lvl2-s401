#!/usr/bin/env node
import commander from 'commander';
import gendiff from '..';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`)
  .description(`${description}`)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  });

program.parse(process.argv);
