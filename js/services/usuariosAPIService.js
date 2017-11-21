angular.module("receitasFamilia").service("usuarioAPI",function($http, config){   

    this.postCadastrarUsuario = function(usuario){
        return $http.post(config.baseUrl +"/profile/?format=json",usuario);
    };         
    this.postLogin = function(username, password){       
        return $http.post(config.baseUrl +"/login/",{username: username, password:password});
    };   
});
