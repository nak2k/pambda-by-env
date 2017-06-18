const { identity } = require('pambda');

const env = (name, truePambda, falsePambda) => {
  const value = process.env[name] || '';

  if (typeof(truePambda) === 'object') {
    return truePambda[value] || falsePambda || identity;
  }

  if (value === '' || value === '0' || value === 'false' || value === 'no') {
    return falsePambda || identity;
  }

  return truePambda;
};

exports.env = env;
