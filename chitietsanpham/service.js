// Function to fetch data from the API and display it in the cards
async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/api/tutorials");
    const data = await response.json();

    const cardContainer = document.querySelector(".san-pham-dienthoai");
    cardContainer.innerHTML = ""; // Clear the existing content

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card-sanpham");

      card.innerHTML = `
                        <img src="${item.imageURL}" alt=""/>
                        <h5 class="mt-3">${item.name}</h5>
                        <div class="gia">
                            <span style="font-size: larger" class="gia-ban">${item.salePrice}</span>
                            <s class="gia-goc">${item.price}</s>
                        </div>
                        <button type="button" class="btn btn-primary">Mua ngay</button>
                        <div class="tag"><p>${item.saleRate}</p></div>
                    `;

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch and display data
fetchData();
