<?php

	$data = $_REQUEST["data"];
	setcookie("MR_ABATI", $data, (time() + (84600 * 366)), "/"); 
	echo "success";
?>