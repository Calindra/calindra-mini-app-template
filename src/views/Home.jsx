<Window>
  <View>
    <View padding="medium"
      borderColor='primary-900'
      borderBottomWidth='hairline'
      direction='row'
    >
      <Touchable onPress={() => CFF.navigation.back()}>
        <Icon icon='left-previous' />
      </Touchable>
      <View direction='column' justify='center'>
        <View marginBottom='nano'>
          <Text
            textAlign='center'
            fontSize="medium" fontWeight="bold">Seu primeiro mini-app</Text>
        </View>
      </View>
      <Icon icon='fav-outline' />
    </View>
    <View padding="medium">
      <Image src={require("../assets/images/logotipo.svg")} />
      <View marginBottom='large' marginTop='small'>
        <Text fontWeight='bold' fontSize='extra-large'>Olá seja bem-vindo</Text>
      </View>
      <View marginBottom='small'>
        <Text fontSize='medium'>Este é um exemplo do seu mini-app pronto para começar.</Text>
      </View>
      <View marginBottom='small'>        
        <Text fontSize='medium'>Também é possível utilizar funções serverless. Experimente acessando logo abaixo:</Text>
      </View>
      <View marginBottom='nano'>
      <Button label="Testar serverless" onPress={() => { CFF.navigation.navigate({path: '/ServerlessExample'}) }} />
      </View>
    </View>
  </View>
</Window>
