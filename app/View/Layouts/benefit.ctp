<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
	<head>
		<?php echo $this->Html->charset(); ?>
		<title>
			<?php echo $cakeDescription ?>:
			<?php echo $this->fetch('title'); ?>
		</title>
		<?php
			echo $this->Html->meta(array('http-equiv' => 'X-UA-Compatible', 'content' => 'IE=edge'));
			echo $this->Html->meta(array('name' => 'viewport', 'content' => 'width=device-width, initial-scale=1'));
			echo $this->Html->meta(array('name' => 'author', 'content' => ''));
			echo $this->Html->meta('icon');
			
			echo $this->Html->css('/bootstrap/css/bootstrap.min');

			echo $this->Html->script(array('jquery-1.11.2.min.js', '/bootstrap/js/bootstrap.min'));

			echo $this->fetch('meta');
			echo $this->fetch('css');
			echo $this->fetch('script');
		?>
	    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
	    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
	    <!--<script src="../../assets/js/ie-emulation-modes-warning.js"></script>-->

	    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->
	</head>
	<body>
		<?php echo $this->Session->flash(); ?>
		<?php echo $this->fetch('content'); ?>
	</body>
</html>


