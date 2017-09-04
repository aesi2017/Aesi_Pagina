<?php
class Ingreso_Controller{


	function hola (){
        
        
		$tpl = new TemplatePower("template/home_1.html");
		$tpl->prepare();
		
		return $tpl->getOutputContent();

	}

	function comision (){
        
        
		$tpl = new TemplatePower("template/comision.html");
		$tpl->prepare();
		
		return $tpl->getOutputContent();

	}

	function eventos (){
        
        
		$tpl = new TemplatePower("template/eventos.html");
		$tpl->prepare();
		
		return $tpl->getOutputContent();

	}

	function blog (){
        
        
		$tpl = new TemplatePower("template/blog.html");
		$tpl->prepare();
		
		return $tpl->getOutputContent();

	}

	
	function menu_bar ($seccion){
        
        $active = "class='active'";
		$tpl = new TemplatePower("template/menu_bar.html");
		$tpl->prepare();
		if ($seccion == "Ingreso::comision") {
			$tpl->newBlock("select");        
	   		$tpl->assign("select_comision", $active);
		}
		if ($seccion == "Ingreso::hola") {
			$tpl->newBlock("select");        
	   		$tpl->assign("select_hola", $active);
		}
		if ($seccion == "Ingreso::eventos") {
			$tpl->newBlock("select");        
	   		$tpl->assign("select_eventos", $active);
		}
		if ($seccion == "Ingreso::blog") {
			$tpl->newBlock("select");        
	   		$tpl->assign("select_blog", $active);
		}		
		return $tpl->getOutputContent();

	}

}
?>