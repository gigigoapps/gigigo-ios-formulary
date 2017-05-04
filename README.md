# gigigo-ios-formulary
# README #

Como usar GIGFormulary

### Herramientas ###

* Framework
* Herramienta web (Constructor de formalarios)

### Herramienta web ###

* Localizacion
>Una vez descargado el repositorio, en la raiz podremos encontrar la carpeta **WebFormulary**, dentro se encontrara el archivo index.html, donde podremos generar nuestros formularios en formato JSON.
* Opciones del json
>No todos los campos son obligatorios para la construccion de las celdas, por ello no hace falta enviar los json completos, desde la web podemos visualizar los campos obligatorios segun el tipo de celda.

### Formato Diccionario ###
*  Contrucción:
> A continuación en la seccion de **Formato del JSON**, se definen todas las posibles clave-valor que se descompone el GIGFormulary, no son obligatorias usar todas las opciones.
> Si se requiere en vez de un JSON, mandar un listado de diccionarios, se define de la siguiente manera:

```
#!swift
        let dic1 = ["key": "a1",
                    "type": "text",
                    "label": "Titulo de la celda 1",
                    "mandatory": true]
        
        let dic2  = ["key": "a2",
                    "type": "text" as AnyObject,
                    "label": "Titulo de la celda 2",
                    "validator": "email",
                    "mandatory": true]
        
        let dic3  = ["key": "a3",
                    "type": "text",
                    "label": "Titulo de la celda 3",
                    "validator": "customValidator",
                    "customValidator": "^([0-9])+$",
                    "mandatory": true]
        
        let formulary = Formulary.shared
        formulary.start(self.view, listItems: [dic1, dic2, dic3])

```
 

### Formato del JSON ###
* Celdas tipo texto:

```
#!Javascript
{ 
 "fields":[
    {
        "key": "clave",
        "type": "text",
        "label": "titulo ",
        "mandatory": true,
        "textError": "texto error",
        "placeHolder": "placeHolder",
        "minLength": 5,
        "maxLength": 12,
        "keyboard": "FormKeyboardTypeText",
        "validator": "email",
        "isPassword": true,
        "style": {
            "backgroundColorField": "#2698ff",
            "titleColor": "#44ff3c",
            "errorColor": "#ff4958",
            "sizeTitle": 30,
            "sizeError": 25,
            "align": "alignCenter",
            "font": "AmericanTypewriter-CondensedLight",
            "mandatoryIcon": "imagen"
        }
    }
] 
}

```


* Celdas tipo Picker

```
#!javascript
{ 
 "fields":[
    {
        "key": "clave",
        "type": "picker",
        "label": "titulo",
        "listOptions": [
            {
                "key": "KeyNoSelected",
                "value": "Seleccione un valor"
            },
            {
                "key": "clave0",
                "value": "valor 0"
            }
        ],
        "mandatory": true,
        "textError": "texto error",
        "textAcceptButton": "boton aceptar",
        "style": {
            "backgroundColorField": "#7fff99",
            "titleColor": "#4cffec",
            "errorColor": "#ff2861",
            "sizeTitle": 23,
            "sizeError": 13,
            "acceptColorPicker": "#e9ffb8",
            "containerAcceptColorPicker": "#64ff8a",
            "backgroundPickerColorPicker": "#8719ff",
            "align": "alignLeft",
            "font": "AvenirNext-Heavy",
            "mandatoryIcon": "imagen"
        }
    }
] 
}

```



* Celdas tupo DatePicker

```
#!javascript
{ 
 "fields":[
    {
        "key": "clave",
        "type": "datePicker",
        "label": "titulo",
        "mandatory": true,
        "textError": "texto error",
        "textAcceptButton": "titulo aceptar",
        "minAge": 18,
        "validator": "age",
        "style": {
            "backgroundColorField": "#95ff8e",
            "titleColor": "#38deff",
            "errorColor": "#ff54ef",
            "sizeTitle": 20,
            "sizeError": 15,
            "acceptColorPicker": "#fffd15",
            "containerAcceptColorPicker": "#beffd1",
            "backgroundPickerColorPicker": "#ff4f2c",
            "align": "alignRight",
            "font": "AlNile-Bold",
            "mandatoryIcon": "imagen"
        }
    }
] 
}
```


* Celdas tipo Booleana

```
#!javascript
{ 
 "fields":[
    {
        "key": "clave",
        "type": "boolean",
        "label": "titulo",
        "mandatory": true,
        "textError": "texto error",
        "validator": "bool",
        "style": {
            "backgroundColorField": "#94ff95",
            "titleColor": "#ff697c",
            "errorColor": "#a2d5ff",
            "sizeTitle": 22,
            "sizeError": 11,
            "align": "alignLeft",
            "font": "AcademyEngravedLetPlain",
            "mandatoryIcon": "imagen",
            "checkBox": {
                "checkBoxOn": "imagenCheck",
                "checkBoxOff": "imagenCheckOff"
            }
        }
    }
] 
}
```
* Celdas tipo Indice:

