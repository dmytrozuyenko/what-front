pipeline {
  agent any
  tools {
    nodejs "node"
  }
  stages {
//     stage ('cleanup') {
//       steps {
//         writeFile file: 'cleanup.sh', text:
//         "rm -rf /var/lib/jenkins/workspace/what-front_dev/"
//         sh 'bash cleanup.sh'
//       }
//     }
//     stage ('clone-sources') {
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
        sh 'npm run build'
        sh 'pwd'
        sh 'ls -alh'
        sh 'cat package.json'
        sh 'npm version patch -no-git-tag-version --force'
//         sh 'echo -e "registry=http://34.132.98.95:8081/repository/what-front-group/:always-auth=true\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" >> .npmrc'
        sh 'echo -e "@what:registry=http://34.132.98.95:8081/repository/what-front/" >> .npmrc'
        sh 'echo -e "unsafe-perm=true"'
        sh 'echo -e "//34.132.98.95:8081/:_password:6gYv6xC5" >> .npmrc'
        sh 'echo "//34.132.98.95:8081/:username:admin" >> .npmrc'
        sh 'echo "//34.132.98.95:8081/:email:d.zuyenko@gmail.com" >> .npmrc'
        sh 'echo "//34.132.98.95:8081/:always-auth=false" >> .npmrc'
        sh 'npm publish --access=public'
        sh 'ls -alh'
      }
    }  
    post {
      success {
        script {
          def scannerHome = tool 'sonarqube';
          withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=what-front"
          }
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

