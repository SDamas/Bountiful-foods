// Display last modified
document.querySelector("#last-modified").textContent = document.lastModified

// Display current orders
const numberOfOrders = localStorage.getItem("numberOfOrders")
const currentOrdersElement = document.querySelector("#current-orders")

if (numberOfOrders == null) {
    currentOrdersElement.textContent = "You haven't ordered yet. What about giving a try? 😋";
} else {
    currentOrdersElement.textContent = `${numberOfOrders} 🍹`;
}