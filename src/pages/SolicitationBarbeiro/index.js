import React, {Component} from 'react';

import api from '../../config/api';

class SolicitationBarbeiro extends Component{

    state = {
        solicitacoes : [],
    }

    async componentDidMount(){
        const response = await api.get('/api/solicitations');
        console.log(response.data);
        this.setState({solicitacoes : response.date});
    }

    render(){

        const {solicitacoes} = this.state;

        return(
            <>
            {solicitacoes.map(solicitacao => {
                <li key= {solicitacao.id} ></li>
            })}
            </>
        )
    }
}

export default SolicitationBarbeiro;