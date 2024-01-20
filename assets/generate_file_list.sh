#!/bin/bash

# Generate a list of filenames and save them to a text file
find . -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.gif" \) -exec basename {} \; > image_list.txt

