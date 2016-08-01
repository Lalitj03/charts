import { receiveRandom } from './hello';
import React, {Component} from 'react';
import Request from 'request';

export function getRandomApi() {
  let data = [];
  let url = "https://raw.githubusercontent.com/react-d3/react-d3-example/master/simple/data/user_sample.json";
  Request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = body;
      receiveRandom(data);
    }
  });
}
