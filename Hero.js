class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const meuHeroi = new Hero('Her�i 1', 30, 'mago');
meuHeroi.atacar();