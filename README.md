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
                    "validator": [
                            {
                           		"type": "mandatory",
                            		"textError": "texto mandatory"
                            }
                        ]
                    ]
        
        let dic2  = ["key": "a2",
                    "type": "text" as AnyObject,
                    "label": "Titulo de la celda 2",
                    "validator": "email",
                    "validator": [
                            {
                           		"type": "mandatory",
                            		"textError": "texto mandatory"
                            },
					            {
					                "type": "email",
					                "textError": "Texto error email"
					            }
                        ]
                    ]
        
        let formulary = Formulary.shared
        formulary.start(self.view, listItems: [dic1, dic2])

```
 

### Formato del JSON ###
* Celdas tipo texto:

```
#!Javascript
{ 
 "fields":[
    {
        "key": "clave1",
        "type": "text",
        "label": "titulo",
        "mandatory": true,
        "isEditing": true,
        "isHidden": true,
        "placeHolder": "texto fondo",
        "keyboard": "FormKeyboardTypeText",
        "isPassword": true,
        "textErrorCompare": "Texto Error comparar",
        "style": {
            "backgroundColorField": "#4874ff",
            "titleColor": "#64ff66",
            "errorColor": "#ffa17d",
            "sizeTitle": 12,
            "sizeError": 14,
            "align": "alignCenter",
            "font": "AppleSDGothicNeo-Thin",
            "mandatoryIcon": "imagen"
        },
        "validator": [
            {
                "type": "mandatory",
                "textError": "Texto error obligatorio"
            },
            {
                "type": "lengthText",
                "textError": "Texto error long",
                "minLength": "2",
                "maxLength": "12"
            },
            {
                "type": "compare",
                "textError": "Texto error comparador",
                "itemsCompare": [
                    "key1",
                    "key2"
                ]
            }
        ]
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
        "isEditing": true,
        "isHidden": true,
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
        },
        "validator": [
            {
                "type": "mandatory",
                "textError": "Texto error obligatorio"
            }
        ]
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
        "isEditing": true,
        "isHidden": true,
        "textAcceptButton": "titulo aceptar",
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
        },
        "validator": [
            {
                "type": "age",
                "textError": "Texto error age",
                "minAge": "18"
            }
        ]
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
        "isEditing": true,
        "isHidden": true,
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
        },
        "validator": [
            {
                "type": "bool",
                "textError": "Text error bool"
            }
        ]
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

### Cargar estilo de celda ###
Existen 3 tipos de estilos de vista.

* Por defecto
* De linea
* Custom

Para añadirse se hara de la siguiente forma:

```
#!Javascript
{ 
 "fields":[
    	{
        "key": "clave",
        "type": "index",
        "label": "titulo ",        
        "style": {
             "styleCell": "line",
        }
    	}
	] 
}

```

En el caso de las celdas de tupo custom, tendrá un segundo campo llamado nameXib:

```
#!Javascript
 
"style": {
     "styleCell": "custom",
     "nameXib": String name Xib
}

```

El nombre correspondera con el xib que tengais en la aplicación integradora.
A la hora de enlazar debeis poner vuestro File's Owner con el tipo de la clase que quereis elegir:

* TextFormField
* PickerFormField
* BooleanFormField
* ExpandableBooleanFormField
* IndexFormField 

Una vez elegido la clase, debemo desde el storyboard con el "Assistant editor" enlazar con todos los IBOutlet.

Por último, cuando se cargan xib externos, es obligatorio usar el constructor que inyecta el bundle y enviar el bundle de la aplicación integradora (Bundle.main).

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
> + age
> + compare
> + mandatory
> - customValidator

* validatos with extra fields:
>> lengthText:  "minLength": String or "maxLength": String or both
>> 
>> compare: "itemsCompare": [
                    String Key 1,
                    String key 2
                ]
>>             
>> customValidator: customValidator: String regex
>> 
>> age: "minAge": int or String (int format)

* Ejemplo de validador estandar:
>  "validator": [
            {
                "type": "mandatory",
                "textError": "Texto error obligatorio"
            }
  ]
  
* Ejmplo de validador con extra fields:
> "validator": [
            {
                "type": "lengthText",
                "textError": "Texto error",
                "minLength": "2",
                "maxLength": "12"
            },
    ]    
>   "validator": [         {
                "type": "compare",
                "textError": "Texto error",
                "itemsCompare": [
                    "key1",
                    "key2"
                ]
            }
        ]
            

## Constructores ##

Existen 4 modelos de constructores segun lo que se necesite:

**1)** Si se usa el primer sistema de construir el formulario en el que se controla todas las vistas, se usara uno de estos 2 sistemas:

```
#!swift
open func start(_ viewContainerFormulary: UIView, jsonFile: String)
open func start(_ viewContainerFormulary: UIView, listItems: [[String: AnyObject]])

optional constructor:
**Cargar un bundle externo:**
open func start(_ viewContainerFormulary: UIView, jsonFile: String, bundle: Bundle)
open func start(_ viewContainerFormulary: UIView, listItems: [[String: AnyObject]], bundle: Bundle)
```



