let complaintCount = 1;

function addComplaint() {
  const name = document.getElementById("studentName").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (name === "" || category === "" || description === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("complaintTable");

  const row = table.insertRow();

  row.innerHTML = `
    <td>${complaintCount}</td>
    <td>${name}</td>
    <td>${category}</td>
    <td>${description}</td>
    <td class="status-pending">Pending</td>
    <td>
      <button onclick="resolveComplaint(this)">Resolve</button>
    </td>
  `;

  complaintCount++;

  document.getElementById("studentName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";
}

function resolveComplaint(button) {
  const row = button.parentElement.parentElement;
  const statusCell = row.cells[4];

  statusCell.innerHTML = "Resolved";
  statusCell.className = "status-resolved";

  button.disabled = true;
  button.innerHTML = "Completed";
}