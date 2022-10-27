let pTotalAmount = document.getElementById("total-amount")
let count = 0;
let total = 0;
let totalAmount = 0;

const products_name = [
  { id: 0, title: "Mango Oval Tokalı Kemer", price: 200 },
  { id: 1, title: "Mango Asimetrik Stiletto Ayakkabı", price: 560 },
  { id: 2, title: "Mango Kapitone Kot Kartlık", price: 160 },
  { id: 3, title: "Mango Pamuklu Çizgili Tişört", price: 260 },
  { id: 4, title: "Mango Bilekten Bağlamalı Sandalet", price: 560 },
  { id: 5, title: "Mango Çapraz Çanta", price: 380 },
  { id: 6, title: "Mango Metal Bileklik", price: 200 },
  { id: 7, title: "Mango Gündelik Koton Tişört", price: 100 },
  { id: 8, title: "Mango Dişli Platform Topuklu Sandalet", price: 400 },
  { id: 9, title: "Mango Yüksek Belli Mom Jean", price: 560 },
  { id: 10, title: "Mango Çiçekli Elbise", price: 200 },
  { id: 11, title: "Mango Zincirli Kapitone Çanta", price: 500 },
];
      
let sepet = [];
function add(productId) {
  const product = products_name.find((product) => product.id === productId);
  sepet.push(product);
  document.getElementById("no-product").setAttribute("class", "d-none");
  const amount = sepet.filter((product) => product.id === productId).length;
  urun_listele(productId, amount);
}

function urun_listele(productId, amount) {
  const product = products_name.find((product) => product.id === productId);

  if (amount > 1) {
    const productEl = document.getElementById(product.id);
    productEl.getElementsByClassName("amount")[0].textContent = amount;
    productEl.getElementsByClassName("total")[0].textContent =
      product.price * amount;
    totalAmount += product.price;
  } else {
    const td = ` 
                    
                    <td class="product">${product.title}</td>
                    <td class="piece">${product.price}</td> 
                    <td class="amount">${amount}</td> 
                    <td class="total">₺ ${product.price}</td> 
                    <td><button class="btn btn-outline-danger" onclick="deleteproduct(event)">Sil</button>
  `;
    const tr = document.createElement("tr");
    tr.id = product.id;
    tr.innerHTML = td;

    document.getElementById("table-people").appendChild(tr);
    totalAmount += product.price;

  }
  pTotalAmount.innerText = totalAmount;

}
    
function modalShow(event) {
  document.getElementById("islemler").innerHTML = "Ekle";
  document
    .getElementById("islemler")
    .setAttribute("onClick", "javascript: save(event);");


      document.getElementById("input-name").value=""
      document.getElementById("input-price").value=""
}


function deleteproduct(event) {
  const oge = event.target.closest("tr");
  if (oge.getElementsByTagName("td")[2].innerHTML > 1) {
    oge.getElementsByTagName("td")[2].innerHTML =
      oge.getElementsByTagName("td")[2].innerHTML - 1;
      
    oge.getElementsByTagName("td")[3].innerHTML =
      oge.getElementsByTagName("td")[3].innerHTML -
      oge.getElementsByTagName("td")[1].innerHTML;
  }
  else {
    oge.getElementsByTagName("td")[2].innerHTML == 1;
    event.target.closest("tr").remove();

  }
  document.getElementById("total-amount").innerHTML =
    document.getElementById("total-amount").innerHTML -
    oge.getElementsByTagName("td")[1].innerHTML;
    
    let sayi;
    sepet.forEach((val,index)=> {
      if(val.id==oge.id)
      {
        sayi=index;
      }
    })
    sepet[sayi]={id:"bos"}
    sepet = sepet.filter((val,index)=>{
      return val.id != "bos";}
    )
}
document.getElementById("no-product").classList.remove("d-none");











