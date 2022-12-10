pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Build') {
      steps {
        git 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD'
        sh 'npm install'
      }
    }
  }
}