# mac-knack
mac-knack is a simple node script for finding Networking card vendors, based off of the first three "sets" of a MAC address. 

## Usage
The API is simple to use, in the form of URL parameters. For example, to get an array of MAC prefixes registered to Apple:

	$ curl https://macknack.herokuapp.com/search?vendor=apple

The API can also search by MAC prefixes in the form of:

	$ curl https://macknack.herokuapp.com/search?mac=00:00:001


The command-line utiliy that comes with this repo operates by the same means, except it uses a local config file for storing the MAC database.

	$ macknack -h
	 macknack usage:
	  	-a	Dump all MAC addresses
		-h	Print this help message
		-m	Search by MAC "prefix"
		-v	Search by MAC vendor


### Acknowledgments
The MAC Address:Vendor “database” was built from the list provided in the program `macchanger` for linux. Full credit for the creation of the list goes to those responsible for its integration into `macchanger`.
