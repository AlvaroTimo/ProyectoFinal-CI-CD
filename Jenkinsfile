pipeline {
  agent any
  tools {
    nodejs "node"
  }

  stages {
    stage('Repository'){
      steps{
        git branch:'desarrollo',url: 'https://github.com/AlvaroTimo/ProyectoFinal-CI-CD.git'
      }
    }

    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'node'){
          sh 'npm install'
        }
      }
    }
    stage('Test'){
      steps {
        sh 'npm run test'
      }
    }
    stage('Static Analysis') {
      {
        steps{
          dir ('/Users/eltimo/Documents/sonarqube/bin/macosx-universal-64'){
            sh "./sonar.sh start"
          }
        }
      }
    }
  }
}