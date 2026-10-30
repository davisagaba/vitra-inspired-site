// Dynamic rendering logic for products.html: category tabs, filters, sort, pagination,
// favorite/compare actions on cards. Depends on catalog.js and shop.js.

const PAGE_SIZE = 6;
let state = {
  category: null, // null = all
  color: "",
  size: "",
  bidet: "",
  sort: "relevance",
  page: 1,
};

function categoriesInOrder() {
  const seen = [];
  CATALOG.forEach((p) => {
    if (!seen.includes(p.category)) seen.push(p.category);
  });
  return seen;
}

function applyFilters() {
  let items = state.category ? CATALOG.filter((p) => p.category === state.category) : CATALOG.slice();
  if (state.color) items = items.filter((p) => p.color === state.color);
  if (state.size) items = items.filter((p) => p.size === state.size);
  if (state.bidet) items = items.filter((p) => p.bidet === state.bidet);

  if (state.sort === "price-asc") items.sort((a, b) => a.price - b.price);
  else if (state.sort === "price-desc") items.sort((a, b) => b.price - a.price);
  else if (state.sort === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name));

  return items;
}

function renderBreadcrumbs() {
  const el = document.getElementById("shop-breadcrumbs");
  if (!el) return;
  el.innerHTML =
    '<a href="index.html">Home</a><span>/</span>' +
    '<a href="products.html" id="breadcrumb-products">Products</a>' +
    (state.category ? '<span>/</span><span class="current">' + state.category + "</span>" : "");
  document.getElementById("breadcrumb-products")?.addEventListener("click", (e) => {
    e.preventDefault();
    setCategory(null);
  });
}

function renderTabs() {
  const el = document.getElementById("category-tabs");
  if (!el) return;
  const cats = categoriesInOrder();
  el.innerHTML =
    `<button type="button" class="category-tab${!state.category ? " category-tab-active" : ""}" data-cat="">All</button>` +
    cats
      .map(
        (c) =>
          `<button type="button" class="category-tab${state.category === c ? " category-tab-active" : ""}" data-cat="${c}">${c}</button>`
      )
      .join("");
  el.querySelectorAll(".category-tab").forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.cat || null));
  });
}

function renderFilters() {
  const el = document.getElementById("filters-panel");
  if (!el) return;
  const scoped = state.category ? CATALOG.filter((p) => p.category === state.category) : CATALOG;

  function optionsFor(field) {
    const values = [...new Set(scoped.map((p) => p[field]).filter(Boolean))];
    return values;
  }

  const colors = optionsFor("color");
  const sizes = optionsFor("size");
  const bidets = optionsFor("bidet");

  function countFor(field, value) {
    return scoped.filter((p) => p[field] === value).length;
  }

  el.innerHTML = `
    <div class="filter-group">
      <h4>Color</h4>
      ${colors
        .map(
          (c) => `<label class="filter-option">
            <input type="radio" name="color" value="${c}" ${state.color === c ? "checked" : ""}>
            ${c} (${countFor("color", c)})
          </label>`
        )
        .join("")}
    </div>
    ${
      sizes.length
        ? `<div class="filter-group">
      <h4>Size</h4>
      ${sizes
        .map(
          (s) => `<label class="filter-option">
            <input type="radio" name="size" value="${s}" ${state.size === s ? "checked" : ""}>
            ${s} (${countFor("size", s)})
          </label>`
        )
        .join("")}
    </div>`
        : ""
    }
    ${
      bidets.length
        ? `<div class="filter-group">
      <h4>Bidet Function</h4>
      ${bidets
        .map(
          (b) => `<label class="filter-option">
            <input type="radio" name="bidet" value="${b}" ${state.bidet === b ? "checked" : ""}>
            ${b} (${countFor("bidet", b)})
          </label>`
        )
        .join("")}
    </div>`
        : ""
    }
    <button type="button" class="btn-outline small" id="clear-filters">Clear All</button>
  `;

  el.querySelectorAll('input[name="color"]').forEach((r) =>
    r.addEventListener("change", () => {
      state.color = r.value;
      state.page = 1;
      renderAll();
    })
  );
  el.querySelectorAll('input[name="size"]').forEach((r) =>
    r.addEventListener("change", () => {
      state.size = r.value;
      state.page = 1;
      renderAll();
    })
  );
  el.querySelectorAll('input[name="bidet"]').forEach((r) =>
    r.addEventListener("change", () => {
      state.bidet = r.value;
      state.page = 1;
      renderAll();
    })
  );
  document.getElementById("clear-filters")?.addEventListener("click", () => {
    state.color = "";
    state.size = "";
    state.bidet = "";
    state.page = 1;
    renderAll();
  });
}

function renderGrid() {
  const grid = document.getElementById("product-grid");
  const countEl = document.getElementById("results-count");
  if (!grid) return;

  const all = applyFilters();
  countEl.textContent = `${all.length} result${all.length === 1 ? "" : "s"} displayed`;

  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = all.slice(start, start + PAGE_SIZE);

  grid.innerHTML = pageItems
    .map((p) => {
      const img = getProductImages(p, 400)[0];
      const fav = isFavorite(p.id);
      const compared = isCompared(p.id);
      return `
      <article class="product-card">
        <div class="product-image">
          <img src="${img}" alt="${p.name}" loading="lazy">
          <button type="button" class="favorite-btn${fav ? " favorite-active" : ""}" data-id="${p.id}" aria-pressed="${fav}" aria-label="Add to favorites">♥</button>
          ${!p.stock ? '<span class="stock-badge">Out of Stock</span>' : ""}
        </div>
        <p class="product-code">${p.code}</p>
        <h3><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
        <p class="product-price">${formatPrice(p.price)}</p>
        <label class="compare-option">
          <input type="checkbox" class="compare-checkbox" data-id="${p.id}" ${compared ? "checked" : ""}>
          Compare
        </label>
        <a href="product-detail.html?id=${p.id}" class="btn-outline small">View Item</a>
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", () => toggleFavorite(btn.dataset.id));
  });
  grid.querySelectorAll(".compare-checkbox").forEach((cb) => {
    cb.addEventListener("change", () => {
      const ok = toggleCompare(cb.dataset.id);
      if (ok === false) cb.checked = isCompared(cb.dataset.id);
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const el = document.getElementById("pagination");
  if (!el) return;
  if (totalPages <= 1) {
    el.innerHTML = "";
    return;
  }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button type="button" class="page-btn${i === state.page ? " page-btn-active" : ""}" data-page="${i}">${i}</button>`;
  }
  el.innerHTML = html;
  el.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.page = Number(btn.dataset.page);
      renderGrid();
      document.getElementById("product-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setCategory(cat) {
  state.category = cat;
  state.color = "";
  state.size = "";
  state.bidet = "";
  state.page = 1;
  window.history.replaceState(null, "", cat ? "#" + getCategorySlug(cat) : "products.html");
  renderAll();
}

function renderAll() {
  renderBreadcrumbs();
  renderTabs();
  renderFilters();
  renderGrid();
}

function categoryFromHash() {
  const hash = window.location.hash.replace("#", "");
  const map = {
    toilets: "Toilets", washbasins: "Washbasins", furniture: "Furniture",
    taps: "Taps", showers: "Shower Systems", tiles: "Tiles", accessories: "Accessories"
  };
  return map[hash] || null;
}

document.addEventListener("DOMContentLoaded", () => {
  state.category = categoryFromHash();
  renderAll();
});

window.addEventListener("hashchange", () => {
  state.category = categoryFromHash();
  state.page = 1;
  renderAll();
});
