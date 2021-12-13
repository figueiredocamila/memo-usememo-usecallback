# Quando utilizar?

## Memo

Vale a paena utilizar o memo nas seguintes situações:

1. Pure functional components: quando os dados recebidos dependem exclusivamente de dados enviados por propiedades. Não é recomendado utilizar quando o componente utiliza de dados externos para funcionar, como por exemplo countdown ou a largura da tela do usuário.

2. Renders too often: quando o componente precisa ser renderizado várias vezes, atualizando o estado muitas vezes, como por exemplos inputs.

3. Re-renders with same props: quando os componente é renderizado várias vezes recebendo as mesmas propriedades.

4. Medium or big sizes: é interessante utilizar o memo em componentes que contem bastante funcionalidades. Em componentes pequenos o memo acaba sendo menos performatico que o algoritimo de reconciliação do React.

## useMemo

1. Evitar re-cálculos complexos

2. Resolver problemas de igualdade referencial

## useCallback

1. Resolver problemas de igualdade referencial
