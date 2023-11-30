const likeBtn = document.querySelectorAll(".fa-heart");
const addBtn = document.querySelectorAll(".addCart");
// const badge = document.querySelector(".badge");
const badge2 = document.querySelector(".badge2");
const badgeCon = document.querySelectorAll(".badgeCon");
const dialog = document.querySelector("dialog");
const closeModal = document.getElementById("closeModal");
const cart = document.querySelector(".cart");
const body = document.querySelector("body");
const itemCon = document.querySelector(".itemCon");
const total = document.querySelector(".spaced2 h4 span");

// const message = document.createElement("h2");

body.addEventListener("click", (e) => {
  if (e.target.className == "remove") {
    const span = e.target.parentNode.querySelector(".prices span");
    console.log(span);
    total.textContent = parseInt(total.textContent) - parseInt(span.textContent);
    itemCon.removeChild(e.target.parentNode.parentNode);
    // badge.textContent--;
    badge2.textContent--;
  }
});

body.addEventListener('click', (e) => {
    if(e.target.className == "quan") {
        const quant = e.target.value * e.target.parentNode.parentNode.querySelector(".prices span").textContent;
        
        total.textContent = parseInt(total.textContent) + parseInt(quant);
    }
})


badgeCon.forEach((btn) => {

btn.addEventListener("click", () => {
  dialog.showModal();
});
})


closeModal.addEventListener("click", () => {
  dialog.close();
});

addBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    badge2.textContent++;
    // badge1.textContent++;
    const parent = btn.parentNode;    
    const img = document.createElement("img");
    img.src = parent.children[0].getAttribute("src");
    const item = document.createElement("div");
    const itemDesc = document.createElement("div");
    const inputDiv = document.createElement("div");
    const inputQuantity = document.createElement("input");
    inputQuantity.classList.add("quan")
    inputQuantity.type = "number";
    inputQuantity.value = "1";
    inputDiv.appendChild(inputQuantity);
    item.classList.add("item");
    itemDesc.classList.add("item_desc");
    const h4 = document.createElement("h4");
    console.log(parent.children[1].querySelector("h4").textContent);
    h4.textContent = parent.children[1].querySelector("h4").textContent;
    const span = document.createElement("span");
    const h5 = document.createElement("h5");
    h5.textContent = "REMOVE";
    h5.classList.add("remove");
    span.classList.add("prices");
    const newPrice = document.createElement("p");
    const oldPrice = document.createElement("p");
    const actualPrice = document.createElement("span");
    actualPrice.textContent = parent.children[1].querySelector("span").textContent;
    newPrice.textContent = "$ ";
    newPrice.appendChild(actualPrice);
    // newPrice.innerHTML = `$ ${actualPrice.textContent}`;
    oldPrice.innerHTML = `$ ${parseInt(actualPrice.textContent) + 50}.99`;
    total.textContent = parseInt(total.textContent) + parseInt(parent.children[1].querySelector("span").textContent) + 0.99;
    oldPrice.classList.add("old");
    span.appendChild(newPrice);
    span.appendChild(oldPrice);
    itemDesc.appendChild(h4);
    itemDesc.appendChild(span);
    itemDesc.appendChild(h5);
    item.appendChild(img);
    item.appendChild(itemDesc);
    item.appendChild(inputDiv);
    itemCon.appendChild(item);
  });
});

// remove.addEventListener('click', (e) => {
//     itemCon.removeChild(e.target.parentElement);
// })

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fa-solid");
    btn.classList.toggle("bop");
  });
});
