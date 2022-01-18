pipeline {
  agent any
  tools {
    nodejs "node"
  }
//   environment (
//     AWS_ACCESS_KEY_ID = credentials('aws-auth')
//     AWS_SECRET_ACCESS_KEY= credentials('aws-auth')
//   }
  stages {
//     stage ('cleanup') {
//       steps {
//         writeFile file: 'cleanup.sh', text:
//         "rm -rf /var/lib/jenkins/workspace/what-front_dev/"
//         sh 'bash cleanup.sh'
//       }
//     }
//     stage ('scm') {
//       steps {
//         git url: 'https://github.com/dmytrozuyenko/what-front.git'
//       }
//     }
    stage('build') {
      steps {
        sh 'npm install'
//         sh 'npm test'
        sh 'pwd'
        sh 'ls -alh'
        sh 'echo "/*\n!dist/*" > .npmignore'
        sh 'cat .npmignore'
        sh 'npm run build'
        sh 'pwd'
        sh 'ls -alh'
        sh 'cat package.json'
//         sh 'npm version patch -no-git-tag-version --force'
// //         sh 'echo -e "registry=http://34.132.98.95:8081/repository/what-front/:always-auth=true\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" >> .npmrc'
        sh 'echo "registry=http://34.132.98.95:8081/repository/what-front/\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" > .npmrc'
        sh 'cat .npmrc'
//         sh 'echo -e "//34.132.98.95:8081/:_password:6gYv6xC5" >> .npmrc'
//         sh 'echo "//34.132.98.95:8081/:username:admin" >> .npmrc'
//         sh 'echo "//34.132.98.95:8081/:email:d.zuyenko@gmail.com" >> .npmrc'
//         sh 'echo "//34.132.98.95:8081/:always-auth=false" >> .npmrc'
//         sh 'npm config set _auth NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8'
//         sh 'echo -e 'admin\n6gYv6xC5\nd.zuyenko@gmail.com' | npm login -e d.zuyenko@gmail.com -r http://34.132.98.95:8081/repository/what-front'
//         sh 'rm .npmrc'
        sh 'npm install -g npm-cli-login'
        sh 'npm-cli-login -r http://34.132.98.95:8081/repository/what-front/ -u user -p 2XpMULmX -e d.zuyenko@gmail.com'
        sh 'npm publish --registry http://34.132.98.95:8081/repository/what-front/'
        sh 'ls -alh'
      }
    }
// Working:
    
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
//         sh 'wget -O build.tgz --user admin --password 6gYv6xC5 http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz'
        
//         sshagent(credentials: ['sonatype-nexus_admin']) {
//         sh('scp http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz /var/lib/jenkins/workspace/what-front_dev/build-what-1.0.0.tgz')
// //          sudo scp -i ~/Projects/SoftServe/task/security/softserve-task /home/dmytro/Projects/SoftServe/task/nginx/what-front.conf  dmytrozuyenko@35.209.108.208:/home/dmytrozuyenko/what-front/nginx/
//         }
//       }  
//     }
    
    // Install sshpass???
    
//     stage('Example') {
//       steps {
//         withCredentials([usernamePassword(credentialsId: 'dmytrozuyenko-gcp', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
//           sh 'ssh dmytrozuyenko@35.206.94.245 "pwd"'
//           sh 'scp http://34.132.98.95:8081/repository/what-front/what/-/what-1.0.0.tgz dmytrozuyenko@35.206.94.245:/home/dmytrozuyenko/what-front/'
//         }
//       }
//     }

  // Waiting to input PassPhrase
//        stage('Example') {
//          steps {
//            withCredentials([sshUserPrivateKey(credentialsId: "ssh-key-gcp", keyFileVariable: 'keyfile')]) {
//              sh 'ssh dmytrozuyenko@35.206.94.245 "pwd"'
//              sh 'scp -i ${keyfile} /var/lib/jenkins/workspace/what-front_dev/build.tgz dmytrozuyenko@35.206.94.245:/home/dmytrozuyenko/what-front/dist/'
//            }
//          }  
//        }
 // Hanging too
//        stage('Example') {
//          steps {
//            sshagent(['ssh-key-gcp']) {
//              sh 'scp /var/lib/jenkins/workspace/what-front_dev/what-1.0.0.tgz dmytrozuyenko@35.209.108.208:/home/dmytrozuyenko/what-front/dist/'
//            }
//          }  
//        }
    
    
//        stage('deploy') {
//          steps {
//            withCredentials([[
//              $class: 'AmazonWebServicesCredentialsBinding',
//              credentialsId: "aws-auth",
//              accessKeyVariable: 'AWS_ACCESS_KEY_ID',
//              secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
//              sh 'scp /var/lib/jenkins/workspace/what-front_dev/build.tgz ubuntu@3.144.93.224:/home/ubuntu/what-front/dist'
//            }
//          }
//        }
    
    // Permission denied
//        stage('Example') {
//          steps {
// //            withCredentials([sshUserPrivateKey(credentialsId: "aws-key", keyFileVariable: 'keyfile')]) {
// //              sh 'scp -i ${keyfile} /var/lib/jenkins/workspace/what-front_dev/build.tgz ubuntu@3.144.93.224:/home/ubuntu/what-front/dist'
//              sh 'ssh -i /var/lib/jenkins/.ssh/SoftServe-Task.pem ubuntu@3.144.93.224 "pwd"' 
// //            }
//          }
//        }
         
        stage('deploy') {
          steps {
            withCredentials([sshUserPrivateKey(credentialsId: "aws-key", keyFileVariable: 'keyfile')]) {
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "pwd"'
              sh 'scp -i ${keyfile} /var/lib/jenkins/workspace/what-front_dev/build.tgz ubuntu@3.144.93.224:/home/ubuntu/what-front/dist/'
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "tar zxvf /home/ubuntu/what-front/dist/build.tgz -C /home/ubuntu/what-front/dist/"'
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "ls -alh /home/ubuntu/what-front/dist/"'
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "cp -R /home/ubuntu/what-front/dist/package/dist/ /home/ubuntu/what-front/"'
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm -rf /home/ubuntu/what-front/dist/package/"'
              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "rm /home/ubuntu/what-front/dist/build.tgz"'
//               writeFile(file: 'what-front.conf', text: "server {\nlisten 80;\nlisten [::]:80;\n\nroot /var/www/what-front;\nindex index.html index.htm index.js;\n\nlocation / {\ntry_files $uri /index.html;\n}\n}")
//               sh 'cat /var/lib/jenkins/workspace/what-front_dev/what-front.conf'
             sh 'scp -i ${keyfile} /var/lib/jenkins/userContent/what-front.conf ubuntu@3.144.93.224:/home/ubuntu/what-front/nginx/'
//              sh 'ssh -i ${keyfile} ubuntu@3.144.93.224 "  'docker run -it -p 8080:80 --name what-front -v /home/dmytrozuyenko/what-front/nginx/what-front.conf:/etc/nginx/conf.d/default.conf -v /home/dmytrozuyenko/what-front/dist/:/var/www/what-front/ nginx:latest"
            }
          }  
        }
    
//     stage('publish') { 
//       steps {
//         sh 'echo -e "registry=http://34.132.98.95:8081/repository/what-front-group/\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" >> .npmrc'
//         writeFile file: 'publish.sh', text:
//         "sed -i 's/"index.js",/"index.js", "publishConfig":{"registry": "http:\/\/34.132.98.95:8081\/repository\/what-front\/"},/' package.json"
//         sh 'bash publish.sh'
//         sh 'ls -alh'
//         sh 'npm version patch'
//         sh 'npm pack'
//         sh 'ls -alh'
//       }
//     }
  }
}
//     
//         writefile file: 'publish.sh', text:
//           'echo -e "registry=http://34.132.98.95:8081/repository/what-front-group/\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" >> .npmrc'
//           "sed -i 's/"index.js",/"index.js", "publishConfig":{"registry": "http://34.132.98.95:8081/repository/what-front/"},/' package.json"
//           "sed -i 's/"browserslist":/"files": ["dist"],  "browserslist":/' package.json"  
//           "npm version patch"
//           "npm publish"
//           sh 'bash publish.sh'
//       }
//     }
//     stage ('clone-sources') {
//       steps {
//         git url: 'https://github.com/dmytrozuyenko/what-front.git'
//       }
//     }
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
//     stage ("quality-gate") {
//        steps {
//            waitForQualityGate abortPipeline: true
//        }
//      }  

