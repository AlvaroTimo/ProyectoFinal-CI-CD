pipeline {
  agent any
  tools {
    nodejs "node"
  }

  parameters{
    string(name: 'container_name',defaultValue:'pagina_web',description: 'Nombre del contenedor de docker.')

    string(name:'image_name',defaultValue:'pagina_img',description:'Nombre de la imagen docker.')

    string(name:'tag_name',defaultValue:'lts',description:'Tag de la imagen de la página.')

    string(name:'container_port',defaultValue:'80',description:'Puerto que usa el contenedor')
  }

  stages {
    stage('Build') {
      steps {
        script {
          try {
            sh 'docker stop ${container_name}'
            sh 'docker rm ${container_name}'
            sh 'docker rmi ${image_name}:${tag_image}'
          } catch (Exception e) {
            echo 'Exception occurred: ' + e.toString()
          }
        }
        git branch:'main',url: 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD.git'
        sh 'npm install'
        sh 'docker build -t ${image_name}:${tag_image} .'
      }
    }
    stage('Test'){
      steps {
        git branch:'main',url: 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD.git'
        sh 'npm run test'
      }
    }


  }
}