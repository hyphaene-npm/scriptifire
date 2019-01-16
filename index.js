#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');

const types = [1, 2, 3];

const main = () => {
  const type = process.argv.slice(2)[0];
  if (!types.includes(type)) {
    return;
  }
};
