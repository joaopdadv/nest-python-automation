# Projeto NestJS

Este é o projeto [Nome do Projeto]. Siga as instruções abaixo para configurar e rodar o projeto localmente.

## Requisitos

- Node.js instalado
- npm (ou yarn)
- Python instalado
- Ambiente virtual Python (`venv`) configurado

## Passo a Passo

### 1. Instalar Dependências

Após clonar o repositório, navegue até a pasta do projeto e execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

### 2. Configurar Ambiente Virtual Python

Antes de iniciar o servidor, é necessário configurar e ativar o ambiente virtual Python. Você pode criar um novo ambiente ou usar o que já está configurado no projeto.

#### Criar um Novo Ambiente Virtual

Caso você queira criar um novo ambiente virtual, utilize os seguintes comandos:

```bash
python3 -m venv mercoparenv
```

Em seguida, ative o ambiente:

```bash
source mercoparenv/bin/activate
```

#### Instalar Dependências Python

Com o ambiente virtual ativo, instale as dependências necessárias do projeto usando o arquivo `requirements.txt`:

```bash
pip install -r requirements.txt
```

#### Usar o Ambiente Virtual Existente

Se preferir usar o ambiente virtual que já está configurado no projeto, ative-o com o comando:

```bash
source mercoparenv/bin/activate
```

### 3. Rodar o Projeto

Com as dependências instaladas e o ambiente virtual ativo, você pode iniciar o servidor NestJS com o comando:

```bash
nest start
```

### 4. Acessar o Projeto

Após o servidor iniciar, o projeto estará rodando e acessível via [http://localhost:3000](http://localhost:3000) (ou outra porta configurada).

### 5. Considerações Finais

Certifique-se de que todas as dependências estejam instaladas corretamente e o ambiente Python esteja ativo antes de rodar o servidor. Em caso de problemas, verifique as configurações do ambiente virtual e se todas as dependências foram instaladas corretamente.

### 6. Problemas Comuns

Se encontrar problemas ao rodar o projeto, considere verificar os seguintes pontos:

- **Dependências:** Certifique-se de que todas as dependências foram instaladas corretamente com `npm install`.
- **Ambiente Virtual:** Verifique se o ambiente virtual Python está ativado. Use o comando `source mercoparenv/bin/activate` para ativá-lo.
- **Erros de Inicialização:** Verifique os logs de erro ao iniciar o servidor com `nest start` e resolva qualquer problema indicado.

Se o problema persistir, consulte a documentação do NestJS e do ambiente Python ou procure ajuda em fóruns especializados.
