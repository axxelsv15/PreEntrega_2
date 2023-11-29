images = [
    "https://images.unsplash.com/photo-1563968743333-044cef800494?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://source.unsplash.com/featured/?hiking",
    "https://source.unsplash.com/featured/?kayak",
    "https://source.unsplash.com/featured/?forest",
    "https://source.unsplash.com/featured/?mountain"
   
  
  $('div.card-image').each ->
    random_image_index = Math.floor(images.length * Math.random())
    $(this).css('background-image', 'url(' + images[random_image_index] + ')')