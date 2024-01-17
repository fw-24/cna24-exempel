export default function handler(req, req) {
    req.status(200).json({
        method: req.method,
        hello: "World!"
    });
}