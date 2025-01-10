import * as http from 'http';

export const routeHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/add') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/dashboard" method="POST">');
        res.write('<input name="Name" type="text" />');
        res.write('<button type="submit">Submit</button>');
        res.write('</body>');
        res.write('</form>');
        res.write('</html>');
        res.end();
        return;
    }

    if (req.url === '/dashboard' && req.method === "POST") {
        const body: Buffer[] = [];

        req.on("data", (data) => {
            body.push(data);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];
            console.log(`Received Name: ${name}`);
        });

        res.write('<h1>Hello Customer</h1>');
        res.end();
        return;
    }

    if (req.url === '/') {
        res.write('<h1>Landing page</h1>');
        res.end();
        return;
    }

    res.write('<h1>Hello World</h1>');
    res.end();
};
