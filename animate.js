const app = new Vue ({
el: '#app',
data: {
    valor: '',
    cursos: [],
    titulo: "",
    time: ""
},


computed: {
    totalTime(){

        if (this.cursos.length === 0) {
            return 0
          }
          else {
            let suma = 0
            this.cursos.forEach((cursos) => {
              suma = parseInt(suma) + parseInt(cursos.time)
            })
            
            return suma
          }
        
    }
},
  
methods: {

    addCourse(){
        
        var curso = {titulo: this.titulo, time: this.time}
        this.cursos.push(curso);
        console.log(curso);
        this.titulo = "";
        this.time = "";
       
    },

    showcursos(){
           if(this.cursos.length == 0)
           {return true}
    }
}

})