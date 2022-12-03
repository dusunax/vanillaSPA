import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("메인");
  }

  async getHtml() {
    return `
            <h1>hello Main</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts/all" data-link>리스트 바로가기</a>.
            </p>
        `;
  }
}
