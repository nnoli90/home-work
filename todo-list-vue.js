new Vue({
    el:'#app',
    data:{
     me: true,
        
        todo: [
        {
        id: 1,
        title: 'wash clothes',
        status: false
    },

    {
        id: 2,
        title: 'spread clothes',
        status: false
    },

    {
        id:3,
        title: 'fold clothes',
        status: false
    }],
    
    completed_todo:[],
    
    uncompleted_todo:[],
    
    title:"",
    show:0
    
    },

    methods:{
     addtodo:function () {
         if(this.title !="")
        { this.todo.push({
            id: this.todo.length +1,
            title: this.title,
            status: false,
            
        }
        
        )

        }
        this.title =""

     },

     deletetodo:function(todo) {
        this.todo.splice(this.todo.indexOf(todo), 1)
        
     

       
      },

       deletecompleted:function(todo) {
        this.completed_todo.splice(this.completed_todo.indexOf(todo), 1)
        
     

       
       },

       deleteuncompleted:function(todo) {
        this.uncompleted_todo.splice(this.uncompleted_todo.indexOf(todo), 1)
        
     

       
       }, 
     completed:function () {

        this.show = 1 ;
        this.completed_todo.splice(0,this.completed_todo.length);
      
        for (let index = 0; index < this.todo.length; index++) {
            
             if((this.todo[index].status == true))
             {
                 this.completed_todo.push(this.todo[index])
             }
            
        }          
     
      },

       uncompleted:function () {

        this.show = 2;
        this.uncompleted_todo.splice(0,this.uncompleted_todo.length);
      
        for (let index = 0; index < this.todo.length; index++) {
            
             if(!(this.todo[index].status == true))
             {
                 this.uncompleted_todo.push(this.todo[index])
             }
            
        }          
        }
    },

    computed:{
      compClasses:function () {
          return{
              available:this.available,
              nearby:this.nearby
          }
          
      }
    }

})