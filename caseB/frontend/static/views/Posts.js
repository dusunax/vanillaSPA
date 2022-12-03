import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("전체 리스트");
  }

  async getHtml() {
    return `
            <h1>리스트 ${this.params.postId ? this.params.postId : ""}</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/" data-link>Go To Main</a>
                <a href="/posts/1" data-link>Go To post 1</a>
                <a href="/posts/2" data-link>Go To post 2</a>
            </p>
        `;
  }
}
