pipeline {
  agent { docker 'maven:3.5.2-jdk-8' }
  environment {
    HOME = '.'
  }
  stages {
    stage('build') {
      steps {
        checkout scm
        sh 'mvn clean install'
      }
    }
  }
  post {
    always {
      junit '**/target/surefire-reports/*.xml'
    }
  }
}