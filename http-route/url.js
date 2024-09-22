const url = require('url')

const myUrl = new URL('https://www.example.com:8000/pathname?id=100&status=active');

// Get the hostname (example.com)
console.log('HostName:',myUrl.hostname)

// Get the serialized URL
console.log('URL:', myUrl.href);

// Get the pathname (/pathname)
console.log('Pathname:', myUrl.pathname);

// Get the query parameters (?id=100&status=active)
console.log('Search Params:', myUrl.search);