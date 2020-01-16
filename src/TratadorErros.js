import PubSub from 'pubsub-js';

export default class TratadorErros {
    publicaErros(erros) {
        console.log('erros');
        console.log(erros);
        for (let i = 0; i < erros.errors.length; i++) {
            const erro =erros.errors[i];
            PubSub.publish('erro-validacao', erro);
            
        }

    }

}