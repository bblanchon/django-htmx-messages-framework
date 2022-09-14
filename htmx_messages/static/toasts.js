;(function () {
  const toastTemplate = document.querySelector("[data-toast-template]")
  const toastContainer = document.querySelector("[data-toast-container]")

  function createToast(message) {
    // Clone the template
    const element = toastTemplate.cloneNode(true)
    delete element.dataset.toastTemplate
    toastContainer.appendChild(element)

    // Set the CSS class and the text according to the message
    element.className += " " + message.tags
    element.querySelector("[data-toast-body]").innerText = message.message

    // Show the toast using Bootstrap's API
    const toast = new bootstrap.Toast(element, { delay: 2000 })
    toast.show()
  }

  htmx.on("messages", (e) => {
    e.detail.value.forEach(createToast)
  })

  // Get the toast that are already on the page, except the template
  const toastElements = document.querySelectorAll(
    ".toast:not([data-toast-template])"
  )
  // Then show all these toasts
  for (const element of toastElements) {
    const toast = new bootstrap.Toast(element, { delay: 2000 })
    toast.show()
  }
})()
