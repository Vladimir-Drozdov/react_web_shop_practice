import Header from "./components/Header"
import Footer from "./components/Footer"
import  React from 'react';
import Items from './components/Items'
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[

      ],
      items:[
        {
          id:1,
          title:'Стул серый',
          img:'chair-grey.png',
          desc:'Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsuma',
          category:'chairs',
          price:'49.99'
        },
        {
          id:2,
          title:'Стол',
          img:'table.png',
          desc:'Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum',
          category:'tables',
          price:'149.99'
        },
        {
          id:3,
          title:'Диван',
          img:'sofa.png',
          desc:'Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum',
          category:'sofa',
          price:'12.99'
        },
        {
          id:4,
          title:'Дампа',
          img:'lamp.png',
          desc:'Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum',
          category:'light',
          price:'78.99'
        },
        {
          id:5,
          title:'Настенный свет',
          img:'wall_light.png',
          desc:'Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum',
          category:'light',
          price:'59.99'
        }
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.state.currentItems=this.state.items
    this.onShowItem=this.onShowItem.bind(this)

  }
  render(){  
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder}/>}
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer/>
      </div>
    )
  }
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems:this.state.items.filter(el=>el.category===category)
    })
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=>el.id!==id)})
  }
  addToOrder(item){
    let isInArray=false
    this.state.orders.forEach(el=>{
      if(el.id===item.id){
        isInArray=true
      }
        
    })
    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]})
    }    
  }
}

export default App;
