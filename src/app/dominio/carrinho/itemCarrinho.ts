import { Livro } from '../livro/livro';

export class ItemCarrinho {

    constructor(
        public livro: Livro,
        public quantidade: number,
    ) {
    }

}
