pipeline {
    agent any

    environment {
        IMAGE_NAME = 'yourdockerhubusername/urx-app'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/urxismrx/urx-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}

