var log = console.log;

(function(){

	function Person( name, lastName, age ){

		this.name = name;
		this.lastName = lastName;
		this.age = age;

		this.getFullName = function getFullName(){
			return this.name + ' ' + this.lastName;
		};

		this.getAge = function getAge(){
			return this.age;
		};

		this.addAge = function addAge(){
			this.age += arguments[0];
 			return this;//Representa o objeto. Retorna o proprio objeto.
 		}

 	}

 	log('Novas pessoas criadas à partir de Person:');

 	var fernando = new Person('Caio','Dellano',34);
 	var joao = new Person('João','Felipe',25);
 	var maria = new Person('Maria','Eduarda',28);

 	log(fernando);
 	log(joao);
 	log(maria);

 	log('Nomes da pessoas:');

 	log( fernando.getFullName() );
 	log( joao.getFullName() );
 	log( maria.getFullName() );

 	log('\nIdade das pessoas:');

 	log(fernando.getFullName() + ' tem ' + fernando.getAge() + ' anos.');
 	log(joao.getFullName() + ' tem ' + joao.getAge() + ' anos.');
 	log(maria.getFullName() + ' tem ' + maria.getAge() + ' anos.');

 	log('\nNova idade das pessoas:');
 	// fernando.addAge(0);
 	log( fernando.getFullName() + ' agora tem ' + fernando.addAge(-2).getAge() + ' anos.'   );
 	log( joao.getFullName() + ' agora tem ' + joao.addAge(2).getAge() + ' anos.'   );
 	log( maria.getFullName() + ' agora tem ' + maria.addAge(2).getAge() + ' anos.'   );

 })();