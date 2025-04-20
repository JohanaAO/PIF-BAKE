let order = [];
let total = 0;

function addToOrder(item, price) {
  order.push({ item, price });
  total += price;

  const list = document.getElementById("order-list");
  const listItem = document.createElement("li");
  listItem.textContent = \`\${item} - ₱\${price}\`;
  list.appendChild(listItem);

  document.getElementById("total").textContent = total;
}

// Form submission
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const department = document.getElementById("department").value.trim();

  if (!name || !contact || !department || order.length === 0) {
    alert("Please complete all fields and add at least one item.");
    return;
  }

  document.getElementById("orderForm").classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");
});
