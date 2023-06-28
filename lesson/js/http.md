# HTTP

![web file transfer diagram](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png)

HTTP stands for Hypertext Transfer Protocol. It is an application protocol used for transmitting data over the internet. HTTP is the foundation of communication on the World Wide Web and allows web browsers to request and receive resources, such as web pages, images, and videos, from web servers. It follows a client-server model, where the client, typically a web browser, sends requests to the server, and the server responds with the requested data. HTTP uses a stateless, request-response approach, where each request from the client is independent and does not retain any previous information.

1. IP (Internet Protocol):
   IP stands for Internet Protocol, which is a set of rules governing how data packets are transmitted over the internet. It provides the addressing scheme and routing functions that allow devices to communicate with each other. IP assigns a unique numerical address, known as an IP address, to each device connected to a network. **For example**, an IP address could be 192.168.0.1.

2. DNS (Domain Name System):
   DNS stands for Domain Name System. It is a decentralized naming system used to translate human-friendly domain names into IP addresses. DNS enables users to access websites using easy-to-remember domain names instead of having to remember the specific IP addresses. **For example**, the domain name "example.com" can be translated into the IP address 93.184.216.34.

3. UDP (User Datagram Protocol):
   UDP stands for User Datagram Protocol. It is a connectionless transport protocol that operates on top of IP. UDP is a simple, lightweight protocol that does not provide the same level of reliability and error correction as TCP (explained next). It is commonly used for applications that prioritize speed and efficiency over data integrity, such as real-time video streaming or online gaming.

**Example:** Voice over IP (VoIP) applications, such as Skype, use UDP to transmit voice packets in real-time. While some packets may be lost or arrive out of order, the priority is to maintain a real-time conversation rather than retransmitting lost packets.

4. TCP (Transmission Control Protocol):
   TCP stands for Transmission Control Protocol. It is a reliable and connection-oriented transport protocol that operates on top of IP. TCP establishes a reliable connection between the sender and receiver, ensuring that data is transmitted in the correct order and without errors. It includes features such as flow control, congestion control, and error detection.

**Example:** When you browse the internet and request a web page, TCP is used to establish a connection with the web server and transmit the data of the requested page. It ensures that the web page is received accurately and in the correct order.

5. TLS (Transport Layer Security):
   TLS stands for Transport Layer Security. It is a cryptographic protocol that provides secure communication over a network. TLS encrypts the data transmitted between two endpoints, ensuring that it remains confidential and cannot be intercepted or tampered with by unauthorized parties. It is commonly used to secure sensitive information, such as online banking transactions, email communication, or e-commerce transactions.

**Example:** When you visit a website that uses HTTPS (HTTP Secure), TLS is used to encrypt the data exchanged between your browser and the web server, protecting your personal information and ensuring a secure connection.

# HTTP Requests

![fetch data diagram](https://medhatdawoud.net/static/d68a5b0d8f546eb15f6f96dae170271e/4b190/server-request.jpg)

1. cURL:
   cURL is a command-line tool and library used for making HTTP requests. It supports various protocols, including HTTP, HTTPS, FTP, and many others. With cURL, you can send and receive data from a server, perform GET and POST requests, set headers, handle cookies, and more. It is commonly used in scripting, testing, and debugging HTTP-based applications.

Example cURL command for a GET request:

```
curl -X GET https://api.example.com/users
```

This command sends a GET request to the specified URL (`https://api.example.com/users`) and retrieves the user data from the server.

2. Ajax (Asynchronous JavaScript and XML):
   Ajax is a set of web development techniques that allow for asynchronous communication between the web browser and the server. It enables updating parts of a web page without requiring a full page reload. Ajax typically uses JavaScript to send HTTP requests to the server, retrieve data in various formats (such as XML, JSON, or plain text), and dynamically update the web page content.

Example Ajax request using XMLHttpRequest:

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/users", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
xhr.send();
```

In this example, an XMLHttpRequest object is created to make a GET request to the specified URL (`https://api.example.com/users`). When the response is received, the callback function is triggered, and the response data (assumed to be in JSON format) is parsed and logged to the console.

3. Fetch API:
   Fetch is a modern JavaScript API for making HTTP requests. It provides a more powerful and flexible alternative to the older XMLHttpRequest. Fetch returns a Promise, allowing you to work with the response using a clean and intuitive syntax.

Example Fetch request:

```javascript
fetch("https://api.example.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
```

In this example, the fetch function is used to make a GET request to the specified URL. The response is then converted to JSON format using the `json()` method. The parsed data is logged to the console. If there's an error during the request or parsing, it will be caught in the `catch` block and logged to the console.

# Is fetch an ajax wrapper?

No, Fetch is not a wrapper around AJAX. Fetch and AJAX are two different ways to make HTTP requests in a web browser, but they are built on different technologies.

1. **AJAX**: AJAX typically uses the `XMLHttpRequest` object, which is an older API that was designed for making asynchronous HTTP requests in web browsers. It was groundbreaking when it was introduced because it allowed web pages to communicate with the server without requiring a full page reload. However, its API design is considered somewhat clunky and outdated by modern standards.

2. **Fetch**: Fetch is a newer API introduced to provide a more modern and powerful way to make network requests in web browsers. It is based on Promises, which provide a more convenient way to work with asynchronous operations compared to the callback approach used by `XMLHttpRequest`. Fetch also has a cleaner syntax and is more flexible and powerful than `XMLHttpRequest`.

In essence, Fetch is an alternative to the AJAX's `XMLHttpRequest`, not a wrapper around it. Many developers have adopted Fetch as it offers a more modern and convenient way to make HTTP requests in JavaScript. However, `XMLHttpRequest` is still widely used, especially in older codebases and libraries.

# Then, what is fetch?

The `fetch` function is a built-in API in modern web browsers, and its implementation is written in lower-level languages like C++ for performance and security reasons. The exact code inside the `fetch` function is part of the browser's source code.

However, major web browsers like Chrome, Firefox, and Edge are open source, so you can actually look at their implementations of the `fetch` function if you are interested.

For example, in the Chromium project (which is the basis for Google Chrome and Microsoft Edge), the `fetch` API is implemented as part of the Blink rendering engine. Blink is primarily written in C++.

In Firefox, the `fetch` API is part of the Gecko rendering engine, which is also primarily written in C++.

As a JavaScript developer, you don't need to know the internal implementation of the `fetch` function; you just need to know how to use the API. However, if you are curious or interested in browser development, you can dive into the source code of these open-source browsers.
