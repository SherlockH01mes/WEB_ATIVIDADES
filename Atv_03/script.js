const fetchCepData = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro na consulta do CEP:", error);
        throw new Error("Erro ao consultar a API");
    }
};

const displayResult = (data) => {
    const resultDiv = document.getElementById('result');

    if (data.erro) {
        resultDiv.innerHTML = "<p style='color:red;'>CEP inválido.</p>";
    } else {
        resultDiv.innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Logradouro:</strong> ${data.logradouro || "Não disponível"}</p>
            <p><strong>Bairro:</strong> ${data.bairro || "Não disponível"}</p>
            <p><strong>Cidade:</strong> ${data.localidade || "Não disponível"}</p>
            <p><strong>Estado:</strong> ${data.uf || "Não disponível"}</p>
        `;
    }
};

const isValidCep = (cep) => /^[0-9]{8}$/.test(cep);

document.getElementById('search-btn').addEventListener('click', () => {
    const cepInput = document.getElementById('cep-input').value.trim();

    if (isValidCep(cepInput)) {
        fetchCepData(cepInput)
            .then(data => displayResult(data))
            .catch(error => {
                document.getElementById('result').innerHTML = `<p style='color:red;'>Erro ao consultar CEP. Tente novamente.</p>`;
                console.error(error);
            });
    } else {
        document.getElementById('result').innerHTML = "<p style='color:red;'>Digite um CEP válido (8 dígitos).</p>";
    }
});
