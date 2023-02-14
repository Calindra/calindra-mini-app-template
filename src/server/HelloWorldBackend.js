export default class HelloWorldBackend {
    async sayHello(req) {
        return { hello: `Olá. ${req.body.message}!` };
    }
}
