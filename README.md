## => DEPLOY

Loja Android
com o windows conseguimos subir o app na loja

Loja Apple
alugando maquina apple na internet consegue subir o app na loja


## => FORMAS DE CRIAR UM PROJETO

- Expo CLI( forma mais simples )
- RN CLI ( completo  )

-- EXPO SNACK 
https://snack.expo.dev/


## => INSTALAÇÃO
npx expo
npx crate-expo-app  --template 
blank typescript
nome do app(primary-app)

## => RODAR

- cd primary-app   DEPOIS npx expo ou npx expo start ou npx expo start --tunnel
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

-- baixar o aplicativo no celular expo go

## => INSTALAÇÃO VIA CLI
- windows > android
--https://reactnative.dev/docs/environment-setup?guide=native



## => Tags
- <View> semelhante <div>
- <Text> semelhante <p>
- <SafeAreView> deixa o conteudo IOS abaixo dos icones nativo do sistema IOS
- <Pressable> deixa todo o bloco clicavel, ou criar um button do jeito que eu quiser. 
-- temos 3 tipo de event: onPress( quando clicar), onPressOut(quando solta o clique), onLongPress(quando fica segurando o click com mais de 500ms), dentro do ultimo podemos deixar mais longo o tempo delayLongPress={1000}
- <TouchableHighlight> - no clique ele destaca a area, pode mudar a cor do destaque passando a prop: underlayColor="#ff0000", OBS: não aceita na tag button
- <Touchopacity> - no clique ele destaca a area, podemos controlar a opacidade, activeOpacity
- <TouchableWithoutFeedBack> - não é utilizado.


## => Problem cache 
- npm start --clean-cache
- npx react-native doctor `verifica oq está com problema`