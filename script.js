function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")



  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  // Pega a tag image
  const img = document.querySelector("#profile img")
  // substituir a image
  if(html.classList.contains('light')){
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  }else{
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar-dark.png')
  }
}