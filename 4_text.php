<?php

/* 
 * Author Lamhot JM Siagian
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$newstring = "Here a string contain two space  next!";

/*if find string more than 2 space will be  replace with ""*/
$output = preg_replace('/\s+/', ' ',$newstring);
echo "Result Deleting: ". $output ;
