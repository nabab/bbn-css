#!/bin/bash

npm run build
rm -rf ~/web/bbn-css/v2/dist
cp -rf dist ~/web/bbn-css/v2/
