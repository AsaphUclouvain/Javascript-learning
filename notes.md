alert('text') to pop up text
` ` to write moultiple lines texts
${x+y} for interpolation

VARIABLES :
Naming ConventionS:

camilCase: cartQuantity
PascalCase: CartQuantity
kebab-case: cart-quantity // don't works in javascript
snake_case: cart_qunatity 

Nan not a number

=== equal
!== not equal

&& and operator
|| or operator
! not operator

scope are variables created in curly brackets/braces;


we can access variables with dot notation or brackets notations like dictionnaries in python

###JSON : Javascript Object Notation

    json doesn't support single quotes, always dubles quotes

    json doesn't support functions

    json can be understood by all others programming languages

    we use json to send data between computers

    we use json to store data

##localStorage allows us to store data string localy:

we can convert our data to string using json.stringify the store it using localStorage.setItem(<data>)

we can get data from localStorage using localStorage.getItem(<data>) , the convert it to json form at using json.parse(<data>) if data is in json format.




##Shortcuts

_destructuring:

_Shortand property

_Shortand method
##Shorthand Method


##USing media Query:

the media type:
-screen: we considere the device's width;
-speech:we considere the 
-all: anyways;



Advanced functions:

    _functions are values like 
    _forEach like map in python
    _return in a for for loop do the same thing as continue
    _closure:
        If a function has access to a value:
        +--> It will always have access to that value
        +--> Value gets packaged together (enclosed) with the function




















































The respojnsive is the usage of :
-flex-box
_layout : where to put each element of hte web site
_media_query


Fluid layout :
_width is in percentage
_Text scroll down when zoom in or zoom out 
_Depend of the screen size
_Horizontal Scroll will never come on any screen unless anyu fixed content is inside

NB: with fluid layout, the height is automaticly fixed

Relatives length units:

_em : is based on the current font-size (The font-size choosen)
_ex : Rarely used in practice. May be used to size inline images to fit the x-height of the current font for visual harmony
_rem =>  root em: 4rem multiply the root size by four
_vw : Is 1/100 of the whidth of the viewport
_vh : is 1/100 of the height of the viewport
_vmax;
_vmin;

Absolute Units:
_cm;
_mm;
_in : 1inch = 96px = 2.54 cm ;
_pc : 1/6 inch;
_pt : 1/72 inch;
_px;


Percentage Units:
_Refre the the container size;



Rules for Responsive Design:
_fluid images: max-width: 100/100, This ensures images will fill their parent element ;
_fluid Grid: width = target / context, to ensure they scale appropriately ;
_Media Queries to create breakpoints ;


##HTML structure

##CSS reset :
_css which make that your web site style don't be overriden by default browsers styles;
_the CSS Reset style sheet should always go first, when we call styles in the html file.
Exple:
    <link rel="stylesheet" href="reset.css" media="screen" />
    <link rel="stylesheet" href="styles.css" media="screen" />
_the Meyer's reset code is better


##CSS:

_list-style-type: none; cant replace display: inline-block for ul or ol element



##Media types:
_All : all media type devices(also the default media-type)
_print: for printers
_screen : for compputer screens, tablets, smart-phones....
_speech : for screenreaders that "reads" the page out loud

##media query syntax:
_@media type and (feature)

##features can be:
_orientation:landscape/portrait
_min-width
_max-width

NB: _media features can be combined with and, or and not
    _we can hide content with display: none
    _the img attribute srcset is used for responsive image that fit to pecific screen's size



References :
_responsive navigation-bar: 114-120, 130 - 132
_responsive footer: 124 - 127
_responsive paragraph : 127 - 129 


###Responsive using before and after:
_



###frameworks for responsiveness:
_Bootstrap;
_Foundation;
_Semantic UI;

###Aspects of web performances :
    _loading :  refers to the time it takes for the web page's resources, such as images, CSS, and JavaScript, to download from the server
    _rendering : refers to the time it takes for the browser to display the
    web page on the user's screen.

    ##Tools to compress images :
    _ImageOptim
    _TinyPNG

    ##Compress CSS and Javascript files:
    _Google's Closure Compiler 
    _YUI Compressor

    ##Optimze request response:
    _Usage of CDN (content delivery network) improve loading time and latency
        CDN :  improve performance by delivering your website's resources from servers that are closer to your users

    ##reduce the number of user's requests to the server:
    _Usage of caching plugin: store static resources, such as images and CSS files, in the user's browser
    
    ##Test the website on differents divices:
    
    ##Optimize code:
    _code miniifer to remove unnecessary white space and comments, and reduce the files size;
    _code optimizer to analyze your code and identify areas where it can be optimized for performance;


    ##Optimize http requests:
    _combine all the css file into one reduce the numbers of http requests;
    _Use lazy loading technique: It is a technique where images and others ressources are loaded when the are needed; 
        Exple: p 173
    _using a CDN;
        Exple: p 173




