#!/bin/bash

# Exit on error
set -o errexit

# Install dependencies
npm install

# Create the uploads directory
mkdir -p uploads