```
#!Javascript
{ 
 "fields":[
    {
        "key": "clave",
        "type": "index",
        "label": "titulo ",        
        "style": {
            "backgroundColorField": "#2698ff",
            "titleColor": "#44ff3c",
            "sizeTitle": 30,
            "align": "alignCenter",
            "font": "AmericanTypewriter-CondensedLight"
        }
    }
] 
}

```

### Tipos de campos ###
Todas las posibles, Clave-Valor

* keyboard: 
 >* FormKeyboardTypeText
 >+ FormKeyboardTypeEmail
 >- FormKeyboardTypeNumbers
 >* FormKeyboardTypeNumberPad

* validator:
> * None
> + text
> - email
> * lengthText
> + numeric
> - postalCode
> * phone
> + dniNie
> - customValidator
>> Si se añade este validador, tiene como este este clave valor:  "customValidator": "Regex a añadir"


## Constructores ##

Existen 4 modelos de constructores segun lo que se necesite:

**1)** Si se usa el primer sistema de construir el formulario en el que se controla todas las vistas, se usara uno de estos 2 sistemas:

```
#!swift
open func start(_ viewContainerFormulary: UIView, jsonFile: String)
open func start(_ viewContainerFormulary: UIView, listItems: [[String: AnyObject]])

```



**2)** Si se usa el segundo sistema, donde el GIGFormulary devuelve una vista con todas las celdas, se usara uno de estos 2 sistemas:

```
#!swift
open func start(_ button: UIButton, jsonFile: String) -> UIView
open func start(_ button: UIButton, listItems: [[String: AnyObject]]) -> UIView
```


## Ejemplos ##

A continuación 3 ejemplos a la hora de construir el formulario, igualmente se recomienda mejor ver la demoApp dentro del repositorio de GIGFormulary:





**Ejemplo1:**
```
#!swift
import UIKit
import GIGFormulary
 
class ViewController: UIViewController, PFormulary {
     
    override func viewDidLoad() {
        super.viewDidLoad()
                 
        //-- Create form Type with JSON --      
         let formulary = Formulary.shared
         formulary.start(self.view, jsonFile: "json_formulary.json")
         formulary.delegate = self
    
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [String : AnyObject]) {
         
    }
}



```

**Ejemplo2:**
```
#!swift
import UIKit
import GIGFormulary
 
class ViewController: UIViewController, PFormulary {
     
    override func viewDidLoad() {
        super.viewDidLoad()
 
        //-- Create form Type with Array Dic --
        let dic1:[String: AnyObject] = ["key": "a1" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador sin" as AnyObject,
                    "mandatory": true as AnyObject]
         
        let dic2:[String: AnyObject]  = ["key": "a2" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador email" as AnyObject,
                    "validator": "email" as AnyObject,
                    "mandatory": true as AnyObject]
         
        let dic3:[String: AnyObject]  = ["key": "a3" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador custom" as AnyObject,
                    "validator": "customValidator" as AnyObject,
                    "customValidator": "^([0-9])+$" as AnyObject,
                    "mandatory": true as AnyObject]
         
        let style:[String: AnyObject] = ["sizeTitle": 30 as CGFloat as AnyObject] as [String : AnyObject]
        let dic4:[String: AnyObject] = ["key" : "key" as AnyObject,
                   "label": "label" as AnyObject,
                   "type" : "index" as AnyObject,
                   "style": style as AnyObject]
  
        let formulary = Formulary.shared
        formulary.start(self.view, listItems: [dic1, dic2, dic4 ,dic3])
        formulary.delegate = self       
         
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [String : AnyObject]) {
         
    }
}

```

**Ejemplo3:**
```
#!swift
import UIKit
import GIGFormulary
import GIGLibrary
 
class SecondTypeVC: UIViewController, PFormulary  {
     
    @IBOutlet var button: UIButton!
    @IBOutlet var scrollView: UIScrollView!
     
 
    override func viewDidLoad() {
        super.viewDidLoad()
         
        //-- Create form Type with JSON --
        let formulary = Formulary.shared
        let viewContainterForm = formulary.start(self.button, jsonFile: "json_formulary.json")
        formulary.delegate = self
 
        //-- Insert in view --
        self.scrollView.addSubview(viewContainterForm)
         
        //-- Autolayout --
        gig_autoresize(viewContainterForm, false)
        gig_layout_fit_horizontal(viewContainterForm);
        gig_constrain_width(viewContainterForm, UIScreen.main.bounds.size.width);
        gig_layout_top(viewContainterForm, 0);
        gig_layout_bottom(viewContainterForm, 0)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [String : AnyObject]) {
         
    }
}
```
