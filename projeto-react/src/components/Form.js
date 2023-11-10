function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuário cadastrado!`)
    }

    return (
     <div>
        <h1>Meu Cadastro</h1>
        <form>
            <div>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" onClick={cadastrarUsuario}/>
            </div>
        </form>
     </div>   
    )
}

export default Form