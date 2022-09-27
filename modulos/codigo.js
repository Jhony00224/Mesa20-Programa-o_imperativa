let codigo = {


  mediaIdadeOtimo: function(array){
  let otimo = array.filter(function(opiniao){return opiniao.opiniao === 3});
  let media = 0;
  for(let i = 0; i < otimo.length; i++){
      media += otimo[i].idade
  }
  return media/otimo.length

},



qtdRegular: function (array){
  let regular = array.filter(function(opiniao){return opiniao.opiniao === 1});
  return regular.length
},


porcentagemBom: function(array){
  let bom = array.filter(function(opiniao){return opiniao.opiniao === 2});
  return (bom.length * 100)/array.length + '%'

}
};

module.exports = codigo;