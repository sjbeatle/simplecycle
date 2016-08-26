<?php
	$name = $_POST['name'];
	$file = fopen("../data/current.json","w");

	if(fwrite($file,'["'.$name.'"]')) {
		print $name;
	} else {
		print "error!";
	}

	fclose($file);
?>
