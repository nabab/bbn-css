#!/bin/bash

npm run all
rm -rf ~/web/bbn-css/v2/dist
cp -rf dist ~/web/bbn-css/v2/
