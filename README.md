Designed and implemented a URL shortener service utilizing Node.js and Express for the backend. The service generates unique short codes for long URLs, creating concise and user-friendly links. Key features include:

Shortening Process:

Users submit long URLs to the service, which generates unique short codes for each URL.
Short codes are appended to the service's base URL to create shortened links.

Redirecting:
Clicking on a shortened URL triggers a lookup in the service's database to find the original URL.
Users are seamlessly redirected to the original destination.

Technologies Used:
Node.js for server-side logic.
Express for routing and handling HTTP requests.
