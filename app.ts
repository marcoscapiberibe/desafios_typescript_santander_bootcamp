
// var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
// let apiKey;
// let requestToken;
// let username;
// let password;
// let sessionId;
// let listId = '7101979';

// let loginButton = document.getElementById('login-button');
// let searchButton = document.getElementById('search-button');
// let searchContainer = document.getElementById('search-container');

// loginButton.addEventListener('click', async () => {
//   await criarRequestToken();
//   await logar();
//   await criarSessao();
// })

// searchButton.addEventListener('click', async () => {
//   let lista = document.getElementById("lista");
//   if (lista) {
//     lista.outerHTML = "";
//   }
//   let query = document.getElementById('search').value;
//   let listaDeFilmes = await procurarFilme(query);
//   let ul = document.createElement('ul');
//   ul.id = "lista"
//   for (const item of listaDeFilmes.results) {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(item.original_title))
//     ul.appendChild(li)
//   }
//   console.log(listaDeFilmes);
//   searchContainer.appendChild(ul);
// })

// function preencherSenha() {
//   password = document.getElementById('senha').value;
//   validateLoginButton();
// }

// function preencherLogin() {
//   username =  document.getElementById('login').value;
//   validateLoginButton();
// }

// function preencherApi() {
//   apiKey = document.getElementById('api-key').value;
//   validateLoginButton();
// }

// function validateLoginButton() {
//   if (password && username && apiKey) {
//     loginButton.disabled = false;
//   } else {
//     loginButton.disabled = true;
//   }
// }

// class HttpClient {
//   static async get({url, method, body = null}) {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();
//       request.open(method, url, true);

//       request.onload = () => {
//         if (request.status >= 200 && request.status < 300) {
//           resolve(JSON.parse(request.responseText));
//         } else {
//           reject({
//             status: request.status,
//             statusText: request.statusText
//           })
//         }
//       }
//       request.onerror = () => {
//         reject({
//           status: request.status,
//           statusText: request.statusText
//         })
//       }

//       if (body) {
//         request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         body = JSON.stringify(body);
//       }
//       request.send(body);
//     })
//   }
// }

// async function procurarFilme(query) {
//   query = encodeURI(query)
//   console.log(query)
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
//     method: "GET"
//   })
//   return result
// }

// async function adicionarFilme(filmeId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
//     method: "GET"
//   })
//   console.log(result);
// }

// async function criarRequestToken () {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
//     method: "GET"
//   })
//   requestToken = result.request_token
// }

// async function logar() {
//   await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
//     method: "POST",
//     body: {
//       username: `${username}`,
//       password: `${password}`,
//       request_token: `${requestToken}`
//     }
//   })
// }

// async function criarSessao() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
//     method: "GET"
//   })
//   sessionId = result.session_id;
// }

// async function criarLista(nomeDaLista, descricao) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       name: nomeDaLista,
//       description: descricao,
//       language: "pt-br"
//     }
//   })
//   console.log(result);
// }

// async function adicionarFilmeNaLista(filmeId, listaId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       media_id: filmeId
//     }
//   })
//   console.log(result);
// }

// async function pegarLista() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
//     method: "GET"
//   })
//   console.log(result);
// }



let apiKey:string
let requestToken: object;
let username: string
let password: string 
let sessionId: string;
let listId:string = (document.getElementById('inputId') as HTMLInputElement).value

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button')!;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;

loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }

  let query = (document.getElementById('search') as HTMLInputElement).value;
  let listaDeFilmes: any = await procurarFilme(query);
  let ul = document.createElement('ul');

  

  ul.id = "lista"

  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    let p = document.createElement('li');
    li.appendChild(document.createTextNode(item.original_title))
    p.appendChild(document.createTextNode(item.id))
    ul.appendChild(li)
    ul.appendChild(p)
  
  }

  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

function preencherSenha() {
  password = (document.getElementById('senha') as HTMLInputElement).value
  validateLoginButton();
}

function preencherLogin() {
  username = (document.getElementById('login') as HTMLInputElement).value;
  validateLoginButton();
}

function preencherApi() {
  apiKey = (document.getElementById('api-key') as HTMLInputElement).value
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get({ url = '', method = '', body = {} as any }) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}


async function procurarFilme(query: string) {
  query = encodeURI(query)
  console.log(query)
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId: string) {
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })

}

async function criarRequestToken() {
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  sessionId = result.session_id;
  console.log(sessionId)
}



let listaAqui = document.getElementById('listHere')!;
let botaoList = document.getElementById('criarLista')!

let numeroList: object

async function criarLista(nomeDaLista: string, descricao: string) {


  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })

  let objetoList: any = result
  numeroList = objetoList.list_id
}

botaoList?.addEventListener('click', async () => {
  
  let nameList = (document.getElementById('nameList') as HTMLInputElement).value
  let descriptList = (document.getElementById('descriptList') as HTMLInputElement).value
  let criarList = await criarLista(nameList, descriptList)
  let div = document.createElement('div')


  const item = document.createElement('div')

    item.innerHTML = `
     <h3>Nome: ${nameList} Id: ${numeroList}  </h3>
     <h5>descrição: ${descriptList} </h5>
    `
    document.getElementById('listHere')?.appendChild(item)
     listaAqui.appendChild(div)
   
})


let objaddfilmes:any

async function adicionarFilmeNaLista(filmeId: number, listaId: string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })

  return objaddfilmes
  
}

let bAddFilm =  document.getElementById('addFilm')!

bAddFilm.addEventListener('click', async () => {
  let inputIdList:string = (document.getElementById('inputIdList') as HTMLInputElement).value
  let inputIdFilm:string = (document.getElementById('inputIdFilm') as HTMLInputElement).value

  const addfilme = await adicionarFilmeNaLista(Number(inputIdFilm),inputIdList)
  
})

//
let nameListaImport: object
let descriptListImport: object
let idListImport: object
let datafilmeImport: any
let nameFilmesImport: string[]

async function pegarLista() {
  let listId = (document.getElementById('inputId') as HTMLInputElement).value
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })

  let objetoListImport: any = result

  nameListaImport = objetoListImport.name
  descriptListImport = objetoListImport.description
  idListImport = objetoListImport.id
  datafilmeImport = objetoListImport.items
  nameFilmesImport = [ ]

}

const BimportList = document.getElementById('pegandoLista')
const importLista = document.getElementById('importList')!

BimportList?.addEventListener('click', async () => {
  const getList = await pegarLista()
  let lista = document.getElementById('lista')
  
  for (let item of datafilmeImport) {
   
    let j =  datafilmeImport.length - 1
    console.log(j)

    for(let i = 0; (i + j) < datafilmeImport.length; i++){
      nameFilmesImport.push(item.original_title)

    }

  }
  const item = document.createElement('div')
  
  item.innerHTML = `
     <h1>nome: ${nameListaImport} id: ${idListImport}  </h1>
     <p>descrição: ${descriptListImport} </p>
     <ul id="lista"></ul>
    `
    document.getElementById('importList')?.appendChild(item)


  for(let i = 0; i < nameFilmesImport.length; i++){
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(nameFilmesImport[i]))
    lista?.appendChild(li)
    document.getElementById('importList')?.appendChild(li)
  }

})
