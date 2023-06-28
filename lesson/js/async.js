/**
 * This JavaScript code snippet demonstrates the use of the Fetch API for making HTTP requests
 * and handling asynchronous operations.
 *
 * The first part of the code makes a single fetch request and demonstrates how to handle
 * the response and possible errors using Promise chaining.
 *
 * The second part consists of two async functions: `asyncBadImplemented` and `asyncGoodImplemented`.
 * Both functions perform the same task - making multiple fetch requests to the same URL and
 * parsing the responses as JSON - but they use different approaches.
 *
 * `asyncBadImplemented` waits for each fetch request to complete before starting the next one,
 * resulting in inefficient use of time when dealing with multiple independent async operations.
 *
 * `asyncGoodImplemented`, on the other hand, uses Promise.all to perform all fetch requests in parallel,
 * leading to more efficient execution.
 *
 * The code demonstrates the importance of properly handling async operations in JavaScript and
 * shows the potential performance improvements that can be achieved by running independent async
 * operations in parallel instead of sequentially.
 */

// success: https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms
// error: https://run.mocky.io/v3/25f798b8-fa03-4b75-b2b2-cc0896da1674

// Start a timer to measure how long the following operations take.
console.time("⌛️ singleFetch");

// The fetch API is used to make an HTTP request to the provided URL.
// After the request is completed, it returns a Promise that resolves to the Response to that request.
fetch(
  "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
)
  // The then method is called with a function that takes the response from the fetch request.
  .then((data) => {
    data
      .json()
      // The then method is called again with a function to log the resulting data.
      .then((data) => {
        // Stop the timer and log the elapsed time.
        console.timeEnd("⌛️ singleFetch");
        console.log("1️⃣ Fetch Data: ", data);
      })
      // If there's an error parsing the JSON, it will be caught here and logged.
      .catch((error) => console.log("Error 🚀: ", error));
  })
  // If there's an error with the fetch request itself, it will be caught here and logged.
  .catch((error) => console.log("Error 👽: ", error));

// The asyncBadImplemented function is defined as an asynchronous function.
// This allows the use of the await keyword inside it.
async function asyncBadImplemented() {
  try {
    // Start a timer to measure how long the following operations take.
    console.time("⌛️ asyncBadImplementedTime");

    // The await keyword is used before each fetch call, causing the function execution to pause until the Promise is resolved.
    // The fetch calls are made one after the other, meaning each request has to complete before the next one starts.
    // This is inefficient when dealing with multiple independent async operations and will make the total time longer.
    const result = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result1 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result2 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result3 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result4 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result5 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result6 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );
    const result7 = await fetch(
      "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
    );

    // Stop the timer and log the elapsed time.
    console.timeEnd("⌛️ asyncBadImplementedTime");

    // After all fetch calls have completed, the json method is called on each response to parse the body text as JSON.
    // The await keyword is used again to pause execution until each Promise is resolved.
    const data = await result.json();
    const data1 = await result1.json();
    const data2 = await result2.json();
    const data3 = await result3.json();
    const data4 = await result4.json();
    const data5 = await result5.json();
    const data6 = await result6.json();
    const data7 = await result7.json();

    // Log all the resulting data.
    console.log("❌ asyncBadImplementedTime: ", {
      data,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
    });
  } catch (error) {
    // If there's an error with any of the fetch calls or JSON parsing, it will be caught here and logged.
    console.error(error);
  }
}

// The asyncGoodImplemented function is also defined as an asynchronous function.
async function asyncGoodImplemented() {
  try {
    // Start a timer to measure how long the following operations take.
    console.time("⌛️ asyncGoodImplemented");

    // Instead of awaiting each fetch call individually, Promise.all is used.
    // This method returns a single Promise that resolves when all of the input's promises have resolved.

    // It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
    const [result, result2, result3, result4, result5, result6, result7] =
      await Promise.all([
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
        fetch(
          "https://run.mocky.io/v3/f9d6c7fb-ff5a-450b-b8c0-e967e1417e4c?mocky-delay=100ms"
        ),
      ]);

    // Stop the timer and log the elapsed time.
    console.timeEnd("⌛️ asyncGoodImplemented");

    // After all fetch calls have completed, Promise.all is used again to parse all the responses as JSON simultaneously.
    const allData = await Promise.all([
      result.json(),
      result2.json(),
      result3.json(),
      result4.json(),
      result5.json(),
      result6.json(),
      result7.json(),
    ]);

    // Log all the resulting data.
    console.log("✅ asyncGoodImplemented: ", { ...allData });
  } catch (error) {
    // If there's an error with any of the fetch calls or JSON parsing, it will be caught here and logged.
    console.error(error);
  }
}

// Call the asyncBadImplemented function.
asyncBadImplemented();

// Call the asyncGoodImplemented function.
asyncGoodImplemented();
