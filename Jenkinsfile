pipeline {
  agent any
  tools {
    nodejs "node"
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
//         sh 'npm test'
        sh 'echo "/*\n!dist/*" > .npmignore'
        sh 'npm run build'
      }  
    }
    
//         sh 'npm version patch -no-git-tag-version --force'
        
    stage('publish') { 
      steps {
        withCredentials([string(credentialsId: 'sonarqube-token', variable: 'token')]) {
          sh 'echo "registry=http://34.132.98.95:8081/repository/what-front/\n_authToken=${token}" > .npmrc'
        }
        sh 'cat .npmrc'
        sh 'npm install -g npm-cli-login'
////        withCredentials([usernamePassword(credentialsId: 'sonatype-nexus_user', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
////          sh 'wget -O build.tgz --user &{USER} --password &{PASS} http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz'
////       }
        sh 'npm-cli-login -r http://34.132.98.95:8081/repository/what-front/ -u user -p 2XpMULmX -e d.zuyenko@gmail.com'
        sh 'npm publish --registry http://34.132.98.95:8081/repository/what-front/'
      }
    }
    
//     stage('sonarqube-analysis') {
//       steps {
//         script {
//           def scannerHome = tool 'sonarqube';
//           withSonarQubeEnv('sonarqube') {
//             sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=what-front"
//           }
//         }
//       }
//     }
//      stage("Quality Gate") {
//        steps {
// //          timeout(time: 1, unit: 'HOURS') {
//            waitForQualityGate abortPipeline: true
// //          }
//        }
//      }
    
// In progress.    
//     stage('pull') { 
//       steps {
////       withCredentials([usernamePassword(credentialsId: 'sonatype-nexus_admin', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
////          sh 'wget -O build.tgz --user &{USER} --password &{PASS} http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz'
////       }
//         sh 'wget -O build.tgz --user admin --password 6gYv6xC5 http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz'
//       }  
//     }
     
//     stage('deploy') {
//       steps {
//         withCredentials([sshUserPrivateKey(credentialsId: "aws-key", keyFileVariable: 'keyfile')]) {
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "docker rm -f what-front"'
//           sh 'scp -i ${keyfile} /var/lib/jenkins/workspace/what-front_dev/build.tgz ubuntu@3.144.93.224:/home/ubuntu/what-front/dist/'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "tar zxvf /home/ubuntu/what-front/dist/build.tgz -C /home/ubuntu/what-front/dist/"'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "ls -alh /home/ubuntu/what-front/dist/"'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "cp -R /home/ubuntu/what-front/dist/package/dist/ /home/ubuntu/what-front/"'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm -rf /home/ubuntu/what-front/dist/package/"'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm /home/ubuntu/what-front/dist/build.tgz"'
// //               writeFile(file: 'what-front.conf', text: "server {\nlisten 80;\nlisten [::]:80;\n\nroot /var/www/what-front;\nindex index.html index.htm index.js;\n\nlocation / {\ntry_files $uri /index.html;\n}\n}")
//           sh 'cat /var/lib/jenkins/userContent/what-front.conf'
//           sh 'scp -i ${keyfile} /var/lib/jenkins/userContent/what-front.conf ubuntu@3.144.93.224:/home/ubuntu/what-front/nginx/what-front.conf'
//           sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "docker run -d -p 8080:80 --name what-front -v /home/ubuntu/what-front/nginx:/etc/nginx/conf.d -v /home/ubuntu/what-front/dist:/var/www/what-front nginx:latest"'
//         }
//       }  
//     }
  }
}
