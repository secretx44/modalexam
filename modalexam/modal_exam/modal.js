// Get the modal element
const modal = document.getElementById("modal")

// Get the Cancel button
const cancelButton = document.querySelector("button")

// Get the No and Yes buttons from the modal
const noButton = document.getElementById("no-button")
const yesButton = document.getElementById("yes-button")

// Function to show the modal
function showModal() {
  modal.style.display = "block"
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none"
}

// Function to update the modal content
function updateModalContent(content) {
  const modalContent = document.querySelector(".modal-content")
  modalContent.innerHTML = content
}

// Function to handle the Yes button click
function handleYesButtonClick() {
  updateModalContent("Subscription successfully cancelled!")
  setTimeout(hideModal, 2000)
  cancelButton.textContent = "Cancelled"
  cancelButton.style.background = "green"
}

// Function to handle the No button click
function handleNoButtonClick() {
  hideModal()
}

// Add event listeners to the Cancel button and the Yes/No buttons
cancelButton.addEventListener("click", showModal)
noButton.addEventListener("click", handleNoButtonClick)
yesButton.addEventListener("click", handleYesButtonClick)
