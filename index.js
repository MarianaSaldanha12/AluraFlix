var listaFilmesHarryPotter = ["https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg","https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/11/25/unnamed-1ib3894cp3hwm.jpg","https://m.media-amazon.com/images/S/pv-target-images/f76698c07b820c62d5a3372d2c7b93d068d15154d713bccc71068b5864e7f832.jpg","https://br.web.img3.acsta.net/medias/nmedia/18/93/87/95/20282862.jpg","https://images.justwatch.com/poster/120830237/s718/harry-potter-e-a-ordem-da-fenix.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg","https://play-lh.googleusercontent.com/stxJpRK-8SowDlb6rxqS7CsV8gx59ICTwVgjGPRcsyDdEAUntk03slNU-eTbqd7rNSA","https://musicart.xboxlive.com/7/41e15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"]
var nomesFilmes = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte - Parte 1",
  "Harry Potter e as Relíquias da Morte - Parte 2"
]
for(var i = 0; i < listaFilmesHarryPotter.length; i=i+1){
  document.write('<img src=' + listaFilmesHarryPotter[i] + '>');
  document.write('<p>' + nomesFilmes[i] + '</p>');
}
