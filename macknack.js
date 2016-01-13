#!/usr/bin/env node

var fs = require('fs'),
	args = process.argv.splice(2),
	macFilePath = (process.env.HOME || process.env.USERPROFILE || process.env.HOMEPATH) + '/.macknack/mac.json'

var _usage = "macknack usage:\n\t-a\tDump all MAC addresses\n\t-h\tPrint this help message\n\t-m\tSearch by MAC \"prefix\"\n\t-v\tSearch by MAC vendor\n"

function main() {
	if (!fs.existsSync(macFilePath)) {
		console.log("[!] MAC data not found!")
		return 1
	}
	switch (args[0]) {
		case "-a":
			fs.readFile(macFilePath, function(err, data) {
				if (err) {
					throw err
				}
				data = JSON.parse(data)
				for (i in data) {
					console.log("MAC: %s\nVendor: %s\n", data[i].MAC, data[i].vendor)
				}
			})
			break
		case "-h":
			console.log(_usage)
			break
		case "-m":
			if (args.length == 2) {
				fs.readFile(macFilePath, function(err, data) {
					if (err) {
						throw err
					}
					data = JSON.parse(data)
					for (i in data) {
						if (data[i].MAC == args[1]) {
							console.log("MAC: %s\nVendor: %s", data[i].MAC, data[i].vendor)
						}
					}
				})
			} else {
				console.log(_usage)
			}
			break
		case "-v":
			if (args.length == 2) {
				fs.readFile(macFilePath, function(err, data) {
					if (err) {
						throw err
					}
					data = JSON.parse(data)
					for (i in data) {
						if (data[i].vendor.toLowerCase().includes( args[1].toLowerCase())) {
							console.log("MAC: %s\nVendor: %s\n", data[i].MAC, data[i].vendor)
						}
					}
				})
			} else {
				console.log(_usage)
			}
			break
		default:
			console.log(_usage)
			break
	}	
}

main()
