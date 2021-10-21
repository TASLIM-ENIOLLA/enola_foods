<?php

	function filterInput($var){
        global $connect;
        $var = trim($var);
        $var = htmlspecialchars($var);
        $var = stripslashes($var);
        $var = strip_tags($var);
        $var = mysqli_real_escape_string($connect, $var);
        $var = strtolower($var);
        return $var;
    }
    
    function forbiddenChars($string, $type = null){
        if($type == "username" || $type == null){
            return preg_match("/[^0-9a-zA-Z_\/]/", $string);
        }
        elseif($type == "password"){
            return preg_match("/[^0-9a-zA-Z_]/", $string);
        }
    }

    function randomTextGen($no_of_chars){
        $rr = '';
        for($x = 0; strlen($rr) < $no_of_chars; $x++){
            $re = mt_rand(48, 90);
            if($re < 58 || $re > 64){
                $re = dechex($re);
                $re = pack("H*", $re);
                $rr .= $re;
            }
        }
        $rr = strtolower($rr);
        return $rr;
    }

    function checkForUSER_IDOccurenceOnDB(){
        global $connect;
        $user_id = strtoupper("CRU" . randomTextGen(3));
        $query = mysqli_query($connect, "SELECT COUNT(*) FROM user_log WHERE user_id = '$user_id'");
        if($query){
            $res = mysqli_fetch_array($query)[0];
            if($res > 0){
                checkForUSER_IDOccurenceOnDB();
            }
            else{
                return $user_id;
            }
        }
    }
    function checkForEMAILOccurenceOnDB($email){
        global $connect;
        $query = mysqli_query($connect, "SELECT COUNT(*) FROM user_log WHERE email = '$email'");
        if($query){
            $res = mysqli_fetch_array($query)[0];
            if($res > 0){
                return true;
            }
            else{
                return false;
            }
        }
    }

?>