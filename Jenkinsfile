pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t meu-app:${BUILD_NUMBER} .'
                sh 'docker tag meu-app:${BUILD_NUMBER} meu-app:latest'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    docker stop meu-app || true
                    docker rm meu-app || true
                    docker run -d -p 3000:3000 --name meu-app meu-app:latest
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}