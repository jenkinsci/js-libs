pipeline {
  agent { docker 'maven:3.2-jdk-7-onbuild' }
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