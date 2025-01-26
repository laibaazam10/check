const productForm = document.getElementById("productForm")
const producTable = document.getElementById("productTable")
const productQuantity = document.getElementById("productQuantity")
const quantityError = document.getElementById("quantityError")

maxQuantity = 30;
productQuantity.addEventListener("input",function () {
    let enteredQuantity = parseFloat(productQuantity.value)
    if (enteredQuantity > maxQuantity) {
        quantityError.style.display = "block"
        
    } else {
        quantityError.style.display = "none"
        
    }
    
})

productForm.addEventListener("submit",function (event) {
    event.preventDefault();
    
    let productName = document.getElementById("productSelect").value;
    let productQuantity = parseFloat(document.getElementById("productQuantity").value);
    let productPrice = parseFloat(document.getElementById("productPrice").value);
    let discount = parseFloat(document.getElementById("discount").value);
    let tax = parseFloat(document.getElementById("tax").value);

    totalCost = productQuantity * productPrice;
    discountAmount =(totalCost + discount) / 100;
    taxAmount = ((totalCost - discountAmount) + tax)/ 100;
    finalCost = totalCost - discountAmount + taxAmount;
    let currentDate = new Date()
    let updatedDate  = currentDate.toLocaleString();

    let row = document.createElement("tr")
    row.innerHTML =`
    <td>${productName}</td>
    <td>${productQuantity}</td>
    <td>${productPrice}</td>
    <td>${discountAmount.toFixed(2)}</td>
    <td>${taxAmount.toFixed(2)}</td>
    <td>${totalCost.toFixed(2)}</td>
    <td>${finalCost.toFixed(2)}</td>
    <td>${updatedDate}</td>
    <button class = "btn btn-sm btn-danger mt-3 delete-btn">Delete</button>
    
    `;
    row.querySelector(".delete-btn").addEventListener("click",function () {
        let confirmMessage = confirm ("are you sure you want to delete this row");
        if (confirmMessage) {
            row.remove()
            
        } else {
            
        }
        
    })


    let table = document.getElementById("productTable");
    table.appendChild(row);

    function updateGrandTotal() {
        let total = 0;
        document.querySelectorAll("#productTable tr").forEach(function () {
            let finalCost = parseFloat(row.children[6].textContent) || 0;
            total = total + totalCost
            
        })
        
        document.getElementById("grandTotal").textContent = total.toFixed(2);
    }
    productForm.addEventListener("submit", updateGrandTotal())
    producTable.addEventListener("click",function (event) {
        if (event.target.classList.contains("delete-btn")) {
            updateGrandTotal()
            
        }
        
    })
    
        
    })
    
        
    

    

    