**2)** Si se usa el segundo sistema, donde el GIGFormulary devuelve una vista con todas las celdas, se usara uno de estos 2 sistemas:

```
#!swift
open func start(_ button: UIButton, jsonFile: String) -> UIView
open func start(_ button: UIButton, listItems: [[String: AnyObject]]) -> UIView

optional constructor:
**Cargar un bundle externo:**
open func start(_ button: UIButton, jsonFile: String, bundle: Bundle) -> UIView
open func start(_ button: UIButton, listItems: [[String: AnyObject]], bundle: Bundle) -> UIView
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
        //Optional:
		 //**Cargar un bundle externo:**
        //formulary.start(self.view, jsonFile: "json_formulary.json", bundle: Bundle.main)
         formulary.delegate = self
    
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [AnyHashable : Any]) {
         
    } 
    // OPTIONAL
    func userDidTapLink(_ key: String) {
        
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
        let dic1:[String: AnyObject] = ["key": "a1",
                    "type": "text",
                    "label": "validador sin",
                    "mandatory": true]
        
        let dic2:[String: AnyObject]  = ["key": "a2",
                    "type": "text",
                    "label": "validador email",
                    "validator": "email",
                    "mandatory": true]
        
        let dic3:[String: AnyObject]  = ["key": "a3",
                    "type": "text",
                    "label": "validador custom",
                    "validator": "customValidator",
                    "customValidator": "^([0-9])+$",
                    "mandatory": true]
        
        let style:[String: AnyObject] = ["sizeTitle": 30 as CGFloat]
        let dic4:[String: AnyObject] = ["key" : "key",
                   "label": "label",
                   "type" : "index",
                   "style": style]
 
        let formulary = Formulary.shared
        formulary.start(self.view, listItems: [dic1, dic2, dic4 ,dic3])
        formulary.delegate = self   
         
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [AnyHashable : Any]) {
         
    } 
    
    // OPTIONAL
    func userDidTapLink(_ key: String) {
        
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
        gig_layout_fit_horizontal(viewContainterForm)
        gig_constrain_width(viewContainterForm, UIScreen.main.bounds.size.width)
        gig_layout_top(viewContainterForm, 0)
        gig_layout_bottom(viewContainterForm, 0)
    }
     
    // MARK: PFormController
     
    func recoverFormModel(_ formValues: [AnyHashable : Any]) {
         
    }
}
```

## Métodos públicos ##

Además de los contructores, el sdk dispone de varios metodos.

**Rellenado de datos:**

```
#!swift
let dic = ["key1":"eduardo"]
self.formulary.populateData(dic)

ó através del propio json, con la clave "value":

{ 
 "fields":[
    {
        "key": "clave1",
        "type": "text",
        "label": "tipoTexto",
        "value": "Texto rellenado"
    },
    {
        "key": "clave2",
        "type": "picker",
        "label": "tipoPicker",
        "listOptions": [
            {
                "key": "KeyNoSelected",
                "value": "valorA"
            },
            {
                "key": "clave0",
                "value": "valorB"
            },
            {
                "key": "clave1",
                "value": "valorC"
            }
        ],
        "value": "clave0"
    },
    {
        "key": "clave3",
        "type": "datePicker",
        "label": "tipoDatePicker",
        "value": "20/01/2017"
    },
    {
        "key": "clave4",
        "type": "boolean",
        "label": "tipoBoolean",
        "value": true        
    }
] 
}

```

**Carga de errores de cada celda:**

```
#!swift
let dic = ["key1":"Ha ocurrido un error en los datos"]
self.formulary.loadError(dic)
```

**Borrar notificationCenter para las notificaciones del keyboard:**

```
#!swift
self.formulary.clearFormulary()
```


## Métodos delegados ##

Solamente el metodo de recuperar formulario es obligatorio, pero existen 3 métodos más.

**Recuperar formulario:**

```
#!swift
func recoverFormModel(_ formValues: [AnyHashable : Any]) {}
```

**Obtener la clave del link pulsado:**

```
#!swift
func userDidTapLink(_ key: String) {}
```

**Obtener la posicion y clave del elemento pulsado:**

```
#!swift
func fieldFocus(frame: CGRect, key: String?) {}
```

**Informa que ha fallado la validación del formulario:**

```
#!swift
func invalidForm() {}
```

## Opciones especiales ##

Los claves "label" de las celda tipo "Boolean" e "Index", tienen la propiedad de intruducir links en ellos. Para esto, el texto debe tener la siguiente estructura:

```
#!swift
{
    "fields":[
              {
              "key": "clave1",
              "type": "boolean",
              "label": "Esto es un {* link *}, pulsalo"
              },
              {
              "key": "clave2",
              "type": "index",
              "label": "Esto es un {* link *}, pulsalo"
              }
        ]
}

```

Para detectar que se ha pulsado, deberas escuchar el delegado:

```
#!swift
func userDidTapLink(_ key: String) {}
```