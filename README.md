
# Do-it

Uma aplicação feita ajudar os usuários a criar e gerir seus hábitos

#
### Layout Desktop

![Sign-in-Desktop](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/signin-desktop.png?raw=true)

![Register-Desktop](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/register-desktop.png?raw=true)

![Tasks-Desktop](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/tasks-desktop.png?raw=true)

![First-Task-Desktop](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/create-first-task-desktop.png?raw=true)

### Layout Mobile

![Sign-in-mobile](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/signin-mobile.png?raw=true)

![Register-mobile](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/register-mobile.png?raw=true)

![Tasks-mobile](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/tasks-mobile.png?raw=true)

![First-Task-mobile](https://github.com/gustavool1/do-it/blob/main/src/assets/app-design/create-first-task-mobile.png?raw=true)



## Tecnologias utilizadas
- TypeScript
- Chakra UI
- Axios 
- React-hook-form
- Yup


# Como executar o projeto

## Front end

``` bash
# Clone o repositório
git clone https://github.com/gustavool1/do-it.git front

# Entre na raiz do diretório 
cd front

# Criar o container docker
sudo docker build -t do-it . 

# Agora só rodar o container criado previamente
sudo docker run -p 3000:3000 do-it

Pronto, agora o projeto já está rodando na porta 3000 !
```