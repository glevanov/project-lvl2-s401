#!/usr/bin/env node
import commander from 'commander';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`)
  .description(`${description}`)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
