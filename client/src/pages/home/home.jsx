/*connected component -as it dispatches action to hydrated product state
and acces those products*/
//note:products is an array
import React,{Component} from 'react'

//importing action to connect to the component
import { fetchProducts } from '../../store/actions/products'
//importing the Products component
import Products from '../../components/products/products'

import {connect} from 'react-redux'

class Home extends Component{
   componentDidMount(){
       let cred=this.props.cred
       console.log(cred.accessToken)
      this.props.fetchProducts(cred.accessToken);
    }

    render(){
        return(
            <main>
                <Products products={this.props.products}/>
            </main>
            
        )
    }
}

const mapStateToProps=(state)=>({
    products:state.products,
    cred:state.cred
}
)

//exporting connected/subscribed component
export default connect(mapStateToProps,{fetchProducts})(Home);


