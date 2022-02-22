
function paginacao(items, page, limit){
    let array = [];
    let totalpage = Math.ceil(items.length )

    let count = (page * limit) - limit

    let Delimtador = count + limit

    if(page <=totalpage){
        for(let i = count; i < Delimtador; i ++){
            if(items[i] != null){
                array.push(items[i])
            }
            count++;
        }
    }
    return array;
}
const proximo =['próximo 1','próximo 2','próximo 3','próximo 4','próximo 5']

const ResultadoProximo =paginacao(proximo, 1, 2);

console.log(ResultadoProximo)