(function(win,doc){

	'use strict';

	var username = prompt('Qual seu nome?') || 'Desconhecido';
	
	// if( !username )
		// username = 'Desconhecido';

	var email = prompt( 'Qual seu e-mail?' );	

	alert('Bem vindo ' + username + '!');

	var $inputUsername = doc.querySelector('input[type="text"]');

	var $inputEmail = doc.querySelector('input[type="email"]');

	var $message = doc.querySelector('textarea');

	var $button = doc.querySelector('button');

	$inputUsername.value = username;
	$inputEmail.value = email;

	$button.addEventListener('click',function(e){
		e.preventDefault();
		// alert('Buhh')
		if(!$inputUsername.value)
			return alert('Preencha o nome de usuário!');
		if(!$inputEmail.value)
			return alert('Preencha o e-mail!');
		if(!isValidEmail( $inputEmail.value ) )
			return alert('E-mail inválido!');
		if(!$message.value)
			return alert('Preencha a mensagem!');
	
		if(!confirm('Tem certeza que deseja enviar o formulário?'))
			return alert('Não enviado.');
		return 'Enviado com sucesso!';

	},false);


	// meu.email+categoria@gmail.com
	// juca_malandro@bol.com.br 
	// pedrobala@hotmail.com.uy
	// sandro@culinaria.dahora

	// walter-da-silva@maraca.br
	// rita-marica@titica.a.b
	// agua_@evida.br.com

	function isValidEmail(email){
		return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test( email );
	}
})(window, document);