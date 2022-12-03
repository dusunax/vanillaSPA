import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    console.log("싱글 페이지");
    this.setTitle(this.params.postId);
  }

  async getHtml() {
    return `
        <h1>아이템 ${this.params.postId}</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <a href="/posts/all" data-link>리스트로 돌아가기</a>.
        </p>
    `;
  }
}
