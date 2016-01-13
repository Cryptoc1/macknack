#!/bin/bash

if [ -f ~/.macknack/mac.json ]; then 
	echo "MAC data exists, overwriting...";
fi

echo "Copying MAC data"
mkdir -p ~/.macknack
cp mac.json ~/.macknack/mac.json
echo "Copied MAC data"

echo "Copying script to /usr/local/bin"
cp macknack.js /usr/local/bin/macknack
echo "Copied script to /usr/local/bin"

echo "Done"
