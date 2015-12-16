Welcome ACC APP Framework - Bristol Ver 2.0
-------------------
This is a library of modular styles powered by the framework of Zurb Foundation. This design was implemented for ACC Apps Construction. It is responsive and can be scaled up and down for the needs of the UI that is needed. Things to note this library is built with Sass to give the greatest flexablity for ACC App Builds. 

## Concept
This library is built with some exposed modifiers and a collection of UI designed components that can be included or not included. To reduce inproper cascades in CSS the Sass inlcudes and folder structure has been broken into these layers

1. __base__ - any file that deals with varables, fonts and basic typography (raw tags).
2. __helpers__ or 'required.scss ' - Mostly mixens but some files that have "required" in the name are needed for other files to functions. any file that have been named with "trump" will
3. __components__ - any combination of DOM elements that make up a widget, nav, or collection of tags.
4. __vendor__ - Any included style from a javascript or framework that needs an override to be inline with ACC standards.
5. __structure__ - Non-Styling Pure Page Layout Code.  Balanced Columns, Sidebars, Page Spacing etc...
6. __views__ - Overrides of components when in specific cases of the page or theme they are in. Like Sidebar Box on the Home page would be "_home.sidebarbox.scss"
7. __trumps__ or '.trump.scss' - utility classes that have either high specificty or should override other uses of the same style in earlier stylesheets.  

As you travel down the structure of the main document the included stylesheets should increase there specificty. 


### Expansion
Most alteration to the code can be done through "non-core" inclusion of styles. Please use the mirrored folder structure to allow of review and understanding of what level of specificty should be used in the document. 

#### Product Color and Branding
In the main style sheet there are some exposed variables to alter the skin of the style.  One of th most cosmetic is product color and branding. The variable "$product-brand-color" takes a hex color and will change elements of the ui to this color away from the ACC blues. "$brand-level" throttles the amount of color.   0 min-value  will not include and product color and 3 the max will bring in the most. 


### Path and File Naming:
_non-core/{type of style}/{product name}/{overide name or new UI name}.scss  

#### Usage
coming soon


#### Products that Use the Design
http://tools.acc.org/StatinIntolerance/#!/


#### Style Guide w/ HTML Examples
http://tools.acc.org/AppStyleGuide/
