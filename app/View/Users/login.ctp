<?php
	$this->assign('css', $this->Html->css('/css/signin.css'));
?>

<div class="container">

  <?php echo $this->Form->create('User', array('class' => 'form-signin')); ?>
    <h2 class="form-signin-heading">Please sign in</h2>
    <label for="inputEmail" class="sr-only">Email address</label>
    <?php echo $this->Form->input('username', array('class' => 'form-control', 'placeholder' => 'username')); ?>
    <label for="inputPassword" class="sr-only">Password</label>
    <?php echo $this->Form->input('password', array('class' => 'form-control', 'placeholder' => 'password')); ?>
    <div class="checkbox">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
  <?php echo $this->Form->end(array('class' => 'btn btn-lg btn-primary btn-block', 'label' => 'sign in')); ?>

</div> <!-- /container -->


<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!--<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>-->
