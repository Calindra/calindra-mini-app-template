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
      <View marginBottom='large' marginTop='small'>
        <Text fontWeight='bold' fontSize='extra-large'>Teste serverless</Text>
      </View>
      <View marginBottom='small'>
        <Text fontSize='medium'>A mensagem abaixo foi realizada através de um processo em back-end.</Text>
      </View>
      <View marginBottom='small'>
        <Text fontSize='medium'>{this.state.helloMessage}</Text>
      </View>
    </View>
  </View>
</Window>
