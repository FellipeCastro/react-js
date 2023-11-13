function Saudacao({nome}) {
    function gerarSaudacao(algunNome) {
        return `Olá, ${algunNome}, Tudo Bem?`
    }
    
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )

}

export default Saudacao