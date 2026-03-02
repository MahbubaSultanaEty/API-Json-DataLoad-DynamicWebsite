/*fetch Response & JSON Conversion (Notes)
1. What does a server send?
The server sends data in JSON format.
This data is actually a JSON string (text), not a JavaScript object.

2. What does fetch() return?
fetch() returns a Response object. [its a container]
This container Response object contains:
status (e.g., 200, 404)
headers
body (raw JSON data as a stream/string)

3. Why do we use res.json()?
JavaScript cannot directly use JSON strings.
res.json():
reads the response body
converts the JSON string into a JavaScript object
internally uses JSON.parse()

4. Flow of data conversion
Server (JSON string)
        ↓
fetch() → Response object
        ↓
res.json()
        ↓
JavaScript object

5. Relation with JSON.parse() and JSON.stringify()
res.json() = automatic JSON.parse()
JSON.stringify() is used when sending data to the server
res.json() is used when receiving data from the server

6. One-line summary (Very Important)
fetch response contains JSON as a string, and res.json() converts it into a usable JavaScript object.
*/

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()
).then(data => console.log(data))

// console.log(result)
