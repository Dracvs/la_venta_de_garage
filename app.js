"use strict";

const IMAGE_DIR = "img/";

const priceFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const formatPrice = (price) => priceFormatter.format(Number(price) || 0);

const photoUrl = (fileName) => IMAGE_DIR + encodeURIComponent(fileName);

/** Small helper: create an element with text content (never innerHTML, so data is never parsed as markup). */
const createElement = (tag, { className, text, attrs } = {}) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  Object.entries(attrs || {}).forEach(([name, value]) => element.setAttribute(name, value));
  return element;
};

/** Full-screen photo viewer built on the native <dialog> element. */
class PhotoViewer {
  constructor(dialog) {
    this.dialog = dialog;
    this.image = dialog.querySelector("#viewer-image");
    this.caption = dialog.querySelector("#viewer-caption");
    this.prevButton = dialog.querySelector("#viewer-prev");
    this.nextButton = dialog.querySelector("#viewer-next");
    this.item = null;
    this.index = 0;

    dialog.querySelector("#viewer-close").addEventListener("click", () => this.close());
    this.prevButton.addEventListener("click", () => this.step(-1));
    this.nextButton.addEventListener("click", () => this.step(1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) this.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") this.step(-1);
      if (event.key === "ArrowRight") this.step(1);
    });
  }

  open(item, index = 0) {
    this.item = item;
    this.index = index;
    const hasMultiple = item.photos.length > 1;
    this.prevButton.hidden = !hasMultiple;
    this.nextButton.hidden = !hasMultiple;
    this.render();
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }

  step(delta) {
    if (!this.item) return;
    const count = this.item.photos.length;
    this.index = (this.index + delta + count) % count;
    this.render();
  }

  render() {
    const { name, photos } = this.item;
    this.image.src = photoUrl(photos[this.index]);
    this.image.alt = `${name}, photo ${this.index + 1} of ${photos.length}`;
    this.caption.textContent = photos.length > 1
      ? `${name} (${this.index + 1} / ${photos.length})`
      : name;
  }
}

const buildItemCard = (item, viewer) => {
  const card = createElement("li", { className: item.sold ? "item-card is-sold" : "item-card" });

  const coverButton = createElement("button", {
    className: "item-cover",
    attrs: { type: "button", "aria-label": `View photos of ${item.name}` },
  });
  const cover = createElement("img", {
    attrs: { src: photoUrl(item.photos[0]), alt: item.name, loading: "lazy" },
  });
  coverButton.append(cover);
  if (item.photos.length > 1) {
    coverButton.append(createElement("span", { className: "photo-count", text: `${item.photos.length} photos` }));
  }
  if (item.sold) {
    coverButton.append(createElement("span", { className: "sold-badge", text: "Sold" }));
  }
  coverButton.addEventListener("click", () => viewer.open(item));

  const body = createElement("div", { className: "item-body" });
  body.append(
    createElement("h2", { className: "item-name", text: item.name }),
    createElement("p", { className: "item-price", text: formatPrice(item.price) }),
  );
  if (item.description) {
    body.append(createElement("p", { className: "item-description", text: item.description }));
  }

  card.append(coverButton, body);
  return card;
};

const renderCatalog = (items) => {
  const viewer = new PhotoViewer(document.getElementById("viewer"));
  const grid = document.getElementById("item-grid");
  grid.replaceChildren(...items.map((item) => buildItemCard(item, viewer)));

  const available = items.filter((item) => !item.sold).length;
  document.getElementById("item-count").textContent = `${available} of ${items.length} items available`;
};

renderCatalog(SALE_ITEMS);
