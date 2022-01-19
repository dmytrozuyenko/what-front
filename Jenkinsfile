pipeline {
  agent any
  tools {
    nodejs "node"
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
//         sh 'npm run test'
        sh 'echo "/*\n!dist/*" > .npmignore'
        sh 'npm run build'
      }  
    }
    
    stage('test') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm run test'
        }
      }  
    }
    
//         sh 'npm version patch -no-git-tag-version --force'
        
    stage('publish') { 
      steps {
        withCredentials([string(credentialsId: 'sonatype-nexus_token', variable: 'token')]) {
          sh 'echo "registry=http://34.132.98.95:8081/repository/what-front/\n_authToken=${token}" > .npmrc'
        }
        sh 'npm install -g npm-cli-login'
        withCredentials([usernamePassword(credentialsId: 'sonatype-nexus_admin', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          sh 'npm-cli-login -r http://34.132.98.95:8081/repository/what-front/ -u ${USER} -p ${PASS} -e d.zuyenko@gmail.com'
          sh 'npm publish --registry http://34.132.98.95:8081/repository/what-front/'
          sh 'wget -O build.tgz --user ${USER} --password ${PASS} http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz'
        }
      }
    }
    
    stage('sonarqube-analysis') {
      steps {
        script {
          def scannerHome = tool 'sonarqube';
          withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=what-front"
          }
        }
      }
    }
//     stage("Quality Gate") {
//       steps {
//         timeout(time: 1, unit: 'HOURS') {
//           waitForQualityGate abortPipeline: true
//         }
//       }
//     }

    stage('deploy') {
      steps {
        withCredentials([sshUserPrivateKey(credentialsId: "aws-key", keyFileVariable: 'keyfile')]) {
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "docker rm -f what-front"'
          sh 'scp -i ${keyfile} /var/lib/jenkins/workspace/what-front_dev/build.tgz ubuntu@3.144.93.224:/home/ubuntu/what-front/dist/'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "tar zxvf /home/ubuntu/what-front/dist/build.tgz -C /home/ubuntu/what-front/dist/"'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "ls -alh /home/ubuntu/what-front/dist/"'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "cp -R /home/ubuntu/what-front/dist/package/dist/ /home/ubuntu/what-front/"'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm -rf /home/ubuntu/what-front/dist/package/"'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm /home/ubuntu/what-front/dist/build.tgz"'
          sh 'scp -i ${keyfile} /var/lib/jenkins/userContent/what-front.conf ubuntu@3.144.93.224:/home/ubuntu/what-front/nginx/what-front.conf'
          sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "docker run -d -p 8080:80 --name what-front -v /home/ubuntu/what-front/nginx:/etc/nginx/conf.d -v /home/ubuntu/what-front/dist:/var/www/what-front nginx:latest"'
        }
      }  
    }
  }
}
