import CFF from "ame-super-app-client";

export default class ServerlessExample {
  state = { helloMessage: '' };

  async componentDidMount() {
    window.document.querySelector('.window').setAttribute('style', 'height: 100vh; display:flex; flex-direction: column; justify-content: space-between;')
    try {
      const body = {
        message: 'Este é um exemplo de mensagem que passou pelo back-end serverless.'
      }
      const result = await CFF.server.exec('HelloWorldBackend.sayHello', body);
      this.setState({ helloMessage: result.hello });
    } catch (e) {
      console.error('Error: ', e)
      this.setState({ helloMessage: `Ops! Algo saiu errado: ${e.message}` });
    }
  }
}
