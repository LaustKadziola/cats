const http = require("http");
const path = require("path");
const fs = require("fs");


const server = http.createServer((req, res) => {
    console.log(req.url);

    // Build file path
    let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    // Extension of file
    let extName = path.extname(filePath);

    //Content type
    let contentType = "";
    console.log(extName);
    switch (extName) {
        case ".html":
            contentType = "text/html";
            break;
        case ".js":
            contentType = "text/js";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        default:
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content)=>{
        if(err){
            if(err.code = "ENONET"){
                // Page not found
                fs.readFile(path.join(__dirname, "404.html"), (err, content)=>{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(content, "utf-8");
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server error ${res.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {"Content-Type": contentType});
            res.end(content, "utf-8");
        }
    });
});

const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`Server running on port ${port}`));