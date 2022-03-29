import { createStore } from 'vuex'

export default createStore({
  state: {
  Npersonas:0,
  Nombre:"",
  Email:"",
  Tel:"",
  Sabor:"",
  Cubierta:"",
  Decoracion:"",
  Decoracion1:"",
  Decoracion2:"",
  },
  getters: {
    Npersonas(state) {
      return state.Npersonas;
    },
    Nombre(state) {
      return state.Nombre;
    },
    Email(state) {
      return state.Email;
    },
    Tel(state) {
      return state.Tel;
    },
    Sabor(state) {
      return state.Sabor;
    },
    Cubierta(state) {
      return state.Cubierta;
    },
    Decoracion(state) {
      return state.Decoracion;
    },
    Decoracion1(state) {
      return state.Decoracion1;
    },
    Decoracion2(state) {
      return state.Decoracion2;
    }
  },
  mutations: {
    Npersonas(state,Npersonas){
      state.Npersonas=Npersonas;
    },
    Nombre(state,Nombre){
      state.Nombre=Nombre;
    },
    Email(state,Email){
      state.Email=Email;
    },
    Tel(state,Tel){
      state.Tel=Tel;
    },
    Sabor(state,Sabor){
      state.Sabor=Sabor;
    },
    Cubierta(state,Cubierta){
      state.Cubierta=Cubierta;
    },
    Decoracion(state,Decoracion){
      state.Decoracion=Decoracion;
    },
    Decoracion1(state,Decoracion1){
      state.Decoracion1=Decoracion1;
    },
    Decoracion2(state,Decoracion2){
      state.Decoracion2=Decoracion2;
    }
  },
  actions: {
    Npersonas({commit}, Npersonas) {
      commit("Npersonas", Npersonas);
    },
    Nombre({commit},Nombre) {
      commit("Nombre", Nombre);
    },
    Email({commit},Email) {
      commit("Email", Email);
    },
    Tel({commit},Tel) {
      commit("Tel", Tel);
    },
    Sabor({commit},Sabor) {
      commit("Sabor",Sabor);
    },
    Cubierta({commit},Cubierta) {
      commit("Cubierta",Cubierta);
    },
    Decoracion({commit},Decoracion) {
      commit("Decoracion",Decoracion);
    },
    Decoracion1({commit},Decoracion1) {
      commit("Decoracion1",Decoracion1);
    },
    Decoracion2({commit},Decoracion2) {
      commit("Decoracion2",Decoracion2);
    }
  },
  modules: {
  }
})
