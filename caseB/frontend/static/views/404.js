import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, title) {
    super(params, title);
    this.setTitle();
  }

  async getHtml() {
    return `
            <h1>404 error</h1>
            <p>
            페이지를 찾을 수 없습니다.
            </p>
            <p>
                <a href="/" data-link>메인으로</a>.
            </p>
        `;
  }
}
