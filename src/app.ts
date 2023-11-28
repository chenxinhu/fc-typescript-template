/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import * as dotenv from 'dotenv';
dotenv.config();

exports.handler = function (event: any, context: any, callback: any) {
  callback(null, 'hello world');
};

exports.initialize = function(context: any, callback: any) {
  console.log('initializer');
  callback(null, "");
};

module.exports.preFreeze = function(context: any, callback: any) {
  console.log('preFreeze');
  callback(null, "");
};

export const sum = (a: number, b: number): number => {
  return a + b;
};