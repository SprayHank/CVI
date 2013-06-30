<?php
/**
 * imgproxy.php 1.02 (19-Jan-2006) (c) by Christian Effenberger 
 * Distributed under the 3 General Public License Agreements.
 * This program is free software: you can redistribute it and/or 
 * modify it under the terms of the GNU General Public License or 
 * GNU Lesser General Public License or GNU Affero General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the Licenses, or (at your option) any later versions.
 * This program is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 *
 * syntax: imgproxy.php?url=path_and_file.suffix
**/
$pic=isset($_POST['url'])?$_POST['url']:isset($_GET['url'])?$_GET['url']:false;
if($pic!==false) {
	$tmp=getimagesize($pic); $typ=$tmp["mime"];
	if(preg_match("/image\/gif|image\/jpeg|image\/png/i",$typ)) {
		$bin=file_get_contents($pic);
		if($bin!==false) {
			header('Content-Type: '.$typ);
			echo($bin);
		}
	}
}exit;
?>