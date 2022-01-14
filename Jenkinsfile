pipeline {
  agent any
  tools {
    nodejs "node"
  }
  stages {
    stage ('clone-sources') {
      steps {
        git url: 'https://github.com/dmytrozuyenko/what-front.git'
      }
    }
    stage('build') {
      steps {
        sh 'npm install'
        sh "echo -e '/*\n!dist/*' > .npmignore"
        sh 'npm run build'
//         script {
//           writefile(file: 'build.sh', text:
//           "npm install\nnpm run build")
//           sh 'npm test'
//           sh 'bash build.sh'
//         }
      }
    stage('publish') { 
      steps {
        sh 'echo -e "registry=http://34.132.98.95:8081/repository/what-front-group/\n_authToken=NpmToken.509dae5d-ce59-3972-9008-e89b3330aef8" >> .npmrc'
//        sh "echo -e ', "publishConfig":{"registry": "http://34.132.98.95:8081/repository/what-front/"}'"
      }
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
}
