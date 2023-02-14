import CFF from "ame-super-app-client";

export default class Home {
  componentDidMount() {
    window.document.querySelector('.window').setAttribute('style', 'height: 100vh; display:flex; flex-direction: column; justify-content: space-between;')
  }
  navigateTo = (item) => {
    CFF.navigation.navigate(item.to);
  };
}
