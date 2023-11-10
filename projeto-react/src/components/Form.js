import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(password);
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
     <div>
        <h1>Meu Cadastro</h1>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input id="name" name="name" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Senha: </label>
                <input id="password" name="password" type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" onClick={cadastrarUsuario}/>
            </div>
        </form>
     </div>   
    )
}

export default Form