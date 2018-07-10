function toon_prompt()
{
var uNaam = prompt ("Voer je naam in:")
	Ucode = prompt ("Voer je code in")
	UEmailadres = prompt ("Voer je email adres in");



if (Ucode==123)
  {
  document.write("Hallo "+uNaam + "! Welkom, de ingevulde code klopt!");
  }
else 
  document.write("Hallo "+uNaam + "! Welkom, de ingevulde code klopt helaas niet");
}