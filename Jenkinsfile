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
    stage('Tests unitarios'){
      steps {
        sh 'npm run test'
      }
    }
    stage('Tests '){
      steps {
        sh 'npm run test2'
      }
    }
    stage('Static Analysis') {
      environment {
        SCANNER_HOME = tool 'SonarScanner'
      }
      steps {
        withSonarQubeEnv('Sonarqube') {
            sh '$SCANNER_HOME/bin/sonar-scanner -X'
        }
      }
    }
  }
}