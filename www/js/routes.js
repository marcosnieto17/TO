angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('terapiaOcupacionalUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/terapiaOcupacionalUNLaR.html',
    controller: 'terapiaOcupacionalUNLaRCtrl'
  })

  .state('terapiaOcupacionalUNLaR.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.4AO', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.5AO', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.extracurriculares', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/extracurriculares.html',
        controller: 'extracurricularesCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorADeLaTerapiaOcupacionalI', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorADeLaTerapiaOcupacionalI.html',
        controller: 'teorADeLaTerapiaOcupacionalICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.anatomA', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anatomA.html',
        controller: 'anatomACtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.fisiologA', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fisiologA.html',
        controller: 'fisiologACtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.psicologAGeneral', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologAGeneral.html',
        controller: 'psicologAGeneralCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ocupacionesTerapUticasI', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocupacionesTerapUticasI.html',
        controller: 'ocupacionesTerapUticasICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.biomecNica', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/biomecNica.html',
        controller: 'biomecNicaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ocupacionesTerapUticasII', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocupacionesTerapUticasII.html',
        controller: 'ocupacionesTerapUticasIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorADeLaTerapiaOcupacionalII', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorADeLaTerapiaOcupacionalII.html',
        controller: 'teorADeLaTerapiaOcupacionalIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.clNicaMDica', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaMDica.html',
        controller: 'clNicaMDicaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.psicologADelDesarrollo', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologADelDesarrollo.html',
        controller: 'psicologADelDesarrolloCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.neurologA', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neurologA.html',
        controller: 'neurologACtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ocupacionesTerapUticasIII', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocupacionesTerapUticasIII.html',
        controller: 'ocupacionesTerapUticasIIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ortesisYAyudasTCnicas', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ortesisYAyudasTCnicas.html',
        controller: 'ortesisYAyudasTCnicasCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ortopedia', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ortopedia.html',
        controller: 'ortopediaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ocupacionesTerapUticasIV', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocupacionesTerapUticasIV.html',
        controller: 'ocupacionesTerapUticasIVCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorADeLaTerapiaOcupacionalIII', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorADeLaTerapiaOcupacionalIII.html',
        controller: 'teorADeLaTerapiaOcupacionalIIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.psiquiatrAClNica', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psiquiatrAClNica.html',
        controller: 'psiquiatrAClNicaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.psicologADeLaPersonalidad', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologADeLaPersonalidad.html',
        controller: 'psicologADeLaPersonalidadCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.prCticaProfesionalI', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaProfesionalI.html',
        controller: 'prCticaProfesionalICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.ocupacionesTerapUticasV', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocupacionesTerapUticasV.html',
        controller: 'ocupacionesTerapUticasVCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.psiquiatrAInfantil', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psiquiatrAInfantil.html',
        controller: 'psiquiatrAInfantilCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.dinMicaDeGrupo', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dinMicaDeGrupo.html',
        controller: 'dinMicaDeGrupoCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.prCticaProfesionalII', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaProfesionalII.html',
        controller: 'prCticaProfesionalIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.operacionesTerapUticasVI', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/operacionesTerapUticasVI.html',
        controller: 'operacionesTerapUticasVICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorADeLaTerapiaOcupacionalIV', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorADeLaTerapiaOcupacionalIV.html',
        controller: 'teorADeLaTerapiaOcupacionalIVCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.pedagogAGeneralYEspecial', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedagogAGeneralYEspecial.html',
        controller: 'pedagogAGeneralYEspecialCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.prCticaProfesionalIII', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaProfesionalIII.html',
        controller: 'prCticaProfesionalIIICtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.fundamentosDeAntropologAYSociologA', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosDeAntropologAYSociologA.html',
        controller: 'fundamentosDeAntropologAYSociologACtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.estadStica', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadStica.html',
        controller: 'estadSticaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.prCticaProfesionalIV', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaProfesionalIV.html',
        controller: 'prCticaProfesionalIVCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorADeLaTerapiaOcupacionalV', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorADeLaTerapiaOcupacionalV.html',
        controller: 'teorADeLaTerapiaOcupacionalVCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.administraciNYPolTicaEnSalud', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/administraciNYPolTicaEnSalud.html',
        controller: 'administraciNYPolTicaEnSaludCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.teorAYMetodologADeLaInvestigaciN', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorAYMetodologADeLaInvestigaciN.html',
        controller: 'teorAYMetodologADeLaInvestigaciNCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.trabajoFinal', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.pruebaDeSuficienciaEnInglS', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pruebaDeSuficienciaEnInglS.html',
        controller: 'pruebaDeSuficienciaEnInglSCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.expresiNOralYEscrita', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.informTicaAplicada', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTicaAplicada.html',
        controller: 'informTicaAplicadaCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('terapiaOcupacionalUNLaR.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});