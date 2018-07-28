//Gun Fire script for our first person shooter game


//Update Function
function Update(){
	if(Input.GetButtonDown("Fire1")){
		var gunsound : AudioSource = GetComponent.<AudioSource>();
		gunsound.Play();
		GetComponent.<Animation>().Play("Gunshot");
	}
}


function Start(){

}