import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {

  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
    <div class="header-container"></div>
    <h3 class="form-title">
      Cтраница добавления поста
    </h3>
    <div class="form-inputs">
      <div class="upload-image-container"></div>
      <input type="text" id="comment-input" class="input" placeholder="Комментарий" />
      <button class="button" id="add-button">Добавить</button>
  </div>
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      const inputElement = getElementById('comment-input')
      onAddPostClick({
        description: inputElement.value,
        imageUrl: imageUrl,
      });
    });
  };

  render();

  const uploadImageContainer = appEl.querySelector(".upload-image-container");
  let imageUrl = "";

  if (uploadImageContainer) {
    renderUploadImageComponent({
      element: appEl.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });
  }
}


