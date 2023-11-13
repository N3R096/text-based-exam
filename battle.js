function createCharacter(name, health = 100) {
    return {
      name,
      health,
      attacks: [
        { skill: "punch", damage: 15 + Math.floor(Math.random() * 10) },
        { skill: "kick", damage: 20 + Math.floor(Math.random() * 10) },
        { skill: "fireball", damage: 25 + Math.floor(Math.random() * 10) },
        { skill: "flying kick", damage: 18 + Math.floor(Math.random() * 10) },
        { skill: "dragon punch", damage: 30 + Math.floor(Math.random() * 10) },
      ],
      attack(target) {
        this.health <= 0
          ? console.log(`${this.name} is unable to attack. He is out!.`)
          : (() => {
              const attack =
                this.attacks[Math.floor(Math.random() * this.attacks.length)];
              target.health -= attack.damage;
              console.log(
                `${this.name} attacked ${target.name} with a ${attack.skill}, inflicting ${attack.damage} damage. ${target.name}'s health is now ${target.health}.`
              );
            })();
      },
      taunt() {
        if (this.health <= 50 && this.health >= 35) {
          return this.name === "Ryu"
            ? `*Clearly shaken up from that last blow, Ryu looks at his opponent and shouts:* \n "I'm not done with you yet, KEN!"`
            : `*Getting up from the floor, bloody and still defiant, he yells:* \n "HA! I can still defeat you RYU!"`;
        } else {
          return "";
        }
      },
    };
  }
  
  const ryu = createCharacter("Ryu", 100);
  const ken = createCharacter("Ken", 100);
  
  while (ryu.health > 0 && ken.health > 0) {
    ryu.attack(ken);
    console.log(ken.taunt());
    ken.attack(ryu);
    console.log(ryu.taunt());
  }
  
  const winner =
    ryu.health <= 0 && ken.health <= 0
      ? "It's a tie!"
      : ryu.health <= 0
      ? `${ken.name} wins!`
      : `${ryu.name} wins!`;
  
  console.log(winner);