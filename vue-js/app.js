//function car(name,model,owner,yers,phone,img){
    //return {
       // name, model,yers,owner,phone,img
   // }
//}
const car=(name,model,owner,yers,phone,img)=>({name,model,owner,yers,phone,img})
const log=(text,type,date=new Date)=>({text,type,date})
const cars=[
    car('ford','fokus','max',2016,'+7 32 4545 5454','img/nk1.jpg'),
    car('ford','mustag','karl',2018,'+7 32 1512 5454','img/nk2.jpg'),
    car('bMW','x7','zar',2020,'+7 4 44455 5444','img/nk3.jpg')
    
]
new Vue({
    el: '#app',
    data: {
        cars:cars,
        car:cars[0],
        selectcarindexs:0,
        phonvit:false,
        search:'',
        modalvi:false,
        logs:[]
},
    methods:{
        selectCar: function(index){
            
            this.car = cars[index]
            this.selectcarindexs=index
        },
        neworder(){
        this.modalvi=false,
        this.logs.push(
        log(`success order:${this.car.name}-${this.car.model}`,`ok`,)
        )
        },
        canselorder(){
            this.modalvi=false,
            this.logs.push(
        log(`cansel order:${this.car.name}-${this.car.model}`,`cnl`)
        )
        },
    },
    computed:{
        phonebtntext(){
            return this.phonvit? 'Hide phon': 'show phon'
        },
        
        filtrcars(){
            
            return this.cars.filter(car=>{
                return car.name.indexOf(this.search) > -1 ||car.model.indexOf(this.search) > -1
            })
           
        }
    },
    filters:{
        date(value){
            return value.toLocaleString()
        }
    }
})