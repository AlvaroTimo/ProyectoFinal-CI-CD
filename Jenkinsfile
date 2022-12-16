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
        git branch:'main',url: 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD.git'
        nodejs(nodeJSInstallationName: 'node'){
          sh 'npm install'
        }
      }
    }
    stage('Test'){
      steps {
        git branch:'main',url: 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD.git'
        sh 'npm run test'
      }
    }
    stage('Static Analysis'){
      steps {
        sh 'npm run sonar'
      }
    }
  }
}