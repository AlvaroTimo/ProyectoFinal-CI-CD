const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'ProyectoFinalCI',
	    'sonar.projectKey':'ProyectoFinalCI',
	    'sonar.login': 'admin',
	    'sonar.password': 'Alvarito',
        'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': '.',
       },
}, () => {});